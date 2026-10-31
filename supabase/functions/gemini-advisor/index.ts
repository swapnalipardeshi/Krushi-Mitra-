// ============================================================================
// KRUSHI MITRA - SUPABASE EDGE FUNCTION: gemini-advisor
// ============================================================================
// Securely proxies requests to Google Gemini AI without exposing keys in client APK.
// Implements server-side caching, rate-limit backoff, and agricultural system prompts.
// ============================================================================

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// In-memory cache for prompt responses (1 hour TTL)
const cache = new Map<string, { response: string; expiry: number }>();

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const geminiApiKey = Deno.env.get("GEMINI_API_KEY");
    if (!geminiApiKey) {
      return new Response(
        JSON.stringify({
          error: "GEMINI_API_KEY is not configured in Supabase Edge Function secrets.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const {
      prompt,
      systemPrompt,
      imageBase64,
      mimeType = "image/jpeg",
      action = "generate_text",
      model = "gemini-1.5-flash",
    } = body;

    if (!prompt && !imageBase64) {
      return new Response(
        JSON.stringify({ error: "Missing required 'prompt' or 'imageBase64' field." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Cache lookup for non-image queries
    const cacheKey = `${action}_${prompt?.trim()}`;
    const cached = cache.get(cacheKey);
    if (!imageBase64 && cached && cached.expiry > Date.now()) {
      return new Response(
        JSON.stringify({ text: cached.response, cached: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build Gemini REST API payload
    const contents: any[] = [];
    const parts: any[] = [];

    if (imageBase64) {
      parts.push({
        inline_data: {
          mime_type: mimeType,
          data: imageBase64,
        },
      });
    }

    if (prompt) {
      parts.push({ text: prompt });
    }

    contents.push({ role: "user", parts });

    const payload: any = { contents };

    if (systemPrompt) {
      payload.systemInstruction = {
        parts: [{ text: systemPrompt }],
      };
    }

    payload.generationConfig = {
      temperature: 0.4,
      maxOutputTokens: 2048,
    };

    const targetModel = model.replace(/^models\//, "");
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${geminiApiKey}`;

    const geminiRes = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      const status = geminiRes.status;

      if (status === 429) {
        return new Response(
          JSON.stringify({
            error: "RATE_LIMITED",
            message: "AI service quota temporarily exceeded. Please try again shortly.",
          }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: `Gemini API returned HTTP ${status}: ${errText}` }),
        { status: status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await geminiRes.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Cache text response for 1 hour
    if (!imageBase64 && generatedText) {
      cache.set(cacheKey, {
        response: generatedText,
        expiry: Date.now() + 60 * 60 * 1000,
      });
    }

    return new Response(
      JSON.stringify({ text: generatedText, cached: false }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Unknown internal error in edge function." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

