import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:krushi_mitra/core/services/ai_service.dart';
import 'package:krushi_mitra/core/services/market_service.dart';
import 'package:krushi_mitra/core/services/weather_service.dart';
import 'package:krushi_mitra/core/services/notification_service.dart';
import 'app.dart';

void main() async {
  runZonedGuarded(() async {
    WidgetsFlutterBinding.ensureInitialized();

    // Global Flutter error handler
    FlutterError.onError = (FlutterErrorDetails details) {
      FlutterError.presentError(details);
      debugPrint('FLUTTER GLOBAL ERROR: ${details.exceptionAsString()}');
    };

    // 1. Load environment variables (.env)
    try {
      await dotenv.load(fileName: ".env");
      debugPrint("Environment (.env) loaded successfully.");
    } catch (e) {
      debugPrint("Dotenv load notice: $e. Ensure .env exists in root.");
    }

    // 2. Initialize Supabase as Primary Backend (Auth, Database, Storage)
    final supabaseUrl = dotenv.env['SUPABASE_URL'] ?? 'https://jsqmqaqirtxvclsyjimd.supabase.co';
    final supabaseKey = dotenv.env['SUPABASE_ANON_KEY'] ?? '';
    if (supabaseUrl.isNotEmpty && supabaseKey.isNotEmpty) {
      try {
        await Supabase.initialize(
          url: supabaseUrl,
          anonKey: supabaseKey,
          authOptions: const FlutterAuthClientOptions(
            authFlowType: AuthFlowType.pkce,
            autoRefreshToken: true,
          ),
        );
        debugPrint("Supabase initialized as primary backend!");
      } catch (e) {
        debugPrint("Supabase initialization error: $e");
      }
    } else {
      debugPrint("WARNING: Supabase URL or Anon Key is missing from .env!");
    }

    // 3. Initialize FCM Push Notifications (Fail-safe, non-blocking)
    try {
      await NotificationService().initialize();
    } catch (e) {
      debugPrint("Notification init notice: $e");
    }

    // 4. Initialize Local SharedPreferences
    try {
      await SharedPreferences.getInstance();
    } catch (e) {
      debugPrint("Prefs init error: $e");
    }

    // 5. Initialize Core Services (Fail-safe)
    try {
      final aiService = AIService();
      aiService.initialize();
      MarketService().initialize();
      WeatherService().initialize();
      debugPrint("Krushi Mitra core domain services initialized.");
    } catch (e) {
      debugPrint("Service init warning: $e");
    }

    runApp(
      const ProviderScope(
        child: KrushiMitraApp(),
      ),
    );
  }, (error, stack) {
    debugPrint("CRITICAL ASYNC ROOT ERROR: $error");
    if (kDebugMode) {
      debugPrint(stack.toString());
    }
  });
}
