import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../services/auth_service.dart';
import 'database_provider.dart';
import '../../data/models/farmer_model.dart';

// 1. Service Provider
final authServiceProvider = Provider<AuthService>((ref) => AuthService());

// 2. Auth State Provider (Reactive Stream of Supabase User)
final authStateProvider = StreamProvider<User?>((ref) {
  return ref.watch(authServiceProvider).authStateChanges;
});

// 3. Robust Profile Notifier
final currentUserProvider = StateNotifierProvider<CurrentUserNotifier, AsyncValue<Farmer?>>((ref) {
  return CurrentUserNotifier(ref);
});

class CurrentUserNotifier extends StateNotifier<AsyncValue<Farmer?>> {
  final Ref _ref;
  StreamSubscription<User?>? _authSubscription;
  bool _isFetching = false;

  CurrentUserNotifier(this._ref) : super(const AsyncValue.loading()) {
    _init();
  }

  void _init() {
    // 1. Check current authenticated user on boot
    final initialUser = _ref.read(authServiceProvider).currentUser;
    if (initialUser != null) {
      debugPrint("Auth Init: Active Supabase session found for UID: ${initialUser.id}");
      fetchProfile(initialUser.id);
    } else {
      debugPrint("Auth Init: No active session. Awaiting user login.");
      state = const AsyncValue.data(null);
    }

    // 2. Listen to real-time auth changes
    _authSubscription = _ref.read(authServiceProvider).authStateChanges.listen((user) {
      if (user != null) {
        debugPrint("Auth Stream: User authenticated (${user.id})");
        fetchProfile(user.id);
      } else {
        debugPrint("Auth Stream: User unauthenticated / signed out");
        state = const AsyncValue.data(null);
      }
    }, onError: (e, st) {
      debugPrint("Auth Stream Error: $e");
      state = AsyncValue.error(e, st);
    });
  }

  Future<void> fetchProfile(String uid) async {
    // Prevent duplicate concurrent profile fetches
    if (_isFetching) return;
    _isFetching = true;

    try {
      final profile = await _ref.read(databaseServiceProvider).getFarmerProfile(uid);
      debugPrint("Profile Fetch: Loaded profile for '${profile?.name ?? 'New User'}'");
      state = AsyncValue.data(profile);
    } catch (e, st) {
      debugPrint("Profile Fetch Notice: $e");
      state = AsyncValue.error(e, st);
    } finally {
      _isFetching = false;
    }
  }

  // Explicit Guest Mode entry requested by user
  void enterAsGuest() {
    debugPrint("Auth: User explicitly entered Guest Mode.");
    final guestProfile = _ref.read(databaseServiceProvider).getLocalFallbackProfile('guest_user');
    state = AsyncValue.data(guestProfile);
  }

  // Sign out and clear profile
  Future<void> signOut() async {
    await _ref.read(authServiceProvider).signOut();
    state = const AsyncValue.data(null);
  }

  @override
  void dispose() {
    _authSubscription?.cancel();
    super.dispose();
  }
}

// 4. Profile Action Notifier (For Saving/Updating Profile)
final profileActionProvider = StateNotifierProvider<ProfileActionNotifier, AsyncValue<void>>((ref) {
  return ProfileActionNotifier(ref);
});

class ProfileActionNotifier extends StateNotifier<AsyncValue<void>> {
  final Ref _ref;
  ProfileActionNotifier(this._ref) : super(const AsyncValue.data(null));

  Future<void> saveProfile(Farmer farmer) async {
    state = const AsyncValue.loading();
    try {
      await _ref.read(databaseServiceProvider).saveFarmerProfile(farmer);
      // Re-trigger profile fetch in the main notifier
      await _ref.read(currentUserProvider.notifier).fetchProfile(farmer.id);
      state = const AsyncValue.data(null);
    } catch (e, st) {
      debugPrint("Save Profile Error: $e");
      state = AsyncValue.error(e, st);
      rethrow;
    }
  }
}
