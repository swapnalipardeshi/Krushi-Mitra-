export const data = [
  {
    "crop_id": "oil-palm",
    "common_name": "Oil Palm",
    "hindi_name": "ताड़ तेल (ऑयल पाम)",
    "regional_names": {
      "telugu": "ఆయిల్ పామ్",
      "kannada": "ಆಯಿಲ್ ಪಾಮ್",
      "tamil": "ஆயில் பாம்"
    },
    "category": "Oilseed",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Nursery Stage",
        "day_range": "0-365 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate shade and regular watering. Monitor for leaf spots and defoliators."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "365-400 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Plant in pits of 60x60x60 cm. Provide irrigation immediately after planting."
      },
      {
        "stage_name": "Juvenile Stage",
        "day_range": "1-3 years",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Focus on vegetative growth. Maintain weed-free basin and apply fertilizers regularly."
      },
      {
        "stage_name": "Pre-bearing Stage",
        "day_range": "3-4 years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical period for floral initiation. Ensure no moisture stress."
      },
      {
        "stage_name": "Bearing Stage",
        "day_range": "4-10 years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply adequate potash. Harvest ripe bunches every 10-14 days."
      },
      {
        "stage_name": "Peak Yield Stage",
        "day_range": "10-25 years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain robust irrigation and nutrition management. Regular scouting for Ganoderma and Rhinoceros beetle."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "FYM: 10 tons, N: 160 kg, P: 80 kg, K: 480 kg (per acre, applied in splits)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth, thin canopy.",
          "solution": "Apply Urea 500g/palm as a top dressing and ensure adequate moisture."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, reduced trunk girth, premature desiccation of older leaves.",
          "solution": "Apply Single Super Phosphate (SSP) 500g/palm in the basin."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Confluent orange spotting on older leaves, reduced bunch size.",
          "solution": "Apply Muriate of Potash (MOP) 1kg/palm in splits."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Orange frond disease; older leaves turn yellow/orange while veins remain green.",
          "solution": "Apply Magnesium Sulphate 500g/palm in the soil."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Little leaf, fish-bone like leaf appearance, crinkled leaves.",
          "solution": "Apply Borax 50-100g/palm in the basin."
        },
        {
          "nutrient": "Copper",
          "symptoms": "Mid-crown chlorosis, drying of leaflet tips.",
          "solution": "Apply Copper Sulphate 50g/palm."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Peat yellows, narrow leaflets, rosette appearance.",
          "solution": "Apply Zinc Sulphate 50g/palm."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-shaped cuts on fronds, bore holes on the crown, spathe damage.",
        "favorable_weather": "Humid conditions with abundant breeding material (decaying organic matter).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, destruction of breeding sites (dead palms, compost heaps).",
            "biological_spray": "Metarhizium anisopliae application in breeding sites.",
            "mechanical": "Use pheromone traps (Rhino lure) @ 1 trap/2 acres."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml (applied to crown)",
            "waiting_period_phi": "15 days",
            "application_instructions": "Pour the solution into the innermost leaf axils."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ घुन",
        "symptoms": "Holes in the stem with chewed up fibers and brownish fluid oozing out, drooping of leaves.",
        "favorable_weather": "Wounds on palms, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid mechanical injury to the stem, treat wounds immediately.",
            "biological_spray": "Entomopathogenic nematodes (Steinernema carpocapsae).",
            "mechanical": "Use RPW pheromone traps @ 1 trap/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "Root feeding or stem injection (10 ml per palm in 10 ml water).",
            "waiting_period_phi": "30 days",
            "application_instructions": "Inject the chemical into the stem at a 45-degree angle above the infested site."
          }
        }
      },
      {
        "issue_name": "Leaf Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती खाने वाली सुंडी",
        "symptoms": "Defoliation of lower whorl leaves, leaving only midribs.",
        "favorable_weather": "Dry weather followed by sudden rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove and burn heavily infested lower fronds.",
            "biological_spray": "Release larval parasitoids (Goniozus nephantidis, Bracon brevicornis).",
            "mechanical": "Light traps to attract moths."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "Root feeding 10 ml/palm.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Apply as root feeding or foliar spray on lower leaves if palms are short."
          }
        }
      },
      {
        "issue_name": "Ganoderma Basal Stem Rot",
        "type": "Fungal",
        "hindi_name": "गानोडर्मा जड़ सड़न",
        "symptoms": "Yellowing of outer whorl of leaves, rotting of roots and basal stem, appearance of brackets (fruiting bodies) at the base.",
        "favorable_weather": "High soil moisture, presence of old infected stumps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove old stumps, trenching around infected palms to prevent root contact.",
            "biological_spray": "Apply Trichoderma viride enriched neem cake @ 5 kg/palm/year.",
            "mechanical": "Remove and destroy diseased palms with boles and roots."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "Root feeding (3 ml + 100 ml water per palm).",
            "waiting_period_phi": "21 days",
            "application_instructions": "Root feeding through actively growing roots."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रॉट",
        "symptoms": "Yellowing and rotting of the spear leaf, foul smell from the rotting bud.",
        "favorable_weather": "High humidity, continuous rains, low temperature.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Provide good drainage, avoid dense planting.",
            "biological_spray": "Pseudomonas fluorescens spray.",
            "mechanical": "Remove affected tissues and apply Bordeaux paste."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "Pour 1% Bordeaux mixture or 3g/L Copper Oxychloride solution into the crown.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Pour the fungicidal solution directly onto the bud and innermost leaf bases."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown spots with yellow halos on older leaves, merging to form necrotic patches.",
        "favorable_weather": "High humidity, continuous rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate nutrition, particularly potassium.",
            "biological_spray": "Trichoderma spray.",
            "mechanical": "Remove and destroy severely affected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray ensuring complete coverage of both leaf surfaces."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Irregular dark brown leaf spots, often at the tips, which can dry up the leaves.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain spacing, avoid overhead irrigation in nurseries.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Pruning of infected fronds."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "150 g in 150L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Foliar spray at 15 days interval during severe infection."
          }
        }
      },
      {
        "issue_name": "Mealybugs",
        "type": "Insect-Pest",
        "hindi_name": "मीली बग",
        "symptoms": "White cottony masses on leaves and fruit bunches, sooty mold development on honeydew.",
        "favorable_weather": "Dry and warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control ant populations which protect mealybugs.",
            "biological_spray": "Lecanicillium lecanii @ 5g/L.",
            "mechanical": "Water spray to dislodge pests."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray focusing on the underside of leaves and fruit bunches."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coconut",
    "common_name": "Coconut",
    "hindi_name": "नारियल",
    "regional_names": {
      "malayalam": "തേങ്ങ (Thenga)",
      "tamil": "தேங்காய் (Thengai)",
      "kannada": "ತೆಂಗಿನಕಾಯಿ (Tenginakayi)",
      "telugu": "కొబ్బరి (Kobbari)",
      "marathi": "नारळ (Naral)"
    },
    "category": "Oilseed",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Nursery Stage",
        "day_range": "0-9 months",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain partial shade. Regular watering, protect from waterlogging."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "9-12 months",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Plant in 1x1x1m pits. Add FYM and neem cake. Provide initial shade and irrigation."
      },
      {
        "stage_name": "Juvenile Stage",
        "day_range": "1-4 years",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weed management is critical. Apply fertilizers in two splits (May-June and Sep-Oct)."
      },
      {
        "stage_name": "Pre-bearing Stage",
        "day_range": "4-6 years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Support robust vegetative growth. Monitor for Rhinoceros beetle damage on new fronds."
      },
      {
        "stage_name": "Bearing Stage",
        "day_range": "6-10 years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Initiation of nut bearing. Ensure consistent irrigation to prevent nut dropping."
      },
      {
        "stage_name": "Mature Peak Yield",
        "day_range": "10-60+ years",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Harvest mature nuts at 11-12 months. Regular application of organic manure and NPK."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.2-8.0",
      "basal_dose_per_acre": "Per palm/year: FYM 50kg, N: 500g, P: 320g, K: 1200g (apply in splits)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing of older leaves progressing to entire crown, reduced nut size.",
          "solution": "Apply Urea 1kg/palm/year in splits."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Restricted growth, fronds are shorter, delayed bearing.",
          "solution": "Apply SSP 2kg/palm/year."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing with necrotic spots on older leaves, dropping of immature nuts.",
          "solution": "Apply MOP 2kg/palm/year in splits."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of outer portions of leaflets while the midrib remains green.",
          "solution": "Apply Magnesium Sulphate 500g/palm/year."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Crown choking, failure of leaves to unfold properly, button shedding, barren nuts.",
          "solution": "Apply Borax 50g/palm in the basin."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting of leaves, smaller leaf size, chlorosis.",
          "solution": "Apply Zinc Sulphate 50g/palm/year."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "New leaves are malformed, necrotic tips.",
          "solution": "Apply Agricultural Lime or Dolomite 1kg/palm/year."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on younger leaves.",
          "solution": "Apply Ferrous Sulphate 50g/palm."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-shaped cuts on fronds, bore holes in the crown, spathe damage.",
        "favorable_weather": "Abundant breeding sites (cow dung pits, dead trunks).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field sanitation, treat compost pits with Metarhizium.",
            "biological_spray": "Metarhizium anisopliae application in manure pits.",
            "mechanical": "Use Rhino lure pheromone traps (1 trap/ha). Extract beetles with metal hooks."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "Crown application with sand.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Mix with sand and place in the innermost leaf axils."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ घुन",
        "symptoms": "Holes in the trunk with brownish ooze, chewing sound from inside the trunk, toppling of crown.",
        "favorable_weather": "Wounds on trunk, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid mechanical injuries to the stem, treat wounds with coal tar.",
            "biological_spray": "Steinernema carpocapsae nematodes.",
            "mechanical": "Red Palm Weevil pheromone trap @ 1 trap/ha."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "Root feeding (10 ml per palm).",
            "waiting_period_phi": "30 days",
            "application_instructions": "Root feeding: Select a healthy active root, make a slanting cut, insert into a polythene bag containing 10ml chemical + 10ml water."
          }
        }
      },
      {
        "issue_name": "Eriophyid Mite",
        "type": "Insect-Pest",
        "hindi_name": "इरिओफिड माइट",
        "symptoms": "Triangular pale yellow patches below the perianth, drying and turning brown, causing warts and longitudinal fissures on the nut.",
        "favorable_weather": "Dry spell after monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate irrigation and balanced fertilization (extra potassium).",
            "biological_spray": "Azadirachtin 10000 ppm @ 5 ml/L.",
            "mechanical": "Remove and destroy fallen infested nuts."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "Spot spray on bunches.",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray on the developing buttons and nuts."
          }
        }
      },
      {
        "issue_name": "Root (Wilt) Disease",
        "type": "Viral",
        "hindi_name": "रूट विल्ट",
        "symptoms": "Flaccidity (ribbing), yellowing, and necrosis of leaflets. Stunted growth, thinning of crown.",
        "favorable_weather": "Endemic areas, often associated with leaf rot.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use tolerant varieties, remove severely affected palms, intercropping.",
            "biological_spray": "Apply Trichoderma enriched organic manure to boost plant immunity.",
            "mechanical": "Eradicate severely diseased palms."
          },
          "chemical_curative": {
            "active_ingredient": "No direct chemical cure (Phytoplasma)",
            "commercial_reference": "Management focus",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Manage vector (lace bug) with appropriate insecticides and improve palm health through balanced nutrition (extra Magnesium)."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रॉट",
        "symptoms": "Yellowing of spindle leaf, rotting of the central bud causing foul odor, eventually the crown falls off.",
        "favorable_weather": "High humidity, heavy continuous rainfall, low temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Provide proper drainage, avoid dense planting.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected tissues completely and protect the wound."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "Application to crown.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Clean the infected part, apply 10% Bordeaux paste or drench crown with 3g/L COC."
          }
        }
      },
      {
        "issue_name": "Basal Stem Rot (Ganoderma)",
        "type": "Fungal",
        "hindi_name": "बेसल स्टेम रॉट (गानोडर्मा)",
        "symptoms": "Yellowing and drooping of outer fronds, root decay, reddish-brown exudate from the basal trunk, bracket fungi at the base.",
        "favorable_weather": "Moist soil, presence of rotting wood/stumps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching around affected palms (1m deep) to isolate roots.",
            "biological_spray": "Apply Neem cake 5kg + Trichoderma viride 50g per palm.",
            "mechanical": "Uproot and burn dead palms completely."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "Root feeding (3 ml/palm in 100ml water).",
            "waiting_period_phi": "21 days",
            "application_instructions": "Administer through root feeding at quarterly intervals."
          }
        }
      },
      {
        "issue_name": "Leaf Rot",
        "type": "Fungal",
        "hindi_name": "पत्ती सड़न",
        "symptoms": "Blackening and shriveling of distal ends of leaflets in the inner whorl, rotting of spindle leaf.",
        "favorable_weather": "High humidity, often secondary to root wilt.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve palm vigor.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/palm in leaf axils.",
            "mechanical": "Prune and burn the rotten portions of the spindle and adjacent leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "Crown application.",
            "waiting_period_phi": "14 days",
            "application_instructions": "Pour 3g/L solution into the innermost leaf axils."
          }
        }
      },
      {
        "issue_name": "Black-headed Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "काले सिर वाली सुंडी",
        "symptoms": "Caterpillars feed on the undersurface of leaflets inside silken galleries, leaves dry up.",
        "favorable_weather": "Dry and hot weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove and burn heavily infested lower fronds.",
            "biological_spray": "Release larval parasitoids (Goniozus nephantidis).",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "Root feeding 10ml/palm.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Root feeding or trunk injection. (Note: use safer alternatives where possible)."
          }
        }
      },
      {
        "issue_name": "Coreid Bug",
        "type": "Insect-Pest",
        "hindi_name": "कोरिड बग",
        "symptoms": "Punctures on buttons/young nuts causing black lesions, button shedding, barren nuts.",
        "favorable_weather": "Post-monsoon period.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control weaver ants which may protect bugs.",
            "biological_spray": "Neem oil 2% spray.",
            "mechanical": "Collection and destruction of bugs using sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray on the newly opened inflorescence and young bunches."
          }
        }
      },
      {
        "issue_name": "Nut Fall / Mahali Disease",
        "type": "Fungal",
        "hindi_name": "नट फॉल / महाली",
        "symptoms": "Water-soaked lesions on the nut surface, rotting and shedding of immature nuts.",
        "favorable_weather": "Heavy, continuous monsoon rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, clean the crown before monsoon.",
            "biological_spray": "Trichoderma spray.",
            "mechanical": "Collect and destroy fallen infected nuts."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "Crown and bunch spray.",
            "waiting_period_phi": "15 days",
            "application_instructions": "Apply 1% Bordeaux mixture or 3g/L COC as pre-monsoon and post-monsoon sprays."
          }
        }
      }
    ]
  },
  {
    "crop_id": "olive",
    "common_name": "Olive",
    "hindi_name": "जैतून",
    "regional_names": {
      "punjabi": "ਜ਼ੈਤੂਨ (Zaitun)",
      "marathi": "ऑलिव्ह (Olive)"
    },
    "category": "Oilseed",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth (Spring)",
        "day_range": "March - April",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate nitrogen for new shoot growth."
      },
      {
        "stage_name": "Floral Bud Development",
        "day_range": "April - May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for fruit set. Avoid water stress."
      },
      {
        "stage_name": "Flowering and Fruit Set",
        "day_range": "May - June",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Do not overhead irrigate during full bloom."
      },
      {
        "stage_name": "Fruit Development & Pit Hardening",
        "day_range": "July - September",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires consistent moisture to prevent fruit drop and optimize oil accumulation."
      },
      {
        "stage_name": "Ripening & Harvest",
        "day_range": "October - November",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation prior to harvest to concentrate oil content."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.5",
      "basal_dose_per_acre": "FYM: 5 tons, N: 40 kg, P: 20 kg, K: 30 kg (per acre/year)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves, poor shoot growth, low fruit set.",
          "solution": "Apply Urea 200-500g per tree depending on age."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf tip burn, reduced fruit size, low oil content.",
          "solution": "Apply Sulphate of Potash (SOP) 300g per tree."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Monkey face (deformed fruits), tip dieback, chlorotic leaf tips.",
          "solution": "Foliar spray of Boron (Solubor) @ 1.5g/L pre-bloom."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Apical necrosis in fruits, poor fruit quality.",
          "solution": "Apply Gypsum or Calcium Nitrate in soil."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes, chlorosis between veins.",
          "solution": "Foliar spray of Zinc Sulphate @ 2g/L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, premature leaf drop.",
          "solution": "Apply Magnesium Sulphate 100g/tree."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Olive Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "जैतून फल मक्खी",
        "symptoms": "Puncture marks on fruit, larvae feeding inside causing premature drop and reduced oil quality.",
        "favorable_weather": "Moderate temperatures, high humidity in late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest, remove remaining fruits post-harvest.",
            "biological_spray": "Spinosad bait sprays.",
            "mechanical": "McPhail traps or yellow sticky traps with pheromones."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "28 days",
            "application_instructions": "Bait spray application on part of the canopy."
          }
        }
      },
      {
        "issue_name": "Peacock Spot",
        "type": "Fungal",
        "hindi_name": "पीकॉक स्पॉट",
        "symptoms": "Dark green to black rings with yellow halos on upper leaf surfaces, causing defoliation.",
        "favorable_weather": "Cool, wet weather in autumn and spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning to improve canopy aeration.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove fallen infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "450 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply proactively in autumn before rains."
          }
        }
      },
      {
        "issue_name": "Verticillium Wilt",
        "type": "Fungal",
        "hindi_name": "वर्टिसिलियम विल्ट",
        "symptoms": "Sudden wilting and drying of branches (apoplexy) or slow decline with defoliation.",
        "favorable_weather": "Cool to moderate temperatures, wet soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant rootstocks, avoid intercropping with susceptible crops (tomato, potato), avoid waterlogging.",
            "biological_spray": "Trichoderma soil application.",
            "mechanical": "Prune out dead branches, solarize soil."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "Soil drench (300 g in 150L water)",
            "waiting_period_phi": "21 days",
            "application_instructions": "Soil drenching around the root zone, though chemical control is difficult once established."
          }
        }
      },
      {
        "issue_name": "Olive Moth (Prays oleae)",
        "type": "Insect-Pest",
        "hindi_name": "जैतून का कीट",
        "symptoms": "Damage to leaves (mining), flowers (webbing), and fruits (boring near the stem).",
        "favorable_weather": "Warm spring conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Monitor with pheromone traps.",
            "biological_spray": "Bacillus thuringiensis (Bt) during the flower generation.",
            "mechanical": "Pheromone disruption."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray targeting the fruit generation before larvae enter the fruit."
          }
        }
      },
      {
        "issue_name": "Olive Scale",
        "type": "Insect-Pest",
        "hindi_name": "जैतून का स्केल",
        "symptoms": "Small waxy bumps on twigs and leaves, purple spots on fruits, reduced vigor.",
        "favorable_weather": "Dry, warm climates.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies (Aphytis wasps).",
            "biological_spray": "Horticultural oil (Neem oil) sprays.",
            "mechanical": "Pruning to open canopy."
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "20 days",
            "application_instructions": "Apply when crawlers are active, often mixed with summer oil."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज (सोपी फ्रूट)",
        "symptoms": "Rotting of ripe fruits with orange gelatinous spore masses, mummy fruits.",
        "favorable_weather": "High humidity and rain near harvest.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest, proper pruning.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove mummy fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Preventative spray before autumn rains."
          }
        }
      },
      {
        "issue_name": "Olive Knot",
        "type": "Bacterial",
        "hindi_name": "जैतून गाँठ रोग",
        "symptoms": "Galls or knots on twigs, branches, and sometimes leaves/fruits.",
        "favorable_weather": "Wet weather with wounds from hail, frost, or pruning.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune during dry weather, disinfect tools.",
            "biological_spray": "None highly effective.",
            "mechanical": "Prune out galls well below the infection."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Hydroxide 77% WP",
            "commercial_reference": "Kocide",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray immediately after harvest or after weather damage (hail/frost)."
          }
        }
      }
    ]
  },
  {
    "crop_id": "tung-tree",
    "common_name": "Tung Tree",
    "hindi_name": "तुंग",
    "regional_names": {
      "assamese": "ಟುಂಗ್ (Tung)",
      "bengali": "তুং (Tung)"
    },
    "category": "Oilseed",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Nursery and Transplanting",
        "day_range": "1st Year",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires well-drained slightly acidic soil. Regular watering in the nursery."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Years 1-3",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Prune to establish a strong framework. Apply balanced NPK."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Spring (March-April)",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Late frosts can damage blossoms. Ensure adequate moisture."
      },
      {
        "stage_name": "Nut Development & Harvest",
        "day_range": "Autumn (September-November)",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Nuts drop when mature. Collect from the ground after they dry."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 20kg (apply in early spring)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale foliage, stunted growth, reduced nut yield.",
          "solution": "Apply Urea or Ammonium Nitrate in spring."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Bronzing of leaves, resetting, premature defoliation.",
          "solution": "Apply Zinc Sulphate in soil or as a foliar spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin necrosis, poor nut fill.",
          "solution": "Apply Muriate of Potash."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Apply Epsom salts (Magnesium Sulphate)."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Chlorotic spots between veins on new leaves.",
          "solution": "Foliar spray of Manganese Sulphate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Thread Blight",
        "type": "Fungal",
        "hindi_name": "थ्रेड ब्लाइट",
        "symptoms": "White fungal threads on twigs and leaves, causing leaves to turn brown and hang from branches.",
        "favorable_weather": "High humidity, warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for air circulation.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Remove and burn affected twigs."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "450 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray infected trees during early stages of disease."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves leading to premature defoliation.",
        "favorable_weather": "Humid and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Collection of fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "150 g in 150L water",
            "waiting_period_phi": "15 days",
            "application_instructions": "Foliar spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Wilting, yellowing of leaves, tree decline, rotting of roots.",
        "favorable_weather": "Poor drainage, waterlogged soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good soil drainage.",
            "biological_spray": "Trichoderma harzianum applied to soil.",
            "mechanical": "Uproot heavily infected trees."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "Soil drench (300 g in 150L water)",
            "waiting_period_phi": "21 days",
            "application_instructions": "Drench the root zone."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Bumps on twigs, yellowing of leaves, dieback of branches.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Monitor and prune infested branches.",
            "biological_spray": "Neem oil 2% spray.",
            "mechanical": "Scrubbing scales off light infestations."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray covering branches well."
          }
        }
      },
      {
        "issue_name": "Defoliating Caterpillars",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती खाने वाली सुंडी",
        "symptoms": "Chewed leaves, sometimes severe defoliation.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Encourage natural predators.",
            "biological_spray": "Bt (Bacillus thuringiensis) @ 2g/L.",
            "mechanical": "Handpick in early stages."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Durmet",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "20 days",
            "application_instructions": "Spray when caterpillars are observed."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jojoba",
    "common_name": "Jojoba",
    "hindi_name": "जोजोबा",
    "regional_names": {
      "rajasthani": "होहवा (Hohoba)",
      "gujarati": "જોજોબા (Jojoba)"
    },
    "category": "Oilseed",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Seedling/Establishment",
        "day_range": "0-12 months",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires deep well-drained soil. Irrigate to establish deep taproot."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Years 1-3",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant once established. Maintain weed-free environment."
      },
      {
        "stage_name": "Flowering (Winter/Spring)",
        "day_range": "December - March",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Dioecious plant; ensure male and female ratio (1:10). Frost can damage flowers."
      },
      {
        "stage_name": "Seed Development",
        "day_range": "Spring - Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Supplemental irrigation increases seed size and yield."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Summer (July - August)",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Seeds fall to the ground when ripe. Keep ground clean for easy sweeping."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.3-8.2",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 10kg (low requirement)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, slow growth.",
          "solution": "Apply small amounts of Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development in early stages.",
          "solution": "Basal application of SSP during planting."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in high pH soils.",
          "solution": "Foliar application of Iron Chelate (Fe-EDTA)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted new growth, small leaves.",
          "solution": "Foliar spray of Zinc Sulphate."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal leaf necrosis, reduced seed size.",
          "solution": "Apply SOP (MOP not recommended in saline areas)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Root Rot (Fusarium/Phytophthora)",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Wilting, dieback, death of the plant, especially in heavy or waterlogged soils.",
        "favorable_weather": "Over-irrigation, poor drainage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant on ridges, avoid heavy soils, do not over-water.",
            "biological_spray": "Trichoderma soil application.",
            "mechanical": "Remove dead plants."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "Soil drench (300 g/acre)",
            "waiting_period_phi": "21 days",
            "application_instructions": "Drench root zone of affected and adjacent plants."
          }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Dark brown spots on leaves, premature leaf drop.",
        "favorable_weather": "Occasional high humidity or unexpected rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good spacing for airflow.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None specific."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery or bronzed leaves, stunted new growth.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead sprinkling can reduce populations.",
            "biological_spray": "Neem oil 1500 ppm @ 5 ml/L.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on foliage, particularly new flush."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "White flies under leaves, yellowing, sooty mold on honeydew.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "150 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Wilting of plants, mud tubes on stems, roots eaten away.",
        "favorable_weather": "Dry sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use well-decomposed manure, avoid un-decomposed organics.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Destroy termite mounds."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Terminator",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "Soil drench (500 ml/acre)",
            "waiting_period_phi": "21 days",
            "application_instructions": "Drench the soil around the base of the plant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jatropha",
    "common_name": "Jatropha / Physic Nut",
    "hindi_name": "जट्रोफा (रतनजोत)",
    "regional_names": {
      "telugu": "అడవి ఆముదం (Adavi amudam)",
      "marathi": "मोगली एरंड (Mogli erand)"
    },
    "category": "Oilseed",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Nursery & Transplanting",
        "day_range": "0-3 months",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plant at onset of monsoon for best establishment."
      },
      {
        "stage_name": "Vegetative Growth & Pruning",
        "day_range": "Months 4-12",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune at 30-45 cm height to encourage branching. Highly drought tolerant."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Rainy Season",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Produces inflorescence terminally. Supplemental irrigation increases flower count."
      },
      {
        "stage_name": "Fruiting",
        "day_range": "Post-Monsoon",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruits mature in 2-3 months."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "Winter",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest yellow to brown capsules. Do not harvest green capsules."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "N: 40kg, P: 40kg, K: 20kg (per acre/year for yielding plants)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, stunted growth, lower seed yield.",
          "solution": "Apply Urea 100g/plant."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root establishment, delayed flowering.",
          "solution": "Apply SSP 150g/plant."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal leaf scorch, poor oil content.",
          "solution": "Apply MOP 50g/plant."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Apply Magnesium Sulphate 20g/plant."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, shortened internodes.",
          "solution": "Foliar spray of Zinc Sulphate (0.5%)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Scutellerid Bug (Jewel Bug)",
        "type": "Insect-Pest",
        "hindi_name": "ज्वेल बग",
        "symptoms": "Nymphs and adults suck sap from developing fruits causing seed abortion and premature fall.",
        "favorable_weather": "Fruiting season (Warm and humid).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management, collection and destruction of egg masses.",
            "biological_spray": "Neem oil 2% spray.",
            "mechanical": "Hand collection."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray focusing on fruit clusters."
          }
        }
      },
      {
        "issue_name": "Collar Rot / Root Rot",
        "type": "Fungal",
        "hindi_name": "कॉलर रॉट",
        "symptoms": "Rotting at the soil line, wilting, death of seedlings/plants.",
        "favorable_weather": "Waterlogged conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage, avoid deep planting.",
            "biological_spray": "Trichoderma harzianum at planting.",
            "mechanical": "Uproot dead plants."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "Soil drench (450 g/acre)",
            "waiting_period_phi": "21 days",
            "application_instructions": "Drench the base of affected and surrounding plants."
          }
        }
      },
      {
        "issue_name": "Leaf Webber/Miner",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती जाला कीट",
        "symptoms": "Leaves webbed together, caterpillars feed inside, leaf mines.",
        "favorable_weather": "Vegetative phase.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning and burning of webbed leaves.",
            "biological_spray": "Bt spray.",
            "mechanical": "Manual removal."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Bark Borer",
        "type": "Insect-Pest",
        "hindi_name": "छाल छेदक",
        "symptoms": "Frass and silk webbing on stems, boring into the stem causing branch dieback.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain plant vigor.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Remove frass and insert wire to kill larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "Cotton swab method",
            "dose_per_acre": "Spot treatment",
            "waiting_period_phi": "15 days",
            "application_instructions": "Clean the hole, insert cotton swab soaked in insecticide, seal with mud."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडर फफूंदी",
        "symptoms": "White powdery growth on leaves, defoliation.",
        "favorable_weather": "Cool, dry weather with high morning humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy by pruning.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Sulfur 80% WDG",
            "commercial_reference": "Sulfex",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "meadowfoam",
    "common_name": "Meadowfoam",
    "hindi_name": "मीडोफोम",
    "regional_names": {},
    "category": "Oilseed",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Sowing & Germination",
        "day_range": "Autumn",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires cool temperatures and moist soil to germinate."
      },
      {
        "stage_name": "Rosette Stage",
        "day_range": "Winter",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Overwinters as a rosette. Tolerant to poorly drained soils."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Relies heavily on bees for pollination. Avoid applying insecticides during bloom."
      },
      {
        "stage_name": "Seed Maturation & Harvest",
        "day_range": "Early Summer",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Swath and windrow when 90% of seeds are mature before combining."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 15kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, reduced biomass, poor seed yield.",
          "solution": "Apply Nitrogen in late winter before bolting."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, purpling of leaves.",
          "solution": "Apply at planting."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing of new leaves, reduced oil quality.",
          "solution": "Apply Ammonium Sulfate."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set, deformed flowers.",
          "solution": "Foliar spray of Boron pre-bloom."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Botrytis Blossom Blight",
        "type": "Fungal",
        "hindi_name": "बोट्राइटिस ब्लॉसम ब्लाइट",
        "symptoms": "Fuzzy gray mold on flowers, blossom abortion, reduced yield.",
        "favorable_weather": "Cool, wet weather during bloom.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen, ensure good plant spacing.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "150 g in 150L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply at early bloom if weather is conducive."
          }
        }
      },
      {
        "issue_name": "Meadowfoam Fly (Scaptomyza)",
        "type": "Insect-Pest",
        "hindi_name": "मीडोफोम मक्खी",
        "symptoms": "Larvae mine the stems and crowns, causing wilting and death of stems.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Neem based formulations.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "250 ml in 150L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Apply before bloom. NEVER apply during bloom to protect bees."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू (एफिड्स)",
        "symptoms": "Curled leaves, honeydew, sooty mold, stunted growth.",
        "favorable_weather": "Mild spring weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Encourage ladybugs and lacewings.",
            "biological_spray": "Neem oil 2% spray.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply pre-bloom."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Stunted plants, yellowing, rotting roots.",
        "favorable_weather": "Extremely waterlogged warm soils (though it tolerates winter water).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve field leveling.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 35% WS",
            "commercial_reference": "Apron",
            "dose_per_15L_pump": "Seed Treatment",
            "dose_per_acre": "6 g / kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before planting."
          }
        }
      }
    ]
  }
];
