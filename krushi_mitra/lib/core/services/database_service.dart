import 'dart:async';
import 'package:flutter/foundation.dart';
import '../../data/models/farmer_model.dart';
import '../../data/models/post_model.dart';
import '../../data/models/farm_diary_model.dart';
import '../../features/marketplace/models/listing_model.dart';
import 'supabase_service.dart';

class DatabaseService {
  final SupabaseService _supabase = SupabaseService();

  // Local fallback profile so app functions 100% offline
  Farmer getLocalFallbackProfile([String? uid]) {
    return _supabase.getLocalFallbackProfile(uid);
  }

  // --- Farmer Profile ---

  Future<void> saveFarmerProfile(Farmer farmer) async {
    try {
      await _supabase.saveFarmerProfile(farmer);
    } catch (e) {
      debugPrint("DatabaseService saveFarmerProfile error: $e");
    }
  }

  Future<Farmer?> getFarmerProfile(String uid) async {
    try {
      return await _supabase.getFarmerProfile(uid);
    } catch (e) {
      debugPrint("DatabaseService getFarmerProfile error: $e");
      return getLocalFallbackProfile(uid);
    }
  }

  // --- Community Posts ---

  Future<void> createPost(Post post) async {
    try {
      await _supabase.createPost(post);
    } catch (e) {
      debugPrint("DatabaseService createPost error: $e");
    }
  }

  Stream<List<Post>> getPosts() {
    try {
      return _supabase.getPostsStream();
    } catch (e) {
      debugPrint("DatabaseService getPosts stream error: $e");
      return Stream.fromFuture(_supabase.getPosts());
    }
  }

  Future<void> likePost(String postId) async {
    try {
      await _supabase.likePost(postId);
    } catch (e) {
      debugPrint("DatabaseService likePost error: $e");
    }
  }

  // --- Farm Diary ---

  Future<void> addDiaryEntry(FarmDiaryEntry entry) async {
    try {
      await _supabase.addDiaryEntry(entry);
    } catch (e) {
      debugPrint("DatabaseService addDiaryEntry error: $e");
    }
  }

  Stream<List<FarmDiaryEntry>> getDiaryEntries(String farmerId) {
    try {
      return _supabase.getDiaryEntriesStream(farmerId);
    } catch (e) {
      debugPrint("DatabaseService getDiaryEntries stream error: $e");
      return Stream.fromFuture(_supabase.getDiaryEntries(farmerId));
    }
  }

  Future<void> deleteDiaryEntry(String farmerId, String entryId) async {
    try {
      await _supabase.deleteDiaryEntry(farmerId, entryId);
    } catch (e) {
      debugPrint("DatabaseService deleteDiaryEntry error: $e");
    }
  }

  // --- Marketplace Listings ---

  Future<void> addMarketListing(MarketplaceListing listing) async {
    try {
      await _supabase.addMarketListing(listing);
    } catch (e) {
      debugPrint("DatabaseService addMarketListing error: $e");
    }
  }

  Stream<List<MarketplaceListing>> getMarketListingsStream() {
    try {
      return _supabase.getMarketListingsStream();
    } catch (e) {
      debugPrint("DatabaseService getMarketListingsStream error: $e");
      return Stream.fromFuture(_supabase.getMarketListings());
    }
  }

  Future<List<MarketplaceListing>> getMarketListings() async {
    try {
      return await _supabase.getMarketListings();
    } catch (e) {
      debugPrint("DatabaseService getMarketListings error: $e");
      return [];
    }
  }

  Future<void> deleteMarketListing(String listingId) async {
    try {
      await _supabase.deleteMarketListing(listingId);
    } catch (e) {
      debugPrint("DatabaseService deleteMarketListing error: $e");
    }
  }

  Future<void> markListingSold(String listingId) async {
    try {
      await _supabase.markListingSold(listingId);
    } catch (e) {
      debugPrint("DatabaseService markListingSold error: $e");
    }
  }
}
