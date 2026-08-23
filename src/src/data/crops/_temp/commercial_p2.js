export const data = [
  {
    "crop_id": "cotton",
    "common_name": "Cotton",
    "hindi_name": "कपास",
    "regional_names": {
      "marathi": "कापूस",
      "punjabi": "ਕਪਾਹ",
      "tamil": "பருத்தி",
      "telugu": "పత్తి"
    },
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure proper seed placement."
      },
      {
        "stage_name": "Seedling",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Maintain weed-free environment."
      },
      {
        "stage_name": "Squaring",
        "day_range": "35-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for square formation."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress to prevent flower drop."
      },
      {
        "stage_name": "Boll Development",
        "day_range": "80-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Needs optimal nutrition."
      },
      {
        "stage_name": "Boll Opening",
        "day_range": "110-130",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation to allow bolls to open fully."
      },
      {
        "stage_name": "Picking 1",
        "day_range": "130-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest during dry weather."
      },
      {
        "stage_name": "Picking 2",
        "day_range": "150-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Final harvest of remaining bolls."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.8-8.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 2% foliar spray, 500g per 15L pump."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple discoloration.",
          "solution": "DAP 2% foliar spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing and necrosis of leaf margins.",
          "solution": "MOP 5kg per acre via fertigation."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 1% spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes.",
          "solution": "Zinc Sulphate 5g/L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Shedding of squares and young bolls.",
          "solution": "Borax 0.1% spray."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves.",
          "solution": "Sulphur 80% WDG 2g/L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves.",
          "solution": "Ferrous Sulphate 0.5% spray."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Hooking of young leaves.",
          "solution": "Calcium Nitrate 2g/L spray."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Mottling of young leaves.",
          "solution": "Manganese Sulphate 2g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "American Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "अमेरिकन सुंडी",
        "symptoms": "Larvae feed on squares, flowers, and bolls. Large holes in bolls with feces visible.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, crop rotation with non-hosts.",
            "biological_spray": "HaNPV 250 LE/ha, Bacillus thuringiensis 1 kg/ha.",
            "mechanical": "Pheromone traps @ 5/acre, Light traps @ 1/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "65-75 ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on first sight of larvae."
          }
        }
      },
      {
        "issue_name": "Pink Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "गुलाबी सुंडी",
        "symptoms": "Larvae enter bolls and feed on seeds. Rosette flowers.",
        "favorable_weather": "Dry weather followed by high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely sowing, destruction of crop residues.",
            "biological_spray": "Trichogramma bactrae @ 1.5 lakh/ha.",
            "mechanical": "Pheromone traps @ 10/acre for monitoring."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "88 g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray when ETL is reached."
          }
        }
      },
      {
        "issue_name": "Spotted Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "चितकबरी सुंडी",
        "symptoms": "Boring into terminal shoots causing them to droop and wither.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid late sowing.",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Collection and destruction of infested shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage of foliage."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing of leaves, sooty mold due to honeydew excretion, vectors Leaf Curl Virus.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Verticillium lecanii 5g/L.",
            "mechanical": "Yellow sticky traps @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "20 g",
            "dose_per_acre": "250 g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Ensure coverage on underside of leaves."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Leaves turn yellow, then red and curl downwards. 'Hopper burn' symptom.",
        "favorable_weather": "Cloudy weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Neem oil 10000 ppm 2ml/L.",
            "mechanical": "Avoid excess nitrogen."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "40-50 ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray on appearance."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Curling of leaves, stunted growth, sooty mold.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve ladybird beetles.",
            "biological_spray": "Verticillium lecanii 5g/L.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "40 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray when colonies are seen."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Intercropping with non-hosts.",
            "biological_spray": "Neem Seed Kernel Extract (NSKE) 5%.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray early morning."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony masses on stems and leaves, severe stunting.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternative weed hosts like Parthenium.",
            "biological_spray": "Cryptolaemus montrouzieri (predator beetle) release.",
            "mechanical": "Prune and destroy heavily infested parts."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Add sticker for better adherence to waxy bodies."
          }
        }
      },
      {
        "issue_name": "Red Cotton Bug",
        "type": "Insect-Pest",
        "hindi_name": "लाल कपास कीट",
        "symptoms": "Red bugs congregate on bolls and seeds, staining the lint.",
        "favorable_weather": "Maturity stage of crop.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Hand collection in early stages."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Target congregating nymphs and adults."
          }
        }
      },
      {
        "issue_name": "Dusky Cotton Bug",
        "type": "Insect-Pest",
        "hindi_name": "डस्की कपास कीट",
        "symptoms": "Feeds on seeds in open bolls, lowering seed weight and oil content.",
        "favorable_weather": "Dry season during boll opening.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid delaying harvest.",
            "biological_spray": "Neem oil 10000 ppm 2ml/L.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "300 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray open bolls carefully."
          }
        }
      },
      {
        "issue_name": "Leaf Curl Virus (CLCuD)",
        "type": "Viral",
        "hindi_name": "पत्ता मरोड़ रोग",
        "symptoms": "Upward or downward curling of leaves, thickened veins, enations on underside.",
        "favorable_weather": "High whitefly population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, manage whitefly vector.",
            "biological_spray": "None for virus directly.",
            "mechanical": "Uproot and burn infected plants early."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP (for vector)",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "20 g",
            "dose_per_acre": "250 g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Vector control only. No cure for virus."
          }
        }
      },
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Angular, water-soaked lesions on leaves. 'Black arm' on stems.",
        "favorable_weather": "High humidity and rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Acid delinting of seeds.",
            "biological_spray": "Pseudomonas fluorescens 10g/L.",
            "mechanical": "Avoid overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate + Copper oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 30g",
            "dose_per_acre": "30g + 500g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Grey Mildew",
        "type": "Fungal",
        "hindi_name": "ग्रे फफूंदी (दहिया रोग)",
        "symptoms": "Irregular angular, pale translucent spots on lower surface, greyish white powdery growth.",
        "favorable_weather": "Cool and humid nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, removal of lower leaves.",
            "biological_spray": "Trichoderma viride 5g/L.",
            "mechanical": "Improve aeration."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "200 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply immediately upon symptom detection."
          }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Brown, irregular spots with concentric rings on older leaves.",
        "favorable_weather": "Intermittent rains, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain crop vigor through proper nutrition.",
            "biological_spray": "Bacillus subtilis 5g/L.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing and wilting of leaves starting from base. Brown discoloration of vascular tissues.",
        "favorable_weather": "Soil temp 25-28C, sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, crop rotation.",
            "biological_spray": "Trichoderma harzianum soil application.",
            "mechanical": "Remove wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "Drenching: 20 g",
            "dose_per_acre": "Drenching: 500 g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench soil around base of plants."
          }
        }
      },
      {
        "issue_name": "Verticillium Wilt",
        "type": "Fungal",
        "hindi_name": "वर्टिसिलियम विल्ट",
        "symptoms": "Mottling and wilting. Vascular browning is lighter than Fusarium.",
        "favorable_weather": "Cooler soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with cereals, avoid solanaceous crops.",
            "biological_spray": "Trichoderma spp. enriched FYM.",
            "mechanical": "Solarization of soil."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil drenching."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Sudden wilting of entire plant. Roots become soft and decayed.",
        "favorable_weather": "High soil moisture, heavy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve soil drainage.",
            "biological_spray": "Trichoderma viride soil application.",
            "mechanical": "Subsoiling."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench root zone."
          }
        }
      },
      {
        "issue_name": "Myrothecium Leaf Spot",
        "type": "Fungal",
        "hindi_name": "मायरोथेशियम लीफ स्पॉट",
        "symptoms": "Circular to irregular brown spots with raised margins. Fructifications visible.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Tobacco Streak Virus",
        "type": "Viral",
        "hindi_name": "टोबैको स्ट्रीक वायरस",
        "symptoms": "Necrotic streaks on leaves, stems, and squares.",
        "favorable_weather": "High thrips population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control parthenium weed, manage thrips vector.",
            "biological_spray": "None.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC (for vector)",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "180 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control thrips vector."
          }
        }
      },
      {
        "issue_name": "Tarnished Plant Bug",
        "type": "Insect-Pest",
        "hindi_name": "प्लांट बग",
        "symptoms": "Shedding of squares, malformed bolls.",
        "favorable_weather": "Warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Neem based sprays.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Acephate 75% SP",
            "commercial_reference": "Asataf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "350 g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jute",
    "common_name": "Jute",
    "hindi_name": "जूट / पटसन",
    "regional_names": {
      "bengali": "পাট",
      "assamese": "মৰাপাট"
    },
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "10-25",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Weed control is critical."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "25-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth phase, requires N."
      },
      {
        "stage_name": "Pre-flowering",
        "day_range": "60-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor for semilooper."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at early pod stage for best fiber."
      },
      {
        "stage_name": "Retting",
        "day_range": "110-130",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Submerge in slow-running clear water."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 15kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted plants, pale green leaves.",
          "solution": "Urea top dressing 10kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, purplish leaves.",
          "solution": "SSP basal application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, susceptible to diseases.",
          "solution": "MOP application."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of newer leaves.",
          "solution": "Gypsum 50kg/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, stunted internodes.",
          "solution": "Zinc Sulphate spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "FeSO4 spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed leaves.",
          "solution": "Borax application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Dark brown lesions on stem, leading to rotting.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on first symptom."
          }
        }
      },
      {
        "issue_name": "Jute Semilooper",
        "type": "Insect-Pest",
        "hindi_name": "सेमीलूपर",
        "symptoms": "Caterpillars feed on apical leaves.",
        "favorable_weather": "Humid, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Hand picking."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "रोएंदार सुंडी",
        "symptoms": "Defoliation of entire plant.",
        "favorable_weather": "Sporadic.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Light traps.",
            "biological_spray": "Bt.",
            "mechanical": "Collect and destroy egg masses."
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
      },
      {
        "issue_name": "Yellow Mite",
        "type": "Insect-Pest",
        "hindi_name": "पीली मकड़ी",
        "symptoms": "Leaves curl downwards, turn coppery.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Thorough coverage."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Irregular dark lesions on leaves and stem.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Seed treatment.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Soft Rot",
        "type": "Fungal",
        "hindi_name": "मुलायम गलन",
        "symptoms": "Soft, watery rot of stems.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Apion Weevil",
        "type": "Insect-Pest",
        "hindi_name": "एपियन वीविल",
        "symptoms": "Grubs bore into stems causing knots, lowering fiber quality.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
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
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "जड़ गाँठ निमेटोड",
        "symptoms": "Stunted growth, galls on roots.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold intercrop.",
            "biological_spray": "Paecilomyces.",
            "mechanical": "Deep ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "10kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sunn_hemp",
    "common_name": "Sunn Hemp",
    "hindi_name": "सनई",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing",
        "day_range": "0-7",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture needed for germination."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "45-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "If for fiber, harvest at pod formation."
      },
      {
        "stage_name": "Pod Formation",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "If for seed."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest for seed."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.5",
      "basal_dose_per_acre": "N: 10kg, P: 20kg",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "SSP basal."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burning.",
          "solution": "MOP."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing.",
          "solution": "Sulphur spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालों वाली सुंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Light traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Pustules on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
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
        "symptoms": "Boring holes in stem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mesta",
    "common_name": "Mesta (Kenaf)",
    "hindi_name": "मेस्ता / पटवा",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "10-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weed management."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Fiber harvest."
      },
      {
        "stage_name": "Pod Formation",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Seed harvest."
      },
      {
        "stage_name": "Maturity",
        "day_range": "130-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Pale leaves.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "Iron sulphate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean fields.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Hopper burn.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White masses.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove weeds.",
            "biological_spray": "Verticillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
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
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Rotting stem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "flax_fiber",
    "common_name": "Flax (Fiber)",
    "hindi_name": "अलसी (रेशा)",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Emergence",
        "day_range": "7-14",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Stem elongation."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Peak growth."
      },
      {
        "stage_name": "Boll Formation",
        "day_range": "70-90",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest for fiber at yellowing."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "For seed."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Pale leaves.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Weak stem.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        },
        {
          "nutrient": "B",
          "symptoms": "Stem cracking.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flax Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment / Drench."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Cut seedlings.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ploughing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sisal",
    "common_name": "Sisal",
    "hindi_name": "सिसल",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-180",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Bulbil planting."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "180-210",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Field prep."
      },
      {
        "stage_name": "Vegetative 1",
        "day_range": "210-700",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "700-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "First harvest."
      },
      {
        "stage_name": "Ratoon/Continuing",
        "day_range": "1000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Regular harvests."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Soft leaves.",
          "solution": "Lime."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed leaves.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Sisal Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Zebra Disease",
        "type": "Fungal",
        "hindi_name": "ज़ेबरा रोग",
        "symptoms": "Striped lesions on leaves.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
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
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White patches, yellowing.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
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
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "abaca",
    "common_name": "Abaca (Manila Hemp)",
    "hindi_name": "अबाका",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-400",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Trunk growth."
      },
      {
        "stage_name": "Shooting",
        "day_range": "400-500",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Flower emergence."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "500-600",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest pseudostem."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Abaca Bunchy Top Virus",
        "type": "Viral",
        "hindi_name": "बंची टॉप",
        "symptoms": "Bunchy top, stunted.",
        "favorable_weather": "Aphid presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean material.",
            "biological_spray": "None.",
            "mechanical": "Eradicate."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control aphids."
          }
        }
      },
      {
        "issue_name": "Abaca Mosaic Virus",
        "type": "Viral",
        "hindi_name": "मोज़ेक",
        "symptoms": "Mosaic patterns.",
        "favorable_weather": "Aphids.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Vector control."
          }
        }
      },
      {
        "issue_name": "Corm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring in corm.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean planting.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Boring in pseudostem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "विल्ट",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coir",
    "common_name": "Coir (Coconut)",
    "hindi_name": "नारियल रेशा",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-1500",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tree growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500-1800",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nut set."
      },
      {
        "stage_name": "Maturity",
        "day_range": "1800-2100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nut maturity (11-12 months for coir)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 50kg, P: 25kg, K: 100kg",
      "deficiencies": [
        {
          "nutrient": "K",
          "symptoms": "Yellowing of leaf tips.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Yellow bands on leaves.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "B",
          "symptoms": "Crown choking.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-shaped cuts on leaves.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean manure.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract with hook."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown spray."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes in trunk, oozing.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Trunk injection."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "कली गलन",
        "symptoms": "Rotting of heart leaf.",
        "favorable_weather": "Heavy monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crown cleaning.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Crown application."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ramie",
    "common_name": "Ramie",
    "hindi_name": "रैमी",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rhizome planting."
      },
      {
        "stage_name": "Establishment",
        "day_range": "30-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weed control."
      },
      {
        "stage_name": "Growth",
        "day_range": "60-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Stem elongation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut near ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Stunted.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor fiber.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak stems.",
          "solution": "Lime."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "सुंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kapok",
    "common_name": "Kapok",
    "hindi_name": "सेमल",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-180",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "180-700",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "700-800",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Blooms."
      },
      {
        "stage_name": "Pod Maturity",
        "day_range": "800-900",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Slow growth.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Poor roots.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Small pods.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Aeration.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
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
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "agave",
    "common_name": "Agave",
    "hindi_name": "एगेव",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "60-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "1000-1500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Lower leaves."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "End of life cycle."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip necrosis.",
          "solution": "MOP."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak leaves.",
          "solution": "Lime."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Agave Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark spots.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
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
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "henequen",
    "common_name": "Henequen",
    "hindi_name": "हेनिकेन",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "60-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "1000-1500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "End of life."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip necrosis.",
          "solution": "MOP."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak leaves.",
          "solution": "Lime."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sugarcane",
    "common_name": "Sugarcane",
    "hindi_name": "गन्ना",
    "regional_names": {
      "marathi": "ऊस",
      "tamil": "கரும்பு",
      "telugu": "చెరకు"
    },
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate moisture for sett sprouting."
      },
      {
        "stage_name": "Tillering",
        "day_range": "45-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for final stalk population."
      },
      {
        "stage_name": "Grand Growth",
        "day_range": "120-250",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maximum water and nutrient demand."
      },
      {
        "stage_name": "Maturity",
        "day_range": "250-360",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation 15 days before harvest for sucrose accumulation."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "360-390",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest close to ground."
      },
      {
        "stage_name": "Ratoon Sprouting",
        "day_range": "390-420",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Stubble shaving and gap filling."
      },
      {
        "stage_name": "Ratoon Tillering",
        "day_range": "420-500",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply extra N."
      },
      {
        "stage_name": "Ratoon Grand Growth",
        "day_range": "500-600",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Earthing up."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 60kg, P: 30kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing of older leaves, thin stalks.",
          "solution": "Urea top dressing 50kg/acre."
        },
        {
          "nutrient": "P",
          "symptoms": "Purple tint on leaves, poor root growth.",
          "solution": "DAP application."
        },
        {
          "nutrient": "K",
          "symptoms": "Orange-yellow color on older leaves, firing of margins.",
          "solution": "MOP 30kg/acre."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Interveinal chlorosis on young leaves.",
          "solution": "FeSO4 1% spray."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Broad yellow bands, shortened internodes.",
          "solution": "ZnSO4 5kg/acre to soil."
        },
        {
          "nutrient": "S",
          "symptoms": "General yellowing of young leaves.",
          "solution": "Gypsum 100kg/acre."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Mottled chlorosis.",
          "solution": "MgSO4 spray."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Spindly stalks.",
          "solution": "Lime."
        },
        {
          "nutrient": "B",
          "symptoms": "Distorted growing points.",
          "solution": "Borax."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Pale green to white longitudinal stripes.",
          "solution": "MnSO4 spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Red Rot",
        "type": "Fungal",
        "hindi_name": "लाल सड़न",
        "symptoms": "Leaves dry from top down. Splitting stalk shows reddened tissues with cross white bands. Sour alcoholic smell.",
        "favorable_weather": "High humidity, waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Healthy setts, resistant vars.",
            "biological_spray": "Trichoderma sett treatment.",
            "mechanical": "Uproot infected clumps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "Sett treatment 1g/L",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat setts before planting."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Production of a black whip-like structure from the central shoot.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rogueing.",
            "biological_spray": "None.",
            "mechanical": "Cover whip with plastic bag, cut and burn."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Stunted growth, yellowing, hollow stalks.",
        "favorable_weather": "Drought followed by rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Grassy Shoot Disease",
        "type": "Viral",
        "hindi_name": "ग्रासी शूट (फाइटोप्लाज्मा)",
        "symptoms": "Profuse tillering, narrow pale leaves, grassy appearance.",
        "favorable_weather": "Vector (aphid/leafhopper) presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Moist Hot Air Treatment (MHAT) of setts.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid (for vector)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control vector."
          }
        }
      },
      {
        "issue_name": "Leaf Scald",
        "type": "Bacterial",
        "hindi_name": "लीफ स्कैल्ड",
        "symptoms": "White stripes on leaves, necrosis.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "Disinfect tools."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride + Streptomycin",
            "commercial_reference": "Blitox + Plantomycin",
            "dose_per_15L_pump": "30g + 2g",
            "dose_per_acre": "500g + 30g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange-brown pustules on leaves.",
        "favorable_weather": "High humidity, moderate temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Eye Spot",
        "type": "Fungal",
        "hindi_name": "आई स्पॉट",
        "symptoms": "Eye shaped lesions.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Sett Rot",
        "type": "Fungal",
        "hindi_name": "सेट रोट",
        "symptoms": "Pineapple odor from rotting setts.",
        "favorable_weather": "Waterlogged soil at planting.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "Sett dip 1g/L",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Sett treatment."
          }
        }
      },
      {
        "issue_name": "Early Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "अर्ली शूट बोरर",
        "symptoms": "Dead heart in young tillers, can be pulled out easily, emits bad smell.",
        "favorable_weather": "High temp, low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trash mulching.",
            "biological_spray": "Trichogramma chilonis release.",
            "mechanical": "Pull out dead hearts."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "150ml (Drenching)",
            "waiting_period_phi": "60 Days",
            "application_instructions": "Drench along rows."
          }
        }
      },
      {
        "issue_name": "Top Borer",
        "type": "Insect-Pest",
        "hindi_name": "टॉप बोरर",
        "symptoms": "Shot holes in leaves, dead heart in grown canes, bunchy top.",
        "favorable_weather": "Moderate temp, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect egg masses.",
            "biological_spray": "Isotima javensis parasite.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "13 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Internode Borer",
        "type": "Insect-Pest",
        "hindi_name": "इंटरनोड बोरर",
        "symptoms": "Holes in internodes filled with frass.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Detrashing.",
            "biological_spray": "Trichogramma chilonis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Borer",
        "type": "Insect-Pest",
        "hindi_name": "रूट बोरर",
        "symptoms": "Dead heart in young tillers, not easily pulled out.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing.",
            "biological_spray": "EPN.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "Drench",
            "dose_per_acre": "1L with irrigation water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply with irrigation."
          }
        }
      },
      {
        "issue_name": "Stalk Borer",
        "type": "Insect-Pest",
        "hindi_name": "स्टाक बोरर",
        "symptoms": "Holes in stalk.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Trichogramma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Pyrilla",
        "type": "Insect-Pest",
        "hindi_name": "पाइरिला",
        "symptoms": "Leaves turn pale, covered with sooty mold due to honeydew.",
        "favorable_weather": "High humidity, dense crop.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Epiricania melanoleuca (parasitoid).",
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
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing, pinkish discoloration, sooty mold.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Water management.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Greyish/black encrustations on internodes.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Healthy setts.",
            "biological_spray": "None.",
            "mechanical": "Detrashing."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray after detrashing."
          }
        }
      },
      {
        "issue_name": "Woolly Aphid",
        "type": "Insect-Pest",
        "hindi_name": "वूली एफिड",
        "symptoms": "White powdery patches on underside of leaves, heavy sooty mold.",
        "favorable_weather": "Cloudy, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing.",
            "biological_spray": "Micromus igorotus predator release.",
            "mechanical": "Detrashing."
          },
          "chemical_curative": {
            "active_ingredient": "Acephate 75% SP",
            "commercial_reference": "Asataf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Thorough coverage."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Damage to planted setts, poor germination, drying of grown shoots.",
        "favorable_weather": "Dry sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Well decomposed FYM only.",
            "biological_spray": "Metarhizium anisopliae soil app.",
            "mechanical": "Frequent irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "Sett dip 5ml/L",
            "dose_per_acre": "500ml soil drench",
            "waiting_period_phi": "N/A",
            "application_instructions": "Sett treatment or soil drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sugar_beet",
    "common_name": "Sugar Beet",
    "hindi_name": "चुकंदर",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Thinning."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Root Expansion",
        "day_range": "70-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Sugar accumulation."
      },
      {
        "stage_name": "Ripening",
        "day_range": "120-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "150-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest roots."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "B",
          "symptoms": "Heart rot.",
          "solution": "Borax."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Speckled leaves.",
          "solution": "MnSO4."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Interveinal yellowing.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सरकोस्पोरा धब्बा",
        "symptoms": "Round spots with grey center.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Difenoconazole",
            "commercial_reference": "Score",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Aeration.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rhizomania",
        "type": "Viral",
        "hindi_name": "राइजोमेनिया",
        "symptoms": "Root proliferation.",
        "favorable_weather": "Wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "None",
            "commercial_reference": "None",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Preventive only."
          }
        }
      },
      {
        "issue_name": "Beet Cyst Nematode",
        "type": "Nematode",
        "hindi_name": "सिस्ट निमेटोड",
        "symptoms": "Stunted, white cysts on roots.",
        "favorable_weather": "Sandy soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trap crops.",
            "biological_spray": "Paecilomyces.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "10kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil app."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ladybirds.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
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
            "preventive_measures": "Traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Rotting root.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sweet_sorghum",
    "common_name": "Sweet Sorghum",
    "hindi_name": "मीठा ज्वार",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "10-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Weeding."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Booting",
        "day_range": "60-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for sugar."
      },
      {
        "stage_name": "Flowering",
        "day_range": "75-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest stalk."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 15kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "White bud.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "FeSO4."
        },
        {
          "nutrient": "S",
          "symptoms": "Yellowing new leaves.",
          "solution": "Sulphur."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "शूट फ्लाई",
        "symptoms": "Dead heart.",
        "favorable_weather": "Late sowing.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes, dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "Trichogramma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "8kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Whorl application."
          }
        }
      },
      {
        "issue_name": "Fall Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म",
        "symptoms": "Ragged leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Whorl spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Red spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Grain Mold",
        "type": "Fungal",
        "hindi_name": "दाना फफूंदी",
        "symptoms": "Molded grains.",
        "favorable_weather": "Rain at maturity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Honeydew.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ladybirds.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
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
    "crop_id": "sugar_maple",
    "common_name": "Sugar Maple",
    "hindi_name": "मैपल",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sapling",
        "day_range": "0-3650",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Maturation",
        "day_range": "3650-10000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tree growth."
      },
      {
        "stage_name": "Sap Flow (Spring)",
        "day_range": "10000+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tapping."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "10000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Winter."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.3",
      "basal_dose_per_acre": "N: 0kg, P: 0kg, K: 0kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Decline.",
          "solution": "Lime."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Small leaves.",
          "solution": "MnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Asian Longhorned Beetle",
        "type": "Insect-Pest",
        "hindi_name": "भृंग",
        "symptoms": "Holes in trunk.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Quarantine.",
            "biological_spray": "None.",
            "mechanical": "Remove tree."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "Trunk inject",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Injection."
          }
        }
      },
      {
        "issue_name": "Pear Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Damaged buds.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "N/A",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Leaf spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake leaves.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Verticillium Wilt",
        "type": "Fungal",
        "hindi_name": "विल्ट",
        "symptoms": "Dieback.",
        "favorable_weather": "Stress.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "Trunk inject",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Injection."
          }
        }
      }
    ]
  },
  {
    "crop_id": "palmyrah_palm",
    "common_name": "Palmyrah Palm",
    "hindi_name": "ताड़",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-3000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Trunk Formation",
        "day_range": "3000-5000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering/Tapping",
        "day_range": "5000+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Sap collection."
      },
      {
        "stage_name": "Fruiting",
        "day_range": "5000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruit harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 10kg, P: 5kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed leaves.",
          "solution": "Borax."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-cuts.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Inject."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रोट",
        "symptoms": "Rotting.",
        "favorable_weather": "Rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean crown.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Drying leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
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
    "crop_id": "sago_palm",
    "common_name": "Sago Palm",
    "hindi_name": "सागो",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-2000",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Trunk growth."
      },
      {
        "stage_name": "Starch Accumulation",
        "day_range": "2000-3000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pre-flowering."
      },
      {
        "stage_name": "Harvest",
        "day_range": "3000-3500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fell before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-cuts.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Inject."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रोट",
        "symptoms": "Rotting.",
        "favorable_weather": "Rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean crown.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
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
    "crop_id": "cassava",
    "common_name": "Tapioca (Cassava)",
    "hindi_name": "टैपिओका",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sprouting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Establishment",
        "day_range": "15-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weeding."
      },
      {
        "stage_name": "Canopy Development",
        "day_range": "60-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Tuber Initiation",
        "day_range": "120-150",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Bulking starts."
      },
      {
        "stage_name": "Tuber Bulking",
        "day_range": "150-240",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Starch accumulation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "240-300",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Uproot tubers."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor tubers.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "FeSO4."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Interveinal yellowing.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cassava Mosaic Disease",
        "type": "Viral",
        "hindi_name": "मोज़ेक",
        "symptoms": "Mosaic patterns, distortion.",
        "favorable_weather": "Whitefly presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean planting.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control whitefly."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vector.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White masses, bunchy top.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean sets.",
            "biological_spray": "Verticillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Spider Mite",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Speckling.",
        "favorable_weather": "Dry, hot.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Irrigation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Tuber Rot",
        "type": "Fungal",
        "hindi_name": "कंद गलन",
        "symptoms": "Rotting tubers.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
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
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "Stems covered.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean sets.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Dip or spray."
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
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rhizome planting."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-150",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Rhizome Bulking",
        "day_range": "150-240",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Starch storage."
      },
      {
        "stage_name": "Harvest",
        "day_range": "240-300",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor rhizomes.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizome Rot",
        "type": "Fungal",
        "hindi_name": "सड़न",
        "symptoms": "Rotting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "रोलर",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White mass.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  }
];
