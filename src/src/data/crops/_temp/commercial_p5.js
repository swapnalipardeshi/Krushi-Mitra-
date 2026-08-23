export const data = [
  {
    "crop_id": "berseem",
    "common_name": "Berseem / Egyptian Clover",
    "hindi_name": "बरसीम",
    "regional_names": {
      "punjabi": "ਬਾਠ",
      "marathi": "बरसीम",
      "telugu": "బర్సీం",
      "gujarati": "બરસીમ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure sufficient moisture for proper emergence."
      },
      {
        "stage_name": "First Cut",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply light irrigation after first cutting to stimulate regrowth."
      },
      {
        "stage_name": "Subsequent Cuts",
        "day_range": "Every 30-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture for continuous vegetative growth."
      },
      {
        "stage_name": "Seed Setting",
        "day_range": "150-180 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Reduce irrigation to allow seed maturation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "8 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green leaves with purplish margins.",
          "solution": "Apply 10 kg P2O5 per acre or spray NPK 19:19:19 at 75g/15L pump."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, poor regrowth after cutting.",
          "solution": "Apply Urea 10 kg/acre after cutting."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes, chlorotic patches.",
          "solution": "Spray Zinc Sulphate at 30g/15L pump."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Poor nodulation, pale leaves similar to N deficiency.",
          "solution": "Seed treatment with Sodium Molybdate 1g/kg seed."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing of new leaves, spindly growth.",
          "solution": "Apply Bentonite Sulfur 10 kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "White mycelial growth on stems near soil line, rotting of stems.",
        "favorable_weather": "High humidity, continuous wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid waterlogging, maintain proper drainage.",
            "biological_spray": "Trichoderma viride at 100g/15L pump.",
            "mechanical": "Remove infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf, Sprint",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray focusing on the basal region of the plants."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting of plants, roots turn brown and soft.",
        "favorable_weather": "Poor drainage, high soil moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, improve soil drainage.",
            "biological_spray": "Pseudomonas fluorescens 100ml/15L pump.",
            "mechanical": "Uproot and destroy affected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Soil drenching around infected patches."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellowish patches on upper leaf surface, purplish growth on lower surface.",
        "favorable_weather": "Cool and humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid late planting.",
            "biological_spray": "Bacillus subtilis at 50ml/15L pump.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray at the first sign of disease."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Nymphs and adults suck sap from tender shoots, causing curling and yellowing.",
        "favorable_weather": "Cloudy weather, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Install yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm at 50ml/15L pump.",
            "mechanical": "Use water spray to wash off aphids."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor, Tata Mida",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray ensuring thorough coverage, avoid feeding directly after spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Larvae feed on leaves greedily, leaving only midribs.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plow field post-harvest to expose pupae.",
            "biological_spray": "Beauveria bassiana 100g/15L pump.",
            "mechanical": "Handpick large caterpillars if feasible."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim, Missile",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during late evening hours."
          }
        }
      }
    ]
  },
  {
    "crop_id": "lucerne",
    "common_name": "Lucerne / Alfalfa",
    "hindi_name": "रिजका",
    "regional_names": {
      "marathi": "लसूण घास",
      "punjabi": "ਲੂਸਣ",
      "gujarati": "રજકો",
      "telugu": "లూసర్న్"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain even moisture, avoid waterlogging."
      },
      {
        "stage_name": "Early Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply light irrigation, manage weeds."
      },
      {
        "stage_name": "First Cut",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cut at 10% bloom stage for best quality."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Every 25-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate promptly after cutting."
      },
      {
        "stage_name": "Flowering/Seed Production",
        "day_range": "100+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce water if seed production is desired."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "10 kg N, 32 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted, dark blue-green foliage, slow regrowth.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "White or yellow spots on leaf margins, later necrotic.",
          "solution": "Apply MOP 20 kg/acre."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Yellowing/reddening of upper leaves, shortened internodes.",
          "solution": "Spray Boron 20% at 15g/15L pump."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "General yellowing, thin stems.",
          "solution": "Apply Gypsum 100 kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curling of young leaves, poor nodulation.",
          "solution": "Lime application in acidic soils."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Pale green/yellow leaves with gray mould on underside.",
        "favorable_weather": "Cool, wet conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, clean seed.",
            "biological_spray": "Pseudomonas fluorescens 100ml/15L pump.",
            "mechanical": "Early cutting to reduce loss."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown spots on leaves causing premature defoliation.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut the crop early to save yield.",
            "biological_spray": "Trichoderma 100g/15L pump.",
            "mechanical": "Remove infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if severity is high in seed crops."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap, yellowing leaves, honeydew production.",
        "favorable_weather": "Cool, dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm 50ml/15L.",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara, Areva",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Avoid spraying if ladybird beetles are active."
          }
        }
      },
      {
        "issue_name": "Alfalfa Weevil",
        "type": "Insect-Pest",
        "hindi_name": "रिजका घुन",
        "symptoms": "Larvae skeletonize leaves, adults notch leaf edges.",
        "favorable_weather": "Early spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest to disrupt life cycle.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Flame throwers for stubble (rare)."
          },
          "chemical_curative": {
            "active_ingredient": "Indoxacarb 14.5% SC",
            "commercial_reference": "Avaunt",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting larvae."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Complete defoliation, larvae hide in soil during day.",
        "favorable_weather": "Warm and moist.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, yellowing and stunting of plants.",
        "favorable_weather": "Sandy soils, warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with non-hosts like grasses.",
            "biological_spray": "Purpureocillium lilacinum soil application.",
            "mechanical": "Solarization of soil."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cowpea-fodder",
    "common_name": "Cowpea (Fodder)",
    "hindi_name": "लोबिया (चारा)",
    "regional_names": {
      "marathi": "चवळी",
      "tamil": "కారంమణి",
      "kannada": "ಅಲಸಂದೆ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for biomass accumulation."
      },
      {
        "stage_name": "Pre-flowering/Harvest",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 50% flowering for best fodder quality."
      },
      {
        "stage_name": "Seed Formation (if left for seed)",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate to ensure good seed filling."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, slow growth (indicates poor nodulation).",
          "solution": "Apply 10 kg Urea if nodulation is poor."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green to purple leaves.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Spray Ferrous Sulfate at 30g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, short internodes.",
          "solution": "Spray Zinc Sulphate at 30g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, honeydew, sooty mold.",
        "favorable_weather": "Dry and cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm 50ml/15L.",
            "mechanical": "Strong water jet."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot holes in leaves.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves with yellow halos.",
        "favorable_weather": "High humidity, warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severity high."
          }
        }
      },
      {
        "issue_name": "Mosaic Virus",
        "type": "Viral",
        "hindi_name": "मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves.",
        "favorable_weather": "Presence of aphid vectors.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, control vectors.",
            "biological_spray": "Neem oil against vectors.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP (Vector control)",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray to control aphid vectors."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Larvae bore into pods and eat developing seeds (if left for seed).",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps (Helilure).",
            "biological_spray": "HaNPV.",
            "mechanical": "Hand pick larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray during flowering/podding."
          }
        }
      }
    ]
  },
  {
    "crop_id": "stylosanthes",
    "common_name": "Stylosanthes",
    "hindi_name": "स्टाइलो",
    "regional_names": {
      "telugu": "స్టైలో",
      "kannada": "ಸ್ಟೈಲೊ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow initial growth, control weeds."
      },
      {
        "stage_name": "Active Vegetative",
        "day_range": "40-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant, responds well to rain."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "High biomass stage."
      },
      {
        "stage_name": "Harvest",
        "day_range": "110-120 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut before stems become too woody."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, poor biomass.",
          "solution": "Apply 20 kg P2O5 at sowing."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing of young leaves.",
          "solution": "Use SSP as phosphorus source."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Nitrogen deficiency symptoms.",
          "solution": "Seed treatment with Sodium Molybdate."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Poor root development in acidic soils.",
          "solution": "Liming if pH is very low."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark brown lesions on stems and leaves, leading to dieback.",
        "favorable_weather": "High rainfall, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties (e.g., Seca).",
            "biological_spray": "Trichoderma spp.",
            "mechanical": "Destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Wilting of branches, holes in stems.",
        "favorable_weather": "Dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of affected branches.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Burn infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage is high."
          }
        }
      },
      {
        "issue_name": "Web Blight",
        "type": "Fungal",
        "hindi_name": "वेब ब्लाइट",
        "symptoms": "Mycelial web over leaves in humid conditions.",
        "favorable_weather": "High humidity, prolonged rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid dense canopies.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Wilting, roots eaten away.",
        "favorable_weather": "Dry soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use well decomposed manure.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Destroy termite mounds."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Durmet",
            "dose_per_15L_pump": "50ml",
            "dose_per_acre": "500ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil drenching."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cluster-bean-fodder",
    "common_name": "Cluster Bean (Fodder)",
    "hindi_name": "ग्वार (चारा)",
    "regional_names": {
      "gujarati": "ગુવાર",
      "punjabi": "ਗੁਆਰਾ",
      "marathi": "गवार"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Needs light moisture to establish."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-45 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought hardy, fast growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest for fodder at 50% flowering."
      },
      {
        "stage_name": "Pod Formation (if seed)",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for seed setting."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, poor nodulation.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of old leaves in early stages.",
          "solution": "Apply small starter dose of Nitrogen."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted growth.",
          "solution": "Spray Zinc Sulphate 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves in alkaline soils.",
          "solution": "Foliar spray of FeSO4 at 0.5%."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Water soaked spots on leaves, blackening of stems.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 40g",
            "dose_per_acre": "20g + 400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during clear weather."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Yellowing of leaf margins, cupping of leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Concentric dark brown rings on leaves.",
        "favorable_weather": "Warm, wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove lower infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vectors leaf curl virus, sucks sap.",
        "favorable_weather": "Hot and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "desmodium",
    "common_name": "Desmodium",
    "hindi_name": "डेस्मोडियम",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow to establish, requires weed control."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "40-90 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Provides good grazing."
      },
      {
        "stage_name": "Flowering",
        "day_range": "100-120 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Peak biomass."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cutting",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates heavy grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor growth.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Poor nodulation in acidic soils.",
          "solution": "Seed treatment."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis.",
          "solution": "Apply MOP 15 kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Stunting, galls on roots.",
        "favorable_weather": "Sandy soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Purpureocillium lilacinum.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown necrotic spots on leaves.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Cool, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "siratro",
    "common_name": "Siratro",
    "hindi_name": "सिराट्रो",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vining",
        "day_range": "30-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Spreads rapidly."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Biomass peak."
      },
      {
        "stage_name": "Harvest/Grazing",
        "day_range": "Ongoing",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4 spray."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Pale leaves.",
          "solution": "Seed treatment."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizoctonia Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Webbing and rotting of leaves.",
        "favorable_weather": "Humid, warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid dense stands.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Bean Fly",
        "type": "Insect-Pest",
        "hindi_name": "बीन फ्लाई",
        "symptoms": "Seedling wilting.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "Neem extract.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Rusty pustules on leaves.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "vetch",
    "common_name": "Vetch",
    "hindi_name": "वेच/रेवासी",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid vine growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Peak forage quality."
      },
      {
        "stage_name": "Pod Fill (if seed)",
        "day_range": "100+ days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moisture for seeds."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted, dark leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burn.",
          "solution": "Apply MOP."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing new leaves.",
          "solution": "Apply Bentonite sulfur."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set.",
          "solution": "Spray Boron."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow patches, gray mold.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl + Mancozeb",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Botrytis Rot",
        "type": "Fungal",
        "hindi_name": "गलन",
        "symptoms": "Gray fluffy mold on stems/leaves.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Canopy management.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Pea Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in seeds/leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "napier-grass",
    "common_name": "Napier Grass / Hybrid Napier",
    "hindi_name": "नेपियर घास",
    "regional_names": {
      "marathi": "हत्ती घास",
      "punjabi": "ਨੇਪੀਅਰ",
      "telugu": "నేపియర్"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment (Rooted slips)",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist for slips to root."
      },
      {
        "stage_name": "First Cut",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 1-1.5m height."
      },
      {
        "stage_name": "Regrowth/Subsequent Cuts",
        "day_range": "Every 45 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen and irrigate immediately after each cut."
      },
      {
        "stage_name": "Winter Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation, do not harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "20 kg N, 20 kg P2O5, 16 kg K2O",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of entire plant, slow regrowth.",
          "solution": "Apply 20 kg N/acre after every cut."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted tillering, purplish leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves.",
          "solution": "Apply MOP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Pale bands near leaf base.",
          "solution": "Spray Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves.",
          "solution": "Spray FeSO4 30g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Black powdery mass on inflorescence/stems.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free planting material.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove and burn infected tillers."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Long spindle shaped brown lesions.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Harvest early."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart in young tillers.",
        "favorable_weather": "Warm, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut close to ground level.",
            "biological_spray": "Bt.",
            "mechanical": "Remove dead hearts."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap from tender leaves.",
        "favorable_weather": "Cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field hygiene.",
            "biological_spray": "Neem Oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealy Bug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony mass on leaf sheaths.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternative weed hosts.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray directly on bugs."
          }
        }
      }
    ]
  },
  {
    "crop_id": "guinea-grass",
    "common_name": "Guinea Grass",
    "hindi_name": "गिनी घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tolerates shade, good for intercropping."
      },
      {
        "stage_name": "First Cut",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 50-75cm height."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Every 35-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires moisture for good regrowth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Post 90 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nutritional quality drops rapidly after flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5, 15 kg K2O",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing, slow growth.",
          "solution": "Apply 10 kg N/acre after every cut."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple tint on leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in old leaves.",
          "solution": "Spray MgSO4."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted tillering.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Ergot",
        "type": "Fungal",
        "hindi_name": "अरगट",
        "symptoms": "Sticky exudate on inflorescence.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Harvest before flowering.",
            "biological_spray": "None.",
            "mechanical": "Remove infected heads."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart in young tillers.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "para-grass",
    "common_name": "Para Grass",
    "hindi_name": "पारा घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Loves waterlogged conditions."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid trailing growth."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cut",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain flooded or very wet soil."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "White bud/patches.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown patches on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely cutting.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Water management.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Neem oil.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rhodes-grass",
    "common_name": "Rhodes Grass",
    "hindi_name": "रोड्स घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-14 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Fine seedbed needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Drought tolerant once established."
      },
      {
        "stage_name": "Harvest",
        "day_range": "70-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at early flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early cut.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Fall Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Metarhizium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "White scales on stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Neem oil.",
            "biological_spray": "Lecanicillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sudan-grass",
    "common_name": "Sudan Grass",
    "hindi_name": "सूडान घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Beware of prussic acid (HCN) if stressed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-50 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fast growth."
      },
      {
        "stage_name": "Harvest",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at boot stage. Never graze when very young due to HCN."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cut",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple tint.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Spray FeSO4."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "White bands.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Large necrotic lesions.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "High seed rate.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut at ground level.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Reddish pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rye-grass",
    "common_name": "Rye Grass",
    "hindi_name": "राई घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep moist."
      },
      {
        "stage_name": "Tillering",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen."
      },
      {
        "stage_name": "Harvest",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cut before heading."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple leaf base.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Tip burn.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Crown Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules on leaves.",
        "favorable_weather": "Mild, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely cutting.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "timothy-grass",
    "common_name": "Timothy Grass",
    "hindi_name": "टिमोथी घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Slow to establish."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cool weather preferred."
      },
      {
        "stage_name": "Harvest",
        "day_range": "80+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at early bloom."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "12 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Yellow/brown pustules.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Dry, cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "orchard-grass",
    "common_name": "Orchard Grass / Cocksfoot",
    "hindi_name": "ओर्कर्ड घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tolerates shade."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Clump forming."
      },
      {
        "stage_name": "Harvest",
        "day_range": "80+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at boot stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Pustules.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bermuda-grass",
    "common_name": "Bermuda Grass / Dub",
    "hindi_name": "दूब/दूर्वा",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spreads via runners/rhizomes."
      },
      {
        "stage_name": "Active Growth",
        "day_range": "30-60 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Highly drought tolerant."
      },
      {
        "stage_name": "Grazing/Cut",
        "day_range": "Ongoing",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withstands heavy grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in alkaline soils.",
          "solution": "Spray FeSO4."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green, slow growth.",
          "solution": "Apply SSP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overwatering.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "White Grub",
        "type": "Insect-Pest",
        "hindi_name": "सफेद गिडार",
        "symptoms": "Roots eaten, dead patches.",
        "favorable_weather": "Monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Light traps for beetles."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 0.3% GR",
            "commercial_reference": "Regent GR",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "7 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "dhaincha",
    "common_name": "Dhaincha (Sesbania aculeata)",
    "hindi_name": "ढैंचा",
    "regional_names": {
      "punjabi": "ਜੰਤਰ",
      "marathi": "धैंचा",
      "telugu": "జీలుగ"
    },
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Rapid Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates waterlogging and salinity."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-50 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil just before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-9.0",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, poor nodulation.",
          "solution": "Apply SSP at sowing."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Apply Zinc Sulphate."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Pale leaves.",
          "solution": "Seed treatment."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early incorporation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Usually not required for green manure."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe defoliation occurs."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sunn-hemp-green-manure",
    "common_name": "Sunn Hemp (Green Manure)",
    "hindi_name": "सनई (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil at 50% flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing early on.",
          "solution": "Usually fixes own N."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Pale new leaves.",
          "solution": "Apply SSP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "रोएंदार सूंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching around field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Handpick in gregarious phase."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उखटा",
        "symptoms": "Drooping and drying.",
        "favorable_weather": "Warm, wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Soil drench."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Bores into pods (if left for seed).",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "HaNPV.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cowpea-green-manure",
    "common_name": "Cowpea (Green Manure)",
    "hindi_name": "लोबिया (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing early on.",
          "solution": "Usually fixes own N."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wild-indigo",
    "common_name": "Wild Indigo / Tephrosia",
    "hindi_name": "जंगली नील",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow initial growth."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-50 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough before it becomes woody."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Pale leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Webber",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Webbed leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cluster-bean-green-manure",
    "common_name": "Cluster Bean (Green Manure)",
    "hindi_name": "ग्वार (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Spray ZnSO4."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Spray FeSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Water soaked spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 40g",
            "dose_per_acre": "20g + 400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Yellow margins.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Brown rings.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "azolla",
    "common_name": "Azolla (Aquatic bio-fertilizer)",
    "hindi_name": "अजोला",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Inoculation",
        "day_range": "Day 1",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires 5-10 cm standing water."
      },
      {
        "stage_name": "Multiplication",
        "day_range": "Day 7-14",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Doubles in biomass every few days."
      },
      {
        "stage_name": "Harvest/Incorporation",
        "day_range": "Day 15-20",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Harvest half to allow continuous growth."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Super Phosphate 4-5 kg/ha in ponds",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, red discoloration.",
          "solution": "Add small amount of SSP to water."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Fixes its own N via Anabaena.",
          "solution": "Not usually deficient."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of fronds.",
          "solution": "Not common, add soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Azolla Weevil",
        "type": "Insect-Pest",
        "hindi_name": "अजोला वीविल",
        "symptoms": "Eats fronds, leaving them brown and fragmented.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean inoculum.",
            "biological_spray": "Neem extract in water.",
            "mechanical": "Remove severely infested patches."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1-2 kg in pond",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Broadcasting in pond (caution with toxicity)."
          }
        }
      },
      {
        "issue_name": "Fungal Rot",
        "type": "Fungal",
        "hindi_name": "फंगल रॉट",
        "symptoms": "Brown, rotting fronds in clumps.",
        "favorable_weather": "High humidity, high temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain partial shade.",
            "biological_spray": "None.",
            "mechanical": "Remove rotting mass."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Light spray over pond."
          }
        }
      },
      {
        "issue_name": "Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Feed heavily on Azolla.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Screen water inlets.",
            "biological_spray": "None.",
            "mechanical": "Hand collection."
          },
          "chemical_curative": {
            "active_ingredient": "Metaldehyde",
            "commercial_reference": "Snail Kill",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2 kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply pellets around edges."
          }
        }
      }
    ]
  }
];
