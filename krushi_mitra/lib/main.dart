import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';
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

    // 2. Initialize Firebase as Primary Backend (Auth, Firestore, Storage, FCM)
    try {
      if (Firebase.apps.isEmpty) {
        await Firebase.initializeApp(
          options: DefaultFirebaseOptions.currentPlatform,
        ).timeout(const Duration(seconds: 5));
        debugPrint("Firebase initialized as primary backend!");
      }
    } catch (e) {
      debugPrint("Firebase initialization notice: $e");
    }

    // 3. Immediately launch the Flutter UI so the OS splash screen dismisses
    runApp(
      const ProviderScope(
        child: KrushiMitraApp(),
      ),
    );

    // 4. Initialize Background Services Asynchronously (Non-blocking)
    _initBackgroundServices();
  }, (error, stack) {
    debugPrint("CRITICAL ASYNC ROOT ERROR: $error");
    if (kDebugMode) {
      debugPrint(stack.toString());
    }
  });
}

/// Initializes non-critical background services without delaying UI startup.
void _initBackgroundServices() {
  // Push Notifications (Asynchronous, fail-safe)
  Future.microtask(() async {
    try {
      await NotificationService().initialize().timeout(const Duration(seconds: 4));
    } catch (e) {
      debugPrint("Notification init notice: $e");
    }
  });

  // Local SharedPreferences
  Future.microtask(() async {
    try {
      await SharedPreferences.getInstance();
    } catch (e) {
      debugPrint("Prefs init error: $e");
    }
  });

  // Core domain services
  Future.microtask(() {
    try {
      final aiService = AIService();
      aiService.initialize();
      MarketService().initialize();
      WeatherService().initialize();
      debugPrint("Krushi Mitra core domain services initialized.");
    } catch (e) {
      debugPrint("Service init warning: $e");
    }
  });
}
