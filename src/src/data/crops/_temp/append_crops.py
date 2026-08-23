import json
import re

new_crops = [
  {
    "crop_id": "raisin-grapes",
    "common_name": "Raisin Grapes",
    "hindi_name": "किशमिश अंगूर",
    "regional_names": {
      "marathi": "बेदाणा द्राक्षे",
      "punjabi": "ਕਿਸ਼ਮਿਸ਼ ਅੰਗੂਰ",
      "tamil": "உலர் திராட்சை",
      "telugu": "ఎండు ద్రాక్ష"
    },
    "category": "Fruit",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune for balanced fruit load. Clean vineyard."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "30-50",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen. Protect against early pests."
      },
      {
        "stage_name": "Shoot Growth",
        "day_range": "50-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Canopy management. Ensure adequate micronutrients."
      },
      {
        "stage_name": "Flowering & Fruit Set",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid overhead watering. Maintain soil moisture."
      },
      {
        "stage_name": "Berry Development",
        "day_range": "90-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply potassium for sugar accumulation."
      },
      {
        "stage_name": "Veraison to Ripening",
        "day_range": "120-150",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Reduce irrigation. Maximize TSS (Brix)."
      },
      {
        "stage_name": "Harvest & Drying",
        "day_range": "150-170",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at peak sweetness. Dry on racks."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N: 40kg, P: 60kg, K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor vigor, small bunches.",
          "solution": "Urea @ 1.5kg/acre via foliar spray."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted roots, reddish margins on older leaves.",
          "solution": "SSP @ 50kg/acre soil application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching, low sugar, poor raisin quality.",
          "solution": "SOP @ 5kg/acre through drip."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Magnesium Sulphate @ 500g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of young leaves with green veins.",
          "solution": "Fe-EDTA @ 250g/acre foliar."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, poor bunch development.",
          "solution": "Zinc Sulphate @ 500g/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Uneven berry size (hen & chicken).",
          "solution": "Borax @ 200g/acre foliar pre-bloom."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Berry cracking during ripening.",
          "solution": "Calcium Nitrate @ 500g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellow oil spots on leaves, white growth below.",
        "favorable_weather": "High humidity, 20-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Canopy management for airflow.",
            "biological_spray": "Trichoderma viride @ 50g/15L.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP",
            "commercial_reference": "Curzate",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "66 days",
            "application_instructions": "Spray prophylactically."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी फफूंदी",
        "symptoms": "Ashy white patches on leaves and berries.",
        "favorable_weather": "Dry, warm days with cool nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 8.3% + Mancozeb 66.7% WG",
            "commercial_reference": "Avtar",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "66 days",
            "application_instructions": "Spray at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Bird-eye spots on berries and canes.",
        "favorable_weather": "Warm, wet conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Prune infected canes."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "Cottony masses on bunches, sooty mold.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove loose bark.",
            "biological_spray": "Cryptolaemus montrouzieri release.",
            "mechanical": "Sticky bands."
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "40 days",
            "application_instructions": "Drench bunches."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Beetles scrap buds post-pruning.",
        "favorable_weather": "Warm post-pruning.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed removal.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Shake vines onto sticky sheets."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "35 days",
            "application_instructions": "Spray before bud burst."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scabbing on berries, stunted growth.",
        "favorable_weather": "Warm, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Target bunches in evening."
          }
        }
      },
      {
        "issue_name": "Leafhopper",
        "type": "Insect-Pest",
        "hindi_name": "लीफ हॉपर",
        "symptoms": "Stippling on leaves, premature drop.",
        "favorable_weather": "Warm summers.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain predatory mites.",
            "biological_spray": "Neem Oil 1500ppm.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "60g in 200L water",
            "waiting_period_phi": "35 days",
            "application_instructions": "Spray when nymphs seen."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems with frass, wilting of canes.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune infested canes.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Probing with wire."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Stem swabbing",
            "waiting_period_phi": "30 days",
            "application_instructions": "Swab or inject into holes."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "माइट्स (मकड़ी)",
        "symptoms": "Bronzing of leaves, fine webbing.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid water stress.",
            "biological_spray": "Predatory mites.",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray focusing on undersides."
          }
        }
      },
      {
        "issue_name": "Berry Rot",
        "type": "Fungal",
        "hindi_name": "बेरी सड़ांध",
        "symptoms": "Rotting of berries near harvest.",
        "favorable_weather": "Rain near harvest.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good ventilation in bunches.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove rotted berries."
          },
          "chemical_curative": {
            "active_ingredient": "Fluopyram + Tebuconazole",
            "commercial_reference": "Luna Experience",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Pre-harvest spray."
          }
        }
      },
      {
        "issue_name": "Nematodes",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि (निमेटोड)",
        "symptoms": "Stunted vines, yellowing, root knots.",
        "favorable_weather": "Sandy soils, warm temps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant rootstocks, crop rotation.",
            "biological_spray": "Paecilomyces lilacinus soil drench.",
            "mechanical": "Soil solarization."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "Soil application",
            "dose_per_acre": "1.5 kg/acre",
            "waiting_period_phi": "Not applicable",
            "application_instructions": "Apply to soil around root zone."
          }
        }
      },
      {
        "issue_name": "Bacterial Leaf Spot",
        "type": "Bacterial",
        "hindi_name": "जीवाणु पत्ती धब्बा",
        "symptoms": "Water-soaked lesions on leaves turning necrotic.",
        "favorable_weather": "High humidity and rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead irrigation.",
            "biological_spray": "Copper-based biologicals.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride + Streptomycin",
            "commercial_reference": "Blitox + Plantomycin",
            "dose_per_15L_pump": "45g + 2g",
            "dose_per_acre": "600g + 30g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray during early infection."
          }
        }
      }
    ]
  },
  {
    "crop_id": "almond",
    "common_name": "Almond",
    "hindi_name": "बादाम",
    "regional_names": {
      "kashmiri": "بأدام"
    },
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning and winter chilling."
      },
      {
        "stage_name": "Bud Break & Bloom",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for pollination. Protect from frost."
      },
      {
        "stage_name": "Nut Set & Early Growth",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid nut growth. Ensure moisture."
      },
      {
        "stage_name": "Shell Hardening",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Kernel development starts."
      },
      {
        "stage_name": "Hull Split",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Hull opens. Susceptible to navel orangeworm."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Shake trees to harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "FYM 5-10 tons, N: 1.5kg, P: 1kg, K: 1kg per tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, small nuts, early leaf drop.",
          "solution": "Urea @ 1kg/tree split applications."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burn, pale thin leaves, low yield.",
          "solution": "MOP or SOP @ 1kg/tree."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, rosetting, delayed opening of vegetative buds.",
          "solution": "Foliar Zinc Sulphate @ 500g/acre."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Gummy nuts, excessive branch dieback.",
          "solution": "Borax @ 20g/tree."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves (yellow leaves with green veins).",
          "solution": "Fe-EDTA spray @ 250g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "V-shaped yellowing on older leaves.",
          "solution": "Magnesium Sulphate foliar spray."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Poor root growth, nut quality issues.",
          "solution": "Gypsum application in soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Navel Orangeworm",
        "type": "Insect-Pest",
        "hindi_name": "नाभि नारंगी कृमि",
        "symptoms": "Larvae feed inside nuts after hull split, causing frass and webbing.",
        "favorable_weather": "Warm and dry during hull split.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Winter sanitation (remove mummy nuts).",
            "biological_spray": "Bacillus thuringiensis (Bt).",
            "mechanical": "Pheromone mating disruption."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply at early hull split."
          }
        }
      },
      {
        "issue_name": "Peach Twig Borer",
        "type": "Insect-Pest",
        "hindi_name": "आड़ू टहनी बेधक",
        "symptoms": "Larvae bore into shoots causing dieback (flagging) and feed on nuts.",
        "favorable_weather": "Spring and summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Monitor with pheromone traps.",
            "biological_spray": "Spinosad.",
            "mechanical": "Prune infested twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during spring flush."
          }
        }
      },
      {
        "issue_name": "San Jose Scale",
        "type": "Insect-Pest",
        "hindi_name": "सैन जोस स्केल",
        "symptoms": "Greyish encrustations on bark, poor tree vigor, dieback.",
        "favorable_weather": "Year-round.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Dormant pruning.",
            "biological_spray": "Horticultural Oil during dormancy.",
            "mechanical": "Scrubbing off localized infections."
          },
          "chemical_curative": {
            "active_ingredient": "Spirotetramat 11.01% + Imidacloprid 11.01% w/w SC",
            "commercial_reference": "Movento Energy",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray post-bloom when crawlers emerge."
          }
        }
      },
      {
        "issue_name": "Brown Rot Blossom Blight",
        "type": "Fungal",
        "hindi_name": "ब्राउन रॉट (बौर झुलसा)",
        "symptoms": "Blossoms collapse, turn brown, and remain attached. Cankers on twigs.",
        "favorable_weather": "Wet weather during bloom.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune out cankers in winter.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove blighted shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at 20% and 80% bloom."
          }
        }
      },
      {
        "issue_name": "Shot Hole Disease",
        "type": "Fungal",
        "hindi_name": "शॉट होल रोग",
        "symptoms": "Small purple spots on leaves that drop out, leaving 'shot holes'.",
        "favorable_weather": "Prolonged wet foliage in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead sprinkler irrigation.",
            "biological_spray": "Copper fungicides during dormancy.",
            "mechanical": "Clean orchard floor."
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at petal fall."
          }
        }
      },
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "माइट्स (मकड़ी)",
        "symptoms": "Stippling, webbing, leaf drop. Reduced kernel fill.",
        "favorable_weather": "Hot, dry, and dusty.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Minimize dust, manage water stress.",
            "biological_spray": "Release predatory mites.",
            "mechanical": "Water wash."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "250ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray evenly focusing on foliage."
          }
        }
      },
      {
        "issue_name": "Crown Gall",
        "type": "Bacterial",
        "hindi_name": "क्राउन गॉल",
        "symptoms": "Tumor-like growths on roots and crown.",
        "favorable_weather": "Wounds near soil line.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid root/crown injuries. Use disease-free stock.",
            "biological_spray": "Agrobacterium radiobacter K84 dip.",
            "mechanical": "Surgically remove galls."
          },
          "chemical_curative": {
            "active_ingredient": "Copper-based paints",
            "commercial_reference": "Bordeaux Paste",
            "dose_per_15L_pump": "Paint application",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply paste after removing galls."
          }
        }
      },
      {
        "issue_name": "Almond Rust",
        "type": "Fungal",
        "hindi_name": "बादाम का रस्ट (रोली)",
        "symptoms": "Yellow spots on upper leaf surface, rust-colored pustules below.",
        "favorable_weather": "High humidity, warm temps late season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good air circulation.",
            "biological_spray": "Sulphur-based organic sprays.",
            "mechanical": "Rake and destroy fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply when first symptoms appear."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pistachio",
    "common_name": "Pistachio",
    "hindi_name": "पिस्ता",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Requires sufficient winter chilling hours."
      },
      {
        "stage_name": "Bloom & Pollination",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Wind pollinated. Ensure male and female trees sync."
      },
      {
        "stage_name": "Nut Growth & Shell Hardening",
        "day_range": "Apr-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Shell size is determined. Needs steady water."
      },
      {
        "stage_name": "Kernel Development",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Kernel fills the shell. Shell splitting starts."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest promptly when hulls loosen."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.2",
      "basal_dose_per_acre": "FYM 5 tons, N: 1kg, P: 0.5kg, K: 1kg per tree",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, reduced shoot growth.",
          "solution": "Urea @ 1kg/tree."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin necrosis, poor split nuts.",
          "solution": "SOP @ 1kg/tree."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, rosetting.",
          "solution": "Zinc Sulphate @ 500g/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor fruit set, blank nuts.",
          "solution": "Borax @ 20g/tree."
        },
        {
          "nutrient": "Copper",
          "symptoms": "Shoot tip dieback.",
          "solution": "Copper Oxychloride spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pistachio Psylla",
        "type": "Insect-Pest",
        "hindi_name": "पिस्ता साइला",
        "symptoms": "Sucks sap, produces honeydew leading to sooty mold, nut drop.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Predatory bugs (Anthocoris).",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "28 days",
            "application_instructions": "Spray when populations build."
          }
        }
      },
      {
        "issue_name": "Navel Orangeworm",
        "type": "Insect-Pest",
        "hindi_name": "नाभि नारंगी कृमि",
        "symptoms": "Bores into early split nuts, webbing and frass.",
        "favorable_weather": "During hull split.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest, winter sanitation.",
            "biological_spray": "Bt.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at beginning of hull split."
          }
        }
      },
      {
        "issue_name": "Botryosphaeria Blight",
        "type": "Fungal",
        "hindi_name": "बोट्रियोस्फेरिया झुलसा",
        "symptoms": "Black lesions on fruit, rachis, and shoots.",
        "favorable_weather": "Warm and wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune out diseased wood.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Orchard sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole + Trifloxystrobin",
            "commercial_reference": "Nativo",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "150g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at bloom and early summer."
          }
        }
      },
      {
        "issue_name": "Alternaria Late Blight",
        "type": "Fungal",
        "hindi_name": "ऑल्टरनेरिया पछेती झुलसा",
        "symptoms": "Black circular spots on leaves and hulls.",
        "favorable_weather": "High humidity late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve airflow, reduce weed cover.",
            "biological_spray": "Trichoderma harzianum.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Pyraclostrobin 20% WG",
            "commercial_reference": "Cabrio",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Apply mid to late summer."
          }
        }
      },
      {
        "issue_name": "Aflatoxin (Aspergillus)",
        "type": "Fungal",
        "hindi_name": "एफ्लाटॉक्सिन",
        "symptoms": "Molds infect split nuts, producing toxins.",
        "favorable_weather": "Delay in harvest, insect damage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prompt harvest and drying. Control NOW (Navel Orangeworm).",
            "biological_spray": "Atoxigenic Aspergillus strains (AF36).",
            "mechanical": "Sorting."
          },
          "chemical_curative": {
            "active_ingredient": "None direct for toxin",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Focus on pest control to prevent fungal entry."
          }
        }
      },
      {
        "issue_name": "Stink Bugs",
        "type": "Insect-Pest",
        "hindi_name": "स्टिंक बग",
        "symptoms": "Epicarp lesion (dark sunken spots on hull) and kernel necrosis.",
        "favorable_weather": "Weedy orchards.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Neem oil.",
            "mechanical": "Trap crops."
          },
          "chemical_curative": {
            "active_ingredient": "Bifenthrin 10% EC",
            "commercial_reference": "Talstar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray when bugs migrate to trees."
          }
        }
      }
    ]
  },
  {
    "crop_id": "hazelnut",
    "common_name": "Hazelnut / Filbert",
    "hindi_name": "हेजलनट",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning. Catkins develop."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollination in winter."
      },
      {
        "stage_name": "Leaf Out & Nut Set",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Fertilization happens months after pollination."
      },
      {
        "stage_name": "Nut Development",
        "day_range": "Jun-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Kernel fill. Keep watered."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nuts fall to ground. Harvest promptly."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 80kg, P: 30kg, K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale small leaves, short shoot growth.",
          "solution": "Apply Urea split in spring."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorched leaf margins.",
          "solution": "MOP application in fall or spring."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Blank nuts (shells with no kernel).",
          "solution": "Foliar Solubor @ 200g/acre mid-May."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Epsom salt foliar spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Delayed bud break, small leaves.",
          "solution": "Zinc Sulphate foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Eastern Filbert Blight",
        "type": "Fungal",
        "hindi_name": "फ़िल्बर्ट ब्लाइट",
        "symptoms": "Black football-shaped stromata in rows on branches. Canopy dieback.",
        "favorable_weather": "Wet spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties. Prune 2-3 ft below cankers.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Burn infected wood."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "120 days",
            "application_instructions": "Spray at bud break and repeat at 2-week intervals."
          }
        }
      },
      {
        "issue_name": "Filbertworm",
        "type": "Insect-Pest",
        "hindi_name": "फ़िल्बर्ट वर्म",
        "symptoms": "Larvae bore into nuts and feed on kernels.",
        "favorable_weather": "Warm summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Trichogramma wasps.",
            "mechanical": "Pheromone traps to time sprays."
          },
          "chemical_curative": {
            "active_ingredient": "Esfenvalerate 5% EC",
            "commercial_reference": "Asana",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray 1-2 weeks after adult emergence peak."
          }
        }
      },
      {
        "issue_name": "Filbert Aphid",
        "type": "Insect-Pest",
        "hindi_name": "हेजलनट एफिड",
        "symptoms": "Honeydew, sooty mold, reduced nut size.",
        "favorable_weather": "Cool, moist spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Lady beetles.",
            "mechanical": "Water sprays."
          },
          "chemical_curative": {
            "active_ingredient": "Flonicamid 50% WG",
            "commercial_reference": "Ulala",
            "dose_per_15L_pump": "6g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "20 days",
            "application_instructions": "Apply when threshold is reached."
          }
        }
      },
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु झुलसा",
        "symptoms": "Buds and young shoots turn brown and die. Cankers.",
        "favorable_weather": "Wet autumn and spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Copper-based biologicals.",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Hydroxide 77% WP",
            "commercial_reference": "Kocide",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply late August and again at leaf fall."
          }
        }
      },
      {
        "issue_name": "Obliquebanded Leafroller",
        "type": "Insect-Pest",
        "hindi_name": "लीफ रोलर",
        "symptoms": "Webbed leaves, larvae feed on developing nuts.",
        "favorable_weather": "Spring and summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Monitor with pheromones.",
            "biological_spray": "Bt (Bacillus thuringiensis).",
            "mechanical": "Remove rolled leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray matching larval emergence."
          }
        }
      },
      {
        "issue_name": "Brown Marmorated Stink Bug",
        "type": "Insect-Pest",
        "hindi_name": "स्टिंक बग",
        "symptoms": "Corking in kernel, empty shells.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Trapping."
          },
          "chemical_curative": {
            "active_ingredient": "Bifenthrin 10% EC",
            "commercial_reference": "Talstar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Border sprays or full cover if high pressure."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pecan-nut",
    "common_name": "Pecan Nut",
    "hindi_name": "पीकान",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for flush."
      },
      {
        "stage_name": "Pollination",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Requires Type 1 and Type 2 trees."
      },
      {
        "stage_name": "Nut Sizing",
        "day_range": "May-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water directly determines nut size."
      },
      {
        "stage_name": "Kernel Filling",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water deficit here causes poor filling."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Shuck split. Shake trees."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 60-80kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, small narrow leaves, shoot dieback.",
          "solution": "Foliar Zinc Sulphate @ 2-3 times in spring."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Light green leaves, poor growth.",
          "solution": "Apply Urea split in spring/summer."
        },
        {
          "nutrient": "Nickel",
          "symptoms": "Mouse-ear disease (small, rounded leaflets).",
          "solution": "Foliar Nickel application in spring."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorched margins.",
          "solution": "MOP application to soil."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Epsom salt foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pecan Scab",
        "type": "Fungal",
        "hindi_name": "पीकान स्कैब",
        "symptoms": "Black velvety spots on leaves, twigs, and shucks. Nuts drop.",
        "favorable_weather": "Frequent rain, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune for airflow, plant resistant varieties.",
            "biological_spray": "Phosphite fungicides.",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole + Trifloxystrobin",
            "commercial_reference": "Nativo",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "150g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Apply from bud break until shell hardening."
          }
        }
      },
      {
        "issue_name": "Pecan Weevil",
        "type": "Insect-Pest",
        "hindi_name": "पीकान वीविल",
        "symptoms": "Adults puncture nuts to lay eggs. Grubs eat kernel, leave circular exit holes.",
        "favorable_weather": "Late summer following rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trunk traps (Circle traps).",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Shake trees to dislodge adults onto tarps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbaryl 50% WP",
            "commercial_reference": "Sevin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply when adults emerge (August)."
          }
        }
      },
      {
        "issue_name": "Pecan Nut Casebearer",
        "type": "Insect-Pest",
        "hindi_name": "केसबियरर",
        "symptoms": "Larvae bore into small nuts in early summer; frass at the base.",
        "favorable_weather": "Early summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt or Spinosad.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Methoxyfenozide 24% SC",
            "commercial_reference": "Intrepid",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Time with egg hatch."
          }
        }
      },
      {
        "issue_name": "Aphids (Yellow and Black)",
        "type": "Insect-Pest",
        "hindi_name": "माहू / एफिड",
        "symptoms": "Honeydew, sooty mold, premature defoliation (black aphids).",
        "favorable_weather": "Hot, dry summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Preserve natural enemies.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray if thresholds exceeded."
          }
        }
      },
      {
        "issue_name": "Fall Webworm",
        "type": "Insect-Pest",
        "hindi_name": "वेबवर्म",
        "symptoms": "Large silken webs covering branches; caterpillars feed inside.",
        "favorable_weather": "Late summer, autumn.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune out webs.",
            "biological_spray": "Bt.",
            "mechanical": "Break open webs with long pole."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "80g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray penetrating the webs."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी फफूंदी",
        "symptoms": "White powdery growth on nuts and leaves.",
        "favorable_weather": "High humidity, moderate temps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Sulfur.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Usually controlled by scab sprays."
          }
        }
      }
    ]
  },
  {
    "crop_id": "macadamia-nut",
    "common_name": "Macadamia Nut",
    "hindi_name": "मैकाडेमिया",
    "regional_names": {},
    "category": "Nut",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Flushing & Flowering",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Racemes develop."
      },
      {
        "stage_name": "Nut Set",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "High",
        "stage_advice": "High premature nut drop occurs here."
      },
      {
        "stage_name": "Nut Growth & Shell Hardening",
        "day_range": "Nov-Jan",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water stress reduces size and hardens shell."
      },
      {
        "stage_name": "Oil Accumulation",
        "day_range": "Feb-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Quality development."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Mar-Jul",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nuts drop continuously. Collect from ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 60kg, P: extremely low (sensitive to high P), K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Phosphorus toxicity",
          "symptoms": "Proteoid roots are highly efficient. High P causes iron deficiency (chlorosis).",
          "solution": "Avoid P fertilizers unless soil test indicates."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor yields.",
          "solution": "Urea @ small frequent doses."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorched margins.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small bunched leaves.",
          "solution": "Zinc Sulphate foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellow new leaves.",
          "solution": "Fe-EDTA spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Macadamia Nut Borer",
        "type": "Insect-Pest",
        "hindi_name": "नट बेधक",
        "symptoms": "Larvae bore into husks and nuts, causing premature drop.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Orchard hygiene.",
            "biological_spray": "Trichogramma wasps.",
            "mechanical": "Pheromone trapping."
          },
          "chemical_curative": {
            "active_ingredient": "Indoxacarb 14.5% SC",
            "commercial_reference": "Avaunt",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply at early nut set."
          }
        }
      },
      {
        "issue_name": "Stink Bugs",
        "type": "Insect-Pest",
        "hindi_name": "स्टिंक बग",
        "symptoms": "Kernel spotting, sunken pits, off-flavors.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Trap crops."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Targeted sprays."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scab on nuts, bronzing of flowers.",
        "favorable_weather": "Flowering period.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "N/A",
            "biological_spray": "Neem oil.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during flowering if severe."
          }
        }
      },
      {
        "issue_name": "Phytophthora Canker",
        "type": "Fungal",
        "hindi_name": "फाइटोफ्थोरा कैंकर",
        "symptoms": "Stem bleeding, cankers, tree decline.",
        "favorable_weather": "Poor drainage, heavy rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, avoid wounding trunk.",
            "biological_spray": "Trichoderma around roots.",
            "mechanical": "Scrape and paint cankers."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Trunk paint or soil drench."
          }
        }
      },
      {
        "issue_name": "Macadamia Felted Coccid",
        "type": "Insect-Pest",
        "hindi_name": "कोक्सिड (स्केल)",
        "symptoms": "White felt-like scales on branches, dieback.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Horticultural oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray targeting crawlers."
          }
        }
      },
      {
        "issue_name": "Blossom Blight",
        "type": "Fungal",
        "hindi_name": "बौर झुलसा",
        "symptoms": "Racemes turn brown and die, reducing yield.",
        "favorable_weather": "Wet weather during bloom.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at early bloom."
          }
        }
      }
    ]
  },
  {
    "crop_id": "brazil-nut",
    "common_name": "Brazil Nut",
    "hindi_name": "ब्राज़ील नट",
    "regional_names": {},
    "category": "Nut",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Flowering",
        "day_range": "Dry Season",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires specific large bees (Euglossine) for pollination."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "Rainy Season (14 months total)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pods take over a year to mature."
      },
      {
        "stage_name": "Maturation",
        "day_range": "Late Rainy Season",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Seeds develop inside woody capsule."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Heavy pods drop. Collected from forest floor."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-6.0",
      "basal_dose_per_acre": "Wild harvested mostly. NPK application rare in wild.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Slow growth.",
          "solution": "Organic mulch."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted seedlings.",
          "solution": "Rock phosphate."
        },
        {
          "nutrient": "Selenium",
          "symptoms": "Nuts are known to hyperaccumulate Selenium.",
          "solution": "Ensure soil Se levels if cultivated."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor pod fill.",
          "solution": "Potassium sulfate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Agouti Damage",
        "type": "Insect-Pest",
        "hindi_name": "कृंतक (Agouti)",
        "symptoms": "Rodents gnaw open fallen pods.",
        "favorable_weather": "N/A",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prompt harvest.",
            "biological_spray": "N/A",
            "mechanical": "Agoutis are necessary for seed dispersal; just harvest promptly."
          },
          "chemical_curative": {
            "active_ingredient": "None",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "N/A"
          }
        }
      },
      {
        "issue_name": "Pod Rot",
        "type": "Fungal",
        "hindi_name": "फली सड़ांध",
        "symptoms": "Pods rot on ground if left too long in humid conditions.",
        "favorable_weather": "High humidity, wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely collection.",
            "biological_spray": "N/A",
            "mechanical": "Dry pods quickly."
          },
          "chemical_curative": {
            "active_ingredient": "None",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "N/A"
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Spots on leaves in nurseries.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Copper.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Spray seedlings."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Attack dead wood and sometimes live bark.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove dead wood.",
            "biological_spray": "Beauveria.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Drench",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat termite mounds."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chestnut-sweet",
    "common_name": "Chestnut (Sweet)",
    "hindi_name": "शाहबलूत",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Winter",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Bud Break & Bloom",
        "day_range": "Late Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Blooms later than most nuts, avoiding frost."
      },
      {
        "stage_name": "Burr Formation",
        "day_range": "Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate water needed for burr size."
      },
      {
        "stage_name": "Nut Filling",
        "day_range": "Late Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for nut size."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Burrs open, nuts drop."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small nuts.",
          "solution": "MOP."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Epsom salts."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on alkaline soils.",
          "solution": "Lower pH, apply iron chelates."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor kernel development.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Chestnut Blight",
        "type": "Fungal",
        "hindi_name": "चेस्टनट ब्लाइट",
        "symptoms": "Cankers on bark, rapid death above canker.",
        "favorable_weather": "Wounds.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant hybrids.",
            "biological_spray": "Hypovirulent fungal strains applied to cankers.",
            "mechanical": "Prune below canker."
          },
          "chemical_curative": {
            "active_ingredient": "None effective once systemic",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Focus on resistant cultivars."
          }
        }
      },
      {
        "issue_name": "Chestnut Weevil",
        "type": "Insect-Pest",
        "hindi_name": "चेस्टनट वीविल",
        "symptoms": "Grubs inside nuts.",
        "favorable_weather": "Late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Daily harvest.",
            "biological_spray": "Nematodes in soil.",
            "mechanical": "Hot water treatment of nuts."
          },
          "chemical_curative": {
            "active_ingredient": "Carbaryl 50% WP",
            "commercial_reference": "Sevin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply when adults emerge."
          }
        }
      },
      {
        "issue_name": "Gall Wasp",
        "type": "Insect-Pest",
        "hindi_name": "गॉल वास्प",
        "symptoms": "Galls on twigs, reducing yield.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Torymus sinensis (parasitic wasp).",
            "mechanical": "Prune galls."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Systemic application."
          }
        }
      },
      {
        "issue_name": "Phytophthora Root Rot",
        "type": "Fungal",
        "hindi_name": "फाइटोफ्थोरा रूट रॉट",
        "symptoms": "Ink disease - black exudate from roots, tree death.",
        "favorable_weather": "Wet, poorly drained soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Well-drained sites.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl",
            "commercial_reference": "Ridomil",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "Soil drench",
            "waiting_period_phi": "30 days",
            "application_instructions": "Drench around base."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "एफिड",
        "symptoms": "Honeydew.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "N/A",
            "biological_spray": "Neem.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "60g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "माइट्स",
        "symptoms": "Bronzing of leaves.",
        "favorable_weather": "Hot, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Dust control.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propargite",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "250ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pine-nut",
    "common_name": "Pine Nut / Chilgoza",
    "hindi_name": "चिलगोज़ा",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Cone Initiation",
        "day_range": "Spring (Year 1)",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Female cones form."
      },
      {
        "stage_name": "Pollination",
        "day_range": "Summer (Year 1)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollinated."
      },
      {
        "stage_name": "Cone Growth",
        "day_range": "Year 2",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Slow growth."
      },
      {
        "stage_name": "Maturation",
        "day_range": "Autumn (Year 3)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cones mature and seeds (nuts) develop."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct (Year 3)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Collect cones before they open fully."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Forest crop; mostly unfertilized.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellow needles.",
          "solution": "Seldom applied in wild."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purplish needles.",
          "solution": "N/A"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Needle tip burn.",
          "solution": "N/A"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing older needles.",
          "solution": "N/A"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorotic new needles.",
          "solution": "N/A"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cone Borers",
        "type": "Insect-Pest",
        "hindi_name": "कोन बेधक",
        "symptoms": "Larvae bore into cones, destroying seeds.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy infested cones.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin (if cultivated)",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray during adult flight."
          }
        }
      },
      {
        "issue_name": "Pine Needle Scale",
        "type": "Insect-Pest",
        "hindi_name": "नीडल स्केल",
        "symptoms": "White scales on needles, loss of vigor.",
        "favorable_weather": "Warm dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "N/A",
            "biological_spray": "Horticultural oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Systemic soil drench."
          }
        }
      },
      {
        "issue_name": "Bark Beetles",
        "type": "Insect-Pest",
        "hindi_name": "छाल भृंग",
        "symptoms": "Boring into trunk, pitch tubes, tree death.",
        "favorable_weather": "Drought stress.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep trees watered and healthy.",
            "biological_spray": "N/A",
            "mechanical": "Remove dying trees."
          },
          "chemical_curative": {
            "active_ingredient": "Bifenthrin",
            "commercial_reference": "Talstar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "Trunk spray",
            "waiting_period_phi": "N/A",
            "application_instructions": "Preventative trunk spray."
          }
        }
      },
      {
        "issue_name": "Needle Blight",
        "type": "Fungal",
        "hindi_name": "नीडल झुलसा",
        "symptoms": "Browning and drop of needles.",
        "favorable_weather": "Wet spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Airflow.",
            "biological_spray": "Copper.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़ांध",
        "symptoms": "Tree decline, wilting.",
        "favorable_weather": "Waterlogged soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl",
            "commercial_reference": "Ridomil",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "Drench",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ginkgo-nut",
    "common_name": "Ginkgo Nut",
    "hindi_name": "जिंको",
    "regional_names": {},
    "category": "Nut",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaves emerge."
      },
      {
        "stage_name": "Pollination",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollination (dioecious trees)."
      },
      {
        "stage_name": "Seed Development",
        "day_range": "Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Seed and fleshy coat develop."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Smelly 'fruits' drop. Wear gloves to harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Highly adaptable. Low fertilizer needs.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Compost."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on highly alkaline soil.",
          "solution": "Iron chelates."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor seed fill.",
          "solution": "MOP."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Bone meal or SSP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Virtually Pest Free",
        "type": "Insect-Pest",
        "hindi_name": "कोई प्रमुख कीट नहीं",
        "symptoms": "Ginkgo is notoriously resistant to pests and diseases.",
        "favorable_weather": "N/A",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "General maintenance.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "None",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "N/A"
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "रूट रॉट",
        "symptoms": "Wilting if in standing water.",
        "favorable_weather": "Flooded conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "N/A",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Cultural control."
          }
        }
      },
      {
        "issue_name": "Nematodes",
        "type": "Nematode",
        "hindi_name": "निमेटोड",
        "symptoms": "Stunted seedlings in nurseries.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Soil solarization.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "Soil applied",
            "dose_per_acre": "1.5kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "लीफ स्पॉट",
        "symptoms": "Minor spotting late season.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake leaves.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "N/A",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Usually not required."
          }
        }
      }
    ]
  },
  {
    "crop_id": "water-chestnut",
    "common_name": "Water Chestnut / Singhara",
    "hindi_name": "सिंघाड़ा",
    "regional_names": {},
    "category": "Nut",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Nursery / Sprouting",
        "day_range": "Feb-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Stored nuts sprout in nursery ponds."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Vines planted in main ponds (1-1.5m water)."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Leaves cover the pond surface."
      },
      {
        "stage_name": "Flowering & Fruiting",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Flowers open above water, fruits develop underwater."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Dec",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Multiple pickings. Fruits turn dark."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5 (Pond mud)",
      "basal_dose_per_acre": "N: 30kg, P: 20kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, small vines.",
          "solution": "Neem coated urea in mud balls."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor fruiting.",
          "solution": "SSP basal in pond."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small fruits.",
          "solution": "MOP in mud."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on young leaves.",
          "solution": "Fe-EDTA foliar spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted leaves.",
          "solution": "Zinc Sulphate foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Singhara Beetle",
        "type": "Insect-Pest",
        "hindi_name": "सिंघाड़ा भृंग (Galerucella)",
        "symptoms": "Grubs and adults skeletonize leaves rapidly, reducing yield.",
        "favorable_weather": "Aug-Sep, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove water hyacinth (alternate host).",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Hand collection if scale is small."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray avoiding heavy pond contamination."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Clusters suck sap from leaves and stems. Sooty mold.",
        "favorable_weather": "Dry spells in monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "N/A",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Brown spots on leaves coalescing into blighted areas.",
        "favorable_weather": "Continuous rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate spacing.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on foliage."
          }
        }
      },
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फल सड़ांध",
        "symptoms": "Rotting of developing nuts underwater.",
        "favorable_weather": "Stagnant, dirty water.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain pond water quality.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray running off to pond surface slightly."
          }
        }
      },
      {
        "issue_name": "Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Feed on leaves and tender stems.",
        "favorable_weather": "Pond environment.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Introduce ducks if compatible.",
            "biological_spray": "N/A",
            "mechanical": "Manual collection."
          },
          "chemical_curative": {
            "active_ingredient": "Metaldehyde",
            "commercial_reference": "Snailkill",
            "dose_per_15L_pump": "Pellets",
            "dose_per_acre": "Broadcast",
            "waiting_period_phi": "N/A",
            "application_instructions": "Broadcast pellets cautiously."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Bores into the main aquatic stem.",
        "favorable_weather": "Summer/Monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "N/A",
            "mechanical": "Destroy infested vines."
          },
          "chemical_curative": {
            "active_ingredient": "Cartap Hydrochloride 4% GR",
            "commercial_reference": "Padan",
            "dose_per_15L_pump": "Broadcast",
            "dose_per_acre": "7.5kg",
            "waiting_period_phi": "30 days",
            "application_instructions": "Broadcast in pond."
          }
        }
      }
    ]
  }
]

