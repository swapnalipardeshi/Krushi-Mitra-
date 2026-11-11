class MandiPrice {
  final String id;
  final String state;
  final String district;
  final String commodity;
  final double minPrice;
  final double maxPrice;
  final double modalPrice;
  final DateTime date;

  MandiPrice({
    required this.id,
    required this.state,
    required this.district,
    required this.commodity,
    required this.minPrice,
    required this.maxPrice,
    required this.modalPrice,
    required this.date,
  });

  factory MandiPrice.fromJson(Map<String, dynamic> json) {
    return MandiPrice(
      id: json['id']?.toString() ?? '',
      state: json['state'] as String? ?? '',
      district: json['district'] as String? ?? '',
      commodity: json['commodity'] as String? ?? '',
      minPrice: (json['min_price'] ?? json['minPrice'] as num?)?.toDouble() ?? 0.0,
      maxPrice: (json['max_price'] ?? json['maxPrice'] as num?)?.toDouble() ?? 0.0,
      modalPrice: (json['modal_price'] ?? json['modalPrice'] as num?)?.toDouble() ?? 0.0,
      date: DateTime.tryParse(json['arrival_date']?.toString() ?? json['date']?.toString() ?? '') ?? DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'state': state,
      'district': district,
      'commodity': commodity,
      'min_price': minPrice,
      'max_price': maxPrice,
      'modal_price': modalPrice,
      'arrival_date': date.toIso8601String().split('T').first,
    };
  }
}
