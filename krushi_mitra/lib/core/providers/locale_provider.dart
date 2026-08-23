// 🌐 Krushi Mitra — Global App Language State & Persistence Provider (Riverpod)
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

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

    if (userId != null && userId.isNotEmpty) {
      try {
        await FirebaseFirestore.instance
            .collection('farmers')
            .doc(userId)
            .update({'language': langCode});
      } catch (_) {}
    }
  }
}

final appLanguageProvider = StateNotifierProvider<AppLanguageNotifier, String>((ref) {
  return AppLanguageNotifier();
});
