/**
 * Helper to tokenize a string into lowercase words, removing basic punctuation.
 * @param {string} text
 * @returns {string[]} Array of word tokens
 */
function tokenize(text) {
  if (!text) return [];
  return text.toLowerCase().replace(/[.,;!?()]/g, '').split(/\s+/).filter(Boolean);
}

/**
 * Calculates a confidence score based on Jaccard similarity and keyword overlap.
 * @param {string[]} inputSymptoms - User provided symptoms.
 * @param {string} knownSymptomsStr - Known symptoms from the database.
 * @returns {number} Confidence score between 0 and 1.
 */
export function calculateConfidence(inputSymptoms, knownSymptomsStr) {
  if (!inputSymptoms || !knownSymptomsStr) return 0;
  
  const inputTokens = new Set(inputSymptoms.flatMap(s => tokenize(s)));
  const knownTokens = new Set(tokenize(knownSymptomsStr));

  if (inputTokens.size === 0 || knownTokens.size === 0) return 0;

  let intersection = 0;
  for (const token of inputTokens) {
    if (knownTokens.has(token)) {
      intersection++;
    }
  }

  // Jaccard Similarity
  const union = inputTokens.size + knownTokens.size - intersection;
  const jaccard = union === 0 ? 0 : intersection / union;

  // Keyword overlap (percentage of input words found in known words)
  const overlap = intersection / inputTokens.size;

  // Blend jaccard and overlap for a better score
  return (jaccard * 0.4) + (overlap * 0.6);
}

/**
 * Resolves the current stage from a day count or stage name.
 * @param {Object} crop - The crop object.
 * @param {number|string} dayOrStageName - Day count (number) or stage name (string).
 * @returns {Object|null} The matching critical stage object.
 */
export function matchGrowthStage(crop, dayOrStageName) {
  if (!crop || !crop.critical_stages) return null;

  if (typeof dayOrStageName === 'number') {
    return crop.critical_stages.find(stage => {
      if (!stage.day_range) return false;
      const parts = stage.day_range.split('-');
      if (parts.length === 2) {
        const start = parseInt(parts[0], 10);
        const end = parseInt(parts[1], 10);
        return dayOrStageName >= start && dayOrStageName <= end;
      }
      return false;
    }) || null;
  }

  if (typeof dayOrStageName === 'string') {
    const search = dayOrStageName.toLowerCase();
    return crop.critical_stages.find(stage => 
      stage.stage_name && stage.stage_name.toLowerCase().includes(search)
    ) || null;
  }

  return null;
}

/**
 * Filters and boosts issues based on weather conditions.
 * @param {Array} issues - List of pest and disease issues.
 * @param {Object} weather - { temperature, humidity }
 * @returns {Array} Array of issues with updated weather_boost scores.
 */
export function filterByWeather(issues, weather) {
  if (!weather || (weather.temperature === undefined && weather.humidity === undefined)) {
    return issues.map(issue => ({ ...issue, weather_boost: 0 }));
  }

  return issues.map(issue => {
    let boost = 0;
    const fw = issue.favorable_weather ? issue.favorable_weather.toLowerCase() : '';

    if (weather.humidity !== undefined) {
      if (weather.humidity > 80 && (fw.includes('high humidity') || fw.includes('moist') || fw.includes('wet'))) {
        boost += 0.15;
      } else if (weather.humidity < 40 && (fw.includes('low humidity') || fw.includes('dry'))) {
        boost += 0.1;
      }
    }

    if (weather.temperature !== undefined) {
      if (weather.temperature >= 20 && weather.temperature <= 30 && fw.includes('warm')) {
        boost += 0.1;
      } else if (weather.temperature > 30 && fw.includes('hot')) {
        boost += 0.1;
      } else if (weather.temperature < 20 && fw.includes('cool')) {
        boost += 0.1;
      }
    }

    return { ...issue, weather_boost: boost };
  });
}

/**
 * Sorts diagnoses by confidence and type severity.
 * @param {Array} diagnoses - Array of diagnostic results.
 * @returns {Array} Sorted array of diagnoses.
 */
export function prioritizeDiagnoses(diagnoses) {
  const severityMap = {
    'viral': 4,
    'bacterial': 3,
    'fungal': 2,
    'insect': 1,
    'pest': 1,
    'nutrient deficiency': 1,
    'other': 0
  };

  return diagnoses.sort((a, b) => {
    // Primary sort: Confidence
    if (Math.abs(b.confidence - a.confidence) > 0.05) {
      return b.confidence - a.confidence;
    }
    // Secondary sort: Severity of type if confidence is very similar
    const typeA = a.type ? a.type.toLowerCase() : 'other';
    const typeB = b.type ? b.type.toLowerCase() : 'other';
    
    const sevA = severityMap[typeA] || 0;
    const sevB = severityMap[typeB] || 0;
    
    return sevB - sevA;
  });
}

