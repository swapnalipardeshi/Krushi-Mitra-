import 'dart:async';
import 'package:flutter/foundation.dart';
import '../../data/models/farmer_model.dart';
import '../../data/models/post_model.dart';
import '../../data/models/farm_diary_model.dart';
import '../../features/marketplace/models/listing_model.dart';
import 'firestore_service.dart';

class DatabaseService {
  final FirestoreService _firestore = FirestoreService();

  // Local fallback profile so app functions 100% offline
  Farmer getLocalFallbackProfile([String? uid]) {
    return _firestore.getLocalFallbackProfile(uid);
  }

  // --- Farmer Profile ---

  Future<void> saveFarmerProfile(Farmer farmer, {String? email}) async {
    try {
      await _firestore.saveFarmerProfile(farmer, email: email);
    } catch (e) {
      debugPrint("DatabaseService saveFarmerProfile error: $e");
      rethrow;
    }
  }

  Future<Farmer?> getFarmerProfile(String uid) async {
    try {
      return await _firestore.getFarmerProfile(uid);
    } catch (e) {
      debugPrint("DatabaseService getFarmerProfile error: $e");
      return getLocalFallbackProfile(uid);
    }
  }

  // --- Community Posts ---

  Future<void> createPost(Post post) async {
    try {
      await _firestore.createPost(post);
    } catch (e) {
      debugPrint("DatabaseService createPost error: $e");
      rethrow;
    }
  }

  Stream<List<Post>> getPosts() {
    try {
      return _firestore.getPostsStream();
    } catch (e) {
      debugPrint("DatabaseService getPosts stream error: $e");
      return Stream.fromFuture(_firestore.getPosts());
    }
  }

  Future<void> likePost(String postId) async {
    try {
      await _firestore.likePost(postId);
    } catch (e) {
      debugPrint("DatabaseService likePost error: $e");
      rethrow;
    }
  }

  // --- Farm Diary ---

  Future<void> addDiaryEntry(FarmDiaryEntry entry) async {
    try {
      await _firestore.addDiaryEntry(entry);
    } catch (e) {
      debugPrint("DatabaseService addDiaryEntry error: $e");
      rethrow;
    }
  }

  Stream<List<FarmDiaryEntry>> getDiaryEntries(String farmerId) {
    try {
      return _firestore.getDiaryEntriesStream(farmerId);
    } catch (e) {
      debugPrint("DatabaseService getDiaryEntries stream error: $e");
      return Stream.fromFuture(_firestore.getDiaryEntries(farmerId));
    }
  }

  Future<void> deleteDiaryEntry(String farmerId, String entryId) async {
    try {
      await _firestore.deleteDiaryEntry(farmerId, entryId);
    } catch (e) {
      debugPrint("DatabaseService deleteDiaryEntry error: $e");
      rethrow;
    }
  }

  // --- Marketplace Listings ---

  Future<void> addMarketListing(MarketplaceListing listing) async {
    try {
      await _firestore.addMarketListing(listing);
    } catch (e) {
      debugPrint("DatabaseService addMarketListing error: $e");
      rethrow;
    }
  }

  Stream<List<MarketplaceListing>> getMarketListingsStream() {
    try {
      return _firestore.getMarketListingsStream();
    } catch (e) {
      debugPrint("DatabaseService getMarketListingsStream error: $e");
      return Stream.fromFuture(_firestore.getMarketListings());
    }
  }

  Future<List<MarketplaceListing>> getMarketListings() async {
    try {
      return await _firestore.getMarketListings();
    } catch (e) {
      debugPrint("DatabaseService getMarketListings error: $e");
      return [];
    }
  }

  Future<void> deleteMarketListing(String listingId) async {
    try {
      await _firestore.deleteMarketListing(listingId);
    } catch (e) {
      debugPrint("DatabaseService deleteMarketListing error: $e");
      rethrow;
    }
  }

  Future<void> markListingSold(String listingId) async {
    try {
      await _firestore.markListingSold(listingId);
    } catch (e) {
      debugPrint("DatabaseService markListingSold error: $e");
      rethrow;
    }
  }
}
