import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'core/theme/app_theme.dart';
import 'core/theme/app_colors.dart';
import 'core/providers/theme_provider.dart';
import 'core/providers/locale_provider.dart';
import 'features/auth/screens/auth_screens.dart';

class KrushiMitraApp extends ConsumerWidget {
  const KrushiMitraApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final themeMode = ref.watch(themeProvider);
    final appLanguage = ref.watch(appLanguageProvider);
    
    // Sync AppColors with current brightness if in system mode
    if (themeMode == ThemeMode.system) {
      AppColors.isDarkMode = View.of(context).platformDispatcher.platformBrightness == Brightness.dark;
    } else {
      AppColors.isDarkMode = themeMode == ThemeMode.dark;
    }

    return MaterialApp(
      title: 'Krushi Mitra Pro',
      debugShowCheckedModeBanner: false,
      locale: Locale(appLanguage),
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: const [
        Locale('hi'),
        Locale('mr'),
        Locale('gu'),
        Locale('pa'),
        Locale('ta'),
        Locale('te'),
        Locale('kn'),
        Locale('bn'),
        Locale('en'),
      ],
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: themeMode,
      home: const AuthGate(),
    );
  }
}