/**
 * Class representing the Rule-Based Diagnostic Advisor.
 */
export class CropAdvisor {
  /**
   * Creates an instance of CropAdvisor.
   * @param {Map} cropDatabase - Map of crops keyed by crop_id.
   */
  constructor(cropDatabase) {
    if (!(cropDatabase instanceof Map)) {
      throw new Error("cropDatabase must be a Map");
    }
    this.cropDatabase = cropDatabase;
  }

  /**
   * Main diagnostic method.
   * @param {Object} params - Diagnostic parameters.
   * @param {string} params.crop_id - The ID of the crop.
   * @param {string[]} params.symptoms - Array of observed symptoms.
   * @param {Object} [params.weather] - Optional weather conditions { temperature, humidity }.
   * @param {string|number} [params.growth_stage] - Optional growth stage name or day count.
   * @returns {Object} Diagnostic report containing crop, diagnoses, stage_advice, nutrient_checks.
   */
  diagnose({ crop_id, symptoms, weather, growth_stage }) {
    const crop = this.cropDatabase.get(crop_id);
    if (!crop) {
      throw new Error(`Crop with ID ${crop_id} not found.`);
    }

    let currentStage = null;
    let stageAdvice = null;

    if (growth_stage !== undefined) {
      currentStage = matchGrowthStage(crop, growth_stage);
      if (currentStage) {
        stageAdvice = currentStage.stage_advice;
      }
    }

    const issues = crop.pest_and_disease_solutions || [];
    const weatherFilteredIssues = filterByWeather(issues, weather);
    
    let diagnoses = [];

    for (const issue of weatherFilteredIssues) {
      let baseConfidence = calculateConfidence(symptoms, issue.symptoms);
      
      // Add weather boost
      let totalConfidence = Math.min(1.0, baseConfidence + (issue.weather_boost || 0));

      // Stage relevance boost
      if (currentStage && issue.issue_name) {
        const stageName = currentStage.stage_name.toLowerCase();
        if (stageName.includes('seedling') && issue.issue_name.toLowerCase().includes('damping off')) {
           totalConfidence = Math.min(1.0, totalConfidence + 0.1);
        }
      }

      if (totalConfidence > 0) {
        diagnoses.push({
          issue: issue.issue_name,
          type: issue.type,
          confidence: totalConfidence,
          matching_symptoms: issue.symptoms,
          recommended_solution: issue.solutions
        });
      }
    }

    diagnoses = prioritizeDiagnoses(diagnoses);

    // Keep the top 5 and assign confidence levels
    diagnoses = diagnoses.slice(0, 5).map(d => {
      let level = 'Low';
      if (d.confidence > 0.7) level = 'High';
      else if (d.confidence >= 0.4) level = 'Medium';
      
      return {
        issue: d.issue,
        type: d.type,
        confidence: d.confidence,
        confidence_level: level,
        matching_symptoms: d.matching_symptoms,
        recommended_solution: d.recommended_solution
      };
    });

    // Check for nutrient deficiencies matching symptoms
    let nutrientChecks = [];
    if (crop.soil_and_nutrition && crop.soil_and_nutrition.deficiencies) {
      for (const def of crop.soil_and_nutrition.deficiencies) {
        const conf = calculateConfidence(symptoms, def.symptoms);
        if (conf > 0.3) {
          nutrientChecks.push({
            nutrient: def.nutrient,
            confidence: conf,
            solution: def.solution
          });
        }
      }
    }

    nutrientChecks.sort((a, b) => b.confidence - a.confidence);

    return {
      crop: crop.common_name || crop.crop_id,
      diagnoses,
      ...(stageAdvice && { stage_advice: stageAdvice }),
      ...(nutrientChecks.length > 0 && { nutrient_checks: nutrientChecks })
    };
  }

