import 'package:equatable/equatable.dart';

class FarmerModel extends Equatable {
  final String id;
  final String name;
  final String phone;
  final String? photoUrl;
  final String village;
  final String district;
  final String state;
  final List<String> crops;
  final double landAcres;
  final String language; // 'en', 'hi', 'mr'
  final DateTime createdAt;
  final DateTime? lastActive;

  const FarmerModel({
    required this.id,
    required this.name,
    required this.phone,
    this.photoUrl,
    required this.village,
    required this.district,
    required this.state,
    required this.crops,
    required this.landAcres,
    required this.language,
    required this.createdAt,
    this.lastActive,
  });

  factory FarmerModel.empty() => FarmerModel(
        id: '',
        name: '',
        phone: '',
        village: '',
        district: '',
        state: 'Maharashtra',
        crops: const [],
        landAcres: 0,
        language: 'hi',
        createdAt: DateTime.now(),
      );

  factory FarmerModel.fromJson(Map<String, dynamic> data) {
    return FarmerModel(
      id: data['id'] ?? '',
      name: data['name'] ?? '',
      phone: data['phone'] ?? '',
      photoUrl: data['photoUrl'] ?? data['photo_url'],
      village: data['village'] ?? '',
      district: data['district'] ?? '',
      state: data['state'] ?? 'Maharashtra',
      crops: List<String>.from(data['crops'] ?? data['crops_grown'] ?? []),
      landAcres: (data['landAcres'] ?? data['land_size'] as num?)?.toDouble() ?? 0.0,
      language: data['language'] ?? data['preferred_language'] ?? 'hi',
      createdAt: data['createdAt'] != null
          ? DateTime.tryParse(data['createdAt'].toString()) ?? DateTime.now()
          : DateTime.now(),
      lastActive: data['lastActive'] != null
          ? DateTime.tryParse(data['lastActive'].toString())
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'phone': phone,
      'photo_url': photoUrl,
      'village': village,
      'district': district,
      'state': state,
      'crops_grown': crops,
      'land_size': landAcres,
      'preferred_language': language,
      'created_at': createdAt.toIso8601String(),
      'last_active': lastActive?.toIso8601String(),
    };
  }

  FarmerModel copyWith({
    String? id,
    String? name,
    String? phone,
    String? photoUrl,
    String? village,
    String? district,
    String? state,
    List<String>? crops,
    double? landAcres,
    String? language,
    DateTime? createdAt,
    DateTime? lastActive,
  }) {
    return FarmerModel(
      id: id ?? this.id,
      name: name ?? this.name,
      phone: phone ?? this.phone,
      photoUrl: photoUrl ?? this.photoUrl,
      village: village ?? this.village,
      district: district ?? this.district,
      state: state ?? this.state,
      crops: crops ?? this.crops,
      landAcres: landAcres ?? this.landAcres,
      language: language ?? this.language,
      createdAt: createdAt ?? this.createdAt,
      lastActive: lastActive ?? this.lastActive,
    );
  }

  @override
  List<Object?> get props => [
        id,
        name,
        phone,
        photoUrl,
        village,
        district,
        state,
        crops,
        landAcres,
        language,
        createdAt,
        lastActive,
      ];
}
