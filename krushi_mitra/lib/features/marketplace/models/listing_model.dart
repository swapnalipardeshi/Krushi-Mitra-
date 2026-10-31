class MarketplaceListing {
  final String id;
  final String sellerId;
  final String farmerName;
  final String commodity;
  final double quantity;
  final String unit; // kg, quintal, ton
  final double pricePerUnit;
  final String quality; // A+, A, B
  final String location;
  final String description;
  final String imageUrl;
  final String? phoneNumber;
  final DateTime dateListed;
  final bool isVerified;
  final bool isSold;
  final bool isOrganic;
  final bool deliveryAvailable;
  final double minimumOrder;
  final bool isNegotiable;

  MarketplaceListing({
    required this.id,
    required this.sellerId,
    required this.farmerName,
    required this.commodity,
    required this.quantity,
    required this.unit,
    required this.pricePerUnit,
    required this.quality,
    required this.location,
    required this.description,
    required this.imageUrl,
    this.phoneNumber,
    required this.dateListed,
    this.isVerified = false,
    this.isSold = false,
    this.isOrganic = false,
    this.deliveryAvailable = false,
    this.minimumOrder = 0,
    this.isNegotiable = true,
  });

  factory MarketplaceListing.fromJson(Map<String, dynamic> json) {
    double parseDouble(dynamic v) {
      if (v == null) return 0.0;
      if (v is num) return v.toDouble();
      if (v is String) return double.tryParse(v) ?? 0.0;
      return 0.0;
    }

    bool parseBool(dynamic v, bool fallback) {
      if (v == null) return fallback;
      if (v is bool) return v;
      if (v is String) return v.toLowerCase() == 'true' || v == '1';
      if (v is num) return v == 1;
      return fallback;
    }

    DateTime parseDate(dynamic v) {
      if (v == null) return DateTime.now();
      if (v is DateTime) return v;
      if (v is String) return DateTime.tryParse(v) ?? DateTime.now();
      return DateTime.now();
    }

    return MarketplaceListing(
      id: (json['id'] ?? '').toString(),
      sellerId: (json['sellerId'] ?? json['seller_id'] ?? json['farmer_id'] ?? '').toString(),
      farmerName: (json['farmerName'] ?? json['farmer_name'] ?? 'Kisan Mitra').toString(),
      commodity: (json['commodity'] ?? json['title'] ?? json['crop_type'] ?? 'Produce').toString(),
      quantity: parseDouble(json['quantity']),
      unit: (json['unit'] ?? 'Quintal').toString(),
      pricePerUnit: parseDouble(json['pricePerUnit'] ?? json['price_per_unit']),
      quality: (json['quality'] ?? 'A').toString(),
      location: (json['location'] ?? 'Nashik, Maharashtra').toString(),
      description: (json['description'] ?? '').toString(),
      imageUrl: (json['imageUrl'] ?? json['image_url'] ?? '').toString(),
      phoneNumber: (json['phoneNumber'] ?? json['phone_number'] ?? json['phone'])?.toString(),
      dateListed: parseDate(json['dateListed'] ?? json['date_listed'] ?? json['created_at']),
      isVerified: parseBool(json['isVerified'] ?? json['is_verified'], false),
      isSold: parseBool(json['isSold'] ?? json['is_sold'], false),
      isOrganic: parseBool(json['isOrganic'] ?? json['is_organic'], false),
      deliveryAvailable: parseBool(json['deliveryAvailable'] ?? json['delivery_available'], false),
      minimumOrder: parseDouble(json['minimumOrder'] ?? json['minimum_order']),
      isNegotiable: parseBool(json['isNegotiable'] ?? json['is_negotiable'], true),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'sellerId': sellerId,
      'seller_id': sellerId,
      'farmer_id': sellerId,
      'farmerName': farmerName,
      'farmer_name': farmerName,
      'commodity': commodity,
      'quantity': quantity,
      'unit': unit,
      'pricePerUnit': pricePerUnit,
      'price_per_unit': pricePerUnit,
      'quality': quality,
      'location': location,
      'description': description,
      'imageUrl': imageUrl,
      'image_url': imageUrl,
      'phoneNumber': phoneNumber,
      'phone_number': phoneNumber,
      'dateListed': dateListed.toIso8601String(),
      'date_listed': dateListed.toIso8601String(),
      'isVerified': isVerified,
      'is_verified': isVerified,
      'isSold': isSold,
      'is_sold': isSold,
      'isOrganic': isOrganic,
      'is_organic': isOrganic,
      'deliveryAvailable': deliveryAvailable,
      'delivery_available': deliveryAvailable,
      'minimumOrder': minimumOrder,
      'minimum_order': minimumOrder,
      'isNegotiable': isNegotiable,
      'is_negotiable': isNegotiable,
    };
  }

  /// Total listing value
  double get totalValue => quantity * pricePerUnit;

  /// Get an emoji icon based on commodity name
  String get cropEmoji {
    final name = commodity.toLowerCase();
    if (name.contains('wheat') || name.contains('गेहूं')) return '🌾';
    if (name.contains('rice') || name.contains('चावल') || name.contains('paddy')) return '🍚';
    if (name.contains('onion') || name.contains('प्याज')) return '🧅';
    if (name.contains('tomato') || name.contains('टमाटर')) return '🍅';
    if (name.contains('potato') || name.contains('आलू')) return '🥔';
    if (name.contains('corn') || name.contains('maize') || name.contains('मक्का')) return '🌽';
    if (name.contains('cotton') || name.contains('कपास')) return '🏵️';
    if (name.contains('sugarcane') || name.contains('गन्ना')) return '🎋';
    if (name.contains('soybean') || name.contains('soya')) return '🫘';
    if (name.contains('chilli') || name.contains('mirchi') || name.contains('pepper')) return '🌶️';
    if (name.contains('banana') || name.contains('केला')) return '🍌';
    if (name.contains('mango') || name.contains('आम')) return '🥭';
    if (name.contains('apple') || name.contains('सेब')) return '🍎';
    if (name.contains('grape') || name.contains('अंगूर')) return '🍇';
    if (name.contains('orange') || name.contains('संतरा')) return '🍊';
    if (name.contains('lemon') || name.contains('नींबू')) return '🍋';
    if (name.contains('carrot') || name.contains('गाजर')) return '🥕';
    if (name.contains('cabbage') || name.contains('पत्ता')) return '🥬';
    if (name.contains('garlic') || name.contains('लहसुन')) return '🧄';
    if (name.contains('pea') || name.contains('मटर')) return '🫛';
    if (name.contains('milk') || name.contains('दूध')) return '🥛';
    return '🌿';
  }

  /// Get a display-friendly time ago string
  String get timeAgo {
    final diff = DateTime.now().difference(dateListed);
    if (diff.inMinutes < 60) return '${diff.inMinutes}m ago';
    if (diff.inHours < 24) return '${diff.inHours}h ago';
    if (diff.inDays < 7) return '${diff.inDays}d ago';
    return '${(diff.inDays / 7).floor()}w ago';
  }

  /// Freshness label based on listing date
  String get freshnessLabel {
    final diff = DateTime.now().difference(dateListed);
    if (diff.inHours < 6) return '🟢 Just Listed';
    if (diff.inHours < 24) return '🟢 Today';
    if (diff.inDays < 3) return '🟡 Recent';
    if (diff.inDays < 7) return '🟠 This Week';
    return '⚪ Older';
  }
}
