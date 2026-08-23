export const data = [
  {
    "crop_id": "apple",
    "common_name": "Apple",
    "hindi_name": "सेब",
    "regional_names": {
      "marathi": "सफरचंद",
      "punjabi": "ਸੇਬ",
      "tamil": "ஆப்பிள்",
      "telugu": "ఆపిల్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Nov-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune trees, apply dormant sprays like dormant oil or lime sulfur."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen fertilizers. Monitor for early pests."
      },
      {
        "stage_name": "Pink Bud",
        "day_range": "April",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical time for scab control. Ensure adequate moisture."
      },
      {
        "stage_name": "Full Bloom",
        "day_range": "April-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Do not spray insecticides to protect pollinators. Avoid water stress."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Thin fruits if necessary. Apply micronutrients if deficient."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "June-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain regular irrigation. Monitor for codling moth and mites."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Oct",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity index. Avoid bruising."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10-15 tons, N:P:K 200:100:200 kg/ha equivalent",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves, reduced shoot growth, small fruits.",
          "solution": "Urea at 100g per 15L pump; soil application of 50kg Urea per acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Bitter pit on fruits (sunken brown spots), internal breakdown.",
          "solution": "Calcium Nitrate at 50g per 15L pump; 10kg per acre via fertigation."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting of leaves (little leaf), short internodes, chlorosis.",
          "solution": "Zinc Sulphate (21%) at 30g per 15L pump; 5kg per acre soil application."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Internal corking of fruits, cracking, dieback of shoots.",
          "solution": "Borax (20%) at 20g per 15L pump; 2kg per acre soil application."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on young leaves.",
          "solution": "Fe-EDTA at 20g per 15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin necrosis, poor fruit color and size.",
          "solution": "Sulfate of Potash (0-0-50) at 75g per 15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, early leaf drop.",
          "solution": "Magnesium Sulphate at 50g per 15L pump."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Interveinal chlorosis with green margins on mid-shoot leaves.",
          "solution": "Manganese Sulphate at 30g per 15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Apple Scab",
        "type": "Fungal",
        "hindi_name": "सेब का स्कैब",
        "symptoms": "Olive green to black velvety spots on leaves and fruits; fruit cracking.",
        "favorable_weather": "Cool, wet weather during spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune for air circulation, remove fallen leaves.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Orchard sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Difenoconazole 25% EC",
            "commercial_reference": "Score",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "100-150 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at silver tip, green tip, pink bud, and fruit set stages."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery fungal growth on twigs, leaves, and blossoms.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune infected shoots during dormancy.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Remove infected tips."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "300 ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at bud burst and repeat after 14 days."
          }
        }
      },
      {
        "issue_name": "Fire Blight",
        "type": "Bacterial",
        "hindi_name": "फायर ब्लाइट",
        "symptoms": "Blossoms, shoots, and branches turn black/brown and appear scorched by fire. Shepherd's crook symptom on shoots.",
        "favorable_weather": "Warm, rainy days during bloom.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen, sterilize pruning tools.",
            "biological_spray": "Bacillus subtilis 5g/L",
            "mechanical": "Prune infected branches 12 inches below visible symptoms."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate 9% + Tetracycline hydrochloride 1%",
            "commercial_reference": "Streptocycline",
            "dose_per_15L_pump": "1.5 g",
            "dose_per_acre": "30 g",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray during bloom if weather favors infection."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया ब्लाइट",
        "symptoms": "Small circular brown spots on leaves, premature defoliation.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good orchard ventilation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply at 15-day intervals upon symptom appearance."
          }
        }
      },
      {
        "issue_name": "Marssonina Blotch",
        "type": "Fungal",
        "hindi_name": "मार्सोनिना ब्लॉच",
        "symptoms": "Dark brown spots on leaves, yellowing and premature leaf fall.",
        "favorable_weather": "Prolonged rainfall in summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy fallen leaves.",
            "biological_spray": "Trichoderma harzianum 5g/L",
            "mechanical": "Orchard sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "600 g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray when symptoms appear, repeat after 15 days."
          }
        }
      },
      {
        "issue_name": "Woolly Apple Aphid",
        "type": "Insect-Pest",
        "hindi_name": "वूली एप्पल एफिड",
        "symptoms": "White cottony masses on branches and roots; gall formation on roots.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant rootstocks (Malling-Merton series).",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Scrub off colonies."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray directly on colonies. For roots, drenching is required."
          }
        }
      },
      {
        "issue_name": "Codling Moth",
        "type": "Insect-Pest",
        "hindi_name": "कोडलिंग मोथ",
        "symptoms": "Larvae tunnel into the fruit to feed on seeds, leaving frass at the entry/exit holes.",
        "favorable_weather": "Warm spring and summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Mating disruption using pheromones.",
            "biological_spray": "Bacillus thuringiensis (Bt) 2g/L",
            "mechanical": "Trunk banding, pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at egg hatching based on trap catches."
          }
        }
      },
      {
        "issue_name": "San Jose Scale",
        "type": "Insect-Pest",
        "hindi_name": "सैन जोस स्केल",
        "symptoms": "Ash-grey encrustations on bark, red spots on fruits and leaves, dieback of twigs.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper pruning to ensure spray coverage.",
            "biological_spray": "Neem oil 10000 ppm 3ml/L",
            "mechanical": "Scrub affected bark."
          },
          "chemical_curative": {
            "active_ingredient": "Horticultural Mineral Oil (HMO) / Dormant Oil",
            "commercial_reference": "Tree Spray Oil",
            "dose_per_15L_pump": "300 ml",
            "dose_per_acre": "6-8 L",
            "waiting_period_phi": "0 days",
            "application_instructions": "Apply exclusively during dormant stage (late winter)."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in the trunk/branches with extruded frass/sawdust.",
        "favorable_weather": "Warm dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain tree health, paint trunks with Bordeaux paste.",
            "biological_spray": "Beauveria bassiana drenching",
            "mechanical": "Insert wire into holes to kill grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "Injection only",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "21 days",
            "application_instructions": "Inject 5ml of 0.1% solution into holes and plug with mud."
          }
        }
      },
      {
        "issue_name": "Tent Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "टेंट कैटरपिलर",
        "symptoms": "Silken webs/tents in branch crotches; defoliation.",
        "favorable_weather": "Early spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove egg masses in winter.",
            "biological_spray": "Bacillus thuringiensis 2g/L",
            "mechanical": "Prune and destroy tents."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when caterpillars are young."
          }
        }
      },
      {
        "issue_name": "European Red Mite",
        "type": "Insect-Pest",
        "hindi_name": "लाल मकड़ी",
        "symptoms": "Leaves turn bronze/brown, reduced photosynthesis and fruit size.",
        "favorable_weather": "Hot and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predatory mites.",
            "biological_spray": "Neem oil 1500 ppm 5ml/L",
            "mechanical": "Water sprays to dislodge mites."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "7 days",
            "application_instructions": "Ensure thorough coverage of leaf undersides."
          }
        }
      },
      {
        "issue_name": "Root Rot (Collar Rot)",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Bark peeling at the collar region, yellowing of canopy, tree death.",
        "favorable_weather": "Waterlogged soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, avoid planting too deep.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Scrape diseased bark and apply Bordeaux paste."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "1 kg (drenching)",
            "waiting_period_phi": "30 days",
            "application_instructions": "Drench soil around the collar region."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pear",
    "common_name": "Pear",
    "hindi_name": "नाशपाती",
    "regional_names": {
      "marathi": "नाशपाती",
      "punjabi": "ਨਾਸ਼ਪਾਤੀ",
      "tamil": "பேரிக்காய்",
      "telugu": "పియర్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning, dormant sprays."
      },
      {
        "stage_name": "Bud Burst to White Bud",
        "day_range": "March",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen and early fungicides."
      },
      {
        "stage_name": "Bloom",
        "day_range": "April",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect from frost, avoid insecticides to save bees."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation and nutrient management."
      },
      {
        "stage_name": "Fruit Growth",
        "day_range": "June-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture, monitor psylla."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Oct",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest slightly green for European pears to ripen off-tree."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 150:75:150 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, poor growth.",
          "solution": "Urea 100g/15L foliar spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis of young leaves (common in alkaline soils).",
          "solution": "Fe-EDDHA 5kg/acre soil application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, small leaves.",
          "solution": "Zinc Sulphate 30g/15L foliar spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Blossom blast, corky spots in fruit.",
          "solution": "Borax 20g/15L spray before bloom."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Alfalfa greening, cork spot.",
          "solution": "Calcium Nitrate 50g/15L foliar spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf scorch, small fruits.",
          "solution": "MOP 30kg/acre soil application."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Chlorosis on older leaves.",
          "solution": "Magnesium Sulphate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fire Blight",
        "type": "Bacterial",
        "hindi_name": "फायर ब्लाइट",
        "symptoms": "Scorched appearance of blossoms and shoots.",
        "favorable_weather": "Warm and wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, strict sanitation.",
            "biological_spray": "Bacillus subtilis",
            "mechanical": "Prune out strikes."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate 9% + Tetracycline hydrochloride 1%",
            "commercial_reference": "Streptocycline",
            "dose_per_15L_pump": "1.5 g",
            "dose_per_acre": "30 g",
            "waiting_period_phi": "30 days",
            "application_instructions": "Apply during bloom if conditions favor infection."
          }
        }
      },
      {
        "issue_name": "Pear Scab",
        "type": "Fungal",
        "hindi_name": "नाशपाती का स्कैब",
        "symptoms": "Velvety dark spots on leaves and fruit.",
        "favorable_weather": "Wet spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove fallen leaves.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Orchard sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Difenoconazole 25% EC",
            "commercial_reference": "Score",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "100-150 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray from bud burst to fruit set."
          }
        }
      },
      {
        "issue_name": "Pear Psylla",
        "type": "Insect-Pest",
        "hindi_name": "नाशपाती सिला",
        "symptoms": "Honeydew on leaves, sooty mold, defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "100 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray upon noticing nymphs."
          }
        }
      },
      {
        "issue_name": "Codling Moth",
        "type": "Insect-Pest",
        "hindi_name": "कोडलिंग मोथ",
        "symptoms": "Worms in fruit.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Mating disruption.",
            "biological_spray": "Bt 2g/L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray based on trap catch thresholds."
          }
        }
      }
    ]
  },
  {
    "crop_id": "quince",
    "common_name": "Quince",
    "hindi_name": "श्रीफल",
    "regional_names": {
      "marathi": "श्रीफल",
      "punjabi": "ਬੀਹੀ",
      "tamil": "குயின்ஸ்",
      "telugu": "క్విన్స్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Winter pruning."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spring fertilization."
      },
      {
        "stage_name": "Flowering",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Jun-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Thinning, irrigation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest when fruit turns golden yellow."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 8 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis on new leaves.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, stunted growth.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit spot.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Internal browning.",
          "solution": "Borax 20g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Quince Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Dark brown spots on leaves and fruit.",
        "favorable_weather": "Wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake up leaves.",
            "biological_spray": "Trichoderma 5g/L",
            "mechanical": "Prune for airflow."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray early in the season."
          }
        }
      },
      {
        "issue_name": "Codling Moth",
        "type": "Insect-Pest",
        "hindi_name": "कोडलिंग मोथ",
        "symptoms": "Larvae tunnel into fruit.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone disruption.",
            "biological_spray": "Bt 2g/L",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Target hatching larvae."
          }
        }
      }
    ]
  },
  {
    "crop_id": "medlar",
    "common_name": "Medlar",
    "hindi_name": "मेडलर",
    "regional_names": {
      "marathi": "मेडलर",
      "punjabi": "ਮੈਡਲਰ",
      "tamil": "மெட்லர்",
      "telugu": "మెడ్లార్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning dead wood."
      },
      {
        "stage_name": "Bloom",
        "day_range": "May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pollination."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "Jun-Sep",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moderate irrigation."
      },
      {
        "stage_name": "Bletting (Harvest)",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest after first frost; allow to soften (blet)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K 80:40:80 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burn.",
          "solution": "MOP 20kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Poor fruit keeping quality.",
          "solution": "Calcium Nitrate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "लीफ स्पॉट",
        "symptoms": "Spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clear debris.",
            "biological_spray": "Trichoderma 5g/L",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray if symptoms severe."
          }
        }
      }
    ]
  },
  {
    "crop_id": "peach",
    "common_name": "Peach",
    "hindi_name": "आड़ू",
    "regional_names": {
      "marathi": "पीच",
      "punjabi": "ਆੜੂ",
      "tamil": "பீச்",
      "telugu": "పీచు"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Heavy pruning (open center system), apply dormant sprays."
      },
      {
        "stage_name": "Bud Swell to Bloom",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for peach leaf curl control."
      },
      {
        "stage_name": "Fruit Set & Pit Hardening",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Fruit thinning is essential. Maintain moisture."
      },
      {
        "stage_name": "Final Swell",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "High water and potassium demand."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at firm-ripe stage."
      },
      {
        "stage_name": "Post-Harvest",
        "day_range": "Aug-Oct",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain foliage health for next year's bud development."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, reddish spots, stunted shoots.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf rolling, margin necrosis, small poorly colored fruits.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, rosetting.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing between veins of new leaves.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Misshapen fruit, twig dieback.",
          "solution": "Borax 20g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Soft fruits, split pits.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Older leaves turn yellow with V-shaped green area at base.",
          "solution": "Magnesium Sulphate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Peach Leaf Curl",
        "type": "Fungal",
        "hindi_name": "पीच लीफ कर्ल",
        "symptoms": "Leaves become thickened, puckered, curled, and turn red/purple.",
        "favorable_weather": "Cool, wet weather during bud break.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Must be prevented before bud swell.",
            "biological_spray": "Lime sulfur application in winter.",
            "mechanical": "Remove infected leaves if few."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "1 kg",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply during dormancy before bud swell."
          }
        }
      },
      {
        "issue_name": "Brown Rot",
        "type": "Fungal",
        "hindi_name": "ब्राउन रॉट",
        "symptoms": "Brown rotting of blossoms, twigs, and fruits; ashy grey spore masses.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove mummified fruits.",
            "biological_spray": "Bacillus subtilis",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at bloom and 3 weeks before harvest."
          }
        }
      },
      {
        "issue_name": "Peach Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruit, causing rotting.",
        "favorable_weather": "Warm weather near ripening.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Bait sprays, field sanitation.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Methyl eugenol traps (10/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at color break stage."
          }
        }
      },
      {
        "issue_name": "Shot Hole",
        "type": "Fungal",
        "hindi_name": "शॉट होल",
        "symptoms": "Small purplish spots on leaves that drop out, leaving 'shot holes'.",
        "favorable_weather": "Wet spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for air flow.",
            "biological_spray": "Trichoderma viride",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray post-bloom."
          }
        }
      }
    ]
  },
  {
    "crop_id": "nectarine",
    "common_name": "Nectarine",
    "hindi_name": "नेक्टरीन",
    "regional_names": {
      "marathi": "नेक्टराइन",
      "punjabi": "ਨੈਕਟਰੀਨ",
      "tamil": "நெக்டரைன்",
      "telugu": "నెక్టరైన్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning, dormant sprays."
      },
      {
        "stage_name": "Bud Swell",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spray for leaf curl."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frost protection."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Thinning is critical."
      },
      {
        "stage_name": "Fruit Swell",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation and K fertilizer."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jun-Aug",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Careful handling to avoid skin damage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small fruit, leaf scorch.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking.",
          "solution": "Borax 20g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Soft fruit.",
          "solution": "Calcium Nitrate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Brown Rot",
        "type": "Fungal",
        "hindi_name": "ब्राउन रॉट",
        "symptoms": "Rotting of fruit.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Bacillus subtilis",
            "mechanical": "Remove mummies."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray near maturity."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scarring on smooth fruit skin.",
        "favorable_weather": "Warm, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Neem oil",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "9 ml",
            "dose_per_acre": "120 ml",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray at petal fall."
          }
        }
      }
    ]
  },
  {
    "crop_id": "plum",
    "common_name": "Plum",
    "hindi_name": "आलूबुखारा",
    "regional_names": {
      "marathi": "प्लम",
      "punjabi": "ਅਲੂਚਾ",
      "tamil": "பிளம்",
      "telugu": "ప్లమ్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Bud Burst",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Fungicide application."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Pollinator management."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Thinning if necessary."
      },
      {
        "stage_name": "Fruit Enlargement",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate irrigation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burn.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit cracking.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Gum pockets in fruit.",
          "solution": "Borax 20g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Canker",
        "type": "Bacterial",
        "hindi_name": "बैक्टीरियल कैंकर",
        "symptoms": "Gummosis on trunks, blighted blossoms.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune in dry weather.",
            "biological_spray": "Bacillus subtilis",
            "mechanical": "Excise cankers."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45 g",
            "dose_per_acre": "1 kg",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray during leaf fall and bud swell."
          }
        }
      },
      {
        "issue_name": "Plum Curculio",
        "type": "Insect-Pest",
        "hindi_name": "प्लम करक्यूलियो",
        "symptoms": "Crescent-shaped scars on fruit.",
        "favorable_weather": "Warm spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean up dropped fruit.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Jarring trees."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "100 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at petal fall."
          }
        }
      }
    ]
  },
  {
    "crop_id": "apricot",
    "common_name": "Apricot",
    "hindi_name": "खूबानी",
    "regional_names": {
      "marathi": "जरदाळू",
      "punjabi": "ਖੁਰਮਾਨੀ",
      "tamil": "ஆப்ரிகாட்",
      "telugu": "ఆప్రికాట్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Very susceptible to spring frost."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation and nutrition."
      },
      {
        "stage_name": "Fruit Enlargement",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress."
      },
      {
        "stage_name": "Harvest",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest mature fruits."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Poor growth.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf edge scorch.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Internal browning.",
          "solution": "Borax 20g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Soft fruit.",
          "solution": "Calcium Nitrate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Coryneum Blight",
        "type": "Fungal",
        "hindi_name": "कोरीनियम ब्लाइट",
        "symptoms": "Shot hole appearance on leaves, spots on fruit.",
        "favorable_weather": "Wet spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Trichoderma",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at shuck fall."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sweet-cherry",
    "common_name": "Sweet Cherry",
    "hindi_name": "शेरी/चेरी",
    "regional_names": {
      "marathi": "चेरी",
      "punjabi": "ਚੈਰੀ",
      "tamil": "செர்ரி",
      "telugu": "చెర్రీ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune lightly."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Needs cross-pollinators."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "April",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation."
      },
      {
        "stage_name": "Fruit Coloring",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect from birds and rain (cracking)."
      },
      {
        "stage_name": "Harvest",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest with stems."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit cracking.",
          "solution": "Calcium Chloride foliar sprays to reduce cracking."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit size.",
          "solution": "Sulfate of Potash 75g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cherry Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "चेरी फल मक्खी",
        "symptoms": "Maggots in fruit.",
        "favorable_weather": "Warm spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Trapping."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray early before coloring."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sour-cherry",
    "common_name": "Sour Cherry",
    "hindi_name": "खट्टी चेरी",
    "regional_names": {
      "marathi": "आंबट चेरी",
      "punjabi": "ਖੱਟੀ ਚੈਰੀ",
      "tamil": "புளிப்பு செர்ரி",
      "telugu": "పుల్లని చెర్రీ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Bloom",
        "day_range": "April",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Self-fertile usually."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation."
      },
      {
        "stage_name": "Ripening",
        "day_range": "June",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Netting for birds."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Mechanical or manual."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 80:40:80 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Soft fruit.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin necrosis.",
          "solution": "MOP 30kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cherry Leaf Spot",
        "type": "Fungal",
        "hindi_name": "लीफ स्पॉट",
        "symptoms": "Purple spots on leaves, early defoliation.",
        "favorable_weather": "Wet spring/summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Trichoderma",
            "mechanical": "Remove fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Myclobutanil 10% WP",
            "commercial_reference": "Systhane",
            "dose_per_15L_pump": "10 g",
            "dose_per_acre": "150 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray starting petal fall."
          }
        }
      }
    ]
  },
  {
    "crop_id": "damson",
    "common_name": "Damson",
    "hindi_name": "डैम्सन",
    "regional_names": {
      "marathi": "डॅमसन",
      "punjabi": "ਡੈਮਸਨ",
      "tamil": "டாம்சன்",
      "telugu": "డామ్సన్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Bloom",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Pollination."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "May-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Used mostly for processing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 8 tons, N:P:K 80:40:80 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale foliage.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor sizing.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Gumming.",
          "solution": "Borax 20g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curled leaves, honeydew.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ladybugs.",
            "biological_spray": "Neem oil",
            "mechanical": "Water jet."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when colonies form."
          }
        }
      }
    ]
  },
  {
    "crop_id": "persimmon",
    "common_name": "Persimmon",
    "hindi_name": "तेंदू/जापानी फल",
    "regional_names": {
      "marathi": "परसिमोन",
      "punjabi": "ਜਾਪਾਨੀ ਫਲ",
      "tamil": "பெர்சிமன்",
      "telugu": "పెర్సిమోన్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Jan-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning, avoid severe cuts."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Fertilization."
      },
      {
        "stage_name": "Flowering",
        "day_range": "May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation."
      },
      {
        "stage_name": "Fruit Growth",
        "day_range": "Jun-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Prevent water stress to avoid fruit drop."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest with calyx intact."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 80:40:80 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellow leaves, fruit drop.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin necrosis.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Manganese Sulphate 30g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit softening early.",
          "solution": "Calcium Nitrate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Persimmon Psylla",
        "type": "Insect-Pest",
        "hindi_name": "परसिमोन सिला",
        "symptoms": "Leaf rolling, stunting.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predators.",
            "biological_spray": "Neem oil",
            "mechanical": "Sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "100 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on seeing nymphs."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pomegranate",
    "common_name": "Pomegranate",
    "hindi_name": "अनार",
    "regional_names": {
      "marathi": "डाळिंब",
      "punjabi": "ਅਨਾਰ",
      "tamil": "மாதுளை",
      "telugu": "దానిమ్మ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Bahar Treatment (Stress)",
        "day_range": "Variable",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold water to induce defoliation for synchronized flowering."
      },
      {
        "stage_name": "Defoliation & Pruning",
        "day_range": "Variable",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Apply Ethrel for defoliation, prune dead/diseased wood."
      },
      {
        "stage_name": "Bud Initiation",
        "day_range": "Post-stress",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Resume light irrigation and apply basal dose."
      },
      {
        "stage_name": "Flowering",
        "day_range": "30-45 days post stress",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid heavy irrigation to prevent flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "45-60 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Foliar nutrition and pest management."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "60-120 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Regular fertigation. Maintain uniform moisture to prevent cracking."
      },
      {
        "stage_name": "Harvest",
        "day_range": "150-180 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest when rind color changes and calyx turns inward."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10-15 tons, N:P:K 250:125:250 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of entire leaves, stunted growth.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green to purplish leaves, delayed maturity.",
          "solution": "DAP soil application or 12:61:00 75g/15L foliar."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching, small arils, poor rind color.",
          "solution": "Sulfate of Potash (0-0-50) 75g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit cracking, poor keeping quality.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking, internal browning.",
          "solution": "Borax (20%) 20g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis of young leaves.",
          "solution": "Fe-EDDHA soil application or Fe-EDTA 20g/15L foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis of older leaves.",
          "solution": "Magnesium Sulphate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight (Oily Spot)",
        "type": "Bacterial",
        "hindi_name": "बैक्टीरियल ब्लाइट (तेल्या)",
        "symptoms": "Water-soaked dark spots on leaves, stems, and fruits. Y-shaped cracks on fruit.",
        "favorable_weather": "High humidity, rainfall, moderate temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Strict sanitation, avoid rainy season bahar (Mrig bahar).",
            "biological_spray": "Bacillus subtilis 5g/L",
            "mechanical": "Prune and burn infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate + Copper Oxychloride",
            "commercial_reference": "Streptocycline + Blitox",
            "dose_per_15L_pump": "1.5g + 45g",
            "dose_per_acre": "30g + 1kg",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray immediately after pruning and at 10-day intervals."
          }
        }
      },
      {
        "issue_name": "Cercospora Fruit Spot",
        "type": "Fungal",
        "hindi_name": "सार्कोस्पोरा स्पॉट",
        "symptoms": "Black spots on fruits causing market value loss.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Canopy management.",
            "biological_spray": "Trichoderma",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during fruit development."
          }
        }
      },
      {
        "issue_name": "Fruit Borer / Anar Butterfly",
        "type": "Insect-Pest",
        "hindi_name": "अनार की तितली",
        "symptoms": "Caterpillar bores into fruit and feeds on arils, causing rotting.",
        "favorable_weather": "Flowering to fruiting.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Bagging of fruits.",
            "biological_spray": "Bt 2g/L",
            "mechanical": "Remove and destroy damaged fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Cyantraniliprole 10.26% OD",
            "commercial_reference": "Benevia",
            "dose_per_15L_pump": "18 ml",
            "dose_per_acre": "360 ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray at flowering and fruit set."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उखटा रोग (विल्ट)",
        "symptoms": "Sudden yellowing and drying of leaves, root rotting (Ceratocystis fimbriata).",
        "favorable_weather": "Waterlogged soil, nematode infestation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control nematodes, avoid waterlogging.",
            "biological_spray": "Trichoderma harzianum drenching",
            "mechanical": "Uproot dead plants."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "500 ml (Drenching)",
            "waiting_period_phi": "30 days",
            "application_instructions": "Drench the root zone of affected and surrounding plants."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scraping on young fruits causing scabby brown patches.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "9 ml",
            "dose_per_acre": "120 ml",
            "waiting_period_phi": "7 days",
            "application_instructions": "Target early fruit set stage."
          }
        }
      },
      {
        "issue_name": "Shot Hole Borer",
        "type": "Insect-Pest",
        "hindi_name": "शॉट होल बोरर",
        "symptoms": "Tiny holes on stems/branches with powdery frass.",
        "favorable_weather": "Stressed plants.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain plant vigor.",
            "biological_spray": "Neem oil paste",
            "mechanical": "Prune infested branches."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "Swabbing",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "21 days",
            "application_instructions": "Swab the stem with 2ml/L solution."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fig",
    "common_name": "Fig",
    "hindi_name": "अंजीर",
    "regional_names": {
      "marathi": "अंजीर",
      "punjabi": "ਅੰਜੀਰ",
      "tamil": "அத்தி",
      "telugu": "అంజీర్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Dormancy & Pruning",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune to induce new growth."
      },
      {
        "stage_name": "New Flush",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply fertilizers."
      },
      {
        "stage_name": "Fruit Initiation",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid severe water stress."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest daily as fruits ripen quickly."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor growth.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor fruit size and sweetness.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Fruit splitting.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of older leaves.",
          "solution": "Magnesium Sulphate 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fig Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट (गेरुई)",
        "symptoms": "Small rust-colored spots on undersides of leaves, leading to defoliation.",
        "favorable_weather": "Humid, rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for aeration.",
            "biological_spray": "Trichoderma",
            "mechanical": "Remove fallen leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "800 g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems with frass.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain health.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Wire probing."
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "Injection",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "21 days",
            "application_instructions": "Inject into holes and seal with mud."
          }
        }
      }
    ]
  },
  {
    "crop_id": "loquat",
    "common_name": "Loquat",
    "hindi_name": "लोकाट",
    "regional_names": {
      "marathi": "लोकाट",
      "punjabi": "ਲੋਕਾਟ",
      "tamil": "லோக்வாட்",
      "telugu": "లోక్వాట్"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Jun-Aug",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Pruning and fertilization."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Oct-Dec",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect from frost."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "Jan-Feb",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation."
      },
      {
        "stage_name": "Fruit Growth",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nutrient sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest fully ripe."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 100:50:100 kg/ha",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea 100g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Small fruits.",
          "solution": "Sulfate of Potash 75g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Sunburn on fruit.",
          "solution": "Calcium Nitrate 50g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Fe-EDTA 20g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting.",
          "solution": "Zinc Sulphate 30g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Rotting fruits due to maggots.",
        "favorable_weather": "Warm spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Bagging.",
            "biological_spray": "Beauveria bassiana",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when fruits change color."
          }
        }
      }
    ]
  }
];