with open(r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p6.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the existing JSON list
match = re.search(r'export const data = (\[.*\]);', content, re.DOTALL)
if match:
    existing_data_json = match.group(1)
    # This might have a trailing comma or comments, but json.loads might fail if keys are unquoted.
    # Fortunately the file is valid JSON inside the array.
    import json
    
    # We might need to handle JS formatting. Let's write a python parser or just use a dirty trick:
    # Use python's json.loads on the extracted string. Wait, it might have trailing commas.
    # Let's just use regex to remove trailing commas before passing to json.loads
    clean_json = re.sub(r',\s*}', '}', existing_data_json)
    clean_json = re.sub(r',\s*]', ']', clean_json)
    
    try:
        existing_crops = json.loads(clean_json)
    except Exception as e:
        # Fallback if json parsing fails: string manipulation
        # Find the last ']'
        last_bracket = content.rfind(']')
        new_content = content[:last_bracket].rstrip()
        if not new_content.endswith(','):
            new_content += ','
        
        # Serialize the new_crops to JS
        new_crops_js = json.dumps(new_crops, indent=2, ensure_ascii=False)
        # Strip the opening '[' and closing ']'
        new_crops_js = new_crops_js[1:-1]
        
        final_content = new_content + new_crops_js + '\n];\n'
        with open(r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p6.js', 'w', encoding='utf-8') as f2:
            f2.write(final_content)
        print("Done via string fallback")
        exit(0)
    
    # If JSON parsed successfully
    existing_crops.extend(new_crops)
    final_content = "export const data = " + json.dumps(existing_crops, indent=2, ensure_ascii=False) + ";\n"
    with open(r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p6.js', 'w', encoding='utf-8') as f2:
        f2.write(final_content)
    print("Done via JSON load/dump")
else:
    print("Could not find data array")
