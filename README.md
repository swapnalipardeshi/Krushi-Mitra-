
# 🌾 Krushi Mitra (कृषी मित्र) — AI-Powered Smart Agriculture Platform

**Krushi Mitra** is a production-grade, offline-resilient, AI-enabled mobile application engineered specifically for Indian farmers. It integrates real-time agricultural intelligence, localized crop disease diagnosis, direct farmer-to-farmer trade, APMC mandi market price discovery, and government scheme eligibility guidance.

---

## 🌟 Key Highlights & Core Features

- **🔐 100% Supabase Backend**: Enterprise-grade PostgreSQL database, Supabase PKCE authentication, and cloud storage bucket (`krushi-uploads`).
- **🛡️ Multi-Tenant Security & RLS**: Strict Row Level Security policies guaranteeing that farmers can only modify their own diary entries, marketplace trades, and profile data.
- **⚡ Secure Serverless AI (Gemini Edge Functions)**: Google Gemini AI requests are securely executed via Supabase Edge Functions (`gemini-advisor`), keeping private API keys off client devices.
- **🌾 Real-Time APMC Mandi Rates**: Live verified market benchmark prices directly from Supabase and Agmarknet feeds (no fabricated or hallucinated price numbers).
- **🩺 AI Crop Doctor**: Multimodal leaf disease identification delivering both chemical (with exact Indian dosage & brand names) and organic/desi treatment recommendations.
- **📊 Farm Diary**: Automated ledger for crop expenses, fertilizer investments, and harvest revenue tracking.
- **🌦️ Pre-Commit Conflict Engine**: Real-time evaluation of diary actions against live weather to warn farmers before spraying during high rain or wind forecasts.
- **🤝 Farmer Marketplace**: Transparent farmer-to-buyer crop listing platform with seller ownership validation, sold-state tracking, and WhatsApp/Call integration.

---

## 🏛️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Mobile Client** | Flutter 3.24+ / Dart 3.5+, Material 3, Riverpod State Management |
| **Backend & Database** | Supabase (PostgreSQL 15), Row Level Security (RLS) |
| **Cloud Storage** | Supabase Storage (`krushi-uploads`) |
| **AI & LLM Services** | Supabase Edge Functions + Google Gemini 1.5/2.0 Flash + Groq Llama-3.1 Fallback |
| **Meteorology & Data** | Open-Meteo (Live meteorological feed) & OpenWeatherMap |
| **Push Notifications** | Firebase Cloud Messaging (FCM) |

---

## 📁 Project Structure

```text
krushi_mitra/
├── lib/
│   ├── core/
│   │   ├── constants/           # API endpoints & asset keys
│   │   ├── providers/           # Global Riverpod state providers (Auth, Locale, DB, Market)
│   │   ├── services/            # Domain services (Supabase, Storage, AI, Market, Weather)
│   │   └── theme/               # Dark & Light agriculture palette (Emerald, Terracotta)
│   ├── data/
│   │   └── models/              # Pure Dart data entities (Farmer, Post, Diary, MarketPrice)
│   ├── features/
│   │   ├── ai_doctor/           # Multimodal crop diagnosis
│   │   ├── auth/                # Supabase login, signup, password reset
│   │   ├── farm_diary/          # Farm expenses ledger & activity logging
│   │   ├── govt_schemes/        # Central & state welfare scheme discovery
│   │   ├── home/                # Dynamic dashboard with weather & quick actions
│   │   ├── market_prices/       # Mandi APMC live commodity prices
│   │   ├── marketplace/         # Produce trading & seller management
│   │   └── weather/             # 7-day forecast & agricultural spraying advisories
│   ├── app.dart                 # Root MaterialApp with locale routing
│   └── main.dart                # Application entrypoint with resilient error boundaries
├── supabase/
│   ├── functions/
│   │   └── gemini-advisor/      # Serverless Deno Edge Function for Gemini AI
│   └── migrations/
│       └── 20261031000000_krushi_mitra_core.sql # Complete PostgreSQL DDL & RLS schema
└── test/
    ├── api_test.dart            # Service integration checks
    └── supabase_models_test.dart# Model serialization & conflict engine unit tests
```

---

## 🚀 Quick Start Guide

### 1. Clone & Setup Dependencies
```bash
git clone https://github.com/your-username/Krushi-Mitra.git
cd Krushi-Mitra/krushi_mitra
flutter pub get
```

### 2. Configure Environment
Copy `.env.example` to `.env` and enter your Supabase URL and anon key:
```bash
cp .env.example .env
```
Fill in your credentials:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-publishable-key
```

### 3. Deploy Supabase Backend
Apply all database tables and security policies:
```bash
# In the project root:
supabase db push
# Or copy supabase/migrations/20261031000000_krushi_mitra_core.sql into your Supabase SQL Editor
```

Deploy the secure AI Edge Function:
```bash
supabase secrets set GEMINI_API_KEY="your-gemini-api-key"
supabase functions deploy gemini-advisor --no-verify-jwt
```

### 4. Run Locally
```bash
# Run on connected device or emulator
flutter run
```

---

## 🧪 Testing & Verification

Execute all unit and business logic tests:
```bash
flutter test test/supabase_models_test.dart
```

Run static analyzer:
```bash
flutter analyze
```

---

## 📦 Production Android Build

### Release APK
```bash
flutter build apk --release
```
Artifact: `build/app/outputs/flutter-apk/app-release.apk`

### Android App Bundle (AAB for Google Play)
```bash
flutter build appbundle --release
```
Artifact: `build/app/outputs/bundle/release/app-release.aab`

For signing keystore instructions, refer to `DEPLOYMENT_GUIDE.md`.

---

## 📄 License
This project is licensed under the Apache 2.0 License.
