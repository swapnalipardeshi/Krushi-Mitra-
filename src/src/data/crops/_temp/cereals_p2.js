export const data = [
  {
    "crop_id": "teff",
    "common_name": "Teff",
    "hindi_name": "टेफ",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate moisture but avoid waterlogging, as seeds are very small and can rot."
      },
      {
        "stage_name": "Tillering",
        "day_range": "15-35",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply top dressing of nitrogen to promote robust tillering."
      },
      {
        "stage_name": "Heading and Flowering",
        "day_range": "35-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical period for moisture. Ensure soil is moist to prevent flower abortion."
      },
      {
        "stage_name": "Grain Filling to Maturity",
        "day_range": "55-80",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation. Allow soil to dry slightly to facilitate ripening."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth, reduced tillering.",
          "solution": "Apply Urea (15-20 kg/acre) as top dressing or spray 1% Urea solution (150g per 15L pump, 1.5kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green to purplish leaves, poor root development.",
          "solution": "Apply SSP (50 kg/acre) as basal or spray NPK 19:19:19 (75g per 15L pump, 750g/acre)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted growth in early stages.",
          "solution": "Spray Zinc Sulphate 21% at 30g per 15L pump (300g/acre)."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves with green veins.",
          "solution": "Spray Ferrous Sulphate at 30g per 15L pump (300g/acre) along with citric acid."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Teff Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange-red pustules on leaves and stems.",
        "favorable_weather": "High humidity, warm temperatures (20-25°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, ensure proper spacing.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray at first sign of pustules."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "शूट फ्लाई",
        "symptoms": "Dead heart symptom in young seedlings.",
        "favorable_weather": "Warm and moist conditions during early growth.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, increase seed rate slightly.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use fish meal traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray during seedling stage if damage exceeds 5%."
          }
        }
      },
      {
        "issue_name": "Head Smut",
        "type": "Fungal",
        "hindi_name": "स्मट",
        "symptoms": "Panicles replaced by black powdery spore masses.",
        "favorable_weather": "Moderate temperature, soilborne infection.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, solarization.",
            "biological_spray": "Trichoderma viride as seed treatment.",
            "mechanical": "Rogue out infected panicles before they open."
          },
          "chemical_curative": {
            "active_ingredient": "Carboxin 37.5% + Thiram 37.5% DS",
            "commercial_reference": "Vitavax Power",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment at 3g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "आर्मीवर्म",
        "symptoms": "Defoliation, caterpillars feeding on leaves and panicles.",
        "favorable_weather": "Dry spells followed by heavy rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep field free of weeds.",
            "biological_spray": "Bt (Bacillus thuringiensis) 30g per 15L pump.",
            "mechanical": "Handpick caterpillars if feasible."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "70 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray focusing on caterpillars in late evening."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewed leaves, often defoliating young plants completely.",
        "favorable_weather": "Dry and hot conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem oil 10000 ppm at 30 ml per 15L pump.",
            "mechanical": "Use sweep nets."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on the crop and borders."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fonio",
    "common_name": "Fonio",
    "hindi_name": "फोनियो",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moist soil for germination, very fine seeds need a smooth seedbed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant, but occasional moisture helps quick growth."
      },
      {
        "stage_name": "Heading",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid extreme drought during panicle emergence."
      },
      {
        "stage_name": "Maturity",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest as soon as seeds harden to avoid shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.0",
      "basal_dose_per_acre": "N: 10 kg, P: 10 kg, K: 5 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, stunted plants.",
          "solution": "Apply mild top dressing of Urea (10 kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, purplish tint on older leaves.",
          "solution": "Apply DAP as basal dose."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf margins, weak stems.",
          "solution": "Spray NPK 0:0:50 (75g per 15L pump)."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Spray Magnesium Sulphate (40g per 15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Brown necrotic spots on leaves leading to drying.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, avoid excess nitrogen.",
            "biological_spray": "Trichoderma viride spray.",
            "mechanical": "Remove heavily infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly upon noticing initial symptoms."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart, bore holes in stems.",
        "favorable_weather": "Warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, intercropping.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray when dead hearts cross 5%."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, sooty mold on honeydew.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies like ladybird beetles.",
            "biological_spray": "Neem oil (1500 ppm) at 40 ml per 15L pump.",
            "mechanical": "Use yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting the underside of leaves."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Grains transformed into black powdery masses.",
        "favorable_weather": "Moderate temperature.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens seed treatment.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 2% DS",
            "commercial_reference": "Raxil",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1.5g/kg seed for treatment",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dry seed treatment before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wild-rice",
    "common_name": "Wild Rice",
    "hindi_name": "जंगली चावल",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Germination and Emergence",
        "day_range": "0-20",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds need to be submerged in water to germinate properly."
      },
      {
        "stage_name": "Floating Leaf Stage",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain water levels to support floating leaves without submerging them entirely."
      },
      {
        "stage_name": "Aerial Leaf and Tillering",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Plants emerge above water; optimal nutrition needed for tillering."
      },
      {
        "stage_name": "Heading and Maturity",
        "day_range": "70-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Gradual draining of water can be done as grains mature, watch for shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, poor tillering.",
          "solution": "Apply slow-release Nitrogen fertilizers due to aquatic environment."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green leaves.",
          "solution": "Incorporate SSP (40 kg/acre) into soil before flooding."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rusty brown spots on older leaves, stunted plants.",
          "solution": "Apply Zinc Sulphate 21% (10 kg/acre) as basal."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves, common in some alkaline conditions.",
          "solution": "Spray Ferrous Sulphate (30g per 15L pump) + Citric acid."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Brown Spot",
        "type": "Fungal",
        "hindi_name": "भूरा धब्बा",
        "symptoms": "Oval, brown spots on leaves and glumes.",
        "favorable_weather": "High humidity, poor soil nutrition.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure adequate nitrogen supply.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Use clean seeds."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray twice at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Rice Worm",
        "type": "Insect-Pest",
        "hindi_name": "राइस वर्म",
        "symptoms": "Larvae feed on developing grains causing empty husks.",
        "favorable_weather": "Warm, wet conditions during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Synchronized planting to avoid continuous hosts.",
            "biological_spray": "Bt spray at 30g per 15L pump.",
            "mechanical": "Use light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply strictly considering aquatic toxicity; avoid if water flows out to natural bodies."
          }
        }
      },
      {
        "issue_name": "Ergot",
        "type": "Fungal",
        "hindi_name": "अरगट",
        "symptoms": "Grains replaced by hard, black sclerotia.",
        "favorable_weather": "Cool, damp weather during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed, crop rotation.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "Floatation method to separate sclerotia from seeds."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Preventive spray during heading."
          }
        }
      },
      {
        "issue_name": "Midge",
        "type": "Insect-Pest",
        "hindi_name": "मिज",
        "symptoms": "Larvae feed inside florets, causing empty grains.",
        "favorable_weather": "High humidity, continuous cloud cover.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda Cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during evening hours at early flowering."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jobs-tears",
    "common_name": "Job's Tears",
    "hindi_name": "कोइक्स",
    "regional_names": {"bengali": "Gargargi"},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires warm soil and moderate moisture for even emergence."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Vigorous growth stage; apply nitrogenous fertilizers and ensure good soil moisture."
      },
      {
        "stage_name": "Flowering and Grain Formation",
        "day_range": "60-100",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress here can significantly reduce grain size and yield."
      },
      {
        "stage_name": "Maturity",
        "day_range": "100-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Grains turn hard and greyish/white; stop irrigation to facilitate harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 30 kg, P: 20 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing, reduced plant height and poor tillering.",
          "solution": "Top dress Urea 15 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants with dark green or purplish leaves.",
          "solution": "Apply SSP as basal dose."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf tips and margins.",
          "solution": "Apply MOP (10 kg/acre) or spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Light yellow stripes along leaf midribs.",
          "solution": "Spray Zinc Sulphate (30g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Large, elongated brown lesions on leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overcrowding, ensure good air circulation.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Remove basal infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Larvae bore into stems causing dead heart.",
        "favorable_weather": "High temperature, dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plough field deeply after harvest to expose pupae.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Cartap Hydrochloride 4% GR",
            "commercial_reference": "Padan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "7.5 kg/acre broadcast",
            "waiting_period_phi": "25 Days",
            "application_instructions": "Broadcast granules in soil with slight moisture."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "स्मट",
        "symptoms": "Grains are replaced by black spore masses.",
        "favorable_weather": "Moderate temperatures and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified disease-free seeds.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "Rogue and burn infected heads."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply as preventive spray at heading."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewing damage on leaves.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management around field borders.",
            "biological_spray": "Neem seed kernel extract (NSKE) 5%.",
            "mechanical": "Physical removal if possible."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray when damage is noticeable."
          }
        }
      }
    ]
  },
  {
    "crop_id": "canary-grass",
    "common_name": "Canary Grass",
    "hindi_name": "कैनेरी घास",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moist, fine seedbed. Sowing shallow is critical."
      },
      {
        "stage_name": "Tillering",
        "day_range": "20-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nitrogen application promotes higher number of tillers."
      },
      {
        "stage_name": "Heading/Flowering",
        "day_range": "45-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Avoid moisture stress."
      },
      {
        "stage_name": "Maturity",
        "day_range": "75-105",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prone to shattering; harvest promptly when seeds turn golden-brown."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted plants, pale green to yellow leaves.",
          "solution": "Apply Urea (15 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, dark green leaves with purple tint.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of youngest leaves first.",
          "solution": "Use Ammonium Sulphate or apply Bentonite Sulphur (10 kg/acre)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange to reddish-brown pustules on leaves.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, resistant varieties.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Avoid excess nitrogen."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clusters of small insects on leaves, yellowing, honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain natural predators.",
            "biological_spray": "Neem oil (1500 ppm) 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Yellowing of leaves, plant wilting, decayed roots.",
        "favorable_weather": "Waterlogged or poorly drained soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve soil drainage, crop rotation.",
            "biological_spray": "Trichoderma soil application.",
            "mechanical": "Rogue out wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water (Soil Drench)",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Drench near the root zone."
          }
        }
      }
    ]
  },
  {
    "crop_id": "buckwheat",
    "common_name": "Buckwheat",
    "hindi_name": "कुट्टू",
    "regional_names": {"marathi": "Kuttu", "gujarati": "Kuttu"},
    "category": "Pseudo-Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid soil crusting. Requires good moisture for rapid emergence."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth phase, very sensitive to weed competition initially."
      },
      {
        "stage_name": "Flowering",
        "day_range": "30-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Prolonged flowering period. Extreme heat or drought can cause blossom drop."
      },
      {
        "stage_name": "Seed Set",
        "day_range": "55-75",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Adequate moisture needed for grain filling."
      },
      {
        "stage_name": "Maturity",
        "day_range": "75-90",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when 75% of seeds have turned dark to prevent shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, stunted growth.",
          "solution": "Apply Urea (15 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, purplish tinge on stems.",
          "solution": "Apply SSP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf margins.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curling of young leaves, blossom drop.",
          "solution": "Apply agricultural lime if soil is too acidic."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set, brittle stems.",
          "solution": "Spray Boron 20% (15g/15L pump) at early flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted growth.",
          "solution": "Apply Zinc Sulphate 33% (5 kg/acre) to soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "भभूतिया रोग",
        "symptoms": "White powdery patches on leaves and stems.",
        "favorable_weather": "Dry days with cool, dewy nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate plant spacing.",
            "biological_spray": "Ampelomyces quisqualis 50g per 15L pump.",
            "mechanical": "Remove severely infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at initial appearance of white patches."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Plants wilt, brown discoloration at stem base, root decay.",
        "favorable_weather": "Heavy, poorly drained soils, excess rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, crop rotation.",
            "biological_spray": "Trichoderma viride drench.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Soil drenching around affected plants."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clustered on new shoots and flowers, causing honeydew and sooty mold.",
        "favorable_weather": "Cool and cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen fertilizers.",
            "biological_spray": "Neem oil 10000 ppm at 30 ml/pump.",
            "mechanical": "Yellow sticky traps (10/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray uniformly over foliage."
          }
        }
      },
      {
        "issue_name": "Wireworms",
        "type": "Insect-Pest",
        "hindi_name": "वायरवर्म",
        "symptoms": "Larvae feed on seeds and roots, causing patchy emergence.",
        "favorable_weather": "Cool, moist soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plough field deeply during summer.",
            "biological_spray": "Metarhizium anisopliae soil application.",
            "mechanical": "Bait traps."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 0.3% GR",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg/acre broadcast",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply at the time of field preparation."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Circular brown lesions on leaves.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, avoid dense planting.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray upon spotting lesions."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot-holes in cotyledons and early true leaves.",
        "favorable_weather": "Warm, dry weather in early season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Increase seeding rate slightly.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 10% EC",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if damage exceeds economic threshold."
          }
        }
      }
    ]
  },
  {
    "crop_id": "quinoa",
    "common_name": "Quinoa",
    "hindi_name": "क्विनोआ",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination and Emergence",
        "day_range": "0-10",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds need adequate moisture; avoid deep sowing."
      },
      {
        "stage_name": "Two-leaf to Branching",
        "day_range": "10-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires weed-free environment due to slow early growth."
      },
      {
        "stage_name": "Flowering (Anthesis)",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Highly sensitive to heat stress (>35C) which can cause pollen sterility."
      },
      {
        "stage_name": "Grain Filling",
        "day_range": "70-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Needs moderate moisture to maximize grain size."
      },
      {
        "stage_name": "Physiological Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Plants turn pale yellow/red. Harvest when grains are hard and dry."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.5",
      "basal_dose_per_acre": "N: 40 kg, P: 20 kg, K: 20 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow entire plants, poor branching.",
          "solution": "Apply Urea (20 kg/acre) split at 30 and 45 days."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, reddening of leaves.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, higher susceptibility to drought.",
          "solution": "Spray NPK 13:0:45 (75g/15L pump)."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed setting, empty panicles.",
          "solution": "Spray Boron 20% (15g/15L pump) before flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, shortened internodes.",
          "solution": "Foliar spray of Zinc Sulphate (30g/15L pump)."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Spray Magnesium Sulphate (40g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellowish spots on upper leaf surface, greyish fuzz on lower surface.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid overhead irrigation.",
            "biological_spray": "Bacillus subtilis formulation.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly at onset of symptoms."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown to black circular lesions.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, clean cultivation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems, wilting of top branches.",
        "favorable_weather": "Dry, warm spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy crop residues.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray thoroughly targeting stems."
          }
        }
      },
      {
        "issue_name": "Cutworms",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Seedlings cut at soil level during night.",
        "favorable_weather": "Cool nights, dry soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing to expose larvae.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Hand collection in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water (Soil Drench)",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Drench soil around plants."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, stunted growth, presence of ants.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Intercropping with strong-smelling herbs.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10 g",
            "dose_per_acre": "100 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting the undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Lygus Bugs",
        "type": "Insect-Pest",
        "hindi_name": "लाइगस बग",
        "symptoms": "Feeding on developing seeds causing shriveled grains.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control around field.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Sweep netting."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray during grain formation if bugs are abundant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "grain-amaranth",
    "common_name": "Grain Amaranth",
    "hindi_name": "राजगिरा",
    "regional_names": {"hindi": "Ramdana", "marathi": "Rajgira", "gujarati": "Rajgira", "tamil": "Keerai"},
    "category": "Pseudo-Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tiny seeds require very shallow planting and light, frequent watering."
      },
      {
        "stage_name": "Active Vegetative",
        "day_range": "20-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid elongation. Adequate nitrogen ensures sturdy stalks."
      },
      {
        "stage_name": "Inflorescence Emergence",
        "day_range": "45-65",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress here reduces head size and yield."
      },
      {
        "stage_name": "Grain Filling",
        "day_range": "65-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain soil moisture but avoid waterlogging to prevent lodging."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation. Harvest after first frost (in cold areas) or when grains harden."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 30 kg, P: 20 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green/yellow leaves, stunted inflorescence.",
          "solution": "Apply Urea (15 kg/acre) as top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Delayed flowering, dark or purple foliage (beyond natural coloration).",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, lodging.",
          "solution": "Apply MOP (10 kg/acre) or spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn on younger leaves.",
          "solution": "Spray Calcium Nitrate (30g/15L pump)."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Spray Ferrous Sulphate (30g/15L pump) + Citric acid."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set, brittle stems.",
          "solution": "Spray Boron 20% (15g/15L pump) at early flowering."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "डैम्पिंग ऑफ",
        "symptoms": "Seedlings rot at soil level and topple over.",
        "favorable_weather": "Cool, wet soils, overcrowding.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overwatering, treat seed with Trichoderma.",
            "biological_spray": "Trichoderma drench.",
            "mechanical": "Thinning to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 35% WS",
            "commercial_reference": "Apron",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment 2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown, water-soaked lesions on leaves which dry up.",
        "favorable_weather": "High humidity, warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove lower infected leaves, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray at 10-15 day intervals."
          }
        }
      },
      {
        "issue_name": "Stem Weevil",
        "type": "Insect-Pest",
        "hindi_name": "तना घुन",
        "symptoms": "Grubs bore into stems causing swelling, splitting, and lodging.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, crop rotation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Uproot and burn infested plants."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply as basal stem spray in early stages."
          }
        }
      },
      {
        "issue_name": "Leaf Webbers",
        "type": "Insect-Pest",
        "hindi_name": "लीफ वेबर",
        "symptoms": "Leaves webbed together, caterpillars feeding inside.",
        "favorable_weather": "Warm, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Handpick and destroy webbed leaves.",
            "biological_spray": "Bt formulation at 30g/pump.",
            "mechanical": "Light traps for adults."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray with high volume to penetrate webs."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, sooty mold, stunting.",
        "favorable_weather": "Cool and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies like ladybirds.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray targeting the colonies."
          }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रस्ट",
        "symptoms": "White blister-like pustules on the underside of leaves.",
        "favorable_weather": "Cool nights, heavy dew, warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage, weed control.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove highly infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small round holes in leaves, especially on seedlings.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain adequate moisture to help seedlings outgrow damage.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage to seedlings is severe."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chia",
    "common_name": "Chia Seed",
    "hindi_name": "चिया बीज",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires consistent light moisture; sensitive to waterlogging."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "10-50",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth, needs weeding early on."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Short-day plant; flowering triggered by day length. Avoid drought."
      },
      {
        "stage_name": "Seed Development and Maturity",
        "day_range": "80-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Dry conditions needed for uniform ripening and easy harvesting."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, reduced branching.",
          "solution": "Apply mild dose of Urea (10 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Delayed flowering, dark green leaves.",
          "solution": "Apply SSP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf edges.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted plants.",
          "solution": "Apply Zinc Sulphate (5 kg/acre) to soil."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed setting, empty floral spikes.",
          "solution": "Spray Boron 20% (15g/15L pump) pre-flowering."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट",
        "symptoms": "Yellowing of leaves, vascular browning, plant wilting.",
        "favorable_weather": "Warm soils, high moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, improve soil drainage.",
            "biological_spray": "Trichoderma viride soil application.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water (Soil Drench)",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drench near the root zone."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing leaves, sooty mold from honeydew, vector for viruses.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Neem oil (10000 ppm) at 30 ml/pump.",
            "mechanical": "Yellow sticky traps (15/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "25 g",
            "dose_per_acre": "250 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray covering both leaf surfaces."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of young leaves, stunted growth.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predators (lacewings, ladybirds).",
            "biological_spray": "Verticillium lecanii 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on seeing initial colonies."
          }
        }
      },
      {
        "issue_name": "Sclerotinia Stem Rot",
        "type": "Fungal",
        "hindi_name": "स्क्लेरोटीनिया स्टेम रोट",
        "symptoms": "White cottony growth on stems, black resting bodies (sclerotia) inside stems.",
        "favorable_weather": "Cool, prolonged wet periods, dense canopies.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider row spacing, deep ploughing.",
            "biological_spray": "Trichoderma harzianum.",
            "mechanical": "Rogue out infected plants carefully."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "250 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray directing to the lower stems."
          }
        }
      },
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी घुन",
        "symptoms": "Stippling on leaves, fine webbing on underside, drying of leaves.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep field adequately irrigated.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray focusing on undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "canihua",
    "common_name": "Canihua",
    "hindi_name": "कैनिहुआ",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds are very small, shallow sowing and consistent moisture needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Frost tolerant in early stages, rapid branching."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for yield; avoid extreme drought."
      },
      {
        "stage_name": "Maturity",
        "day_range": "70-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Shatter-prone; harvest when seeds change color to dark brown/black."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, stunted growth.",
          "solution": "Apply Urea (10 kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, purplish tint.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning leaf margins.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, chlorosis.",
          "solution": "Spray Zinc Sulphate 21% (30g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellow spots on top of leaves, grey fuzz underneath.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, avoid overhead watering.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in young leaves.",
        "favorable_weather": "Dry, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage to seedlings is severe."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, honeydew.",
        "favorable_weather": "Cool, cloudy days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Natural predators.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray uniformly."
          }
        }
      },
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "डैम्पिंग ऑफ",
        "symptoms": "Seedling collapse at soil line.",
        "favorable_weather": "Cold, wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good soil drainage.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment 2g/kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds prior to sowing."
          }
        }
      }
    ]
  }
];