  /**
   * Returns spray calendar based on mode.
   * @param {string} crop_id - The ID of the crop.
   * @param {string} mode - 'organic' | 'chemical' | 'ipm_hybrid'
   * @returns {Array} Spray calendar schedule.
   */
  getSpraySchedule(crop_id, mode) {
    const crop = this.cropDatabase.get(crop_id);
    if (!crop) throw new Error(`Crop with ID ${crop_id} not found.`);

    if (!['organic', 'chemical', 'ipm_hybrid'].includes(mode)) {
      throw new Error("Mode must be 'organic', 'chemical', or 'ipm_hybrid'.");
    }

    const schedule = [];
    const stages = crop.critical_stages || [];
    const issues = crop.pest_and_disease_solutions || [];

    for (const stage of stages) {
      const relevantIssues = issues.slice(0, 3); // Pick subset of issues

      const sprayDetails = relevantIssues.map(issue => {
        let spray = "No specific spray";
        if (mode === 'organic' && issue.solutions && issue.solutions.organic_ipm) {
          spray = issue.solutions.organic_ipm;
        } else if (mode === 'chemical' && issue.solutions && issue.solutions.chemical_curative) {
          spray = issue.solutions.chemical_curative;
        } else if (mode === 'ipm_hybrid' && issue.solutions) {
          spray = `${issue.solutions.organic_ipm || 'Monitor'} followed by ${issue.solutions.chemical_curative || 'targeted spray'}`.trim();
        }
        return spray;
      });

      schedule.push({
        stage: stage.stage_name,
        target_issues: relevantIssues.map(i => i.issue_name),
        spray_details: sprayDetails,
        timing: stage.day_range
      });
    }

    return schedule;
  }

  /**
   * Returns nutrition advisory plan.
   * @param {string} crop_id - The ID of the crop.
   * @param {number} [soil_ph] - Optional soil pH.
   * @param {string[]} [deficiency_symptoms] - Optional list of deficiency symptoms.
   * @returns {Object} Nutrition advisory plan.
   */
  getNutrientPlan(crop_id, soil_ph, deficiency_symptoms) {
    const crop = this.cropDatabase.get(crop_id);
    if (!crop) throw new Error(`Crop with ID ${crop_id} not found.`);

    const nutrition = crop.soil_and_nutrition;
    if (!nutrition) return { message: "No nutrition data available for this crop." };

    let plan = {
      basal_dose: nutrition.basal_dose_per_acre || "Not specified",
      top_dressing_schedule: "Standard N-P-K splits as per regional guidelines.",
      foliar_sprays: "Apply micronutrients at flowering and fruit setting stages."
    };

    if (soil_ph !== undefined) {
      plan.ph_note = `Crop optimal pH is ${nutrition.ph_range}. Your soil pH is ${soil_ph}. Adjust accordingly.`;
    }

    if (deficiency_symptoms && deficiency_symptoms.length > 0 && nutrition.deficiencies) {
      plan.deficiency_corrections = [];
      for (const def of nutrition.deficiencies) {
        const conf = calculateConfidence(deficiency_symptoms, def.symptoms);
        if (conf > 0.4) {
          plan.deficiency_corrections.push({
            nutrient: def.nutrient,
            solution: def.solution
          });
        }
      }
    }

    return plan;
  }

  /**
   * Returns stage-specific advice.
   * @param {string} crop_id - The ID of the crop.
   * @param {string|number} current_day_or_stage - Day count or stage name.
   * @returns {Object} Stage advisory.
   */
  getStageAdvisory(crop_id, current_day_or_stage) {
    const crop = this.cropDatabase.get(crop_id);
    if (!crop) throw new Error(`Crop with ID ${crop_id} not found.`);

    const stage = matchGrowthStage(crop, current_day_or_stage);
    if (!stage) return { message: "Stage not found." };

    return {
      current_stage: stage.stage_name,
      advice: stage.stage_advice,
      upcoming_risks: "Varies based on weather and historical data.",
      preventive_measures: "Maintain optimal water levels and scout for pests weekly."
    };
  }

  /**
   * Side-by-side organic vs chemical comparison.
   * @param {string} crop_id - The ID of the crop.
   * @param {string} issue_name - The name of the pest or disease.
   * @returns {Object} Comparison report.
   */
  compareSolutions(crop_id, issue_name) {
    const crop = this.cropDatabase.get(crop_id);
    if (!crop) throw new Error(`Crop with ID ${crop_id} not found.`);

    const issue = (crop.pest_and_disease_solutions || []).find(i => 
      i.issue_name.toLowerCase() === issue_name.toLowerCase()
    );

    if (!issue) throw new Error(`Issue '${issue_name}' not found for this crop.`);

    return {
      issue: issue.issue_name,
      organic_solution: issue.solutions?.organic_ipm || "None specified",
      chemical_solution: issue.solutions?.chemical_curative || "None specified",
      cost_comparison_note: "Organic IPM typically has lower material cost but higher labor; chemical curatives are faster acting but more expensive.",
      efficacy_note: "Chemical curatives provide rapid knockdown. Organic solutions build long-term resilience."
    };
  }
}
