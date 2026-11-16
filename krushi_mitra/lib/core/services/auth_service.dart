import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

class AuthService {
  FirebaseAuth get _auth => FirebaseAuth.instance;

  // Current user
  User? get currentUser => _auth.currentUser;

  // Stream of auth state changes with immediate initial value
  Stream<User?> get authStateChanges async* {
    yield currentUser;
    try {
      await for (final user in _auth.authStateChanges()) {
        yield user;
      }
    } catch (e) {
      debugPrint("AuthService: authStateChanges stream error: $e");
    }
  }

  // Sign in with Email and Password
  Future<UserCredential> signInWithEmail(String email, String password) async {
    try {
      final result = await _auth.signInWithEmailAndPassword(
        email: email.trim(),
        password: password,
      );
      debugPrint("Firebase Auth: Signed in as ${result.user?.email}");
      return result;
    } catch (e) {
      debugPrint("Firebase SignIn Error: $e");
      rethrow;
    }
  }

  // Sign up with Email and Password
  Future<UserCredential> signUpWithEmail(
    String email,
    String password, {
    String? fullName,
  }) async {
    try {
      final result = await _auth.createUserWithEmailAndPassword(
        email: email.trim(),
        password: password,
      );
      if (fullName != null && fullName.isNotEmpty && result.user != null) {
        await result.user!.updateDisplayName(fullName.trim());
      }
      debugPrint("Firebase Auth: Signed up user ${result.user?.email}");
      return result;
    } catch (e) {
      debugPrint("Firebase SignUp Error: $e");
      rethrow;
    }
  }

  // Send Password Reset Email
  Future<void> sendPasswordResetEmail(String email) async {
    try {
      await _auth.sendPasswordResetEmail(email: email.trim());
      debugPrint("Firebase Auth: Password reset email dispatched to $email");
    } catch (e) {
      debugPrint("Firebase Reset Password Error: $e");
      rethrow;
    }
  }

  // Sign Out
  Future<void> signOut() async {
    try {
      await GoogleSignIn().signOut();
      await _auth.signOut();
      debugPrint("Firebase Auth: User signed out successfully");
    } catch (e) {
      debugPrint("Firebase SignOut Error: $e");
      rethrow;
    }
  }

  // Google Sign-In via Firebase
  Future<UserCredential?> signInWithGoogle() async {
    try {
      final GoogleSignIn googleSignIn = GoogleSignIn(
        serverClientId: '1024024620084-dt2r0i0a4uf4bv54odq1otde67c8bagj.apps.googleusercontent.com',
      );
      final GoogleSignInAccount? googleUser = await googleSignIn.signIn();
      if (googleUser == null) {
        debugPrint("Firebase Google Auth: User cancelled sign-in");
        return null;
      }
      final GoogleSignInAuthentication googleAuth = await googleUser.authentication;
      final credential = GoogleAuthProvider.credential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );
      final result = await _auth.signInWithCredential(credential);
      debugPrint("Firebase Google Auth: Signed in as ${result.user?.email}");
      return result;
    } catch (e) {
      debugPrint("Firebase Google Auth Error: $e");
      rethrow;
    }
  }

  // Sign in Anonymously / Guest Session
  Future<UserCredential?> signInAnonymously() async {
    try {
      final result = await _auth.signInAnonymously();
      debugPrint("Firebase Auth: Anonymous session started (${result.user?.uid})");
      return result;
    } catch (e) {
      debugPrint("Firebase Anonymous Sign-in Notice: $e");
      return null;
    }
  }

  // Phone Auth — Send OTP
  Future<void> verifyPhoneNumber({
    required String phoneNumber,
    required void Function(PhoneAuthCredential) verificationCompleted,
    required void Function(FirebaseAuthException) verificationFailed,
    required void Function(String verificationId, int? resendToken) codeSent,
    required void Function(String verificationId) codeAutoRetrievalTimeout,
  }) async {
    await _auth.verifyPhoneNumber(
      phoneNumber: phoneNumber,
      verificationCompleted: verificationCompleted,
      verificationFailed: verificationFailed,
      codeSent: codeSent,
      codeAutoRetrievalTimeout: codeAutoRetrievalTimeout,
    );
  }

  // Phone Auth — Verify OTP
  Future<UserCredential> signInWithPhoneOtp(String verificationId, String otp) async {
    try {
      final credential = PhoneAuthProvider.credential(
        verificationId: verificationId,
        smsCode: otp,
      );
      return await _auth.signInWithCredential(credential);
    } catch (e) {
      debugPrint("Firebase Phone OTP Verify Error: $e");
      rethrow;
    }
  }
}
