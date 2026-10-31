# 🚀 Krushi Mitra — Production Deployment & Architecture Guide

This comprehensive guide details the architecture, Supabase backend configuration, Edge Functions, security policies, and production Android build instructions for **Krushi Mitra** (AI-Powered Farmer Assistant).

---

## 📋 1. Prerequisites & Software Requirements

| Component | Minimum Version | Verified Working Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Flutter SDK** | `>=3.24.0` | `3.24.0+ (Dart 3.5.0)` | Core cross-platform mobile framework |
| **Java JDK** | `17` | OpenJDK 17 / Eclipse Temurin 17 | Android Gradle compilation |
| **Android SDK** | `API 34+` | Android SDK 34 / 35 | Target Android runtime |
| **Android NDK** | `27+` | `28.2.13676358` | Required for JNI and speech-to-text plugins |
| **Supabase Project** | Latest | PostgreSQL 15+ (Hosted) | Primary Auth, Database, Storage, Edge Functions |

---

## 🏗️ 2. Backend Architecture: Supabase Overhaul

Krushi Mitra uses **Supabase exclusively** as its production backend. All legacy Firestore and Firebase Authentication integrations have been completely removed.

### 2.1 Supabase Services in Use
1. **Supabase Auth**: PKCE secure email/password authentication, persistent session restoration, and password resets.
2. **PostgreSQL Database**: Real-time synchronized relational database for farmer profiles, farm diaries, marketplace trades, community posts, and APMC mandi benchmark prices.
3. **Supabase Storage**: Public bucket `krushi-uploads` for crop diagnosis leaves, farmer avatar photos, and marketplace listing photos.
4. **Supabase Edge Functions**: Serverless Deno functions (`gemini-advisor`) to securely query Google Gemini AI without exposing private API keys in client APKs.

---

## 🗄️ 3. Database Schema & SQL Migrations

The complete, idempotent database migration is located at:
`supabase/migrations/20261031000000_krushi_mitra_core.sql`

### 3.1 Tables Overview
- **`public.farmers`**: Farmer profile records, land size, crops grown, preferred language, and notification tokens.
- **`public.farm_diary`**: Farm financial records (expenses and income) and agricultural activity tracking.
- **`public.marketplace_listings`**: Farmer-to-farmer and buyer trade listings with price per unit, quantities, and status (`active` / `sold`).
- **`public.community_posts`**: Farmer community forum discussions with like counters and photo attachments.
- **`public.mandi_prices`**: Real-time & cached APMC mandi market commodity prices with minimum, maximum, and modal benchmark rates.
- **`public.conflict_audit_logs`**: Audit trail of pre-commit weather/soil conflict warnings and farmer override decisions.

### 3.2 Applying Migrations
To apply or re-run the schema migration:
```bash
# Using Supabase CLI:
supabase db push

# Or execute directly via Supabase Dashboard SQL Editor:
# Copy and execute contents of supabase/migrations/20261031000000_krushi_mitra_core.sql
```

---

## 🔒 4. Row Level Security (RLS) Policies

All tables enforce Row Level Security to guarantee multi-tenant safety and seller ownership validation:

| Table | SELECT Policy | INSERT Policy | UPDATE / DELETE Policy |
| :--- | :--- | :--- | :--- |
| `farmers` | `true` (Public profile discovery) | `auth.uid() = id OR anon` | `auth.uid() = id` (Owner only) |
| `farm_diary` | `auth.uid() = farmer_id` (Private) | `auth.uid() = farmer_id` | `auth.uid() = farmer_id` (Owner only) |
| `marketplace_listings` | `true` (Public marketplace) | `auth.uid() = farmer_id` | `auth.uid() = farmer_id` (Seller only) |
| `community_posts` | `true` (Public community) | `auth.uid() = farmer_id` | `auth.uid() = farmer_id` (Author only) |
| `mandi_prices` | `true` (Public market rates) | Service role / Authenticated | Service role / Authenticated |
| `storage.objects` (`krushi-uploads`) | `bucket_id = 'krushi-uploads'` | Authenticated users | Authenticated owners |

---

## ⚡ 5. Supabase Edge Function: `gemini-advisor`

