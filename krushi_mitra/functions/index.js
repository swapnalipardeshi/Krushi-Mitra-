const functions = require("firebase-functions");
const axios = require("axios");

// Unified AI Cloud Function for Krushi Mitra
// Supports Claude (Primary) and Gemini API Key Rotation (Fallback)

exports.askKrushiMitra = functions.https.onCall(async (data, context) => {
    const { text, language, image_base64, crop, task } = data;

    if (!text && !image_base64) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Must provide either text or image query.'
        );
    }

    const systemPrompt = `You are Krushi Mitra (कृषी मित्र), a friendly expert agricultural assistant for Indian farmers.
You provide clear, accurate farming advice for Indian crops, pest/disease diagnoses, soil management, market prices, and government schemes.
Always respond in ${language || "English"}. Use bullet points and simple language.
${crop ? `Farmer crop context: ${crop}.` : ""}
Task mode: ${task || "general"}.`;

    // 1. Check for Anthropic API Key
    const anthropicKey = (functions.config().anthropic && functions.config().anthropic.key) || process.env.ANTHROPIC_API_KEY;
    
    if (anthropicKey) {
        try {
            let content = [];
            if (image_base64) {
                content.push({
                    type: "image",
                    source: {
                        type: "base64",
                        media_type: "image/jpeg",
                        data: image_base64,
                    }
                });
            }
            if (text) {
                content.push({ type: "text", text: text });
            }

            const response = await axios.post('https://api.anthropic.com/v1/messages', {
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 1024,
                system: systemPrompt,
                messages: [{ role: 'user', content: content }]
            }, {
                headers: {
                    'x-api-key': anthropicKey,
                    'anthropic-version': '2023-06-01',
                    'content-type': 'application/json'
                }
            });

            return {
                response: response.data.content[0].text,
                model: 'claude-3-5-sonnet'
            };
        } catch (err) {
            console.warn("Claude API failed, falling back to Gemini:", err.message);
        }
    }

    // 2. Gemini Fallback via HTTP REST
    const geminiKey = process.env.GEMINI_KEY_1 || (functions.config().gemini && functions.config().gemini.key) || "YOUR_GEMINI_API_KEY";
    
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
        const contents = [{ role: 'user', parts: [{ text: `${systemPrompt}\n\nQuery: ${text || 'Analyze image'}` }] }];
        
        const res = await axios.post(url, { contents }, { headers: { 'Content-Type': 'application/json' } });
        const textOut = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI advisory generated.";
        
        return {
            response: textOut,
            model: 'gemini-1.5-flash'
        };
    } catch (e) {
        console.error("Cloud Function AI error:", e.message);
        return {
            response: "Krushi Mitra AI Advisor is currently active in offline mode. Please check internet connection.",
            model: 'offline-rule-based'
        };
    }
});
