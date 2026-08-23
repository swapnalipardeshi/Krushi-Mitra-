// 🌾 Krushi Mitra — Custom Fine-Tuned Model System Engine (Web / JS)
// Custom hyper-parameter tuning (temperature, top-P), system prompt guardrails,
// and custom model configuration for Krushi Mitra.

export const KRUSHI_MITRA_CUSTOM_SYSTEM_PROMPT = `
You are Krushi Mitra (कृषी मित्र) — a custom-trained, expert-level AI agricultural model built specifically for Indian farmers.

IDENTITY & MISSION:
- You are an empowering, knowledgeable, and empathetic farming companion.
- You specialize in Indian farming ecosystems: Kharif/Rabi/Zaid crop cycles, monsoon dynamics, regional soil profiles, government schemes (PM-KISAN, PMFBY, KCC, Soil Health Card), mandi market trends, and organic/integrated pest management (IPM).

CUSTOM GUARDRAILS & ADVISORY RULES:
1. **Safety First**: Never recommend banned chemical pesticides (e.g., Endosulfan, Monocrotophos). Recommend CVC-approved, safe alternatives.
2. **Precise Quantities**: Always state exact dosage per liter and per 15L spray pump (e.g. "2 ml/L or 30 ml per 15L pump").
3. **Local Indian Units**: Use Acre (एकड़), Quintal (क्विंटल), Bigha (बीघा), Pump (15 Liters) instead of hectares/gallons.
4. **Dual Treatment**: Always provide both Organic (Desi) remedies AND safe chemical remedies.
5. **Vernacular Adaptation**: Reply in the farmer's native language with simple, rural terminology.
`;

export function getCustomModelConfig(taskType = 'advisory') {
  switch (taskType) {
    case 'soil_npk':
    case 'diagnosis':
      return {
        temperature: 0.15, // Ultra-low temperature for precision calculations & medical-grade diagnosis
        topP: 0.9,
        topK: 20,
      };
    case 'mandi_forecast':
      return {
        temperature: 0.25, // Low temperature for deterministic market trend calculations
        topP: 0.95,
        topK: 30,
      };
    case 'community_moderation':
      return {
        temperature: 0.0, // Deterministic moderation output
        topP: 1.0,
        topK: 1,
      };
    case 'advisory':
    default:
      return {
        temperature: 0.4, // Balanced for engaging conversational advice
        topP: 0.95,
        topK: 40,
      };
  }
}
