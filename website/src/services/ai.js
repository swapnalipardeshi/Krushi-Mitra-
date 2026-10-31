// ðŸŒ¾ Krushi Mitra Pro AI Service (Gemini Integration)
import { getKnowledgeBrief, getOfflineAdvice, getFewShotContext } from './aiKnowledgeBase';

const SYSTEM_PROMPT = `You are **Krushi Mitra** (à¤•à¥ƒà¤·à¥€ à¤®à¤¿à¤¤à¥à¤°) â€” a premium, expert-level AI agricultural advisor built specifically for Indian farmers.

YOUR IDENTITY:
- You are a trusted farming companion, not a generic chatbot.
- You have deep knowledge of Indian agriculture: crop cycles, regional soil types, monsoon patterns, government schemes (PM-KISAN, PMFBY, KCC), mandi systems, MSP rates, and organic/integrated farming.
- You combine traditional Indian farming wisdom (like neem-based pest control, crop rotation with pulses, vermicompost) with modern scientific methods.

REASONING MANDATE:
Before providing any advice, internally reason through the problem:
1. **Analyze Growth Stage**: Determine the crop's probable growth stage based on the current month and season.
2. **Environmental Assessment**: Consider how current weather (humidity, temperature, wind) impacts the issue or the effectiveness of the solution.
3. **Knowledge Integration**: Cross-reference the user's query with the expert rules for their specific crops.
4. **Prioritize Impact**: Identify the single most critical and immediate action the farmer needs to take.

RESPONSE QUALITY RULES:
1. Be CONCISE but COMPLETE. Farmers are busy â€” give actionable answers, not essays.
2. Use **bold** for crop names, disease names, chemical names, and key numbers.
3. Use bullet points and numbered lists for steps.
4. Include specific quantities: "**2-3 ml per litre**" not "some amount".
5. Include specific product names available in India: "**Thiamethoxam 25 WG (Actara)**" not "a systemic insecticide".
6. Use emojis sparingly but effectively: ðŸŒ¾ for crops, ðŸ’§ for irrigation, ðŸ› for pests, ðŸ’° for prices, ðŸŒ¡ï¸ for weather, âš ï¸ for warnings.
7. Always mention the **best time to act** (morning/evening, which month, before/after rain).
8. When relevant, give both **organic/desi** AND **chemical** solutions.
9. End with ONE encouraging line.

LANGUAGE:
- Respond in the language the user uses. If asked in Hindi, reply in Hindi. If Marathi, reply in Marathi.
- Use simple village-level language. Avoid English technical jargon when replying in Hindi/Marathi.
- For Hindi: use words like "à¤à¤• à¤à¤•à¤¡à¤¼", "à¤à¤• à¤ªà¤‚à¤ª (15 à¤²à¥€à¤Ÿà¤°)", "à¤¬à¥‹à¤°à¥€" instead of hectare/litre.

SAFETY:
- If unsure, say: "à¤®à¥à¤à¥‡ à¤‡à¤¸ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤ªà¥‚à¤°à¤¾ à¤­à¤°à¥‹à¤¸à¤¾ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¥‡ à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤•à¥ƒà¤·à¤¿ à¤…à¤§à¤¿à¤•à¤¾à¤°à¥€ à¤¸à¥‡ à¤¸à¤²à¤¾à¤¹ à¤²à¥‡à¤‚à¥¤ ðŸ¢"
- Never recommend banned pesticides.
- Always warn about safety gear when recommending chemicals.`;

function getLanguageInstruction(language) {
  switch (language) {
    case 'hi':
      return 'LANGUAGE: Respond in HINDI (à¤¹à¤¿à¤¨à¥à¤¦à¥€). Use simple rural Hindi. Units: à¤à¤•à¤¡à¤¼, à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤², à¤•à¤¿à¤²à¥‹, à¤ªà¤‚à¤ª (15L). Avoid English technical terms â€” use Hindi equivalents.';
    case 'mr':
      return 'LANGUAGE: Respond in MARATHI (à¤®à¤°à¤¾à¤ à¥€). Use simple spoken Marathi. Units: à¤à¤•à¤°, à¤•à¥à¤µà¤¿à¤‚à¤Ÿà¤², à¤•à¤¿à¤²à¥‹. Use Marathi farming terms.';
    case 'gu':
      return 'LANGUAGE: Respond in GUJARATI (àª—à«àªœàª°àª¾àª¤à«€). Use simple spoken Gujarati. Units: àªàª•àª°, àª•à«àªµàª¿àª¨à«àªŸàª², àª•àª¿àª²à«‹.';
    case 'te':
      return 'LANGUAGE: Respond in TELUGU (à°¤à±†à°²à±à°—à±). Use simple spoken Telugu. Units: à°Žà°•à°°à°¾, à°•à±à°µà°¿à°‚à°Ÿà°¾à°²à±, à°•à°¿à°²à±‹.';
    case 'ta':
      return 'LANGUAGE: Respond in TAMIL (à®¤à®®à®¿à®´à¯). Use simple spoken Tamil. Units: à®à®•à¯à®•à®°à¯, à®•à¯à®µà®¿à®£à¯à®Ÿà®¾à®²à¯, à®•à®¿à®²à¯‹.';
    case 'kn':
      return 'LANGUAGE: Respond in KANNADA (à²•à²¨à³à²¨à²¡). Use simple spoken Kannada. Units: à²Žà²•à²°à³†, à²•à³à²µà²¿à²‚à²Ÿà²¾à²²à³, à²•à³†à²œà²¿.';
    case 'bn':
      return 'LANGUAGE: Respond in BENGALI (à¦¬à¦¾à¦‚à¦²à¦¾). Use simple spoken Bengali. Units: à¦à¦•à¦°, à¦•à§à¦‡à¦¨à§à¦Ÿà¦¾à¦², à¦•à§‡à¦œà¦¿.';
    default:
      return 'LANGUAGE: Respond in ENGLISH. Use simple words. Avoid jargon. Use Indian units (acre, quintal, kg).';
  }
}

function buildFarmerBrief(context) {
  const p = context.profile;
  const w = context.weather;
  let brief = '';

  if (p) {
    brief += 'FARMER PROFILE:\n';
    brief += `- Name: ${p.name || 'Farmer'}\n`;
    brief += `- Location: ${p.district || 'Unknown'}, ${p.state || 'India'} (India)\n`;
    brief += `- Land: ${p.landSize || '0'} acres\n`;
    brief += `- Crops grown: ${(p.cropsGrown || []).join(", ")}\n`;
    if (p.soilType) brief += `- Soil type: ${p.soilType}\n`;
    if (p.irrigationSource) brief += `- Irrigation: ${p.irrigationSource}\n`;
    brief += `\n${getKnowledgeBrief(p.cropsGrown || [])}\n`;
  }

  if (w) {
    brief += '\nCURRENT WEATHER:\n';
    brief += `- Temperature: ${w.temperature}Â°C (feels like ${w.feelsLike}Â°C)\n`;
    brief += `- Condition: ${w.condition}\n`;
    brief += `- Humidity: ${w.humidity}%\n`;
    brief += `- Wind: ${w.windSpeed} m/s\n`;
  }

  const today = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  brief += `\nDATE: ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}\n`;
  brief += `MONTH: ${months[today.getMonth()]}\n`;

  return brief;
}

function extractJson(text) {
  let cleaned = text.trim();
  if (cleaned.includes('```')) {
    const match = /```(?:json)?\s*([\s\S]*?)```/i.exec(cleaned);
    if (match) cleaned = match[1].trim();
  }
  const startObj = cleaned.indexOf('{');
  const startArr = cleaned.indexOf('[');
  if (startArr !== -1 && (startObj === -1 || startArr < startObj)) {
    const endArr = cleaned.lastIndexOf(']');
    if (endArr !== -1) return cleaned.substring(startArr, endArr + 1);
  } else if (startObj !== -1) {
    const endObj = cleaned.lastIndexOf('}');
    if (endObj !== -1) return cleaned.substring(startObj, endObj + 1);
  }
  return cleaned;
}

