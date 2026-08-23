/**
 * FRUITS — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: 87
 * Generated: 2026-08-22
 */

export const fruits = [
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
  },
{ stage_name: "Seedling / Nursery", day_range: "0-365", water_requirement_sensitivity: "High", stage_advice: "Ensure well-drained media. Protect from frost and excessive heat. Maintain optimum moisture to avoid damping off." },
  { stage_name: "Vegetative Growth (Pre-bearing)", day_range: "365-1095", water_requirement_sensitivity: "Medium", stage_advice: "Focus on canopy development. Apply balanced NPK and micronutrients. Prune to shape the tree structure." },
  { stage_name: "Flowering", day_range: "Spring/Ambe Bahar", water_requirement_sensitivity: "High", stage_advice: "Avoid moisture stress and heavy irrigation to prevent flower drop. Do not spray harsh chemicals during full bloom to protect pollinators." },
  { stage_name: "Fruit Set", day_range: "Post-bloom", water_requirement_sensitivity: "High", stage_advice: "Critical for fruit retention. Apply gibberellic acid if needed. Maintain uniform soil moisture." },
  { stage_name: "Fruit Development / Sizing", day_range: "Mid-season", water_requirement_sensitivity: "High", stage_advice: "Apply K and Ca to improve fruit size and rind quality. Regular irrigation prevents fruit splitting." },
  { stage_name: "Maturity and Harvesting", day_range: "Harvest", water_requirement_sensitivity: "Low", stage_advice: "Reduce irrigation slightly before harvest to improve TSS (Total Soluble Solids). Harvest at proper color break." }
];

const citrusStages5 = citrusStages6.slice(1);
const citrusStages4 = citrusStages6.slice(2);

const citrusDeficiencies8 = [
  { nutrient: "Nitrogen", symptoms: "Overall yellowing of older leaves, stunted growth, thin canopy, reduced fruit yield.", solution: "Urea @ 10-15g/liter or 500g-1kg per tree depending on age, or foliar spray of 19:19:19 @ 5g/liter (75g/15L pump, 1kg/acre)." },
  { nutrient: "Phosphorus", symptoms: "Bronzing or purpling of older leaves, thick-skinned puffy fruits with hollow centers.", solution: "Soil application of SSP @ 1-2 kg/tree. Foliar spray of 0:52:34 @ 5g/liter (75g/15L pump, 1kg/acre)." },
  { nutrient: "Potassium", symptoms: "Yellowing of leaf tips and margins. Fruits are small with very thin peel and prone to splitting.", solution: "Soil application of MOP or SOP @ 500g-1kg/tree. Foliar spray of 0:0:50 @ 5g/liter (75g/15L pump, 1kg/acre) during fruit development." },
  { nutrient: "Calcium", symptoms: "Yellowing along leaf margins in a V-shape. Increased fruit creasing and splitting.", solution: "Calcium Nitrate foliar spray @ 3-5g/liter (45-75g/15L pump, 500g-1kg/acre). Soil application of Gypsum." },
  { nutrient: "Magnesium", symptoms: "Distinct V-shaped yellowing leaving a green triangle at the base of the leaf along the midrib.", solution: "Magnesium Sulphate foliar spray @ 5g/liter (75g/15L pump, 1kg/acre). Soil application of MgSO4 @ 200-500g/tree." },
  { nutrient: "Zinc", symptoms: "Mottle leaf (interveinal chlorosis), small narrow leaves, short internodes (rosetting).", solution: "Zinc Sulphate (21% or 33%) foliar spray @ 2-3g/liter (30-45g/15L pump, 500g/acre) during flush." },
  { nutrient: "Iron", symptoms: "Severe interveinal chlorosis on young leaves, progressing to completely white/yellow leaves.", solution: "Foliar spray of Chelated Iron (Fe-EDTA/EDDHA 12%) @ 1-2g/liter (15-30g/15L pump, 250g/acre). Soil application of Fe-EDDHA for calcareous soils." },
  { nutrient: "Manganese", symptoms: "Diffuse interveinal chlorosis on young leaves, without size reduction (unlike zinc).", solution: "Manganese Sulphate foliar spray @ 2-3g/liter (30-45g/15L pump, 500g/acre)." }
];

const citrusDeficiencies7 = citrusDeficiencies8.slice(0, 7);
const citrusDeficiencies6 = citrusDeficiencies8.slice(0, 6);
const citrusDeficiencies5 = citrusDeficiencies8.slice(0, 5);

