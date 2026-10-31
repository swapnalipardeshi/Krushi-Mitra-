import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../../data/models/farmer_model.dart';
import '../../data/models/post_model.dart';
import '../../data/models/farm_diary_model.dart';
import '../../data/models/market_price_model.dart';
import '../../features/marketplace/models/listing_model.dart';

class SupabaseService {
  static final SupabaseService _instance = SupabaseService._internal();
  factory SupabaseService() => _instance;
  SupabaseService._internal();

  static SupabaseClient? get client {
    try {
      return Supabase.instance.client;
    } catch (_) {
      return null;
    }
  }

  static bool get isInitialized => client != null;

  // Local fallback profile
  Farmer getLocalFallbackProfile([String? uid]) {
    return Farmer(
      id: uid ?? 'farmer_default',
      name: 'Kisan Mitra',
      state: 'Maharashtra',
      district: 'Nashik',
      landSize: 2.5,
      cropsGrown: ['Wheat', 'Onion', 'Tomato', 'Soyabean'],
      preferredLanguage: 'hi',
      soilType: 'Black Soil (Regur)',
      irrigationSource: 'Drip Irrigation',
    );
  }

  // =========================================================================
  // 1. FARMER PROFILE
  // =========================================================================

  Future<Farmer?> getFarmerProfile(String uid) async {
    if (!isInitialized) return getLocalFallbackProfile(uid);

    try {
      final response = await client!
          .from('farmers')
          .select()
          .eq('id', uid)
          .maybeSingle();

      if (response != null) {
        return Farmer.fromJson(response);
      }
      return getLocalFallbackProfile(uid);
    } catch (e) {
      debugPrint("Supabase getFarmerProfile error: $e");
      return getLocalFallbackProfile(uid);
    }
  }

  Future<void> saveFarmerProfile(Farmer farmer) async {
    if (!isInitialized) return;

    try {
      await client!.from('farmers').upsert({
        'id': farmer.id,
        'name': farmer.name,
        'photo_url': farmer.photoUrl,
        'state': farmer.state,
        'district': farmer.district,
        'land_size': farmer.landSize,
        'crops_grown': farmer.cropsGrown,
        'preferred_language': farmer.preferredLanguage,
        'soil_type': farmer.soilType,
        'irrigation_source': farmer.irrigationSource,
        'weather_alerts': farmer.weatherAlerts,
        'scheme_alerts': farmer.schemeAlerts,
        'price_alerts': farmer.priceAlerts,
      });
      debugPrint("Profile saved to Supabase successfully.");
    } catch (e) {
      debugPrint("Supabase saveFarmerProfile error: $e");
    }
  }

  // =========================================================================
  // 2. FARM DIARY
  // =========================================================================

  Future<List<FarmDiaryEntry>> getDiaryEntries(String farmerId) async {
    if (!isInitialized) return [];

    try {
      final response = await client!
          .from('farm_diary')
          .select()
          .eq('farmer_id', farmerId)
          .order('entry_date', ascending: false);

      return (response as List)
          .map((item) => FarmDiaryEntry(
                id: item['id']?.toString() ?? '',
                farmerId: item['farmer_id']?.toString() ?? '',
                date: DateTime.tryParse(item['entry_date'] ?? '') ?? DateTime.now(),
                activity: item['activity'] ?? '',
                category: item['category'] ?? '',
                cost: (item['cost'] as num?)?.toDouble() ?? 0.0,
                isExpense: item['is_expense'] ?? true,
                notes: item['notes'],
              ))
          .toList();
    } catch (e) {
      debugPrint("Supabase getDiaryEntries error: $e");
      return [];
    }
  }

  Stream<List<FarmDiaryEntry>> getDiaryEntriesStream(String farmerId) {
    if (!isInitialized) return Stream.value([]);

    try {
      return client!
          .from('farm_diary')
          .stream(primaryKey: ['id'])
          .eq('farmer_id', farmerId)
          .order('entry_date', ascending: false)
          .map((data) => data
              .map((item) => FarmDiaryEntry(
                    id: item['id']?.toString() ?? '',
                    farmerId: item['farmer_id']?.toString() ?? '',
                    date: DateTime.tryParse(item['entry_date'] ?? '') ?? DateTime.now(),
                    activity: item['activity'] ?? '',
                    category: item['category'] ?? '',
                    cost: (item['cost'] as num?)?.toDouble() ?? 0.0,
                    isExpense: item['is_expense'] ?? true,
                    notes: item['notes'],
                  ))
              .toList())
          .handleError((e) {
            debugPrint("Supabase diary stream error: $e");
            return <FarmDiaryEntry>[];
          });
    } catch (e) {
      debugPrint("Supabase getDiaryEntriesStream setup error: $e");
      return Stream.fromFuture(getDiaryEntries(farmerId));
    }
  }

