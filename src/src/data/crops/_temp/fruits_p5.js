export const data = [
  {
    "crop_id": "sapodilla",
    "common_name": "Sapodilla / Chiku",
    "hindi_name": "चीकू",
    "regional_names": {
      "marathi": "चिकू",
      "gujarati": "ચીકુ",
      "kannada": "ಸಪೋಟ",
      "tamil": "சப்போட்டா",
      "telugu": "సపోటా"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Post-Pruning",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure balanced NPK and micronutrients for healthy flush."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Seasonal flushes",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid moisture stress. Manage leaf webber and bud borer."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Post-flowering",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply micronutrients (Zn, B) to reduce fruit drop."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Pre-harvest",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture. Monitor for seed borer and fruit flies."
      },
      {
        "stage_name": "Maturity and Harvest",
        "day_range": "Harvest",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when scurf easily comes off and underlying skin is yellow/brown."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "FYM 10-15 tons, N 400g, P2O5 200g, K2O 400g per mature tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Overall yellowing of older leaves, stunted growth.",
          "solution": "Urea 10g/L spray or soil application of Urea."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, interveinal chlorosis, stunted shoot growth.",
          "solution": "Zinc Sulphate 3g/L + Slaked lime 1.5g/L spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves.",
          "solution": "Ferrous Sulphate 5g/L spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracking of fruits, poor fruit set.",
          "solution": "Borax 2g/L spray during flowering and fruit set."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "V-shaped yellowing on older leaves.",
          "solution": "Magnesium Sulphate 5g/L spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching, poor fruit quality.",
          "solution": "SOP (0-0-50) 5g/L spray during fruit development."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Dark brown spots on leaves which may coalesce.",
        "favorable_weather": "High humidity and moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper pruning for aeration.",
            "biological_spray": "Trichoderma viride @ 5g/L.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45, Uthane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray at early symptom appearance."
          }
        }
      },
      {
        "issue_name": "Sooty Mould",
        "type": "Fungal",
        "hindi_name": "सूटी मोल्ड",
        "symptoms": "Black velvety fungal growth on leaves and fruits.",
        "favorable_weather": "Associated with honeydew secreting insects like mealybugs/scale.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control sucking pests.",
            "biological_spray": "Starch solution spray to peel off fungus.",
            "mechanical": "Prune to improve ventilation."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50, Blue Copper",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray on foliage along with an insecticide for sucking pests."
          }
        }
      },
      {
        "issue_name": "Bud Borer",
        "type": "Insect-Pest",
        "hindi_name": "कली छेदक",
        "symptoms": "Larvae bore into flower buds causing them to drop.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy damaged buds.",
            "biological_spray": "Neem oil 1500 ppm @ 3ml/L.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux, Quinguard",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray at bud formation stage."
          }
        }
      },
      {
        "issue_name": "Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Drying of terminal shoots, holes with frass.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune and destroy affected shoots.",
            "biological_spray": "Beauveria bassiana @ 5g/L.",
            "mechanical": "Probe holes and kill larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron, Carina",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray covering shoots."
          }
        }
      },
      {
        "issue_name": "Leaf Webber",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती जालक",
        "symptoms": "Leaves webbed together, larvae feed inside.",
        "favorable_weather": "Humid conditions post-rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of crowded branches.",
            "biological_spray": "Bacillus thuringiensis @ 2g/L.",
            "mechanical": "Remove webbed leaves manually."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban, Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray aiming at webbed leaves."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालों वाली सुंडी",
        "symptoms": "Defoliation of leaves by hairy larvae.",
        "favorable_weather": "Monsoon season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching around trees.",
            "biological_spray": "Neem oil @ 5ml/L.",
            "mechanical": "Collect and destroy egg masses and gregarious larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 10% EC",
            "commercial_reference": "Ustad, Super Killer",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on seeing early instar larvae."
          }
        }
      },
      {
        "issue_name": "Seed Borer",
        "type": "Insect-Pest",
        "hindi_name": "बीज छेदक",
        "symptoms": "Larvae bore into the fruit and feed on seeds, leading to rotting.",
        "favorable_weather": "Humid conditions during fruit development.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field hygiene, remove fallen fruits.",
            "biological_spray": "Neem based formulations.",
            "mechanical": "Fruit bagging."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim, Missle",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray during early fruit development stage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "custard-apple",
    "common_name": "Custard Apple / Sitaphal",
    "hindi_name": "सीताफल / शरीफा",
    "regional_names": {
      "marathi": "सीताफळ",
      "gujarati": "સીતાફળ",
      "telugu": "సీతాఫలం",
      "tamil": "சீதாப்பழம்"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Phase",
        "day_range": "Post-Pruning",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Prune for shape, apply basal manure."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Early Monsoon",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate moisture, avoid heavy rains washing away pollen."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Mid Monsoon",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Micronutrient sprays help in retaining fruits."
      },
      {
        "stage_name": "Fruit Growth",
        "day_range": "Late Monsoon",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for mealy bugs which hide between areoles."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when skin color changes and segments widen."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N 250g, P2O5 125g, K2O 250g per mature plant",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves, reduced vigor.",
          "solution": "Urea 10g/L spray."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tinge.",
          "solution": "DAP or SSP application in soil."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Tip and marginal scorch, small fruits.",
          "solution": "SOP (0-0-50) 5g/L spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, small leaves.",
          "solution": "Zinc Sulphate 3g/L spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in new leaves.",
          "solution": "Chelated Iron 1g/L spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking, irregular shape.",
          "solution": "Borax 2g/L spray at fruit set."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Dieback",
        "type": "Fungal",
        "hindi_name": "डाईबैक",
        "symptoms": "Drying of twigs from tip downwards.",
        "favorable_weather": "Humid and wet conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune infected twigs 5cm below the affected part.",
            "biological_spray": "Trichoderma spp. on pruned cuts.",
            "mechanical": "Apply Bordeaux paste to cut ends."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray on foliage and twigs."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Dark brown/black spots on leaves and fruits.",
        "favorable_weather": "Rainy season, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage and canopy aeration.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "Remove affected plant parts."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf, Companion",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Mealy Bug",
        "type": "Insect-Pest",
        "hindi_name": "मिली बग",
        "symptoms": "White cottony masses on shoots, fruits; honeydew leading to sooty mould.",
        "favorable_weather": "Warm, dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Banding trunks with sticky traps to prevent ant movement.",
            "biological_spray": "Cryptolaemus montrouzieri (predator beetle) release.",
            "mechanical": "Water jet spray."
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud, Tribuzin",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "250ml in 200L water",
            "waiting_period_phi": "20 days",
            "application_instructions": "Spray thoroughly focusing on fruit crevices."
          }
        }
      },
      {
        "issue_name": "Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Wilting of shoots, larval entry holes.",
        "favorable_weather": "Summer and Monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning affected shoots.",
            "biological_spray": "Neem oil @ 5ml/L.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on new flushes."
          }
        }
      },
      {
        "issue_name": "Anar Butterfly",
        "type": "Insect-Pest",
        "hindi_name": "अनार की तितली",
        "symptoms": "Larvae bore into fruit, causing rotting and secondary infections.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management, remove alternate hosts.",
            "biological_spray": "Bacillus thuringiensis @ 2g/L.",
            "mechanical": "Bagging of fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray at fruit development."
          }
        }
      },
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फल सड़न",
        "symptoms": "Brown, water-soaked lesions on fruits turning black.",
        "favorable_weather": "Heavy rainfall during fruiting.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury to fruits, harvest carefully.",
            "biological_spray": "Trichoderma viride spray.",
            "mechanical": "Remove decaying fruits from field."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when symptoms initiate."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Brown/black scale-like spots on stems and leaves, yellowing.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain plant vigor.",
            "biological_spray": "Fish oil rosin soap @ 5g/L.",
            "mechanical": "Scraping heavily infested branches."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor, Tata Mida",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Systemic insecticide spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mangosteen",
    "common_name": "Mangosteen",
    "hindi_name": "मैंगोस्टीन",
    "regional_names": {
      "malayalam": "മാങ്കോസ്റ്റിൻ",
      "tamil": "மாங்கோஸ்டின்"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling/Vegetative",
        "day_range": "Initial years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires shade and very well-drained soil."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Post dry spell",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "A short dry spell induces flowering, followed by irrigation."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Post-flowering",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain uniform moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Pre-harvest",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate potassium for fruit quality."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Maturity",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when rind color turns purplish-black."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.8",
      "basal_dose_per_acre": "FYM 10-15 tons, Organics and NPK splits",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, slow growth.",
          "solution": "Apply Nitrogen fertilizers in splits."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal chlorosis, small poor-quality fruits.",
          "solution": "MOP or SOP application."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal yellowing on older leaves.",
          "solution": "Magnesium Sulphate soil application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small, narrow leaves.",
          "solution": "Zinc Sulphate foliar spray."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Gamboge disorder (yellow exudate) on fruits.",
          "solution": "Calcium Nitrate application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown patches on leaves starting from margins.",
        "favorable_weather": "High humidity, continuous rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Thread Blight",
        "type": "Fungal",
        "hindi_name": "थ्रेड ब्लाइट",
        "symptoms": "White mycelial threads on branches and leaves, causing death of twigs.",
        "favorable_weather": "Humid shady conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for aeration, manage shade.",
            "biological_spray": "Trichoderma spp.",
            "mechanical": "Prune out diseased wood."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray focusing on twigs."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scab on fruit rind, scarring.",
        "favorable_weather": "Dry periods during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Water sprays."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray during early fruit development."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिली बग",
        "symptoms": "White cottony colonies on calyx of fruits.",
        "favorable_weather": "Warm dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ant control.",
            "biological_spray": "Neem oil.",
            "mechanical": "Brushing off."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara, Areva",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Gamboge Disorder (Physiological)",
        "type": "Fungal",
        "hindi_name": "गैम्बोज डिसऑर्डर",
        "symptoms": "Yellow resinous exudation inside fruits and on rind.",
        "favorable_weather": "Heavy rainfall post dry spell, Calcium deficiency.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure uniform soil moisture.",
            "biological_spray": "None.",
            "mechanical": "Mulching."
          },
          "chemical_curative": {
            "active_ingredient": "Calcium Nitrate",
            "commercial_reference": "YaraLiva",
            "dose_per_15L_pump": "50g",
            "dose_per_acre": "2kg in 200L water",
            "waiting_period_phi": "0 days",
            "application_instructions": "Foliar spray of Calcium to alleviate symptoms."
          }
        }
      }
    ]
  },
  {
    "crop_id": "durian",
    "common_name": "Durian",
    "hindi_name": "डुरियन",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative",
        "day_range": "Pre-flowering",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Require distinct dry period of 3-4 weeks to stimulate flowering."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Post dry period",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Resume irrigation to assist flower bud opening."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Post-pollination",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Bats/Moths assist pollination. Maintain soil moisture."
      },
      {
        "stage_name": "Fruit Expansion",
        "day_range": "Mid-development",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply K and Ca for aril development and preventing uneven ripening."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Maturity",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruit normally drops when ripe, catch nets can be used."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "NPK tailored to mature tree size (e.g., 2-3 kg of 12-12-17 per tree)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor flush.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit aril development, low sugar.",
          "solution": "MOP or SOP soil application."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Wet core, uneven ripening.",
          "solution": "Lime application or Calcium Nitrate sprays."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed fruits, poor pollination.",
          "solution": "Solubor spray prior to flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted shoots.",
          "solution": "Zinc Sulphate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Phytophthora Patch Canker",
        "type": "Fungal",
        "hindi_name": "फाइटोफ्थोरा कैंकर",
        "symptoms": "Dark oozing lesions on trunk, roots rotting.",
        "favorable_weather": "Waterlogged soil, heavy rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve soil drainage, avoid trunk damage.",
            "biological_spray": "Trichoderma application to soil.",
            "mechanical": "Scrape affected bark."
          },
          "chemical_curative": {
            "active_ingredient": "Fosetyl-Al 80% WP",
            "commercial_reference": "Aliette",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "28 days",
            "application_instructions": "Foliar spray or trunk injection/paint."
          }
        }
      },
      {
        "issue_name": "Pink Disease",
        "type": "Fungal",
        "hindi_name": "पिंक रोग",
        "symptoms": "Pinkish fungal crust on branches, causing dieback.",
        "favorable_weather": "High humidity, prolonged rainfall.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning to reduce canopy density.",
            "biological_spray": "Bordeaux mixture as preventive.",
            "mechanical": "Prune and burn affected branches."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on affected branches."
          }
        }
      },
      {
        "issue_name": "Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक",
        "symptoms": "Holes in fruit rind, frass, secondary rot.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Bacillus thuringiensis.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at early fruit development."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in trunk with extruded sawdust-like frass.",
        "favorable_weather": "Year-round in tropics.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain tree vigor.",
            "biological_spray": "Beauveria bassiana in holes.",
            "mechanical": "Probe holes with wire to kill larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Inject into holes and plug with mud."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown patches on leaves.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good ventilation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Collect fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Infestation on leaves and fruits, sooty mould.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ant control.",
            "biological_spray": "Neem oil @ 5ml/L.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "starfruit",
    "common_name": "Starfruit / Carambola",
    "hindi_name": "कमरख / कारम्बोला",
    "regional_names": {
      "bengali": "কামরাঙা"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative",
        "day_range": "Pre-flowering",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Prune crossing branches, ensure good light penetration."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Multiple flushes",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide irrigation during dry spells for uniform flowering."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Post-flowering",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Boron and Zinc application improves fruit retention."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Mid-development",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for fruit flies which are the major pest."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Maturity",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when fruit turns yellow-orange depending on variety."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, NPK balanced splits",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing, poor growth.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in high pH soils.",
          "solution": "Fe-EDTA spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, rosetting.",
          "solution": "Zinc Sulphate spray."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Chlorosis between veins on young leaves.",
          "solution": "Manganese Sulphate spray."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "V-shaped yellowing on older leaves.",
          "solution": "Magnesium Sulphate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots inside fruit, rotting, premature drop.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Orchard sanitation, collect and destroy fallen fruits.",
            "biological_spray": "Bait sprays with GF-120.",
            "mechanical": "Methyl Eugenol traps @ 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Malathion 50% EC + Jaggery",
            "commercial_reference": "Cythion (Bait spray)",
            "dose_per_15L_pump": "20ml + 100g Jaggery",
            "dose_per_acre": "250ml in 200L water (Spot spray)",
            "waiting_period_phi": "7 days",
            "application_instructions": "Apply as bait spots, not overall cover spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Dark sunken lesions on fruits.",
        "favorable_weather": "Rainy humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for air circulation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Foliar spray during fruit development."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown circular spots on leaves.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Destruction of infected litter."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक",
        "symptoms": "Larvae boring into fruit causing rotting.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Fruit bagging.",
            "biological_spray": "Neem oil.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray at fruit set."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Scales on stems and leaves, sooty mould.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Manage ants.",
            "biological_spray": "Horticultural oil.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Yellowing of canopy, wilting, decay of feeder roots.",
        "favorable_weather": "Waterlogged soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage.",
            "biological_spray": "Trichoderma soil drench.",
            "mechanical": "Improve soil structure."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Soil drench around the base."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wood-apple",
    "common_name": "Wood Apple / Bel",
    "hindi_name": "बेल",
    "regional_names": {
      "bengali": "বেল",
      "marathi": "बेल",
      "tamil": "வில்வம்"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "New Flush",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Irrigation during summer flush improves growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Early Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Drought stress can lead to flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply micronutrients."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Monsoon to Winter",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Extremely hardy, requires minimal watering once established."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Spring (next year)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruits take almost a year to mature. Harvest when shell turns yellowish."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "FYM 10 tons, N 500g, P2O5 250g, K2O 500g per tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, small leaves.",
          "solution": "Zinc Sulphate 3g/L spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on young leaves.",
          "solution": "Ferrous Sulphate 5g/L spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking.",
          "solution": "Borax 2g/L spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit size and pulp quality.",
          "solution": "MOP application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "बैक्टीरियल ब्लाइट",
        "symptoms": "Water-soaked lesions on leaves turning necrotic.",
        "favorable_weather": "Monsoon rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune to open canopy.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin Sulphate 90% + Tetracycline 10%",
            "commercial_reference": "Streptocycline",
            "dose_per_15L_pump": "1.5g + 30g Copper Oxychloride",
            "dose_per_acre": "20g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray along with Copper fungicide."
          }
        }
      },
      {
        "issue_name": "Fruit Canker",
        "type": "Bacterial",
        "hindi_name": "फल कैंकर",
        "symptoms": "Cork-like raised lesions on fruit rind.",
        "favorable_weather": "Warm and wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury to fruits.",
            "biological_spray": "Neem oil.",
            "mechanical": "Remove fallen diseased fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Hydroxide 77% WP",
            "commercial_reference": "Kocide",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during early fruit development."
          }
        }
      },
      {
        "issue_name": "Lemon Butterfly / Swallowtail",
        "type": "Insect-Pest",
        "hindi_name": "नींबू की तितली",
        "symptoms": "Caterpillars defoliate young leaves.",
        "favorable_weather": "Spring and monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Hand picking in nurseries.",
            "biological_spray": "Bacillus thuringiensis.",
            "mechanical": "Netting small plants."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on new flushes if infestation is high."
          }
        }
      },
      {
        "issue_name": "Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक",
        "symptoms": "Larvae bore into the hard shell.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Orchard hygiene.",
            "biological_spray": "Neem kernel extract.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at early fruit set."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Mud galleries on trunk, damage to roots in dry areas.",
        "favorable_weather": "Dry soil conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove dry wood/stumps.",
            "biological_spray": "Metarhizium anisopliae soil application.",
            "mechanical": "Destroy termite mounds."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil drench around the base of the trunk."
          }
        }
      }
    ]
  },
  {
    "crop_id": "tamarind",
    "common_name": "Tamarind",
    "hindi_name": "इमली",
    "regional_names": {
      "marathi": "चिंच",
      "tamil": "புளி",
      "telugu": "చింత"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant, establish young plants with some watering."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure no severe stress during flowering."
      },
      {
        "stage_name": "Pod Set",
        "day_range": "Monsoon",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Natural rainfall usually sufficient."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "Post-Monsoon",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Monitor for pod borers."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Winter to Spring",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when pods become light, shell is brittle and pulp turns brown."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "FYM 10 tons, NPK (500:250:250 g/tree/year)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale foliage, poor growth.",
          "solution": "Apply Urea/FYM."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development in seedlings.",
          "solution": "DAP application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small pods, poor pulp quality.",
          "solution": "MOP application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of young leaves in alkaline soils.",
          "solution": "Ferrous Sulphate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery growth on leaves and young pods.",
        "favorable_weather": "Dry and cool weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for aeration.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Wettable Sulphur 80% WG",
            "commercial_reference": "Sulfex",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown necrotic spots on leaves.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray if severe defoliation occurs."
          }
        }
      },
      {
        "issue_name": "Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Larvae bore into pods, eat seeds and pulp, leaving frass.",
        "favorable_weather": "Pod development stage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy infested pods.",
            "biological_spray": "Neem seed kernel extract 5%.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during early pod development."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिली बग",
        "symptoms": "White cottony bugs on shoots and pods.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control ants.",
            "biological_spray": "Cryptolaemus montrouzieri release.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray covering infested parts thoroughly."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Sucking sap from twigs causing drying.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain plant vigor.",
            "biological_spray": "Neem oil.",
            "mechanical": "Scrape off scales."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Systemic spray."
          }
        }
      },
      {
        "issue_name": "Tamarind Bruchid (Storage Pest)",
        "type": "Insect-Pest",
        "hindi_name": "इमली घुन",
        "symptoms": "Beetles bore into seeds in stored tamarind or late harvest.",
        "favorable_weather": "Storage conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sun dry pods well before storage. Mix with salt.",
            "biological_spray": "None.",
            "mechanical": "Store in sealed containers."
          },
          "chemical_curative": {
            "active_ingredient": "Aluminium Phosphide (Fumigation)",
            "commercial_reference": "Celphos",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "7 days aeration",
            "application_instructions": "Fumigate in airtight godowns by trained personnel only."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jujube",
    "common_name": "Jujube / Ber",
    "hindi_name": "बेर",
    "regional_names": {
      "marathi": "बोर",
      "gujarati": "બોર",
      "punjabi": "ਬੇਰ",
      "tamil": "இலந்தை"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Pruning and Dormancy",
        "day_range": "May-June",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune severely when dormant to encourage new growth."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "July-August",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply fertilizers; respond well to early monsoon rains."
      },
      {
        "stage_name": "Flowering",
        "day_range": "September-October",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid heavy irrigation to prevent flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "October-November",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for irrigation to prevent fruit drop. Apply micronutrients."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "December-January",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor intensely for fruit fly."
      },
      {
        "stage_name": "Harvest",
        "day_range": "February-March",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at optimum color development (yellow to reddish)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.5",
      "basal_dose_per_acre": "FYM 10-20kg/tree, N 500g, P2O5 250g, K2O 250g per mature tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Small, pale yellow leaves, stunted shoots.",
          "solution": "Urea application in split doses."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root growth, delayed maturity.",
          "solution": "SSP basal application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorching of leaf margins, small dull fruits.",
          "solution": "MOP application during fruit development."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, small narrow leaves.",
          "solution": "Zinc Sulphate 3g/L spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking, internal browning.",
          "solution": "Borax 2g/L spray at fruit set."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves in calcareous soils.",
          "solution": "Ferrous Sulphate 5g/L spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू (चूर्णी फफूंद)",
        "symptoms": "White powdery patches on leaves and fruits causing them to drop or malform.",
        "favorable_weather": "Cool, dry weather with high humidity at night.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune for good sunlight penetration.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "Remove severely infected twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Dinocap 48% EC",
            "commercial_reference": "Karathane",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at flowering and fruit set stages."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा (अल्टरनेरिया)",
        "symptoms": "Dark brown spots on leaves causing defoliation.",
        "favorable_weather": "Humid monsoon weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Destroy fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फल सड़न",
        "symptoms": "Soft, water-soaked brown lesions on maturing fruits.",
        "favorable_weather": "Unseasonal rains during ripening.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury, harvest timely.",
            "biological_spray": "Trichoderma spray.",
            "mechanical": "Remove rotting fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray before ripening if rain is expected."
          }
        }
      },
      {
        "issue_name": "Ber Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "बेर फल मक्खी",
        "symptoms": "Punctures on fruit, maggots feeding inside pulp causing rot and drop.",
        "favorable_weather": "Fruit ripening stage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plough soil to expose pupae, destroy fallen fruits.",
            "biological_spray": "Bait spray with jaggery.",
            "mechanical": "Methyl Eugenol traps."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray at 'pea' stage and repeat after 15 days."
          }
        }
      },
      {
        "issue_name": "Bark Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल खाने वाली सुंडी",
        "symptoms": "Webbed frass on branches, holes in bark leading to branch weakness.",
        "favorable_weather": "Older orchards.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain orchard hygiene.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Remove webs and insert iron wire to kill caterpillar."
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Inject a few drops into the hole and plug with mud."
          }
        }
      },
      {
        "issue_name": "Lac Insect",
        "type": "Insect-Pest",
        "hindi_name": "लाख कीट",
        "symptoms": "Resinous encrustations on twigs, plant dries up.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of heavily infested branches.",
            "biological_spray": "Neem oil.",
            "mechanical": "Scraping of encrustations."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray after pruning."
          }
        }
      },
      {
        "issue_name": "Stone Weevil",
        "type": "Insect-Pest",
        "hindi_name": "गुठली घुन",
        "symptoms": "Weevil feeds on seed kernel, outer fruit looks normal but inner part is damaged.",
        "favorable_weather": "Fruit development.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collection and destruction of fallen fruits.",
            "biological_spray": "None highly effective.",
            "mechanical": "Field hygiene."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray when fruits are pea-sized."
          }
        }
      },
      {
        "issue_name": "Leaf Hopper",
        "type": "Insect-Pest",
        "hindi_name": "फुदका (हॉपर)",
        "symptoms": "Nymphs and adults suck sap from tender shoots, causing yellowing and curling.",
        "favorable_weather": "New flush period.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during vegetative flush."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jamun",
    "common_name": "Jamun / Java Plum",
    "hindi_name": "जामुन",
    "regional_names": {
      "marathi": "जांभूळ",
      "bengali": "জাম",
      "telugu": "నేరేడు"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Post-Monsoon",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune crossing branches. Hardy plant, requires less water."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Spring (March-April)",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Provide light irrigation to support bloom."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "April-May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Foliar nutrient sprays can improve retention."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "May-June",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation during this stage increases fruit size."
      },
      {
        "stage_name": "Harvest",
        "day_range": "June-July",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when fruits turn deep purple/black."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "FYM 20kg/tree, N 500g, P2O5 250g, K2O 250g per mature tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, stunted growth.",
          "solution": "Zinc Sulphate 3g/L spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Ferrous Sulphate 5g/L spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor fruit shape.",
          "solution": "Borax 2g/L spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit size and sweetness.",
          "solution": "MOP application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Dieback of branches, leaf spots, fruit rot.",
        "favorable_weather": "Humid and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning dead wood.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Destroy infected material."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown circular spots on foliage.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure canopy aeration.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Rake up fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feed on fruit pulp causing it to rot and fall.",
        "favorable_weather": "Monsoon fruiting period.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy fallen fruits.",
            "biological_spray": "Bait sprays.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray when fruits start ripening."
          }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Serpentine mines on tender leaves, curling.",
        "favorable_weather": "New flush emergence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Neem seed kernel extract 5%.",
            "mechanical": "Remove heavily mined leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Abamectin 1.9% EC",
            "commercial_reference": "Vertimec",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray on new flushes."
          }
        }
      },
      {
        "issue_name": "White Fly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Sucking sap from leaves, causing sooty mould.",
        "favorable_weather": "Dry and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Verticillium lecanii @ 5g/L.",
            "mechanical": "Water sprays."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "20g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray ensuring coverage on lower leaf surfaces."
          }
        }
      },
      {
        "issue_name": "Bark Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल खाने वाली सुंडी",
        "symptoms": "Webs with frass on bark, holes in stem.",
        "favorable_weather": "Older trees year-round.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep orchard clean.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Clean webs and kill larvae with wire."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Inject a few drops in holes and plug with mud."
          }
        }
      }
    ]
  },
  {
    "crop_id": "phalsa",
    "common_name": "Phalsa",
    "hindi_name": "फालसा",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Pruning",
        "day_range": "Winter (Dec-Jan)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Severe pruning needed as fruits bear on new shoots."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Early Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations improve fruit size and juice content."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Summer (May-June)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Multiple pickings required as fruits ripen unevenly."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "FYM 10 tons, N 100g, P 40g, K 40g per bush",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor flush.",
          "solution": "Urea application post-pruning."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorotic new leaves.",
          "solution": "Ferrous Sulphate spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit quality.",
          "solution": "MOP application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning to keep bush open.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder on leaves.",
        "favorable_weather": "Dry, warm days and cool nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good spacing.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Wettable Sulphur 80% WG",
            "commercial_reference": "Sulfex",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "10 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Bark Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल खाने वाली सुंडी",
        "symptoms": "Holes in the main stem with frass.",
        "favorable_weather": "Year-round.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Regular pruning.",
            "biological_spray": "None.",
            "mechanical": "Clean holes with wire."
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Inject into hole."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिली बग",
        "symptoms": "White cottony mass on shoots.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ant control.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots inside fruit.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Frequent harvesting.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Malathion 50% EC",
            "commercial_reference": "Cythion",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray carefully observing PHI."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kiwi",
    "common_name": "Kiwi / Kiwifruit",
    "hindi_name": "कीवी",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy and Pruning",
        "day_range": "Winter",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Winter pruning is essential for balancing vegetative growth and fruiting."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Protect from late spring frosts. Apply NPK."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Late Spring",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure male and female vines bloom simultaneously. Use bees for pollination."
      },
      {
        "stage_name": "Fruit Set and Expansion",
        "day_range": "Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Needs abundant water and balanced nutrients (especially K)."
      },
      {
        "stage_name": "Maturation",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Reduce nitrogen to improve storage quality."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Late Autumn",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest based on Brix level (soluble solids)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 15 tons, N 80kg, P2O5 40kg, K2O 100kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale small leaves, reduced vine vigor.",
          "solution": "Apply Urea/CAN."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching, small fruits.",
          "solution": "High K application during fruit expansion."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Magnesium Sulphate soil application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Chlorotic mottling, small leaves.",
          "solution": "Zinc Sulphate foliar spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of young leaves.",
          "solution": "Fe-EDDHA application to soil."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Soft fruits, poor storage.",
          "solution": "Calcium sprays during fruit development."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Canker (Psa)",
        "type": "Bacterial",
        "hindi_name": "बैक्टीरियल कैंकर (Psa)",
        "symptoms": "Red rust exudate from canes, brown leaf spots with halos, blossom rot.",
        "favorable_weather": "Cool, wet conditions in spring/autumn.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Strict orchard hygiene, sterilize pruning tools.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Prune out and burn infected canes."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Hydroxide 77% WP",
            "commercial_reference": "Kocide",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray pre-flowering and post-harvest to protect leaf scars."
          }
        }
      },
      {
        "issue_name": "Botrytis Blight / Grey Mould",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड",
        "symptoms": "Grey fuzzy fungal growth on flowers and fruits.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Canopy management for airflow.",
            "biological_spray": "Trichoderma harzianum.",
            "mechanical": "Remove decaying material."
          },
          "chemical_curative": {
            "active_ingredient": "Fludioxonil + Cyprodinil",
            "commercial_reference": "Switch",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray at flowering and pre-harvest."
          }
        }
      },
      {
        "issue_name": "Phytophthora Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Vine decline, yellowing, rotting of feeder roots.",
        "favorable_weather": "Waterlogged heavy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant on raised beds, improve drainage.",
            "biological_spray": "Trichoderma soil application.",
            "mechanical": "Avoid over-irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Soil drench around the vine base."
          }
        }
      },
      {
        "issue_name": "Armillaria Root Rot",
        "type": "Fungal",
        "hindi_name": "आर्मिलारिया रूट रोट",
        "symptoms": "White mycelial fans under bark at collar region, vine death.",
        "favorable_weather": "Poor drainage, forest cleared land.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove all stumps and roots before planting.",
            "biological_spray": "Trichoderma spp.",
            "mechanical": "Excavate soil around collar to expose to air."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water (Drench)",
            "waiting_period_phi": "30 days",
            "application_instructions": "Soil drenching."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "White/grey scales on canes and fruits.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Winter pruning.",
            "biological_spray": "Horticultural oil in winter.",
            "mechanical": "Scraping."
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "250ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray targeting crawler stage."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "लीफ रोलर",
        "symptoms": "Leaves rolled and webbed together, caterpillar feeding inside, scarring fruit.",
        "favorable_weather": "Spring/Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove weed hosts.",
            "biological_spray": "Bacillus thuringiensis.",
            "mechanical": "Pheromone mating disruption."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when caterpillars are young."
          }
        }
      },
      {
        "issue_name": "Nematodes",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunted vine growth.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use nematode-free planting material.",
            "biological_spray": "Paecilomyces lilacinus to soil.",
            "mechanical": "Marigold intercropping."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "As per label",
            "waiting_period_phi": "60 days",
            "application_instructions": "Soil application."
          }
        }
      }
    ]
  },
  {
    "crop_id": "feijoa",
    "common_name": "Feijoa",
    "hindi_name": "फेजोआ",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Prune lightly to maintain shape."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Early Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure cross-pollination (birds/bees)."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate watering required."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when fruits fall to the ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "NPK 10:10:10 general application",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Apply balanced NPK."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Superphosphate application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small fruits.",
          "solution": "Potassium Sulphate application."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing in alkaline soils.",
          "solution": "Fe-chelate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots on leaves.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune for aeration.",
            "biological_spray": "Copper-based organics.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots inside fruit.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect fallen fruits daily.",
            "biological_spray": "Bait sprays.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Bait application."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Scales on stems.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ant control.",
            "biological_spray": "Horticultural oil.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Guava Moth",
        "type": "Insect-Pest",
        "hindi_name": "अमरूद मोथ",
        "symptoms": "Larvae boring into fruit.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternate hosts.",
            "biological_spray": "Bt spray.",
            "mechanical": "Pheromone disruption."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during early fruiting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "marula",
    "common_name": "Marula",
    "hindi_name": "मरुला",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Highly drought tolerant."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Early Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Dioecious plant, ensure male trees are present."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Minimal irrigation required."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Late Summer",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruits fall when green and ripen on the ground to yellow."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "Low requirement, organic compost",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Slow growth.",
          "solution": "Organic manure."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor establishment.",
          "solution": "Bone meal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit size.",
          "solution": "Wood ash or MOP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Foliar zinc."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots in fallen fruits.",
        "favorable_weather": "Ripening period.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Gather fruits daily.",
            "biological_spray": "None.",
            "mechanical": "Bait traps."
          },
          "chemical_curative": {
            "active_ingredient": "Malathion 50% EC",
            "commercial_reference": "Cythion",
            "dose_per_15L_pump": "20ml (Bait)",
            "dose_per_acre": "Spot spray",
            "waiting_period_phi": "7 days",
            "application_instructions": "Bait spray."
          }
        }
      },
      {
        "issue_name": "Marula Beetle",
        "type": "Insect-Pest",
        "hindi_name": "मरुला बीटल",
        "symptoms": "Defoliation by beetles.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Hand picking in young plants.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on foliage if damage is severe."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Air circulation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox 50",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in trunk.",
        "favorable_weather": "Year-round.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Healthy trees.",
            "biological_spray": "None.",
            "mechanical": "Kill larvae in holes."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Inject into hole."
          }
        }
      }
    ]
  },
  {
    "crop_id": "salak",
    "common_name": "Salak / Snake Fruit",
    "hindi_name": "सलाक",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Year-round",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires high humidity, shade and organic matter."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Post dry spell",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Hand pollination often required for good fruit set."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "5-7 months post pollination",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Maturity",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when skin color changes and aroma develops."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "High organic compost, balanced NPK",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing fronds.",
          "solution": "Apply Urea/Compost."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit sweetness.",
          "solution": "MOP application."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of older fronds.",
          "solution": "Magnesium Sulphate."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed fruits.",
          "solution": "Borax application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फल सड़न",
        "symptoms": "Rotting of fruits in bunches.",
        "favorable_weather": "High humidity, poor ventilation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune old fronds, space out bunches.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove rotting fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on fruit bunches."
          }
        }
      },
      {
        "issue_name": "Weevils",
        "type": "Insect-Pest",
        "hindi_name": "घुन (वीविल)",
        "symptoms": "Boring into stems and fruits.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray on affected parts."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिली बग",
        "symptoms": "White masses on fruits.",
        "favorable_weather": "Dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control ants.",
            "biological_spray": "Neem oil.",
            "mechanical": "Water wash."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Drying of frond tips.",
        "favorable_weather": "Wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "Cut affected fronds."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  }
];
