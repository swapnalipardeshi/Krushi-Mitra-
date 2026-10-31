import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class StorageService {
  static const String _bucket = 'krushi-uploads';

  SupabaseClient? get _supabase {
    try {
      return Supabase.instance.client;
    } catch (_) {
      return null;
    }
  }

  /// Uploads a user profile picture to Supabase Storage and returns the public CDN URL.
  Future<String?> uploadProfilePic(String userId, File file) async {
    if (_supabase == null) return null;
    try {
      final path = 'profile_pics/$userId.jpg';
      final bytes = await file.readAsBytes();

      await _supabase!.storage.from(_bucket).uploadBinary(
        path,
        bytes,
        fileOptions: const FileOptions(
          contentType: 'image/jpeg',
          upsert: true,
        ),
      );

      final publicUrl = _supabase!.storage.from(_bucket).getPublicUrl(path);
      debugPrint("StorageService: Profile picture uploaded successfully -> $publicUrl");
      return publicUrl;
    } catch (e) {
      debugPrint("StorageService: Supabase Upload Error (Profile Pic): $e");
      return null;
    }
  }

  /// Uploads a marketplace produce image to Supabase Storage.
  Future<String?> uploadMarketplaceImage(String listingId, File file) async {
    if (_supabase == null) return null;
    try {
      final path = 'marketplace/$listingId.jpg';
      final bytes = await file.readAsBytes();

      await _supabase!.storage.from(_bucket).uploadBinary(
        path,
        bytes,
        fileOptions: const FileOptions(
          contentType: 'image/jpeg',
          upsert: true,
        ),
      );

      final publicUrl = _supabase!.storage.from(_bucket).getPublicUrl(path);
      debugPrint("StorageService: Marketplace image uploaded -> $publicUrl");
      return publicUrl;
    } catch (e) {
      debugPrint("StorageService: Supabase Upload Error (Marketplace): $e");
      return null;
    }
  }

  /// Uploads an AI Doctor crop diagnosis picture.
  Future<String?> uploadCropDiagnosisImage(File file) async {
    if (_supabase == null) return null;
    try {
      final timestamp = DateTime.now().millisecondsSinceEpoch;
      final path = 'crop_diagnoses/crop_$timestamp.jpg';
      final bytes = await file.readAsBytes();

      await _supabase!.storage.from(_bucket).uploadBinary(
        path,
        bytes,
        fileOptions: const FileOptions(
          contentType: 'image/jpeg',
          upsert: true,
        ),
      );

      final publicUrl = _supabase!.storage.from(_bucket).getPublicUrl(path);
      return publicUrl;
    } catch (e) {
      debugPrint("StorageService: Diagnosis image upload notice: $e");
      return null;
    }
  }
}
