import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:dio/dio.dart';
import 'supabase_service.dart';

class GeminiService {
  static final GeminiService _instance = GeminiService._internal();
  factory GeminiService() => _instance;
  GeminiService._internal();

  int _currentKeyIndex = 0;
  final List<String> _apiKeys = [];
  
  // Valid, actively supported Gemini models (2025-2026 stable)
  static const _modelFallbacks = [
    'gemini-3.5-flash',
    'gemini-3.5-flash-lite',
  ];
  int _currentModelIndex = 0;

  // In-memory query response cache (2 hours TTL)
  final Map<String, _CachedAiResponse> _responseCache = {};
  
  void initialize() {
    _apiKeys.clear();
    try {
      // Check for primary GEMINI_API_KEY or numbered keys
      final primaryKey = dotenv.env['GEMINI_API_KEY'];
      if (primaryKey != null && primaryKey.isNotEmpty && !primaryKey.contains('YOUR_') && primaryKey.length > 20) {
        _apiKeys.add(primaryKey.trim());
      }

      for (int i = 1; i <= 4; i++) {
        final key = dotenv.env['GEMINI_KEY_$i'];
        if (key != null && key.isNotEmpty && !key.contains('YOUR_') && key.length > 20 && !_apiKeys.contains(key.trim())) {
          _apiKeys.add(key.trim());
        }
      }
    } catch (e) {
      debugPrint('GeminiService: Dotenv load notice: $e');
    }

    debugPrint('GeminiService: Initialized with ${_apiKeys.length} client key(s)');
  }

  String get _currentModel => _modelFallbacks[_currentModelIndex % _modelFallbacks.length];

  String get currentApiKey {
    if (_apiKeys.isEmpty) initialize();
    return _apiKeys.isNotEmpty ? _apiKeys[_currentKeyIndex % _apiKeys.length] : '';
  }

  GenerativeModel getModel({String? modelName, String? systemPrompt}) {
    if (_apiKeys.isEmpty) initialize();
    
    final apiKey = _apiKeys.isNotEmpty ? _apiKeys[_currentKeyIndex % _apiKeys.length] : '';
    final model = modelName ?? _currentModel;
    final formattedModel = model.startsWith('models/') ? model : 'models/$model';
    
    return GenerativeModel(
      model: formattedModel,
      apiKey: apiKey,
      systemInstruction: systemPrompt != null ? Content.system(systemPrompt) : null,
      safetySettings: [
        SafetySetting(HarmCategory.harassment, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.hateSpeech, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.dangerousContent, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.sexuallyExplicit, HarmBlockThreshold.none),
      ],
    );
  }

  void rotateKey() {
    if (_apiKeys.length > 1) {
      _currentKeyIndex = (_currentKeyIndex + 1) % _apiKeys.length;
    }
  }

  void _rotateModel() {
    _currentModelIndex = (_currentModelIndex + 1) % _modelFallbacks.length;
  }

  /// High-level text generation:
  /// 1. Checks in-memory cache for instant zero-latency response.
  /// 2. Invokes secure Supabase Edge Function 'gemini-advisor' (server-side API key).
  /// 3. Falls back to direct client-side Gemini with max 2 retries and exponential backoff.
  /// 4. Falls back to Groq if configured and Gemini is rate-limited.
  Future<String> generateText(String prompt, {String? systemPrompt}) async {
    final cacheKey = '${prompt.trim().hashCode}_${systemPrompt?.trim().hashCode ?? 0}';

    // 1. Check local cache
    final cached = _responseCache[cacheKey];
    if (cached != null && !cached.isExpired) {
      debugPrint('GeminiService: Serving response from in-memory cache.');
      return cached.text;
    }

    // 2. Try Supabase Edge Function first (Best Security Practice)
    if (SupabaseService.isInitialized) {
      try {
        final client = SupabaseService.client;
        if (client != null) {
          final res = await client.functions.invoke(
            'gemini-advisor',
            body: {
              'action': 'generate_text',
              'prompt': prompt,
              'systemPrompt': systemPrompt,
              'model': _currentModel,
            },
          );

          if (res.status == 200 && res.data != null) {
            final text = res.data['text'] as String?;
            if (text != null && text.isNotEmpty) {
              _cacheResponse(cacheKey, text);
              return text;
            }
          }
        }
      } catch (edgeErr) {
        debugPrint('GeminiService: Edge function notice: $edgeErr. Falling back to client SDK.');
      }
    }

    // 3. Client-side SDK fallback with controlled retries (Max 2)
    try {
      final text = await runWithRetry((model) async {
        final response = await model.generateContent([Content.text(prompt)]);
        final t = response.text;
        if (t == null || t.trim().isEmpty) {
          throw Exception('Empty response from Gemini');
        }
        return t;
      }, systemPrompt: systemPrompt, retries: 2);

      _cacheResponse(cacheKey, text);
      return text;
    } catch (e) {
      debugPrint('Gemini client SDK failed: $e. Checking Groq fallback...');

      // 4. Try Groq fallback if configured
      final groqKey = dotenv.env['GROQ_API_KEY'];
      if (groqKey != null && groqKey.isNotEmpty && !groqKey.contains('YOUR_')) {
        try {
          final groqRes = await _callGroq(prompt, systemPrompt: systemPrompt, apiKey: groqKey);
          _cacheResponse(cacheKey, groqRes);
          return groqRes;
        } catch (groqErr) {
          debugPrint('Groq fallback error: $groqErr');
        }
      }

      // 5. Friendly user-facing fallback error
      if (e.toString().contains('429') || e.toString().contains('quota') || e.toString().contains('RESOURCE_EXHAUSTED')) {
        throw Exception('AI_BUSY: कृषी मित्र AI सल्लागार सध्या व्यस्त आहे (दैनिक मर्यादा गाठली). कृपया थोड्या वेळाने प्रयत्न करा किंवा ऑफलाइन माहिती तपासा.');
      }
      rethrow;
    }
  }