To prevent Gemini API keys from ever being exposed in client source code or decompiled APKs, all advisory calls are routed through the serverless Supabase Edge Function:
`supabase/functions/gemini-advisor/index.ts`

### 5.1 Setting Secrets in Supabase
Run the following Supabase CLI commands:
```bash
supabase secrets set GEMINI_API_KEY="your_real_gemini_api_key_here"
```

### 5.2 Deploying the Edge Function
```bash
supabase functions deploy gemini-advisor --no-verify-jwt
```

### 5.3 Features of `gemini-advisor`
- Server-side in-memory caching (1-hour TTL) to prevent duplicate API hits.
- Rate-limit backoff on HTTP 429 quota exhaustion.
- Support for multimodal leaf photo analysis and pure agricultural text guidance.
- Client-side fallback: If offline or prior to Edge Function deployment, `GeminiService` gracefully falls back to local client SDK calls with a strict 2-retry limit and exponential backoff.

---

## 🔑 6. Environment Variables (`.env`)

Create a `.env` file in the `krushi_mitra/` directory based on `.env.example`:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-publishable-anon-key

# Optional Client-Side Gemini Fallback Keys
GEMINI_API_KEY=your_gemini_key
GEMINI_KEY_1=your_backup_gemini_key

# Weather & Market APIs
OPENWEATHER_KEY=your_openweather_key
AGMARKET_KEY=your_datagov_agmarknet_key

# Optional Fast LLM Fallback
GROQ_API_KEY=your_groq_key
```

> [!IMPORTANT]
> Never place the Supabase `service_role` key in `.env` or client code. The `service_role` key is strictly for server-side administrative tasks.

---

## 📱 7. Android Production Build & Release Signing

### 7.1 Keystore Setup
1. Generate an upload keystore:
```bash
keytool -genkey -v -keystore krushi_mitra/android/app/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```
2. Create `krushi_mitra/android/key.properties` (based on `key.properties.example`):
```properties
keyAlias=upload
keyPassword=your_keystore_password
storeFile=upload-keystore.jks
storePassword=your_keystore_password
```

### 7.2 Release APK Generation
Run inside `krushi_mitra`:
```bash
flutter build apk --release
```
**Output Artifact**: `build/app/outputs/flutter-apk/app-release.apk`

### 7.3 Android App Bundle (AAB) Generation for Google Play
Run inside `krushi_mitra`:
```bash
flutter build appbundle --release
```
**Output Artifact**: `build/app/outputs/bundle/release/app-release.aab`

---

## 🛠️ 8. Key Issues Identified & Resolved

| Previous Error | Root Cause | Permanent Resolution |
| :--- | :--- | :--- |
| `Auth Safety: Timeout reached, opening resilient dashboard` | `auth_provider.dart` had a 2-second timeout that force-loaded a fallback profile and opened the dashboard even when unauthenticated. | Removed the safety timer. Implemented strict Supabase session check in `AuthGate`. Added explicit guest mode via `enterAsGuest()`. |
| `PERMISSION_DENIED: Missing or insufficient permissions` | `marketplace_provider.dart` listened to an unconfigured Firestore collection `marketplace`. | Replaced Firestore stream with Supabase Realtime stream (`getMarketListingsStream()`) with local caching and offline fallback. |
| Rapid Gemini Quota Exhaustion (`429 RESOURCE_EXHAUSTED`) | Whenever Firestore or Agmarket threw errors, the app called Gemini to generate fake prices and fake listings, looping 12 retries over 5 keys. | Deprecated fake AI price generation. Switched Mandi prices to real Supabase tables + official MSP benchmarks. Implemented query caching and 2-retry limit. |
| UI Rendering Crash on Marketplace Screen | `AppTheme` set `minimumSize: const Size.fromHeight(60)` for `ElevatedButton`. In horizontal `Row` widgets, this forced infinite width on an unbounded axis. | Fixed to `Size(64, 50)` with bounded constraints. |
| JNI / Speech-to-Text NDK compilation failure | Submodules required Android NDK 28. | Configured `ndkVersion = "28.2.13676358"` in `app/build.gradle.kts`. |

