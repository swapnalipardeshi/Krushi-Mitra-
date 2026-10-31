import 'package:flutter_test/flutter_test.dart';
import 'package:krushi_mitra/data/models/farmer_model.dart';
import 'package:krushi_mitra/data/models/farm_diary_model.dart';
import 'package:krushi_mitra/data/models/post_model.dart';
import 'package:krushi_mitra/features/marketplace/models/listing_model.dart';
import 'package:krushi_mitra/core/services/conflict_check_service.dart';
import 'package:krushi_mitra/core/services/market_service.dart';

void main() {
  group('Supabase Models & Business Logic Tests', () {
    test('MarketplaceListing supports both snake_case and camelCase serialization', () {
      final jsonSnake = {
        'id': 'b97e9301-381c-4b68-b769-cf4d5fa36ab2',
        'farmer_id': 'farmer_123',
        'farmer_name': 'Ramesh Kumar',
        'commodity': 'Wheat',
        'quantity': 150.0,
        'unit': 'Quintal',
        'price_per_unit': 2450.0,
        'quality': 'A',
        'location': 'Nashik, Maharashtra',
        'description': 'High quality Lokwan wheat',
        'image_url': 'https://example.com/wheat.jpg',
        'phone': '9876543210',
        'created_at': '2026-10-31T12:00:00.000Z',
        'is_verified': true,
        'status': 'active',
      };

      final listing = MarketplaceListing.fromJson(jsonSnake);
      expect(listing.id, 'b97e9301-381c-4b68-b769-cf4d5fa36ab2');
      expect(listing.sellerId, 'farmer_123');
      expect(listing.farmerName, 'Ramesh Kumar');
      expect(listing.commodity, 'Wheat');
      expect(listing.quantity, 150.0);
      expect(listing.pricePerUnit, 2450.0);
      expect(listing.isVerified, true);
      expect(listing.phoneNumber, '9876543210');

      final serialized = listing.toJson();
      expect(serialized['commodity'], 'Wheat');
      expect(serialized['farmer_id'], 'farmer_123');
    });

    test('Farmer profile deserialization handles Postgres nulls safely', () {
      final json = {
        'id': 'supabase_user_001',
        'name': 'Kisan Mitra',
        'state': 'Maharashtra',
        'district': 'Nashik',
        'land_size': 3.5,
        'crops_grown': ['Soybean', 'Cotton'],
        'preferred_language': 'mr',
        'soil_type': 'Black Soil',
      };

      final farmer = Farmer.fromJson(json);
      expect(farmer.id, 'supabase_user_001');
      expect(farmer.name, 'Kisan Mitra');
      expect(farmer.landSize, 3.5);
      expect(farmer.cropsGrown, contains('Soybean'));
      expect(farmer.preferredLanguage, 'mr');
      expect(farmer.weatherAlerts, true); // default true
    });

    test('FarmDiaryEntry calculates cost and expense types accurately', () {
      final entry = FarmDiaryEntry(
        id: 'diary-entry-001',
        farmerId: 'farmer_123',
        date: DateTime(2026, 10, 31),
        activity: 'Urea Application',
        category: 'Fertilizer',
        cost: 1200.0,
        isExpense: true,
        notes: '2 bags of Urea purchased',
      );

      final json = entry.toJson();
      expect(json['activity'], 'Urea Application');
      expect(json['cost'], 1200.0);
      expect(json['isExpense'], true);
    });

    test('Community Post serialization supports likes and author mappings', () {
      final post = Post(
        id: 'post-1',
        farmerId: 'farmer_abc',
        farmerName: 'Balasaheb Patil',
        title: 'Rainfall update',
        content: 'Good rainfall observed today in Nashik belt.',
        likes: 12,
        commentsCount: 3,
        createdAt: DateTime(2026, 10, 31),
      );

      final json = post.toJson();
      expect(json['farmer_id'], 'farmer_abc');
      expect(json['author_name'], 'Balasaheb Patil');
      expect(json['likes'], 12);
    });

    test('ConflictCheckService flags spraying during high rain probability', () {
      final service = ConflictCheckService();
      final result = service.evaluateDiaryActivityConflict(
        activityType: 'Pesticide Spraying',
        rainProbability: 0.85,
        windSpeed: 12.0,
        forecastCondition: 'Heavy Rain',
      );

      expect(result.hasConflict, true);
      expect(result.isBlocking, true);
      expect(result.title, contains('High Rain Conflict'));
    });

    test('MarketService returns verified MSP benchmark rates when offline', () async {
      final marketService = MarketService();
      marketService.initialize();

      final prices = await marketService.getMarketPrices(commodity: 'Wheat');
      expect(prices, isNotEmpty);
      expect(prices.first.commodity, 'Wheat');
      expect(prices.first.modalPrice, greaterThan(2000.0));
    });
  });
}
