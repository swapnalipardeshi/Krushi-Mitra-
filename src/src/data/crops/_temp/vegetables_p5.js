export const data = [
  {
    "crop_id": "potato",
    "common_name": "Potato",
    "hindi_name": "आलू",
    "regional_names": {
      "marathi": "बटाटा",
      "punjabi": "ਆਲੂ",
      "tamil": "உருளைக்கிழங்கு",
      "telugu": "బంగాళదుంప"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Sprouting", "day_range": "15-20", "water_requirement_sensitivity": "Low", "stage_advice": "Ensure adequate soil moisture but avoid waterlogging." },
      { "stage_name": "Vegetative Growth", "day_range": "20-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply first top dressing of nitrogen." },
      { "stage_name": "Stolon Initiation", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical stage for moisture stress." },
      { "stage_name": "Tuber Initiation", "day_range": "55-70", "water_requirement_sensitivity": "High", "stage_advice": "Maintain uniform moisture to prevent tuber malformation." },
      { "stage_name": "Tuber Bulking", "day_range": "70-90", "water_requirement_sensitivity": "High", "stage_advice": "Apply potassium for better tuber size." },
      { "stage_name": "Maturation", "day_range": "90-110", "water_requirement_sensitivity": "Medium", "stage_advice": "Reduce irrigation gradually." },
      { "stage_name": "Skin Setting", "day_range": "110-120", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation 10-15 days before harvest." },
      { "stage_name": "Harvesting", "day_range": "120-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when vines dry up completely." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 60:32:40 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth.", "solution": "Urea @ 1kg/15L pump or 20kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Dark green leaves with purple tints on margins.", "solution": "Foliar spray of NPK 19:19:19 @ 75g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching and rolling of older leaves.", "solution": "Foliar spray of Potassium Nitrate (13:0:45) @ 100g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn of young leaves, hollow heart in tubers.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "Magnesium Sulphate @ 50g/15L pump" },
        { "nutrient": "Zinc", "symptoms": "Fern leaf symptom, stunted plants.", "solution": "Zinc Sulphate @ 30g/15L pump" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis in young leaves.", "solution": "Ferrous Sulphate @ 30g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Internal brown spots in tubers.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Manganese", "symptoms": "Black spots on leaves.", "solution": "Manganese Sulphate @ 30g/15L pump" },
        { "nutrient": "Sulphur", "symptoms": "Uniform yellowing of young leaves.", "solution": "Bentonite Sulphur @ 10kg/acre soil application" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Late Blight",
        "type": "Fungal",
        "hindi_name": "पछेती झुलसा",
        "symptoms": "Water-soaked irregular spots on leaves, white fungal growth on undersurface.",
        "favorable_weather": "Cool (10-20°C) and highly humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seed tubers, avoid waterlogging.",
            "biological_spray": "Pseudomonas fluorescens @ 10g/L",
            "mechanical": "Remove and destroy infected plant parts."
          },
          "chemical_curative": {
            "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP",
            "commercial_reference": "Curzate M8",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at first appearance of disease, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Early Blight",
        "type": "Fungal",
        "hindi_name": "अगेती झुलसा",
        "symptoms": "Concentric dark rings (target board effect) on older leaves.",
        "favorable_weather": "Warm (24-29°C) and humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, maintain proper spacing.",
            "biological_spray": "Trichoderma viride @ 5g/L",
            "mechanical": "Remove infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray preventively or at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Potato Tuber Moth",
        "type": "Insect-Pest",
        "hindi_name": "आलू का कंद शलभ",
        "symptoms": "Larvae mine into leaves and stems, later bore into tubers.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper earthing up to cover tubers.",
            "biological_spray": "Bt kurstaki @ 2ml/L",
            "mechanical": "Use pheromone traps @ 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on foliage if leaf mining is observed."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling and yellowing of leaves, vectors for viral diseases (PVY/PLRV).",
        "favorable_weather": "Cool and cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use yellow sticky traps @ 10/acre.",
            "biological_spray": "Neem oil 10000 ppm @ 3ml/L",
            "mechanical": "Remove volunteer plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60-70ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when aphid population reaches ETL."
          }
        }
      },
      {
        "issue_name": "Common Scab",
        "type": "Bacterial",
        "hindi_name": "साधारण खुरण्ड",
        "symptoms": "Cork-like lesions on the surface of tubers.",
        "favorable_weather": "Dry soil conditions during tuber initiation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive lime application, maintain soil moisture.",
            "biological_spray": "Not highly effective",
            "mechanical": "Use disease-free seed tubers."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP (Seed Treatment)",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dip seed tubers in 0.25% solution for 10 mins before planting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sweet-potato",
    "common_name": "Sweet Potato",
    "hindi_name": "शकरकंद",
    "regional_names": {
      "marathi": "रताळे",
      "punjabi": "ਸ਼ਕਰਕੰਦੀ",
      "tamil": "சர்க்கரைவள்ளிக்கிழங்கு",
      "telugu": "చిలగడదుంప"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Vine Establishment", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Keep soil moist for rooting." },
      { "stage_name": "Vegetative Growth", "day_range": "15-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control is essential." },
      { "stage_name": "Tuber Initiation", "day_range": "40-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture; apply potash." },
      { "stage_name": "Tuber Bulking", "day_range": "60-100", "water_requirement_sensitivity": "High", "stage_advice": "Maintain uniform moisture." },
      { "stage_name": "Maturation", "day_range": "100-115", "water_requirement_sensitivity": "Low", "stage_advice": "Reduce irrigation." },
      { "stage_name": "Harvesting", "day_range": "115-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when leaves turn yellow." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 24:16:32 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow leaves.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Poor root development.", "solution": "DAP base application" },
        { "nutrient": "Potassium", "symptoms": "Poor tuber bulking, marginal leaf necrosis.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn on young leaves.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing on older leaves.", "solution": "Magnesium Sulphate @ 50g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Cracking in tubers.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Zinc", "symptoms": "Stunted vines, small leaves.", "solution": "Zinc Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Sweet Potato Weevil",
        "type": "Insect-Pest",
        "hindi_name": "शकरकंद का घुन",
        "symptoms": "Holes in vines and tubers, spongy foul-smelling tubers.",
        "favorable_weather": "Dry conditions causing soil cracks.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Earthing up to close soil cracks, clean cultivation.",
            "biological_spray": "Beauveria bassiana @ 5g/L",
            "mechanical": "Pheromone traps @ 4/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drench soil around plant base."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Sucking sap, sooty mold development.",
        "favorable_weather": "Warm, dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Remove alternate hosts."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray on leaf undersides."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of leaves, vascular browning, plant death.",
        "favorable_weather": "High soil moisture and warm temps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free planting material, crop rotation.",
            "biological_spray": "Trichoderma soil application",
            "mechanical": "Uproot and burn infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g for drenching",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Soil drenching around affected plants."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cassava",
    "common_name": "Cassava / Tapioca",
    "hindi_name": "कसावा / टैपिओका",
    "regional_names": {
      "marathi": "कसावा",
      "punjabi": "ਕਸਾਵਾ",
      "tamil": "மரவள்ளிக்கிழங்கு",
      "telugu": "కర్రపెండలం"
    },
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Sprouting", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate soil moisture." },
      { "stage_name": "Establishment", "day_range": "15-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Root Initiation", "day_range": "60-90", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture." },
      { "stage_name": "Root Bulking", "day_range": "90-200", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply potassium." },
      { "stage_name": "Maturation", "day_range": "200-240", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation." },
      { "stage_name": "Harvesting", "day_range": "240-300", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest as per maturity." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Overall stunting and yellowing.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Dark green to purplish leaves.", "solution": "DAP basal application" },
        { "nutrient": "Potassium", "symptoms": "Poor root bulking.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Deformed young leaves.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate @ 50g/15L pump" },
        { "nutrient": "Zinc", "symptoms": "Little leaf symptom.", "solution": "Zinc Sulphate @ 30g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Hollow roots.", "solution": "Borax @ 15g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cassava Mosaic Disease",
        "type": "Viral",
        "hindi_name": "कसावा मोज़ेक वायरस",
        "symptoms": "Chlorotic mosaic patterns on leaves, stunted growth.",
        "favorable_weather": "Warm weather favoring whitefly vectors.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free stems, remove infected plants.",
            "biological_spray": "Neem oil against vectors",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray to control whitefly vector."
          }
        }
      },
      {
        "issue_name": "Spiralling Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "White waxy spirals on lower leaf surface, sooty mold.",
        "favorable_weather": "Dry and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies like Encarsia spp.",
            "biological_spray": "Neem oil 10000 ppm @ 3ml/L",
            "mechanical": "Remove heavily infested leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray ensuring coverage of leaf undersides."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "Cottony masses on shoot tips, bunchy top appearance.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use uninfested planting material.",
            "biological_spray": "Verticillium lecanii @ 5g/L",
            "mechanical": "Prune and burn infested tips."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray thoroughly."
          }
        }
      }
    ]
  },
  {
    "crop_id": "yam",
    "common_name": "Yam (Greater/Lesser/White/Yellow)",
    "hindi_name": "रतालू",
    "regional_names": {
      "marathi": "रताळे",
      "punjabi": "ਰਤਾਲੂ",
      "tamil": "வள்ளிக்கிழங்கு",
      "telugu": "పెండలం"
    },
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Sprouting", "day_range": "15-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain soil moisture." },
      { "stage_name": "Vine Growth", "day_range": "30-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Staking is important." },
      { "stage_name": "Tuber Initiation", "day_range": "90-120", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture." },
      { "stage_name": "Tuber Bulking", "day_range": "120-200", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply potash." },
      { "stage_name": "Harvesting", "day_range": "200-240", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when vines dry." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 32:24:32 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing vines.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal application" },
        { "nutrient": "Potassium", "symptoms": "Small tubers.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Deformed young leaves.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate @ 50g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Tuber cracking.", "solution": "Borax @ 15g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Yam Scale",
        "type": "Insect-Pest",
        "hindi_name": "रतालू स्केल",
        "symptoms": "White scales on tubers, poor sprouting.",
        "favorable_weather": "Dry storage conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Store in clean, ventilated place.",
            "biological_spray": "Not highly effective",
            "mechanical": "Discard heavily infested tubers."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC (Tuber Dip)",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dip seed tubers in 0.1% solution for 10 mins before storage/planting."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark brown spots on leaves and vines, dieback.",
        "favorable_weather": "High humidity and rainfall.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens @ 10g/L",
            "mechanical": "Remove infected vines."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, warty tubers.",
        "favorable_weather": "Warm, sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with marigold.",
            "biological_spray": "Paecilomyces lilacinus soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "10 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application at planting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "onion",
    "common_name": "Onion",
    "hindi_name": "प्याज",
    "regional_names": {
      "marathi": "कांदा",
      "punjabi": "ਗੰਢਾ",
      "tamil": "வெங்காயம்",
      "telugu": "ఉల్లిపాయ"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect from damping off." },
      { "stage_name": "Transplanting", "day_range": "45-50", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately after transplanting." },
      { "stage_name": "Vegetative Growth", "day_range": "50-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogenous fertilizers." },
      { "stage_name": "Bulb Initiation", "day_range": "80-100", "water_requirement_sensitivity": "High", "stage_advice": "Critical stage for irrigation." },
      { "stage_name": "Bulb Development", "day_range": "100-130", "water_requirement_sensitivity": "High", "stage_advice": "Apply potash and sulphur." },
      { "stage_name": "Maturation (Neck Fall)", "day_range": "130-140", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation completely." },
      { "stage_name": "Harvesting", "day_range": "140-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest and cure properly." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 40:20:20 kg/acre + Sulphur 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green leaves, stunted growth.", "solution": "Urea @ 1kg/15L pump foliar spray" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth, delayed maturity.", "solution": "Foliar spray of NPK 19:19:19 @ 75g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Brown leaf tips, poor bulb quality.", "solution": "Potassium Nitrate (13:0:45) @ 100g/15L pump" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves, poor pungency.", "solution": "Bentonite Sulphur @ 10kg/acre soil application" },
        { "nutrient": "Zinc", "symptoms": "Twisted leaves.", "solution": "Zinc Sulphate @ 30g/15L pump" },
        { "nutrient": "Copper", "symptoms": "Thin, pale scales.", "solution": "Copper Oxychloride @ 30g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Cracked bulbs.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Leaf tip dieback.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Purple Blotch",
        "type": "Fungal",
        "hindi_name": "बैंगनी धब्बा",
        "symptoms": "Water soaked lesions on leaves becoming brown to purple with yellowish halo.",
        "favorable_weather": "Warm and humid (RH >80%).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing for aeration.",
            "biological_spray": "Trichoderma viride @ 5g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray with a sticker/spreader."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, curling and drying from tips.",
        "favorable_weather": "Dry and warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Blue sticky traps @ 10-15/acre.",
            "biological_spray": "Beauveria bassiana @ 5g/L",
            "mechanical": "Sprinkler irrigation reduces thrips."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray thoroughly targeting the leaf axils."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Pale green oval patches on leaves, purplish fungal growth in humid weather.",
        "favorable_weather": "Cool and wet/humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead irrigation in evening.",
            "biological_spray": "Pseudomonas fluorescens @ 10g/L",
            "mechanical": "Improve field drainage."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray preventively or at first sign."
          }
        }
      },
      {
        "issue_name": "Basal Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Yellowing and drying of leaves from tip downwards, rotting of basal plate.",
        "favorable_weather": "High soil moisture and high temperature.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, solarization.",
            "biological_spray": "Trichoderma harzianum enriched FYM application.",
            "mechanical": "Remove and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g for drenching",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drenching the soil around the root zone."
          }
        }
      }
    ]
  },
  {
    "crop_id": "garlic",
    "common_name": "Garlic",
    "hindi_name": "लहसुन",
    "regional_names": {
      "marathi": "लसूण",
      "punjabi": "ਲਸਣ",
      "tamil": "பூண்டு",
      "telugu": "వెల్లుల్లి"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Light irrigation after planting." },
      { "stage_name": "Vegetative Growth", "day_range": "15-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control and nitrogen application." },
      { "stage_name": "Bulb Initiation", "day_range": "70-100", "water_requirement_sensitivity": "High", "stage_advice": "Moisture stress reduces yield." },
      { "stage_name": "Bulb Development", "day_range": "100-130", "water_requirement_sensitivity": "High", "stage_advice": "Apply potassium." },
      { "stage_name": "Maturation", "day_range": "130-140", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation." },
      { "stage_name": "Harvesting", "day_range": "140-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when 50% leaves dry." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 40:20:20 kg/acre + Sulphur 15kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea @ 1kg/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "NPK 19:19:19 @ 75g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Poor bulb quality.", "solution": "Potassium Nitrate @ 100g/15L pump" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves, less pungency.", "solution": "Bentonite Sulphur @ 10kg/acre soil application" },
        { "nutrient": "Zinc", "symptoms": "Stunted growth.", "solution": "Zinc Sulphate @ 30g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Clove splitting.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Leaf tip burn.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery streaks on leaves.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Blue sticky traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Purple Blotch",
        "type": "Fungal",
        "hindi_name": "बैंगनी धब्बा",
        "symptoms": "Purple lesions on leaves.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing.",
            "biological_spray": "Trichoderma @ 5g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "माइट्स",
        "symptoms": "Stunted growth, twisting of leaves, bulb damage in storage.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seeds.",
            "biological_spray": "Beauveria bassiana @ 5g/L",
            "mechanical": "Sun drying of bulbs."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray thoroughly."
          }
        }
      }
    ]
  },
  {
    "crop_id": "carrot",
    "common_name": "Carrot",
    "hindi_name": "गाजर",
    "regional_names": {
      "marathi": "गाजर",
      "punjabi": "ਗਾਜਰ",
      "tamil": "கேரட்",
      "telugu": "క్యారెట్"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing & Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Keep soil moist for even germination." },
      { "stage_name": "Seedling Stage", "day_range": "15-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning is necessary." },
      { "stage_name": "Vegetative Growth", "day_range": "30-50", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Root Initiation", "day_range": "50-70", "water_requirement_sensitivity": "High", "stage_advice": "Ensure consistent moisture to avoid cracking." },
      { "stage_name": "Root Enlargement", "day_range": "70-90", "water_requirement_sensitivity": "High", "stage_advice": "Apply potassium." },
      { "stage_name": "Harvesting", "day_range": "90-110", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest before roots become woody." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 20:20:40 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green leaves.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling of leaves.", "solution": "DAP basal application" },
        { "nutrient": "Potassium", "symptoms": "Poor root development.", "solution": "MOP @ 20kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Cavity spot in roots.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Root splitting, black heart.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate @ 50g/15L pump" },
        { "nutrient": "Zinc", "symptoms": "Stunted tops.", "solution": "Zinc Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Alternaria Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Dark brown to black lesions on leaves, leading to defoliation.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, wider spacing.",
            "biological_spray": "Pseudomonas fluorescens @ 10g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Root-Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on feeder roots, deformed main root (forking).",
        "favorable_weather": "Warm, sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with marigold.",
            "biological_spray": "Purpureocillium lilacinum soil application.",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application at sowing."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, sooty mold.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Conserve ladybird beetles."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "radish",
    "common_name": "Radish / Mooli",
    "hindi_name": "मूली",
    "regional_names": {
      "marathi": "मुळा",
      "punjabi": "ਮੂਲੀ",
      "tamil": "முள்ளங்கி",
      "telugu": "ముల్లంగి"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Sowing", "day_range": "0-10", "water_requirement_sensitivity": "High", "stage_advice": "Moisture needed for germination." },
      { "stage_name": "Vegetative Growth", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Initiation", "day_range": "25-35", "water_requirement_sensitivity": "High", "stage_advice": "Constant moisture prevents pithiness." },
      { "stage_name": "Root Development", "day_range": "35-45", "water_requirement_sensitivity": "High", "stage_advice": "Avoid water stress." },
      { "stage_name": "Harvesting", "day_range": "45-60", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest promptly to avoid cracking." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.8",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:10:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Poor root growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor quality roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Boron", "symptoms": "Brown heart in roots.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Cavities in roots.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves, honeydew.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White pustules on underside of leaves.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Trichoderma @ 5g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot-holes in leaves.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Beauveria bassiana @ 5g/L",
            "mechanical": "Use row covers."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "beetroot",
    "common_name": "Beetroot",
    "hindi_name": "चुकंदर",
    "regional_names": {
      "marathi": "बीटरूट",
      "punjabi": "ਚੁਕੰਦਰ",
      "tamil": "பீட்ரூட்",
      "telugu": "బీట్రూట్"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Moisture is critical." },
      { "stage_name": "Vegetative", "day_range": "15-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Initiation", "day_range": "35-50", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Root Bulking", "day_range": "50-70", "water_requirement_sensitivity": "High", "stage_advice": "Potassium application." },
      { "stage_name": "Harvesting", "day_range": "70-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest tender roots." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 25:15:25 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Dark leaves.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Boron", "symptoms": "Internal black spots/heart rot.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सर्कोस्पोरा पत्ती धब्बा",
        "symptoms": "Circular spots with light center and red margins.",
        "favorable_weather": "Warm, highly humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Pseudomonas @ 10g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "White serpentine mines on leaves.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Destroy mined leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Abamectin 1.9% EC",
            "commercial_reference": "Vertimec",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray thoroughly."
          }
        }
      }
    ]
  },
  {
    "crop_id": "taro",
    "common_name": "Taro / Colocasia / Arbi",
    "hindi_name": "अरबी",
    "regional_names": {
      "marathi": "अळू",
      "punjabi": "ਅਰਬੀ",
      "tamil": "சேப்பங்கிழங்கு",
      "telugu": "చామదుంప"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Sprouting", "day_range": "15-30", "water_requirement_sensitivity": "High", "stage_advice": "Moisture is critical." },
      { "stage_name": "Vegetative Growth", "day_range": "30-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed management." },
      { "stage_name": "Cormel Initiation", "day_range": "70-100", "water_requirement_sensitivity": "High", "stage_advice": "High water need." },
      { "stage_name": "Cormel Bulking", "day_range": "100-140", "water_requirement_sensitivity": "High", "stage_advice": "Apply potash." },
      { "stage_name": "Harvesting", "day_range": "140-160", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when leaves yellow." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 32:24:32 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor cormel yield.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Deformed leaves.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L" },
        { "nutrient": "Zinc", "symptoms": "Small leaves.", "solution": "Zinc Sulphate @ 30g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Phytophthora Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Water soaked circular spots exuding clear yellow liquid.",
        "favorable_weather": "Heavy rain and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, remove infected leaves.",
            "biological_spray": "Pseudomonas @ 10g/L",
            "mechanical": "Avoid water stagnation."
          },
          "chemical_curative": {
            "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP",
            "commercial_reference": "Curzate",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray with sticker."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking, vector for Dasheen mosaic virus.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Clean cultivation."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray on leaf undersides."
          }
        }
      }
    ]
  },
  {
    "crop_id": "elephant-foot-yam",
    "common_name": "Elephant Foot Yam / Suran",
    "hindi_name": "सूरन / जिमीकंद",
    "regional_names": {
      "marathi": "सुरण",
      "punjabi": "ਜਿਮੀਕੰਦ",
      "tamil": "சேனைக்கிழங்கு",
      "telugu": "కంద"
    },
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Sprouting", "day_range": "30-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Mulching helps." },
      { "stage_name": "Vegetative Growth", "day_range": "45-120", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Corm Initiation", "day_range": "120-150", "water_requirement_sensitivity": "High", "stage_advice": "Adequate moisture." },
      { "stage_name": "Corm Bulking", "day_range": "150-240", "water_requirement_sensitivity": "High", "stage_advice": "Potassium application." },
      { "stage_name": "Harvesting", "day_range": "240-270", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when pseudostem dries." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 32:24:40 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea @ 10kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor yield.", "solution": "MOP @ 20kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Leaf distortion.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L" },
        { "nutrient": "Zinc", "symptoms": "Small leaves.", "solution": "Zinc Sulphate @ 30g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Collar Rot",
        "type": "Fungal",
        "hindi_name": "कॉलर रोट",
        "symptoms": "Rotting at the base of pseudostem, yellowing of leaves.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper drainage, treat corms.",
            "biological_spray": "Trichoderma soil application",
            "mechanical": "Remove affected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "500g for drenching",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drenching base of the plant."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony mass on corms.",
        "favorable_weather": "Dry conditions in storage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean storage.",
            "biological_spray": "Not effective",
            "mechanical": "Discard infested corms."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC (Dip)",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dip seed corms in 0.1% solution before planting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "turnip",
    "common_name": "Turnip / Shalgam",
    "hindi_name": "शलगम",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Bulking", "day_range": "25-45", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "45-60", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest tender." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:15:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Boron", "symptoms": "Brown heart.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rutabaga",
    "common_name": "Rutabaga / Swede",
    "hindi_name": "रूटाबागा",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative", "day_range": "10-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Bulking", "day_range": "30-70", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "70-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest before frost." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:15:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Boron", "symptoms": "Brown heart.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Row covers.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Early planting."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "parsnip",
    "common_name": "Parsnip",
    "hindi_name": "पार्सनिप",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-20", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative", "day_range": "20-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Bulking", "day_range": "60-100", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "100-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:30 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Boron", "symptoms": "Canker.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Carrot Fly",
        "type": "Insect-Pest",
        "hindi_name": "गाजर मक्खी",
        "symptoms": "Mines in roots.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Nematodes.",
            "mechanical": "Fleece."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "leek",
    "common_name": "Leek",
    "hindi_name": "लीक / प्याजी प्याज",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect from damping off." },
      { "stage_name": "Transplanting", "day_range": "40-50", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately." },
      { "stage_name": "Vegetative Growth", "day_range": "50-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Earthing up to blanch stems." },
      { "stage_name": "Stem Thickening", "day_range": "90-120", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "120-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest as needed." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 40:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 1kg/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "NPK 19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Poor stalk quality.", "solution": "Potassium Nitrate @ 100g/15L" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves.", "solution": "Bentonite Sulphur @ 10kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery streaks.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Blue traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "shallot",
    "common_name": "Shallot",
    "hindi_name": "छोटी प्याज",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Moisture for sprouting." },
      { "stage_name": "Vegetative Growth", "day_range": "15-50", "water_requirement_sensitivity": "Medium", "stage_advice": "Nitrogen application." },
      { "stage_name": "Bulb Initiation", "day_range": "50-70", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture." },
      { "stage_name": "Bulb Development", "day_range": "70-90", "water_requirement_sensitivity": "High", "stage_advice": "Apply potash." },
      { "stage_name": "Harvesting", "day_range": "90-100", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 30:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 1kg/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "NPK 19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Poor bulb quality.", "solution": "Potassium Nitrate @ 100g/15L" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves.", "solution": "Bentonite Sulphur @ 10kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Purple Blotch",
        "type": "Fungal",
        "hindi_name": "बैंगनी धब्बा",
        "symptoms": "Purple lesions.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing.",
            "biological_spray": "Trichoderma @ 5g/L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "spring-onion",
    "common_name": "Spring Onion / Scallion",
    "hindi_name": "हरी प्याज",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Moisture for sprouting." },
      { "stage_name": "Vegetative Growth", "day_range": "15-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Nitrogen application." },
      { "stage_name": "Stem Thickening", "day_range": "40-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture." },
      { "stage_name": "Harvesting", "day_range": "60-70", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest fresh." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 30:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 1kg/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "NPK 19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Poor quality.", "solution": "Potassium Nitrate @ 100g/15L" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves.", "solution": "Bentonite Sulphur @ 10kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery streaks.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Blue traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chives",
    "common_name": "Chives",
    "hindi_name": "चाइव्ज",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Moisture for sprouting." },
      { "stage_name": "Vegetative Growth", "day_range": "15-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Nitrogen application." },
      { "stage_name": "Harvesting", "day_range": "45-60", "water_requirement_sensitivity": "Low", "stage_advice": "Cut leaves 2 inches above soil." },
      { "stage_name": "Regrowth", "day_range": "60-90", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate and fertilize after cut." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 1kg/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "NPK 19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Poor quality.", "solution": "Potassium Nitrate @ 100g/15L" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves.", "solution": "Bentonite Sulphur @ 10kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery streaks.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Blue traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "horseradish",
    "common_name": "Horseradish",
    "hindi_name": "सहजन मूली",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-20", "water_requirement_sensitivity": "High", "stage_advice": "Moisture for rooting." },
      { "stage_name": "Vegetative Growth", "day_range": "20-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Root Bulking", "day_range": "90-150", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "150-180", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest after frost." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.8",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Sulphur", "symptoms": "Pale leaves.", "solution": "Bentonite Sulphur @ 10kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Row covers.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Early planting."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "celeriac",
    "common_name": "Celeriac",
    "hindi_name": "सेलेरीएक",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-20", "water_requirement_sensitivity": "High", "stage_advice": "Moisture critical." },
      { "stage_name": "Vegetative Growth", "day_range": "20-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Root Bulking", "day_range": "60-100", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "100-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 30:20:30 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Boron", "symptoms": "Brown checking.", "solution": "Borax @ 15g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Blackheart.", "solution": "Calcium Nitrate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Celery Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Mines in leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Destroy mined leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Abamectin 1.9% EC",
            "commercial_reference": "Vertimec",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jerusalem-artichoke",
    "common_name": "Jerusalem Artichoke / Sunchoke",
    "hindi_name": "सनचोक",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-20", "water_requirement_sensitivity": "Medium", "stage_advice": "Moisture for sprouting." },
      { "stage_name": "Vegetative Growth", "day_range": "20-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Tuber Initiation", "day_range": "80-120", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "120-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest after frost." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor tubers.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "arrowroot",
    "common_name": "Arrowroot",
    "hindi_name": "अरारोट",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-30", "water_requirement_sensitivity": "High", "stage_advice": "Moisture for sprouting." },
      { "stage_name": "Vegetative Growth", "day_range": "30-150", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Rhizome Bulking", "day_range": "150-250", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "250-300", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when leaves dry." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor rhizomes.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "लीफ रोलर",
        "symptoms": "Leaves rolled.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Hand picking.",
            "biological_spray": "Bt kurstaki @ 2ml/L",
            "mechanical": "Remove rolled leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jicama",
    "common_name": "Jicama",
    "hindi_name": "जीकामा",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative Growth", "day_range": "15-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Tuber Initiation", "day_range": "60-120", "water_requirement_sensitivity": "High", "stage_advice": "Remove flowers." },
      { "stage_name": "Harvesting", "day_range": "120-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor tubers.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "lotus-root",
    "common_name": "Lotus Root / Kamal Kakdi",
    "hindi_name": "कमल ककड़ी",
    "regional_names": {
      "punjabi": "ਭੇਂ",
      "marathi": "कमळ काकडी"
    },
    "category": "Vegetable",
    "season": ["Zaid", "Kharif"],
    "critical_stages": [
      { "stage_name": "Planting", "day_range": "0-30", "water_requirement_sensitivity": "High", "stage_advice": "Maintain water level." },
      { "stage_name": "Vegetative Growth", "day_range": "30-100", "water_requirement_sensitivity": "High", "stage_advice": "Maintain flooded condition." },
      { "stage_name": "Rhizome Bulking", "day_range": "100-150", "water_requirement_sensitivity": "High", "stage_advice": "Consistent water." },
      { "stage_name": "Harvesting", "day_range": "150-180", "water_requirement_sensitivity": "High", "stage_advice": "Drain water partially." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K @ 30:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea application" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor rhizomes.", "solution": "MOP application" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate application" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean water.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "maca",
    "common_name": "Maca",
    "hindi_name": "माका",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative Growth", "day_range": "15-100", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed control." },
      { "stage_name": "Root Bulking", "day_range": "100-200", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "200-240", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Row covers.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Early planting."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "salsify",
    "common_name": "Salsify",
    "hindi_name": "सैल्सिफाई",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-20", "water_requirement_sensitivity": "High", "stage_advice": "Keep moist." },
      { "stage_name": "Vegetative Growth", "day_range": "20-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Root Bulking", "day_range": "80-120", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "120-150", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K @ 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth.", "solution": "DAP basal" },
        { "nutrient": "Potassium", "symptoms": "Poor roots.", "solution": "MOP @ 10kg/acre" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate @ 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil @ 3ml/L",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  }
];