  Future<void> addDiaryEntry(FarmDiaryEntry entry) async {
    if (!isInitialized) return;

    try {
      await client!.from('farm_diary').insert({
        if (entry.id.isNotEmpty && entry.id.length > 20) 'id': entry.id,
        'farmer_id': entry.farmerId,
        'entry_date': entry.date.toIso8601String(),
        'activity': entry.activity,
        'category': entry.category,
        'cost': entry.cost,
        'is_expense': entry.isExpense,
        'notes': entry.notes,
      });
      debugPrint("Diary entry added to Supabase.");
    } catch (e) {
      debugPrint("Supabase addDiaryEntry error: $e");
      rethrow;
    }
  }

  Future<void> deleteDiaryEntry(String farmerId, String entryId) async {
    if (!isInitialized) return;

    try {
      await client!
          .from('farm_diary')
          .delete()
          .eq('id', entryId)
          .eq('farmer_id', farmerId);
      debugPrint("Diary entry deleted from Supabase.");
    } catch (e) {
      debugPrint("Supabase deleteDiaryEntry error: $e");
      rethrow;
    }
  }

  // =========================================================================
  // 3. MARKETPLACE LISTINGS
  // =========================================================================

  Future<List<MarketplaceListing>> getMarketListings() async {
    if (!isInitialized) return [];

    try {
      final response = await client!
          .from('marketplace_listings')
          .select()
          .order('created_at', ascending: false);

      return (response as List)
          .map((item) => MarketplaceListing.fromJson(item))
          .toList();
    } catch (e) {
      debugPrint("Supabase getMarketListings error: $e");
      return [];
    }
  }

  Stream<List<MarketplaceListing>> getMarketListingsStream() {
    if (!isInitialized) return Stream.value([]);

    try {
      return client!
          .from('marketplace_listings')
          .stream(primaryKey: ['id'])
          .order('created_at', ascending: false)
          .map((data) => data
              .map((item) => MarketplaceListing.fromJson(item))
              .toList())
          .handleError((e) {
            debugPrint("Supabase marketplace stream error: $e");
            return <MarketplaceListing>[];
          });
    } catch (e) {
      debugPrint("Supabase getMarketListingsStream setup error: $e");
      return Stream.fromFuture(getMarketListings());
    }
  }

  Future<void> addMarketListing(MarketplaceListing listing) async {
    if (!isInitialized) return;

    try {
      final row = {
        if (listing.id.isNotEmpty && listing.id.length > 20) 'id': listing.id,
        'farmer_id': listing.sellerId,
        'farmer_name': listing.farmerName,
        'title': listing.commodity,
        'crop_type': listing.commodity,
        'quantity': listing.quantity,
        'unit': listing.unit,
        'price_per_unit': listing.pricePerUnit,
        'location': listing.location,
        'phone': listing.phoneNumber ?? '',
        'image_url': listing.imageUrl,
        'status': listing.isSold ? 'sold' : 'active',
      };

      await client!.from('marketplace_listings').upsert(row);
      debugPrint("Marketplace listing added/upserted in Supabase: ${listing.commodity}");
    } catch (e) {
      debugPrint("Supabase addMarketListing error: $e");
      rethrow;
    }
  }

  Future<void> updateMarketListing(MarketplaceListing listing) async {
    if (!isInitialized) return;

    try {
      await client!.from('marketplace_listings').update({
        'title': listing.commodity,
        'crop_type': listing.commodity,
        'quantity': listing.quantity,
        'unit': listing.unit,
        'price_per_unit': listing.pricePerUnit,
        'location': listing.location,
        'phone': listing.phoneNumber ?? '',
        'image_url': listing.imageUrl,
        'status': listing.isSold ? 'sold' : 'active',
      }).eq('id', listing.id);
      debugPrint("Marketplace listing updated in Supabase.");
    } catch (e) {
      debugPrint("Supabase updateMarketListing error: $e");
      rethrow;
    }
  }

  Future<void> deleteMarketListing(String listingId) async {
    if (!isInitialized) return;

    try {
      await client!.from('marketplace_listings').delete().eq('id', listingId);
      debugPrint("Marketplace listing deleted from Supabase.");
    } catch (e) {
      debugPrint("Supabase deleteMarketListing error: $e");
      rethrow;
    }
  }

