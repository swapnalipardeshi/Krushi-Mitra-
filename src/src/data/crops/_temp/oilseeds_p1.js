export const data = [
  {
    "crop_id": "mustard",
    "common_name": "Mustard",
    "hindi_name": "सरसों/राई",
    "regional_names": {
      "marathi": "Mohari",
      "punjabi": "Sarson",
      "tamil": "Kadugu",
      "telugu": "Avalu"
    },
    "category": "Oilseed",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling Stage",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture for uniform germination. Protect from early pest damage like sawfly."
      },
      {
        "stage_name": "Vegetative Stage",
        "day_range": "15-35",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply first dose of nitrogen and sulfur. Critical for maximizing branching."
      },
      {
        "stage_name": "Pre-Flowering / Branching",
        "day_range": "35-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for aphid infestation. First irrigation should be applied at this stage (approx 35-40 DAS)."
      },
      {
        "stage_name": "Flowering Stage",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for irrigation. Avoid stress as it affects flower retention and pod setting."
      },
      {
        "stage_name": "Siliqua (Pod) Formation",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Second irrigation. Protect from diseases like Alternaria blight and White rust."
      },
      {
        "stage_name": "Seed Filling / Development",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain soil moisture for proper grain filling and oil content accumulation."
      },
      {
        "stage_name": "Maturity",
        "day_range": "110-130",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation. Harvest when 75% siliquae turn yellowish-brown to avoid shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM: 4-5 tons, Urea: 30 kg, SSP: 100 kg, MOP: 15 kg, Sulphur (Bentonite): 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves spreading upwards, stunted growth, thin stems, reduced branching.",
          "solution": "Apply Urea 15-20 kg/acre as top dressing, or foliar spray of Urea @ 2% (300g/15L pump)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish margins, delayed maturity, poor root and pod development.",
          "solution": "Foliar spray of NPK 19:19:19 or 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis and burning of older leaves, weak stems leading to lodging.",
          "solution": "Foliar spray of NPK 00:00:50 (Potassium Sulphate) @ 75g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves, cupping of leaves, reduced oil content, delayed flowering.",
          "solution": "Soil application of Bentonite Sulphur 90% @ 10 kg/acre or foliar spray of Sulphur 80% WDG @ 40g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis in young leaves, stunted growth, reduced internodal length.",
          "solution": "Foliar spray of Zinc Sulphate (21%) @ 30g + Urea 15g /15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, distorted young leaves, poor pod setting, barren siliquae.",
          "solution": "Foliar spray of Boron 20% @ 15-20g/15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, margins remain green.",
          "solution": "Foliar spray of Magnesium Sulphate @ 75g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Complete yellowing of newly emerging leaves with green veins.",
          "solution": "Foliar spray of Ferrous Sulphate @ 40g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mustard Aphid",
        "type": "Insect-Pest",
        "hindi_name": "चेपा / माहू",
        "symptoms": "Nymphs and adults suck sap from tender leaves, twigs, stems, inflorescence, and pods. Curled leaves, stunted growth, honey dew secretion leading to sooty mold.",
        "favorable_weather": "Cloudy weather with high humidity and temperature around 15-20°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, use of resistant varieties, install yellow sticky traps (10-15/acre).",
            "biological_spray": "Neem Oil (10000 ppm) @ 30 ml/15L pump. Conserve predators like Coccinellid beetles.",
            "mechanical": "Pluck and destroy early infested twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG OR Imidacloprid 17.8% SL OR Dimethoate 30% EC",
            "commercial_reference": "Actara, Confidor, Rogor",
            "dose_per_15L_pump": "Thiamethoxam: 5g OR Imidacloprid: 5ml",
            "dose_per_acre": "Thiamethoxam: 50g OR Imidacloprid: 50ml in 150L water",
            "waiting_period_phi": "14-21 Days",
            "application_instructions": "Spray immediately upon noticing aphid clusters on 10% twigs."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Small, dark brown to black circular spots with concentric rings on leaves, stems, and pods. Causes defoliation and poor seed filling.",
        "favorable_weather": "High humidity (>80%) and temperatures around 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use certified pathogen-free seeds, collect and burn crop debris.",
            "biological_spray": "Pseudomonas fluorescens @ 50 ml/15L pump.",
            "mechanical": "Remove severely infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP OR Tebuconazole 25.9% EC",
            "commercial_reference": "Dithane M-45, Folicur",
            "dose_per_15L_pump": "Mancozeb: 40g OR Tebuconazole: 15ml",
            "dose_per_acre": "Mancozeb: 400g OR Tebuconazole: 150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "First spray at 45-50 DAS and repeat after 10-15 days if needed."
          }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफ़ेद रतुआ / वाइट रस्ट",
        "symptoms": "White to creamy yellow raised pustules on the lower surface of leaves. Staghead formation in floral parts causing swelling and distortion of inflorescence.",
        "favorable_weather": "Cool, wet weather with heavy dew. Temp 10-15°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control, early sowing, maintain proper spacing.",
            "biological_spray": "Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Remove and destroy 'staghead' inflorescences."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold, Krilaxyl",
            "dose_per_15L_pump": "30-40 g",
            "dose_per_acre": "300-400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray upon initial symptom appearance, especially before flowering."
          }
        }
      },
      {
        "issue_name": "Sclerotinia Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना सड़न (स्क्लेरोटीनिया)",
        "symptoms": "Water-soaked lesions on stems covered with white cottony mycelium. Black sclerotia (rat-dropping like) form inside the stem. Plants wilt and die prematurely.",
        "favorable_weather": "High soil moisture, cool temperatures (15-20°C), dense canopy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Long crop rotation with non-hosts (wheat, barley), deep summer ploughing, avoid over-irrigation.",
            "biological_spray": "Soil application of Trichoderma harzianum @ 1 kg/acre enriched in FYM.",
            "mechanical": "Remove and burn infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP OR Tebuconazole 25.9% EC",
            "commercial_reference": "Bavistin, Folicur",
            "dose_per_15L_pump": "Carbendazim: 20g OR Tebuconazole: 15ml",
            "dose_per_acre": "Carbendazim: 200g OR Tebuconazole: 150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Direct spray towards the basal portion of the stem at 45-50 DAS."
          }
        }
      },
      {
        "issue_name": "Mustard Sawfly",
        "type": "Insect-Pest",
        "hindi_name": "आरा मक्खी",
        "symptoms": "Blackish, caterpillar-like grubs feed on leaves, making holes. In severe cases, they completely defoliate the seedling, leaving only veins.",
        "favorable_weather": "Warm days and cool nights during early crop stage (Oct-Nov).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Summer ploughing to expose pupae, weed control, maintain optimum plant population.",
            "biological_spray": "Neem Seed Kernel Extract (NSKE) 5% @ 50ml/15L pump.",
            "mechanical": "Handpick and destroy grubs in early morning or evening."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC OR Chlorpyrifos 20% EC",
            "commercial_reference": "Ekalux, Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray preferably in the evening when grubs are active on leaves."
          }
        }
      },
      {
        "issue_name": "Painted Bug",
        "type": "Insect-Pest",
        "hindi_name": "रंगीन कीड़ा",
        "symptoms": "Nymphs and adults suck sap from leaves and pods. Heavily infested plants dry up. Resinous fluid secreted by bugs ruins pod quality.",
        "favorable_weather": "Dry and warm weather conditions at sowing and harvest.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation, early sowing, irrigate to reduce bug population.",
            "biological_spray": "Beauveria bassiana @ 50g/15L pump.",
            "mechanical": "Shake plants over water/kerosene pans."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL OR Malathion 50% EC",
            "commercial_reference": "Confidor, Cythion",
            "dose_per_15L_pump": "Imidacloprid: 5ml OR Malathion: 30ml",
            "dose_per_acre": "Imidacloprid: 50ml OR Malathion: 300ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray when bugs are seen clustering on stems or pods."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rapeseed-canola",
    "common_name": "Rapeseed / Canola",
    "hindi_name": "तोरिया / कैनोला",
    "regional_names": {
      "punjabi": "Toria",
      "marathi": "Toriya"
    },
    "category": "Oilseed",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination & Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture for uniform stand establishment."
      },
      {
        "stage_name": "Rosette / Vegetative",
        "day_range": "15-35",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for leaf development. Apply first top-dress nitrogen."
      },
      {
        "stage_name": "Stem Elongation / Bolting",
        "day_range": "35-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth phase. Ensure adequate soil moisture and monitor for aphids."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Most critical stage for moisture stress. Avoid spraying insecticides during peak bloom to protect pollinators."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for Alternaria and Diamondback moth."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at physiological maturity to prevent pod shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "Urea: 30 kg, SSP: 100 kg, MOP: 15 kg, Sulphur: 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves, reduced pod number.",
          "solution": "Top dress Urea 15 kg/acre or spray 2% Urea solution."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Cupping of leaves, yellowing of younger leaves, poor seed setting, reduced oil yield.",
          "solution": "Apply Bentonite Sulphur 10 kg/acre to soil or spray Sulphur 80% WDG 40g/15L pump."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tints on edges, stunted root growth.",
          "solution": "Foliar spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf margins, weak stems leading to lodging.",
          "solution": "Foliar spray NPK 00:00:50 @ 75g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Hollow stems, aborted flowers, poor pod fill.",
          "solution": "Spray Boron 20% @ 20g/15L pump at early flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted growth.",
          "solution": "Spray Chelated Zinc (12%) @ 15g/15L pump."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Mottled interveinal chlorosis on middle leaves.",
          "solution": "Spray Manganese Sulphate @ 30g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cabbage Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Clusters of greenish-grey aphids on stems, leaves, and flowers sucking sap. Causes stunting, curling, and reduced yields.",
        "favorable_weather": "Cool, dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, use yellow sticky traps.",
            "biological_spray": "Neem Oil @ 30-50 ml/15L pump.",
            "mechanical": "Remove heavily infested twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5-6 g",
            "dose_per_acre": "50-60 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray when ETL is reached, avoid spraying during full bloom to save bees."
          }
        }
      },
      {
        "issue_name": "Diamondback Moth",
        "type": "Insect-Pest",
        "hindi_name": "हीरक-पृष्ठ शलभ (DBM)",
        "symptoms": "Small pale green caterpillars feed on leaves leaving only the epidermis (window-pane effect). Can defoliate young plants.",
        "favorable_weather": "Warm and dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps (4-5/acre).",
            "biological_spray": "Bacillus thuringiensis (Bt) @ 30g/15L pump.",
            "mechanical": "Hand collection in early stages."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC OR Emamectin Benzoate 5% SG",
            "commercial_reference": "Tracer, Proclaim",
            "dose_per_15L_pump": "Spinosad: 5ml OR Emamectin: 7g",
            "dose_per_acre": "Spinosad: 50ml OR Emamectin: 70g in 150L water",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray directed at foliage upon spotting larvae."
          }
        }
      },
      {
        "issue_name": "Alternaria Black Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया धब्बा",
        "symptoms": "Dark spots on leaves and pods. Pod spots lead to premature ripening, shattering, and shrivelled seeds.",
        "favorable_weather": "Humid, wet, and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, clean seeds.",
            "biological_spray": "Trichoderma viride @ 50g/15L pump.",
            "mechanical": "None practical."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Apply protectively at early pod formation if conditions are favorable."
          }
        }
      },
      {
        "issue_name": "Clubroot",
        "type": "Fungal",
        "hindi_name": "क्लब रूट (जड़ की गाँठ)",
        "symptoms": "Roots swell and form galls (clubs). Plants wilt during the day, stunt, and may die.",
        "favorable_weather": "Acidic soils, high moisture, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Long crop rotation (4+ years), weed control (cruciferous weeds), sanitize equipment.",
            "biological_spray": "None highly effective.",
            "mechanical": "Liming soil to raise pH above 7.2."
          },
          "chemical_curative": {
            "active_ingredient": "Flusulfamide (if available/registered locally, otherwise preventive only)",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "No curative chemical once galls form. Management is strictly preventive."
          }
        }
      }
    ]
  },
  {
    "crop_id": "groundnut",
    "common_name": "Groundnut / Peanut",
    "hindi_name": "मूंगफली",
    "regional_names": {
      "marathi": "Bhuimug",
      "gujarati": "Magfali",
      "tamil": "Kadalai",
      "telugu": "Verusenaga"
    },
    "category": "Oilseed",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing to Emergence",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure sufficient moisture for germination. Avoid waterlogging which causes seed rot."
      },
      {
        "stage_name": "Vegetative Stage",
        "day_range": "10-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Intercultivation for weed control. Mild moisture stress is acceptable to encourage deep root growth."
      },
      {
        "stage_name": "Flowering Stage",
        "day_range": "30-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for moisture. Moisture stress limits flower production. Apply gypsum at early flowering."
      },
      {
        "stage_name": "Pegging Stage",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Do not disturb soil; pegs are penetrating. Moisture is crucial for successful peg entry into soil."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Crucial for pod filling. Protect from Tikka disease and Spodoptera."
      },
      {
        "stage_name": "Seed Filling",
        "day_range": "90-105",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintains grain weight and oil content. Protect from late leaf spot and rust."
      },
      {
        "stage_name": "Maturity & Harvesting",
        "day_range": "105-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaves turn yellow. Inner shell turns dark. Give light irrigation before pulling if soil is hard."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "FYM: 5 tons, DAP: 50 kg, MOP: 20 kg, Gypsum: 200 kg (applied at flowering)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of entire plant starting from older leaves, stunted growth.",
          "solution": "Apply Urea 10-15 kg/acre or spray 2% Urea solution."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Empty pods (pops), black heart in seeds, poorly developed pods.",
          "solution": "Apply Gypsum @ 200 kg/acre as soil application near the plant base at 30-45 DAS."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of younger leaves, delayed maturity, reduced oil content.",
          "solution": "Gypsum application covers Sulphur need. Alternatively, Bentonite Sulphur 10 kg/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis of young leaves (yellow leaves with green veins), turning fully white in severe cases.",
          "solution": "Foliar spray of Ferrous Sulphate (19%) @ 50g + Citric acid 5g /15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted growth, bronzing and chlorosis of young leaves, small leaf size.",
          "solution": "Foliar spray of Zinc Sulphate (21%) @ 30g/15L pump or soil application of Zinc Sulphate 10 kg/acre."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Hollow heart (internal browning of the seed), poor peg and pod formation.",
          "solution": "Foliar spray of Boron 20% @ 20g/15L pump at flowering stage."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark bluish-green leaves, delayed flowering and poor root development.",
          "solution": "Foliar spray of NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing and scorching of leaf margins, reduced resistance to diseases.",
          "solution": "Foliar spray of NPK 00:00:50 @ 75g/15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves spreading to edges.",
          "solution": "Spray Magnesium Sulphate @ 50g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Tikka Disease (Early & Late Leaf Spot)",
        "type": "Fungal",
        "hindi_name": "टिक्का रोग / पत्ती धब्बा",
        "symptoms": "Early: Irregular brown spots with yellow halo. Late: Circular black spots on lower leaves, causing severe defoliation.",
        "favorable_weather": "Prolonged high humidity, heavy dew, temperature 25-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, remove volunteer plants, early planting.",
            "biological_spray": "Pseudomonas fluorescens @ 50ml/15L pump.",
            "mechanical": "Burn infected crop residues."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 50% + Trifloxystrobin 25% WG OR Chlorothalonil 75% WP",
            "commercial_reference": "Nativo, Kavach",
            "dose_per_15L_pump": "Nativo: 10g OR Kavach: 30g",
            "dose_per_acre": "Nativo: 100g OR Kavach: 300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at 45-50 DAS and repeat at 15-day intervals if required."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ / रस्ट",
        "symptoms": "Orange to brown pustules mainly on the lower surface of leaves. Heavily infected leaves turn brown and dry up but remain attached.",
        "favorable_weather": "Cloudy weather, intermittent rains, high humidity, 20-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use tolerant varieties, destroy volunteer peanut plants.",
            "biological_spray": "Trichoderma viride spray @ 50g/15L pump.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC OR Propiconazole 25% EC",
            "commercial_reference": "Contaf, Tilt",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray as soon as rust pustules are noticed."
          }
        }
      },
      {
        "issue_name": "Collar Rot / Crown Rot",
        "type": "Fungal",
        "hindi_name": "कॉलर रोट / जड़ सड़न",
        "symptoms": "Seedlings wilt suddenly. The hypocotyl (collar region) shows dark brown lesions covered with black powdery fungal spores (Aspergillus niger).",
        "favorable_weather": "High soil temperature (30-35°C) and low soil moisture during emergence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good quality unbroken seeds, proper sowing depth, adequate moisture at sowing.",
            "biological_spray": "Seed treatment with Trichoderma viride @ 10g/kg seed.",
            "mechanical": "Remove and destroy affected seedlings."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 2 DS (Seed Treatment) OR Carbendazim 50% WP (Drenching)",
            "commercial_reference": "Raxil, Bavistin",
            "dose_per_15L_pump": "Carbendazim: 30g",
            "dose_per_acre": "Seed Trt: 1.5g/kg seed. Drenching: 300g/acre",
            "waiting_period_phi": "N/A",
            "application_instructions": "Curative drenching around collar region of surviving plants to stop spread."
          }
        }
      },
      {
        "issue_name": "Stem Rot / White Mold",
        "type": "Fungal",
        "hindi_name": "तना सड़न",
        "symptoms": "Yellowing and wilting of branches. White fungal growth (mycelium) and mustard-seed-like sclerotia near the soil line on stems and pegs.",
        "favorable_weather": "Warm, wet weather, dense canopy, touching soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing, avoid throwing soil onto plants during cultivation.",
            "biological_spray": "Soil application of Trichoderma harzianum @ 1kg/acre with FYM.",
            "mechanical": "Remove infected plant parts."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC OR Tebuconazole 25.9% EC",
            "commercial_reference": "Contaf, Folicur",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Direct spray targeting the crown/stem base region."
          }
        }
      },
      {
        "issue_name": "Tobacco Caterpillar (Spodoptera)",
        "type": "Insect-Pest",
        "hindi_name": "स्पोडोप्टेरा सुंडी",
        "symptoms": "Early instars scrape leaves (papery white appearance). Later instars defoliate plants entirely, feeding voraciously at night.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Install pheromone traps (4-5/acre), sow castor as trap crop.",
            "biological_spray": "SlNPV @ 250 LE/acre or Neem Oil 10000 ppm @ 30ml/15L pump.",
            "mechanical": "Handpick and destroy egg masses and gregarious early-stage larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG OR Novaluron 10% EC",
            "commercial_reference": "Proclaim, Rimon",
            "dose_per_15L_pump": "Emamectin: 7g OR Novaluron: 15ml",
            "dose_per_acre": "Emamectin: 70g OR Novaluron: 150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray in late afternoon/evening for best efficacy against night-feeding larvae."
          }
        }
      },
      {
        "issue_name": "White Grub",
        "type": "Insect-Pest",
        "hindi_name": "सफ़ेद लट / गोजालट",
        "symptoms": "Grubs feed on main roots, causing wilting and death of plants in patches. Dead plants can be easily pulled out.",
        "favorable_weather": "Onset of monsoon triggers adult beetle emergence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, apply well-rotted FYM only, use light traps for adult beetles.",
            "biological_spray": "Metarhizium anisopliae or Beauveria bassiana soil application @ 1 kg/acre.",
            "mechanical": "Collect and destroy adult beetles on host trees (neem, babool) at night."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 40% + Fipronil 40% WG (Soil application) OR Chlorpyrifos 20% EC",
            "commercial_reference": "Police, Dursban",
            "dose_per_15L_pump": "Chlorpyrifos: 50ml (for drenching)",
            "dose_per_acre": "Imida+Fipro: 150-200g. Chlorpyrifos: 1 Liter via irrigation.",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drenching near root zone or mixing granular insecticides in soil at sowing/first irrigation."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sunflower",
    "common_name": "Sunflower",
    "hindi_name": "सूरजमुखी",
    "regional_names": {
      "marathi": "Suryaphul",
      "tamil": "Suriyagandhi",
      "telugu": "Poddutirugudu"
    },
    "category": "Oilseed",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling (V1-V4)",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure uniform emergence. Protect from early soil-borne pests."
      },
      {
        "stage_name": "Vegetative (V5-V10)",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Deep root development occurs here. First side-dressing of Nitrogen."
      },
      {
        "stage_name": "Bud Initiation (Star Stage R1)",
        "day_range": "40-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Terminal bud forms a miniature floral head. Critical stage for moisture and boron application."
      },
      {
        "stage_name": "Flowering (R4-R5)",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Most sensitive to water stress. Do not spray insecticides in the morning to protect bees."
      },
      {
        "stage_name": "Seed Development (R6-R7)",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ray flowers drop, back of head starts turning yellow. Protect from head borer and birds."
      },
      {
        "stage_name": "Physiological Maturity (R8-R9)",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Bracts become yellow and brown. Harvest when back of the head is lemon yellow."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM: 4 tons, Urea: 25 kg, DAP: 50 kg, MOP: 20 kg",
      "deficiencies": [
        {
          "nutrient": "Boron",
          "symptoms": "Chaffy/empty seeds in the center of the capitulum (head), head deformation, stem cracking.",
          "solution": "Foliar spray of Boron 20% @ 20g/15L pump at star bud stage."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing, reduced leaf area, small heads.",
          "solution": "Top dressing Urea 25 kg/acre at 30 DAS."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green leaves, delayed flowering.",
          "solution": "Foliar spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaf margins turning necrotic, weaker stems.",
          "solution": "Foliar spray NPK 00:00:50 @ 75g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves, reduced oil content.",
          "solution": "Bentonite Sulphur 10 kg/acre or Sulphur 80% WDG @ 40g/15L spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted growth, short internodes, interveinal chlorosis.",
          "solution": "Foliar spray Zinc Sulphate 21% @ 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Foliar spray Ferrous Sulphate @ 40g/15L pump."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Distorted new leaves, poor head development.",
          "solution": "Spray Calcium Nitrate @ 50g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Alternaria Leaf Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती झुलसा",
        "symptoms": "Dark brown, circular to irregular spots with concentric rings on leaves. Spots merge causing leaf drying and defoliation.",
        "favorable_weather": "High humidity, frequent rains, temperature 25-27°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, disease-free seed, wider spacing.",
            "biological_spray": "Pseudomonas fluorescens @ 50ml/15L pump.",
            "mechanical": "Remove infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP OR Propiconazole 25% EC",
            "commercial_reference": "Dithane M-45, Tilt",
            "dose_per_15L_pump": "Mancozeb: 40g OR Propiconazole: 15ml",
            "dose_per_acre": "Mancozeb: 400g OR Propiconazole: 150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at 45 DAS and repeat after 15 days if necessary."
          }
        }
      },
      {
        "issue_name": "Head Borer (Helicoverpa armigera)",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक (हेलिकोवर्पा)",
        "symptoms": "Larvae feed on developing seeds in the capitulum, causing empty heads and facilitating secondary fungal rot.",
        "favorable_weather": "Moderate temperature, cloudy weather during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps (5/acre), bird perches (10/acre).",
            "biological_spray": "HaNPV @ 250 LE/acre or Bt @ 30g/15L pump.",
            "mechanical": "Hand collection of larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG OR Spinosad 45% SC",
            "commercial_reference": "Proclaim, Tracer",
            "dose_per_15L_pump": "Emamectin: 7g OR Spinosad: 5ml",
            "dose_per_acre": "Emamectin: 70g OR Spinosad: 50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray in the evening when larvae are active. Avoid spraying during morning hours to save bees."
          }
        }
      },
      {
        "issue_name": "Sclerotinia Wilt / Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना सड़न",
        "symptoms": "Water-soaked brown lesions at the base of the stem. White cottony mycelium and black sclerotia form in/on the stem. Plant wilts suddenly.",
        "favorable_weather": "Cool, wet soil, dense canopy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with cereals, avoid over-irrigation.",
            "biological_spray": "Soil application of Trichoderma viride.",
            "mechanical": "Uproot and destroy wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP OR Tebuconazole 25.9% EC",
            "commercial_reference": "Bavistin, Folicur",
            "dose_per_15L_pump": "Carbendazim: 20g OR Tebuconazole: 15ml",
            "dose_per_acre": "Carbendazim: 200g OR Tebuconazole: 150ml for soil drench",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drenching the soil around the collar region of affected and adjacent plants."
          }
        }
      }
    ]
  },
  {
    "crop_id": "safflower",
    "common_name": "Safflower / Kardi",
    "hindi_name": "कुसुम / करडई",
    "regional_names": {
      "marathi": "Kardai",
      "telugu": "Kusumalu"
    },
    "category": "Oilseed",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Drought tolerant, but early moisture ensures good establishment."
      },
      {
        "stage_name": "Rosette Stage",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Slow upright growth. Deep root system develops. Very tolerant to frost and cold."
      },
      {
        "stage_name": "Stem Elongation / Branching",
        "day_range": "40-65",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth. Monitor for aphids. Moisture stress here reduces branching."
      },
      {
        "stage_name": "Bud Stage to Flowering",
        "day_range": "65-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Water stress leads to empty heads."
      },
      {
        "stage_name": "Seed Development",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain protection from Alternaria blight."
      },
      {
        "stage_name": "Maturity",
        "day_range": "110-130",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaves and bracts turn brown. Stems become dry and stiff."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "Urea: 25 kg, SSP: 100 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted plants, fewer capitula.",
          "solution": "Apply Urea 15 kg/acre as top dressing before irrigation."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green foliage with delayed maturity, poor root system.",
          "solution": "Foliar spray of NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted growth, pale young leaves.",
          "solution": "Spray Zinc Sulphate @ 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in newly emerged leaves.",
          "solution": "Spray Ferrous Sulphate @ 40g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Light green young leaves, reduced oil yield.",
          "solution": "Use SSP as basal or spray Sulphur 80% WDG 40g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed setting, empty seeds in the capitulum.",
          "solution": "Foliar spray Boron 20% @ 20g/15L pump at bud initiation."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Safflower Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Blackish aphids cluster on terminal shoots, stems, and leaves. Suck sap causing severe stunting, yellowing, and honeydew mold.",
        "favorable_weather": "Cloudy, cool weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing (Oct), balanced nitrogen, border cropping with sorghum.",
            "biological_spray": "Neem seed extract 5% or Neem Oil @ 30ml/15L pump.",
            "mechanical": "Pluck and destroy early infested apical shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC OR Thiamethoxam 25% WG",
            "commercial_reference": "Rogor, Actara",
            "dose_per_15L_pump": "Dimethoate: 30ml OR Thiamethoxam: 5g",
            "dose_per_acre": "Dimethoate: 300ml OR Thiamethoxam: 50g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray promptly when aphid infestation begins on upper shoots."
          }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया धब्बा",
        "symptoms": "Irregular dark brown spots with concentric rings on leaves and bracts. Severe infection blights the leaves and flowers.",
        "favorable_weather": "High humidity, winter rains, temperatures around 20-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Disease-free seed, wider row spacing, remove crop debris.",
            "biological_spray": "Pseudomonas fluorescens @ 50ml/15L pump.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP OR Propiconazole 25% EC",
            "commercial_reference": "Dithane M-45, Tilt",
            "dose_per_15L_pump": "Mancozeb: 40g OR Propiconazole: 15ml",
            "dose_per_acre": "Mancozeb: 400g OR Propiconazole: 150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Apply at disease onset, repeat after 12-15 days."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sesame",
    "common_name": "Sesame / Til",
    "hindi_name": "तिल",
    "regional_names": {
      "marathi": "Tiil",
      "tamil": "Ellu",
      "telugu": "Nuvvulu"
    },
    "category": "Oilseed",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Extremely sensitive to waterlogging. Needs good drainage."
      },
      {
        "stage_name": "Vegetative / Branching",
        "day_range": "15-35",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Thinning is crucial. Top dress with nitrogen."
      },
      {
        "stage_name": "Flower Initiation",
        "day_range": "35-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for Leaf webber and Phyllody disease."
      },
      {
        "stage_name": "Capsule Formation",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress here heavily impacts seed filling."
      },
      {
        "stage_name": "Seed Maturation",
        "day_range": "70-85",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Lower leaves start dropping. Capsules turn yellowish."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "85-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest before capsules split open to avoid shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "Urea: 20 kg, SSP: 50 kg, MOP: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow plants, stunted growth, poor branching.",
          "solution": "Top dress Urea 10 kg/acre at branching stage."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Small, dark green leaves, delayed flowering, poor capsule set.",
          "solution": "Foliar spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaf margins, reduced drought tolerance.",
          "solution": "Foliar spray NPK 00:00:50 @ 75g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves, low oil content.",
          "solution": "Apply Bentonite sulphur 10kg/acre or spray Sulphur 80% WDG @ 40g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Chlorotic spots on leaves, shortened internodes.",
          "solution": "Spray Zinc Sulphate @ 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on youngest leaves.",
          "solution": "Spray Ferrous Sulphate @ 40g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed leaves, empty capsules.",
          "solution": "Spray Boron 20% @ 20g/15L pump at pre-flowering."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Webber / Capsule Borer",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती लपेटक एवं फली छेदक",
        "symptoms": "Caterpillars web top leaves and feed inside. Later bore into pods/capsules destroying seeds.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, intercropping with mung bean or pearl millet.",
            "biological_spray": "Neem Oil @ 30ml/15L pump or Bt @ 30g/15L pump.",
            "mechanical": "Handpick and destroy webbed leaves with larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC OR Profenofos 50% EC",
            "commercial_reference": "Ekalux, Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray thoroughly when webbing is noticed, targeting the upper canopy."
          }
        }
      },
      {
        "issue_name": "Phyllody",
        "type": "Viral",
        "hindi_name": "फिलोडी (गुच्छा रोग)",
        "symptoms": "Floral parts transform into green leaf-like structures. Profuse branching (witches' broom), no capsule formation. Transmitted by Leafhoppers.",
        "favorable_weather": "Dry conditions favoring leafhopper proliferation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, clean cultivation, early planting.",
            "biological_spray": "None for virus. Manage vector.",
            "mechanical": "Rogue out and destroy infected plants immediately."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector Control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray to control leafhopper vector; virus cannot be cured chemically."
          }
        }
      },
      {
        "issue_name": "Sesame Gall Fly",
        "type": "Insect-Pest",
        "hindi_name": "गॉल फ्लाई",
        "symptoms": "Maggots feed inside the floral buds, causing them to swell into galls. Flowers drop without setting capsules.",
        "favorable_weather": "Humid and warm weather during budding.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, proper crop spacing.",
            "biological_spray": "Neem seed extract 5%.",
            "mechanical": "Pluck and destroy galled buds."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at bud initiation stage if incidence is noted."
          }
        }
      }
    ]
  },
  {
    "crop_id": "linseed",
    "common_name": "Linseed / Flaxseed",
    "hindi_name": "अलसी",
    "regional_names": {
      "marathi": "Javas",
      "telugu": "Aviselu"
    },
    "category": "Oilseed",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Protect from wilt disease."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-45",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Apply nitrogen top-dressing."
      },
      {
        "stage_name": "Bud Stage",
        "day_range": "45-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for Bud fly."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for irrigation. Blue flowers emerge."
      },
      {
        "stage_name": "Boll (Capsule) Formation",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture needed for good seed size and oil content."
      },
      {
        "stage_name": "Maturity",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Bolls turn brown and seeds rattle inside."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Urea: 20 kg, SSP: 50 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted, pale green plants.",
          "solution": "Apply Urea 10 kg/acre at 30-35 DAS."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green/bluish leaves, poor root growth.",
          "solution": "Foliar spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Greyish-brown necrotic spots on middle leaves.",
          "solution": "Spray Zinc Sulphate @ 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on young leaves.",
          "solution": "Spray Ferrous Sulphate @ 40g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Tip burning on older leaves.",
          "solution": "Spray NPK 00:00:50 @ 75g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Dying growing points, poor boll set.",
          "solution": "Spray Boron 20% @ 20g/15L at bud stage."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Linseed Bud Fly",
        "type": "Insect-Pest",
        "hindi_name": "कली की मक्खी / बड फ्लाई",
        "symptoms": "Maggots feed inside the buds. Buds do not open, turn pale, and drop off. Heaviest damage in late-sown crops.",
        "favorable_weather": "Cool, humid weather during budding.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, use resistant/tolerant varieties.",
            "biological_spray": "Neem Oil 30ml/15L pump.",
            "mechanical": "Light traps for adults."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL OR Dimethoate 30% EC",
            "commercial_reference": "Confidor, Rogor",
            "dose_per_15L_pump": "Imidacloprid: 5ml OR Dimethoate: 30ml",
            "dose_per_acre": "Imidacloprid: 50ml OR Dimethoate: 300ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at bud initiation stage to prevent egg laying."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ / गेरुआ",
        "symptoms": "Bright orange pustules on leaves, stems, and capsules. Later turns black. Severe defoliation and shrivelled seeds.",
        "favorable_weather": "High humidity, temperatures 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, destroy debris.",
            "biological_spray": "Pseudomonas fluorescens @ 50ml/15L.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP OR Hexaconazole 5% EC",
            "commercial_reference": "Dithane M-45, Contaf",
            "dose_per_15L_pump": "Mancozeb: 40g OR Hexaconazole: 30ml",
            "dose_per_acre": "Mancozeb: 400g OR Hexaconazole: 300ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray immediately upon seeing pustules."
          }
        }
      }
    ]
  },
  {
    "crop_id": "castor",
    "common_name": "Castor Seed",
    "hindi_name": "अरण्डी / अंडी",
    "regional_names": {
      "marathi": "Erandi",
      "gujarati": "Divela",
      "telugu": "Aamudamu"
    },
    "category": "Oilseed",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure weed-free environment. Sensitive to waterlogging."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-50",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Deep root development. Apply nitrogen side dressing."
      },
      {
        "stage_name": "Primary Spike Initiation",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for moisture and nutrients to determine spike size."
      },
      {
        "stage_name": "Flowering (Primary Spike)",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires adequate moisture. Monitor for Semilooper."
      },
      {
        "stage_name": "Capsule Development",
        "day_range": "90-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Capsule borer monitoring is critical here."
      },
      {
        "stage_name": "Maturity",
        "day_range": "120-150+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest spikes when capsules turn brown. Usually harvested in 2-3 pickings."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-8.0",
      "basal_dose_per_acre": "Urea: 30 kg, DAP: 50 kg, MOP: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing starting from large older leaves.",
          "solution": "Apply Urea 15-20 kg/acre as top dress at 40 and 70 DAS."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark bluish-green leaves, delayed flowering.",
          "solution": "Spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis on older leaves, poor capsule filling.",
          "solution": "Spray NPK 00:00:50 @ 75g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves (rosetting).",
          "solution": "Spray Zinc Sulphate 21% @ 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on young leaves.",
          "solution": "Spray Ferrous Sulphate @ 40g/15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, margins green.",
          "solution": "Spray Magnesium Sulphate @ 50g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves, low oil content.",
          "solution": "Bentonite Sulphur 10kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Castor Semilooper",
        "type": "Insect-Pest",
        "hindi_name": "सेमीलूपर (घोड़ा इल्ली)",
        "symptoms": "Caterpillars defoliate plants rapidly, leaving only veins. They loop while walking.",
        "favorable_weather": "Dry spells followed by rainfall.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Bird perches, collect and destroy gregarious early instars.",
            "biological_spray": "Bacillus thuringiensis (Bt) @ 30g/15L pump.",
            "mechanical": "Hand collection."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC OR Quinalphos 25% EC",
            "commercial_reference": "Curacron, Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray covering entire foliage upon noticing loopers."
          }
        }
      },
      {
        "issue_name": "Capsule Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Larvae bore into capsules and eat seeds. Webbing of capsules and frass (excreta) visible.",
        "favorable_weather": "Flowering and capsule development stages under humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties with non-spiny/loose spikes.",
            "biological_spray": "Neem Oil @ 30ml/15L pump.",
            "mechanical": "Remove webbed capsules."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC OR Emamectin Benzoate 5% SG",
            "commercial_reference": "Tracer, Proclaim",
            "dose_per_15L_pump": "Spinosad: 5ml OR Emamectin: 7g",
            "dose_per_acre": "Spinosad: 50ml OR Emamectin: 70g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Direct spray on spikes during evening."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "उखटा / विल्ट",
        "symptoms": "Yellowing and wilting of leaves from bottom upwards. Discoloration (blackening) of vascular tissues inside the stem.",
        "favorable_weather": "High soil moisture, continuous mono-cropping.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Long crop rotation, resistant varieties.",
            "biological_spray": "Trichoderma viride soil application @ 1kg/acre.",
            "mechanical": "Uproot and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g (for drenching)",
            "dose_per_acre": "300 g in 150L water (drenching)",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around the root zone of affected plants to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "niger-seed",
    "common_name": "Niger Seed / Ramtil",
    "hindi_name": "रामतिल / कालातिल",
    "regional_names": {
      "marathi": "Karale / Khursani",
      "telugu": "Valesulu"
    },
    "category": "Oilseed",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires good drainage. Weed control is essential."
      },
      {
        "stage_name": "Branching Stage",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant phase. Top dressing of light N if poor soils."
      },
      {
        "stage_name": "Bud Initiation",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for moisture. Monitor for hairy caterpillars."
      },
      {
        "stage_name": "Flowering & Seed Setting",
        "day_range": "55-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Cross-pollinated crop, protect honeybees (do not spray insecticides). Moisture stress affects seed fill."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when capitula turn brownish-black and seeds are hard."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.2-7.3",
      "basal_dose_per_acre": "Urea: 10 kg, SSP: 40 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale plants, reduced branching.",
          "solution": "Apply Urea 10 kg/acre at 30 DAS."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, purple tinge on leaves.",
          "solution": "Spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Tip burning.",
          "solution": "Spray NPK 00:00:50 @ 75g/15L."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellow young leaves.",
          "solution": "Spray Sulphur 80% WDG @ 40g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small, chlorotic leaves.",
          "solution": "Spray Zinc Sulphate 21% @ 30g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Niger Caterpillar / Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालदार सूंडी",
        "symptoms": "Caterpillars feed gregariously on leaves, causing defoliation.",
        "favorable_weather": "Dry spells in Kharif season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem Seed Kernel Extract 5%.",
            "mechanical": "Handpick and destroy gregarious young larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray targeting the foliage when young larvae are noticed."
          }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सर्कोस्पोरा पत्ती धब्बा",
        "symptoms": "Small brown spots on leaves, coalescing to cause blight.",
        "favorable_weather": "High humidity and warm temps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Disease-free seeds, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens @ 50ml/15L.",
            "mechanical": "Remove infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if severity increases during flowering."
          }
        }
      }
    ]
  },
  {
    "crop_id": "perilla",
    "common_name": "Perilla",
    "hindi_name": "पेरिल्ला",
    "regional_names": {
      "northeast_india": "Bhanjira"
    },
    "category": "Oilseed",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain weed-free. Needs moist but well-drained soil."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth of aromatic foliage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Short-day plant; begins flowering as days shorten."
      },
      {
        "stage_name": "Seed Maturation",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when seeds turn dark and hard."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM: 2 tons, NPK: Moderate amounts as per soil test.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, poor growth.",
          "solution": "Apply Urea 10 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Spray NPK 12:61:00 @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal leaf scorch.",
          "solution": "Spray NPK 00:00:50 @ 75g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing between veins of young leaves.",
          "solution": "Spray Ferrous Sulphate @ 40g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes in leaves (shot-hole appearance).",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Neem Oil @ 30ml/15L pump.",
            "mechanical": "Sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if damage to foliage is severe."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules on leaf underside.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good air circulation.",
            "biological_spray": "Trichoderma spray.",
            "mechanical": "Remove affected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray as needed."
          }
        }
      }
    ]
  },
  {
    "crop_id": "hemp-seed",
    "common_name": "Hemp Seed (Industrial)",
    "hindi_name": "भांग बीज",
    "regional_names": {
      "hindi": "Bhang"
    },
    "category": "Oilseed",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Needs warm soil and moisture. Do not overwater."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "10-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid biomass accumulation. Deep roots form."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Male plants shed pollen, female plants develop flowers."
      },
      {
        "stage_name": "Seed Set",
        "day_range": "90-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture needed for seed fill."
      },
      {
        "stage_name": "Maturity",
        "day_range": "110-130",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when seeds are hard and bracts dry."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Nitrogen demanding. Urea: 30-40 kg, DAP: 40 kg, MOP: 20 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of lower leaves, stunted growth.",
          "solution": "Top dress Urea 15 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green/purple leaves, slow growth.",
          "solution": "Spray NPK 12:61:00 @ 75g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Burnt leaf edges, weak stems.",
          "solution": "Spray NPK 00:00:50 @ 75g/15L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal yellowing on older leaves.",
          "solution": "Spray Magnesium Sulphate @ 50g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curled new leaves.",
          "solution": "Apply Gypsum or Calcium Nitrate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hemp Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Larvae bore into stems causing swelling/galls and weak stems that break easily.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, destroy post-harvest stubble.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Remove infested stalks."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray early in the season before larvae bore into stems."
          }
        }
      },
      {
        "issue_name": "Grey Mold (Botrytis)",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड / सड़न",
        "symptoms": "Brown, water-soaked spots on buds/flowers covered with grey fuzzy spores. Destroys seed heads.",
        "favorable_weather": "High humidity, rain during late flowering/maturity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing for airflow, avoid overhead irrigation.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Prune severely affected sections."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "20 g",
            "dose_per_acre": "200 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray preventively if wet weather is forecasted during flowering."
          }
        }
      }
    ]
  }
];