const citrusPests12 = [
  {
    issue_name: "Citrus Canker", type: "Bacterial", hindi_name: "सिट्रस कैंकर (नींबू का नासूर)",
    symptoms: "Cork-like, raised, brownish lesions with yellow halos on leaves, twigs, and fruits. Severe defoliation and fruit drop.",
    favorable_weather: "High rainfall, high humidity, and warm temperatures (20-30°C).",
    solutions: {
      organic_ipm: { preventive_measures: "Prune and burn infected twigs before monsoon. Use windbreaks.", biological_spray: "Bacillus subtilis @ 5g/L.", mechanical: "Sanitize pruning tools." },
      chemical_curative: { active_ingredient: "Streptomycin Sulphate + Tetracycline Hydrochloride (9:1) + Copper Oxychloride 50% WP", commercial_reference: "Streptocycline + Blitox", dose_per_15L_pump: "1.5g Strepto + 45g COC", dose_per_acre: "20g Strepto + 500g COC in 200L water", waiting_period_phi: "15 Days", application_instructions: "Spray 2-3 times at 15-day intervals starting pre-monsoon." }
    }
  },
  {
    issue_name: "Citrus Greening (HLB)", type: "Bacterial", hindi_name: "सिट्रस ग्रीनिंग",
    symptoms: "Asymmetrical mottling of leaves, yellow shoots, small lopsided fruits with inverted color break (green at stylar end). Bitter juice.",
    favorable_weather: "Year-round, spread by Asian Citrus Psyllid.",
    solutions: {
      organic_ipm: { preventive_measures: "Use disease-free nursery stock. Eradicate infected trees.", biological_spray: "Beauveria bassiana for vector control.", mechanical: "Yellow sticky traps for psyllid monitoring." },
      chemical_curative: { active_ingredient: "Imidacloprid 17.8% SL (Vector Control)", commercial_reference: "Confidor (for vector)", dose_per_15L_pump: "5ml (Imidacloprid)", dose_per_acre: "50-75ml in 200L water", waiting_period_phi: "21 Days", application_instructions: "Main strategy is controlling the vector (Psylla). Tree removal is only permanent cure." }
    }
  },
  {
    issue_name: "Phytophthora Foot Rot / Gummosis", type: "Fungal", hindi_name: "गमोसिस / तना गलन",
    symptoms: "Oozing of gum from the main trunk near the soil line, bark cracking, yellowing of foliage, eventual tree death.",
    favorable_weather: "Waterlogged soils, prolonged wet periods, high humidity.",
    solutions: {
      organic_ipm: { preventive_measures: "Avoid flooding near the trunk. Bud high (20-25cm above ground). Paint trunk with Bordeaux paste.", biological_spray: "Trichoderma viride @ 10g/L soil drench.", mechanical: "Scrape affected bark." },
      chemical_curative: { active_ingredient: "Metalaxyl 8% + Mancozeb 64% WP OR Fosetyl-Al 80% WP", commercial_reference: "Ridomil Gold, Aliette", dose_per_15L_pump: "30g (Ridomil) or 45g (Aliette)", dose_per_acre: "400g (Ridomil) or 600g (Aliette) as drench/spray", waiting_period_phi: "15 Days", application_instructions: "Scrape infected bark and apply Metalaxyl paste. Drench root zone." }
    }
  },
  {
    issue_name: "Citrus Psylla", type: "Insect-Pest", hindi_name: "सिट्रस सिल्ला (रस चूसक)",
    symptoms: "Nymphs and adults suck sap from new flush, causing leaf curling and stunting. Excrete honeydew leading to sooty mould. Vector of Greening disease.",
    favorable_weather: "Spring and early summer during new flush emergence.",
    solutions: {
      organic_ipm: { preventive_measures: "Avoid staggered flushing.", biological_spray: "Azadirachtin 10000 PPM @ 3ml/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Thiamethoxam 25% WG OR Imidacloprid 17.8% SL", commercial_reference: "Actara, Confidor", dose_per_15L_pump: "5g (Actara) or 5ml (Confidor)", dose_per_acre: "100g (Actara) or 75ml (Confidor)", waiting_period_phi: "14 Days", application_instructions: "Spray at the initiation of new flush." }
    }
  },
  {
    issue_name: "Citrus Leaf Miner", type: "Insect-Pest", hindi_name: "पत्ती सुरंगक कीट",
    symptoms: "Silvery, serpentine mines/trails on tender leaves. Leaves curl, distort, and dry. Mines serve as entry points for Citrus Canker.",
    favorable_weather: "Warm and humid weather during new flush.",
    solutions: {
      organic_ipm: { preventive_measures: "Prune affected shoots.", biological_spray: "Neem oil 1500 PPM @ 5ml/L.", mechanical: "Pheromone traps." },
      chemical_curative: { active_ingredient: "Abamectin 1.9% EC OR Imidacloprid 17.8% SL", commercial_reference: "Vertimec, Confidor", dose_per_15L_pump: "10ml (Abamectin)", dose_per_acre: "150ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Spray on new flush when leaves are 1-2 cm long." }
    }
  },
  {
    issue_name: "Citrus Blackfly / Whitefly", type: "Insect-Pest", hindi_name: "सफ़ेद/काली मक्खी",
    symptoms: "Adults and nymphs suck sap from lower leaf surfaces. Heavy honeydew secretion leads to severe sooty mould, blocking photosynthesis.",
    favorable_weather: "Dry spells followed by high humidity.",
    solutions: {
      organic_ipm: { preventive_measures: "Maintain good aeration in canopy.", biological_spray: "Verticillium lecanii @ 5g/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Spirotetramat 150 OD OR Diafenthiuron 50% WP", commercial_reference: "Movento Energy, Pegasus", dose_per_15L_pump: "15ml (Movento)", dose_per_acre: "200ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Ensure thorough coverage of the underside of leaves." }
    }
  },
  {
    issue_name: "Mites (Rust / Red Spider)", type: "Insect-Pest", hindi_name: "मकड़ी (माइट)",
    symptoms: "Rust mites cause silvery/brown/black rough patches on fruit skin (shark skin). Red mites cause leaf stippling and drop.",
    favorable_weather: "Dry and dusty, warm conditions.",
    solutions: {
      organic_ipm: { preventive_measures: "Overhead irrigation to reduce dust.", biological_spray: "Hirsutella thompsonii.", mechanical: "N/A" },
      chemical_curative: { active_ingredient: "Propargite 57% EC OR Spiromesifen 22.9% SC", commercial_reference: "Omite, Oberon", dose_per_15L_pump: "30ml (Propargite) or 15ml (Oberon)", dose_per_acre: "400ml (Propargite) or 200ml (Oberon)", waiting_period_phi: "15 Days", application_instructions: "Spray thoroughly covering fruits and foliage." }
    }
  },
  {
    issue_name: "Scale Insects", type: "Insect-Pest", hindi_name: "स्केल कीट",
    symptoms: "Armored, hard, brown/red or soft green bumps on stems, leaves, and fruits. Stunted growth, yellowing, branch dieback.",
    favorable_weather: "Warm, dry conditions with poor air circulation.",
    solutions: {
      organic_ipm: { preventive_measures: "Prune to open canopy.", biological_spray: "Horticultural oil (Neem/Mineral oil).", mechanical: "Scrub off small infestations." },
      chemical_curative: { active_ingredient: "Buprofezin 25% SC + Horticultural Oil", commercial_reference: "Applaud", dose_per_15L_pump: "20ml", dose_per_acre: "300ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Mix with 1% mineral oil to penetrate the waxy scale shield." }
    }
  },
  {
    issue_name: "Fruit Fly", type: "Insect-Pest", hindi_name: "फल मक्खी",
    symptoms: "Punctures on ripening fruit, oozing juice, premature ripening and fruit drop. Maggots inside rotting fruit.",
    favorable_weather: "Warm and humid during ripening stage.",
    solutions: {
      organic_ipm: { preventive_measures: "Collect and deeply bury fallen fruits.", biological_spray: "N/A", mechanical: "Methyl Eugenol pheromone traps @ 4-6/acre." },
      chemical_curative: { active_ingredient: "Deltamethrin 2.8% EC + Jaggery (Poison Bait)", commercial_reference: "Decis", dose_per_15L_pump: "15ml + 100g Jaggery", dose_per_acre: "200ml in 200L water", waiting_period_phi: "10 Days", application_instructions: "Apply as coarse spray/bait on tree trunks or non-fruiting branches." }
    }
  },
  {
    issue_name: "Mealybug", type: "Insect-Pest", hindi_name: "मिलीबग",
    symptoms: "Cottony white masses on fruit stalks, twigs, and leaves. Sooty mould development on honeydew.",
    favorable_weather: "Warm weather, often spread by ants.",
    solutions: {
      organic_ipm: { preventive_measures: "Control ants (use sticky bands on trunk).", biological_spray: "Cryptolaemus montrouzieri (predatory beetle).", mechanical: "Sticky bands on tree trunk." },
      chemical_curative: { active_ingredient: "Profenofos 50% EC OR Chlorpyrifos 20% EC", commercial_reference: "Curacron, Radar", dose_per_15L_pump: "30ml", dose_per_acre: "400ml in 200L water", waiting_period_phi: "15 Days", application_instructions: "Direct spray at the cottony masses. Use a wetting agent/surfactant." }
    }
  },
  {
    issue_name: "Aphids", type: "Insect-Pest", hindi_name: "माहू / एफिड",
    symptoms: "Cluster of small soft-bodied insects on new shoots. Curling of young leaves, honeydew secretion. Vector of Tristeza Virus.",
    favorable_weather: "Cool, moist spring weather.",
    solutions: {
      organic_ipm: { preventive_measures: "Monitor new flushes.", biological_spray: "Neem oil @ 3ml/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Dimethoate 30% EC", commercial_reference: "Rogor", dose_per_15L_pump: "30ml", dose_per_acre: "400ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Spray when colonies are seen on new flush." }
    }
  },
  {
    issue_name: "Tristeza Virus", type: "Viral", hindi_name: "ट्रिस्टेजा वायरस",
    symptoms: "Vein clearing, stem pitting, rapid wilting (quick decline), poor fruit set, dieback.",
    favorable_weather: "Spread rapidly by Toxoptera citricida (Brown citrus aphid).",
    solutions: {
      organic_ipm: { preventive_measures: "Use resistant rootstocks (e.g., Rangpur lime). Use certified virus-free budwood.", biological_spray: "N/A", mechanical: "Eradicate severely declining trees." },
      chemical_curative: { active_ingredient: "Vector Control: Imidacloprid 17.8% SL", commercial_reference: "Confidor", dose_per_15L_pump: "5ml", dose_per_acre: "75ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "No cure for the virus. Control the aphid vectors to prevent spread." }
    }
  }
];

const citrusPests10 = citrusPests12.slice(0, 10);
const citrusPests8 = citrusPests12.slice(0, 8);
const citrusPests6 = citrusPests12.slice(0, 6);
const citrusPests5 = citrusPests12.slice(0, 5);

export const data = [
  {
    crop_id: "sweet-orange",
    common_name: "Sweet Orange",
    hindi_name: "संतरा / मौसम्बी",
    regional_names: { marathi: "मोसंबी", punjabi: "ਮਾਲਟਾ", tamil: "சாத்துக்குடி", telugu: "బత్తాయి" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "mandarin",
    common_name: "Mandarin / Tangerine / Clementine",
    hindi_name: "संतरा / किन्नू",
    regional_names: { marathi: "संत्री", punjabi: "ਸੰਤਰਾ", tamil: "கமலா ஆரஞ்சு", telugu: "కమలా ఫలం" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "nagpur-orange",
    common_name: "Nagpur Orange / Santra",
    hindi_name: "नागपूरी संतरा",
    regional_names: { marathi: "नागपुरी संत्री", punjabi: "ਸੰਤਰਾ", tamil: "ஆரஞ்சு", telugu: "కమలా" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "kinnow",
    common_name: "Kinnow",
    hindi_name: "किन्नू",
    regional_names: { marathi: "किन्नू", punjabi: "ਕਿੰਨੂ", tamil: "கின்னு", telugu: "కిన్నూ" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 10 tons, N: 500g, P2O5: 250g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "lemon",
    common_name: "Lemon",
    hindi_name: "नींबू",
    regional_names: { marathi: "लिंबू", punjabi: "ਨਿੰਬੂ", tamil: "எலுமிச்சை", telugu: "నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi", "Zaid"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "5.5-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per bearing tree/year",
      deficiencies: citrusDeficiencies7
    },
    pest_and_disease_solutions: citrusPests10
  },
  {
    crop_id: "lime",
    common_name: "Lime / Kagzi Lime",
    hindi_name: "कागज़ी नींबू",
    regional_names: { marathi: "कागजी लिंबू", punjabi: "ਕਾਗਜ਼ੀ ਨਿੰਬੂ", tamil: "எலுமிச்சை", telugu: "నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi", "Zaid"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per bearing tree/year",
      deficiencies: citrusDeficiencies7
    },
    pest_and_disease_solutions: citrusPests10
  },
  {
    crop_id: "grapefruit",
    common_name: "Grapefruit",
    hindi_name: "चकोतरा / ग्रेपफ्रूट",
    regional_names: { marathi: "पपनस", punjabi: "ਗ੍ਰੇਪਫਰੂਟ", tamil: "பப்ளிமாஸ்", telugu: "పంపర పనస" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies6
    },
    pest_and_disease_solutions: citrusPests8
  },
  {
    crop_id: "pomelo",
    common_name: "Pomelo / Chakotra",
    hindi_name: "चकोतरा",
    regional_names: { marathi: "पपनस", punjabi: "ਚਕੋਤਰਾ", tamil: "பப்ளிமாஸ்", telugu: "పంపర పనస" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies6
    },
    pest_and_disease_solutions: citrusPests8
  },
  {
    crop_id: "bergamot",
    common_name: "Bergamot",
    hindi_name: "बर्गमॉट",
    regional_names: { marathi: "बर्गमॉट", punjabi: "ਬਰਗਮੌਟ", tamil: "பெர்கமோட்", telugu: "బెర్గామోట్" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5 tons, N: 250g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "citron",
    common_name: "Citron",
    hindi_name: "बड़ा नींबू / बिजोरा",
    regional_names: { marathi: "महाळुंग", punjabi: "ਖੱਟਾ", tamil: "கிடாரங்காய்", telugu: "మాదిఫలం" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "kumquat",
    common_name: "Kumquat",
    hindi_name: "कमक्वाट",
    regional_names: { marathi: "कमक्वाट", punjabi: "ਕੁਮਕੁਆਟ", tamil: "கும்குவாட்", telugu: "కుంక్వాట్" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 5 tons, N: 200g, P2O5: 100g, K2O: 150g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "yuzu",
    common_name: "Yuzu",
    hindi_name: "युजू",
    regional_names: { marathi: "युजू", punjabi: "ਯੂਜ਼ੂ", tamil: "யுசு", telugu: "యుజు" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages4,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 5 tons, N: 200g, P2O5: 100g, K2O: 150g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests5
  },
  {
    crop_id: "meyer-lemon",
    common_name: "Meyer Lemon",
    hindi_name: "मेयर नींबू",
    regional_names: { marathi: "मेयर लिंबू", punjabi: "ਮੇਅਰ ਨਿੰਬੂ", tamil: "மேயர் எலுமிச்சை", telugu: "మేయర్ నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "blood-orange",
    common_name: "Blood Orange",
    hindi_name: "रक्त संतरा",
    regional_names: { marathi: "रक्त संत्री", punjabi: "ਰਕਤ ਸੰਤਰਾ", tamil: "ரத்த ஆரஞ்சு", telugu: "రక్త కమల" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
{
    "crop_id": "strawberry",
    "common_name": "Strawberry",
    "hindi_name": "स्ट्रॉबेरी",
    "regional_names": {
      "marathi": "स्ट्रॉबेरी",
      "punjabi": "ਸਟ੍ਰਾਬੇਰੀ",
      "tamil": "ஸ்ட்ராபெரி",
      "telugu": "స్ట్రాబెర్రీ"
    },
    "category": "Fruit",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Runner planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate soil moisture for root establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "31-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen fertilizers for canopy development."
      },
      {
        "stage_name": "Flowering",
        "day_range": "61-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid overhead irrigation to reduce disease risk."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "91-105",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate calcium and boron."
      },
      {
        "stage_name": "Fruiting",
        "day_range": "106-135",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture but avoid waterlogging."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "136-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation as growth slows."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N 20kg, P 40kg, K 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth",
          "solution": "Urea 100g per 15L pump or 25kg/acre"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple reddish hues",
          "solution": "DAP 25kg/acre"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of leaves",
          "solution": "MOP 20kg/acre or Foliar spray of 19:19:19 @ 75g/15L"
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn of young leaves, poor fruit quality",
          "solution": "Calcium Nitrate spray 50g per 15L pump"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves",
          "solution": "Magnesium Sulphate 50g per 15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves",
          "solution": "Iron Chelates (EDTA) 20g per 15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed fruits, poor fruit set",
          "solution": "Boron 20% @ 20g per 15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Grey Mould (Botrytis)",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड",
        "symptoms": "Grey fuzzy fungal growth on fruits and flowers.",
        "favorable_weather": "Cool, humid conditions (15-25°C, >85% RH)",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, removal of infected plant debris",
            "biological_spray": "Trichoderma viride @ 50g/15L",
            "mechanical": "Avoid overhead irrigation"
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Spray at flowering and fruit set stages."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery patches on leaves, flowers, and fruits.",
        "favorable_weather": "Warm, dry days with cool, humid nights",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good air circulation, avoid excess nitrogen",
            "biological_spray": "Bacillus subtilis @ 50ml/15L",
            "mechanical": "Prune dense canopies"
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Foliar spray upon initial symptom observation."
          }
        }
      },
      {
        "issue_name": "Two-spotted Spider Mite",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी का जाला",
        "symptoms": "Stippling on leaves, fine webbing under leaves, bronzing.",
        "favorable_weather": "Hot and dry conditions",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain adequate soil moisture, avoid dust accumulation",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L",
            "mechanical": "Water sprays to dislodge mites"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Ensure good coverage on the undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "जड़-गांठ नेमाटोड",
        "symptoms": "Galls or knots on roots, stunted growth, wilting.",
        "favorable_weather": "Warm, sandy soils",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with marigold, use nematode-free planting material",
            "biological_spray": "Purpureocillium lilacinum @ 50g/15L for soil drench",
            "mechanical": "Solarization of soil before planting"
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1 kg applied to soil",
            "waiting_period_phi": "30",
            "application_instructions": "Soil application before planting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "amla",
    "common_name": "Indian Gooseberry",
    "hindi_name": "आंवला",
    "regional_names": {
      "marathi": "आवळा",
      "punjabi": "ਆਂਵਲਾ",
      "tamil": "நெல்லிக்காய்",
      "telugu": "ఉసిరికాయ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Seedling/Graft Establishment",
        "day_range": "0-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure frequent light irrigation to establish root system."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "90-365",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen and train plant for strong framework."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "365-450",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restrict irrigation; shedding of leaves occurs."
      },
      {
        "stage_name": "Flowering",
        "day_range": "450-480",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide optimal moisture; avoid water stress to prevent flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "481-510",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate lightly; nutrient application supports retention."
      },
      {
        "stage_name": "Fruit Development & Maturity",
        "day_range": "511-700",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Regular irrigation ensures better fruit size and quality."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.5",
      "basal_dose_per_acre": "FYM 20 kg/tree, N 200g, P 100g, K 200g per tree per year",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, reduced growth",
          "solution": "Apply Urea 100g per tree"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves, poor root development",
          "solution": "Apply SSP 250g per tree"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves",
          "solution": "Apply MOP 150g per tree"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted shoots, rosette formation",
          "solution": "Foliar spray of Zinc Sulphate @ 0.5% (75g/15L pump)"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking and internal necrosis",
          "solution": "Foliar spray of Borax @ 0.2% (30g/15L pump)"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis of younger leaves",
          "solution": "Foliar spray of Ferrous Sulphate @ 0.5% (75g/15L pump)"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves",
          "solution": "Apply Magnesium Sulphate 50g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bark Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल खाने वाली सुंडी",
        "symptoms": "Presence of frass and silk webs on bark; holes in trunk/branches.",
        "favorable_weather": "Humid and warm weather",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep orchard clean, avoid overcrowding",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "Insert iron wire into holes to kill caterpillar, clean webs"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Apply directly into holes",
            "waiting_period_phi": "30",
            "application_instructions": "Inject 5-10 ml of solution into holes and seal with mud."
          }
        }
      },
      {
        "issue_name": "Shoot Gall Maker",
        "type": "Insect-Pest",
        "hindi_name": "गॉल मेकर",
        "symptoms": "Formation of hard woody galls on apical shoots, stunted growth.",
        "favorable_weather": "Monsoon and post-monsoon period",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of affected shoots",
            "biological_spray": "Neem oil @ 50ml/15L",
            "mechanical": "Cut and burn galled shoots in winter"
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray during new flush emergence."
          }
        }
      },
      {
        "issue_name": "Amla Rust",
        "type": "Fungal",
        "hindi_name": "आंवला रस्ट",
        "symptoms": "Circular reddish-brown pustules on leaves and fruits.",
        "favorable_weather": "High humidity, continuous rains",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure proper drainage and aeration",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "Remove infected fruits and leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray as preventive or at first sign of disease."
          }
        }
      }
    ]
  },
  {
    "crop_id": "blueberry",
    "common_name": "Blueberry",
    "hindi_name": "ब्लूबेरी",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure soil moisture as buds swell and open."
      },
      {
        "stage_name": "Bloom",
        "day_range": "16-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Crucial for fruit set, provide adequate water but avoid overhead."
      },
      {
        "stage_name": "Petal Fall to Fruit Set",
        "day_range": "31-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nutrient demand is high, maintain consistent moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "46-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for berry size; water stress reduces yield."
      },
      {
        "stage_name": "Harvest & Post-Harvest",
        "day_range": "76-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation gradually after harvest to encourage dormancy."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-5.5",
      "basal_dose_per_acre": "N 50kg, P 20kg, K 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves, poor shoot growth",
          "solution": "Apply Ammonium Sulfate"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on young leaves, common in high pH soils",
          "solution": "Iron Chelates 20g/15L pump"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Reddening or yellowing between veins of older leaves",
          "solution": "Magnesium Sulfate 50g/15L pump"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal burning of leaves, small berries",
          "solution": "Potassium Sulfate"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mummy Berry",
        "type": "Fungal",
        "hindi_name": "ममी बेरी",
        "symptoms": "Blighted young shoots, berries become hard, pale, and shriveled.",
        "favorable_weather": "Cool, wet spring weather",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake and remove mummified berries from ground",
            "biological_spray": "Bacillus subtilis @ 50ml/15L",
            "mechanical": "Mulching to cover fallen mummies"
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30",
            "application_instructions": "Apply at bud break and early bloom."
          }
        }
      },
      {
        "issue_name": "Spotted Wing Drosophila",
        "type": "Insect-Pest",
        "hindi_name": "स्पॉटेड विंग ड्रोसोफिला",
        "symptoms": "Soft, collapsing berries with small larvae inside.",
        "favorable_weather": "Moderate temperatures during fruit ripening",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Frequent harvesting, remove overripe fruit",
            "biological_spray": "Spinosad @ 5ml/15L",
            "mechanical": "Use baited traps for monitoring"
          },
          "chemical_curative": {
            "active_ingredient": "Zeta-cypermethrin",
            "commercial_reference": "Mustang Maxx",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "1",
            "application_instructions": "Apply when berries start changing color and flies are present."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mulberry",
    "common_name": "Mulberry",
    "hindi_name": "शहतूत",
    "regional_names": {
      "marathi": "तुती",
      "punjabi": "ਸ਼ਹਿਤੂਤ",
      "tamil": "மல்பெரி",
      "telugu": "మల్బరీ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Sprouting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate soil moisture after pruning."
      },
      {
        "stage_name": "Vegetative Growth (Early)",
        "day_range": "16-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers for leaf yield."
      },
      {
        "stage_name": "Vegetative Growth (Late)",
        "day_range": "31-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Peak leaf production; requires consistent watering."
      },
      {
        "stage_name": "Leaf Harvest",
        "day_range": "46-60",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Maintain turgidity of leaves before plucking."
      },
      {
        "stage_name": "Post-Harvest Recovery",
        "day_range": "61-75",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Irrigate immediately after leaf harvest/pruning."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 8 tons, N 120kg, P 50kg, K 50kg per year in split doses",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale yellow leaves, reduced leaf yield",
          "solution": "Urea application after every harvest"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves, poor root growth",
          "solution": "Apply SSP as basal dose"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis of older leaves",
          "solution": "MOP application"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes",
          "solution": "Zinc Sulphate 0.5% foliar spray"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis of younger leaves",
          "solution": "Ferrous Sulphate 0.5% foliar spray"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pink Mealybug (Tukra)",
        "type": "Insect-Pest",
        "hindi_name": "मीली बग (टुकरा)",
        "symptoms": "Wrinkled, curled, and thickened apical leaves; stunted shoot growth.",
        "favorable_weather": "Summer months with high temperature and low humidity",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pluck and burn affected shoots",
            "biological_spray": "Cryptolaemus montrouzieri (predator beetle) release @ 100/acre",
            "mechanical": "Apply sticky bands on main stem"
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray safely; maintain 15 days waiting period before feeding silkworms."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery patches on lower surface of mature leaves.",
        "favorable_weather": "Cool temperature (20-24°C) with high humidity",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, ensure good sunlight penetration",
            "biological_spray": "Trichoderma harzianum @ 50g/15L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray on lower surface of leaves."
          }
        }
      }
    ]
  }