  Future<void> markListingSold(String listingId) async {
    if (!isInitialized) return;

    try {
      await client!.from('marketplace_listings').update({
        'status': 'sold',
      }).eq('id', listingId);
      debugPrint("Marketplace listing marked sold in Supabase.");
    } catch (e) {
      debugPrint("Supabase markListingSold error: $e");
      rethrow;
    }
  }

  // =========================================================================
  // 4. COMMUNITY POSTS
  // =========================================================================

  Future<List<Post>> getPosts() async {
    if (!isInitialized) return [];

    try {
      final response = await client!
          .from('community_posts')
          .select()
          .order('created_at', ascending: false);

      return (response as List).map((item) => Post.fromJson(item)).toList();
    } catch (e) {
      debugPrint("Supabase getPosts error: $e");
      return [];
    }
  }

  Stream<List<Post>> getPostsStream() {
    if (!isInitialized) return Stream.value([]);

    try {
      return client!
          .from('community_posts')
          .stream(primaryKey: ['id'])
          .order('created_at', ascending: false)
          .map((data) => data.map((item) => Post.fromJson(item)).toList())
          .handleError((e) {
            debugPrint("Supabase posts stream error: $e");
            return <Post>[];
          });
    } catch (e) {
      debugPrint("Supabase getPostsStream setup error: $e");
      return Stream.fromFuture(getPosts());
    }
  }

  Future<void> createPost(Post post) async {
    if (!isInitialized) return;

    try {
      await client!.from('community_posts').insert({
        if (post.id.isNotEmpty && post.id.length > 20) 'id': post.id,
        'farmer_id': post.farmerId,
        'author_name': post.farmerName,
        'content': post.content,
        'likes': post.likes,
        'image_url': post.photoUrl,
      });
      debugPrint("Post published to Supabase.");
    } catch (e) {
      debugPrint("Supabase createPost error: $e");
      rethrow;
    }
  }

  Future<void> likePost(String postId) async {
    if (!isInitialized) return;

    try {
      // Fetch current likes then increment
      final current = await client!
          .from('community_posts')
          .select('likes')
          .eq('id', postId)
          .maybeSingle();

      final currentLikes = (current?['likes'] as num?)?.toInt() ?? 0;
      await client!
          .from('community_posts')
          .update({'likes': currentLikes + 1})
          .eq('id', postId);
      debugPrint("Post liked in Supabase.");
    } catch (e) {
      debugPrint("Supabase likePost error: $e");
    }
  }

  // =========================================================================
  // 5. MANDI PRICES
  // =========================================================================

  Future<List<MarketPrice>> getMandiPrices({String? state, String? commodity}) async {
    if (!isInitialized) return [];

    try {
      var query = client!.from('mandi_prices').select();
      if (state != null && state.isNotEmpty) {
        query = query.ilike('state', '%$state%');
      }
      if (commodity != null && commodity.isNotEmpty) {
        query = query.ilike('commodity', '%$commodity%');
      }

      final response = await query.order('arrival_date', ascending: false).limit(100);

      return (response as List).map((row) {
        return MarketPrice(
          commodity: row['commodity'] ?? '',
          variety: row['variety'] ?? 'Standard',
          state: row['state'] ?? 'Maharashtra',
          district: row['district'] ?? '',
          market: row['market'] ?? '',
          minPrice: (row['min_price'] as num?)?.toDouble() ?? 0.0,
          maxPrice: (row['max_price'] as num?)?.toDouble() ?? 0.0,
          modalPrice: (row['modal_price'] as num?)?.toDouble() ?? 0.0,
          date: row['arrival_date']?.toString() ?? '',
        );
      }).toList();
    } catch (e) {
      debugPrint("Supabase getMandiPrices error: $e");
      return [];
    }
  }

  Future<void> upsertMandiPrices(List<MarketPrice> prices) async {
    if (!isInitialized || prices.isEmpty) return;

    try {
      final rows = prices.map((p) => {
        'commodity': p.commodity,
        'market': p.market,
        'district': p.district,
        'state': p.state,
        'min_price': p.minPrice,
        'max_price': p.maxPrice,
        'modal_price': p.modalPrice,
        'arrival_date': DateTime.now().toIso8601String().substring(0, 10),
      }).toList();

      await client!.from('mandi_prices').upsert(rows);
      debugPrint("Mandi prices synced to Supabase (${prices.length} records).");
    } catch (e) {
      debugPrint("Supabase upsertMandiPrices error: $e");
    }
  }
}
