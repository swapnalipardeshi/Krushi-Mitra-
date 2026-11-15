import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:dio/dio.dart';

class GeminiService {
  static final GeminiService _instance = GeminiService._internal();
  factory GeminiService() => _instance;
  GeminiService._internal();

  int _currentKeyIndex = 0;
  final List<String> _apiKeys = [];

  // Actively supported, high-speed Gemini models (2025-2026 stable)
  static const _modelFallbacks = [
    'gemini-2.5-flash',
    'gemini-2.5-pro',
    'gemini-1.5-flash',
  ];
  int _currentModelIndex = 0;

  // In-memory query response cache (2 hours TTL)
  final Map<String, _CachedAiResponse> _responseCache = {};

  void initialize() {
    _apiKeys.clear();
    try {
      // Prioritize Key 2 (active multimodal quota)
      final k2 = dotenv.env['GEMINI_KEY_2'];
      if (k2 != null && k2.isNotEmpty && !k2.contains('YOUR_') && k2.length > 20) {
        _apiKeys.add(k2.trim());
      }
      final k1 = dotenv.env['GEMINI_KEY_1'];
      if (k1 != null && k1.isNotEmpty && !k1.contains('YOUR_') && k1.length > 20 && !_apiKeys.contains(k1.trim())) {
        _apiKeys.add(k1.trim());
      }
      final primaryKey = dotenv.env['GEMINI_API_KEY'];
      if (primaryKey != null && primaryKey.isNotEmpty && !primaryKey.contains('YOUR_') && primaryKey.length > 20 && !_apiKeys.contains(primaryKey.trim())) {
        _apiKeys.add(primaryKey.trim());
      }
    } catch (e) {
      debugPrint('GeminiService: Dotenv load notice: $e');
    }

    debugPrint('GeminiService: Initialized with ${_apiKeys.length} verified client key(s)');
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
      debugPrint('GeminiService: Rotated to API key index $_currentKeyIndex');
    }
  }

  void _rotateModel() {
    _currentModelIndex = (_currentModelIndex + 1) % _modelFallbacks.length;
    debugPrint('GeminiService: Switched to model $_currentModel');
  }

  /// High-level text generation:
  /// 1. Checks in-memory cache for instant zero-latency response.
  /// 2. Direct Gemini with active key rotation and retries.
  /// 3. Instant seamless fallback to Groq Qwen if Gemini is rate-limited or busy.
  Future<String> generateText(String prompt, {String? systemPrompt}) async {
    final cacheKey = '${prompt.trim().hashCode}_${systemPrompt?.trim().hashCode ?? 0}';

    // 1. Check local cache
    final cached = _responseCache[cacheKey];
    if (cached != null && !cached.isExpired) {
      debugPrint('GeminiService: Serving response from in-memory cache.');
      return cached.text;
    }

    // 2. Primary: Gemini SDK
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
      debugPrint('Gemini client notice: $e. Activating Groq fallback...');

      // 3. Fallback: Groq (ultra fast high availability)
      final groqKeys = [
        dotenv.env['GROQ_API_KEY'],
        dotenv.env['GROQ_API_KEY_2'],
      ].whereType<String>().where((k) => k.isNotEmpty && !k.contains('YOUR_')).toList();

      for (final groqKey in groqKeys) {
        try {
          final groqRes = await _callGroq(prompt, systemPrompt: systemPrompt, apiKey: groqKey);
          if (groqRes.isNotEmpty) {
            _cacheResponse(cacheKey, groqRes);
            return groqRes;
          }
        } catch (groqErr) {
          debugPrint('Groq fallback notice: $groqErr');
        }
      }

      rethrow;
    }
  }

  /// Multimodal image + text generation (used by Crop Doctor)
  Future<String> generateMultimodal(Uint8List imageBytes, String prompt, {String? systemPrompt}) async {
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

  /// Interactive multi-turn chat with automatic Groq failover
  Future<String> generateChatResponse({
    required List<Map<String, dynamic>> history,
    required String userMessage,
    String? systemPrompt,
  }) async {
    // 1. Try Gemini Chat
    try {
      return await runWithRetry((model) async {
        final List<Content> chatHistory = [];
        for (var i = 0; i < history.length; i++) {
          final msg = history[i];
          final role = msg['role'] == 'user' ? 'user' : 'model';
          final content = msg['content'] as String;
          if (i == history.length - 1 && role == 'user' && content == userMessage) continue;
          if (chatHistory.isNotEmpty && chatHistory.last.role == role) continue;
          chatHistory.add(Content(role, [TextPart(content)]));
        }

        final chatSession = model.startChat(history: chatHistory);
        final response = await chatSession.sendMessage(Content.text(userMessage));
        final text = response.text;
        if (text == null || text.trim().isEmpty) {
          throw Exception('Empty response from Gemini chat');
        }
        return text;
      }, systemPrompt: systemPrompt, retries: 2);
    } catch (e) {
      debugPrint('Gemini Chat notice: $e. Seamlessly falling back to Groq...');

      // 2. Groq Failover
      final groqKeys = [
        dotenv.env['GROQ_API_KEY'],
        dotenv.env['GROQ_API_KEY_2'],
      ].whereType<String>().where((k) => k.isNotEmpty && !k.contains('YOUR_')).toList();

      if (groqKeys.isNotEmpty) {
        final List<Map<String, String>> groqMessages = [];
        if (systemPrompt != null) {
          groqMessages.add({'role': 'system', 'content': systemPrompt});
        }
        for (final msg in history) {
          final role = msg['role'] == 'user' ? 'user' : 'assistant';
          groqMessages.add({'role': role, 'content': msg['content'] as String});
        }
        groqMessages.add({'role': 'user', 'content': userMessage});

        for (final key in groqKeys) {
          try {
            final res = await _callGroqChat(groqMessages, apiKey: key);
            if (res.isNotEmpty) return res;
          } catch (groqErr) {
            debugPrint('Groq chat key error: $groqErr');
          }
        }
      }

      rethrow;
    }
  }

  Future<T> runWithRetry<T>(
    Future<T> Function(GenerativeModel model) task, {
    int? retries,
    String? systemPrompt,
  }) async {
    final maxAttempts = retries ?? (_apiKeys.isNotEmpty ? _apiKeys.length * 2 : 4);
    int attempts = 0;
    while (attempts < maxAttempts) {
      try {
        final model = getModel(systemPrompt: systemPrompt);
        return await task(model);
      } catch (e) {
        attempts++;
        final errorStr = e.toString();
        debugPrint('GeminiService: Attempt $attempts of $maxAttempts encountered: ${errorStr.length > 80 ? errorStr.substring(0, 80) : errorStr}...');

        rotateKey();

        if (errorStr.contains('SocketException') || errorStr.contains('network')) {
          if (attempts >= maxAttempts) throw Exception('OFFLINE: कृपया इंटरनेट कनेक्शन तपासा.');
          await Future.delayed(const Duration(milliseconds: 500));
        } else if (errorStr.contains('429') || errorStr.contains('quota') || errorStr.contains('RESOURCE_EXHAUSTED')) {
          if (attempts >= maxAttempts) {
            throw Exception('AI_QUOTA: दैनिक मोफत AI मर्यादा गाठली आहे.');
          }
          await Future.delayed(const Duration(milliseconds: 300));
        } else if (errorStr.contains('403') || errorStr.contains('404') || errorStr.contains('API key not valid')) {
          continue;
        } else {
          _rotateModel();
          if (attempts >= maxAttempts) rethrow;
          await Future.delayed(const Duration(milliseconds: 300));
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

  Future<String> _callGroqChat(List<Map<String, String>> messages, {required String apiKey}) async {
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
        'messages': messages,
        'temperature': 0.6,
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