// Global helper to execute Gemini API calls directly from frontend with multi-key rotation and Groq fallback
export async function callGemini(prompt, apiKey, systemInstruction = null) {
  const geminiKeys = [
    apiKey,
    import.meta.env.VITE_GEMINI_API_KEY,
    import.meta.env.VITE_GEMINI_API_KEY_2,
  ].filter(k => k && typeof k === 'string' && k.trim().length > 15 && !k.startsWith('gsk_'));

  const groqKey = import.meta.env.VITE_GROQ_API_KEY;

  let lastError = null;

  // 1. Try Gemini Keys in sequence (Key 1 -> Key 2 Backup)
  for (const key of geminiKeys) {
    try {
      const model = "gemini-flash-latest";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key.trim()}`;

      const contents = [{ role: 'user', parts: [{ text: prompt }] }];
      const requestBody = { contents };

      if (systemInstruction) {
        requestBody.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      } else {
        const err = await response.json().catch(() => ({}));
        console.warn(`Gemini key failed with HTTP ${response.status}:`, err);
        lastError = new Error(err?.error?.message || `HTTP ${response.status}`);
      }
    } catch (e) {
      console.warn('Gemini request exception:', e);
      lastError = e;
    }
  }

  // 2. Fallback to Groq if Gemini keys are exhausted or unavailable
  if (groqKey && groqKey.startsWith('gsk_')) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqKey}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: [
            { role: 'system', content: systemInstruction || SYSTEM_PROMPT },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 1500
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) return text;
      }
    } catch (groqErr) {
      console.warn('Groq fallback failed:', groqErr);
      lastError = groqErr;
    }
  }

  throw lastError || new Error('No working AI API key available.');
}

// â”€â”€â”€ CHATBOT â”€â”€â”€
export async function chat(history, userMessage, context, apiKey) {
  const resolvedApiKey = apiKey || import.meta.env.VITE_GROQ_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
  if (!resolvedApiKey) {
    // Revert to high-fidelity offline expert rules
    return getOfflineAdvice(userMessage, context.profile?.cropsGrown || [], context.profile?.district || '');
  }

  try {
    const farmerBrief = buildFarmerBrief(context);
    const langInst = getLanguageInstruction(context.profile?.language || 'en');
    const fewShot = getFewShotContext();

    const fullPrompt = `FARMER CONTEXT & ENVIRONMENT:
${farmerBrief}

FEW-SHOT REFERENCE:
${fewShot}

CHAT HISTORY:
${history.map(h => `${h.role === 'user' ? 'User' : 'Krushi Mitra'}: ${h.content}`).join('\n')}

User Query: ${userMessage}
${langInst}

Provide your expert response:`;

    return await callGemini(fullPrompt, resolvedApiKey, SYSTEM_PROMPT);
  } catch (error) {
    console.error("AI Chat Error:", error);
    return `âš ï¸ AI Error: ${error.message}. Running local expert database fallback:\n\n` + 
           getOfflineAdvice(userMessage, context.profile?.cropsGrown || [], context.profile?.district || '');
  }
}

// â”€â”€â”€ CROP DOCTOR â”€â”€â”€
export async function analyzeCropImage(base64DataOrImage, mimeTypeOrCropHint, contextOrApiKey, maybeApiKeyOrContext) {
  const resolvedApiKey = (() => {
    const envKey = import.meta.env.VITE_GROQ_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || '';
    if (typeof contextOrApiKey === 'string' && contextOrApiKey.trim()) return contextOrApiKey.trim();
    if (typeof maybeApiKeyOrContext === 'string' && maybeApiKeyOrContext.trim()) return maybeApiKeyOrContext.trim();
    if (typeof contextOrApiKey === 'object' && contextOrApiKey !== null && Object.prototype.hasOwnProperty.call(contextOrApiKey, 'apiKey')) {
      return String(contextOrApiKey.apiKey || '').trim();
    }
    return envKey.trim();
  })();

  if (typeof mimeTypeOrCropHint === 'string' && !mimeTypeOrCropHint.includes('/') && !mimeTypeOrCropHint.startsWith('image')) {
    const cropHint = mimeTypeOrCropHint || 'Crop';
    if (!resolvedApiKey) {
      return {
        cropName: cropHint,
        diseaseName: 'Offline Knowledge Mode',
        severity: 'Moderate',
        confidencePercent: 75,
        symptoms: 'Leaf showing signs of spotting and nutrient stress.',
        causes: 'Common fungal spores or localized nutrient imbalance.',
        treatmentOrganic: 'Spray 5ml Neem Oil per liter of water during evening hours.',
        treatmentChemical: 'Apply Mancozeb 75 WP @ 2g/L if symptoms expand.',
        prevention: 'Maintain balanced field moisture and practice crop rotation.'
      };
    }

    try {
      const prompt = `You are a plant pathologist specializing in Indian crops. Analyze this crop photo hint: "${cropHint}".
Return JSON ONLY:
{
  "crop_name": "${cropHint}",
  "health_status": "diseased",
  "disease_name": "Identified Disease Name",
  "severity": "Medium",
  "confidence": 88,
  "symptoms": "Detailed visual symptoms",
  "causes": "Environmental/pathogen causes",
  "treatment_organic": "Specific organic remedy with dosage",
  "treatment_chemical": "Specific chemical remedy with dosage and Indian brand name",
  "prevention": "3 prevention tips"
}`;
      const raw = await callGemini(prompt, resolvedApiKey, SYSTEM_PROMPT);
      const parsed = JSON.parse(extractJson(raw));
      return {
        cropName: parsed.crop_name || cropHint,
        diseaseName: parsed.disease_name || 'Healthy / No major disease',
        severity: parsed.severity || 'Low',
        confidencePercent: parsed.confidence || 80,
        symptoms: parsed.symptoms || '',
        causes: parsed.causes || '',
        treatmentOrganic: parsed.treatment_organic || '',
        treatmentChemical: parsed.treatment_chemical || '',
        prevention: parsed.prevention || ''
      };
    } catch (err) {
      console.error("Vision Analysis Error:", err);
      return {
        cropName: cropHint,
        diseaseName: 'Service Interrupted',
        severity: 'Low',
        confidencePercent: 0,
        symptoms: 'Could not connect to vision diagnosis engine.',
        causes: 'Check internet connection.',
        treatmentOrganic: 'Use 5ml Neem Oil per liter water.',
        treatmentChemical: 'Consult local Krishi Kendra.',
        prevention: 'Keep fields clean and properly drained.'
      };
    }
  }

  const context = typeof contextOrApiKey === 'object' && contextOrApiKey !== null ? contextOrApiKey : {};
  const mimeType = typeof mimeTypeOrCropHint === 'string' ? mimeTypeOrCropHint : 'image/jpeg';
  if (!resolvedApiKey) {
    return simulateImageAnalysis(context);
  }

  try {
    const farmerBrief = buildFarmerBrief(context);
    const langInst = getLanguageInstruction(context.profile?.language || 'en');

    const prompt = `You are an expert plant pathologist specializing in Indian agriculture.

FARMER CONTEXT:
${farmerBrief}

TASK: Analyze this crop photo with extreme precision. Consider:
- The farmer's location and current season to narrow down likely diseases
- Common diseases for this region at this time of year
- Weather conditions (humidity/temperature) that favor certain pathogens
- Whether symptoms match nutrient deficiency vs disease vs pest damage

${langInst}

Respond ONLY in valid JSON (no markdown, no backticks):
{
  "crop_name": "Exact crop identified (e.g., Tomato, Wheat, Cotton)",
  "health_status": "healthy OR diseased OR deficient OR pest_damage",
  "disease_name": "Precise disease/pest/deficiency name. Use 'None' if healthy",
  "severity": "low OR medium OR high OR critical",
  "confidence": 85,
  "symptoms": "Describe exactly what you see â€” leaf color, spots, wilting pattern",
  "causes": "What causes this â€” pathogen name, environmental triggers",
  "treatment_organic": "Specific organic remedy with exact dosage. E.g. Neem oil 5ml/L spray.",
  "treatment_chemical": "Specific chemical with Indian brand name and dosage. E.g. Mancozeb 75 WP @ 2.5g/L.",
  "prevention": "3-4 specific preventive measures for future seasons"
}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${resolvedApiKey}`;
    const requestBody = {
      contents: [
        {
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64DataOrImage
              }
            },
            { text: prompt }
          ]
        }
      ]
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    const jsonStr = extractJson(text || '');
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Doctor Error:", error);
    return simulateImageAnalysis(context, true);
  }
}

// Simulates crop diagnostics based on crops grown in profile
function simulateImageAnalysis(context, isFailFallback = false) {
  const crop = context.profile?.cropsGrown?.[0] || 'Tomato';
  const lang = context.profile?.language || 'en';

  const defaultDiagnoses = {
    Tomato: {
      crop_name: "Tomato",
      health_status: "diseased",
      disease_name: lang === 'hi' ? 'à¤…à¤—à¥‡à¤¤à¥€ à¤à¥à¤²à¤¸à¤¾ à¤°à¥‹à¤— (Early Blight)' : 'Early Blight (Alternaria solani)',
      severity: "medium",
      confidence: 88,
      symptoms: lang === 'hi' 
        ? "à¤¨à¤¿à¤šà¤²à¥€ à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤ªà¤° à¤—à¤¾à¤¢à¤¼à¥‡ à¤­à¥‚à¤°à¥‡ à¤°à¤‚à¤— à¤•à¥‡ à¤—à¥‹à¤² à¤›à¤²à¥à¤²à¥‡à¤¦à¤¾à¤° à¤§à¤¬à¥à¤¬à¥‡ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¤¾à¤‚ à¤ªà¥€à¤²à¥€ à¤ªà¤¡à¤¼à¤•à¤° à¤—à¤¿à¤° à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚à¥¤" 
        : "Concentric dark brown rings appearing on older leaves. Leaves yellowing and shedding near the base.",
      causes: lang === 'hi'
        ? "à¤«à¤«à¥‚à¤‚à¤¦ (Alternaria solani) à¤•à¥‡ à¤•à¤¾à¤°à¤£à¥¤ à¤‰à¤šà¥à¤š à¤†à¤°à¥à¤¦à¥à¤°à¤¤à¤¾ (80% à¤¸à¥‡ à¤…à¤§à¤¿à¤•) à¤”à¤° 24-29 à¤¡à¤¿à¤—à¥à¤°à¥€ à¤¸à¥‡à¤²à¥à¤¸à¤¿à¤¯à¤¸ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤‡à¤¸ à¤°à¥‹à¤— à¤•à¥‹ à¤¬à¤¢à¤¼à¤¾à¤µà¤¾ à¤¦à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤"
        : "Fungal pathogen favored by warm temperatures (24-29Â°C) and persistent high moisture or heavy dew.",
      treatment_organic: lang === 'hi'
        ? "à¤¨à¥€à¤® à¤•à¤¾ à¤¤à¥‡à¤² (5 à¤®à¤¿à¤²à¥€/à¤²à¥€à¤Ÿà¤°) à¤”à¤° à¤¬à¥‡à¤•à¤¿à¤‚à¤— à¤¸à¥‹à¤¡à¤¾ (2 à¤—à¥à¤°à¤¾à¤®/à¤²à¥€à¤Ÿà¤°) à¤•à¥‡ à¤˜à¥‹à¤² à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤ 7 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦ à¤¦à¥‹à¤¹à¤°à¤¾à¤à¤‚à¥¤"
        : "Spray neem oil (5 ml/L) mixed with baking soda (2g/L) on leaves. Repeat after 7 days.",
      treatment_chemical: lang === 'hi'
        ? "Mancozeb 75 WP (Dithane M-45) @ 2.5 à¤—à¥à¤°à¤¾à¤® à¤ªà¥à¤°à¤¤à¤¿ à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤®à¥‡à¤‚ à¤®à¤¿à¤²à¤¾à¤•à¤° à¤¸à¥à¤¬à¤¹ à¤¯à¤¾ à¤¶à¤¾à¤® à¤•à¥‹ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤"
        : "Spray Mancozeb 75 WP (Dithane M-45) @ 2.5g/L water during late evening.",
      prevention: lang === 'hi'
        ? ["à¤«à¤¸à¤²à¥‹à¤‚ à¤•à¥‹ à¤¬à¤¦à¤²-à¤¬à¤¦à¤² à¤•à¤° à¤²à¤—à¤¾à¤à¤‚à¥¤", "à¤–à¥‡à¤¤ à¤®à¥‡à¤‚ à¤œà¤²à¤œà¤®à¤¾à¤µ à¤¨ à¤¹à¥‹à¤¨à¥‡ à¤¦à¥‡à¤‚à¥¤", "à¤¸à¤‚à¤•à¥à¤°à¤®à¤¿à¤¤ à¤ªà¥Œà¤§à¥‹à¤‚ à¤•à¥‡ à¤…à¤µà¤¶à¥‡à¤·à¥‹à¤‚ à¤•à¥‹ à¤œà¤²à¤¾ à¤¦à¥‡à¤‚à¥¤"]
        : ["Practice 3-year crop rotation.", "Ensure proper crop spacing for aeration.", "Remove crop debris after harvest."]
    },
    Wheat: {
      crop_name: "Wheat",
      health_status: "diseased",
      disease_name: lang === 'hi' ? 'à¤ªà¥€à¤²à¤¾ à¤°à¤¤à¥à¤† (Yellow Rust)' : 'Yellow Rust (Puccinia striiformis)',
      severity: "high",
      confidence: 90,
      symptoms: lang === 'hi' 
        ? "à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤ªà¤° à¤ªà¥€à¤²à¥‡ à¤°à¤‚à¤— à¤•à¥€ à¤§à¤¾à¤°à¤¿à¤¯à¤¾à¤‚ à¤”à¤° à¤ªà¤¾à¤‰à¤¡à¤° à¤œà¥ˆà¤¸à¤¾ à¤ªà¤¦à¤¾à¤°à¥à¤¥ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡ à¤°à¤¹à¤¾ à¤¹à¥ˆà¥¤" 
        : "Linear rows of yellow/orange pustules (spores) forming stripes on leaves. Rubbing leaves leaves yellow dust on fingers.",
      causes: lang === 'hi'
        ? "à¤«à¤«à¥‚à¤‚à¤¦ à¤¸à¥à¤ªà¥‹à¤°à¥à¤¸ à¤œà¥‹ à¤ à¤‚à¤¡à¥‡ à¤”à¤° à¤¨à¤® à¤®à¥Œà¤¸à¤® à¤®à¥‡à¤‚ à¤¤à¥‡à¤œà¥€ à¤¸à¥‡ à¤«à¥ˆà¤²à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤"
        : "Airborne fungal spores favored by cool, damp weather conditions during the tillering stage.",
      treatment_organic: lang === 'hi'
        ? "à¤–à¤Ÿà¥à¤Ÿà¤¾ à¤®à¤Ÿà¥à¤ à¤¾ (500 à¤®à¤¿à¤²à¥€) à¤”à¤° à¤¹à¥€à¤‚à¤— (10 à¤—à¥à¤°à¤¾à¤®) 15 à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤®à¥‡à¤‚ à¤˜à¥‹à¤²à¤•à¤° à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤"
        : "Foliar spray of fermented butter-milk (chaas) @ 500ml mixed with 15L water.",
      treatment_chemical: lang === 'hi'
        ? "Propiconazole 25 EC (Tilt) @ 1 à¤®à¤¿à¤²à¥€ à¤ªà¥à¤°à¤¤à¤¿ à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤®à¥‡à¤‚ à¤®à¤¿à¤²à¤¾à¤•à¤° à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤"
        : "Foliar spray of Propiconazole 25 EC (Tilt) @ 1 ml/L water.",
      prevention: lang === 'hi'
        ? ["à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‹à¤§à¥€ à¤•à¤¿à¤¸à¥à¤®à¥‹à¤‚ (à¤œà¥ˆà¤¸à¥‡ HD 3086) à¤•à¥€ à¤¬à¥à¤µà¤¾à¤ˆ à¤•à¤°à¥‡à¤‚à¥¤", "à¤¸à¤®à¤¯ à¤ªà¤° à¤¬à¥à¤µà¤¾à¤ˆ à¤•à¤°à¥‡à¤‚à¥¤", "à¤¨à¤¾à¤‡à¤Ÿà¥à¤°à¥‹à¤œà¤¨ à¤•à¤¾ à¤…à¤¤à¥à¤¯à¤§à¤¿à¤• à¤‰à¤ªà¤¯à¥‹à¤— à¤¨ à¤•à¤°à¥‡à¤‚à¥¤"]
        : ["Sow rust-resistant varieties like HD 3086.", "Avoid late sowing.", "Avoid excess nitrogen application."]
    },
    Cotton: {
      crop_name: "Cotton",
      health_status: "pest_damage",
      disease_name: lang === 'hi' ? 'à¤—à¥à¤²à¤¾à¤¬à¥€ à¤¸à¥à¤‚à¤¡à¥€ à¤•à¤¾ à¤¹à¤®à¤²à¤¾ (Pink Bollworm)' : 'Pink Bollworm Infestation',
      severity: "critical",
      confidence: 92,
      symptoms: lang === 'hi'
        ? "à¤—à¥‚à¤²à¤° (bolls) à¤•à¥‡ à¤…à¤‚à¤¦à¤° à¤›à¥‡à¤¦ à¤”à¤° à¤—à¥à¤²à¤¾à¤¬à¥€ à¤°à¤‚à¤— à¤•à¥€ à¤‡à¤²à¥à¤²à¤¿à¤¯à¤¾à¤‚ à¤¦à¤¿à¤–à¤¾à¤ˆ à¤¦à¥‡ à¤°à¤¹à¥€ à¤¹à¥ˆà¤‚à¥¤ à¤«à¥‚à¤² à¤—à¥à¤²à¤¾à¤¬ à¤•à¥€ à¤¤à¤°à¤¹ à¤¬à¤‚à¤¦ à¤¹à¥‹ à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤"
        : "Rosetted flowers that fail to open properly. Entry holes visible on cotton bolls with tiny pink larvae inside.",
      causes: "Pectinophora gossypiella moth laying eggs on flowers/bolls.",
      treatment_organic: lang === 'hi'
        ? "à¤¨à¥€à¤® à¤¬à¥€à¤œ à¤…à¤°à¥à¤• (NSKE 5%) à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤ à¤«à¥‡à¤°à¥‹à¤®à¥‹à¤¨ à¤œà¤¾à¤² (5 à¤ªà¥à¤°à¤¤à¤¿ à¤à¤•à¤¡à¤¼) à¤²à¤—à¤¾à¤à¤‚à¥¤"
        : "Install 5 Pheromone traps per acre. Spray Neem Seed Kernel Extract (NSKE 5%).",
      treatment_chemical: lang === 'hi'
        ? "Profex Super (Profenofos 40% + Cypermethrin 4%) @ 2 à¤®à¤¿à¤²à¥€ à¤ªà¥à¤°à¤¤à¤¿ à¤²à¥€à¤Ÿà¤° à¤ªà¤¾à¤¨à¥€ à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤"
        : "Spray Profenofos 40% + Cypermethrin 4% EC @ 2 ml/L water.",
      prevention: lang === 'hi'
        ? ["à¤«à¤¸à¤² à¤šà¤•à¥à¤° à¤…à¤ªà¤¨à¤¾à¤à¤‚à¥¤", "à¤¬à¥à¤µà¤¾à¤ˆ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤®à¤¾à¤£à¤¿à¤¤ à¤¬à¥€à¤Ÿà¥€ à¤¬à¥€à¤œ à¤šà¥à¤¨à¥‡à¤‚à¥¤", "à¤«à¤¸à¤² à¤•à¤Ÿà¤¾à¤ˆ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤–à¥‡à¤¤ à¤•à¥€ à¤—à¤¹à¤°à¥€ à¤œà¥à¤¤à¤¾à¤ˆ à¤•à¤°à¥‡à¤‚à¥¤"]
        : ["Observe a strict closed season.", "Use certified Bt cotton seeds.", "Deep summer ploughing to destroy pupae."]
    }
  };

  const res = defaultDiagnoses[crop] || defaultDiagnoses.Tomato;
  if (isFailFallback) {
    res.disease_name += " (API Fallback)";
  }
  return res;
}

// â”€â”€â”€ ELIGIBILITY CHECKER â”€â”€â”€
export async function checkSchemeEligibility(context, scheme, apiKey) {
  if (!apiKey) {
    // Generate context-aware mock response
    return simulateSchemeEligibility(context, scheme);
  }

  try {
    const farmerBrief = buildFarmerBrief(context);
    const lang = context.profile?.language || 'en';
    const langInst = getLanguageInstruction(lang);

    const prompt = `FARMER PROFILE CONTEXT:
${farmerBrief}

SCHEME DETAIL:
Name: ${scheme.name}
Description: ${scheme.description}
Eligibility Rules: ${(scheme.eligibilityCriteria || []).join(', ')}

TASK: Analyze if the farmer is eligible for this scheme.
- State clearly if they are eligible, partially eligible, or ineligible.
- Give a list of matching criteria and a list of mismatching criteria.
- Give actionable steps they need to take to apply (e.g. documents to get).

${langInst}
Respond in formatted markdown. Be encouraging!`;

    return await callGemini(prompt, apiKey, SYSTEM_PROMPT);
  } catch (error) {
    console.error("AI Eligibility Checker Error:", error);
    return simulateSchemeEligibility(context, scheme) + "\n\n*(Running in local mode)*";
  }
}

function simulateSchemeEligibility(context, scheme) {
  const p = context.profile;
  const lang = p?.language || 'en';
  const crops = p?.cropsGrown || [];
  
  const isTomatoFarmer = crops.includes('Tomato');
  const landSize = parseFloat(p?.landSize || 0);

  if (lang === 'hi') {
    return `### ðŸŒ¾ **à¤ªà¤¾à¤¤à¥à¤°à¤¤à¤¾ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ** (à¤•à¥ƒà¤·à¤¿ à¤®à¤¿à¤¤à¥à¤° à¤à¤†à¤ˆ)
  
*   **à¤¯à¥‹à¤œà¤¨à¤¾**: ${scheme.name}
*   **à¤¸à¥à¤¥à¤¿à¤¤à¤¿**: ${landSize <= 5 ? 'ðŸŸ¢ à¤ªà¥‚à¤°à¥à¤£ à¤°à¥‚à¤ª à¤¸à¥‡ à¤ªà¤¾à¤¤à¥à¤°' : 'ðŸŸ¡ à¤†à¤‚à¤¶à¤¿à¤• à¤°à¥‚à¤ª à¤¸à¥‡ à¤ªà¤¾à¤¤à¥à¤° (à¤­à¥‚à¤®à¤¿ à¤¸à¥€à¤®à¤¾ à¤œà¤¾à¤‚à¤š à¤•à¥‡ à¤…à¤§à¥€à¤¨)'}
  
**à¤ªà¤¾à¤¤à¥à¤°à¤¤à¤¾ à¤•à¤¾à¤°à¤•:**
1.  **à¤¸à¥à¤¥à¤¾à¤¨**: à¤†à¤ª ${p?.district || 'à¤…à¤ªà¤¨à¥‡ à¤œà¤¼à¤¿à¤²à¥‡'}, ${p?.state || 'à¤…à¤ªà¤¨à¥‡ à¤°à¤¾à¤œà¥à¤¯'} à¤¸à¥‡ à¤¹à¥ˆà¤‚, à¤œà¤¹à¤¾à¤ à¤¯à¤¹ à¤¯à¥‹à¤œà¤¨à¤¾ à¤²à¤¾à¤—à¥‚ à¤¹à¥ˆà¥¤
2.  **à¤­à¥‚à¤®à¤¿ à¤†à¤•à¤¾à¤°**: à¤†à¤ªà¤•à¥‡ à¤ªà¤¾à¤¸ ${landSize} à¤à¤•à¤¡à¤¼ à¤œà¤¼à¤®à¥€à¤¨ à¤¹à¥ˆ, à¤œà¥‹ à¤²à¤˜à¥ à¤à¤µà¤‚ à¤¸à¥€à¤®à¤¾à¤‚à¤¤ à¤•à¤¿à¤¸à¤¾à¤¨ à¤¶à¥à¤°à¥‡à¤£à¥€ à¤®à¥‡à¤‚ à¤†à¤¤à¥€ à¤¹à¥ˆà¥¤
3.  **à¤«à¤¸à¤²à¥‡à¤‚**: à¤†à¤ª ${crops.join(', ')} à¤‰à¤—à¤¾à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤œà¥‹ à¤‡à¤¸ à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¥‡ à¤…à¤‚à¤¤à¤°à¥à¤—à¤¤ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤¯à¥à¤•à¥à¤¤ à¤¹à¥ˆà¤‚à¥¤

**à¤†à¤µà¤¶à¥à¤¯à¤• à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ:**
*   à¤†à¤§à¤¾à¤° à¤•à¤¾à¤°à¥à¤¡ (Aadhaar Card)
*   à¤­à¥‚à¤®à¤¿ à¤•à¥€ à¤¨à¤•à¤² (7/12 à¤‰à¤¤à¤¾à¤°à¤¾ à¤¯à¤¾ à¤–à¤¤à¥Œà¤¨à¥€)
*   à¤¬à¥ˆà¤‚à¤• à¤–à¤¾à¤¤à¤¾ à¤ªà¤¾à¤¸à¤¬à¥à¤• (à¤œà¤¿à¤¸à¤®à¥‡à¤‚ à¤†à¤§à¤¾à¤° à¤²à¤¿à¤‚à¤• à¤¹à¥‹)

**à¤•à¥ƒà¤·à¤¿ à¤®à¤¿à¤¤à¥à¤° à¤•à¥€ à¤¸à¤²à¤¾à¤¹**: 
à¤†à¤ª à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤ªà¤° à¤œà¤¾à¤•à¤° **${scheme.applyLink ? 'New Registration' : 'à¤†à¤µà¥‡à¤¦à¤¨ à¤•à¤°à¥‡à¤‚'}** à¤²à¤¿à¤‚à¤• à¤•à¥‡ à¤®à¤¾à¤§à¥à¤¯à¤® à¤¸à¥‡ à¤¤à¥à¤°à¤‚à¤¤ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤•à¤°à¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¯à¤¦à¤¿ à¤•à¥‹à¤ˆ à¤¸à¤®à¤¸à¥à¤¯à¤¾ à¤¹à¥‹ à¤¤à¥‹ à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨ à¤¨à¤‚à¤¬à¤° à¤ªà¤° à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚à¥¤ ðŸŒ¾`;
  }

  return `### ðŸŒ¾ **Eligibility Analysis Report** (Krushi Mitra AI)
  
*   **Scheme**: ${scheme.name}
*   **Status**: ${landSize <= 5 ? 'ðŸŸ¢ Eligible' : 'ðŸŸ¡ Partially Eligible (Pending land ceiling checks)'}
  
**Key Matches:**
1.  **Location**: Your registered location (${p?.district || 'District'}, ${p?.state || 'State'}) is eligible.
2.  **Landholding**: Your ${landSize} acres falls within the Small and Marginal farmer bracket.
3.  **Crops**: Your crops (${crops.join(', ')}) qualify for standard input and crop subsidies under this program.

**Action Checklist:**
*   [ ] Verify your Aadhaar details match your land record name.
*   [ ] Ensure Bank Account is active and seeded with Aadhaar.
*   [ ] Gather Landholding details (7/12 extract or Land patta).

**Krushi Mitra Recommendation**: 
Go to the **Apply Now** link to fill out the form. You are highly recommended to proceed with registration this week to catch the current season disbursement!`;
}

// â”€â”€â”€ DAILY ADVISORY & TIP â”€â”€â”€
export async function getDailyFarmingTip(cropsList, location, season, language, apiKey) {
  if (!apiKey) {
    return simulateDailyTip(cropsList, location, season, language);
  }

  try {
    const langInst = getLanguageInstruction(language);
    const prompt = `Location: ${location}
Season: ${season}
Crops Grown: ${cropsList}

TASK: Generate a single, highly actionable, premium daily farming tip for today.
- Include a specific task (irrigation, fertilizing, weeding, or scouting).
- Give exact dosage if pesticide/fertilizer is mentioned.
- Keep it under 4 lines.

${langInst}`;

    return await callGemini(prompt, apiKey, SYSTEM_PROMPT);
  } catch (error) {
    console.error("AI Daily Tip Error:", error);
    return simulateDailyTip(cropsList, location, season, language);
  }
}

function simulateDailyTip(cropsList, location, season, language) {
  const cropArr = cropsList.split(',').map(c => c.trim());
  const primaryCrop = cropArr[0] || 'Tomato';

  const tips = {
    Tomato: {
      en: "ðŸŒ¾ **Tomato Tip**: Keep a close eye out for early signs of Early Blight. If leaf spots appear, spray **Mancozeb 75 WP @ 2.5g/L** in the cool evening. Ensure proper stakes.",
      hi: "ðŸŒ¾ **à¤Ÿà¤®à¤¾à¤Ÿà¤° à¤•à¥€ à¤¸à¤²à¤¾à¤¹**: à¤…à¤—à¥‡à¤¤à¥€ à¤à¥à¤²à¤¸à¤¾ à¤°à¥‹à¤— à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤•à¤°à¥‡à¤‚à¥¤ à¤¯à¤¦à¤¿ à¤ªà¤¤à¥à¤¤à¤¿à¤¯à¥‹à¤‚ à¤ªà¤° à¤—à¥‹à¤² à¤›à¤²à¥à¤²à¥‡à¤¦à¤¾à¤° à¤§à¤¬à¥à¤¬à¥‡ à¤¦à¤¿à¤–à¥‡à¤‚, à¤¤à¥‹ à¤¶à¤¾à¤® à¤•à¥‹ **à¤®à¥ˆà¤¨à¥à¤•à¥‹à¤œà¥‡à¤¬ 75 WP (Dithane M-45) @ 2.5 à¤—à¥à¤°à¤¾à¤®/à¤²à¥€à¤Ÿà¤°** à¤˜à¥‹à¤² à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤",
      mr: "ðŸŒ¾ **à¤Ÿà¥‹à¤®à¥…à¤Ÿà¥‹ à¤Ÿà¥€à¤ª**: à¤²à¤µà¤•à¤° à¤¯à¥‡à¤£à¤¾à¤±à¥à¤¯à¤¾ à¤•à¤°à¤ªà¤¾ à¤°à¥‹à¤—à¤¾à¤šà¥€ à¤¤à¤ªà¤¾à¤¸à¤£à¥€ à¤•à¤°à¤¾. à¤ªà¤¾à¤¨à¥‡ à¤ªà¤¿à¤µà¤³à¥€ à¤ªà¤¡à¤²à¥à¤¯à¤¾à¤¸ à¤¸à¤‚à¤§à¥à¤¯à¤¾à¤•à¤¾à¤³à¥€ **à¤®à¥…à¤¨à¥à¤•à¥‹à¤à¥‡à¤¬ à¥­à¥« à¤¡à¤¬à¥à¤²à¥à¤¯à¥‚à¤ªà¥€ @ à¥¨.à¥« à¤—à¥à¤°à¥…à¤® à¤ªà¥à¤°à¤¤à¤¿ à¤²à¥€à¤Ÿà¤°** à¤ªà¤¾à¤£à¥à¤¯à¤¾à¤¤ à¤®à¤¿à¤¸à¤³à¥‚à¤¨ à¤«à¤µà¤¾à¤°à¤¾."
    },
    Wheat: {
      en: "ðŸŒ¾ **Wheat Tip**: If sowing late, increase your seed rate to **125-150 kg per acre**. Give the crucial Crown Root Initiation (CRI) irrigation exactly **21 days** after sowing.",
      hi: "ðŸŒ¾ **à¤—à¥‡à¤¹à¥‚à¤‚ à¤•à¥€ à¤¸à¤²à¤¾à¤¹**: à¤¦à¥‡à¤°à¥€ à¤¸à¥‡ à¤¬à¥à¤µà¤¾à¤ˆ à¤•à¤°à¤¨à¥‡ à¤ªà¤° à¤¬à¥€à¤œ à¤¦à¤° à¤•à¥‹ à¤¬à¤¢à¤¼à¤¾à¤•à¤° **125-150 à¤•à¤¿à¤²à¥‹/à¤à¤•à¤¡à¤¼** à¤•à¤°à¥‡à¤‚à¥¤ à¤¬à¥à¤µà¤¾à¤ˆ à¤•à¥‡ à¤ à¥€à¤• **21 à¤¦à¤¿à¤¨ à¤¬à¤¾à¤¦** (CRI à¤šà¤°à¤£) à¤ªà¤¹à¤²à¥€ à¤¸à¤¿à¤‚à¤šà¤¾à¤ˆ à¤…à¤µà¤¶à¥à¤¯ à¤•à¤°à¥‡à¤‚à¥¤",
      mr: "ðŸŒ¾ **à¤—à¤¹à¥‚ à¤Ÿà¥€à¤ª**: à¤‰à¤¶à¤¿à¤°à¤¾ à¤ªà¥‡à¤°à¤£à¥€à¤¸à¤¾à¤ à¥€ à¤¬à¤¿à¤¯à¤¾à¤£à¥‡ à¤ªà¥à¤°à¤®à¤¾à¤£ **à¥§à¥¨à¥«-à¥§à¥«à¥¦ à¤•à¤¿à¤²à¥‹ à¤ªà¥à¤°à¤¤à¤¿ à¤à¤•à¤°** à¤ªà¤°à¥à¤¯à¤‚à¤¤ à¤µà¤¾à¤¢à¤µà¤¾. à¤ªà¥‡à¤°à¤£à¥€à¤¨à¤‚à¤¤à¤° à¤…à¤šà¥‚à¤• **à¥¨à¥§ à¤¦à¤¿à¤µà¤¸à¤¾à¤‚à¤¨à¥€** à¤ªà¤¹à¤¿à¤²à¥€ à¤¸à¤¿à¤‚à¤šà¤¨ (CRI à¤…à¤µà¤¸à¥à¤¥à¤¾) à¤ªà¥‚à¤°à¥à¤£ à¤•à¤°à¤¾."
    },
    Cotton: {
      en: "ðŸŒ¾ **Cotton Tip**: Install **5 pheromone traps per acre** to monitor Pink Bollworm. If egg counts exceed 1 per flower, spray **Profenofos 40% + Cypermethrin 4% @ 2ml/L**.",
      hi: "ðŸŒ¾ **à¤•à¤ªà¤¾à¤¸ à¤•à¥€ à¤¸à¤²à¤¾à¤¹**: à¤—à¥à¤²à¤¾à¤¬à¥€ à¤¸à¥à¤‚à¤¡à¥€ à¤•à¥€ à¤¨à¤¿à¤—à¤°à¤¾à¤¨à¥€ à¤•à¥‡ à¤²à¤¿à¤ **5 à¤«à¥‡à¤°à¥‹à¤®à¥‹à¤¨ à¤œà¤¾à¤² à¤ªà¥à¤°à¤¤à¤¿ à¤à¤•à¤¡à¤¼** à¤²à¤—à¤¾à¤à¤‚à¥¤ à¤¯à¤¦à¤¿ à¤ªà¥à¤°à¤•à¥‹à¤ª à¤…à¤§à¤¿à¤• à¤¹à¥‹, à¤¤à¥‹ **à¤ªà¥à¤°à¥‹à¤«à¥‡à¤¨à¥‹à¤«à¥‰à¤¸ + à¤¸à¤¾à¤¯à¤ªà¤°à¤®à¥‡à¤¥à¥à¤°à¤¿à¤¨ @ 2 à¤®à¤¿à¤²à¥€/à¤²à¥€à¤Ÿà¤°** à¤•à¤¾ à¤›à¤¿à¤¡à¤¼à¤•à¤¾à¤µ à¤•à¤°à¥‡à¤‚à¥¤",
      mr: "ðŸŒ¾ **à¤•à¤¾à¤ªà¥‚à¤¸ à¤Ÿà¥€à¤ª**: à¤—à¥à¤²à¤¾à¤¬à¥€ à¤¬à¥‹à¤‚à¤¡à¤…à¤³à¥€à¤šà¥à¤¯à¤¾ à¤¨à¤¿à¤°à¥€à¤•à¥à¤·à¤£à¤¾à¤¸à¤¾à¤ à¥€ **à¤ªà¥à¤°à¤¤à¤¿ à¤à¤•à¤° à¥« à¤«à¥‡à¤°à¥‹à¤®à¥‹à¤¨ à¤¸à¤¾à¤ªà¤³à¥‡** à¤²à¤¾à¤µà¤¾. à¤ªà¥à¤°à¤¾à¤¦à¥à¤°à¥à¤­à¤¾à¤µ à¤¦à¤¿à¤¸à¤²à¥à¤¯à¤¾à¤¸ **à¤ªà¥à¤°à¥‹à¤«à¥‡à¤¨à¥‹à¤«à¥‰à¤¸ + à¤¸à¤¾à¤¯à¤ªà¤°à¤®à¥‡à¤¥à¥à¤°à¤¿à¤¨ @ à¥¨ à¤®à¤¿à¤²à¥€/à¤²à¥€à¤Ÿà¤°** à¤«à¤µà¤¾à¤°à¤¾."
    }
  };

  const cropTips = tips[primaryCrop] || tips.Tomato;
  return cropTips[language] || cropTips.en;
}

// â”€â”€â”€ FARM DIARY FINANCIAL ADVICE â”€â”€â”€
export async function getDiaryAnalysis(context, apiKey) {
  if (!apiKey) {
    return simulateDiaryAnalysis(context);
  }

  try {
    const brief = buildFarmerBrief(context);
    const langInst = getLanguageInstruction(context.profile?.language || 'en');

    const prompt = `FARM CONTEXT AND DIARY ENTRIES:
${brief}

TASK: Perform a detailed financial and operational analysis of the farmer's diary.
- Sum up income vs expenses.
- Point out where they are spending the most (seeds, fertilizer, labor, fuel).
- Give 3 specific recommendations to optimize profit, tailored for their crops.
- Keep it highly structured and business-oriented.

${langInst}`;

    return await callGemini(prompt, apiKey, SYSTEM_PROMPT);
  } catch (error) {
    console.error("AI Diary Analysis Error:", error);
    return simulateDiaryAnalysis(context);
  }
}

function simulateDiaryAnalysis(context) {
  const p = context.profile;
  const lang = p?.language || 'en';
  const diary = context.diaryEntries || [];
  
  const income = diary.filter(e => !e.isExpense).reduce((sum, e) => sum + parseFloat(e.cost || 0), 0);
  const expense = diary.filter(e => e.isExpense).reduce((sum, e) => sum + parseFloat(e.cost || 0), 0);
  const balance = income - expense;

  if (lang === 'hi') {
    return `### ðŸ“Š **à¤•à¥ƒà¤·à¤¿ à¤µà¤¿à¤¤à¥à¤¤à¥€à¤¯ à¤µà¤¿à¤¶à¥à¤²à¥‡à¤·à¤£ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ** (à¤•à¥ƒà¤·à¤¿ à¤®à¤¿à¤¤à¥à¤° à¤à¤†à¤ˆ)
  
*   **à¤•à¥à¤² à¤†à¤¯**: â‚¹${income.toLocaleString()}
*   **à¤•à¥à¤² à¤–à¤°à¥à¤š**: â‚¹${expense.toLocaleString()}
*   **à¤¶à¥à¤¦à¥à¤§ à¤²à¤¾à¤­/à¤¹à¤¾à¤¨à¤¿**: **â‚¹${balance.toLocaleString()}** (${balance >= 0 ? 'ðŸŸ¢ à¤®à¥à¤¨à¤¾à¤«à¤¾' : 'ðŸ”´ à¤˜à¤¾à¤Ÿà¤¾'})

**à¤–à¤°à¥à¤š à¤•à¥‡ à¤ªà¥à¤°à¤®à¥à¤– à¤•à¥à¤·à¥‡à¤¤à¥à¤°:**
1.  à¤‰à¤°à¥à¤µà¤°à¤• à¤à¤µà¤‚ à¤•à¥€à¤Ÿà¤¨à¤¾à¤¶à¤• à¤–à¤°à¥€à¤¦
2.  à¤®à¤œà¤¦à¥‚à¤°à¥€ à¤à¤µà¤‚ à¤œà¥à¤¤à¤¾à¤ˆ à¤–à¤°à¥à¤š

**à¤•à¥ƒà¤·à¤¿ à¤®à¤¿à¤¤à¥à¤° à¤•à¥€ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶à¥‡à¤‚:**
1.  **à¤–à¤¾à¤¦ à¤•à¤¾ à¤¸à¤‚à¤¤à¥à¤²à¤¿à¤¤ à¤‰à¤ªà¤¯à¥‹à¤—**: à¤…à¤‚à¤§à¤¾à¤§à¥à¤‚à¤§ à¤¯à¥‚à¤°à¤¿à¤¯à¤¾ à¤¡à¤¾à¤²à¤¨à¥‡ à¤•à¥‡ à¤¬à¤œà¤¾à¤¯ à¤®à¥ƒà¤¦à¤¾ à¤ªà¤°à¥€à¤•à¥à¤·à¤£ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¹à¥€ à¤‰à¤°à¥à¤µà¤°à¤• à¤¡à¤¾à¤²à¥‡à¤‚, à¤œà¤¿à¤¸à¤¸à¥‡ à¤–à¤°à¥à¤š à¤®à¥‡à¤‚ 20% à¤¤à¤• à¤•à¥€ à¤•à¤®à¥€ à¤†à¤à¤—à¥€à¥¤
2.  **à¤œà¥ˆà¤µà¤¿à¤• à¤–à¤¾à¤¦ à¤•à¤¾ à¤®à¤¿à¤¶à¥à¤°à¤£**: à¤–à¥‡à¤¤ à¤®à¥‡à¤‚ à¤—à¥‹à¤¬à¤° à¤–à¤¾à¤¦ à¤¯à¤¾ à¤•à¥‡à¤‚à¤šà¥à¤† à¤–à¤¾à¤¦ à¤•à¤¾ à¤ªà¥à¤°à¤¯à¥‹à¤— à¤¬à¤¢à¤¼à¤¾à¤à¤‚, à¤œà¤¿à¤¸à¤¸à¥‡ à¤°à¤¾à¤¸à¤¾à¤¯à¤¨à¤¿à¤• à¤–à¤¾à¤¦à¥‹à¤‚ à¤ªà¤° à¤¨à¤¿à¤°à¥à¤­à¤°à¤¤à¤¾ à¤•à¤® à¤¹à¥‹à¤—à¥€à¥¤
3.  **à¤¸à¤¾à¤®à¥‚à¤¹à¤¿à¤• à¤•à¥ƒà¤·à¤¿ à¤¯à¤‚à¤¤à¥à¤°**: à¤Ÿà¥à¤°à¥ˆà¤•à¥à¤Ÿà¤° à¤¯à¤¾ à¤­à¤¾à¤°à¥€ à¤®à¤¶à¥€à¤¨à¤°à¥€ à¤•à¤¿à¤°à¤¾à¤ à¤ªà¤° à¤²à¥‡à¤¨à¥‡ à¤•à¥‡ à¤¬à¤œà¤¾à¤¯ à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤•à¤¸à¥à¤Ÿà¤® à¤¹à¤¾à¤¯à¤°à¤¿à¤‚à¤— à¤¸à¥‡à¤‚à¤Ÿà¤° à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚à¥¤`;
  }

  return `### ðŸ“Š **Farm Financial Analysis Report** (Krushi Mitra AI)
  
*   **Total Revenue**: â‚¹${income.toLocaleString()}
*   **Total Expenses**: â‚¹${expense.toLocaleString()}
*   **Net Profit/Loss**: **â‚¹${balance.toLocaleString()}** (${balance >= 0 ? 'ðŸŸ¢ Profit' : 'ðŸ”´ Loss'})

**Major Cost Centers:**
1.  Input Purchases (Fertilizers/Seeds)
2.  Labor & Machine Rent

**Krushi Mitra Optimization Plan:**
1.  **Precise Fertilizer Placement**: Avoid broad-scale broadcasting of Urea. Apply split-dosing near crop roots to cut input costs by 15-20%.
2.  **Incorporate Farmyard Manure**: Increasing organic carbon in the soil will improve nutrient-use efficiency of chemical inputs.
3.  **Log Daily Machinery Hours**: Track fuel usage on daily tillage runs to optimize tractor operations.`;
}

// â”€â”€â”€ AI MARKETPLACE DESCRIPTION WRITER â”€â”€â”€
export async function generateListingDescription(details, language, apiKey) {
  if (!apiKey) {
    return simulateListingDescription(details, language);
  }

  try {
    const langInst = getLanguageInstruction(language);
    const prompt = `Crop Listing Details:
Crop Name: ${details.commodity}
Variety: ${details.variety || 'Local'}
Grade/Quality: ${details.quality || 'A'}
Quantity: ${details.quantity} ${details.unit}
Price: â‚¹${details.pricePerUnit} per ${details.unit}
Location: ${details.location}
Organic: ${details.isOrganic ? 'Yes' : 'No'}
Negotiable: ${details.isNegotiable ? 'Yes' : 'No'}

TASK: Generate a professional, highly catchy marketplace description for this listing.
- Emphasize the quality grade and organic nature (if organic).
- Specify storage conditions and moisture content (if dried).
- List terms of delivery or pickup clearly.
- Keep it under 5 lines.

${langInst}
Respond only with the description text (no quotes, no intro/outro).`;

    return await callGemini(prompt, apiKey, SYSTEM_PROMPT);
  } catch (error) {
    console.error("AI Listing Generator Error:", error);
    return simulateListingDescription(details, language);
  }
}

function simulateListingDescription(details, language) {
  const { commodity, variety, quality, quantity, unit, pricePerUnit, location, isOrganic } = details;
  
  if (language === 'hi') {
    return `ðŸŒ¾ **à¤¤à¤¾à¤œà¤¼à¤¾ à¤”à¤° à¤‰à¤šà¥à¤š à¤—à¥à¤£à¤µà¤¤à¥à¤¤à¤¾ à¤µà¤¾à¤²à¤¾ ${commodity} à¤¬à¤¿à¤•à¥à¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤‰à¤ªà¤²à¤¬à¥à¤§!**
ðŸ“ **à¤¸à¥à¤¥à¤¾à¤¨**: ${location}
âœ¨ **à¤µà¤¿à¤µà¤°à¤£**: à¤¯à¤¹ ${variety || 'à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯'} à¤•à¤¿à¤¸à¥à¤® à¤•à¤¾ à¤—à¥à¤°à¥‡à¤¡-${quality} ${commodity} à¤¹à¥ˆà¥¤ ${isOrganic ? 'à¤ªà¥‚à¤°à¥à¤£ à¤°à¥‚à¤ª à¤¸à¥‡ à¤œà¥ˆà¤µà¤¿à¤• (à¤—à¥‹à¤¬à¤° à¤–à¤¾à¤¦ à¤¸à¥‡ à¤¤à¥ˆà¤¯à¤¾à¤°)' : 'à¤ªà¥‚à¤°à¥€ à¤¤à¤°à¤¹ à¤¸à¥‡ à¤¸à¥à¤–à¤¾à¤¯à¤¾ à¤”à¤° à¤¸à¤¾à¤« à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ'}à¥¤ à¤•à¥à¤² à¤®à¤¾à¤¤à¥à¤°à¤¾ ${quantity} ${unit} à¤¹à¥ˆà¥¤ à¤­à¤¾à¤µ â‚¹${pricePerUnit}/${unit} (à¤µà¤¾à¤°à¥à¤¤à¤¾à¤²à¤¾à¤ª à¤¯à¥‹à¤—à¥à¤¯)à¥¤ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚!`;
  }
  
  return `ðŸŒ¾ **Premium Quality ${commodity} Available for Direct Sale!**
ðŸ“ **Location**: ${location}
âœ¨ **Details**: Grade-${quality} ${commodity} of the ${variety || 'Local'} variety. ${isOrganic ? '100% Organically grown' : 'Well-cleaned and dried with optimal moisture content'}. Total quantity available: ${quantity} ${unit}. Price: â‚¹${pricePerUnit}/${unit}. Ready for pickup/delivery immediately.`;
}

// â”€â”€â”€ 1. COMMUNITY AI CONTENT MODERATION MODEL â”€â”€â”€
export async function moderateContent(text, apiKey = null) {
  if (!text || !text.trim()) {
    return { isFlagged: false, category: 'General', reason: '' };
  }

  const lowerText = text.toLowerCase();
  
  // Basic rule check for immediate offline moderation
  const spamKeywords = ['crypto', 'betting', 'casino', 'free money', 'whatsapp group link', 'buy followers'];
  const hasSpam = spamKeywords.some(k => lowerText.includes(k));
  
  let detectedCategory = 'General';
  if (lowerText.includes('disease') || lowerText.includes('pest') || lowerText.includes('keeda') || lowerText.includes('fungus') || lowerText.includes('blight') || lowerText.includes('spray')) {
    detectedCategory = 'Crop Disease';
  } else if (lowerText.includes('price') || lowerText.includes('rate') || lowerText.includes('mandi') || lowerText.includes('bhav') || lowerText.includes('quintal')) {
    detectedCategory = 'Market Prices';
  } else if (lowerText.includes('rain') || lowerText.includes('weather') || lowerText.includes('mausam') || lowerText.includes('temperature') || lowerText.includes('monsoon')) {
    detectedCategory = 'Weather';
  } else if (lowerText.includes('scheme') || lowerText.includes('pm kisan') || lowerText.includes('yojana') || lowerText.includes('subsidy') || lowerText.includes('kcc')) {
    detectedCategory = 'Government Schemes';
  }

  if (hasSpam) {
    return { isFlagged: true, category: detectedCategory, reason: 'Spam or unauthorized promotional content detected.' };
  }

  if (!apiKey) {
    return { isFlagged: false, category: detectedCategory, reason: '' };
  }

  try {
    const prompt = `You are an AI community moderator for an Indian agriculture platform.
Analyze the following post text:
"${text}"

Check for:
1. Spam, abuse, profane language, inappropriate material, or scam links.
2. Auto-categorize into ONE of: 'Crop Disease', 'Market Prices', 'Weather', 'Government Schemes', 'General'.

Respond ONLY in JSON format:
{
  "is_flagged": boolean,
  "category": "Crop Disease" | "Market Prices" | "Weather" | "Government Schemes" | "General",
  "reason": "Brief reason if flagged, otherwise empty"
}`;

    const raw = await callGemini(prompt, apiKey, SYSTEM_PROMPT);
    const jsonStr = extractJson(raw);
    const parsed = JSON.parse(jsonStr);
    return {
      isFlagged: parsed.is_flagged || false,
      category: parsed.category || detectedCategory,
      reason: parsed.reason || ''
    };
  } catch (err) {
    console.warn("AI Moderation Fallback:", err);
    return { isFlagged: false, category: detectedCategory, reason: '' };
  }
}

// â”€â”€â”€ 3. SOIL ADVISOR & NPK CALCULATION ENGINE â”€â”€â”€
export async function calculateSoilNPK(soilData, cropName, apiKey = null) {
  const { nitrogen = 200, phosphorus = 20, potassium = 150, ph = 6.5 } = soilData;
  
  if (!apiKey) {
    let nDef = nitrogen < 250 ? 'Low Nitrogen' : 'Optimal Nitrogen';
    let pDef = phosphorus < 25 ? 'Low Phosphorus' : 'Optimal Phosphorus';
    let kDef = potassium < 140 ? 'Low Potassium' : 'Optimal Potassium';
    
    return {
      assessment: `Soil pH is ${ph} (${ph < 6.5 ? 'Acidic' : ph > 7.5 ? 'Alkaline' : 'Optimal'}). Status: ${nDef}, ${pDef}, ${kDef}.`,
      fertilizers: `Apply 45kg Urea (basal + top dressing) and 50kg DAP per acre for ${cropName}.`,
      organicAmendments: `Add 2 tons of well-decomposed Farmyard Manure (FYM) or Vermicompost.`,
      limeRecommendation: ph < 6.5 ? 'Apply 100kg Lime per acre to correct acidity.' : ph > 7.5 ? 'Apply 150kg Gypsum per acre to reduce alkalinity.' : 'Soil pH is balanced.',
      micronutrients: `Apply Zinc Sulphate (21%) @ 10kg/acre.`,
      nextSteps: `Retest soil after harvesting ${cropName}.`
    };
  }

  try {
    const prompt = `Analyze soil data for crop "${cropName}": Nitrogen=${nitrogen} kg/ha, Phosphorus=${phosphorus} kg/ha, Potassium=${potassium} kg/ha, pH=${ph}.
Return JSON ONLY:
{
  "assessment": "Overall soil health assessment",
  "fertilizers": "Specific NPK requirement in kg/acre and bags of Urea, DAP, MOP",
  "organic_amendments": "Organic manure and biofertilizer recommendations",
  "lime_recommendation": "Lime or Gypsum requirement based on pH",
  "micronutrients": "Zinc, Boron, or Iron spray dosage",
  "next_steps": "Action plan for this season"
}`;
    const raw = await callGemini(prompt, apiKey, SYSTEM_PROMPT);
    const parsed = JSON.parse(extractJson(raw));
    return {
      assessment: parsed.assessment || '',
      fertilizers: parsed.fertilizers || '',
      organicAmendments: parsed.organic_amendments || '',
      limeRecommendation: parsed.lime_recommendation || '',
      micronutrients: parsed.micronutrients || '',
      nextSteps: parsed.next_steps || ''
    };
  } catch (err) {
    console.error("Soil NPK Engine Error:", err);
    return {
      assessment: `Soil status for ${cropName}: N=${nitrogen}, P=${phosphorus}, K=${potassium}, pH=${ph}.`,
      fertilizers: `Apply 50kg Urea and 40kg DAP per acre.`,
      organicAmendments: `Apply 2-3 tons FYM or Vermicompost.`,
      limeRecommendation: 'Not needed',
      micronutrients: 'Zinc Sulphate @ 5kg/acre.',
      nextSteps: 'Retest in 6 months.'
    };
  }
}

// â”€â”€â”€ 4. MANDI PRICE FORECASTING & TRENDS MODEL â”€â”€â”€
export async function predictMarketTrends(commodity, market = 'Nashik', priceHistory = [], apiKey = null) {
  if (!apiKey) {
    return {
      trend: 'Bullish',
      volatility: 'Moderate',
      advisory: `Demand for ${commodity} in ${market} is expected to rise by 5-8% over the next 15 days due to festive seasonal demand.`,
      targetPriceRange: `â‚¹2,400 - â‚¹2,750 / Quintal`,
      confidence: 85
    };
  }

  try {
    const prompt = `Analyze commodity price trends for "${commodity}" in market "${market}".
Price History sample: ${JSON.stringify(priceHistory.slice(0, 5))}
Return JSON ONLY:
{
  "trend": "Bullish" | "Bearish" | "Stable",
  "volatility": "High" | "Moderate" | "Low",
  "advisory": "Actionable farmer advice (Hold/Sell)",
  "targetPriceRange": "â‚¹Expected range per quintal",
  "confidence": 85
}`;
    const raw = await callGemini(prompt, apiKey, SYSTEM_PROMPT);
    const parsed = JSON.parse(extractJson(raw));
    return {
      trend: parsed.trend || 'Stable',
      volatility: parsed.volatility || 'Moderate',
      advisory: parsed.advisory || `Monitor prices in ${market}.`,
      targetPriceRange: parsed.targetPriceRange || 'Current Mandi Rate',
      confidence: parsed.confidence || 80
    };
  } catch (err) {
    return {
      trend: 'Stable',
      volatility: 'Low',
      advisory: `Hold produce for 1-2 weeks if storage is available.`,
      targetPriceRange: `Market rate`,
      confidence: 75
    };
  }
}

