// 🌐 Krushi Mitra — Global App Language State & Persistence Provider (Riverpod)
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../services/supabase_service.dart';

const String _kLanguagePrefKey = 'app_language';

class AppLanguageNotifier extends StateNotifier<String> {
  AppLanguageNotifier() : super('hi') {
    _loadLanguage();
  }

  Future<void> _loadLanguage() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final savedLang = prefs.getString(_kLanguagePrefKey);
      if (savedLang != null && savedLang.isNotEmpty) {
        state = savedLang;
      }
    } catch (_) {}
  }

  Future<void> setLanguage(String langCode, {String? userId}) async {
    if (state == langCode) return;
    state = langCode;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_kLanguagePrefKey, langCode);
    } catch (_) {}

    if (userId != null && userId.isNotEmpty && SupabaseService.isInitialized) {
      try {
        await SupabaseService.client
            ?.from('farmers')
            .update({'preferred_language': langCode})
            .eq('id', userId);
      } catch (_) {}
    }
  }
}

final appLanguageProvider = StateNotifierProvider<AppLanguageNotifier, String>((ref) {
  return AppLanguageNotifier();
});
