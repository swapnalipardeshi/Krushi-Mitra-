import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:krushi_mitra/app.dart';
import 'package:krushi_mitra/core/services/auth_service.dart';
import 'package:krushi_mitra/core/providers/auth_provider.dart';
import 'package:krushi_mitra/features/auth/screens/auth_screens.dart';
import 'package:krushi_mitra/features/auth/screens/login_screen.dart';

class MockAuthService extends AuthService {
  @override
  User? get currentUser => null;

  @override
  Stream<User?> get authStateChanges => Stream.value(null);
}

void main() {
  group('Krushi Mitra UI Tests', () {
    testWidgets('App Boots to Splash Screen and Transitions', (WidgetTester tester) async {
      await tester.pumpWidget(
        ProviderScope(
          overrides: [
            authServiceProvider.overrideWithValue(MockAuthService()),
          ],
          child: const KrushiMitraApp(),
        ),
      );

      // Verify that the SplashScreen is the initial route
      expect(find.byType(SplashScreen), findsOneWidget);
      expect(find.text('KRUSHI MITRA'), findsOneWidget);

      // Advance frames past the initial animation
      await tester.pump(const Duration(milliseconds: 1500));
      await tester.pumpAndSettle();

      // Transitions to LoginScreen when unauthenticated
      expect(find.byType(LoginScreen), findsOneWidget);
    });

    testWidgets('Login Screen Renders Correctly', (WidgetTester tester) async {
      await tester.pumpWidget(
        ProviderScope(
          overrides: [
            authServiceProvider.overrideWithValue(MockAuthService()),
          ],
          child: const MaterialApp(
            localizationsDelegates: [
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
            ],
            supportedLocales: [Locale('en'), Locale('hi')],
            home: LoginScreen(),
          ),
        ),
      );

      // Verify Login Screen UI elements are present (Defaults to Sign In with Create Account option)
      expect(find.text('WELCOME BACK'), findsOneWidget);
      expect(find.text('Sign In to Your Account'), findsOneWidget);
      expect(find.text('Create Farmer Account (नवीन खाते तयार करा)'), findsOneWidget);

      // Verify Google Login Button exists
      expect(find.text('Continue with Google'), findsOneWidget);

      // Verify switch to Create Account mode works
      final createAccountToggle = find.text('📝 Create Account');
      expect(createAccountToggle, findsOneWidget);
      await tester.tap(createAccountToggle);
      await tester.pumpAndSettle();
      expect(find.text('NEW FARMER REGISTRATION'), findsOneWidget);
    });
  });
}
