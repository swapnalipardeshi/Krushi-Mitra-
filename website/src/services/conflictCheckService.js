// ⚡ Krushi Mitra — Pre-Commit Conflict Check Engine (Web / JS)
// Round 2 Challenge Feature: Detects activity-weather and crop calendar-soil conflicts
// BEFORE the user commits to an action, logs overrides to Firestore conflict_audit_logs,
// and exposes a Judge Debug State Panel.

import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function evaluateDiaryActivityConflict({ activityType, rainProbability = 0.0, windSpeed = 0.0, forecastCondition = 'Clear' }) {
  const lowerAct = (activityType || '').toLowerCase();
  const isSprayingOrFertilizer = lowerAct.includes('spray') || lowerAct.includes('pesticide') || lowerAct.includes('fertilizer') || lowerAct.includes('khat');
  const isHarvesting = lowerAct.includes('harvest') || lowerAct.includes('cutting');

  const rawInputs = {
    activityType,
    rainProbability,
    windSpeed,
    forecastCondition,
    evalTimestamp: new Date().toISOString()
  };

  if (isSprayingOrFertilizer && rainProbability >= 0.60) {
    const rainPct = (rainProbability * 100).toFixed(0);
    return {
      hasConflict: true,
      isBlocking: true,
      title: `🌧️ High Rain Conflict Detected (${rainPct}% Chance)`,
      reason: `Heavy rain is forecast within 24 hours. Spraying pesticides or applying fertilizer will result in chemical runoff and 80-100% loss.`,
      rainProbability,
      expectedTime: 'Within 12-24 hours',
      activityType,
      rawInputs
    };
  }

  if (isHarvesting && rainProbability >= 0.60) {
    const rainPct = (rainProbability * 100).toFixed(0);
    return {
      hasConflict: true,
      isBlocking: false,
      title: `⚠️ Harvest Rain Warning (${rainPct}% Chance)`,
      reason: `Rain expected on harvest window (${rainPct}%). Moisture may spoil harvested produce.`,
      rainProbability,
      expectedTime: 'Within 24 hours',
      activityType,
      rawInputs
    };
  }

  return {
    hasConflict: false,
    isBlocking: false,
    title: 'No Conflict Detected',
    reason: 'Action is safe to proceed based on weather conditions.',
    rainProbability: 0.0,
    expectedTime: 'N/A',
    activityType,
    rawInputs
  };
}

export async function logConflictOverride({ conflict, farmerName = 'Farmer Mitra', location = 'Nashik', userReason = '' }) {
  try {
    await addDoc(collection(db, 'conflict_audit_logs'), {
      farmerName,
      location,
      activityType: conflict.activityType,
      conflictTitle: conflict.title,
      conflictReason: conflict.reason,
      rainProbability: conflict.rainProbability,
      userReason: userReason || 'Farmer selected proceed anyway',
      rawInputs: conflict.rawInputs,
      overrideTimestamp: serverTimestamp()
    });
    console.log('✅ Conflict override logged to Firestore conflict_audit_logs');
  } catch (err) {
    console.error('Audit log error:', err);
  }
}

export function checkCalendarSoilConflict({ scheduledAction, soilReport }) {
  if (!soilReport) return { hasConflict: false, reason: 'No recent soil report available.' };

  const lowerAction = (scheduledAction || '').toLowerCase();
  const assessment = (soilReport.assessment || '').toLowerCase();

  if (lowerAction.includes('urea') && assessment.includes('high nitrogen')) {
    return {
      hasConflict: true,
      title: '⚡ Soil Report Contradiction',
      calendarRecommendation: 'Scheduled: Apply Urea',
      soilReportFinding: 'Soil Test: Nitrogen is already High',
      reason: 'Soil test shows high Nitrogen. Applying Urea now will cause crop lodging.'
    };
  }

  return { hasConflict: false, reason: 'Action aligns with soil report.' };
}
