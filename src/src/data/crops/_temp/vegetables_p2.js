export const data = [
  {
    "crop_id": "cucumber",
    "common_name": "Cucumber",
    "hindi_name": "खीरा",
    "regional_names": {
      "marathi": "Cucumber",
      "punjabi": "Cucumber",
      "tamil": "Cucumber",
      "telugu": "Cucumber"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bottle-gourd",
    "common_name": "Bottle Gourd",
    "hindi_name": "लौकी",
    "regional_names": {
      "marathi": "Bottle Gourd",
      "punjabi": "Bottle Gourd",
      "tamil": "Bottle Gourd",
      "telugu": "Bottle Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bitter-gourd",
    "common_name": "Bitter Gourd",
    "hindi_name": "करेला",
    "regional_names": {
      "marathi": "Bitter Gourd",
      "punjabi": "Bitter Gourd",
      "tamil": "Bitter Gourd",
      "telugu": "Bitter Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ridge-gourd",
    "common_name": "Ridge Gourd",
    "hindi_name": "तोरई",
    "regional_names": {
      "marathi": "Ridge Gourd",
      "punjabi": "Ridge Gourd",
      "tamil": "Ridge Gourd",
      "telugu": "Ridge Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sponge-gourd",
    "common_name": "Sponge Gourd",
    "hindi_name": "घिलकी",
    "regional_names": {
      "marathi": "Sponge Gourd",
      "punjabi": "Sponge Gourd",
      "tamil": "Sponge Gourd",
      "telugu": "Sponge Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "snake-gourd",
    "common_name": "Snake Gourd",
    "hindi_name": "चिचिंडा",
    "regional_names": {
      "marathi": "Snake Gourd",
      "punjabi": "Snake Gourd",
      "tamil": "Snake Gourd",
      "telugu": "Snake Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pointed-gourd",
    "common_name": "Pointed Gourd",
    "hindi_name": "परवल",
    "regional_names": {
      "marathi": "Pointed Gourd",
      "punjabi": "Pointed Gourd",
      "tamil": "Pointed Gourd",
      "telugu": "Pointed Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ivy-gourd",
    "common_name": "Ivy Gourd",
    "hindi_name": "कुंदरू",
    "regional_names": {
      "marathi": "Ivy Gourd",
      "punjabi": "Ivy Gourd",
      "tamil": "Ivy Gourd",
      "telugu": "Ivy Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ash-gourd",
    "common_name": "Ash Gourd",
    "hindi_name": "पेठा",
    "regional_names": {
      "marathi": "Ash Gourd",
      "punjabi": "Ash Gourd",
      "tamil": "Ash Gourd",
      "telugu": "Ash Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pumpkin",
    "common_name": "Pumpkin",
    "hindi_name": "कद्दू",
    "regional_names": {
      "marathi": "Pumpkin",
      "punjabi": "Pumpkin",
      "tamil": "Pumpkin",
      "telugu": "Pumpkin"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "zucchini",
    "common_name": "Zucchini",
    "hindi_name": "जुकिनी",
    "regional_names": {
      "marathi": "Zucchini",
      "punjabi": "Zucchini",
      "tamil": "Zucchini",
      "telugu": "Zucchini"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "butternut-squash",
    "common_name": "Butternut Squash",
    "hindi_name": "बटरनट स्क्वॉश",
    "regional_names": {
      "marathi": "Butternut Squash",
      "punjabi": "Butternut Squash",
      "tamil": "Butternut Squash",
      "telugu": "Butternut Squash"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "acorn-squash",
    "common_name": "Acorn Squash",
    "hindi_name": "एकॉर्न स्क्वॉश",
    "regional_names": {
      "marathi": "Acorn Squash",
      "punjabi": "Acorn Squash",
      "tamil": "Acorn Squash",
      "telugu": "Acorn Squash"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "watermelon",
    "common_name": "Watermelon",
    "hindi_name": "तरबूज",
    "regional_names": {
      "marathi": "Watermelon",
      "punjabi": "Watermelon",
      "tamil": "Watermelon",
      "telugu": "Watermelon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "muskmelon",
    "common_name": "Muskmelon",
    "hindi_name": "खरबूजा",
    "regional_names": {
      "marathi": "Muskmelon",
      "punjabi": "Muskmelon",
      "tamil": "Muskmelon",
      "telugu": "Muskmelon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "honeydew-melon",
    "common_name": "Honeydew Melon",
    "hindi_name": "हनीड्यू खरबूजा",
    "regional_names": {
      "marathi": "Honeydew Melon",
      "punjabi": "Honeydew Melon",
      "tamil": "Honeydew Melon",
      "telugu": "Honeydew Melon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chayote",
    "common_name": "Chayote",
    "hindi_name": "चौ-चौ",
    "regional_names": {
      "marathi": "Chayote",
      "punjabi": "Chayote",
      "tamil": "Chayote",
      "telugu": "Chayote"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wax-gourd",
    "common_name": "Wax Gourd",
    "hindi_name": "मोमी पेठा",
    "regional_names": {
      "marathi": "Wax Gourd",
      "punjabi": "Wax Gourd",
      "tamil": "Wax Gourd",
      "telugu": "Wax Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "winter-melon",
    "common_name": "Winter Melon",
    "hindi_name": "सर्दी का खरबूजा",
    "regional_names": {
      "marathi": "Winter Melon",
      "punjabi": "Winter Melon",
      "tamil": "Winter Melon",
      "telugu": "Winter Melon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  }
];
