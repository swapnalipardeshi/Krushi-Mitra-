// ⚡ Krushi Mitra — Pre-Commit Conflict Check Engine (Flutter / Dart)
// Round 2 Challenge Feature: Detects activity-weather and crop calendar-soil conflicts
// BEFORE the user commits to an action, logs overrides to Supabase conflict_audit_logs,
// and exposes a Judge Debug State Panel.

import 'package:flutter/foundation.dart';
import 'supabase_service.dart';

class ConflictCheckResult {
  final bool hasConflict;
  final bool isBlocking;
  final String title;
  final String reason;
  final double rainProbability;
  final String expectedTime;
  final String activityType;
  final Map<String, dynamic> rawInputs;

  ConflictCheckResult({
    required this.hasConflict,
    required this.isBlocking,
    required this.title,
    required this.reason,
    required this.rainProbability,
    required this.expectedTime,
    required this.activityType,
    required this.rawInputs,
  });

  static ConflictCheckResult noConflict(String activityType) {
    return ConflictCheckResult(
      hasConflict: false,
      isBlocking: false,
      title: 'No Conflict Detected',
      reason: 'Action is safe to proceed based on live weather and soil parameters.',
      rainProbability: 0.0,
      expectedTime: 'N/A',
      activityType: activityType,
      rawInputs: {},
    );
  }
}

class SoilConflictResult {
  final bool hasConflict;
  final String title;
  final String warningMessage;
  final String calendarRecommendation;
  final String soilReportFinding;

  SoilConflictResult({
    required this.hasConflict,
    required this.title,
    required this.warningMessage,
    required this.calendarRecommendation,
    required this.soilReportFinding,
  });
}

class ConflictCheckService {
  static final ConflictCheckService _instance = ConflictCheckService._internal();
  factory ConflictCheckService() => _instance;
  ConflictCheckService._internal();

  /// Check Farm Diary activity pre-commit against live weather
  ConflictCheckResult evaluateDiaryActivityConflict({
    required String activityType,
    required double rainProbability,
    required double windSpeed,
    required String forecastCondition,
  }) {
    final lowerAct = activityType.toLowerCase();
    final isSprayingOrFertilizer = lowerAct.contains('spray') || 
                                   lowerAct.contains('pesticide') || 
                                   lowerAct.contains('fertilizer') || 
                                   lowerAct.contains('khat');
    
    final isHarvesting = lowerAct.contains('harvest') || lowerAct.contains('cutting');

    final rawInputs = {
      'activityType': activityType,
      'rainProbability': rainProbability,
      'windSpeed': windSpeed,
      'forecastCondition': forecastCondition,
      'evalTimestamp': DateTime.now().toIso8601String(),
    };

    // 1. High Rain Risk for Spraying/Fertilizer
    if (isSprayingOrFertilizer && rainProbability >= 0.60) {
      final rainPct = (rainProbability * 100).toStringAsFixed(0);
      return ConflictCheckResult(
        hasConflict: true,
        isBlocking: true,
        title: '🌧️ High Rain Conflict Detected ($rainPct% Chance)',
        reason: 'Heavy rain is forecast within the next 24 hours. Spraying pesticides or applying fertilizer now will result in chemical runoff and 80-100% financial loss.',
        rainProbability: rainProbability,
        expectedTime: 'Within next 12-24 hours',
        activityType: activityType,
        rawInputs: rawInputs,
      );
    }

    // 2. High Wind Risk for Spraying
    if (isSprayingOrFertilizer && windSpeed >= 20.0) {
      return ConflictCheckResult(
        hasConflict: true,
        isBlocking: false,
        title: '💨 High Wind Warning (${windSpeed.toStringAsFixed(1)} km/h)',
        reason: 'High wind speed will cause severe pesticide drift to neighboring fields and waste expensive chemicals.',
        rainProbability: rainProbability,
        expectedTime: 'Immediate',
        activityType: activityType,
        rawInputs: rawInputs,
      );
    }

    // 3. Rain Risk during Harvest
    if (isHarvesting && rainProbability >= 0.60) {
      final rainPct = (rainProbability * 100).toStringAsFixed(0);
      return ConflictCheckResult(
        hasConflict: true,
        isBlocking: false,
        title: '⚠️ Harvest Rain Risk ($rainPct% Chance)',
        reason: 'Rain expected on or near harvest day ($rainPct%). Freshly harvested produce may suffer moisture spoilage.',
        rainProbability: rainProbability,
        expectedTime: 'Within 24 hours',
        activityType: activityType,
        rawInputs: rawInputs,
      );
    }

    return ConflictCheckResult.noConflict(activityType);
  }

  /// Log Farmer Override Decision to Supabase for Auditability
  Future<void> logConflictOverride({
    required ConflictCheckResult conflict,
    required String farmerName,
    required String location,
    String? userReason,
  }) async {
    try {
      if (SupabaseService.isInitialized) {
        await SupabaseService.client?.from('conflict_audit_logs').insert({
          'farmer_name': farmerName,
          'location': location,
          'activity_type': conflict.activityType,
          'conflict_title': conflict.title,
          'conflict_reason': conflict.reason,
          'rain_probability': conflict.rainProbability,
          'user_reason': userReason ?? 'Farmer decided to proceed anyway',
          'raw_inputs': conflict.rawInputs,
        });
        debugPrint('Conflict Check: Override logged to Supabase conflict_audit_logs');
      }
    } catch (e) {
      debugPrint('Conflict Check audit log notice: $e');
    }
  }

  /// Check Crop Calendar action against Soil Advisor report
  SoilConflictResult checkSoilCalendarConflict({
    required String calendarTask,
    required String soilNitrogen,
    required String soilPhosphorus,
    required String soilPotassium,
    required String soilType,
  }) {
    final lowerTask = calendarTask.toLowerCase();

    if (lowerTask.contains('urea') && soilNitrogen.toLowerCase().contains('high')) {
      return SoilConflictResult(
        hasConflict: true,
        title: 'SOIL TEST CONFLICT DETECTED',
        calendarRecommendation: 'Calendar: Apply Urea',
        soilReportFinding: 'Soil Test: Nitrogen is High ($soilNitrogen)',
        warningMessage: 'Calendar recommends Urea, but your soil test shows Nitrogen is already HIGH. Applying Urea now will cause crop lodging and wasted cost.',
      );
    }

    if (lowerTask.contains('dap') && soilPhosphorus.toLowerCase().contains('high')) {
      return SoilConflictResult(
        hasConflict: true,
        title: 'SOIL TEST CONFLICT DETECTED',
        calendarRecommendation: 'Calendar: Apply DAP',
        soilReportFinding: 'Soil Test: Phosphorus is High ($soilPhosphorus)',
        warningMessage: 'Calendar suggests DAP, but your soil test indicates optimal Phosphorus. You can safely skip DAP this week.',
      );
    }

    return SoilConflictResult(
      hasConflict: false,
      title: 'Aligned',
      warningMessage: '',
      calendarRecommendation: '',
      soilReportFinding: '',
    );
  }
}
