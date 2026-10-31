class Farmer {
  final String id;
  final String name;
  final String? photoUrl;
  final String state;
  final String district;
  final double landSize;
  final List<String> cropsGrown;
  final String preferredLanguage;
  final String? soilType;
  final String? irrigationSource;

  Farmer({
    required this.id,
    required this.name,
    this.photoUrl,
    required this.state,
    required this.district,
    required this.landSize,
    required this.cropsGrown,
    required this.preferredLanguage,
    this.soilType,
    this.irrigationSource,
    this.weatherAlerts = true,
    this.schemeAlerts = true,
    this.priceAlerts = false,
  });

  final bool weatherAlerts;
  final bool schemeAlerts;
  final bool priceAlerts;

  // Firebase User-like compatibility getters
  String? get displayName => name;
  bool get isAnonymous => id.isEmpty || name == 'Guest';
  String? get email => null;

  factory Farmer.fromJson(Map<String, dynamic> json) {
    return Farmer(
      id: (json['id'] ?? 'farmer_default').toString(),
      name: (json['name'] ?? 'Kisan Mitra').toString(),
      photoUrl: json['photoUrl'] as String? ?? json['photo_url'] as String?,
      state: (json['state'] ?? 'Maharashtra').toString(),
      district: (json['district'] ?? 'Nashik').toString(),
      landSize: (json['landSize'] ?? json['land_size'] as num?)?.toDouble() ?? 2.5,
      cropsGrown: List<String>.from(json['cropsGrown'] ?? json['crops_grown'] ?? ['Wheat', 'Onion', 'Tomato', 'Soyabean']),
      preferredLanguage: (json['preferredLanguage'] ?? json['preferred_language'] as String?) ?? 'hi',
      soilType: json['soilType'] as String? ?? json['soil_type'] as String?,
      irrigationSource: json['irrigationSource'] as String? ?? json['irrigation_source'] as String?,
      weatherAlerts: json['weatherAlerts'] ?? json['weather_alerts'] as bool? ?? true,
      schemeAlerts: json['schemeAlerts'] ?? json['scheme_alerts'] as bool? ?? true,
      priceAlerts: json['priceAlerts'] ?? json['price_alerts'] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'photoUrl': photoUrl,
      'photo_url': photoUrl,
      'state': state,
      'district': district,
      'landSize': landSize,
      'land_size': landSize,
      'cropsGrown': cropsGrown,
      'crops_grown': cropsGrown,
      'preferredLanguage': preferredLanguage,
      'preferred_language': preferredLanguage,
      'soilType': soilType,
      'soil_type': soilType,
      'irrigationSource': irrigationSource,
      'irrigation_source': irrigationSource,
      'weatherAlerts': weatherAlerts,
      'weather_alerts': weatherAlerts,
      'schemeAlerts': schemeAlerts,
      'scheme_alerts': schemeAlerts,
      'priceAlerts': priceAlerts,
      'price_alerts': priceAlerts,
    };
  }

  Farmer copyWith({
    String? id,
    String? name,
    String? photoUrl,
    String? state,
    String? district,
    double? landSize,
    List<String>? cropsGrown,
    String? preferredLanguage,
    String? soilType,
    String? irrigationSource,
    bool? weatherAlerts,
    bool? schemeAlerts,
    bool? priceAlerts,
  }) {
    return Farmer(
      id: id ?? this.id,
      name: name ?? this.name,
      photoUrl: photoUrl ?? this.photoUrl,
      state: state ?? this.state,
      district: district ?? this.district,
      landSize: landSize ?? this.landSize,
      cropsGrown: cropsGrown ?? this.cropsGrown,
      preferredLanguage: preferredLanguage ?? this.preferredLanguage,
      soilType: soilType ?? this.soilType,
      irrigationSource: irrigationSource ?? this.irrigationSource,
      weatherAlerts: weatherAlerts ?? this.weatherAlerts,
      schemeAlerts: schemeAlerts ?? this.schemeAlerts,
      priceAlerts: priceAlerts ?? this.priceAlerts,
    );
  }
}
