import 'dart:async';
import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/models/farmer_model.dart';
import '../../data/models/post_model.dart';
import '../../data/models/farm_diary_model.dart';
import '../../data/models/market_price_model.dart';
import '../../features/marketplace/models/listing_model.dart';

class FirestoreService {
  static final FirestoreService _instance = FirestoreService._internal();
  factory FirestoreService() => _instance;
  FirestoreService._internal();

  static FirebaseFirestore get _db => FirebaseFirestore.instance;

  static bool get isInitialized => true;

  final _diaryChangeController = StreamController<String>.broadcast();
  final _postChangeController = StreamController<void>.broadcast();

  // Local fallback profile that prioritizes real Firebase user identity
  Farmer getLocalFallbackProfile([String? uid]) {
    final fbUser = FirebaseAuth.instance.currentUser;
    String name = 'Farmer';
    if (fbUser?.displayName != null && fbUser!.displayName!.trim().isNotEmpty) {
      name = fbUser.displayName!.trim();
    } else if (fbUser?.email != null && fbUser!.email!.trim().isNotEmpty) {
      final part = fbUser.email!.split('@').first;
      name = part[0].toUpperCase() + part.substring(1);
    } else if (uid != null && uid.isNotEmpty && uid != 'guest_user') {
      name = 'Farmer';
    } else {
      name = 'Kisan Mitra';
    }

    return Farmer(
      id: uid ?? fbUser?.uid ?? 'farmer_default',
      name: name,
      state: 'Maharashtra',
      district: 'Nashik',
      landSize: 2.5,
      cropsGrown: ['Wheat', 'Onion', 'Tomato', 'Soyabean'],
      preferredLanguage: 'hi',
      soilType: 'Black',
      irrigationSource: 'Well',
    );
  }

  // =========================================================================
  // 1. FARMER PROFILE
  // =========================================================================

  Future<Farmer?> getFarmerProfile(String uid) async {
    final fbUser = FirebaseAuth.instance.currentUser;
    final email = fbUser?.email?.trim().toLowerCase();

    // 1. Try local cache in order of priority:
    try {
      final prefs = await SharedPreferences.getInstance();

      // Check 1: By UID
      String? localStr = prefs.getString('local_farmer_profile_$uid');
      if (localStr != null && localStr.isNotEmpty) {
        final data = json.decode(localStr);
        if (data is Map<String, dynamic>) {
          data['id'] = uid;
          return Farmer.fromJson(data);
        }
      }

      // Check 2: By Email
      if (email != null && email.isNotEmpty) {
        localStr = prefs.getString('local_farmer_profile_$email');
        if (localStr != null && localStr.isNotEmpty) {
          final data = json.decode(localStr);
          if (data is Map<String, dynamic>) {
            data['id'] = uid;
            final p = Farmer.fromJson(data);
            await prefs.setString('local_farmer_profile_$uid', json.encode(p.toJson()));
            return p;
          }
        }
      }

      // Check 3: Active Profile or Last Profile
      localStr = prefs.getString('active_farmer_profile') ?? prefs.getString('last_farmer_profile');
      if (localStr != null && localStr.isNotEmpty) {
        final data = json.decode(localStr);
        if (data is Map<String, dynamic>) {
          data['id'] = uid;
          final p = Farmer.fromJson(data);
          if (p.name.isNotEmpty && p.name != 'Kisan Mitra') {
            await prefs.setString('local_farmer_profile_$uid', json.encode(p.toJson()));
            return p;
          }
        }
      }
    } catch (e) {
      debugPrint("Local cache read error: $e");
    }

    // 2. Fetch from Firestore
    try {
      final doc = await _db.collection('farmers').doc(uid).get();
      if (doc.exists && doc.data() != null) {
        final data = doc.data()!;
        data['id'] = doc.id;
        final profile = Farmer.fromJson(data);
        try {
          final prefs = await SharedPreferences.getInstance();
          final encoded = json.encode(profile.toJson());
          await prefs.setString('local_farmer_profile_$uid', encoded);
          await prefs.setString('active_farmer_profile', encoded);
          if (email != null) await prefs.setString('local_farmer_profile_$email', encoded);
        } catch (_) {}
        return profile;
      }
    } catch (e) {
      debugPrint("Firestore getFarmerProfile error: $e");
    }

    // 3. Fallback with real user identity
    final fallback = getLocalFallbackProfile(uid);
    try {
      final prefs = await SharedPreferences.getInstance();
      final enc = json.encode(fallback.toJson());
      await prefs.setString('local_farmer_profile_$uid', enc);
      await prefs.setString('active_farmer_profile', enc);
    } catch (_) {}
    return fallback;
  }

