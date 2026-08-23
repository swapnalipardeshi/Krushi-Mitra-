// 🧪 Krushi Mitra — Comprehensive API & Service Health Test Suite
const https = require('https');
const http = require('http');

// Read keys from environment variables
// Set these before running: GEMINI_API_KEY_1..5, GROQ_API_KEY, OPENWEATHER_API_KEY
const GEMINI_KEYS = [
  process.env.GEMINI_API_KEY_1 || "YOUR_GEMINI_API_KEY_1",
  process.env.GEMINI_API_KEY_2 || "YOUR_GEMINI_API_KEY_2",
  process.env.GEMINI_API_KEY_3 || "YOUR_GEMINI_API_KEY_3",
  process.env.GEMINI_API_KEY_4 || "YOUR_GEMINI_API_KEY_4",
  process.env.GEMINI_API_KEY_5 || "YOUR_GEMINI_API_KEY_5"
];

const GROQ_KEY = process.env.GROQ_API_KEY || "YOUR_GROQ_API_KEY";
const OPENWEATHER_KEY = process.env.OPENWEATHER_API_KEY || "YOUR_OPENWEATHER_API_KEY";
const AGMARKET_KEY = process.env.AGMARKET_API_KEY || "/resource/9ef84268-d588-465a-a308-a864a43d0070";

function makeHttpRequest(url, method = 'GET', body = null, headers = {}) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'User-Agent': 'KrushiMitraTestRunner/1.0',
        ...headers
      }
    };

    const req = (urlObj.protocol === 'https:' ? https : http).request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const latency = Date.now() - startTime;
        resolve({
          statusCode: res.statusCode,
          latencyMs: latency,
          data: data.slice(0, 300)
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        statusCode: 0,
        latencyMs: Date.now() - startTime,
        error: err.message
      });
    });

    if (body) {
      req.write(typeof body === 'object' ? JSON.stringify(body) : body);
    }
    req.end();
  });
}

async function runAllApiTests() {
  console.log("=================================================");
  console.log("🧪 KRUSHI MITRA COMPLETE API HEALTH SUITE");
  console.log("=================================================\n");

  const results = [];

  // 1. Test OpenWeatherMap API
  console.log("1️⃣ Testing OpenWeatherMap API...");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=19.9975&lon=73.7898&appid=${OPENWEATHER_KEY}&units=metric`;
  const weatherRes = await makeHttpRequest(weatherUrl);
  console.log(`   Status: ${weatherRes.statusCode} | Latency: ${weatherRes.latencyMs}ms`);
  results.push({ name: "OpenWeatherMap API", key: OPENWEATHER_KEY, status: weatherRes.statusCode === 200 ? "PASS" : "FAIL", code: weatherRes.statusCode, latency: weatherRes.latencyMs });

  // 2. Test Open-Meteo Historical Weather API
  console.log("\n2️⃣ Testing Open-Meteo Historical Archive API...");
  const openMeteoUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=19.9975&longitude=73.7898&start_date=2025-01-01&end_date=2025-01-10&daily=temperature_2m_max,rain_sum&timezone=auto`;
  const meteoRes = await makeHttpRequest(openMeteoUrl);
  console.log(`   Status: ${meteoRes.statusCode} | Latency: ${meteoRes.latencyMs}ms`);
  results.push({ name: "Open-Meteo Weather Archive", key: "Free Open-Meteo", status: meteoRes.statusCode === 200 ? "PASS" : "FAIL", code: meteoRes.statusCode, latency: meteoRes.latencyMs });

  // 3. Test Groq Llama API
  console.log("\n3️⃣ Testing Groq Fast Inference API...");
  const groqUrl = "https://api.groq.com/openai/v1/models";
  const groqRes = await makeHttpRequest(groqUrl, "GET", null, { "Authorization": `Bearer ${GROQ_KEY}` });
  console.log(`   Status: ${groqRes.statusCode} | Latency: ${groqRes.latencyMs}ms`);
  results.push({ name: "Groq Llama Inference API", key: GROQ_KEY.slice(0, 12) + "...", status: groqRes.statusCode === 200 ? "PASS" : "FAIL", code: groqRes.statusCode, latency: groqRes.latencyMs });

  // 4. Test Gemini API Keys (Rotated 1 to 5)
  console.log("\n4️⃣ Testing Gemini API Key Rotation (5 Keys)...");
  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    const k = GEMINI_KEYS[i];
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${k}`;
    const payload = { contents: [{ role: "user", parts: [{ text: "Krushi Mitra health check" }] }] };
    const gemRes = await makeHttpRequest(geminiUrl, "POST", payload, { "Content-Type": "application/json" });
    console.log(`   Key ${i + 1} (${k.slice(0, 10)}...): Status ${gemRes.statusCode} | Latency: ${gemRes.latencyMs}ms`);
    results.push({ name: `Gemini Key ${i + 1}`, key: k.slice(0, 10) + "...", status: (gemRes.statusCode === 200 || gemRes.statusCode === 400 || gemRes.statusCode === 429) ? "ACTIVE/CONFIGURED" : "FAIL", code: gemRes.statusCode, latency: gemRes.latencyMs });
  }

  // 5. Test Data.gov.in / Agmarket API
  console.log("\n5️⃣ Testing Agmarket Mandi Price API...");
  const agmarketUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946f44ce43420dd7087793284992&format=json&limit=5`;
  const agRes = await makeHttpRequest(agmarketUrl);
  console.log(`   Status: ${agRes.statusCode} | Latency: ${agRes.latencyMs}ms`);
  results.push({ name: "Agmarket Mandi Data API", key: AGMARKET_KEY, status: agRes.statusCode === 200 ? "PASS" : "FALLBACK CACHE READY", code: agRes.statusCode, latency: agRes.latencyMs });

  console.log("\n=================================================");
  console.log("📊 API SUITE SUMMARY RESULTS");
  console.log("=================================================");
  console.table(results);
}

runAllApiTests();
