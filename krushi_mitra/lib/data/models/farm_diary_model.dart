import 'package:equatable/equatable.dart';

class FarmDiaryEntry extends Equatable {
  final String id;
  final String farmerId;
  final DateTime date;
  final String activity;
  final String category;
  final double cost;
  final bool isExpense;
  final String? notes;

  const FarmDiaryEntry({
    required this.id,
    required this.farmerId,
    required this.date,
    required this.activity,
    required this.category,
    required this.cost,
    required this.isExpense,
    this.notes,
  });

  factory FarmDiaryEntry.fromJson(Map<String, dynamic> json) {
    return FarmDiaryEntry(
      id: json['id']?.toString() ?? '',
      farmerId: json['farmer_id'] ?? json['farmerId'] ?? '',
      date: json['date'] is String
          ? DateTime.parse(json['date'])
          : DateTime.now(),
      activity: json['activity'] ?? '',
      category: json['category'] ?? '',
      cost: (json['cost'] as num?)?.toDouble() ?? 0.0,
      isExpense: json['is_expense'] ?? json['isExpense'] ?? true,
      notes: json['notes'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'farmer_id': farmerId,
      'date': date.toIso8601String(),
      'activity': activity,
      'category': category,
      'cost': cost,
      'is_expense': isExpense,
      'isExpense': isExpense,
      'notes': notes,
    };
  }

  @override
  List<Object?> get props => [id, farmerId, date, activity, category, cost, isExpense, notes];
}
