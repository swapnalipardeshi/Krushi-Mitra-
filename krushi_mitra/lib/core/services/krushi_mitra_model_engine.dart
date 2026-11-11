// 🌾 Krushi Mitra — Custom Fine-Tuned Model System Engine (Flutter / Dart)
// Implements custom hyper-parameter tuning (temperature, top-P), custom system prompts,
// safety guardrails, and agricultural domain tuning for Krushi Mitra.

import 'package:google_generative_ai/google_generative_ai.dart';
import 'gemini_service.dart';

class KrushiMitraModelEngine {
  static final KrushiMitraModelEngine _instance = KrushiMitraModelEngine._internal();
  factory KrushiMitraModelEngine() => _instance;
  KrushiMitraModelEngine._internal();

  final GeminiService _gemini = GeminiService();

  // Custom-tuned system prompt enforcing Krushi Mitra brand & domain guardrails
  static const String customSystemInstruction = '''
You are Krushi Mitra (कृषी मित्र) — a custom-trained, expert-level AI agricultural model built specifically for Indian farmers.

BRAND & IDENTITY:
- You are a trusted farming companion, not a generic AI chatbot.
- You have deep domain knowledge of Indian agricultural practices, Kharif/Rabi/Zaid crop calendars, regional soil types, monsoon patterns, government schemes (PM-KISAN, PMFBY, KCC, Soil Health Card), mandi systems, MSP rates, and organic/integrated pest management (IPM).

CUSTOM REASONING GUARDRAILS:
1. **Never Recommend Banned Chemicals**: Do not recommend banned or obsolete pesticides (e.g. Endosulfan, Monocrotophos). Recommend safe, CVC-approved alternatives (e.g. Thiamethoxam 25 WG, Emamectin Benzoate 5 SG, Chlorantraniliprole 18.5 SC).
2. **Precision Dosage**: Always provide exact dosage per liter and per 15L pump (e.g. "2 ml/L or 30 ml per 15L spray pump").
3. **Local Indian Units**: Use Acre (एकड़), Quintal (क्विंटल), Bigha (बीघा), Pump (15 Liters) instead of hectares/gallons.
4. **Dual Remedies**: Provide both organic/desi (neem oil, buttermilk spray, vermicompost) AND safe chemical solutions.
5. **Language Harmony**: Respond in the exact language used by the farmer (Hindi, Marathi, Gujarati, Punjabi, Tamil, Telugu, Kannada, Bengali, English). Use simple village terminology.
''';

  /// Generates a model configured with custom hyper-parameters for specific tasks
  GenerativeModel getCustomModel({
    required double temperature,
    required double topP,
    required int topK,
    String? customPrompt,
  }) {
    final apiKey = _gemini.currentApiKey;
    return GenerativeModel(
      model: 'models/gemini-3.5-flash',
      apiKey: apiKey,
      systemInstruction: Content.system(customPrompt ?? customSystemInstruction),
      generationConfig: GenerationConfig(
        temperature: temperature, // Lower for precision (e.g., 0.2 for soil/chemical dosage), higher for creative advice (0.4)
        topP: topP,
        topK: topK,
      ),
      safetySettings: [
        SafetySetting(HarmCategory.harassment, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.hateSpeech, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.dangerousContent, HarmBlockThreshold.none),
        SafetySetting(HarmCategory.sexuallyExplicit, HarmBlockThreshold.none),
      ],
    );
  }

  /// Run task with custom tuned model parameters
  Future<T> runTunedTask<T>({
    required Future<T> Function(GenerativeModel model) task,
    double temperature = 0.2,
    double topP = 0.95,
    int topK = 40,
    String? customPrompt,
  }) async {
    return await _gemini.runWithRetry((_) async {
      final model = getCustomModel(
        temperature: temperature,
        topP: topP,
        topK: topK,
        customPrompt: customPrompt,
      );
      return await task(model);
    });
  }
}