  Future<void> saveFarmerProfile(Farmer farmer, {String? email}) async {
    // 1. Save locally first for zero-latency UI updates & reliable offline persistence
    try {
      final prefs = await SharedPreferences.getInstance();
      final jsonStr = json.encode(farmer.toJson());
      await prefs.setString('local_farmer_profile_${farmer.id}', jsonStr);
      await prefs.setString('active_farmer_profile', jsonStr);
      await prefs.setString('last_farmer_profile', jsonStr);
      if (email != null && email.isNotEmpty) {
        await prefs.setString('local_farmer_profile_${email.trim().toLowerCase()}', jsonStr);
      }
      final fbUser = FirebaseAuth.instance.currentUser;
      if (fbUser?.email != null) {
        await prefs.setString('local_farmer_profile_${fbUser!.email!.trim().toLowerCase()}', jsonStr);
      }
    } catch (e) {
      debugPrint("Local saveFarmerProfile error: $e");
    }

    // 2. Persist to Firestore
    try {
      await _db.collection('farmers').doc(farmer.id).set({
        'name': farmer.name,
        'photo_url': farmer.photoUrl,
        'photoUrl': farmer.photoUrl,
        'state': farmer.state,
        'district': farmer.district,
        'land_size': farmer.landSize,
        'landSize': farmer.landSize,
        'crops_grown': farmer.cropsGrown,
        'cropsGrown': farmer.cropsGrown,
        'preferred_language': farmer.preferredLanguage,
        'preferredLanguage': farmer.preferredLanguage,
        'soil_type': farmer.soilType,
        'soilType': farmer.soilType,
        'irrigation_source': farmer.irrigationSource,
        'irrigationSource': farmer.irrigationSource,
        'weather_alerts': farmer.weatherAlerts,
        'weatherAlerts': farmer.weatherAlerts,
        'scheme_alerts': farmer.schemeAlerts,
        'schemeAlerts': farmer.schemeAlerts,
        'price_alerts': farmer.priceAlerts,
        'priceAlerts': farmer.priceAlerts,
        'updated_at': FieldValue.serverTimestamp(),
      }, SetOptions(merge: true));
      debugPrint("Profile saved to Firestore successfully.");
    } catch (e) {
      debugPrint("Firestore saveFarmerProfile notice: $e");
    }
  }

  // =========================================================================
  // 2. FARM DIARY (Offline-First with Instant Zero-Latency Streaming)
  // =========================================================================