,
{
  "crop_id": "raspberry",
  "common_name": "Raspberry (Red & Black)",
  "hindi_name": "\u0930\u0938\u092d\u0930\u0940",
  "regional_names": {
    "marathi": "\u0930\u093e\u0938\u094d\u092a\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a30\u0a38\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0bb0\u0bbe\u0bb8\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c30\u0c3e\u0c38\u0c4d\u0c2a\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Initiate light irrigation."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture to ensure pollination."
    },
    {
      "stage_name": "Fruit Set & Sizing",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Peak water demand, avoid waterlogging."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-120",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly to improve fruit sugar."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 40kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing of older leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint on leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Soft fruit, tip burn",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellowing between veins of new leaves",
        "solution": "Iron EDTA 20g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray fuzzy mold on fruit",
      "favorable_weather": "Cool, wet conditions",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected fruits"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at early bloom"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Spotted Wing Drosophila",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u094d\u092a\u0949\u091f\u0947\u0921 \u0935\u093f\u0902\u0917 \u0921\u094d\u0930\u094b\u0938\u094b\u092b\u093f\u0932\u093e",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prompt harvest",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply as fruit begins to color"
        }
      }
    },
    {
      "issue_name": "Raspberry Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u0924\u0928\u0947 \u0915\u093e \u091b\u0947\u0926\u0915",
      "symptoms": "Wilting cane tips",
      "favorable_weather": "Warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune below damage",
          "biological_spray": "Beauveria bassiana 50g/15L",
          "mechanical": "Burn infested canes"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorantraniliprole 18.5% SC",
          "commercial_reference": "Coragen",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "60ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early in season"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, brown roots",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Raised beds",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve drainage"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Nematodes",
      "type": "Nematode",
      "hindi_name": "\u0938\u0942\u0924\u094d\u0930\u0915\u0943\u092e\u093f",
      "symptoms": "Stunted growth, galls",
      "favorable_weather": "Sandy soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Crop rotation",
          "biological_spray": "Paecilomyces lilacinus 50g/15L",
          "mechanical": "Soil solarization"
        },
        "chemical_curative": {
          "active_ingredient": "Fluopyram 34.48% SC",
          "commercial_reference": "Velum Prime",
          "dose_per_15L_pump": "N/A",
          "dose_per_acre": "250ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Apply via drip"
        }
      }
    }
  ]
},
{
  "crop_id": "blackberry",
  "common_name": "Blackberry",
  "hindi_name": "\u092c\u094d\u0932\u0948\u0915\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u092c\u094d\u0932\u0945\u0915\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a2c\u0a32\u0a48\u0a15\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0baa\u0bbf\u0bb3\u0bbe\u0b95\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c2c\u0c4d\u0c32\u0c3e\u0c15\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Initiate light irrigation."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture to ensure pollination."
    },
    {
      "stage_name": "Fruit Set & Sizing",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Peak water demand, avoid waterlogging."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-120",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly to improve fruit sugar."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 40kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing of older leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint on leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Soft fruit, tip burn",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray fuzzy mold on fruit",
      "favorable_weather": "Cool, wet conditions",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected fruits"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at early bloom"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Spotted Wing Drosophila",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u094d\u092a\u0949\u091f\u0947\u0921 \u0935\u093f\u0902\u0917 \u0921\u094d\u0930\u094b\u0938\u094b\u092b\u093f\u0932\u093e",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prompt harvest",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply as fruit begins to color"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, brown roots",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Raised beds",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve drainage"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Cane Blight",
      "type": "Fungal",
      "hindi_name": "\u0915\u0947\u0928 \u092c\u094d\u0932\u093e\u0907\u091f",
      "symptoms": "Dark cankers on canes",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune out dead canes",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove infected canes"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray post-pruning"
        }
      }
    }
  ]
},
{
  "crop_id": "cranberry",
  "common_name": "Cranberry",
  "hindi_name": "\u0915\u094d\u0930\u0948\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0915\u094d\u0930\u0945\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a15\u0a30\u0a48\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bbf\u0bb0\u0bbe\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c15\u0c4d\u0c30\u0c3e\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain winter flood if applicable."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Drain beds, monitor frost."
    },
    {
      "stage_name": "Bloom",
      "day_range": "46-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Avoid overhead irrigation during day."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "71-90",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure adequate moisture."
    },
    {
      "stage_name": "Harvest",
      "day_range": "91-120",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Flood for harvest or maintain moisture for dry harvest."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.0-5.0",
    "basal_dose_per_acre": "N 10kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Poor growth, pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark green to purple leaves",
        "solution": "MAP 10kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "Potassium sulfate 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Poor fruit quality",
        "solution": "Gypsum 50kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Epsom salt 5kg/acre"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decayed fruits",
      "favorable_weather": "Warm, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Improve drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "50",
          "application_instructions": "Apply during bloom"
        }
      }
    },
    {
      "issue_name": "Cranberry Fruitworm",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u0932 \u091b\u0947\u0926\u0915",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm summer",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Monitor with traps",
          "biological_spray": "Bt 50g/15L",
          "mechanical": "Flood beds"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorantraniliprole 18.5% SC",
          "commercial_reference": "Coragen",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "60ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at egg hatch"
        }
      }
    },
    {
      "issue_name": "Upright Dieback",
      "type": "Fungal",
      "hindi_name": "\u0909\u0930\u094d\u0927\u094d\u0935 \u0915\u094d\u0937\u092f",
      "symptoms": "Browning of uprights",
      "favorable_weather": "Heat stress",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Reduce stress",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Prune dead vines"
        },
        "chemical_curative": {
          "active_ingredient": "Propiconazole 25% EC",
          "commercial_reference": "Tilt",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "45",
          "application_instructions": "Apply early season"
        }
      }
    },
    {
      "issue_name": "Black-headed Fireworm",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u093e\u092f\u0930\u0935\u0930\u094d\u092e",
      "symptoms": "Webbing of tips",
      "favorable_weather": "Spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Monitor",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Spring flood"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply at hatch"
        }
      }
    },
    {
      "issue_name": "Flea Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093f\u0938\u094d\u0938\u0942 \u092d\u0943\u0902\u0917",
      "symptoms": "Shot holes in leaves",
      "favorable_weather": "Dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean borders",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Thiamethoxam 25% WG",
          "commercial_reference": "Actara",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Phytophthora Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, poor roots",
      "favorable_weather": "Waterlogged soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve beds"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    }
  ]
},
{
  "crop_id": "gooseberry",
  "common_name": "Gooseberry (Cape & European)",
  "hindi_name": "\u0915\u0947\u092a \u0917\u0942\u091c\u092c\u0947\u0930\u0940 / \u092e\u0915\u094b\u092f",
  "regional_names": {
    "marathi": "\u0917\u0942\u091c\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a17\u0a42\u0a1c\u0a3c\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bc2\u0bb8\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c17\u0c42\u0c38\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Seedling/Transplant",
      "day_range": "0-30",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Keep soil moist for establishment."
    },
    {
      "stage_name": "Vegetative Growth",
      "day_range": "31-60",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Promote branching."
    },
    {
      "stage_name": "Flowering",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Do not stress for water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "81-100",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Adequate moisture for calyx development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "101-140",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water to prevent fruit cracking."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-7.0",
    "basal_dose_per_acre": "FYM 8 tons, N 20kg, P 30kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Stunted growth, pale leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark green to purple leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Poor fruit size, marginal burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Blossom end rot in fruits",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves and fruit",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Fruit Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u0932 \u091b\u0947\u0926\u0915",
      "symptoms": "Holes in fruit",
      "favorable_weather": "Warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove damaged fruits",
          "biological_spray": "Bt 50g/15L",
          "mechanical": "Pheromone traps"
        },
        "chemical_curative": {
          "active_ingredient": "Emamectin benzoate 5% SG",
          "commercial_reference": "Proclaim",
          "dose_per_15L_pump": "7g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at egg hatch"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air circulation",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove debris"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Whitefly",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u092b\u0947\u0926 \u092e\u0915\u094d\u0916\u0940",
      "symptoms": "Yellowing leaves, honeydew",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Yellow sticky traps",
          "biological_spray": "Beauveria bassiana 50g/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Diafenthiuron 50% WP",
          "commercial_reference": "Pegasus",
          "dose_per_15L_pump": "25g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray thoroughly"
        }
      }
    }
  ]
},
{
  "crop_id": "blackcurrant",
  "common_name": "Blackcurrant",
  "hindi_name": "\u0915\u093e\u0932\u0940 \u0915\u093f\u0936\u092e\u093f\u0936 (\u092c\u094d\u0932\u0948\u0915\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u092c\u094d\u0932\u0945\u0915\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a2c\u0a32\u0a48\u0a15\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0b95\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c2c\u0c4d\u0c32\u0c3e\u0c15\u0c4d \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "16-35",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "36-55",
      "water_requirement_sensitivity": "High",
      "stage_advice": "High water demand."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "56-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-110",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 40kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellow young leaves",
        "solution": "Iron EDTA 20g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Gall Mite",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0949\u0932 \u092e\u093e\u0907\u091f",
      "symptoms": "Swollen buds (big bud)",
      "favorable_weather": "Spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Resistant varieties",
          "biological_spray": "Sulfur 80% WP 40g/15L",
          "mechanical": "Remove galls"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply pre-bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "redcurrant",
  "common_name": "Redcurrant",
  "hindi_name": "\u0932\u093e\u0932 \u0915\u093f\u0936\u092e\u093f\u0936 (\u0930\u0947\u0921\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u0930\u0947\u0921\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a30\u0a48\u0a71\u0a21\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0b9a\u0bbf\u0bb5\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c0e\u0c30\u0c4d\u0c30 \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering & Fruit Set",
      "day_range": "16-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "41-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "76-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "whitecurrant",
  "common_name": "Whitecurrant",
  "hindi_name": "\u0938\u092b\u0947\u0926 \u0915\u093f\u0936\u092e\u093f\u0936 (\u0935\u094d\u0939\u093e\u0907\u091f\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u0935\u094d\u0939\u093e\u0908\u091f\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a35\u0a3e\u0a08\u0a1f\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bc8 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering & Fruit Set",
      "day_range": "16-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "41-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "76-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "elderberry",
  "common_name": "Elderberry",
  "hindi_name": "\u090f\u0932\u094d\u0921\u0930\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u090f\u0932\u094d\u0921\u0930\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a10\u0a32\u0a21\u0a30\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b8e\u0bb2\u0bcd\u0b9f\u0bb0\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c0e\u0c32\u0c4d\u0c21\u0c30\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain soil moisture."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-50",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Adequate water needed."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "51-90",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "91-120",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Allow clusters to ripen completely."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "5.5-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 20kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Stunted growth",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellowing of young leaves",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Elder Shoot Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots, frass",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray base"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Rust",
      "type": "Fungal",
      "hindi_name": "\u0930\u0924\u0941\u0906",
      "symptoms": "Orange pustules",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove alternate hosts",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    }
  ]
},
{
  "crop_id": "lingonberry",
  "common_name": "Lingonberry",
  "hindi_name": "\u0932\u093f\u0902\u0917\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0932\u093f\u0902\u0917\u094b\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a32\u0a3f\u0a70\u0a17\u0a4b\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0bb2\u0bbf\u0b99\u0bcd\u0b95\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c32\u0c3f\u0c02\u0c17\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Maintain moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure irrigation."
    },
    {
      "stage_name": "Fruit Set & Growth",
      "day_range": "41-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "71-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.5-5.5",
    "basal_dose_per_acre": "N 20kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark leaves",
        "solution": "MAP 10kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Leaf scorch",
        "solution": "Potassium sulfate 10kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decaying fruit",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Apply at bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Spots on leaves",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air flow",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray as needed"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "boysenberry",
  "common_name": "Boysenberry",
  "hindi_name": "\u092c\u0949\u092f\u091c\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u092c\u0949\u092f\u091c\u0947\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a2c\u0a4b\u0a2f\u0a38\u0a47\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0baa\u0bbe\u0baf\u0bcd\u0b9a\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c2c\u0c3e\u0c2f\u0c4d\u0c38\u0c46\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Flowering",
      "day_range": "31-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-110",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 30kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray mold",
      "favorable_weather": "Cool, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray early bloom"
        }
      }
    },
    {
      "issue_name": "Cane Blight",
      "type": "Fungal",
      "hindi_name": "\u0915\u0947\u0928 \u092c\u094d\u0932\u093e\u0907\u091f",
      "symptoms": "Dark cankers",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune dead canes",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray post-pruning"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    }
  ]
},
{
  "crop_id": "cloudberry",
  "common_name": "Cloudberry",
  "hindi_name": "\u0915\u094d\u0932\u093e\u0909\u0921\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0915\u094d\u0932\u093e\u0909\u0921\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a15\u0a32\u0a3e\u0a0a\u0a21\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bbf\u0bb3\u0bb5\u0bc1\u0b9f\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c15\u0c4d\u0c32\u0c4c\u0c21\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure irrigation."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "41-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "71-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "3.5-4.5",
    "basal_dose_per_acre": "N 10kg, P 10kg, K 10kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark leaves",
        "solution": "MAP 5kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decaying fruit",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Apply at bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Spots on leaves",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air flow",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray as needed"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "sea-buckthorn",
  "common_name": "Sea Buckthorn",
  "hindi_name": "\u0938\u0940\u092c\u0915\u0925\u0949\u0930\u094d\u0928",
  "regional_names": {
    "marathi": "\u0938\u0940\u092c\u0915\u0925\u0949\u0930\u094d\u0928",
    "punjabi": "\u0a38\u0a40\u0a2c\u0a15\u0a25\u0a4c\u0a30\u0a28",
    "tamil": "\u0b9a\u0bc0\u0baa\u0b95\u0bcd\u0ba4\u0bbe\u0bb0\u0bcd\u0ba9\u0bcd",
    "telugu": "\u0c38\u0c40\u0c2c\u0c15\u0c4d\u0c25\u0c3e\u0c30\u0c4d\u0c28\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Kharif",
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Establishment",
      "day_range": "0-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Regular watering for deep roots."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "61-90",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moisture."
    },
    {
      "stage_name": "Flowering",
      "day_range": "91-110",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs adequate water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "111-140",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "141-170",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Reduce water."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-7.5",
    "basal_dose_per_acre": "FYM 10 tons, P 20kg, K 20kg (fixes own N)",
    "deficiencies": [
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      },
      {
        "nutrient": "Zinc",
        "symptoms": "Little leaf",
        "solution": "Zinc sulphate 15g/15L"
      },
      {
        "nutrient": "Boron",
        "symptoms": "Poor fruit set",
        "solution": "Borax 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Sea Buckthorn Fly",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u094d\u0916\u0940",
      "symptoms": "Maggots in fruit",
      "favorable_weather": "Warm summer",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Yellow sticky traps",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Dimethoate 30% EC",
          "commercial_reference": "Rogor",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Fusarium Wilt",
      "type": "Fungal",
      "hindi_name": "\u0909\u0915\u0920\u093e \u0930\u094b\u0917",
      "symptoms": "Wilting, yellowing",
      "favorable_weather": "Warm, wet soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Carbendazim 50% WP",
          "commercial_reference": "Bavistin",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "goji-berry",
  "common_name": "Goji Berry / Wolfberry",
  "hindi_name": "\u0917\u094b\u091c\u0940 \u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0917\u094b\u091c\u0940 \u092c\u0947\u0930\u0940",
    "punjabi": "\u0a17\u0a4b\u0a1c\u0a40 \u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bcb\u0b9c\u0bbf \u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c17\u0c4b\u0c1c\u0c40 \u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif",
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Vegetative",
      "day_range": "0-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Establish deep roots."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs adequate water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "76-105",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "106-150",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moderate moisture."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.8-8.1",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      },
      {
        "nutrient": "Zinc",
        "symptoms": "Little leaf",
        "solution": "Zinc sulphate 15g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Goji Gall Mite",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0949\u0932 \u092e\u093e\u0907\u091f",
      "symptoms": "Blisters on leaves",
      "favorable_weather": "Warm spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Resistant varieties",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Remove galls"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Anthracnose",
      "type": "Fungal",
      "hindi_name": "\u090f\u0928\u094d\u0925\u094d\u0930\u0947\u0915\u094d\u0928\u094b\u091c",
      "symptoms": "Dark lesions on fruit",
      "favorable_weather": "Warm, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Flea Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093f\u0938\u094d\u0938\u0942 \u092d\u0943\u0902\u0917",
      "symptoms": "Shot holes",
      "favorable_weather": "Dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean borders",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Thiamethoxam 25% WG",
          "commercial_reference": "Actara",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Foliar spray"
        }
      }
    }
  ]
},
{
  "crop_id": "acai-berry",
  "common_name": "Acai Berry",
  "hindi_name": "\u0905\u0938\u093e\u0908 \u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0905\u0938\u093e\u0908 \u092c\u0947\u0930\u0940",
    "punjabi": "\u0a05\u0a38\u0a3e\u0a08 \u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b85\u0b9a\u0bbe\u0baf\u0bcd \u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c05\u0c38\u0c48 \u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Seedling",
      "day_range": "0-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Keep moist."
    },
    {
      "stage_name": "Vegetative",
      "day_range": "61-120",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs high humidity."
    },
    {
      "stage_name": "Flowering",
      "day_range": "121-150",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Consistent water."
    },
    {
      "stage_name": "Fruiting",
      "day_range": "151-180",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.5-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 40kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Palm Weevil",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093e\u092e \u0935\u0940\u0935\u093f\u0932",
      "symptoms": "Holes in trunk",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Traps",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Remove infested"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray trunk"
        }
      }
    },
    {
      "issue_name": "Rhinoceros Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0948\u0902\u0921\u093e \u092d\u0943\u0902\u0917",
      "symptoms": "Chewed fronds",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean plantation",
          "biological_spray": "Metarhizium 50g/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Carbaryl 50% WP",
          "commercial_reference": "Sevin",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Apply in leaf axils"
        }
      }
    },
    {
      "issue_name": "Leaf Blight",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u091d\u0941\u0932\u0938\u093e",
      "symptoms": "Brown lesions",
      "favorable_weather": "High humidity",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air circulation",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Mealybug",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0940\u0932\u0940 \u092c\u0917",
      "symptoms": "White cottony masses",
      "favorable_weather": "Dry spells",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Predator beetles",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Profenofos 50% EC",
          "commercial_reference": "Curacron",
          "dose_per_15L_pump": "20ml",
          "dose_per_acre": "300ml in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Spray thoroughly"
        }
      }
    }
  ]
},
{
    "crop_id": "mango",
    "common_name": "Mango",
    "hindi_name": "आम",
    "regional_names": { "marathi": "आंबा", "punjabi": "ਅੰਬ", "tamil": "மாம்பழம்", "telugu": "మామిడి" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Dormancy/Rest", "day_range": "Nov-Dec", "water_requirement_sensitivity": "Low", "stage_advice": "Prune dead branches, stop irrigation to induce stress for flowering." },
      { "stage_name": "Bud Differentiation", "day_range": "Dec-Jan", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply paclobutrazol (if planned) and restrict water." },
      { "stage_name": "Panicle Emergence", "day_range": "Jan-Feb", "water_requirement_sensitivity": "High", "stage_advice": "Monitor for powdery mildew and hoppers. Apply light irrigation." },
      { "stage_name": "Full Bloom", "day_range": "Feb-Mar", "water_requirement_sensitivity": "Low", "stage_advice": "Do not spray insecticides to protect pollinators." },
      { "stage_name": "Fruit Set", "day_range": "Mar", "water_requirement_sensitivity": "High", "stage_advice": "Apply light irrigation, check for fruit borer." },
      { "stage_name": "Marble Stage", "day_range": "Apr", "water_requirement_sensitivity": "High", "stage_advice": "Apply nutrients, monitor for fruit fly." },
      { "stage_name": "Fruit Development", "day_range": "Apr-May", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture to avoid fruit drop." },
      { "stage_name": "Harvest/Ripening", "day_range": "May-Jul", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest with 8-10mm stalk to avoid sap burn." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "100 kg FYM/tree, N:P:K 1kg:0.5kg:1kg per mature tree",
      "deficiencies": [
        { "nutrient": "Zinc", "symptoms": "Little leaf, rosette appearance, short internodes.", "solution": "Foliar spray of Zinc Sulphate 33% at 20-30g per 15L pump (500g/acre)." },
        { "nutrient": "Boron", "symptoms": "Internal necrosis of fruit, cracking, misshapen fruits.", "solution": "Foliar spray of Borax 20% at 20g per 15L pump (400g/acre)." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on young leaves, fine network of green veins.", "solution": "Foliar spray of Ferrous Sulphate at 30g per 15L pump." },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth.", "solution": "Urea application in soil or foliar spray at 1-2%." },
        { "nutrient": "Potassium", "symptoms": "Scorched leaf margins, poor fruit quality.", "solution": "Soil application of MOP or foliar SOP at 100g/15L." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing between veins on older leaves, bronze tint.", "solution": "Foliar spray of Magnesium Sulphate at 30g/15L." },
        { "nutrient": "Calcium", "symptoms": "Spongy tissue in fruit, poor keeping quality.", "solution": "Soil application of Gypsum or Calcium Nitrate spray." },
        { "nutrient": "Copper", "symptoms": "Dieback of young shoots, gummy exudation.", "solution": "Foliar spray of Copper Oxychloride 50% WP at 40g/15L." },
        { "nutrient": "Manganese", "symptoms": "Yellowing of young leaves with wide green bands along veins.", "solution": "Foliar spray of Manganese Sulphate at 20g/15L." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mango Hopper",
        "type": "Insect-Pest",
        "hindi_name": "आम का भुनगा",
        "symptoms": "Nymphs and adults suck sap from tender shoots and panicles, causing flower drop. Honeydew causes sooty mould.",
        "favorable_weather": "Warm, humid conditions during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of overcrowded branches.",
            "biological_spray": "Beauveria bassiana 1% WP @ 5g/L.",
            "mechanical": "Light traps, sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor, Tata Mida",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at panicle emergence and fruit set. Avoid during full bloom."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "भभूतिया रोग",
        "symptoms": "White powdery growth on panicles, flowers, and tender fruits leading to premature drop.",
        "favorable_weather": "Dry weather with low night temperatures and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy for aeration.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray before flowering, during flowering (carefully), and at fruit set."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज (काला धब्बा)",
        "symptoms": "Dark brown/black spots on leaves, blossom blight, and fruit rot post-harvest.",
        "favorable_weather": "High humidity, frequent rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, prune infected twigs.",
            "biological_spray": "Trichoderma viride at 5g/L.",
            "mechanical": "Hot water treatment of fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray during flowering and fruit development."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feed on fruit pulp causing premature ripening, rotting, and fruit drop. Puncture marks on skin.",
        "favorable_weather": "Warm and humid weather, ripening stage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, collect and destroy fallen fruits.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L.",
            "mechanical": "Install Methyl Eugenol traps @ 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray mixed with jaggery (poison bait) on trunks/foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "banana",
    "common_name": "Banana",
    "hindi_name": "केला",
    "regional_names": { "marathi": "केळी", "punjabi": "ਕੇਲਾ", "tamil": "வாழை", "telugu": "అరటి" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Sucker/Tissue culture", "day_range": "0-30 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Plant treated suckers/plants, maintain light moisture." },
      { "stage_name": "Vegetative", "day_range": "30-150 Days", "water_requirement_sensitivity": "High", "stage_advice": "Regular fertigation and desuckering." },
      { "stage_name": "Pseudostem Formation", "day_range": "150-210 Days", "water_requirement_sensitivity": "High", "stage_advice": "Earthing up, apply K-rich fertilizers." },
      { "stage_name": "Bunch Initiation/Shooting", "day_range": "210-240 Days", "water_requirement_sensitivity": "High", "stage_advice": "Critical for water. Propping required to prevent lodging." },
      { "stage_name": "Bunch Development", "day_range": "240-270 Days", "water_requirement_sensitivity": "High", "stage_advice": "Bunch covering, denavelling (removal of male bud)." },
      { "stage_name": "Fruit Filling", "day_range": "270-300 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Spray SOP for better size and quality." },
      { "stage_name": "Harvest", "day_range": "300-330 Days", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when fingers become plump and angles become round." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "N:P:K 200:200:400 g/plant (varies by spacing)",
      "deficiencies": [
        { "nutrient": "Potassium", "symptoms": "Rapid yellowing of older leaves, choking of bunches.", "solution": "Soil apply MOP or spray SOP (0:0:50) at 100g/15L." },
        { "nutrient": "Nitrogen", "symptoms": "Stunted growth, pale green leaves, thin pseudostem.", "solution": "Apply Urea in splits through fertigation." },
        { "nutrient": "Zinc", "symptoms": "Narrow, pointed, chlorotic leaves, bunchy appearance at top.", "solution": "Foliar spray of Zinc Sulphate 33% at 30g/15L." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis of younger leaves.", "solution": "Foliar spray of Ferrous Sulphate at 30g/15L." },
        { "nutrient": "Calcium", "symptoms": "Deformed, spike-like leaves, poor root growth.", "solution": "Soil application of Calcium Nitrate." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing in bands parallel to margin on older leaves.", "solution": "Apply Magnesium Sulphate." },
        { "nutrient": "Boron", "symptoms": "Brittle leaves, transverse cracking on pseudostem/fruit.", "solution": "Foliar spray of Boron 20% at 20g/15L." },
        { "nutrient": "Copper", "symptoms": "Drooping leaves, umbrella-like appearance.", "solution": "Copper spray." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves, thick veins.", "solution": "Apply Sulphur 90% WDG." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Panama Wilt (Fusarium TR4)",
        "type": "Fungal",
        "hindi_name": "पनामा विल्ट",
        "symptoms": "Yellowing of older leaves starting from margins, vascular discoloration (red/brown rings), wilting and death.",
        "favorable_weather": "Acidic soils, waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free suckers, crop rotation, avoid waterlogging.",
            "biological_spray": "Soil application of Trichoderma viride.",
            "mechanical": "Uproot and destroy infected plants with lime."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g (for drenching)",
            "dose_per_acre": "500 g/acre for soil drenching",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench around pseudostem or inject 3ml of 2% solution into pseudostem."
          }
        }
      },
      {
        "issue_name": "Sigatoka Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सिगाटोका लीफ स्पॉट",
        "symptoms": "Small pale yellow streaks on leaves turning into elliptical brown spots with yellow halos. Drying of leaves.",
        "favorable_weather": "High humidity, frequent rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove and burn severely infected leaves.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Proper spacing for aeration."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml + Mineral Oil (100ml)",
            "dose_per_acre": "200 ml + 1.5L oil in 200L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray on appearance of symptoms, repeat after 15 days."
          }
        }
      },
      {
        "issue_name": "Pseudostem Weevil",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Grubs bore into pseudostem causing dark jelly-like exudation. Stem breaks in strong wind.",
        "favorable_weather": "Year-round, peaks post-monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep plantation clean, remove dry outer sheaths.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Install longitudinal pseudostem traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyriphos 20% EC",
            "commercial_reference": "Terminator",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "500 ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray on pseudostem or inject directly into holes."
          }
        }
      }
    ]
  },
  {
    "crop_id": "papaya",
    "common_name": "Papaya",
    "hindi_name": "पपीता",
    "regional_names": { "marathi": "पपई", "tamil": "பப்பாளி", "telugu": "బొప్పాయి" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Nursery/Seedling", "day_range": "0-45 Days", "water_requirement_sensitivity": "High", "stage_advice": "Protect from damping off and viral vectors." },
      { "stage_name": "Vegetative Growth", "day_range": "45-90 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure good drainage, monitor for aphid vectors." },
      { "stage_name": "Flowering", "day_range": "90-120 Days", "water_requirement_sensitivity": "High", "stage_advice": "Apply micronutrients, remove off-type/male plants." },
      { "stage_name": "Fruit Set", "day_range": "120-150 Days", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture, apply N and K." },
      { "stage_name": "Fruit Development", "day_range": "150-210 Days", "water_requirement_sensitivity": "High", "stage_advice": "Fruit thinning if required, prevent ring spot virus." },
      { "stage_name": "Harvest", "day_range": "210-300+ Days", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when a yellow streak appears on the fruit." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "200:200:200 NPK g/plant/year in splits",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Bumpy, deformed fruits (lumpy fruit), latex exudation on fruit surface.", "solution": "Spray Boron 20% at 20g/15L." },
        { "nutrient": "Zinc", "symptoms": "Small, rosetted leaves, short internodes.", "solution": "Spray Zinc Sulphate at 30g/15L." },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth.", "solution": "Apply Urea 100g/plant." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit size and sugar content, marginal necrosis.", "solution": "Apply MOP or spray SOP." },
        { "nutrient": "Magnesium", "symptoms": "Mottled yellowing on older leaves.", "solution": "Spray Magnesium Sulphate." },
        { "nutrient": "Calcium", "symptoms": "Soft fruits, poor keeping quality.", "solution": "Apply Calcium Nitrate." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis of younger leaves.", "solution": "Spray Ferrous Sulphate." },
        { "nutrient": "Phosphorus", "symptoms": "Dark green/purple tint, slow growth.", "solution": "Basal application of SSP." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Papaya Ring Spot Virus (PRSV)",
        "type": "Viral",
        "hindi_name": "रिंग स्पॉट वायरस",
        "symptoms": "Yellow mottling, leaf distortion, dark green rings on fruits, water-soaked streaks on stems/petioles.",
        "favorable_weather": "Dry periods with high aphid populations.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rogue out infected plants immediately. Grow barrier crops like maize/sorghum.",
            "biological_spray": "Neem oil to deter vectors.",
            "mechanical": "Use insect-proof net in nursery."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector Control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "No cure for virus. Spray insecticides to control aphid vectors."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony masses on leaves, stems, and fruits. Sooty mould develops on honeydew.",
        "favorable_weather": "Dry and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control ants, remove alternate weed hosts.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Wash with strong jet of water."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Add sticker to spray. Ensure thorough coverage of hidden pests."
          }
        }
      },
      {
        "issue_name": "Stem / Foot Rot (Phytophthora)",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Water-soaked patches on the stem near ground level, tissues rot, plant topples.",
        "favorable_weather": "Waterlogging, poor drainage, heavy rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage, plant on raised beds.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Avoid collar region wetting during irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g (Drenching)",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench the soil around the base of the plant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "guava",
    "common_name": "Guava",
    "hindi_name": "अमरूद",
    "regional_names": { "marathi": "पेरू", "tamil": "கொய்யா", "telugu": "జామ" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Vegetative Growth", "day_range": "Post-pruning", "water_requirement_sensitivity": "Medium", "stage_advice": "Pruning and training." },
      { "stage_name": "Flowering", "day_range": "Ambe/Mrig Bahar", "water_requirement_sensitivity": "High", "stage_advice": "Avoid moisture stress." },
      { "stage_name": "Fruit Set", "day_range": "Post-flowering", "water_requirement_sensitivity": "High", "stage_advice": "Monitor for fruit fly." },
      { "stage_name": "Fruit Development", "day_range": "Fruit enlargement", "water_requirement_sensitivity": "High", "stage_advice": "Apply nutrients and water." },
      { "stage_name": "Maturation", "day_range": "Pre-harvest", "water_requirement_sensitivity": "Medium", "stage_advice": "Reduce water to improve sugar." },
      { "stage_name": "Harvest", "day_range": "Harvest", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest mature green/yellow fruits." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "200:100:100 NPK g/plant/year",
      "deficiencies": [
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis, small leaves.", "solution": "Foliar spray of Zinc Sulphate 33% at 30g/15L." },
        { "nutrient": "Boron", "symptoms": "Fruit cracking, internal browning.", "solution": "Foliar spray of Borax at 20g/15L." },
        { "nutrient": "Nitrogen", "symptoms": "Stunted growth, yellowing leaves.", "solution": "Apply Urea." },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "Foliar spray of Ferrous Sulphate." },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching, poor fruit taste.", "solution": "Apply MOP/SOP." },
        { "nutrient": "Magnesium", "symptoms": "Yellow patches on older leaves.", "solution": "Spray Magnesium Sulphate." },
        { "nutrient": "Calcium", "symptoms": "Poor firmness.", "solution": "Calcium Nitrate." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Guava Wilt (Fusarium/Macrophomina)",
        "type": "Fungal",
        "hindi_name": "उखटा रोग (विल्ट)",
        "symptoms": "Yellowing and drying of leaves, dieback of branches, plant death within months.",
        "favorable_weather": "Alkaline soils, monsoon season, nematode presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid waterlogging, maintain soil health with organic matter.",
            "biological_spray": "Trichoderma harzianum + Pseudomonas soil application.",
            "mechanical": "Remove and burn wilted trees."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "500 g for soil drenching",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench root zone thoroughly."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Punctures on fruit skin, maggots feed on pulp causing rot.",
        "favorable_weather": "Ripening stage, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prompt harvest, field sanitation.",
            "biological_spray": "N/A",
            "mechanical": "Methyl Eugenol traps (6-8/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Malathion 50% EC",
            "commercial_reference": "Cythion",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "300 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply as poison bait (mixed with jaggery) on foliage."
          }
        }
      },
      {
        "issue_name": "Tea Mosquito Bug",
        "type": "Insect-Pest",
        "hindi_name": "चाय मच्छर कीट",
        "symptoms": "Corky scabs on fruits, deformed fruits, shoots dieback.",
        "favorable_weather": "High humidity, flush periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on tender flushes and small fruits."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pineapple",
    "common_name": "Pineapple",
    "hindi_name": "अनानास",
    "regional_names": { "marathi": "अननस", "tamil": "அன்னாசி", "telugu": "అనాస" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Planting (Suckers/Slips)", "day_range": "0-30 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Dip suckers in fungicide before planting." },
      { "stage_name": "Vegetative Growth", "day_range": "30-300 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Regular fertilizer application, weed control." },
      { "stage_name": "Flower Induction", "day_range": "300-330 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply Ethephon to synchronize flowering." },
      { "stage_name": "Flowering", "day_range": "330-375 Days", "water_requirement_sensitivity": "High", "stage_advice": "Ensure moisture, protect from direct hot sun." },
      { "stage_name": "Fruit Development", "day_range": "375-450 Days", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture for fruit size." },
      { "stage_name": "Harvest", "day_range": "450-480 Days", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when 1/3rd to 1/2 eyes turn yellow." }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-5.5",
      "basal_dose_per_acre": "NPK 12:4:12 g/plant/year",
      "deficiencies": [
        { "nutrient": "Iron", "symptoms": "Leaves turn red/yellow, common in high pH soils.", "solution": "Foliar spray of Ferrous Sulphate." },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of leaves, small fruits.", "solution": "Foliar spray of Urea (2%)." },
        { "nutrient": "Potassium", "symptoms": "Small spots on older leaves, poor fruit quality.", "solution": "Apply MOP/SOP." },
        { "nutrient": "Zinc", "symptoms": "Crookneck symptom, twisted heart leaves.", "solution": "Spray Zinc Sulphate." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing along leaf margins.", "solution": "Spray Magnesium Sulphate." },
        { "nutrient": "Calcium", "symptoms": "Cracked fruits, internal browning.", "solution": "Apply Calcium Nitrate." },
        { "nutrient": "Copper", "symptoms": "Drooping leaves, poor root system.", "solution": "Copper spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mealy Bug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White powdery insects on roots and leaves. Transmits wilt virus.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use pest-free suckers, control ants.",
            "biological_spray": "Neem oil.",
            "mechanical": "Dip planting material in hot water."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyriphos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Dip suckers before planting, or drench."
          }
        }
      },
      {
        "issue_name": "Heart Rot / Top Rot (Phytophthora)",
        "type": "Fungal",
        "hindi_name": "हार्ट रॉट",
        "symptoms": "Central leaves easily pull out, foul smell, soft rotting at the base of leaves.",
        "favorable_weather": "High rainfall, poor drainage.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, avoid deep planting.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray focusing on the heart of the plant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jackfruit",
    "common_name": "Jackfruit",
    "hindi_name": "कटहल",
    "regional_names": { "marathi": "फणस", "tamil": "பலா", "telugu": "పనస" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Vegetative Growth", "day_range": "Years 1-3", "water_requirement_sensitivity": "Medium", "stage_advice": "Prune for framework." },
      { "stage_name": "Flowering", "day_range": "Dec-Feb", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure pollination, monitor for pests." },
      { "stage_name": "Fruit Set", "day_range": "Feb-Mar", "water_requirement_sensitivity": "High", "stage_advice": "Remove male spikes post-pollination." },
      { "stage_name": "Fruit Development", "day_range": "Mar-May", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate moisture." },
      { "stage_name": "Harvest", "day_range": "May-Aug", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when dull hollow sound on tapping." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM and NPK as per tree age",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of leaves, slow growth.", "solution": "Urea application." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit size, margin scorch.", "solution": "MOP application." },
        { "nutrient": "Zinc", "symptoms": "Small leaves, short internodes.", "solution": "Zinc spray." },
        { "nutrient": "Boron", "symptoms": "Cracking of fruits.", "solution": "Borax spray." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "Ferrous Sulphate." },
        { "nutrient": "Phosphorus", "symptoms": "Dull foliage.", "solution": "SSP application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizopus Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फल गलन",
        "symptoms": "Soft rot of young fruits with black fungal growth, premature drop.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove infected fruits.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on young fruits and inflorescences."
          }
        }
      },
      {
        "issue_name": "Shoot and Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना और फल छेदक",
        "symptoms": "Caterpillars bore into shoots and fruits, excreta seen at entrance holes.",
        "favorable_weather": "Summer and monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect and destroy infested parts.",
            "biological_spray": "Bt formulation.",
            "mechanical": "Bag fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray on affected parts."
          }
        }
      }
    ]
  },
  {
    "crop_id": "breadfruit",
    "common_name": "Breadfruit",
    "hindi_name": "ब्रेडफ्रूट",
    "regional_names": { "marathi": "निरफणस", "tamil": "ஈரப்பலா", "telugu": "సీమ పనస" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Vegetative Growth", "day_range": "Year 1-4", "water_requirement_sensitivity": "Medium", "stage_advice": "Establishment phase." },
      { "stage_name": "Flowering", "day_range": "Varies", "water_requirement_sensitivity": "Medium", "stage_advice": "Provide organic matter." },
      { "stage_name": "Fruit Development", "day_range": "Post-flowering", "water_requirement_sensitivity": "High", "stage_advice": "Requires regular moisture." },
      { "stage_name": "Harvest", "day_range": "Maturity", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest mature green for cooking." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "Rich compost/FYM",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Organic compost or Urea." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit size.", "solution": "Potash." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing between veins.", "solution": "Magnesium Sulphate." },
        { "nutrient": "Zinc", "symptoms": "Small leaves.", "solution": "Zinc spray." },
        { "nutrient": "Iron", "symptoms": "Pale new leaves.", "solution": "Iron spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots inside fruit causing rot.",
        "favorable_weather": "Humid, fruit maturity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy fallen fruits.",
            "biological_spray": "Neem oil.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Malathion 50% EC",
            "commercial_reference": "Cythion",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "300 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Poison bait application."
          }
        }
      },
      {
        "issue_name": "Dieback",
        "type": "Fungal",
        "hindi_name": "डाईबैक",
        "symptoms": "Drying of branches from tip downwards.",
        "favorable_weather": "Moisture stress or waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune affected parts, apply Bordeaux paste.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "litchi",
    "common_name": "Litchi / Lychee",
    "hindi_name": "लीची",
    "regional_names": { "bengali": "লিচু", "punjabi": "ਲੀਚੀ" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Dormancy", "day_range": "Nov-Jan", "water_requirement_sensitivity": "Low", "stage_advice": "Cold stress needed for floral induction." },
      { "stage_name": "Panicle Emergence", "day_range": "Feb", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply light irrigation, monitor pests." },
      { "stage_name": "Full Bloom", "day_range": "Mar", "water_requirement_sensitivity": "Low", "stage_advice": "Do not spray insecticides." },
      { "stage_name": "Fruit Set", "day_range": "Late Mar", "water_requirement_sensitivity": "High", "stage_advice": "Critical for moisture to prevent fruit drop." },
      { "stage_name": "Fruit Development", "day_range": "Apr-May", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate regularly to prevent fruit cracking." },
      { "stage_name": "Harvest", "day_range": "May-Jun", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest with twigs to prolong shelf life." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Varies by tree age",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Fruit cracking, browning of flesh.", "solution": "Spray Borax (0.4%) at fruit setting stage." },
        { "nutrient": "Zinc", "symptoms": "Bronzing of leaves, small leaves.", "solution": "Foliar spray of Zinc Sulphate." },
        { "nutrient": "Calcium", "symptoms": "Poor skin strength, cracking.", "solution": "Calcium Nitrate spray." },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of old leaves.", "solution": "Urea." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit sweetness.", "solution": "Apply MOP/SOP." },
        { "nutrient": "Iron", "symptoms": "Chlorosis in new flushes.", "solution": "Ferrous Sulphate." },
        { "nutrient": "Copper", "symptoms": "Dieback of twigs.", "solution": "Copper spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit and Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "फल और तना छेदक",
        "symptoms": "Larvae bore into shoots causing drying, and into developing fruits near the pedicel.",
        "favorable_weather": "Humid and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune and destroy infested shoots.",
            "biological_spray": "Trichogramma chilonis release.",
            "mechanical": "Bag fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Novalurom 10% EC",
            "commercial_reference": "Rimon",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at panicle emergence and fruit set."
          }
        }
      },
      {
        "issue_name": "Litchi Mite (Erinose Mite)",
        "type": "Insect-Pest",
        "hindi_name": "लीची माइट (मकड़ी)",
        "symptoms": "Velvety, chocolate-brown hairy growth on the lower surface of leaves. Leaves curl and dry.",
        "favorable_weather": "Warm and dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune and burn infested leaves/twigs in winter.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on new flushes."
          }
        }
      }
    ]
  },
  {
    "crop_id": "longan",
    "common_name": "Longan",
    "hindi_name": "लोंगान",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Dormancy", "day_range": "Nov-Jan", "water_requirement_sensitivity": "Low", "stage_advice": "Needs cool period." },
      { "stage_name": "Flowering", "day_range": "Spring", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires pollination." },
      { "stage_name": "Fruit Set", "day_range": "Post-flowering", "water_requirement_sensitivity": "High", "stage_advice": "Monitor moisture." },
      { "stage_name": "Fruit Development", "day_range": "Summer", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate to prevent drop." },
      { "stage_name": "Harvest", "day_range": "Late Summer", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest ripe fruits." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "Standard fruit tree NPK",
      "deficiencies": [
        { "nutrient": "Zinc", "symptoms": "Small leaves.", "solution": "Zinc spray." },
        { "nutrient": "Boron", "symptoms": "Fruit cracking.", "solution": "Boron spray." },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing foliage.", "solution": "Urea." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit size.", "solution": "MOP/SOP." },
        { "nutrient": "Magnesium", "symptoms": "Chlorosis.", "solution": "Magnesium Sulphate." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Borer",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक",
        "symptoms": "Bores into fruit.",
        "favorable_weather": "Fruiting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Neem oil.",
            "mechanical": "Netting."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "75 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at early fruit stage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rambutan",
    "common_name": "Rambutan",
    "hindi_name": "रामबूटान",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "Varies", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires high humidity." },
      { "stage_name": "Flowering", "day_range": "Spring", "water_requirement_sensitivity": "High", "stage_advice": "Sensitive to water stress." },
      { "stage_name": "Fruit Set", "day_range": "Early Summer", "water_requirement_sensitivity": "High", "stage_advice": "Needs regular irrigation." },
      { "stage_name": "Fruit Development", "day_range": "Summer", "water_requirement_sensitivity": "High", "stage_advice": "Monitor for pests." },
      { "stage_name": "Harvest", "day_range": "Late Summer/Autumn", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when skin turns red/yellow." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "Rich organic matter",
      "deficiencies": [
        { "nutrient": "Iron", "symptoms": "Chlorosis in new leaves.", "solution": "Ferrous Sulphate spray." },
        { "nutrient": "Zinc", "symptoms": "Small, mottled leaves.", "solution": "Zinc Sulphate." },
        { "nutrient": "Nitrogen", "symptoms": "Poor growth.", "solution": "Urea." },
        { "nutrient": "Potassium", "symptoms": "Poor fruit quality.", "solution": "SOP." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing of older leaves.", "solution": "Magnesium Sulphate." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White masses on fruit and stems.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ant control.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "Water jet."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on fruits."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder on young fruits.",
        "favorable_weather": "Humid and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray on appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "dragon-fruit",
    "common_name": "Dragon Fruit / Pitaya",
    "hindi_name": "ड्रैगन फ्रूट",
    "regional_names": { "marathi": "ड्रॅगन फ्रूट", "tamil": "டிராகன் பழம்", "telugu": "డ్రాగన్ ఫ్రూట్" },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Planting & Establishment", "day_range": "0-90 Days", "water_requirement_sensitivity": "Low", "stage_advice": "Trellising required, do not overwater." },
      { "stage_name": "Vegetative Growth", "day_range": "90-300 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Prune side shoots, train main stem upwards." },
      { "stage_name": "Canopy Development", "day_range": "300-400 Days", "water_requirement_sensitivity": "Medium", "stage_advice": "Allow umbrella-like canopy formation on trellis ring." },
      { "stage_name": "Budding/Flowering", "day_range": "Apr-Oct (Cycles)", "water_requirement_sensitivity": "High", "stage_advice": "Night blooming, ensure good irrigation." },
      { "stage_name": "Fruit Development", "day_range": "30-35 Days post-bloom", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture for fruit size." },
      { "stage_name": "Harvest", "day_range": "Color change", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest 3-4 days after skin turns completely red/yellow." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Rich organic compost, NPK 10:10:10 g/pillar/month",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow stems, slow growth.", "solution": "Apply compost or Urea." },
        { "nutrient": "Potassium", "symptoms": "Soft, small fruits, lower sugar content.", "solution": "SOP application during fruiting." },
        { "nutrient": "Calcium", "symptoms": "Stem tip dieback, poor fruit firmness.", "solution": "Calcium Nitrate spray." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing of older stems.", "solution": "Magnesium Sulphate." },
        { "nutrient": "Boron", "symptoms": "Flower drop, deformed fruits.", "solution": "Boron spray prior to flowering." },
        { "nutrient": "Zinc", "symptoms": "Stunted new cladodes.", "solution": "Zinc Sulphate spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Rot / Soft Rot (Erwinia / Pythium)",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Yellowing and softening of stems, foul smell, turning mushy.",
        "favorable_weather": "Excess moisture, waterlogging, wounds.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Strictly avoid overwatering, improve drainage, avoid mechanical injury.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Prune and destroy infected stems, apply Bordeaux paste on cut."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP + Streptocycline",
            "commercial_reference": "Blitox + Streptocycline",
            "dose_per_15L_pump": "45 g + 1.5 g",
            "dose_per_acre": "500 g + 15 g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on affected plants and drench soil."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Reddish-brown lesions on stems and fruits, developing dark concentric rings.",
        "favorable_weather": "High humidity, frequent rainfall.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper aeration, prune excess canopy.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on appearance of symptoms."
          }
        }
      }
    ]
  },
  {
    "crop_id": "passion-fruit",
    "common_name": "Passion Fruit",
    "hindi_name": "कृष्णा फल",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "0-6 Months", "water_requirement_sensitivity": "Medium", "stage_advice": "Train on trellis." },
      { "stage_name": "Flowering", "day_range": "Flushes", "water_requirement_sensitivity": "High", "stage_advice": "Requires insect pollination." },
      { "stage_name": "Fruit Set", "day_range": "Post-bloom", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture." },
      { "stage_name": "Fruit Development", "day_range": "60-80 Days", "water_requirement_sensitivity": "High", "stage_advice": "Apply Potash." },
      { "stage_name": "Harvest", "day_range": "Maturity", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when skin wrinkles or drops." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "Organic rich, NPK 100:50:100 g/vine",
      "deficiencies": [
        { "nutrient": "Potassium", "symptoms": "Poor fruit fill, low juice content.", "solution": "SOP application." },
        { "nutrient": "Nitrogen", "symptoms": "Stunted vine, pale leaves.", "solution": "Urea." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate." },
        { "nutrient": "Boron", "symptoms": "Empty fruits, poor fruit set.", "solution": "Borax spray." },
        { "nutrient": "Zinc", "symptoms": "Small, rosetted leaves.", "solution": "Zinc spray." },
        { "nutrient": "Calcium", "symptoms": "Dieback of tendrils.", "solution": "Calcium Nitrate." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Brown Spot (Alternaria)",
        "type": "Fungal",
        "hindi_name": "भूरा धब्बा",
        "symptoms": "Brown spots on leaves and fruits.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for aeration.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Woodiness Virus",
        "type": "Viral",
        "hindi_name": "वुडीनेस वायरस",
        "symptoms": "Misshapen, hard, woody fruits, mottled leaves.",
        "favorable_weather": "Aphid presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free planting material, rogue infected plants.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector Control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control aphid vectors."
          }
        }
      }
    ]
  },
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
  },
{
    "crop_id": "table-grapes",
    "common_name": "Table Grapes",
    "hindi_name": "अंगूर",
    "regional_names": {
      "marathi": "द्राक्षे",
      "punjabi": "ਅੰਗੂਰ",
      "tamil": "திராட்சை",
      "telugu": "ద్రాక్ష"
    },
    "category": "Fruit",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning is essential. Avoid excessive irrigation."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "30-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply first dose of nitrogen. Ensure soil moisture is optimal."
      },
      {
        "stage_name": "Shoot Growth",
        "day_range": "45-75",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain canopy. Foliar sprays of micronutrients recommended."
      },
      {
        "stage_name": "Flowering",
        "day_range": "75-90",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid overhead irrigation to prevent flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "90-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for irrigation. Apply GA3 for berry elongation."
      },
      {
        "stage_name": "Veraison (Color Change)",
        "day_range": "110-140",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply potassium. Stop nitrogen application."
      },
      {
        "stage_name": "Harvest",
        "day_range": "140-160",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when TSS is optimal. Avoid watering 7 days prior."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N: 40kg, P: 60kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves starting from older leaves, stunted shoot growth.",
          "solution": "Apply Urea @ 100g/vine or foliar spray 1% Urea (150g/15L pump, 1.5kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple reddish margins, poor root development.",
          "solution": "Apply SSP @ 50kg/acre at root zone."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal chlorosis turning necrotic, poor berry size and quality.",
          "solution": "Foliar spray of 00:52:34 @ 75g/15L pump or Sulphate of Potash @ 5kg/acre through drip."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves leaving a green wedge shape at the base.",
          "solution": "Foliar spray of Magnesium Sulphate @ 30g/15L pump (500g/acre)."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on young leaves, severe cases show completely white leaves.",
          "solution": "Foliar spray of Chelated Iron (Fe-EDTA) @ 15g/15L pump (250g/acre)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes, straggly clusters.",
          "solution": "Foliar spray of Zinc Sulphate @ 30g/15L pump (500g/acre) before flowering."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor fruit set, 'hen and chicken' symptom (uneven berry size).",
          "solution": "Foliar spray of Boron (Borax 20%) @ 15g/15L pump (200g/acre) during pre-bloom."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn, berry cracking, poor storage life.",
          "solution": "Foliar spray of Calcium Nitrate @ 30g/15L pump (500g/acre) post fruit set."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Interveinal chlorosis on younger leaves, similar to iron but with wider green bands along veins.",
          "solution": "Foliar spray of Manganese Sulphate @ 30g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellowish oil spots on upper leaf surface, white downy growth on lower surface. Flowers and berries may dry.",
        "favorable_weather": "High humidity >80%, persistent leaf wetness, temps 20-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper canopy management, avoid dense foliage, remove infected leaves.",
            "biological_spray": "Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Pruning of infected shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP",
            "commercial_reference": "Curzate M8",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "66 days",
            "application_instructions": "Spray prophylactically and immediately upon seeing first oil spot."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी फफूंदी / छाछ्या",
        "symptoms": "Ashy white powdery patches on leaves, shoots, and developing berries. Berries may crack.",
        "favorable_weather": "Dry weather with warm days (25-30°C) and cool nights, moderate humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy to sunlight and air.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump.",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 8.3% + Mancozeb 66.7% WG",
            "commercial_reference": "Avtar",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "66 days",
            "application_instructions": "Spray at 15-day intervals during vulnerable stages."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग / उडद्या",
        "symptoms": "Beetles scrap the swelling buds and young shoots just after pruning, causing severe bud damage.",
        "favorable_weather": "Warm weather immediately following pruning.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation, remove weeds.",
            "biological_spray": "Beauveria bassiana @ 50ml/15L pump.",
            "mechanical": "Shake vines and collect beetles on sticky sheets."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60-75ml in 200L water",
            "waiting_period_phi": "35 days",
            "application_instructions": "Spray just after pruning before bud burst."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony masses on bunches, shoots, stems. Sooty mold development on honeydew.",
        "favorable_weather": "Dry, warm weather; crowded canopy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove loose bark where mealybugs hide.",
            "biological_spray": "Release of Cryptolaemus montrouzieri (Ladybird beetle) @ 1500/acre.",
            "mechanical": "Use sticky bands on main trunk."
          },
          "chemical_curative": {
            "active_ingredient": "Buprofezin 25% SC",
            "commercial_reference": "Applaud",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "40 days",
            "application_instructions": "Thorough drenching of bunches and stems; use a spreader/sticker."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Scab-like scars on berries, curled leaves, stunting of shoot growth.",
        "favorable_weather": "Warm and dry conditions during flowering and fruit set.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management in and around vineyards.",
            "biological_spray": "Verticillium lecanii @ 50g/15L pump.",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60-70ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray during evening hours, target bunches."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wine-grapes",
    "common_name": "Wine Grapes",
    "hindi_name": "वाइन अंगूर",
    "regional_names": {},
    "category": "Fruit",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning based on desired yield and quality."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "30-50",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-70",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid chemical sprays that may interfere with pollination."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "70-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Maintain optimal watering."
      },
      {
        "stage_name": "Veraison",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Regulated deficit irrigation starts to improve wine quality."
      },
      {
        "stage_name": "Maturation",
        "day_range": "120-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Monitor sugar and acidity levels closely."
      },
      {
        "stage_name": "Harvest",
        "day_range": "150-170",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at exact Brix levels required by winery."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 8 tons, N: 30kg, P: 50kg, K: 50kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Low vigor, pale leaves, poor yeast assimilation during fermentation.",
          "solution": "Apply foliar N post-flowering (Urea @ 1% spray)."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Affects wine pH. Leaves turn yellow/brown at margins.",
          "solution": "Apply SOP @ 5kg/acre through drip during veraison."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing between veins, can lead to premature defoliation.",
          "solution": "Foliar MgSO4 @ 30g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, poor cluster development.",
          "solution": "Foliar Zinc Sulphate @ 30g/15L pre-bloom."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor set, uneven ripening.",
          "solution": "Borax @ 15g/15L foliar spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Botrytis Bunch Rot",
        "type": "Fungal",
        "hindi_name": "बोट्रीटिस सड़ांध",
        "symptoms": "Grey mold on bunches near harvest, causing rot and off-flavors in wine.",
        "favorable_weather": "Cool, wet conditions during ripening.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Leaf removal in fruit zone, avoid excessive nitrogen.",
            "biological_spray": "Bacillus subtilis @ 50g/15L pump.",
            "mechanical": "Remove infected bunches immediately."
          },
          "chemical_curative": {
            "active_ingredient": "Fluopyram 17.7% + Tebuconazole 17.7% SC",
            "commercial_reference": "Luna Experience",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Apply at veraison and pre-harvest."
          }
        }
      },
      {
        "issue_name": "Grape Leafhopper",
        "type": "Insect-Pest",
        "hindi_name": "लीफ हॉपर",
        "symptoms": "Stippling on leaves, premature leaf drop, reducing sugar accumulation.",
        "favorable_weather": "Warm, dry summers.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain predatory mite populations.",
            "biological_spray": "Neem Oil 1500ppm @ 50ml/15L pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "60g in 200L water",
            "waiting_period_phi": "35 days",
            "application_instructions": "Spray when nymphs are observed on lower leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cashew-nut",
    "common_name": "Cashew Nut",
    "hindi_name": "काजू",
    "regional_names": {
      "marathi": "काजू",
      "tamil": "முந்திரி",
      "telugu": "జీడిపప్పు",
      "kannada": "ಗೇರು"
    },
    "category": "Nut",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Flushing",
        "day_range": "Post-Monsoon",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "New shoots emerge. Critical for pesticide application against TMB."
      },
      {
        "stage_name": "Panicle Emergence",
        "day_range": "Nov-Dec",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Flower panicles emerge. Needs protection."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid watering overhead. Peak TMB activity."
      },
      {
        "stage_name": "Nut Set & Development",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation can improve nut size and reduce drop."
      },
      {
        "stage_name": "Apple Development",
        "day_range": "Feb-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth of pseudo-fruit (apple)."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Collect fallen nuts from the ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "For mature trees: N: 500g, P: 125g, K: 125g per tree.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, poor shoot growth.",
          "solution": "Apply Urea @ 1kg/tree during monsoon."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dull green leaves, poor rooting.",
          "solution": "Apply Rock Phosphate @ 1kg/tree."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of leaves, reduced nut size.",
          "solution": "Apply MOP @ 500g/tree."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting of young leaves, little leaf symptom.",
          "solution": "Foliar spray of Zinc Sulphate @ 30g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracking of cashew apples, poor fruit set.",
          "solution": "Soil application of Borax @ 50g/tree."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Tea Mosquito Bug",
        "type": "Insect-Pest",
        "hindi_name": "चाय मच्छर कीट (TMB)",
        "symptoms": "Nymphs and adults suck sap from tender shoots, panicles, and young nuts. Causes necrotic lesions, drying of shoots (blossom blight), and dropping of immature nuts.",
        "favorable_weather": "Cloudy weather and high humidity post-monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of dead/drying branches, weed removal.",
            "biological_spray": "Beauveria bassiana @ 50ml/15L pump.",
            "mechanical": "Use yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda-cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Three rounds of spray: Flushing (Nov), Flowering (Dec), Fruit set (Jan)."
          }
        }
      },
      {
        "issue_name": "Cashew Stem and Root Borer (CSRB)",
        "type": "Insect-Pest",
        "hindi_name": "तना और जड़ बेधक",
        "symptoms": "Presence of frass (powdery mass) and gummosis at the base of the trunk. Yellowing of canopy, eventual death of tree.",
        "favorable_weather": "Year-round, peaks in dry season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, avoid mechanical injury to roots/trunk.",
            "biological_spray": "Metarhizium anisopliae applied to soil around base.",
            "mechanical": "Manually extract grubs using a wire probe."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Drenching the trunk base",
            "waiting_period_phi": "Not applicable (trunk tx)",
            "application_instructions": "Swab trunk up to 1m height with Chlorpyrifos solution (10ml/L) or pour into borer holes."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज",
        "symptoms": "Dark brown lesions on leaves, tender shoots, and panicles. Exacerbated by TMB damage.",
        "favorable_weather": "High humidity, continuous drizzle during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate spacing for aeration.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L pump.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at flushing and flowering stages."
          }
        }
      }
    ]
  },
  {
    "crop_id": "walnut",
    "common_name": "Walnut",
    "hindi_name": "अखरोट",
    "regional_names": {},
    "category": "Nut",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for early shoot growth."
      },
      {
        "stage_name": "Flowering (Catkins/Pistillate)",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Pollination occurs. Protect from late frosts."
      },
      {
        "stage_name": "Nut Development",
        "day_range": "May-Jul",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate moisture needed for nut sizing."
      },
      {
        "stage_name": "Shell Hardening",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Kernel filling begins."
      },
      {
        "stage_name": "Kernel Maturation",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Oil accumulation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Hull splits. Shake trees and gather nuts."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Mature tree: N: 1kg, P: 500g, K: 500g",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, short terminal growth, smaller nuts.",
          "solution": "Apply Urea split in spring and early summer."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, chlorosis, dieback of twigs.",
          "solution": "Foliar Zinc Sulphate @ 30g/15L pump in early spring."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Shoot dieback, misshapen nuts, empty shells.",
          "solution": "Apply Borax to soil @ 100g/tree."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Upward curling of leaves, marginal necrosis, poor kernel fill.",
          "solution": "Soil application of MOP or SOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Walnut Blight",
        "type": "Bacterial",
        "hindi_name": "अखरोट अंगमारी (ब्लाइट)",
        "symptoms": "Black, necrotic spots on leaves, shoots, and catkins. Dark lesions on the hull, leading to nut drop or internal rot.",
        "favorable_weather": "Wet, rainy conditions during spring (bud break to flowering).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune to open canopy for rapid drying. Remove blighted twigs.",
            "biological_spray": "Bacillus subtilis-based bio-bactericides.",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP + Streptomycin",
            "commercial_reference": "Blitox + Plantomycin",
            "dose_per_15L_pump": "45g COC + 2g Strep",
            "dose_per_acre": "600g COC + 30g Strep in 200L",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at early bud break, pre-bloom, and post-bloom."
          }
        }
      },
      {
        "issue_name": "Codling Moth",
        "type": "Insect-Pest",
        "hindi_name": "कोडलिंग मोथ",
        "symptoms": "Larvae bore into the nuts, feeding on the kernel, causing early nut drop and rendering mature nuts unmarketable. Frass visible at entry hole.",
        "favorable_weather": "Warm spring and summer temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Orchard sanitation, prompt harvesting.",
            "biological_spray": "Release of Trichogramma wasps.",
            "mechanical": "Pheromone traps for monitoring and mating disruption."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray timed with trap catches (egg hatch)."
          }
        }
      }
    ]
  },
  {
    "crop_id": "betel-nut",
    "common_name": "Betel Nut / Areca Nut",
    "hindi_name": "सुपारी",
    "regional_names": {
      "kannada": "ಅಡಿಕೆ",
      "malayalam": "അടയ്ക്ക",
      "tamil": "பாக்கு"
    },
    "category": "Nut",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Inflorescence Emergence",
        "day_range": "Nov-Feb",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid moisture stress."
      },
      {
        "stage_name": "Button (Nut) Set",
        "day_range": "Feb-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Manage root grubs."
      },
      {
        "stage_name": "Nut Development",
        "day_range": "Apr-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect from heavy monsoon rains (Koleroga)."
      },
      {
        "stage_name": "Maturation",
        "day_range": "Aug-Nov",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Nut hardening."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest as per market requirement (tender vs ripe)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Per palm: FYM 12kg, N: 100g, P: 40g, K: 140g",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, reduced growth, smaller nuts.",
          "solution": "Apply Urea @ 200g/palm/year in two splits."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowish-orange spots on older leaves, marginal necrosis.",
          "solution": "Apply MOP @ 200g/palm/year."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of outer whorl of leaves with a green band along the midrib.",
          "solution": "Apply Magnesium Sulphate @ 100g/palm."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Crown choking, crinkling of emerging leaves.",
          "solution": "Apply Borax @ 25g/palm."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Koleroga (Fruit Rot / Mahali)",
        "type": "Fungal",
        "hindi_name": "फल सड़ांध (कोलेरोगा)",
        "symptoms": "Rotting and dropping of immature nuts during heavy monsoons. White mycelial mass on fallen nuts.",
        "favorable_weather": "Heavy continuous rainfall, high humidity (>90%), temp 20-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean crown, remove and destroy infected bunches. Improve drainage.",
            "biological_spray": "Pseudomonas fluorescens prophylactic spray.",
            "mechanical": "Cover bunches with polythene covers (bunch bagging) before monsoon."
          },
          "chemical_curative": {
            "active_ingredient": "Bordeaux Mixture 1%",
            "commercial_reference": "Copper Sulphate + Lime",
            "dose_per_15L_pump": "150g CuSO4 + 150g Lime",
            "dose_per_acre": "Thorough spray on bunches",
            "waiting_period_phi": "15 days",
            "application_instructions": "1st spray just before monsoon, 2nd spray after 40 days, 3rd spray if monsoon extends."
          }
        }
      },
      {
        "issue_name": "Root Grub / White Grub",
        "type": "Insect-Pest",
        "hindi_name": "सफेद लट (रूट ग्रब)",
        "symptoms": "Grubs feed on roots, causing yellowing of leaves, tapering of the stem, drop in yield, and eventually death of the palm.",
        "favorable_weather": "Onset of monsoon triggers adult beetle emergence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing to expose grubs to birds.",
            "biological_spray": "EPN (Entomopathogenic Nematodes) or Metarhizium anisopliae soil application.",
            "mechanical": "Light traps for adult beetles."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Soil drenching around base",
            "waiting_period_phi": "30 days",
            "application_instructions": "Drench soil around the palm in May-June and Sept-Oct."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fox-nut",
    "common_name": "Fox Nut / Makhana",
    "hindi_name": "मखाना",
    "regional_names": {},
    "category": "Nut",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Seed Sowing/Transplanting",
        "day_range": "Dec-Jan (Transplant Feb-Mar)",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires standing water (0.5 to 1.0 m depth)."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Leaves expand to cover water surface."
      },
      {
        "stage_name": "Flowering",
        "day_range": "May-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Flowers emerge above water level."
      },
      {
        "stage_name": "Fruiting / Seed Development",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Spongy berry development under water."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Oct",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds mature, berry bursts, seeds settle at bottom. Manual collection from pond bed."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5 (Pond water/sediment)",
      "basal_dose_per_acre": "Usually depends on pond fertility. N: 40kg, P: 25kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of floating leaves, poor leaf size.",
          "solution": "Apply Neem-coated Urea as mud balls placed in the pond root zone."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted root growth, delayed flowering.",
          "solution": "Apply SSP in the pond soil before transplanting."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis of young leaves.",
          "solution": "Often adequate in flooded soils, but if pH is high, spray Fe-EDTA on foliage."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Clusters of aphids on tender leaves and flowers, sucking sap, causing curling and sooty mold.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain weed-free ponds.",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L pump.",
            "mechanical": "Wash off with water jets if feasible."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray on foliage avoiding water contamination as much as possible."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Brown to black spots on floating leaves, coalescing to rot the leaf.",
        "favorable_weather": "High humidity and continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overcrowding.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "raisin-grapes",
    "common_name": "Raisin Grapes",
    "hindi_name": "किशमिश अंगूर",
    "regional_names": {},
    "category": "Fruit",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune for optimal cane positioning."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "30-50",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor for early pest activity."
      },
      {
        "stage_name": "Shoot Growth",
        "day_range": "50-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure strong canopy development."
      },
      {
        "stage_name": "Flowering",
        "day_range": "70-85",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Foliar nutrition critical."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "85-105",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate water prevents fruit drop."
      },
      {
        "stage_name": "Veraison",
        "day_range": "105-130",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Potassium applied for sugar accumulation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "130-160",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at very high Brix for drying."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N: 40kg, P: 50kg, K: 50kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, poor growth.",
          "solution": "Apply Urea @ 1% spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal chlorosis.",
          "solution": "Foliar SOP @ 5kg/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis.",
          "solution": "MgSO4 @ 30g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Zinc Sulphate @ 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor set.",
          "solution": "Borax @ 15g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी फफूंदी",
        "symptoms": "White powder on leaves and fruit.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Open canopy.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Myclobutanil 10% WP",
            "commercial_reference": "Systhane",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony masses.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove loose bark.",
            "biological_spray": "Cryptolaemus ladybirds.",
            "mechanical": "Sticky bands."
          },
          "chemical_curative": {
            "active_ingredient": "Spirotetramat 15.31% OD",
            "commercial_reference": "Movento",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Thorough coverage."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Oil spots on leaves, white down on underside.",
        "favorable_weather": "High humidity, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Prune early."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethomorph 50% WP",
            "commercial_reference": "Acrobat",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "28 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "almond",
    "common_name": "Almond",
    "hindi_name": "बादाम",
    "regional_names": {},
    "category": "Nut",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning of dead/diseased branches."
      },
      {
        "stage_name": "Bud Break",
        "day_range": "Feb",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for early pest management."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Feb-Mar",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Ensure cross-pollination. Avoid frost damage."
      },
      {
        "stage_name": "Nut Set & Growth",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate moisture needed for sizing."
      },
      {
        "stage_name": "Hull Split",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor for Navel Orangeworm."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when hulls open."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 80kg, P: 40kg, K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, reduced yield.",
          "solution": "Split N application in spring."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, rosetting.",
          "solution": "Foliar Zinc Sulphate @ 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Gumming on nuts, drop.",
          "solution": "Soil apply Borax @ 15kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorched leaf margins.",
          "solution": "Apply SOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shot Hole",
        "type": "Fungal",
        "hindi_name": "शॉट होल",
        "symptoms": "Small spots on leaves that drop out, leaving 'shot holes'.",
        "favorable_weather": "Wet spring weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove infected leaves.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Pruning."
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at petal fall."
          }
        }
      },
      {
        "issue_name": "Navel Orangeworm",
        "type": "Insect-Pest",
        "hindi_name": "नेवल ऑरेंजवर्म",
        "symptoms": "Larvae feed on kernel inside hull. Webbing and frass.",
        "favorable_weather": "Warm weather at hull split.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Winter sanitation (mummy nut removal).",
            "biological_spray": "Bt kurstaki.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at early hull split."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling of leaves, yellowing, webbing.",
        "favorable_weather": "Hot, dry, dusty conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Dust control in orchards.",
            "biological_spray": "Predatory mites release.",
            "mechanical": "Water sprays."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Apply when mite threshold reached."
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
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pruning."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Wind pollination occurs."
      },
      {
        "stage_name": "Nut Set & Growth",
        "day_range": "Apr-Jun",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Shell growth."
      },
      {
        "stage_name": "Kernel Filling",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for split nuts and full kernels."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Hull separates from shell easily."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "N: 60kg, P: 30kg, K: 50kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing, poor shoot growth.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, delayed leafing.",
          "solution": "Zinc foliar spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Blank nuts.",
          "solution": "Boron soil application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Botryosphaeria Blight",
        "type": "Fungal",
        "hindi_name": "ब्लाइट",
        "symptoms": "Black lesions on rachis, nuts, and shoots.",
        "favorable_weather": "Humid, rainy springs.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning out dead wood.",
            "biological_spray": "Bacillus species.",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray pre-bloom and post-bloom."
          }
        }
      },
      {
        "issue_name": "Navel Orangeworm",
        "type": "Insect-Pest",
        "hindi_name": "नेवल ऑरेंजवर्म",
        "symptoms": "Worms feeding in the nuts.",
        "favorable_weather": "Warm summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Mummy destruction.",
            "biological_spray": "Bt.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Hull split application."
          }
        }
      },
      {
        "issue_name": "Alternaria Late Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया लीफ स्पॉट",
        "symptoms": "Black spots on leaves and fruit late in season.",
        "favorable_weather": "High humidity, late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "Avoid overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin + Difenoconazole",
            "commercial_reference": "Amistar Top",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "28 days",
            "application_instructions": "Foliar spray."
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
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prune suckers."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollination."
      },
      {
        "stage_name": "Nut Set & Growth",
        "day_range": "Apr-Jul",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigation critical for shell sizing."
      },
      {
        "stage_name": "Kernel Filling",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water stress leads to blanks."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nuts fall to ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale foliage, small nuts.",
          "solution": "Urea application in spring."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor set, blank nuts.",
          "solution": "Foliar Borax pre-bloom."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal chlorosis.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Eastern Filbert Blight",
        "type": "Fungal",
        "hindi_name": "फिल्बर्ट ब्लाइट",
        "symptoms": "Cankers on branches, dying branches.",
        "favorable_weather": "Wet springs.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune 2 feet below canker.",
            "biological_spray": "None highly effective.",
            "mechanical": "Burn prunings."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Hydroxide 77% WP",
            "commercial_reference": "Kocide",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray at bud break."
          }
        }
      },
      {
        "issue_name": "Filbert Worm",
        "type": "Insect-Pest",
        "hindi_name": "फिल्बर्ट कीड़ा",
        "symptoms": "Larvae inside nuts.",
        "favorable_weather": "Mid-summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Trichogramma wasps.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Esfenvalerate 5% EC",
            "commercial_reference": "Asana",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray based on trap catch."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sooty mold, honeydew, curled leaves.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem Oil.",
            "mechanical": "Ladybugs."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray."
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
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for foliar nutrition."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Apr-May",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Pollination."
      },
      {
        "stage_name": "Nut Development",
        "day_range": "Jun-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water deficit limits nut size."
      },
      {
        "stage_name": "Kernel Filling",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water deficit limits filling."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Shuck split."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 80kg, P: 40kg, K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Split N application."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, narrow leaves.",
          "solution": "Frequent foliar Zinc sprays."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching.",
          "solution": "Soil application of MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pecan Scab",
        "type": "Fungal",
        "hindi_name": "पीकान स्कैब",
        "symptoms": "Black spots on leaves and shucks, causing nut drop.",
        "favorable_weather": "Frequent rains, high humidity in spring/summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for airflow.",
            "biological_spray": "Serenade.",
            "mechanical": "Resistant varieties."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray pre-pollination and through summer."
          }
        }
      },
      {
        "issue_name": "Pecan Weevil",
        "type": "Insect-Pest",
        "hindi_name": "पीकान वीविल",
        "symptoms": "Grubs in mature nuts, emergence holes in shells.",
        "favorable_weather": "Drought followed by heavy rain in late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Trunk traps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbaryl 50% WP",
            "commercial_reference": "Sevin",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when adults emerge in August."
          }
        }
      },
      {
        "issue_name": "Aphids (Yellow and Black)",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellow spots on leaves, early leaf drop.",
        "favorable_weather": "Hot summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve ladybugs.",
            "biological_spray": "Neem Oil.",
            "mechanical": "Water pressure."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
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
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Flushing",
        "day_range": "Post-harvest",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Vegetative growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect racemes from pests."
      },
      {
        "stage_name": "Nut Set",
        "day_range": "Oct-Nov",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield."
      },
      {
        "stage_name": "Oil Accumulation",
        "day_range": "Dec-Feb",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid stress."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Mar-May",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Collect fallen nuts."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 60kg, P: 10kg (sensitive to P), K: 60kg",
      "deficiencies": [
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis of young leaves.",
          "solution": "Foliar Fe-EDTA."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor nut quality.",
          "solution": "SOP application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Macadamia Nut Borer",
        "type": "Insect-Pest",
        "hindi_name": "नट बोरर",
        "symptoms": "Larvae bore into husks and kernels.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Trichogramma.",
            "mechanical": "Pheromone trapping."
          },
          "chemical_curative": {
            "active_ingredient": "Indoxacarb 14.5% SC",
            "commercial_reference": "Avaunt",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Apply at early husk crack/set."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Damage to flowers, reducing set.",
        "favorable_weather": "Dry conditions during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Beauveria.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray racemes."
          }
        }
      },
      {
        "issue_name": "Phytophthora Root Rot",
        "type": "Fungal",
        "hindi_name": "रूट रोट",
        "symptoms": "Tree decline, yellowing, trunk cankers.",
        "favorable_weather": "Waterlogged soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Mounding."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl MZ 72% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "Soil drench",
            "waiting_period_phi": "30 days",
            "application_instructions": "Drench around root zone."
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
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Flowering",
        "day_range": "Oct-Dec",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires specific large bees for pollination."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "Jan-Oct",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Takes 14 months to mature."
      },
      {
        "stage_name": "Maturation",
        "day_range": "Nov-Dec",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Pods turn woody."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Jan-Mar",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pods fall naturally."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-6.5",
      "basal_dose_per_acre": "Wild harvested mostly; cultivated NPK as per soil test.",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor growth.",
          "solution": "Rock phosphate."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Organic compost."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Epsom salts."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aflatoxin/Aspergillus",
        "type": "Fungal",
        "hindi_name": "एस्परगिलस",
        "symptoms": "Mold on nuts post-harvest.",
        "favorable_weather": "High humidity post-harvest.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rapid drying of nuts after collection.",
            "biological_spray": "None.",
            "mechanical": "Proper storage."
          },
          "chemical_curative": {
            "active_ingredient": "N/A (Post-harvest management)",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dry nuts to <10% moisture immediately."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Spots on leaves.",
        "favorable_weather": "Rainy season.",
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
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray if severe."
          }
        }
      },
      {
        "issue_name": "Rodents",
        "type": "Animal",
        "hindi_name": "कृंतक (चूहे)",
        "symptoms": "Gnawed pods on ground.",
        "favorable_weather": "All weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Bromadiolone",
            "commercial_reference": "Ratol",
            "dose_per_15L_pump": "Bait",
            "dose_per_acre": "Bait stations",
            "waiting_period_phi": "N/A",
            "application_instructions": "Place bait in protected stations."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chestnut",
    "common_name": "Chestnut (Sweet)",
    "hindi_name": "शाहबलूत",
    "regional_names": {},
    "category": "Nut",
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "Mar-Apr",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spring growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Late flowering avoids frost."
      },
      {
        "stage_name": "Burr Development",
        "day_range": "Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for nut sizing."
      },
      {
        "stage_name": "Nut Maturation",
        "day_range": "Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Drought leads to small nuts."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Burrs open and drop nuts."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 50kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing, slow growth.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Poor nut size.",
          "solution": "SOP application."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis if soil pH is too high.",
          "solution": "Foliar Iron or elemental sulfur to soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Chestnut Blight",
        "type": "Fungal",
        "hindi_name": "चेस्टनट ब्लाइट",
        "symptoms": "Cankers on bark, dieback above canker.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties (Chinese/hybrids).",
            "biological_spray": "Hypovirulent strains.",
            "mechanical": "Prune and destroy infected wood."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "Paste",
            "dose_per_acre": "Paste on cankers",
            "waiting_period_phi": "N/A",
            "application_instructions": "Scrape bark and apply fungicidal paste."
          }
        }
      },
      {
        "issue_name": "Chestnut Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in nuts, grubs inside.",
        "favorable_weather": "Late summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prompt harvest, heat treat nuts.",
            "biological_spray": "Beauveria.",
            "mechanical": "Collect daily."
          },
          "chemical_curative": {
            "active_ingredient": "Carbaryl 50% WP",
            "commercial_reference": "Sevin",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when adults emerge in August."
          }
        }
      },
      {
        "issue_name": "Phytophthora Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़ांध",
        "symptoms": "Ink disease, black sap from base, tree death.",
        "favorable_weather": "Poor drainage, heavy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant on berms/well-drained soil.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Avoid overwatering."
          },
          "chemical_curative": {
            "active_ingredient": "Fosetyl-Al 80% WP",
            "commercial_reference": "Aliette",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "Foliar/Drench",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray or soil drench."
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
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Pollen Flight",
        "day_range": "May",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollination."
      },
      {
        "stage_name": "Cone Initiation",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cones take 18-36 months to mature."
      },
      {
        "stage_name": "Seed Development",
        "day_range": "Year 2 Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Filling of seeds inside cones."
      },
      {
        "stage_name": "Cone Maturation",
        "day_range": "Year 3 Aug",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cones turn brown."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest cones before they open."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "Wild harvested generally. Deep well-drained soils.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellow needles.",
          "solution": "Organic mulch."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Rock phosphate."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorotic new needles.",
          "solution": "Iron chelates."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cone Beetles",
        "type": "Insect-Pest",
        "hindi_name": "कोन भृंग",
        "symptoms": "Damage to cones, sap oozing, dead cones.",
        "favorable_weather": "Dry summers.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove damaged cones.",
            "biological_spray": "None.",
            "mechanical": "Sanitation."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Tree spray",
            "waiting_period_phi": "60 days",
            "application_instructions": "Rarely applied in wild, but can spray early season."
          }
        }
      },
      {
        "issue_name": "Needle Blight",
        "type": "Fungal",
        "hindi_name": "नीडल ब्लाइट",
        "symptoms": "Browning of needles.",
        "favorable_weather": "Humid, cool conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Thinning.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "45g",
            "dose_per_acre": "600g in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sooty mold on needles.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Predator conservation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray."
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
    "season": [
      "Rabi",
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Leaf Out",
        "day_range": "Mar",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spring growth."
      },
      {
        "stage_name": "Pollination",
        "day_range": "Apr",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Wind pollination (requires male trees)."
      },
      {
        "stage_name": "Seed Development",
        "day_range": "May-Aug",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plum-like seeds develop."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Seeds fall, flesh smells foul. Wear gloves."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-8.0",
      "basal_dose_per_acre": "Very hardy. N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves.",
          "solution": "Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "DAP."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in high pH.",
          "solution": "Iron chelates."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Nematodes",
        "type": "Nematode",
        "hindi_name": "निमेटोड",
        "symptoms": "Root galling, stunted growth.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold intercropping.",
            "biological_spray": "Paecilomyces lilacinus.",
            "mechanical": "Solarization."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "Soil application",
            "dose_per_acre": "1kg",
            "waiting_period_phi": "60 days",
            "application_instructions": "Apply to soil."
          }
        }
      },
      {
        "issue_name": "Leaf Spots",
        "type": "Fungal",
        "hindi_name": "लीफ स्पॉट",
        "symptoms": "Spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake leaves.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
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
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Transplanting",
        "day_range": "Jun-Jul",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires 1-2 feet of standing water."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "Jul-Aug",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Leaves cover water surface."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Aug-Sep",
        "water_requirement_sensitivity": "High",
        "stage_advice": "White flowers appear."
      },
      {
        "stage_name": "Nut Development",
        "day_range": "Sep-Oct",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nuts develop under water."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Oct-Dec",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Multiple pickings (manual)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 30kg, P: 20kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of floating leaves.",
          "solution": "Urea mud balls."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor rooting.",
          "solution": "SSP in pond mud."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Foliar Zinc spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Singhara Beetle",
        "type": "Insect-Pest",
        "hindi_name": "सिंघाड़ा भृंग (Galerucella)",
        "symptoms": "Grubs and adults skeletonize the floating leaves.",
        "favorable_weather": "Humid monsoon weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove floating weeds.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Manual collection of egg masses."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray avoiding heavy pond runoff."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap from tender leaves and stems.",
        "favorable_weather": "Dry spells in monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predators.",
            "biological_spray": "Neem oil.",
            "mechanical": "Washing."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "लीफ स्पॉट",
        "symptoms": "Brown circular spots on leaves.",
        "favorable_weather": "High humidity, rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Optimal spacing.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Kharif",
      "Rabi"
    ],
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
    "season": [
      "Kharif",
      "Rabi"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Rabi",
      "Kharif"
    ],
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
    "season": [
      "Kharif"
    ],
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
];
