import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../data/models/market_price_model.dart';
import '../services/market_service.dart';
import 'auth_provider.dart';

final marketServiceProvider = Provider<MarketService>((ref) => MarketService());

final useAIProvider = StateProvider<bool>((ref) => false);

final mandiFiltersProvider = StateProvider<({String state, String? commodity})>((ref) {
  final profile = ref.watch(currentUserProvider).valueOrNull;
  String? defaultCommodity;
  
  if (profile != null && profile.cropsGrown.isNotEmpty) {
    const popularCommodities = ['Wheat', 'Onion', 'Tomato', 'Soyabean', 'Cotton', 'Rice'];
    for (final crop in profile.cropsGrown) {
      final matched = popularCommodities.firstWhere(
        (c) => c.toLowerCase() == crop.toLowerCase() || crop.toLowerCase().contains(c.toLowerCase()),
        orElse: () => '',
      );
      if (matched.isNotEmpty) {
        defaultCommodity = matched;
        break;
      }
    }
  }
  return (state: profile?.state ?? 'Maharashtra', commodity: defaultCommodity);
});

final mandiProvider = FutureProvider<List<MarketPrice>>((ref) async {
  final service = ref.watch(marketServiceProvider);
  final filters = ref.watch(mandiFiltersProvider);
  
  return await service.getMarketPrices(
    state: filters.state,
    commodity: filters.commodity,
    forceRefresh: false,
  );
});
