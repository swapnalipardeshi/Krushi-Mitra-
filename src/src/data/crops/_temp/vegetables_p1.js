export const data = [
  {
    "crop_id": "tomato",
    "common_name": "Tomato",
    "hindi_name": "टमाटर",
    "regional_names": {
      "marathi": "टोमॅटो",
      "punjabi": "ਟਮਾਟਰ",
      "tamil": "தக்காளி",
      "telugu": "టమాటా"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-25 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimal moisture in nursery bed. Drench with Trichoderma or metalaxyl to prevent damping off."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "25-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate immediately after transplanting to ensure root establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "30-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Provide adequate N for canopy development; monitor for early signs of leaf miner or blight."
      },
      {
        "stage_name": "Flowering",
        "day_range": "55-70 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress causes blossom drop. Apply boron and zinc if deficiencies are known."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "70-80 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain uniform irrigation to avoid blossom end rot and fruit cracking."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "80-100 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "High requirement of Potassium. Apply K-rich water soluble fertilizers."
      },
      {
        "stage_name": "Ripening",
        "day_range": "100-110 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Reduce irrigation slightly to improve fruit quality and avoid fruit splitting."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "110-150+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at appropriate color stage depending on market distance."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM: 10 tonnes, NPK: 25:35:25 kg/acre (apply 1/3 N and full P & K at transplanting)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Older leaves turn pale green to yellow; stunted growth and poor fruit set.",
          "solution": "Urea @ 100g/15L pump or 20 kg/acre top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, older leaves turn purplish on the underside.",
          "solution": "Mono Ammonium Phosphate (12:61:00) @ 75g/15L pump foliar spray or DAP @ 25 kg/acre soil application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal chlorosis and necrosis of older leaves; poor fruit color and quality.",
          "solution": "Sulphate of Potash (00:00:50) @ 75g/15L pump foliar spray."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom End Rot (BER): sunken, dry, dark leathery spots at the blossom end of fruits.",
          "solution": "Calcium Nitrate @ 50g/15L pump foliar spray; ensure consistent irrigation."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, veins remain green.",
          "solution": "Magnesium Sulphate @ 50g/15L pump foliar spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new emerging leaves.",
          "solution": "Chelated Iron (Fe-EDTA 12%) @ 20g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted growth, interveinal chlorosis.",
          "solution": "Zinc Sulphate (21%) @ 30g/15L pump or Chelated Zinc (12%) @ 15g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking, internal browning, brittle leaves.",
          "solution": "Boron (20%) @ 20g/15L pump foliar spray."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Mottled interveinal chlorosis on young leaves, with dark green veins.",
          "solution": "Manganese Sulphate @ 30g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Early Blight",
        "type": "Fungal",
        "hindi_name": "अगेती झुलसा",
        "symptoms": "Brown to black spots with concentric rings (target board effect) on older leaves.",
        "favorable_weather": "Warm temperatures (24-29°C) and high humidity/frequent rainfall.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, wider spacing, lower leaf removal.",
            "biological_spray": "Trichoderma viride @ 5g/L or Bacillus subtilis @ 2g/L.",
            "mechanical": "Remove infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP or Azoxystrobin 11% + Tebuconazole 18.3% SC",
            "commercial_reference": "Dithane M-45, Custodia",
            "dose_per_15L_pump": "Mancozeb @ 40g or Custodia @ 15ml",
            "dose_per_acre": "Mancozeb @ 500g or Custodia @ 200ml in 150-200L water",
            "waiting_period_phi": "5 days",
            "application_instructions": "Foliar spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Late Blight",
        "type": "Fungal",
        "hindi_name": "पछेती झुलसा",
        "symptoms": "Water-soaked irregular pale green lesions on leaves that turn brown and purplish. White fungal growth on underside.",
        "favorable_weather": "Cool temperatures (10-22°C), overcast skies, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead irrigation; destroy infected debris.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP or Dimethomorph 50% WP",
            "commercial_reference": "Curzate M8, Acrobat",
            "dose_per_15L_pump": "Curzate @ 45g or Acrobat @ 15g",
            "dose_per_acre": "Curzate @ 600g or Acrobat @ 200g",
            "waiting_period_phi": "7 days",
            "application_instructions": "Spray thoroughly at first appearance."
          }
        }
      },
      {
        "issue_name": "Tomato Leaf Curl Virus (ToLCV)",
        "type": "Viral",
        "hindi_name": "पत्ती मरोड़ रोग (माथा बंधना)",
        "symptoms": "Upward curling and crinkling of leaves, severe stunting of the plant, drop of flowers.",
        "favorable_weather": "Dry and warm conditions favoring Whitefly vector.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties; weed management.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L to repel vectors.",
            "mechanical": "Yellow sticky traps @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL or Diafenthiuron 50% WP (Vector control)",
            "commercial_reference": "Confidor, Pegasus",
            "dose_per_15L_pump": "Confidor @ 5-7ml or Pegasus @ 20g",
            "dose_per_acre": "Confidor @ 75ml or Pegasus @ 250g",
            "waiting_period_phi": "5 days",
            "application_instructions": "No cure for virus; control the whitefly vector immediately."
          }
        }
      },
      {
        "issue_name": "Fruit Borer (Helicoverpa armigera)",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक सूंडी",
        "symptoms": "Larvae bore into fruits, half of their body outside. Leaves showing feeding damage.",
        "favorable_weather": "Warm weather (25-30°C) with moderate humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold as trap crop (1 row for 14 rows of tomato).",
            "biological_spray": "HaNPV @ 250 LE/acre or B.t. (Bacillus thuringiensis) @ 1kg/acre.",
            "mechanical": "Pheromone traps (Helilure) @ 5/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC or Flubendiamide 39.35% SC",
            "commercial_reference": "Coragen, Fame",
            "dose_per_15L_pump": "Coragen @ 5-6ml or Fame @ 4-5ml",
            "dose_per_acre": "Coragen @ 60ml or Fame @ 50ml",
            "waiting_period_phi": "3 days",
            "application_instructions": "Spray directly targeting flowers and fruits at early instar stage."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "उखटा रोग (फ्यूजेरियम)",
        "symptoms": "Yellowing and wilting of lower leaves moving upward. Vascular browning visible if stem is cut.",
        "favorable_weather": "Warm soil temperatures (28°C) and acidic soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with non-solanaceous crops, resistant varieties.",
            "biological_spray": "Soil application of Trichoderma harzianum @ 1-2 kg/acre enriched in FYM.",
            "mechanical": "Remove and burn wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP (Soil drench)",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g/acre as soil drench",
            "waiting_period_phi": "10 days",
            "application_instructions": "Drench near the root zone."
          }
        }
      },
      {
        "issue_name": "Bacterial Wilt",
        "type": "Bacterial",
        "hindi_name": "जीवाणु जनित उखटा (बैक्टिरियल विल्ट)",
        "symptoms": "Sudden wilting of foliage without yellowing. White bacterial ooze seen when cut stem is placed in clear water.",
        "favorable_weather": "High temperatures and excessive soil moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seedlings, grafting on resistant rootstocks (e.g. wild brinjal), avoid root damage.",
            "biological_spray": "Pseudomonas fluorescens soil treatment @ 1kg/acre.",
            "mechanical": "Rouging of infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate 9% + Tetracycline 1% (Agrimycin) + Copper Oxychloride 50% WP",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "Streptomycin @ 1.5g + COC @ 30g",
            "dose_per_acre": "Streptomycin @ 20g + COC @ 400g",
            "waiting_period_phi": "7 days",
            "application_instructions": "Drench the root zone. Difficult to cure once severely infected."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि (निमेटोड)",
        "symptoms": "Stunted growth, yellowing, wilting during day time, distinctive galls/knots on roots.",
        "favorable_weather": "Sandy or light soils with warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, marigold trap crop, crop rotation.",
            "biological_spray": "Paecilomyces lilacinus @ 2-5 kg/acre with FYM.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "Not for foliar spray",
            "dose_per_acre": "6-8 kg/acre as soil application",
            "waiting_period_phi": "Not applicable",
            "application_instructions": "Broadcast or band application before transplanting or early stages."
          }
        }
      }
    ]
  },
  {
    "crop_id": "eggplant",
    "common_name": "Eggplant (Brinjal)",
    "hindi_name": "बैंगन",
    "regional_names": {
      "marathi": "वांगी",
      "punjabi": "ਬੈਂਗਣ",
      "tamil": "கத்தரிக்காய்",
      "telugu": "వంకాయ"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Protect from damping-off and sucking pests (like whiteflies transmitting viruses)."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "30-35 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Transplant in evening hours followed by light irrigation."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "35-65 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers; monitor for jassids and shoot borer."
      },
      {
        "stage_name": "Flowering",
        "day_range": "65-80 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure no moisture stress to avoid flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "80-90 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for Fruit and Shoot Borer damage. Ensure balanced P and K."
      },
      {
        "stage_name": "Fruit Enlargement",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Consistent watering is essential. Apply water soluble fertilizers (0:0:50)."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "110-160+ days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest fruits at glossy stage before seeds harden."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.8",
      "basal_dose_per_acre": "FYM: 10 tonnes, NPK: 30:20:20 kg/acre (apply half N at transplanting, half 30-40 DAT)",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Overall yellowing (chlorosis) of older leaves, stunted growth, small fruits.",
          "solution": "Apply Urea @ 100g/15L as foliar or 15kg/acre as top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple purplish veins on the lower surface, delayed flowering.",
          "solution": "Mono Ammonium Phosphate (12:61:00) @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing and scorching of leaf margins on older leaves, misshapen fruits.",
          "solution": "Sulphate of Potash (00:00:50) @ 75g/15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, resembling a mottled appearance.",
          "solution": "Magnesium Sulphate @ 50g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, short internodes, small leaves (not to be confused with Little Leaf disease).",
          "solution": "Chelated Zinc (12%) @ 15g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of youngest leaves while veins remain green.",
          "solution": "Chelated Iron (Fe-EDTA 12%) @ 20g/15L pump."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curling of young leaves, poor fruit development or blossom end rot (rare in brinjal but occurs).",
          "solution": "Calcium Nitrate @ 50g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, fruit cracking, internal browning.",
          "solution": "Boron (20%) @ 20g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Brinjal Fruit and Shoot Borer (Leucinodes orbonalis)",
        "type": "Insect-Pest",
        "hindi_name": "तना और फल छेदक",
        "symptoms": "Drooping of terminal shoots in early stages (dead heart). Holes on fruits plugged with excreta in later stages.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clip off and destroy affected shoots/fruits regularly.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L, Bacillus thuringiensis @ 2g/L.",
            "mechanical": "Leucinlure pheromone traps @ 10-12/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG or Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Proclaim, Coragen",
            "dose_per_15L_pump": "Proclaim @ 8g or Coragen @ 5ml",
            "dose_per_acre": "Proclaim @ 100g or Coragen @ 60ml",
            "waiting_period_phi": "3-5 days",
            "application_instructions": "Spray immediately at 5% shoot damage or on seeing 1 moth/trap/day."
          }
        }
      },
      {
        "issue_name": "Little Leaf of Brinjal",
        "type": "Phytoplasma",
        "hindi_name": "छोटी पत्ती रोग",
        "symptoms": "Leaves become extremely small, yellow, and crowded (bushy appearance). Floral parts turn into leafy structures (phyllody), no fruit setting.",
        "favorable_weather": "Prevalence of leafhopper (Hishimonas phycitis) vectors.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Eradicate weed hosts, rogue out infected plants.",
            "biological_spray": "Neem based sprays to manage vectors.",
            "mechanical": "Uproot and burn infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL or Thiamethoxam 25% WG (Vector control)",
            "commercial_reference": "Confidor, Actara",
            "dose_per_15L_pump": "Confidor @ 5-7ml or Actara @ 5-8g",
            "dose_per_acre": "Confidor @ 75ml or Actara @ 100g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Control vector. Disease itself cannot be chemically cured."
          }
        }
      },
      {
        "issue_name": "Phomopsis Blight and Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फोमोप्सिस झुलसा",
        "symptoms": "Circular brown spots on leaves with pale centers. Soft, sunken, water-soaked patches on fruits that turn dark and mummify.",
        "favorable_weather": "High humidity, rain, and temperatures between 28-32°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds, treat seeds with hot water (50C for 30m).",
            "biological_spray": "Trichoderma viride @ 5g/L.",
            "mechanical": "Remove infected fruits and leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP or Mancozeb 75% WP",
            "commercial_reference": "Bavistin, Dithane M-45",
            "dose_per_15L_pump": "Bavistin @ 15g or Mancozeb @ 40g",
            "dose_per_acre": "Bavistin @ 200g or Mancozeb @ 500g",
            "waiting_period_phi": "5 days",
            "application_instructions": "First spray at appearance of disease, repeat after 10-15 days."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle (Hadda Beetle)",
        "type": "Insect-Pest",
        "hindi_name": "हड्डा भृंग (बीटल)",
        "symptoms": "Grubs and adults scrape the epidermal layer of leaves leaving a net-like skeletonized structure. Leaves dry up and fall.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Handpick and destroy egg masses, grubs, and adults.",
            "biological_spray": "Beauveria bassiana @ 5g/L.",
            "mechanical": "Collection and destruction in early stages."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC or Profenofos 50% EC",
            "commercial_reference": "Ekalux, Curacron",
            "dose_per_15L_pump": "Ekalux @ 30ml or Curacron @ 30ml",
            "dose_per_acre": "Ekalux @ 400ml or Curacron @ 400ml",
            "waiting_period_phi": "7 days",
            "application_instructions": "Ensure full coverage of foliage, particularly underside of leaves."
          }
        }
      },
      {
        "issue_name": "Red Spider Mite",
        "type": "Mite",
        "hindi_name": "लाल मकड़ी (माइट)",
        "symptoms": "Yellowing/bronzing of leaves, fine webbing on the underside. Severe defoliation if left unchecked.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field hygiene and proper irrigation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC or Propargite 57% EC",
            "commercial_reference": "Oberon, Omite",
            "dose_per_15L_pump": "Oberon @ 15ml or Omite @ 30ml",
            "dose_per_acre": "Oberon @ 200ml or Omite @ 400ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray covering underside of the leaves thoroughly."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bell-pepper",
    "common_name": "Bell Pepper (Capsicum)",
    "hindi_name": "शिमला मिर्च",
    "regional_names": {
      "marathi": "ढोबळी मिरची",
      "punjabi": "ਸ਼ਿਮਲਾ ਮਿਰਚ",
      "tamil": "குடை மிளகாய்",
      "telugu": "క్యాప్సికం"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-35 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure proper drainage to prevent damping off."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "35-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Transplant on raised beds; apply light irrigation immediately."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "40-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establish plant framework; support plants if growing indeterminate varieties in polyhouse."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-75 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress or excessive heat, which causes blossom drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "75-90 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply calcium to avoid blossom end rot."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply potassium for good fruit size and wall thickness."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "110-150+ days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest green or allow to color (red/yellow) depending on market."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM: 10 t/acre, NPK: 25:25:25 kg/acre for open field.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow entire plants, slow growth.",
          "solution": "Urea @ 100g/15L foliar or 20 kg/acre top dress."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, dark green leaves, delayed maturity.",
          "solution": "MAP (12:61:0) @ 75g/15L foliar."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Necrotic spots on leaf margins, poor fruit shape.",
          "solution": "SOP (0:0:50) @ 75g/15L foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom End Rot (BER) - dark necrotic lesions at blossom end of fruit.",
          "solution": "Calcium Nitrate @ 50g/15L foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis of older leaves.",
          "solution": "Magnesium Sulphate @ 50g/15L foliar."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, rosetting at the tip.",
          "solution": "Zinc Sulphate (21%) @ 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing between veins on new leaves.",
          "solution": "Chelated Iron (12%) @ 20g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Misshapen fruits, rough skin, death of growing point.",
          "solution": "Boron (20%) @ 20g/15L foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose and Die Back",
        "type": "Fungal",
        "hindi_name": "एंथ्रेक्नोज (शाखा गलन/फल सड़न)",
        "symptoms": "Branches die from tip downwards. Sunken, circular, water-soaked dark lesions on fruits.",
        "favorable_weather": "High humidity, frequent rain, and temps 20-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds. Prune and destroy dead twigs.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "Removal of infected fruits."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% SC or Propineb 70% WP",
            "commercial_reference": "Custodia, Antracol",
            "dose_per_15L_pump": "Custodia @ 15ml or Antracol @ 40g",
            "dose_per_acre": "Custodia @ 200ml or Antracol @ 500g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray at appearance and repeat after 10-12 days."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स (चुरडा-मुरडा)",
        "symptoms": "Upward curling of leaves (boat shape), crinkling, stunted growth. Scars on fruits.",
        "favorable_weather": "Dry and hot weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid moisture stress. Use reflective mulches.",
            "biological_spray": "Verticillium lecanii @ 5g/L.",
            "mechanical": "Blue sticky traps @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC or Spinosad 45% SC",
            "commercial_reference": "Regent, Tracer",
            "dose_per_15L_pump": "Regent @ 30ml or Tracer @ 5ml",
            "dose_per_acre": "Regent @ 400ml or Tracer @ 70ml",
            "waiting_period_phi": "3-5 days",
            "application_instructions": "Spray focusing on new growth and flowers."
          }
        }
      },
      {
        "issue_name": "Yellow Mite (Polyphagotarsonemus latus)",
        "type": "Mite",
        "hindi_name": "पीली मकड़ी",
        "symptoms": "Downward curling of leaves (inverted boat shape), leaf thickening, brittle foliage, stunted growth.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain proper plant spacing.",
            "biological_spray": "Neem oil 1% @ 30ml/15L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC or Abamectin 1.9% EC",
            "commercial_reference": "Oberon, Vertimec",
            "dose_per_15L_pump": "Oberon @ 15ml or Abamectin @ 15ml",
            "dose_per_acre": "Oberon @ 200ml or Abamectin @ 200ml",
            "waiting_period_phi": "3-5 days",
            "application_instructions": "Thorough coverage of the underside of leaves is essential."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू (भभूतिया रोग)",
        "symptoms": "White powdery patches on the lower surface of older leaves, corresponding yellow patches on upper surface. Leaf drop.",
        "favorable_weather": "Warm, dry days and cool, damp nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good air circulation, avoid overcrowding.",
            "biological_spray": "Ampelomyces quisqualis @ 5g/L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Myclobutanil 10% WP or Hexaconazole 5% SC",
            "commercial_reference": "Systhane, Contaf",
            "dose_per_15L_pump": "Systhane @ 10g or Contaf @ 20ml",
            "dose_per_acre": "Systhane @ 100g or Contaf @ 250ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray at first sign of disease on lower leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chilli",
    "common_name": "Chilli Pepper",
    "hindi_name": "मिर्च",
    "regional_names": {
      "marathi": "मिरची",
      "punjabi": "ਮਿਰਚ",
      "tamil": "மிளகாய்",
      "telugu": "మిరప"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-35 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Keep weed-free, manage whiteflies and thrips to prevent viral infections early."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "35-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Drench with humic acid or appropriate fungicide to reduce transplant shock and damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "40-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Nipping/pinching can promote lateral branching. Prevent thrips (upward curling)."
      },
      {
        "stage_name": "Flowering",
        "day_range": "70-85 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Highly sensitive to moisture stress (causes flower drop). Apply NAA (Planofix) if drop is severe."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "85-100 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply Boron and Calcium to improve fruit set and reduce drop/rot."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "100-120 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Potassium is vital for pungency (capsaicin) and color."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "120-180+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest green for fresh market or fully ripe red for dry chilli market."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM: 10 t/acre, NPK: 30:20:20 kg/acre.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Light green whole plant, stunted growth, lower yields.",
          "solution": "Urea @ 100g/15L pump."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tints, poor root system.",
          "solution": "MAP (12:61:0) @ 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Scorched leaf margins, poor fruit color and pungency.",
          "solution": "SOP (0:0:50) @ 75g/15L pump."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, curling of young leaves.",
          "solution": "Calcium Nitrate @ 50g/15L pump."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing between veins of older leaves.",
          "solution": "Magnesium Sulphate @ 50g/15L pump."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Overall yellowing similar to N but starting on younger leaves.",
          "solution": "Sulphur 80% WDG @ 30g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting of young leaves, stunted internodes.",
          "solution": "Chelated Zinc (12%) @ 15g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Pale young leaves with prominent green veins.",
          "solution": "Chelated Iron (12%) @ 20g/15L pump."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking, small deformed fruits, tip death.",
          "solution": "Boron (20%) @ 20g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Curl Disease (Chilli Leaf Curl Virus - ChiLCV)",
        "type": "Viral",
        "hindi_name": "पत्ती मरोड़ रोग (माथा बंधना/चुरडा मुरडा)",
        "symptoms": "Severe curling, crinkling, puckering of leaves. Plant appears stunted/bushy. No/poor fruit set.",
        "favorable_weather": "Dry conditions promoting high Whitefly population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, border crops (sorghum/maize) to restrict vector entry.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L.",
            "mechanical": "Yellow sticky traps @ 25/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP or Pyriproxyfen 10% + Diafenthiuron 40% SE",
            "commercial_reference": "Pegasus, Polo",
            "dose_per_15L_pump": "Pegasus @ 20g",
            "dose_per_acre": "Pegasus @ 250g",
            "waiting_period_phi": "5-7 days",
            "application_instructions": "Control Whiteflies immediately. Remove and destroy infected plants."
          }
        }
      },
      {
        "issue_name": "Thrips (Scirtothrips dorsalis)",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स (चुरडा)",
        "symptoms": "Leaves curl upwards (boat shaped). Leaves become brittle. Scraping of flowers causing drop.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation, overhead irrigation can reduce population.",
            "biological_spray": "Beauveria bassiana @ 5g/L.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC or Fipronil 5% SC",
            "commercial_reference": "Tracer, Regent",
            "dose_per_15L_pump": "Tracer @ 5ml or Regent @ 30ml",
            "dose_per_acre": "Tracer @ 70ml or Regent @ 400ml",
            "waiting_period_phi": "3 days",
            "application_instructions": "Spray on new flush and flowers."
          }
        }
      },
      {
        "issue_name": "Broad Mite (Polyphagotarsonemus latus)",
        "type": "Mite",
        "hindi_name": "मकड़ी (मुरडा)",
        "symptoms": "Leaves curl downwards (inverted boat). Elongated petioles, stunted growth, corky fruits.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Neem formulation (azadirachtin).",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC or Spiromesifen 22.9% SC",
            "commercial_reference": "Omite, Oberon",
            "dose_per_15L_pump": "Omite @ 30ml or Oberon @ 15ml",
            "dose_per_acre": "Omite @ 400ml or Oberon @ 200ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Thorough coverage of lower leaf surface is critical."
          }
        }
      },
      {
        "issue_name": "Fruit Rot / Anthracnose",
        "type": "Fungal",
        "hindi_name": "फल सड़न (एंथ्रेक्नोज)",
        "symptoms": "Sunken necrotic lesions on ripe fruits with concentric rings of black acervuli. Die-back of branches.",
        "favorable_weather": "High humidity, continuous rains, 27-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease free seed, seed treatment, collect and burn diseased fruits.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "Remove infected plant parts."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 50% + Trifloxystrobin 25% WG or Captan 70% + Hexaconazole 5% WP",
            "commercial_reference": "Nativo, Taqat",
            "dose_per_15L_pump": "Nativo @ 10g or Taqat @ 30g",
            "dose_per_acre": "Nativo @ 100g or Taqat @ 400g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray at flowering and fruit development stage during rainy spells."
          }
        }
      }
    ]
  },
  {
    "crop_id": "okra",
    "common_name": "Okra (Ladyfinger)",
    "hindi_name": "भिंडी",
    "regional_names": {
      "marathi": "भेंडी",
      "punjabi": "ਭਿੰਡੀ",
      "tamil": "வெண்டைக்காய்",
      "telugu": "బెండకాయ"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Sowing & Germination",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Soak seeds for 12 hours before sowing. Ensure proper soil moisture for uniform germination."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "10-35 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical period for weed control. Monitor for early jassid and whitefly attacks."
      },
      {
        "stage_name": "Flowering",
        "day_range": "35-45 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water stress at this stage causes flower drop. Apply balanced nutrition."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "45-50 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Monitor for Fruit Borer damage on young pods."
      },
      {
        "stage_name": "Pod Development",
        "day_range": "50-55 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Adequate moisture ensures tender pods. Potassium is needed for pod quality."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "55-100+ days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest every alternate day to ensure tender pods. Over-maturity leads to fibrous pods."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM: 8-10 t/acre, NPK: 25:20:20 kg/acre.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, stunted growth, short and yellowish pods.",
          "solution": "Urea @ 100g/15L or 15 kg/acre top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, delayed flowering, poor root system.",
          "solution": "MAP (12:61:0) @ 75g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Curling and browning of leaf margins, bent/curved poorly developed pods.",
          "solution": "SOP (0:0:50) @ 75g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Deformed young leaves, poor pod quality.",
          "solution": "Calcium Nitrate @ 50g/15L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal yellowing of older leaves.",
          "solution": "Magnesium Sulphate @ 50g/15L."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted growth, small leaves with chlorotic mottling.",
          "solution": "Zinc Sulphate (21%) @ 30g/15L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Short, stubby pods, occasionally cracking.",
          "solution": "Boron (20%) @ 20g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Yellow Vein Mosaic Virus (YVMV)",
        "type": "Viral",
        "hindi_name": "पीला शिरा मोज़ेक (पीलिया)",
        "symptoms": "A network of yellow veins on leaves. In severe cases, whole leaves turn completely yellow. Pods become small, yellow, and malformed.",
        "favorable_weather": "Warm conditions favoring Whitefly (Bemisia tabaci) populations.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Grow YVMV resistant/tolerant varieties (e.g. Arka Anamika). Uproot and destroy infected plants early.",
            "biological_spray": "Neem oil 1% to deter vectors.",
            "mechanical": "Yellow sticky traps @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP or Diafenthiuron 50% WP (Vector Control)",
            "commercial_reference": "Pride, Pegasus",
            "dose_per_15L_pump": "Pride @ 10g or Pegasus @ 20g",
            "dose_per_acre": "Pride @ 100g or Pegasus @ 250g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray to control Whitefly. Disease itself cannot be cured chemically."
          }
        }
      },
      {
        "issue_name": "Okra Enation Leaf Curl Virus (OELCV)",
        "type": "Viral",
        "hindi_name": "पत्ती मरोड़ एवं पत्ती पर उभार",
        "symptoms": "Small leaf-like outgrowths (enations) on the underside of leaves, twisting of stem, severe curling, stunting.",
        "favorable_weather": "Dry spells promoting Whitefly.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control, rogueing of infected plants.",
            "biological_spray": "Neem seed kernel extract (NSKE) 5%.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5-7 ml",
            "dose_per_acre": "75 ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Manage vector population."
          }
        }
      },
      {
        "issue_name": "Shoot and Fruit Borer (Earias vittella)",
        "type": "Insect-Pest",
        "hindi_name": "तना एवं फल छेदक (सुंडी)",
        "symptoms": "Terminal shoots droop and wither in vegetative stage. Caterpillars bore into pods leaving large holes filled with excreta.",
        "favorable_weather": "Moderate temperature and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove and destroy drooping shoots and infested pods.",
            "biological_spray": "Bacillus thuringiensis (Bt) @ 2g/L.",
            "mechanical": "Pheromone traps @ 5-10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG or Flubendiamide 39.35% SC",
            "commercial_reference": "Proclaim, Fame",
            "dose_per_15L_pump": "Proclaim @ 8g or Fame @ 4ml",
            "dose_per_acre": "Proclaim @ 100g or Fame @ 50ml",
            "waiting_period_phi": "3-5 days",
            "application_instructions": "Spray when 5-10% of shoots/fruits are damaged."
          }
        }
      },
      {
        "issue_name": "Jassids (Amrasca biguttula)",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला (जैसिड)",
        "symptoms": "Nymphs and adults suck sap from leaf underside. Margins turn yellow, then brown (hopper burn) and curl downwards.",
        "favorable_weather": "High humidity, frequent rain followed by dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen fertilizer.",
            "biological_spray": "Lecanicillium lecanii @ 5g/L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG or Flonicamid 50% WG",
            "commercial_reference": "Actara, Ulala",
            "dose_per_15L_pump": "Actara @ 5g or Ulala @ 6g",
            "dose_per_acre": "Actara @ 100g or Ulala @ 60g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray ensuring good coverage of leaf undersides."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू (छाछ्या रोग)",
        "symptoms": "Ashy white powdery growth on older leaves, eventually causing leaves to yellow and fall off.",
        "favorable_weather": "Cool, dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain spacing.",
            "biological_spray": "Trichoderma viride @ 5g/L.",
            "mechanical": "Remove severely infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC or Wettable Sulphur 80% WP",
            "commercial_reference": "Contaf, Sulfex",
            "dose_per_15L_pump": "Contaf @ 20ml or Sulphur @ 40g",
            "dose_per_acre": "Contaf @ 250ml or Sulphur @ 500g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Apply at the initial appearance of symptoms."
          }
        }
      }
    ]
  },
  {
    "crop_id": "tomatillo",
    "common_name": "Tomatillo",
    "hindi_name": "टोमैटिलो",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Sow in well-drained medium. Protect from damping off."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "30-35 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Plant 2 or more plants near each other for cross-pollination (self-incompatible)."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "35-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plants have a sprawling habit, consider staking or cages."
      },
      {
        "stage_name": "Flowering & Fruit Set",
        "day_range": "55-70 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure pollinators are present. Bees are vital."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "75-100+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when the papery husk changes from green to tan and splits open."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5-8 t/acre, NPK 20:20:20 kg/acre.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, reduced plant size.",
          "solution": "Urea @ 100g/15L foliar."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, purplish tint on leaves.",
          "solution": "MAP (12:61:0) @ 75g/15L."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal burning on older leaves, poor fruit fill inside husk.",
          "solution": "SOP (0:0:50) @ 75g/15L."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot (less common than in tomato but possible).",
          "solution": "Calcium Nitrate @ 50g/15L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis of older leaves.",
          "solution": "Magnesium Sulphate @ 50g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग (फ्ली बीटल)",
        "symptoms": "Numerous small 'shot-holes' in the leaves. Can severely damage young transplants.",
        "favorable_weather": "Dry, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Floating row covers until flowering.",
            "biological_spray": "Neem oil @ 30ml/15L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Foliar spray at early infestation."
          }
        }
      },
      {
        "issue_name": "Tomato Fruitworm / Corn Earworm",
        "type": "Insect-Pest",
        "hindi_name": "फल छेदक सुंडी",
        "symptoms": "Larvae chew through husks and into the developing fruit.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid planting near corn.",
            "biological_spray": "Bacillus thuringiensis (Bt) @ 2g/L.",
            "mechanical": "Hand pick caterpillars."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "3 days",
            "application_instructions": "Spray targeting flowers and husks."
          }
        }
      },
      {
        "issue_name": "Early Blight",
        "type": "Fungal",
        "hindi_name": "अगेती झुलसा",
        "symptoms": "Dark brown spots with concentric rings on older leaves.",
        "favorable_weather": "High humidity and warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good spacing and air circulation.",
            "biological_spray": "Trichoderma viride @ 5g/L.",
            "mechanical": "Remove infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Apply at 10-14 day intervals during humid weather."
          }
        }
      },
      {
        "issue_name": "Cucumber Mosaic Virus (CMV)",
        "type": "Viral",
        "hindi_name": "ककड़ी मोज़ेक वायरस",
        "symptoms": "Mottling, yellowing, and stunting of plants. Shoestring appearance of leaves.",
        "favorable_weather": "High aphid populations.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control weed hosts.",
            "biological_spray": "Neem oil 1% to control aphid vectors.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG (Vector control)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Target aphids to prevent spread."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू (चेपा)",
        "symptoms": "Clustering on new growth, curling leaves, sticky honeydew and sooty mold.",
        "favorable_weather": "Cool to warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Promote natural enemies (ladybugs).",
            "biological_spray": "Verticillium lecanii @ 5g/L.",
            "mechanical": "Strong water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "5 days",
            "application_instructions": "Spray focusing on undersides of leaves and new shoots."
          }
        }
      },
      {
        "issue_name": "Physalis Mite",
        "type": "Mite",
        "hindi_name": "मकड़ी",
        "symptoms": "Bronzing of leaves, fine webbing, plant stunting.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid water stress.",
            "biological_spray": "Neem oil 1%.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "5 days",
            "application_instructions": "Ensure coverage under leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sweet-corn",
    "common_name": "Sweet Corn",
    "hindi_name": "मीठी मक्का",
    "regional_names": {
      "marathi": "स्वीट कॉर्न",
      "punjabi": "ਮਿੱਠੀ ਮੱਕੀ",
      "tamil": "இனிப்பு சோளம்",
      "telugu": "స్వీట్ కార్న్"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Sowing to Emergence",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure proper soil moisture for uniform germination. Seed treatment is essential."
      },
      {
        "stage_name": "Seedling (V3-V6)",
        "day_range": "10-25 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Weed management is critical. Monitor for Fall Armyworm in the whorl."
      },
      {
        "stage_name": "Vegetative / Knee High (V8-V10)",
        "day_range": "25-45 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Top dress Nitrogen. Rapid growth phase."
      },
      {
        "stage_name": "Tasseling (VT)",
        "day_range": "45-55 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Most critical stage for water. Stress here severely reduces yield."
      },
      {
        "stage_name": "Silking (R1)",
        "day_range": "55-65 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate moisture for pollen tube growth and fertilization."
      },
      {
        "stage_name": "Milk Stage / Harvesting (R3)",
        "day_range": "70-85 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest exactly at milk stage when kernels are plump and release milky liquid when punctured."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.8-7.0",
      "basal_dose_per_acre": "FYM: 5 t/acre, NPK: 40:25:25 kg/acre.",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "V-shaped yellowing starting from the tip of older leaves.",
          "solution": "Urea @ 20 kg/acre top dress or 100g/15L foliar."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple/reddish margins, particularly in young plants.",
          "solution": "MAP (12:61:0) @ 75g/15L foliar."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing and necrosis along the margins of older leaves.",
          "solution": "SOP (0:0:50) @ 75g/15L foliar."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Broad bands of bleached tissue on either side of the midrib (white bud).",
          "solution": "Zinc Sulphate (21%) @ 10 kg/acre soil application or 30g/15L foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis (yellow striping) on older leaves.",
          "solution": "Magnesium Sulphate @ 50g/15L foliar."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing similar to N but appears on younger leaves first.",
          "solution": "Sulphur 80% WDG @ 30g/15L foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor kernel set, blank stalks, barren ears.",
          "solution": "Boron (20%) @ 20g/15L foliar at tasseling."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fall Armyworm (Spodoptera frugiperda)",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म (मक्का की सुंडी)",
        "symptoms": "Papery windows on leaves, ragged holes. Large amount of sawdust-like frass (excreta) in the whorl.",
        "favorable_weather": "Warm and humid conditions, continuous dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, synchronize sowing in the region.",
            "biological_spray": "Metarhizium anisopliae @ 5g/L or Neem oil 1500ppm.",
            "mechanical": "Pheromone traps @ 5-10/acre. Application of sand + lime (9:1) in whorls."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG or Spinetoram 11.7% SC",
            "commercial_reference": "Proclaim, Delegate",
            "dose_per_15L_pump": "Proclaim @ 8g or Delegate @ 8ml",
            "dose_per_acre": "Proclaim @ 100g or Delegate @ 100ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Direct the spray nozzle precisely into the plant whorl (heart)."
          }
        }
      },
      {
        "issue_name": "Stem Borer (Chilo partellus)",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Pinholes in leaves, dead heart (central shoot drying) in young plants.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove dead hearts. Intercrop with cowpea.",
            "biological_spray": "Trichogramma chilonis egg parasitoid release.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Foliar spray targeted at the whorl."
          }
        }
      },
      {
        "issue_name": "Turcicum Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Long, elliptical, grayish-green or tan lesions (cigar-shaped) on lower leaves first.",
        "favorable_weather": "Moderate temps (18-27°C) and high humidity/heavy dews.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant hybrids, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "Destroy crop residues."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP or Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Dithane M-45, Custodia",
            "dose_per_15L_pump": "Mancozeb @ 40g or Custodia @ 15ml",
            "dose_per_acre": "Mancozeb @ 500g or Custodia @ 200ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at disease onset, repeat after 10-15 days if needed."
          }
        }
      },
      {
        "issue_name": "Corn Earworm (Helicoverpa armigera)",
        "type": "Insect-Pest",
        "hindi_name": "भुट्टा छेदक",
        "symptoms": "Larvae feed on silks and bore into the ear tip, damaging the kernels.",
        "favorable_weather": "Warm weather during silking.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Varieties with tight husks.",
            "biological_spray": "HaNPV @ 250 LE/acre.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Flubendiamide 39.35% SC",
            "commercial_reference": "Fame",
            "dose_per_15L_pump": "4ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray directly targeting the silks when they first appear."
          }
        }
      },
      {
        "issue_name": "Aphids (Corn Leaf Aphid)",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies cluster on tassels and upper leaves, causing honeydew accumulation and sooty mold.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predators like ladybird beetles.",
            "biological_spray": "Neem oil 1500 ppm @ 30ml/15L.",
            "mechanical": "None"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when colonies cover the tassel before pollen shed."
          }
        }
      }
    ]
  }
];
