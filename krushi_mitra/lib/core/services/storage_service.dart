import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:firebase_storage/firebase_storage.dart';

class StorageService {
  final FirebaseStorage _storage = FirebaseStorage.instance;

  /// Uploads a user profile picture to Firebase Storage and returns the public download URL.
  Future<String?> uploadProfilePic(String userId, File file) async {
    try {
      final ref = _storage.ref().child('profile_pics').child('$userId.jpg');
      final metadata = SettableMetadata(contentType: 'image/jpeg');
      final uploadTask = await ref.putFile(file, metadata);
      final downloadUrl = await uploadTask.ref.getDownloadURL();
      debugPrint("StorageService: Profile picture uploaded successfully -> $downloadUrl");
      return downloadUrl;
    } catch (e) {
      debugPrint("StorageService: Firebase Storage Upload Error (Profile Pic): $e");
      return null;
    }
  }

  /// Uploads a marketplace produce image to Firebase Storage.
  Future<String?> uploadMarketplaceImage(String listingId, File file) async {
    try {
      final ref = _storage.ref().child('marketplace').child('$listingId.jpg');
      final metadata = SettableMetadata(contentType: 'image/jpeg');
      final uploadTask = await ref.putFile(file, metadata);
      final downloadUrl = await uploadTask.ref.getDownloadURL();
      debugPrint("StorageService: Marketplace image uploaded -> $downloadUrl");
      return downloadUrl;
    } catch (e) {
      debugPrint("StorageService: Firebase Storage Upload Error (Marketplace): $e");
      return null;
    }
  }

  /// Uploads an AI Doctor crop diagnosis picture.
  Future<String?> uploadCropDiagnosisImage(File file) async {
    try {
      final timestamp = DateTime.now().millisecondsSinceEpoch;
      final ref = _storage.ref().child('crop_diagnoses').child('crop_$timestamp.jpg');
      final metadata = SettableMetadata(contentType: 'image/jpeg');
      final uploadTask = await ref.putFile(file, metadata);
      final downloadUrl = await uploadTask.ref.getDownloadURL();
      return downloadUrl;
    } catch (e) {
      debugPrint("StorageService: Diagnosis image upload notice: $e");
      return null;
    }
  }
}