  Future<List<FarmDiaryEntry>> _getLocalDiary(String farmerId) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final str = prefs.getString('local_diary_$farmerId');
      if (str != null && str.isNotEmpty) {
        final List list = json.decode(str);
        return list.map((e) => FarmDiaryEntry(
          id: e['id']?.toString() ?? '',
          farmerId: e['farmer_id']?.toString() ?? farmerId,
          date: DateTime.tryParse(e['entry_date'] ?? '') ?? DateTime.now(),
          activity: e['activity'] ?? '',
          category: e['category'] ?? '',
          cost: (e['cost'] as num?)?.toDouble() ?? 0.0,
          isExpense: e['is_expense'] ?? true,
          notes: e['notes'],
        )).toList();
      }
    } catch (_) {}
    return [];
  }

  Future<void> _saveLocalDiary(String farmerId, List<FarmDiaryEntry> entries) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final list = entries.map((e) => {
        'id': e.id,
        'farmer_id': e.farmerId,
        'entry_date': e.date.toIso8601String(),
        'activity': e.activity,
        'category': e.category,
        'cost': e.cost,
        'is_expense': e.isExpense,
        'notes': e.notes,
      }).toList();
      await prefs.setString('local_diary_$farmerId', json.encode(list));
    } catch (_) {}
  }

  Future<List<FarmDiaryEntry>> getDiaryEntries(String farmerId) async {
    final local = await _getLocalDiary(farmerId);
    try {
      final snapshot = await _db
          .collection('farm_diary')
          .where('farmer_id', isEqualTo: farmerId)
          .get();

      final list = snapshot.docs.map((doc) {
        final item = doc.data();
        return FarmDiaryEntry(
          id: doc.id,
          farmerId: item['farmer_id']?.toString() ?? '',
          date: _parseTimestamp(item['entry_date']),
          activity: item['activity'] ?? '',
          category: item['category'] ?? '',
          cost: (item['cost'] as num?)?.toDouble() ?? 0.0,
          isExpense: item['is_expense'] ?? true,
          notes: item['notes'],
        );
      }).toList();

      list.sort((a, b) => b.date.compareTo(a.date));
      if (list.isNotEmpty) {
        await _saveLocalDiary(farmerId, list);
        return list;
      }
      return local;
    } catch (e) {
      debugPrint("Firestore getDiaryEntries notice: $e");
      return local;
    }
  }

  Stream<List<FarmDiaryEntry>> getDiaryEntriesStream(String farmerId) {
    late StreamController<List<FarmDiaryEntry>> controller;
    StreamSubscription? firestoreSub;
    StreamSubscription? localSub;

    controller = StreamController<List<FarmDiaryEntry>>.broadcast(
      onListen: () async {
        final local = await _getLocalDiary(farmerId);
        if (!controller.isClosed) {
          controller.add(local);
        }

        localSub = _diaryChangeController.stream.listen((id) async {
          if (id == farmerId && !controller.isClosed) {
            final updatedLocal = await _getLocalDiary(farmerId);
            controller.add(updatedLocal);
          }
        });

        try {
          firestoreSub = _db
              .collection('farm_diary')
              .where('farmer_id', isEqualTo: farmerId)
              .snapshots()
              .listen((snapshot) async {
            if (!controller.isClosed) {
              final remoteList = snapshot.docs.map((doc) {
                final item = doc.data();
                return FarmDiaryEntry(
                  id: doc.id,
                  farmerId: item['farmer_id']?.toString() ?? '',
                  date: _parseTimestamp(item['entry_date']),
                  activity: item['activity'] ?? '',
                  category: item['category'] ?? '',
                  cost: (item['cost'] as num?)?.toDouble() ?? 0.0,
                  isExpense: item['is_expense'] ?? true,
                  notes: item['notes'],
                );
              }).toList();

              if (remoteList.isNotEmpty) {
                final localList = await _getLocalDiary(farmerId);
                final mergedMap = <String, FarmDiaryEntry>{};
                for (final e in localList) {
                  mergedMap[e.id] = e;
                }
                for (final e in remoteList) {
                  mergedMap[e.id] = e;
                }
                final merged = mergedMap.values.toList();
                merged.sort((a, b) => b.date.compareTo(a.date));
                await _saveLocalDiary(farmerId, merged);
                controller.add(merged);
              }
            }
          }, onError: (e) {
            debugPrint("Firestore diary stream notice: $e");
          });
        } catch (e) {
          debugPrint("Firestore diary stream listen error: $e");
        }
      },
      onCancel: () {
        firestoreSub?.cancel();
        localSub?.cancel();
      },
    );

    return controller.stream;
  }

  Future<void> addDiaryEntry(FarmDiaryEntry entry) async {
    // 1. Local update first
    try {
      final local = await _getLocalDiary(entry.farmerId);
      final updated = List<FarmDiaryEntry>.from(local);
      final idx = updated.indexWhere((e) => e.id == entry.id);
      if (idx != -1) {
        updated[idx] = entry;
      } else {
        updated.insert(0, entry);
      }
      await _saveLocalDiary(entry.farmerId, updated);
      _diaryChangeController.add(entry.farmerId);
    } catch (_) {}

    // 2. Firestore cloud sync
    try {
      final data = {
        'farmer_id': entry.farmerId,
        'entry_date': Timestamp.fromDate(entry.date),
        'activity': entry.activity,
        'category': entry.category,
        'cost': entry.cost,
        'is_expense': entry.isExpense,
        'notes': entry.notes,
        'created_at': FieldValue.serverTimestamp(),
      };

      if (entry.id.isNotEmpty && entry.id.length > 20) {
        await _db.collection('farm_diary').doc(entry.id).set(data);
      } else {
        await _db.collection('farm_diary').add(data);
      }
      debugPrint("Diary entry added to Firestore.");
    } catch (e) {
      debugPrint("Firestore addDiaryEntry notice: $e");
    }
  }

  Future<void> deleteDiaryEntry(String farmerId, String entryId) async {
    // 1. Local update first
    try {
      final local = await _getLocalDiary(farmerId);
      final updated = local.where((e) => e.id != entryId).toList();
      await _saveLocalDiary(farmerId, updated);
      _diaryChangeController.add(farmerId);
    } catch (_) {}

    // 2. Firestore cloud sync
    try {
      await _db.collection('farm_diary').doc(entryId).delete();
      debugPrint("Diary entry deleted from Firestore.");
    } catch (e) {
      debugPrint("Firestore deleteDiaryEntry notice: $e");
    }
  }

  // =========================================================================
  // 3. MARKETPLACE LISTINGS
  // =========================================================================

  Future<List<MarketplaceListing>> getMarketListings() async {
    try {
      final snapshot = await _db
          .collection('marketplace_listings')
          .get();

      final list = snapshot.docs.map((doc) {
        final item = doc.data();
        item['id'] = doc.id;
        return MarketplaceListing.fromJson(item);
      }).toList();

      list.sort((a, b) => b.dateListed.compareTo(a.dateListed));
      return list;
    } catch (e) {
      debugPrint("Firestore getMarketListings error: $e");
      return [];
    }
  }

  Stream<List<MarketplaceListing>> getMarketListingsStream() {
    try {
      return _db
          .collection('marketplace_listings')
          .snapshots()
          .map((snapshot) {
            final list = snapshot.docs.map((doc) {
              final item = doc.data();
              item['id'] = doc.id;
              return MarketplaceListing.fromJson(item);
            }).toList();
            list.sort((a, b) => b.dateListed.compareTo(a.dateListed));
            return list;
          })
          .handleError((e) {
        debugPrint("Firestore marketplace stream error: $e");
        return <MarketplaceListing>[];
      });
    } catch (e) {
      debugPrint("Firestore getMarketListingsStream setup error: $e");
      return Stream.fromFuture(getMarketListings());
    }
  }

  Future<void> addMarketListing(MarketplaceListing listing) async {
    try {
      final row = {
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
        'created_at': FieldValue.serverTimestamp(),
      };

      if (listing.id.isNotEmpty && listing.id.length > 20) {
        await _db.collection('marketplace_listings').doc(listing.id).set(row);
      } else {
        await _db.collection('marketplace_listings').add(row);
      }
      debugPrint("Marketplace listing added to Firestore: ${listing.commodity}");
    } catch (e) {
      debugPrint("Firestore addMarketListing notice: $e");
    }
  }

  Future<void> updateMarketListing(MarketplaceListing listing) async {
    try {
      await _db.collection('marketplace_listings').doc(listing.id).update({
        'title': listing.commodity,
        'crop_type': listing.commodity,
        'quantity': listing.quantity,
        'unit': listing.unit,
        'price_per_unit': listing.pricePerUnit,
        'location': listing.location,
        'phone': listing.phoneNumber ?? '',
        'image_url': listing.imageUrl,
        'status': listing.isSold ? 'sold' : 'active',
        'updated_at': FieldValue.serverTimestamp(),
      });
      debugPrint("Marketplace listing updated in Firestore.");
    } catch (e) {
      debugPrint("Firestore updateMarketListing notice: $e");
    }
  }

  Future<void> deleteMarketListing(String listingId) async {
    try {
      await _db.collection('marketplace_listings').doc(listingId).delete();
      debugPrint("Marketplace listing deleted from Firestore.");
    } catch (e) {
      debugPrint("Firestore deleteMarketListing error: $e");
      rethrow;
    }
  }

  Future<void> markListingSold(String listingId) async {
    try {
      await _db.collection('marketplace_listings').doc(listingId).update({
        'status': 'sold',
      });
      debugPrint("Marketplace listing marked sold in Firestore.");
    } catch (e) {
      debugPrint("Firestore markListingSold error: $e");
      rethrow;
    }
  }

  // =========================================================================
  // 4. COMMUNITY POSTS (With Rich Fallback Feed)
  // =========================================================================

  List<Post> getStaticCommunityPosts() {
    final now = DateTime.now();
    return [
      Post(
        id: 'post_1',
        farmerId: 'farmer_pune_1',
        farmerName: 'Balasaheb Shinde',
        title: 'Fall Armyworm in Maize',
        content: 'Heavy infestation of Fall Armyworm observed in Kharif maize crop. Recommended spraying: Emamectin Benzoate 5% SG @ 0.4g/litre or Neem Oil 10000 PPM @ 2ml/litre at early stage.',
        photoUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=500&auto=format&fit=crop',
        cropTag: 'Maize',
        problemTag: 'Pest Control',
        likes: 24,
        commentsCount: 7,
        createdAt: now.subtract(const Duration(hours: 3)),
      ),
      Post(
        id: 'post_2',
        farmerId: 'farmer_nashik_2',
        farmerName: 'Santosh Gaikwad',
        title: 'Nashik Onion Mandi Update',
        content: 'Lasalgaon mandi recorded good arrivals today. Average price for Summer Onion reached ₹2,200/quintal. Keep produce well aerated before loading to trucks.',
        photoUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=500&auto=format&fit=crop',
        cropTag: 'Onion',
        problemTag: 'Market Price',
        likes: 42,
        commentsCount: 15,
        createdAt: now.subtract(const Duration(hours: 6)),
      ),
      Post(
        id: 'post_3',
        farmerId: 'farmer_kolhapur_3',
        farmerName: 'Dattatray Patil',
        title: 'PMKSY Micro-Irrigation Subsidy Received',
        content: 'Received 55% subsidy approval under Pradhan Mantri Krishi Sinchayee Yojana for drip irrigation on 3 acres. Water requirement reduced by almost 40% with high uniform yield.',
        cropTag: 'Sugarcane',
        problemTag: 'Irrigation',
        likes: 58,
        commentsCount: 19,
        createdAt: now.subtract(const Duration(days: 1)),
      ),
    ];
  }

  Future<List<Post>> _getLocalPosts() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final str = prefs.getString('local_community_posts');
      if (str != null && str.isNotEmpty) {
        final List list = json.decode(str);
        return list.map((e) => Post.fromJson(e as Map<String, dynamic>)).toList();
      }
    } catch (_) {}
    return [];
  }

  Future<void> _saveLocalPosts(List<Post> posts) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final list = posts.map((e) => e.toJson()).toList();
      await prefs.setString('local_community_posts', json.encode(list));
    } catch (_) {}
  }

  Future<List<Post>> getPosts() async {
    final local = await _getLocalPosts();
    try {
      final snapshot = await _db
          .collection('community_posts')
          .get();

      if (snapshot.docs.isEmpty) {
        return local.isNotEmpty ? local : getStaticCommunityPosts();
      }

      final list = snapshot.docs.map((doc) {
        final item = doc.data();
        item['id'] = doc.id;
        return Post.fromJson(item);
      }).toList();

      list.sort((a, b) => b.createdAt.compareTo(a.createdAt));
      await _saveLocalPosts(list);
      return list;
    } catch (e) {
      debugPrint("Firestore getPosts error: $e");
      return local.isNotEmpty ? local : getStaticCommunityPosts();
    }
  }

  Stream<List<Post>> getPostsStream() {
    late StreamController<List<Post>> controller;
    StreamSubscription? firestoreSub;
    StreamSubscription? localSub;

    controller = StreamController<List<Post>>.broadcast(
      onListen: () async {
        final local = await _getLocalPosts();
        final initial = local.isNotEmpty ? local : getStaticCommunityPosts();
        if (!controller.isClosed) {
          controller.add(initial);
        }

        localSub = _postChangeController.stream.listen((_) async {
          if (!controller.isClosed) {
            final updatedLocal = await _getLocalPosts();
            controller.add(updatedLocal.isNotEmpty ? updatedLocal : getStaticCommunityPosts());
          }
        });

        try {
          firestoreSub = _db.collection('community_posts').snapshots().listen((snapshot) async {
            if (!controller.isClosed && snapshot.docs.isNotEmpty) {
              final remoteList = snapshot.docs.map((doc) {
                final item = doc.data();
                item['id'] = doc.id;
                return Post.fromJson(item);
              }).toList();

              final localList = await _getLocalPosts();
              final mergedMap = <String, Post>{};
              for (final p in getStaticCommunityPosts()) {
                mergedMap[p.id] = p;
              }
              for (final p in localList) {
                mergedMap[p.id] = p;
              }
              for (final p in remoteList) {
                mergedMap[p.id] = p;
              }
              final merged = mergedMap.values.toList();
              merged.sort((a, b) => b.createdAt.compareTo(a.createdAt));
              await _saveLocalPosts(merged);
              controller.add(merged);
            }
          }, onError: (e) {
            debugPrint("Firestore posts stream notice: $e");
          });
        } catch (e) {
          debugPrint("Firestore posts stream notice: $e");
        }
      },
      onCancel: () {
        firestoreSub?.cancel();
        localSub?.cancel();
      },
    );

    return controller.stream;
  }

  Future<void> createPost(Post post) async {
    // 1. Local-first update
    try {
      final local = await _getLocalPosts();
      final base = local.isNotEmpty ? local : getStaticCommunityPosts();
      final updated = List<Post>.from(base);
      final idx = updated.indexWhere((p) => p.id == post.id);
      if (idx != -1) {
        updated[idx] = post;
      } else {
        updated.insert(0, post);
      }
      await _saveLocalPosts(updated);
      _postChangeController.add(null);
    } catch (_) {}

    // 2. Firestore cloud sync
    try {
      final data = {
        'farmer_id': post.farmerId,
        'author_name': post.farmerName,
        'title': post.title,
        'content': post.content,
        'likes': post.likes,
        'image_url': post.photoUrl,
        'crop_tag': post.cropTag,
        'problem_tag': post.problemTag,
        'created_at': FieldValue.serverTimestamp(),
      };

      if (post.id.isNotEmpty && post.id.length > 20) {
        await _db.collection('community_posts').doc(post.id).set(data);
      } else {
        await _db.collection('community_posts').add(data);
      }
      debugPrint("Post published to Firestore.");
    } catch (e) {
      debugPrint("Firestore createPost notice: $e");
    }
  }

  Future<void> likePost(String postId) async {
    try {
      await _db.collection('community_posts').doc(postId).update({
        'likes': FieldValue.increment(1),
      });
      debugPrint("Post liked in Firestore.");
    } catch (e) {
      debugPrint("Firestore likePost error: $e");
    }
  }

  // =========================================================================
  // 5. MANDI PRICES
  // =========================================================================

  Future<List<MarketPrice>> getMandiPrices({String? state, String? commodity}) async {
    try {
      Query<Map<String, dynamic>> query = _db.collection('mandi_prices');

      if (state != null && state.isNotEmpty) {
        query = query.where('state', isEqualTo: state);
      }
      if (commodity != null && commodity.isNotEmpty) {
        query = query.where('commodity', isEqualTo: commodity);
      }

      final snapshot = await query.limit(100).get();

      final list = snapshot.docs.map((doc) {
        final row = doc.data();
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

      list.sort((a, b) => b.modalPrice.compareTo(a.modalPrice));
      return list;
    } catch (e) {
      debugPrint("Firestore getMandiPrices error: $e");
      return [];
    }
  }

  Future<void> upsertMandiPrices(List<MarketPrice> prices) async {
    if (prices.isEmpty) return;

    try {
      final batch = _db.batch();
      for (final p in prices) {
        final docId = '${p.commodity}_${p.market}_${p.district}'.replaceAll(' ', '_').toLowerCase();
        batch.set(
          _db.collection('mandi_prices').doc(docId),
          {
            'commodity': p.commodity,
            'market': p.market,
            'district': p.district,
            'state': p.state,
            'min_price': p.minPrice,
            'max_price': p.maxPrice,
            'modal_price': p.modalPrice,
            'arrival_date': DateTime.now().toIso8601String().substring(0, 10),
            'updated_at': FieldValue.serverTimestamp(),
          },
          SetOptions(merge: true),
        );
      }
      await batch.commit();
      debugPrint("Mandi prices synced to Firestore (${prices.length} records).");
    } catch (e) {
      debugPrint("Firestore upsertMandiPrices error: $e");
    }
  }

  // =========================================================================
  // Helper
  // =========================================================================

  static DateTime _parseTimestamp(dynamic value) {
    if (value is Timestamp) return value.toDate();
    if (value is String) return DateTime.tryParse(value) ?? DateTime.now();
    return DateTime.now();
  }
}
