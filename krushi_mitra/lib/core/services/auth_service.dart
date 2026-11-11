import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthService {
  SupabaseClient get _supabase {
    try {
      return Supabase.instance.client;
    } catch (e) {
      debugPrint("AuthService: Supabase is not initialized: $e");
      rethrow;
    }
  }

  // Current session & user
  Session? get currentSession {
    try {
      return _supabase.auth.currentSession;
    } catch (_) {
      return null;
    }
  }

  User? get currentUser {
    try {
      return _supabase.auth.currentUser;
    } catch (_) {
      return null;
    }
  }

  // Stream of auth state changes (User? stream) with immediate initial value
  Stream<User?> get authStateChanges async* {
    yield currentUser;
    try {
      await for (final event in _supabase.auth.onAuthStateChange) {
        yield event.session?.user;
      }
    } catch (e) {
      debugPrint("AuthService: authStateChanges stream error: $e");
    }
  }

  // Sign in with Email and Password
  Future<AuthResponse> signInWithEmail(String email, String password) async {
    try {
      final response = await _supabase.auth.signInWithPassword(
        email: email.trim(),
        password: password,
      );
      debugPrint("Supabase Auth: Signed in as ${response.user?.email}");
      return response;
    } catch (e) {
      debugPrint("Supabase SignIn Error: $e");
      rethrow;
    }
  }

  // Sign up with Email and Password
  Future<AuthResponse> signUpWithEmail(
    String email,
    String password, {
    String? fullName,
  }) async {
    try {
      final response = await _supabase.auth.signUp(
        email: email.trim(),
        password: password,
        data: fullName != null && fullName.isNotEmpty
            ? {'full_name': fullName.trim()}
            : null,
      );
      debugPrint("Supabase Auth: Signed up user ${response.user?.email}");
      return response;
    } catch (e) {
      debugPrint("Supabase SignUp Error: $e");
      rethrow;
    }
  }

  // Send Password Reset Email
  Future<void> sendPasswordResetEmail(String email) async {
    try {
      await _supabase.auth.resetPasswordForEmail(email.trim());
      debugPrint("Supabase Auth: Password reset email dispatched to $email");
    } catch (e) {
      debugPrint("Supabase Reset Password Error: $e");
      rethrow;
    }
  }

  // Sign Out
  Future<void> signOut() async {
    try {
      await _supabase.auth.signOut();
      debugPrint("Supabase Auth: User signed out successfully");
    } catch (e) {
      debugPrint("Supabase SignOut Error: $e");
      rethrow;
    }
  }

  // Google OAuth via Supabase
  Future<bool> signInWithGoogle() async {
    try {
      return await _supabase.auth.signInWithOAuth(
        OAuthProvider.google,
        redirectTo: 'krushimitra://login-callback/',
      );
    } catch (e) {
      debugPrint("Supabase Google Auth Error: $e");
      rethrow;
    }
  }

  // Sign in Anonymously / Guest Session
  Future<AuthResponse?> signInAnonymously() async {
    try {
      final res = await _supabase.auth.signInAnonymously();
      debugPrint("Supabase Auth: Guest session started (${res.user?.id})");
      return res;
    } catch (e) {
      debugPrint("Supabase Anonymous Sign-in Notice: $e");
      return null;
    }
  }
}