  /// Multimodal image + text generation (used by Crop Doctor)
  Future<String> generateMultimodal(Uint8List imageBytes, String prompt, {String? systemPrompt}) async {
    // 1. Try Supabase Edge Function
    if (SupabaseService.isInitialized) {
      try {
        final client = SupabaseService.client;
        if (client != null) {
          final base64Image = base64Encode(imageBytes);
          final res = await client.functions.invoke(
            'gemini-advisor',
            body: {
              'action': 'diagnose_crop',
              'prompt': prompt,
              'systemPrompt': systemPrompt,
              'imageBase64': base64Image,
              'mimeType': 'image/jpeg',
              'model': _currentModel,
            },
          );

          if (res.status == 200 && res.data != null) {
            final text = res.data['text'] as String?;
            if (text != null && text.isNotEmpty) {
              return text;
            }
          }
        }
      } catch (edgeErr) {
        debugPrint('GeminiService: Edge multimodal notice: $edgeErr');
      }
    }

    // 2. Client-side SDK fallback
    return await runWithRetry((model) async {
      final content = [
        Content('user', [
          DataPart('image/jpeg', imageBytes),
          TextPart(prompt),
        ])
      ];
      final response = await model.generateContent(content);
      final text = response.text;
      if (text == null || text.trim().isEmpty) {
        throw Exception('Empty response from Gemini vision');
      }
      return text;
    }, systemPrompt: systemPrompt, retries: 2);
  }

  Future<T> runWithRetry<T>(
    Future<T> Function(GenerativeModel model) task, {
    int retries = 2,
    String? systemPrompt,
  }) async {
    int attempts = 0;
    while (attempts < retries) {
      try {
        final model = getModel(systemPrompt: systemPrompt);
        return await task(model);
      } catch (e) {
        attempts++;
        final errorStr = e.toString();
        debugPrint('GeminiService: Attempt $attempts of $retries encountered: ${errorStr.length > 80 ? errorStr.substring(0, 80) : errorStr}...');

        if (errorStr.contains('SocketException') || errorStr.contains('network')) {
          if (attempts >= retries) throw Exception('OFFLINE: कृपया इंटरनेट कनेक्शन तपासा.');
          await Future.delayed(const Duration(seconds: 1));
        } else if (errorStr.contains('429') || errorStr.contains('quota') || errorStr.contains('RESOURCE_EXHAUSTED')) {
          rotateKey();
          if (attempts >= retries) {
            throw Exception('AI_QUOTA: दैनिक मोफत AI मर्यादा गाठली आहे.');
          }
          await Future.delayed(Duration(seconds: attempts));
        } else if (errorStr.contains('403') || errorStr.contains('API key not valid')) {
          rotateKey();
        } else {
          _rotateModel();
          if (attempts >= retries) rethrow;
          await Future.delayed(const Duration(milliseconds: 500));
        }
      }
    }
    throw Exception('AI_UNAVAILABLE: AI सल्लागार सध्या उपलब्ध नाही.');
  }

  void _cacheResponse(String key, String text) {
    _responseCache[key] = _CachedAiResponse(
      text: text,
      expiresAt: DateTime.now().add(const Duration(hours: 2)),
    );
  }

  Future<String> _callGroq(String prompt, {String? systemPrompt, required String apiKey}) async {
    final dio = Dio(BaseOptions(
      connectTimeout: const Duration(seconds: 12),
      receiveTimeout: const Duration(seconds: 15),
    ));
    final res = await dio.post(
      'https://api.groq.com/openai/v1/chat/completions',
      options: Options(headers: {
        'Authorization': 'Bearer $apiKey',
        'Content-Type': 'application/json',
      }),
      data: {
        'model': 'qwen/qwen3.8-27b',
        'messages': [
          if (systemPrompt != null) {'role': 'system', 'content': systemPrompt},
          {'role': 'user', 'content': prompt},
        ],
        'temperature': 0.5,
      },
    );
    return res.data['choices'][0]['message']['content'] as String;
  }
}

class _CachedAiResponse {
  final String text;
  final DateTime expiresAt;

  _CachedAiResponse({required this.text, required this.expiresAt});

  bool get isExpired => DateTime.now().isAfter(expiresAt);
}
