export const data = [
  {
    "crop_id": "ashwagandha",
    "common_name": "Ashwagandha",
    "hindi_name": "अश्वगंधा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Dark brown circular spots with concentric rings.",
        "favorable_weather": "High humidity, temp 25-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Alternaria Leaf Blight"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Parasitic Weed",
        "hindi_name": "ओरोबैन्क/टोका",
        "symptoms": "Yellow unbranched stems near roots, stunting host.",
        "favorable_weather": "Dry soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "None.",
            "mechanical": "Manual uprooting."
          },
          "chemical_curative": {
            "active_ingredient": "No specific post-emergence chemical.",
            "commercial_reference": "-",
            "dose_per_15L_pump": "-",
            "dose_per_acre": "-",
            "waiting_period_phi": "-",
            "application_instructions": "Rely on mechanical."
          }
        },
        "issue_name": "Orobanche"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "shatavari",
    "common_name": "Shatavari",
    "hindi_name": "शतावरी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "sarpagandha",
    "common_name": "Sarpagandha",
    "hindi_name": "सर्पगंधा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "senna",
    "common_name": "Senna",
    "hindi_name": "सन्ना/सनाय",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Dark brown circular spots with concentric rings.",
        "favorable_weather": "High humidity, temp 25-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Alternaria Leaf Blight"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "isabgol",
    "common_name": "Isabgol",
    "hindi_name": "ईसबगोल",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "डाउनी मिल्ड्यू",
        "symptoms": "Yellow angular spots on upper surface and purplish downy growth on lower surface.",
        "favorable_weather": "High humidity (>85%) and cool temperatures (15-20°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve aeration.",
            "biological_spray": "Trichoderma viride 50g/15L pump",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on both leaf surfaces."
          }
        },
        "issue_name": "Downy Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "kalmegh",
    "common_name": "Kalmegh",
    "hindi_name": "कालमेघ",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      }
    ]
  },
  {
    "crop_id": "brahmi",
    "common_name": "Brahmi",
    "hindi_name": "ब्राह्मी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "tulsi",
    "common_name": "Tulsi",
    "hindi_name": "तुलसी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      }
    ]
  },
  {
    "crop_id": "aloe_vera",
    "common_name": "Aloe Vera",
    "hindi_name": "एलोवेरा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "stevia",
    "common_name": "Stevia",
    "hindi_name": "स्टीविया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "artemisia",
    "common_name": "Artemisia",
    "hindi_name": "आर्टेमिसिया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "giloy",
    "common_name": "Giloy",
    "hindi_name": "गिलोय",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "poppy",
    "common_name": "Poppy",
    "hindi_name": "अफीम",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "डाउनी मिल्ड्यू",
        "symptoms": "Yellow angular spots on upper surface and purplish downy growth on lower surface.",
        "favorable_weather": "High humidity (>85%) and cool temperatures (15-20°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve aeration.",
            "biological_spray": "Trichoderma viride 50g/15L pump",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on both leaf surfaces."
          }
        },
        "issue_name": "Downy Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "belladonna",
    "common_name": "Belladonna",
    "hindi_name": "बेलाडोना",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "digitalis",
    "common_name": "Digitalis",
    "hindi_name": "डिजिटेलिस",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "cinchona",
    "common_name": "Cinchona",
    "hindi_name": "सिनकोना",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "neem_medicinal",
    "common_name": "Neem",
    "hindi_name": "नीम",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "st_johns_wort",
    "common_name": "St. John's Wort",
    "hindi_name": "सेंट जॉन्स वॉर्ट",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "valerian",
    "common_name": "Valerian",
    "hindi_name": "वेलेरियन",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "echinacea",
    "common_name": "Echinacea",
    "hindi_name": "एकिनेसिया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "ginseng",
    "common_name": "Ginseng",
    "hindi_name": "जिन्सेंग",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "citronella",
    "common_name": "Citronella",
    "hindi_name": "सिट्रोनेला",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      }
    ]
  },
  {
    "crop_id": "lemongrass",
    "common_name": "Lemongrass",
    "hindi_name": "लेमनग्रास",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      }
    ]
  },
  {
    "crop_id": "palmarosa",
    "common_name": "Palmarosa",
    "hindi_name": "पामारोज़ा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "vetiver",
    "common_name": "Vetiver",
    "hindi_name": "खस",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "geranium",
    "common_name": "Geranium",
    "hindi_name": "जीरेनियम",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "patchouli",
    "common_name": "Patchouli",
    "hindi_name": "पचौली",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "lavender",
    "common_name": "Lavender",
    "hindi_name": "लैवेंडर",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "mentha",
    "common_name": "Mentha",
    "hindi_name": "मेंथा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "rose_damask",
    "common_name": "Rose",
    "hindi_name": "गुलाब",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      },
      {
        "stage_name": "Post-Harvest Processing",
        "day_range": "140+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Dry in shade, maintain temperature to retain volatile oils."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "jasmine",
    "common_name": "Jasmine",
    "hindi_name": "चमेली",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "chamomile",
    "common_name": "Chamomile",
    "hindi_name": "कैमोमाइल",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "tuberose",
    "common_name": "Tuberose",
    "hindi_name": "रजनीगंधा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "eucalyptus_oil",
    "common_name": "Eucalyptus",
    "hindi_name": "नीलगिरी",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      }
    ]
  }
];
