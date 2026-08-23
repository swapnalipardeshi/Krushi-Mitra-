/**
 * VEGETABLES — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: 90
 * Generated: 2026-08-22
 */

export const vegetables = [
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
  },
{
    "crop_id": "cucumber",
    "common_name": "Cucumber",
    "hindi_name": "खीरा",
    "regional_names": {
      "marathi": "Cucumber",
      "punjabi": "Cucumber",
      "tamil": "Cucumber",
      "telugu": "Cucumber"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bottle-gourd",
    "common_name": "Bottle Gourd",
    "hindi_name": "लौकी",
    "regional_names": {
      "marathi": "Bottle Gourd",
      "punjabi": "Bottle Gourd",
      "tamil": "Bottle Gourd",
      "telugu": "Bottle Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bitter-gourd",
    "common_name": "Bitter Gourd",
    "hindi_name": "करेला",
    "regional_names": {
      "marathi": "Bitter Gourd",
      "punjabi": "Bitter Gourd",
      "tamil": "Bitter Gourd",
      "telugu": "Bitter Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ridge-gourd",
    "common_name": "Ridge Gourd",
    "hindi_name": "तोरई",
    "regional_names": {
      "marathi": "Ridge Gourd",
      "punjabi": "Ridge Gourd",
      "tamil": "Ridge Gourd",
      "telugu": "Ridge Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sponge-gourd",
    "common_name": "Sponge Gourd",
    "hindi_name": "घिलकी",
    "regional_names": {
      "marathi": "Sponge Gourd",
      "punjabi": "Sponge Gourd",
      "tamil": "Sponge Gourd",
      "telugu": "Sponge Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "snake-gourd",
    "common_name": "Snake Gourd",
    "hindi_name": "चिचिंडा",
    "regional_names": {
      "marathi": "Snake Gourd",
      "punjabi": "Snake Gourd",
      "tamil": "Snake Gourd",
      "telugu": "Snake Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pointed-gourd",
    "common_name": "Pointed Gourd",
    "hindi_name": "परवल",
    "regional_names": {
      "marathi": "Pointed Gourd",
      "punjabi": "Pointed Gourd",
      "tamil": "Pointed Gourd",
      "telugu": "Pointed Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ivy-gourd",
    "common_name": "Ivy Gourd",
    "hindi_name": "कुंदरू",
    "regional_names": {
      "marathi": "Ivy Gourd",
      "punjabi": "Ivy Gourd",
      "tamil": "Ivy Gourd",
      "telugu": "Ivy Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ash-gourd",
    "common_name": "Ash Gourd",
    "hindi_name": "पेठा",
    "regional_names": {
      "marathi": "Ash Gourd",
      "punjabi": "Ash Gourd",
      "tamil": "Ash Gourd",
      "telugu": "Ash Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pumpkin",
    "common_name": "Pumpkin",
    "hindi_name": "कद्दू",
    "regional_names": {
      "marathi": "Pumpkin",
      "punjabi": "Pumpkin",
      "tamil": "Pumpkin",
      "telugu": "Pumpkin"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      }
    ]
  },
  {
    "crop_id": "zucchini",
    "common_name": "Zucchini",
    "hindi_name": "जुकिनी",
    "regional_names": {
      "marathi": "Zucchini",
      "punjabi": "Zucchini",
      "tamil": "Zucchini",
      "telugu": "Zucchini"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "butternut-squash",
    "common_name": "Butternut Squash",
    "hindi_name": "बटरनट स्क्वॉश",
    "regional_names": {
      "marathi": "Butternut Squash",
      "punjabi": "Butternut Squash",
      "tamil": "Butternut Squash",
      "telugu": "Butternut Squash"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "acorn-squash",
    "common_name": "Acorn Squash",
    "hindi_name": "एकॉर्न स्क्वॉश",
    "regional_names": {
      "marathi": "Acorn Squash",
      "punjabi": "Acorn Squash",
      "tamil": "Acorn Squash",
      "telugu": "Acorn Squash"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "watermelon",
    "common_name": "Watermelon",
    "hindi_name": "तरबूज",
    "regional_names": {
      "marathi": "Watermelon",
      "punjabi": "Watermelon",
      "tamil": "Watermelon",
      "telugu": "Watermelon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "muskmelon",
    "common_name": "Muskmelon",
    "hindi_name": "खरबूजा",
    "regional_names": {
      "marathi": "Muskmelon",
      "punjabi": "Muskmelon",
      "tamil": "Muskmelon",
      "telugu": "Muskmelon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      },
      {
        "stage_name": "Fruit Maturity and Harvesting",
        "day_range": "70-90+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at proper maturity stage. Reduce irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked fruits, hollow stems, poor fruit set.",
          "solution": "Borax (20%) 20g/15L pump, 250g/acre foliar."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Chelated Iron (EDTA 12%) 15g/15L pump, 200g/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Stippling on leaves, webbing on undersides, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Neem oil 1500ppm 5ml/L",
            "mechanical": "Wash plants with water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Good coverage on leaf undersides essential."
          }
        }
      },
      {
        "issue_name": "Epilachna Beetle",
        "type": "Insect-Pest",
        "hindi_name": "एपिलेकना बीटल",
        "symptoms": "Skeletonization of leaves, leaving only leaf veins.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove host weeds.",
            "biological_spray": "Bt kurstaki 2g/L",
            "mechanical": "Hand collection of grubs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Radar",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on foliage when pest appears."
          }
        }
      },
      {
        "issue_name": "CGMMV (Cucumber Green Mottle Mosaic Virus)",
        "type": "Viral",
        "hindi_name": "खीरा हरा चित्तीदार मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves, stunted growth.",
        "favorable_weather": "Spread via infected seeds and mechanical contact.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified virus-free seeds, disinfect tools.",
            "biological_spray": "Not applicable for viruses.",
            "mechanical": "Rogue out and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Control vectors (Thiamethoxam 25% WG)",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "100g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Viruses cannot be cured; manage insect vectors to prevent spread."
          }
        }
      }
    ]
  },
  {
    "crop_id": "honeydew-melon",
    "common_name": "Honeydew Melon",
    "hindi_name": "हनीड्यू खरबूजा",
    "regional_names": {
      "marathi": "Honeydew Melon",
      "punjabi": "Honeydew Melon",
      "tamil": "Honeydew Melon",
      "telugu": "Honeydew Melon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, yellowing, sooty mold due to honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen.",
            "biological_spray": "Verticillium lecanii 5g/L",
            "mechanical": "Use yellow sticky traps 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chayote",
    "common_name": "Chayote",
    "hindi_name": "चौ-चौ",
    "regional_names": {
      "marathi": "Chayote",
      "punjabi": "Chayote",
      "tamil": "Chayote",
      "telugu": "Chayote"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wax-gourd",
    "common_name": "Wax Gourd",
    "hindi_name": "मोमी पेठा",
    "regional_names": {
      "marathi": "Wax Gourd",
      "punjabi": "Wax Gourd",
      "tamil": "Wax Gourd",
      "telugu": "Wax Gourd"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
  {
    "crop_id": "winter-melon",
    "common_name": "Winter Melon",
    "hindi_name": "सर्दी का खरबूजा",
    "regional_names": {
      "marathi": "Winter Melon",
      "punjabi": "Winter Melon",
      "tamil": "Winter Melon",
      "telugu": "Winter Melon"
    },
    "category": "Vegetable",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist but not waterlogged."
      },
      {
        "stage_name": "Seedling",
        "day_range": "7-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate sunlight and protect from damping off."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen fertilizers and maintain weed-free field."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress. Apply micronutrients like Boron for better flower retention."
      },
      {
        "stage_name": "Fruit Setting",
        "day_range": "55-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide adequate potassium and irrigation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0 - 7.0",
      "basal_dose_per_acre": "FYM 10 tonnes, NPK 40:20:20 kg/acre",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 50g/15L pump, 1kg/acre via foliar or soil application."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple tinge on underside.",
          "solution": "DAP 50g/15L pump or 0:52:34 75g/15L pump."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching or browning of older leaves.",
          "solution": "SOP (0:0:50) 75g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 50g/15L pump, 1kg/acre foliar."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blossom end rot in fruits, distorted new leaves.",
          "solution": "Calcium Nitrate 50g/15L pump, 1kg/acre foliar."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow angular spots on upper leaf surface, purplish downy growth on lower surface.",
        "favorable_weather": "High humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wide spacing, avoid overhead irrigation.",
            "biological_spray": "Pseudomonas fluorescens 5ml/L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "5 Days",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / चूर्णिल आसिता",
        "symptoms": "White powdery growth on both surfaces of leaves, stems.",
        "favorable_weather": "Dry weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties.",
            "biological_spray": "Ampelomyces quisqualis 5g/L",
            "mechanical": "Prune to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray when disease appears, repeat after 10 days."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Sunken, water-soaked spots on leaves and fruits.",
        "favorable_weather": "Warm and rainy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, use disease-free seeds.",
            "biological_spray": "Trichoderma viride 5g/L",
            "mechanical": "Destroy infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Apply as preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Wilting of vines, vascular discoloration.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3-4 years.",
            "biological_spray": "Trichoderma harzianum soil drench",
            "mechanical": "Solarize soil before planting."
          },
          "chemical_curative": {
            "active_ingredient": "Thiophanate Methyl 70% WP",
            "commercial_reference": "Roko",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "250g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench around root zone."
          }
        }
      },
      {
        "issue_name": "Fruit Fly",
        "type": "Insect-Pest",
        "hindi_name": "फल मक्खी",
        "symptoms": "Maggots feeding inside fruits causing rotting and premature dropping.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, deep summer ploughing.",
            "biological_spray": "Neem oil 10000ppm 2ml/L",
            "mechanical": "Install cue-lure pheromone traps 4-6/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "75ml in 200L water",
            "waiting_period_phi": "3 Days",
            "application_instructions": "Spray targeting foliage and fruits."
          }
        }
      },
      {
        "issue_name": "Red Pumpkin Beetle",
        "type": "Insect-Pest",
        "hindi_name": "लाल कद्दू भृंग",
        "symptoms": "Beetles feed on cotyledons and foliage, making holes.",
        "favorable_weather": "Early crop stages in spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak infestation.",
            "biological_spray": "Beauveria bassiana 5g/L",
            "mechanical": "Handpick in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray on young seedlings."
          }
        }
      }
    ]
  },
{
    "crop_id": "cabbage",
    "common_name": "Cabbage",
    "hindi_name": "पत्तागोभी",
    "regional_names": { "marathi": "Pan Kobi", "punjabi": "Band Gobhi", "tamil": "Muttaikose", "telugu": "Cabbage" },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain uniform moisture for even germination." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately after transplanting to establish seedlings." },
      { "stage_name": "Vegetative Growth", "day_range": "35-55", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate nitrogen for leaf expansion." },
      { "stage_name": "Head Initiation", "day_range": "55-75", "water_requirement_sensitivity": "High", "stage_advice": "Critical stage for head formation. Avoid moisture stress." },
      { "stage_name": "Head Development", "day_range": "75-95", "water_requirement_sensitivity": "High", "stage_advice": "Provide balanced nutrition, specially boron and calcium." },
      { "stage_name": "Head Maturation", "day_range": "95-115", "water_requirement_sensitivity": "Medium", "stage_advice": "Reduce irrigation to prevent head bursting." },
      { "stage_name": "Harvesting", "day_range": "115-125", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest heads when firm." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10 tons, N 24kg, P 24kg, K 24kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Lower leaves turn pale yellow.", "solution": "Urea 25kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Purple tint on underside of leaves.", "solution": "N:P:K 19:19:19 @ 75g per 15L pump" },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching of older leaves.", "solution": "MOP @ 20kg/acre or N:P:K 0:0:50 @ 75g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tip burn of inner leaves.", "solution": "Calcium Nitrate @ 10kg/acre or 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "Magnesium Sulphate @ 10kg/acre or 50g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Hollow stem and small heads.", "solution": "Borax (20%) @ 1-2kg/acre or 25g/15L pump" },
        { "nutrient": "Molybdenum", "symptoms": "Whiptail appearance of leaves.", "solution": "Ammonium Molybdate @ 1g/15L pump" },
        { "nutrient": "Sulphur", "symptoms": "New leaves are uniformly pale.", "solution": "Sulphur 80% WDG @ 3kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Diamondback Moth (DBM)",
        "type": "Insect-Pest",
        "hindi_name": "हीरक पीठ वाला पतंगा",
        "symptoms": "Larvae feed on leaves, creating window panes and later holes.",
        "favorable_weather": "Dry conditions with moderate temperatures.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Intercrop with mustard. Use pheromone traps.", "biological_spray": "Bt kurstaki @ 30g/15L pump", "mechanical": "Handpick early stages." },
          "chemical_curative": { "active_ingredient": "Spinosad 2.5% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "60ml", "waiting_period_phi": "3", "application_instructions": "Spray thoroughly." }
        }
      },
      {
        "issue_name": "Black Rot",
        "type": "Bacterial",
        "hindi_name": "काला सड़ांध",
        "symptoms": "V-shaped yellow lesions on leaf margins turning brown.",
        "favorable_weather": "Warm, wet conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use disease-free seed, crop rotation.", "biological_spray": "Pseudomonas fluorescens @ 50ml/15L pump", "mechanical": "Remove infected leaves." },
          "chemical_curative": { "active_ingredient": "Streptomycin Sulphate 9% + Tetracycline Hydrochloride 1%", "commercial_reference": "Plantomycin", "dose_per_15L_pump": "2g", "dose_per_acre": "20g", "waiting_period_phi": "14", "application_instructions": "Spray with Copper Oxychloride." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, honeydew secretion leading to sooty mold.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow sticky traps.", "biological_spray": "Neem oil 1500ppm @ 50ml/15L pump", "mechanical": "Water jet spray." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "40g", "waiting_period_phi": "14", "application_instructions": "Spray targeting undersides of leaves." }
        }
      }
    ]
  },
  {
    "crop_id": "cauliflower",
    "common_name": "Cauliflower",
    "hindi_name": "फूलगोभी",
    "regional_names": { "marathi": "Phool Kobi", "punjabi": "Phull Gobhi", "tamil": "Pookosu", "telugu": "Gobi" },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure proper drainage." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately." },
      { "stage_name": "Vegetative Growth", "day_range": "35-60", "water_requirement_sensitivity": "High", "stage_advice": "Apply nitrogenous fertilizers." },
      { "stage_name": "Curd Initiation", "day_range": "60-75", "water_requirement_sensitivity": "High", "stage_advice": "Critical for curd development." },
      { "stage_name": "Curd Development", "day_range": "75-95", "water_requirement_sensitivity": "High", "stage_advice": "Avoid moisture stress. Wrap leaves for blanching." },
      { "stage_name": "Curd Maturation", "day_range": "95-110", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure proper drainage." },
      { "stage_name": "Harvesting", "day_range": "110-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest compact curds." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10t, N 24kg, P 24kg, K 24kg",
      "deficiencies": [
        { "nutrient": "Molybdenum", "symptoms": "Whiptail: Leaves become narrow, strap-like.", "solution": "Sodium Molybdate @ 1g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Browning or hollow stem.", "solution": "Borax (20%) @ 1.5kg/acre or 25g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Pale green leaves, buttoning.", "solution": "Urea @ 20kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, purpling.", "solution": "N:P:K 19:19:19 @ 75g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Marginal chlorosis.", "solution": "MOP @ 20kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn on inner leaves.", "solution": "Calcium Nitrate @ 10kg/acre" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing of older leaves.", "solution": "Magnesium Sulphate @ 10kg/acre" },
        { "nutrient": "Sulphur", "symptoms": "Young leaves turn pale.", "solution": "Sulphur 90% WDG @ 3kg/acre" },
        { "nutrient": "Zinc", "symptoms": "Small, distorted leaves.", "solution": "Zinc Sulphate @ 5kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellow patches on upper leaf surface, white/grey growth underneath.",
        "favorable_weather": "Cool, highly humid conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Wide spacing, avoid overhead watering.", "biological_spray": "Trichoderma viride @ 50g/15L", "mechanical": "Remove infected leaves." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "30g", "dose_per_acre": "400g", "waiting_period_phi": "14", "application_instructions": "Spray thoroughly on both leaf surfaces." }
        }
      },
      {
        "issue_name": "Diamondback Moth (DBM)",
        "type": "Insect-Pest",
        "hindi_name": "हीरक पीठ वाला पतंगा",
        "symptoms": "Holes in leaves, defoliation.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pheromone traps.", "biological_spray": "Neem oil 10000ppm @ 30ml/15L", "mechanical": "Handpicking." },
          "chemical_curative": { "active_ingredient": "Emamectin benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "80g", "waiting_period_phi": "7", "application_instructions": "Spray early morning or late evening." }
        }
      }
    ]
  },
  {
    "crop_id": "broccoli",
    "common_name": "Broccoli",
    "hindi_name": "ब्रोकली",
    "regional_names": { "marathi": "Broccoli", "punjabi": "Broccoli", "tamil": "Broccoli", "telugu": "Broccoli" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Proper spacing for healthy seedlings." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Transplant in evening." },
      { "stage_name": "Vegetative Phase", "day_range": "35-55", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate nitrogen." },
      { "stage_name": "Head Initiation", "day_range": "55-70", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield, apply boron." },
      { "stage_name": "Head Development", "day_range": "70-90", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture." },
      { "stage_name": "Harvesting", "day_range": "90-100", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest tight heads before flowers open." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10t, N 24kg, P 20kg, K 24kg",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Hollow stems, small discolored heads.", "solution": "Borax @ 25g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves.", "solution": "Urea @ 20kg/acre top dressing" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling of stems and leaves.", "solution": "12:61:00 @ 75g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Burnt leaf edges.", "solution": "Sulphate of Potash @ 50g/15L pump" },
        { "nutrient": "Molybdenum", "symptoms": "Whiptail like leaves.", "solution": "Sodium Molybdate @ 1g/15L pump" },
        { "nutrient": "Calcium", "symptoms": "Tipburn.", "solution": "Calcium Nitrate @ 50g/15L pump" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate @ 50g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Dark brown/black spots with concentric rings.",
        "favorable_weather": "Warm and moist.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Pseudomonas @ 50ml/15L", "mechanical": "Remove debris." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC", "commercial_reference": "Custodia", "dose_per_15L_pump": "15ml", "dose_per_acre": "200ml", "waiting_period_phi": "7", "application_instructions": "Spray on appearance of spots." }
        }
      }
    ]
  },
  {
    "crop_id": "brussels-sprouts",
    "common_name": "Brussels Sprouts",
    "hindi_name": "ब्रसेल्स स्प्राउट्स",
    "regional_names": { "marathi": "Brussels Sprouts", "punjabi": "Brussels Sprouts", "tamil": "Brussels Sprouts", "telugu": "Brussels Sprouts" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Healthy seedlings needed." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Deep planting." },
      { "stage_name": "Vegetative Phase", "day_range": "35-70", "water_requirement_sensitivity": "High", "stage_advice": "Keep weed free." },
      { "stage_name": "Sprout Formation", "day_range": "70-100", "water_requirement_sensitivity": "High", "stage_advice": "Topping may be done to encourage sprout size." },
      { "stage_name": "Sprout Sizing", "day_range": "100-130", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "130-160", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest bottom up as they firm." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10t, N 20kg, P 20kg, K 20kg",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Hollow stems in sprouts.", "solution": "Borax @ 25g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Pale plants, loose sprouts.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted, purple leaves.", "solution": "N:P:K 19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Leaf margin burn.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tip burn in sprouts.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Molybdenum", "symptoms": "Whiptail.", "solution": "Sodium Molybdate @ 1g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cabbage Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Grey, mealy colonies causing curling.",
        "favorable_weather": "Cool, dry conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ladybird beetles.", "biological_spray": "Neem Oil @ 50ml/15L", "mechanical": "Water jet." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7", "application_instructions": "Spray thoroughly." }
        }
      }
    ]
  },
  {
    "crop_id": "kohlrabi",
    "common_name": "Kohlrabi / Knol Khol",
    "hindi_name": "गांठ गोभी",
    "regional_names": { "marathi": "Nol Khol", "punjabi": "Ganth Gobhi", "tamil": "Nookal", "telugu": "Noolkol" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Sow shallow." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Transplant at 4-5 leaf stage." },
      { "stage_name": "Stem Swelling", "day_range": "35-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical moisture requirement." },
      { "stage_name": "Bulb Development", "day_range": "55-75", "water_requirement_sensitivity": "High", "stage_advice": "Ensure uniform watering to prevent cracking." },
      { "stage_name": "Harvesting", "day_range": "75-85", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when bulb is 2-3 inches diameter." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10t, N 20kg, P 20kg, K 20kg",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Cracking of the swollen stem.", "solution": "Borax @ 25g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Small bulbs, yellow leaves.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP @ 20kg/acre" },
        { "nutrient": "Potassium", "symptoms": "Poor bulb quality.", "solution": "Sulphate of Potash @ 50g/15L" },
        { "nutrient": "Calcium", "symptoms": "Internal browning.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in leaves.",
        "favorable_weather": "Dry, hot weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Neem formulation.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride", "dose_per_15L_pump": "5g", "dose_per_acre": "40g", "waiting_period_phi": "7", "application_instructions": "Spray on early appearance." }
        }
      }
    ]
  },
  {
    "crop_id": "romanesco",
    "common_name": "Romanesco",
    "hindi_name": "रोमानेस्को",
    "regional_names": { "marathi": "Romanesco", "punjabi": "Romanesco", "tamil": "Romanesco", "telugu": "Romanesco" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Careful seedling raising." },
      { "stage_name": "Transplanting", "day_range": "30-35", "water_requirement_sensitivity": "High", "stage_advice": "Avoid root shock." },
      { "stage_name": "Vegetative Growth", "day_range": "35-65", "water_requirement_sensitivity": "High", "stage_advice": "Good nitrogen needed." },
      { "stage_name": "Head Formation", "day_range": "65-90", "water_requirement_sensitivity": "High", "stage_advice": "Ensure even watering for fractal head shape." },
      { "stage_name": "Harvesting", "day_range": "90-110", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest heads before they loosen." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10t, N 24kg, P 20kg, K 24kg",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Poor head formation.", "solution": "Borax @ 25g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants.", "solution": "19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Edge burn.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Tipburn.", "solution": "Calcium Nitrate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Clubroot",
        "type": "Fungal",
        "hindi_name": "क्लब रूट",
        "symptoms": "Swollen, deformed roots; wilting plants.",
        "favorable_weather": "Acidic soils, wet conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Lime application, rotation.", "biological_spray": "Trichoderma.", "mechanical": "Remove affected plants." },
          "chemical_curative": { "active_ingredient": "Flusulfamide 11% SC", "commercial_reference": "Nebijin", "dose_per_15L_pump": "45ml", "dose_per_acre": "600ml", "waiting_period_phi": "30", "application_instructions": "Soil drench." }
        }
      }
    ]
  },
  {
    "crop_id": "kale",
    "common_name": "Kale",
    "hindi_name": "केल",
    "regional_names": { "marathi": "Kale", "punjabi": "Kale", "tamil": "Kale", "telugu": "Kale" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect from flea beetles." },
      { "stage_name": "Transplanting", "day_range": "25-30", "water_requirement_sensitivity": "High", "stage_advice": "Space well for large leaves." },
      { "stage_name": "Vegetative Growth", "day_range": "30-50", "water_requirement_sensitivity": "High", "stage_advice": "Regular nitrogen supply." },
      { "stage_name": "First Harvest", "day_range": "50-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest outer leaves." },
      { "stage_name": "Continuous Harvest", "day_range": "60-120", "water_requirement_sensitivity": "Medium", "stage_advice": "Top dress after every few harvests." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10t, N 20kg, P 15kg, K 20kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves, reduced yield.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Purpling of leaf margins.", "solution": "DAP @ 15kg/acre" },
        { "nutrient": "Potassium", "symptoms": "Scorched edges.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "Magnesium Sulphate @ 50g/15L" },
        { "nutrient": "Calcium", "symptoms": "Deformed young leaves.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Sulphur", "symptoms": "Overall paleness.", "solution": "Sulphur @ 3kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cabbage Looper",
        "type": "Insect-Pest",
        "hindi_name": "पत्तागोभी लूपर",
        "symptoms": "Large ragged holes in leaves.",
        "favorable_weather": "Warm conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Bt kurstaki @ 30g/15L", "mechanical": "Hand picking." },
          "chemical_curative": { "active_ingredient": "Chlorantraniliprole 18.5% SC", "commercial_reference": "Coragen", "dose_per_15L_pump": "5ml", "dose_per_acre": "60ml", "waiting_period_phi": "3", "application_instructions": "Spray on early instars." }
        }
      }
    ]
  },
  {
    "crop_id": "collard-greens",
    "common_name": "Collard Greens",
    "hindi_name": "कॉलार्ड साग",
    "regional_names": { "marathi": "Collard Greens", "punjabi": "Collard Greens", "tamil": "Collard Greens", "telugu": "Collard Greens" },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure moisture." },
      { "stage_name": "Establishment", "day_range": "25-45", "water_requirement_sensitivity": "High", "stage_advice": "Weed control." },
      { "stage_name": "Vegetative Growth", "day_range": "45-65", "water_requirement_sensitivity": "High", "stage_advice": "Apply nitrogen." },
      { "stage_name": "First Harvest", "day_range": "65-75", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest lower leaves." },
      { "stage_name": "Ongoing Harvest", "day_range": "75-120", "water_requirement_sensitivity": "Medium", "stage_advice": "Continuous feeding." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "FYM 10t, N 20kg, P 15kg, K 20kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing, slow growth.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted, dark green/purple.", "solution": "19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Edge burn.", "solution": "0:0:50 @ 75g/15L" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "Magnesium Sulphate @ 50g/15L" },
        { "nutrient": "Calcium", "symptoms": "Distorted new growth.", "solution": "Calcium Nitrate @ 50g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Harlequin Bug",
        "type": "Insect-Pest",
        "hindi_name": "हार्लेक्विन बग",
        "symptoms": "White stippling on leaves, wilting.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Destroy weeds.", "biological_spray": "Neem Oil @ 50ml/15L", "mechanical": "Handpick bugs." },
          "chemical_curative": { "active_ingredient": "Lambda-cyhalothrin 5% EC", "commercial_reference": "Karate", "dose_per_15L_pump": "10ml", "dose_per_acre": "100ml", "waiting_period_phi": "7", "application_instructions": "Spray ensuring good coverage." }
        }
      }
    ]
  },
  {
    "crop_id": "bok-choy",
    "common_name": "Bok Choy",
    "hindi_name": "बॉक चॉय",
    "regional_names": { "marathi": "Bok Choy", "punjabi": "Bok Choy", "tamil": "Bok Choy", "telugu": "Bok Choy" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Direct sow or transplant." },
      { "stage_name": "Seedling", "day_range": "7-20", "water_requirement_sensitivity": "High", "stage_advice": "Keep consistently moist." },
      { "stage_name": "Vegetative Growth", "day_range": "20-35", "water_requirement_sensitivity": "High", "stage_advice": "Fast growth needs nitrogen." },
      { "stage_name": "Head Formation", "day_range": "35-45", "water_requirement_sensitivity": "High", "stage_advice": "Avoid water stress to prevent bolting." },
      { "stage_name": "Harvest", "day_range": "45-55", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest whole plant." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5t, N 15kg, P 10kg, K 15kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves, small plants.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth, dull leaves.", "solution": "19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Weak stems.", "solution": "Sulphate of Potash @ 50g/15L" },
        { "nutrient": "Calcium", "symptoms": "Tipburn.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Boron", "symptoms": "Brittle stems.", "solution": "Borax @ 25g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes on leaves, very damaging to seedlings.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Neem 1500ppm @ 50ml/15L", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "40g", "waiting_period_phi": "14", "application_instructions": "Spray on foliage." }
        }
      }
    ]
  },
  {
    "crop_id": "chinese-cabbage",
    "common_name": "Chinese Cabbage / Napa",
    "hindi_name": "चीनी पत्तागोभी",
    "regional_names": { "marathi": "Chinese Kobi", "punjabi": "Chinese Gobhi", "tamil": "Chinese Cabbage", "telugu": "Chinese Cabbage" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Raise in pro-trays." },
      { "stage_name": "Transplanting", "day_range": "25-30", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately." },
      { "stage_name": "Vegetative Growth", "day_range": "30-50", "water_requirement_sensitivity": "High", "stage_advice": "Top dress with N." },
      { "stage_name": "Heading", "day_range": "50-70", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield." },
      { "stage_name": "Harvesting", "day_range": "70-85", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest dense heads." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10t, N 20kg, P 15kg, K 20kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea @ 15kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP @ 15kg/acre" },
        { "nutrient": "Potassium", "symptoms": "Marginal chlorosis.", "solution": "MOP @ 15kg/acre" },
        { "nutrient": "Calcium", "symptoms": "Inner leaves tipburn.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Boron", "symptoms": "Hollow stems.", "solution": "Borax @ 25g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Soft Rot",
        "type": "Bacterial",
        "hindi_name": "नरम सड़ांध",
        "symptoms": "Water-soaked lesions, foul smell.",
        "favorable_weather": "Warm, wet conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Wide spacing, avoid wounding.", "biological_spray": "Pseudomonas @ 50ml/15L", "mechanical": "Remove infected heads." },
          "chemical_curative": { "active_ingredient": "Streptomycin Sulphate 9% + Tetracycline Hydrochloride 1%", "commercial_reference": "Plantomycin", "dose_per_15L_pump": "2g", "dose_per_acre": "20g", "waiting_period_phi": "14", "application_instructions": "Spray with Copper Oxychloride." }
        }
      }
    ]
  },
  {
    "crop_id": "gai-lan",
    "common_name": "Gai Lan / Chinese Broccoli",
    "hindi_name": "गाई लैन",
    "regional_names": { "marathi": "Gai Lan", "punjabi": "Gai Lan", "tamil": "Gai Lan", "telugu": "Gai Lan" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Direct sowing often preferred." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "High", "stage_advice": "Keep weed free." },
      { "stage_name": "Vegetative Growth", "day_range": "25-45", "water_requirement_sensitivity": "High", "stage_advice": "Apply nitrogen for thick stalks." },
      { "stage_name": "Budding", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Harvest before flowers open." },
      { "stage_name": "Harvesting", "day_range": "55-65", "water_requirement_sensitivity": "Low", "stage_advice": "Cut stalks for bunching." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 8t, N 15kg, P 15kg, K 15kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea @ 10kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "19:19:19 @ 75g/15L" },
        { "nutrient": "Potassium", "symptoms": "Weak stalks.", "solution": "0:0:50 @ 75g/15L" },
        { "nutrient": "Calcium", "symptoms": "Deformed young leaves.", "solution": "Calcium Nitrate @ 50g/15L" },
        { "nutrient": "Boron", "symptoms": "Cracked stems.", "solution": "Borax @ 25g/15L" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellow patches on leaves, white downy growth below.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Air circulation.", "biological_spray": "Trichoderma.", "mechanical": "Remove infected leaves." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "30g", "dose_per_acre": "400g", "waiting_period_phi": "7", "application_instructions": "Spray at first sign." }
        }
      }
    ]
  },
{
    "crop_id": "spinach",
    "common_name": "Spinach",
    "hindi_name": "पालक",
    "regional_names": {
      "marathi": "Palak",
      "punjabi": "Palak",
      "tamil": "Pasalai Keerai",
      "telugu": "Palakura"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate moisture for even germination." },
      { "stage_name": "Vegetative", "day_range": "15-30", "water_requirement_sensitivity": "High", "stage_advice": "Apply nitrogenous fertilizers to promote lush leaf growth." },
      { "stage_name": "Rosette", "day_range": "30-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain soil moisture. Scout for leaf miners." },
      { "stage_name": "Harvesting", "day_range": "45-60", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest leaves regularly to delay bolting." },
      { "stage_name": "Bolting/Seed Setting", "day_range": "60-90", "water_requirement_sensitivity": "Low", "stage_advice": "Reduce irrigation if seed production is desired." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow older leaves, stunted growth.", "solution": "Urea 25 kg/acre or 50g per 15L pump foliar spray." },
        { "nutrient": "Phosphorus", "symptoms": "Dark green with purple tint on older leaves.", "solution": "DAP 25 kg/acre." },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching and rolling of leaves.", "solution": "MOP 20 kg/acre or KNO3 (13:0:45) 75g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on young leaves.", "solution": "Ferrous Sulphate 50g per 15L pump." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "Magnesium Sulphate 50g per 15L pump." },
        { "nutrient": "Zinc", "symptoms": "Small, narrow leaves with mottling.", "solution": "Zinc Sulphate 30g per 15L pump." },
        { "nutrient": "Boron", "symptoms": "Thick, brittle leaves and stunted growing points.", "solution": "Borax 20g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow patches on upper leaf surface, purplish-gray fuzz on the underside.",
        "favorable_weather": "Cool and highly humid conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation, wider spacing.", "biological_spray": "Trichoderma viride 50g/15L pump.", "mechanical": "Remove infected leaves." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray thoroughly targeting lower leaf surfaces." }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White blister-like pustules on the underside of leaves.",
        "favorable_weather": "Cool and damp weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed control.", "biological_spray": "Bacillus subtilis 5ml/L.", "mechanical": "Destroy infected crop debris." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 23% SC", "commercial_reference": "Amistar", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray at early disease onset." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती सुरंगक",
        "symptoms": "Serpentine, white or silvery trails (mines) on leaves.",
        "favorable_weather": "Warm conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use yellow sticky traps.", "biological_spray": "Neem oil (10000 ppm) 30ml/15L.", "mechanical": "Crush larvae in mines manually if few." },
          "chemical_curative": { "active_ingredient": "Abamectin 1.9% EC", "commercial_reference": "Vertimec", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray early morning or late evening." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Clustering on newer leaves, yellowing, honeydew secretion leading to sooty mold.",
        "favorable_weather": "Cool and cloudy weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excess nitrogen.", "biological_spray": "Verticillium lecanii 50g/15L pump.", "mechanical": "Use yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray on early appearance of pests." }
        }
      },
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "आर्द्रगलन",
        "symptoms": "Seedlings rot at soil level and topple over.",
        "favorable_weather": "Excess soil moisture, poor drainage.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Raised beds, avoid overwatering.", "biological_spray": "Pseudomonas fluorescens 50g/15L pump as drench.", "mechanical": "Solarize soil before sowing." },
          "chemical_curative": { "active_ingredient": "Captan 50% WP", "commercial_reference": "Captaf", "dose_per_15L_pump": "40g", "dose_per_acre": "400g as drench", "waiting_period_phi": "N/A", "application_instructions": "Soil drench around seedling roots." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सर्कोस्पोरा पत्ती धब्बा",
        "symptoms": "Small brown spots with lighter centers and reddish margins.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ensure good air circulation.", "biological_spray": "Trichoderma 50g/15L pump.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g in 150L water", "waiting_period_phi": "10 Days", "application_instructions": "Apply as foliar spray." }
        }
      },
      {
        "issue_name": "Cutworms",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Seedlings cut off at the soil surface during the night.",
        "favorable_weather": "Warm days and cool nights.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Deep summer ploughing.", "biological_spray": "Beauveria bassiana 50g/15L pump.", "mechanical": "Handpick caterpillars at night." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos 20% EC", "commercial_reference": "Dursban", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Apply near the base of plants." }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small 'shot-holes' in the leaves.",
        "favorable_weather": "Dry and warm conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use row covers.", "biological_spray": "Neem Extract 5% 45ml/15L.", "mechanical": "Use yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray on foliage." }
        }
      }
    ]
  },
  {
    "crop_id": "fenugreek",
    "common_name": "Fenugreek",
    "hindi_name": "मेथी",
    "regional_names": {
      "marathi": "Methi",
      "punjabi": "Methi",
      "tamil": "Vendhayam",
      "telugu": "Menthikura"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure lightly moist soil for sprouting." },
      { "stage_name": "Seedling", "day_range": "7-20", "water_requirement_sensitivity": "High", "stage_advice": "Weed control is critical." },
      { "stage_name": "Vegetative Growth", "day_range": "20-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Foliar nutrition can boost leaf size." },
      { "stage_name": "Flowering", "day_range": "40-60", "water_requirement_sensitivity": "High", "stage_advice": "Adequate watering required if grown for seeds." },
      { "stage_name": "Pod Formation/Maturity", "day_range": "60-90", "water_requirement_sensitivity": "Low", "stage_advice": "Stop irrigation before harvesting for seeds." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5-7 tons, N:P:K 10:20:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "General yellowing, poor growth.", "solution": "Urea top dressing 10 kg/acre." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, dull green leaves.", "solution": "DAP basal application." },
        { "nutrient": "Potassium", "symptoms": "Marginal burning of older leaves.", "solution": "MOP 10 kg/acre." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves.", "solution": "Bentonite Sulphur 10 kg/acre." },
        { "nutrient": "Zinc", "symptoms": "Small, mottled leaves.", "solution": "Zinc Sulphate 30g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on new growth.", "solution": "Chelated Iron 15g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "चूर्णी फफूंदी",
        "symptoms": "White powdery growth on leaves and stems.",
        "favorable_weather": "Dry weather with cool nights and warm days.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid late sowing.", "biological_spray": "Ampelomyces quisqualis 50g/15L.", "mechanical": "Remove severely infected plants." },
          "chemical_curative": { "active_ingredient": "Hexaconazole 5% SC", "commercial_reference": "Contaf", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Thorough coverage of foliage." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow patches on top of leaves, grey fungal growth underneath.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Pseudomonas fluorescens 50ml/15L.", "mechanical": "Proper spacing." },
          "chemical_curative": { "active_ingredient": "Cymoxanil 8% + Mancozeb 64% WP", "commercial_reference": "Curzate", "dose_per_15L_pump": "45g", "dose_per_acre": "450g in 150L water", "waiting_period_phi": "10 Days", "application_instructions": "Spray on appearance of symptoms." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small circular brown spots on leaves.",
        "favorable_weather": "Warm and moist.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean cultivation.", "biological_spray": "Trichoderma 50g/15L.", "mechanical": "Destroy crop debris." },
          "chemical_curative": { "active_ingredient": "Propiconazole 25% EC", "commercial_reference": "Tilt", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray on foliage." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap from tender parts, yellowing, honeydew.",
        "favorable_weather": "Cloudy, cool conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excess nitrogen.", "biological_spray": "Neem oil 10000 ppm 30ml/15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride", "dose_per_15L_pump": "5g", "dose_per_acre": "50g in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray at initial infestation." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "White zigzag tunnels in leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed management.", "biological_spray": "NSKE 5% 45ml/15L.", "mechanical": "Hand pick heavily mined leaves." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray thoroughly." }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery flecking, distorted young leaves.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Overhead irrigation.", "biological_spray": "Beauveria bassiana 50g/15L.", "mechanical": "Blue sticky traps." },
          "chemical_curative": { "active_ingredient": "Fipronil 5% SC", "commercial_reference": "Regent", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray at early stages." }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting of plants, rotting of roots.",
        "favorable_weather": "Waterlogged soils.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Proper drainage.", "biological_spray": "Trichoderma harzianum soil drench.", "mechanical": "Uproot and destroy infected plants." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g for drenching", "waiting_period_phi": "N/A", "application_instructions": "Soil drenching." }
        }
      }
    ]
  },
  {
    "crop_id": "amaranth-greens",
    "common_name": "Amaranth Greens",
    "hindi_name": "चौलाई",
    "regional_names": {
      "marathi": "Rajgira",
      "punjabi": "Chaulai",
      "tamil": "Thandu Keerai",
      "telugu": "Thotakura"
    },
    "category": "Vegetable",
    "season": ["Zaid", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-5", "water_requirement_sensitivity": "Medium", "stage_advice": "Keep soil moist but not flooded." },
      { "stage_name": "Seedling", "day_range": "5-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Thin out crowded plants." },
      { "stage_name": "Vegetative Growth", "day_range": "15-30", "water_requirement_sensitivity": "High", "stage_advice": "Requires high nitrogen and regular irrigation for leafy output." },
      { "stage_name": "First Harvest", "day_range": "30-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest leaves by cutting above the ground to allow regrowth." },
      { "stage_name": "Subsequent Harvests", "day_range": "40-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply light top dressing of urea after every cut." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 20:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing and stunted growth.", "solution": "Urea 15 kg/acre top dress." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis in younger leaves.", "solution": "FeSO4 50g/15L pump." },
        { "nutrient": "Potassium", "symptoms": "Browning of leaf edges.", "solution": "MOP 10 kg/acre." },
        { "nutrient": "Phosphorus", "symptoms": "Purpling of stems and leaves.", "solution": "DAP base application." },
        { "nutrient": "Calcium", "symptoms": "Distorted new leaves.", "solution": "Calcium Nitrate 30g/15L pump." },
        { "nutrient": "Zinc", "symptoms": "Reduced leaf size, mottled yellowing.", "solution": "ZnSO4 30g/15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Webbing Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती लपेटक सूंडी",
        "symptoms": "Leaves webbed together, caterpillars feeding inside.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Field sanitation.", "biological_spray": "Bacillus thuringiensis (Bt) 30g/15L.", "mechanical": "Hand pick webbed leaves." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "70g in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray on foliage." }
        }
      },
      {
        "issue_name": "Stem Weevil",
        "type": "Insect-Pest",
        "hindi_name": "तना घुन",
        "symptoms": "Grubs bore into stems causing wilting and gall formation.",
        "favorable_weather": "Warm conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Remove alternative hosts.", "biological_spray": "Neem oil 10000 ppm 40ml/15L.", "mechanical": "Destroy infested plants." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos 20% EC", "commercial_reference": "Dursban", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml in 150L water", "waiting_period_phi": "15 Days", "application_instructions": "Drenching/spray at base." }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White pustules on the lower surface of leaves.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Wider spacing.", "biological_spray": "Trichoderma viride 50g/15L.", "mechanical": "Remove lower infected leaves." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g in 150L water", "waiting_period_phi": "10 Days", "application_instructions": "Spray completely." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies on tender shoots, curling leaves.",
        "favorable_weather": "Cloudy.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow sticky traps.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Wash with water spray." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves with distinct margins.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Good drainage.", "biological_spray": "Pseudomonas fluorescens 50ml/15L.", "mechanical": "Avoid overhead irrigation." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "40g", "dose_per_acre": "400g in 150L water", "waiting_period_phi": "10 Days", "application_instructions": "Preventive or early curative spray." }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, yellowing of leaves, stunted plants.",
        "favorable_weather": "Sandy soils, warm weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Marigold crop rotation.", "biological_spray": "Paecilomyces lilacinus 2 kg/acre in soil.", "mechanical": "Deep summer ploughing." },
          "chemical_curative": { "active_ingredient": "Carbofuran 3G", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5 kg/acre", "waiting_period_phi": "30 Days", "application_instructions": "Soil application at sowing." }
        }
      },
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "आर्द्रगलन",
        "symptoms": "Seedling collapse.",
        "favorable_weather": "High moisture.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Raised seedbeds.", "biological_spray": "Trichoderma soil application.", "mechanical": "Regulate watering." },
          "chemical_curative": { "active_ingredient": "Captan 50% WP", "commercial_reference": "Captaf", "dose_per_15L_pump": "40g", "dose_per_acre": "400g drench", "waiting_period_phi": "N/A", "application_instructions": "Drenching." }
        }
      }
    ]
  },
  {
    "crop_id": "lettuce",
    "common_name": "Lettuce (Romaine, Iceberg, Butterhead, Loose-leaf)",
    "hindi_name": "सलाद पत्ता",
    "regional_names": {
      "marathi": "Lettuce",
      "punjabi": "Salad Patta",
      "tamil": "Lettuce",
      "telugu": "Lettuce"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling/Transplanting", "day_range": "0-20", "water_requirement_sensitivity": "High", "stage_advice": "Ensure delicate roots establish; avoid water stress." },
      { "stage_name": "Rosette Formation", "day_range": "20-40", "water_requirement_sensitivity": "High", "stage_advice": "Constant moisture required to prevent bitter taste." },
      { "stage_name": "Cupping/Hearting (Iceberg)", "day_range": "40-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical for head formation." },
      { "stage_name": "Head Maturation", "day_range": "55-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Avoid overhead watering to prevent rot inside the head." },
      { "stage_name": "Harvesting", "day_range": "70-85", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest early morning when leaves are crisp." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 15 tons, N:P:K 40:24:24 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow leaves, slow growth.", "solution": "Urea 20 kg/acre or 50g/15L pump foliar." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves with purple tints.", "solution": "DAP at basal." },
        { "nutrient": "Potassium", "symptoms": "Brown margins on older leaves, poor head formation.", "solution": "MOP 15 kg/acre or 13:0:45 75g/15L pump." },
        { "nutrient": "Calcium", "symptoms": "'Tipburn' on inner younger leaves, margins turn brown and necrotic.", "solution": "Calcium Nitrate 50g/15L pump spray during early head formation." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing of older leaves.", "solution": "Magnesium Sulphate 50g/15L pump." },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 30g/15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Light green/yellow angular spots on upper leaf surface, white/grey fluff on lower surface.",
        "favorable_weather": "Cool, humid weather, prolonged leaf wetness.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Drip irrigation, wide spacing.", "biological_spray": "Bacillus subtilis 5ml/L.", "mechanical": "Remove affected outer leaves." },
          "chemical_curative": { "active_ingredient": "Dimethomorph 50% WP", "commercial_reference": "Acrobat", "dose_per_15L_pump": "15g", "dose_per_acre": "150g in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Sclerotinia Drop (White Mold)",
        "type": "Fungal",
        "hindi_name": "सफेद फफूंद (गलन)",
        "symptoms": "Sudden wilting of outer leaves, white cottony mycelium and black sclerotia near soil line.",
        "favorable_weather": "Cool, moist soil.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Deep ploughing, avoid overwatering.", "biological_spray": "Coniothyrium minitans soil application.", "mechanical": "Remove and destroy infected plants." },
          "chemical_curative": { "active_ingredient": "Thiophanate Methyl 70% WP", "commercial_reference": "Roko", "dose_per_15L_pump": "30g", "dose_per_acre": "300g as drench", "waiting_period_phi": "14 Days", "application_instructions": "Soil drench around collar region." }
        }
      },
      {
        "issue_name": "Botrytis (Gray Mold)",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड",
        "symptoms": "Water-soaked brownish spots, covered with fuzzy gray spores, rotting at base.",
        "favorable_weather": "Cool, very humid conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Good ventilation, avoid mechanical injury.", "biological_spray": "Trichoderma harzianum 50g/15L.", "mechanical": "Clear debris." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g in 150L water", "waiting_period_phi": "10 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curled leaves, honeydew, sooty mold, presence of green/black tiny insects.",
        "favorable_weather": "Cool to moderate temperatures.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Reflective mulches.", "biological_spray": "Neem oil 10000 ppm 30ml/15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Flonicamid 50% WG", "commercial_reference": "Ulala", "dose_per_15L_pump": "6g", "dose_per_acre": "60g in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, distortion of younger leaves.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Overhead sprinkling to dislodge.", "biological_spray": "Beauveria bassiana 50g/15L.", "mechanical": "Blue sticky traps." },
          "chemical_curative": { "active_ingredient": "Spinetoram 11.7% SC", "commercial_reference": "Delegate", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml in 150L water", "waiting_period_phi": "7 Days", "application_instructions": "Spray on foliage." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Large irregular holes in leaves, slime trails on leaves and soil.",
        "favorable_weather": "Wet, damp conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Eliminate hiding places (debris).", "biological_spray": "N/A", "mechanical": "Hand picking at night, beer traps." },
          "chemical_curative": { "active_ingredient": "Metaldehyde 5% Pellets", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2 kg/acre broadcast", "waiting_period_phi": "N/A", "application_instructions": "Broadcast pellets evenly on soil surface." }
        }
      },
      {
        "issue_name": "Cabbage Looper",
        "type": "Insect-Pest",
        "hindi_name": "गोभी लूपर",
        "symptoms": "Large ragged holes in leaves, green caterpillars moving in looping motion.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pheromone traps.", "biological_spray": "Bt kurstaki 30g/15L.", "mechanical": "Handpick caterpillars." },
          "chemical_curative": { "active_ingredient": "Chlorantraniliprole 18.5% SC", "commercial_reference": "Coragen", "dose_per_15L_pump": "6ml", "dose_per_acre": "60ml in 150L water", "waiting_period_phi": "3 Days", "application_instructions": "Spray thoroughly." }
        }
      },
      {
        "issue_name": "Lettuce Mosaic Virus (LMV)",
        "type": "Viral",
        "hindi_name": "मोज़ेक वायरस",
        "symptoms": "Mottled leaves, stunted growth, frilled leaf margins.",
        "favorable_weather": "Aphid activity.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use virus-free seeds, control aphids.", "biological_spray": "N/A", "mechanical": "Rogue out infected plants immediately." },
          "chemical_curative": { "active_ingredient": "N/A", "commercial_reference": "N/A", "dose_per_15L_pump": "N/A", "dose_per_acre": "N/A", "waiting_period_phi": "N/A", "application_instructions": "No chemical cure; control vectors like aphids with systemic insecticides." }
        }
      }
    ]
  },
  {
    "crop_id": "swiss-chard",
    "common_name": "Swiss Chard",
    "hindi_name": "स्विस चार्ड",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Soak seeds for 24h before planting." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thin clusters (seeds are multi-germ)." },
      { "stage_name": "Vegetative Growth", "day_range": "25-50", "water_requirement_sensitivity": "High", "stage_advice": "Continuous moisture prevents bitter taste." },
      { "stage_name": "Harvesting", "day_range": "50-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest outer leaves first for continuous yield." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 30:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves, stunted stalks.", "solution": "Urea 15 kg/acre top dressing." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing on older leaves.", "solution": "MgSO4 50g/15L pump." },
        { "nutrient": "Boron", "symptoms": "Cracked stems, internal browning.", "solution": "Borax 20g/15L pump." },
        { "nutrient": "Calcium", "symptoms": "Tip burn on new leaves.", "solution": "Calcium Nitrate spray." },
        { "nutrient": "Potassium", "symptoms": "Scorched leaf margins.", "solution": "KNO3 spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown/grey spots with reddish-purple halos.",
        "favorable_weather": "High humidity, warm temperatures.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation, wider spacing.", "biological_spray": "Bacillus subtilis 5ml/L.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 23% SC", "commercial_reference": "Amistar", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Serpentine mines in the leaves.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed control.", "biological_spray": "Neem oil 10000 ppm 30ml/15L.", "mechanical": "Crush larvae in leaves." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Distorted new growth, sticky honeydew.",
        "favorable_weather": "Cool weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excess N.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Yellow traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray on appearance." }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot holes in leaves.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Neem 5% extract.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Foliar application." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellowing on top, grey mold below.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Reduce leaf wetness.", "biological_spray": "Trichoderma 50g/15L.", "mechanical": "Prune dense canopies." },
          "chemical_curative": { "active_ingredient": "Metalaxyl + Mancozeb", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, wilting in daytime.",
        "favorable_weather": "Warm sandy soils.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Marigold rotation.", "biological_spray": "Paecilomyces lilacinus soil drench.", "mechanical": "Solarization." },
          "chemical_curative": { "active_ingredient": "Fluensulfone 2% GR", "commercial_reference": "Nimitz", "dose_per_15L_pump": "N/A", "dose_per_acre": "1 kg/acre", "waiting_period_phi": "30 Days", "application_instructions": "Soil application." }
        }
      }
    ]
  },
  {
    "crop_id": "arugula",
    "common_name": "Arugula / Rocket",
    "hindi_name": "रॉकेट साग",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires cool soil temperatures." },
      { "stage_name": "Seedling", "day_range": "7-15", "water_requirement_sensitivity": "High", "stage_advice": "Keep consistently moist." },
      { "stage_name": "Vegetative Growth", "day_range": "15-30", "water_requirement_sensitivity": "High", "stage_advice": "Drought stress makes leaves too spicy/bitter." },
      { "stage_name": "Harvesting", "day_range": "30-45", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest leaves young for mild flavor." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K 20:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves, slow growth.", "solution": "Urea top dress." },
        { "nutrient": "Phosphorus", "symptoms": "Purple tint on leaves.", "solution": "DAP basal." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP spray." },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Pits or small holes in leaves.",
        "favorable_weather": "Dry, warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Neem oil 30ml/15L.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots above, grey fuzz below.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Good spacing.", "biological_spray": "Bacillus subtilis 5ml/L.", "mechanical": "Remove infected leaves." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 23% SC", "commercial_reference": "Amistar", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray on appearance." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clustered on new growth, curling.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ladybugs.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Yellow traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White blisters on undersides.",
        "favorable_weather": "Cool and wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Trichoderma 50g/15L.", "mechanical": "Destroy debris." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Cabbage Worms",
        "type": "Insect-Pest",
        "hindi_name": "कैबेज वर्म",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Netting.", "biological_spray": "Bt kurstaki 30g/15L.", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "70g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "water-spinach",
    "common_name": "Water Spinach / Kangkong",
    "hindi_name": "कलमी साग",
    "regional_names": { "bengali": "Kalmi", "tamil": "Vallai Keerai" },
    "category": "Vegetable",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination/Cutting", "day_range": "0-10", "water_requirement_sensitivity": "High", "stage_advice": "Requires saturated soil." },
      { "stage_name": "Establishment", "day_range": "10-20", "water_requirement_sensitivity": "High", "stage_advice": "Maintain high soil moisture." },
      { "stage_name": "Rapid Growth", "day_range": "20-30", "water_requirement_sensitivity": "High", "stage_advice": "Apply nitrogen fertilizers." },
      { "stage_name": "Harvest", "day_range": "30-45", "water_requirement_sensitivity": "High", "stage_advice": "Cut shoots 5cm above soil." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of leaves, slow growth.", "solution": "Urea top dress." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "FeSO4 spray." },
        { "nutrient": "Potassium", "symptoms": "Marginal necrosis.", "solution": "MOP spray." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted root/shoot.", "solution": "DAP basal." },
        { "nutrient": "Magnesium", "symptoms": "Mottled older leaves.", "solution": "MgSO4 spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Tortoise Beetle",
        "type": "Insect-Pest",
        "hindi_name": "कछुआ भृंग",
        "symptoms": "Round holes in leaves.",
        "favorable_weather": "Humid, warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed host removal.", "biological_spray": "Neem oil 30ml/15L.", "mechanical": "Hand picking." },
          "chemical_curative": { "active_ingredient": "Quinalphos 25% EC", "commercial_reference": "Ekalux", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Good spacing.", "biological_spray": "Pseudomonas fluorescens 50ml/15L.", "mechanical": "Remove infected parts." },
          "chemical_curative": { "active_ingredient": "Carbendazim + Mancozeb", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "10 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Rotting at water line.",
        "favorable_weather": "Stagnant warm water.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ensure flowing water if possible.", "biological_spray": "Trichoderma drench.", "mechanical": "Remove rotted stems." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride 50% WP", "commercial_reference": "Blitox", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Drenching." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies on tender tips.",
        "favorable_weather": "Warm/humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excess N.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Water spray." },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Leaf Folders",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती मोड़क",
        "symptoms": "Leaves folded and webbed.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean cultivation.", "biological_spray": "Bt 30g/15L.", "mechanical": "Crush folded leaves." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "70g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Stunted plants, galls on roots (dryland cultivation).",
        "favorable_weather": "Warm soils.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Paecilomyces lilacinus.", "mechanical": "Deep plowing." },
          "chemical_curative": { "active_ingredient": "Carbofuran 3G", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5 kg/acre", "waiting_period_phi": "30 Days", "application_instructions": "Soil application." }
        }
      }
    ]
  },
  {
    "crop_id": "mustard-greens",
    "common_name": "Mustard Greens",
    "hindi_name": "सरसों का साग",
    "regional_names": { "punjabi": "Sarson Saag" },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-6", "water_requirement_sensitivity": "Medium", "stage_advice": "Moist seedbed required." },
      { "stage_name": "Seedling", "day_range": "6-20", "water_requirement_sensitivity": "High", "stage_advice": "Thinning is necessary." },
      { "stage_name": "Vegetative Growth", "day_range": "20-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogen." },
      { "stage_name": "First Harvest", "day_range": "40-50", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest tender leaves." },
      { "stage_name": "Flowering (if left)", "day_range": "50-70", "water_requirement_sensitivity": "Low", "stage_advice": "Leaves become bitter after bolting." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:15:15 kg/acre, Sulphur 10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves.", "solution": "Urea 15 kg/acre." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves, cupping.", "solution": "Bentonite Sulphur 10 kg/acre." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted, dark green/purplish leaves.", "solution": "DAP basal." },
        { "nutrient": "Boron", "symptoms": "Hollow stems, distorted leaves.", "solution": "Borax 20g/15L spray." },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching.", "solution": "MOP top dress." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis.", "solution": "MgSO4 spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mustard Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Heavy colonies on leaves and stems, honeydew.",
        "favorable_weather": "Cloudy, cool weather.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Early sowing.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Concentric dark rings on leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean seeds.", "biological_spray": "Trichoderma viride 50g/15L.", "mechanical": "Remove lower infected leaves." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Foliar spray." }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White pustules on undersides.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Bacillus subtilis 5ml/L.", "mechanical": "Destroy debris." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Sawfly",
        "type": "Insect-Pest",
        "hindi_name": "आरा मक्खी",
        "symptoms": "Blackish larvae chewing holes in leaves.",
        "favorable_weather": "Early season warmth.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Summer ploughing.", "biological_spray": "Neem oil 30ml/15L.", "mechanical": "Hand pick larvae." },
          "chemical_curative": { "active_ingredient": "Malathion 50% EC", "commercial_reference": "Cythion", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "10 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Painted Bug",
        "type": "Insect-Pest",
        "hindi_name": "पेंटेड बग",
        "symptoms": "Sucks sap, leaves dry up.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Irrigation to reduce numbers.", "biological_spray": "Beauveria bassiana 50g/15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Dimethoate 30% EC", "commercial_reference": "Rogor", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow patches on top, grey mold below.",
        "favorable_weather": "Cool and wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Pseudomonas 50ml/15L.", "mechanical": "Remove debris." },
          "chemical_curative": { "active_ingredient": "Cymoxanil + Mancozeb", "commercial_reference": "Curzate", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Diamondback Moth",
        "type": "Insect-Pest",
        "hindi_name": "हीरक पीठ पतंगा",
        "symptoms": "Larvae scrape leaves leaving transparent patches.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Mustard as trap crop.", "biological_spray": "Bt kurstaki 30g/15L.", "mechanical": "Pheromone traps." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "malabar-spinach",
    "common_name": "Malabar Spinach",
    "hindi_name": "पोई साग",
    "regional_names": { "bengali": "Pui Saag" },
    "category": "Vegetable",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination/Cutting", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Keep warm and moist." },
      { "stage_name": "Vine Growth", "day_range": "15-35", "water_requirement_sensitivity": "High", "stage_advice": "Provide trellis support." },
      { "stage_name": "Vegetative Production", "day_range": "35-60", "water_requirement_sensitivity": "High", "stage_advice": "Regular watering ensures tender leaves." },
      { "stage_name": "Harvesting", "day_range": "60-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Pluck tender shoots regularly." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 20:20:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea top dress." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted vines.", "solution": "DAP basal." },
        { "nutrient": "Potassium", "symptoms": "Brown leaf edges.", "solution": "MOP top dress." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "FeSO4 spray." },
        { "nutrient": "Calcium", "symptoms": "Distorted new leaves.", "solution": "Calcium Nitrate spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Circular spots with purple margins.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing, trellis.", "biological_spray": "Trichoderma 50g/15L.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, stunted growth.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Marigold intercropping.", "biological_spray": "Paecilomyces.", "mechanical": "Solarization." },
          "chemical_curative": { "active_ingredient": "Carbofuran 3G", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5kg", "waiting_period_phi": "30 Days", "application_instructions": "Soil app." }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ash dusting.", "biological_spray": "Neem oil 30ml/15L.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Chewed leaves, slime.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Diatomaceous earth.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde 5%", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2 kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap on new shoots.",
        "favorable_weather": "Cloudy.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Verticillium lecanii 50g/15L.", "mechanical": "Water spray." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "bathua",
    "common_name": "Bathua / Chenopodium",
    "hindi_name": "बथुआ",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Often grows wild, requires minimal care initially." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "Low", "stage_advice": "Thin out." },
      { "stage_name": "Vegetative Growth", "day_range": "25-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Nitrogen boosts leaf production." },
      { "stage_name": "Harvesting", "day_range": "40-60", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest before flowering." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K 15:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Phosphorus", "symptoms": "Purple tint.", "solution": "DAP." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "FeSO4." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curled leaves, honeydew.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil 30ml/15L.", "mechanical": "Wash with water." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Tunnels in leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed control.", "biological_spray": "Neem seed kernel extract.", "mechanical": "Remove affected leaves." },
          "chemical_curative": { "active_ingredient": "Abamectin 1.9% EC", "commercial_reference": "Vertimec", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots above, fuzz below.",
        "favorable_weather": "Humid, cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove debris." },
          "chemical_curative": { "active_ingredient": "Metalaxyl + Mancozeb", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots with grey center.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Air circulation.", "biological_spray": "Trichoderma.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim + Mancozeb", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Ash dust.", "biological_spray": "Neem oil.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "sorrel",
    "common_name": "Sorrel",
    "hindi_name": "सोरेल/चुका साग",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-14", "water_requirement_sensitivity": "Medium", "stage_advice": "Moist soil." },
      { "stage_name": "Seedling", "day_range": "14-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Vegetative Growth", "day_range": "30-50", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture to prevent bolting." },
      { "stage_name": "Harvesting", "day_range": "50-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Regular harvest of young leaves." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.8",
      "basal_dose_per_acre": "FYM 8 tons, N:P:K 20:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Potassium", "symptoms": "Scorched edges.", "solution": "MOP." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "FeSO4." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing of older leaves.", "solution": "MgSO4." }
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
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil 30ml.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Holes in leaves, slime.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Debris removal.", "biological_spray": "N/A", "mechanical": "Beer traps." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Tunnels.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed control.", "biological_spray": "Neem.", "mechanical": "Crush larvae." },
          "chemical_curative": { "active_ingredient": "Spinosad", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin", "commercial_reference": "Amistar", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "purslane",
    "common_name": "Purslane",
    "hindi_name": "कुलफा/लोणिया",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Zaid", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Low", "stage_advice": "Needs light to germinate." },
      { "stage_name": "Seedling", "day_range": "7-20", "water_requirement_sensitivity": "Low", "stage_advice": "Very drought tolerant." },
      { "stage_name": "Vegetative Growth", "day_range": "20-35", "water_requirement_sensitivity": "Low", "stage_advice": "Grows vigorously." },
      { "stage_name": "Harvesting", "day_range": "35-50", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest stems and leaves." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K 10:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP." },
        { "nutrient": "Iron", "symptoms": "Chlorosis.", "solution": "FeSO4." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Purslane Sawfly",
        "type": "Insect-Pest",
        "hindi_name": "आरा मक्खी",
        "symptoms": "Larvae chewing leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Tilling.", "biological_spray": "Neem oil.", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Quinalphos", "commercial_reference": "Ekalux", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Verticillium lecanii.", "mechanical": "Water spray." },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रतुआ",
        "symptoms": "White pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Trichoderma.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Metalaxyl + Mancozeb", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls.",
        "favorable_weather": "Warm sandy soils.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Paecilomyces.", "mechanical": "Solarization." },
          "chemical_curative": { "active_ingredient": "Carbofuran", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5kg", "waiting_period_phi": "30 Days", "application_instructions": "Soil app." }
        }
      }
    ]
  },
  {
    "crop_id": "endive",
    "common_name": "Endive",
    "hindi_name": "एंडाइव",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Cool soil." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thin out." },
      { "stage_name": "Vegetative Growth", "day_range": "25-55", "water_requirement_sensitivity": "High", "stage_advice": "Blanching (tying leaves) starts here." },
      { "stage_name": "Harvesting", "day_range": "55-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest blanched hearts." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea." },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "MgSO4." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Flonicamid", "commercial_reference": "Ulala", "dose_per_15L_pump": "6g", "dose_per_acre": "60g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots, grey fuzz.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Dimethomorph", "commercial_reference": "Acrobat", "dose_per_15L_pump": "15g", "dose_per_acre": "150g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Debris clearance.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      },
      {
        "issue_name": "Botrytis Rot",
        "type": "Fungal",
        "hindi_name": "बोट्राइटिस गलन",
        "symptoms": "Grey mold on lower leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Air circulation.", "biological_spray": "Trichoderma.", "mechanical": "Remove infected parts." },
          "chemical_curative": { "active_ingredient": "Carbendazim", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Cutworms",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Seedlings cut at base.",
        "favorable_weather": "Warm days, cool nights.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Tillage.", "biological_spray": "Beauveria.", "mechanical": "Hand pick at night." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos", "commercial_reference": "Dursban", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Drench." }
        }
      }
    ]
  },
  {
    "crop_id": "escarole",
    "common_name": "Escarole",
    "hindi_name": "एस्करोल",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Cool soil." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thinning." },
      { "stage_name": "Vegetative Growth", "day_range": "25-60", "water_requirement_sensitivity": "High", "stage_advice": "Consistent moisture." },
      { "stage_name": "Harvesting", "day_range": "60-85", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest heads." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:15:15 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Calcium", "symptoms": "Tip burn.", "solution": "Calcium Nitrate." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "MgSO4." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Flonicamid", "commercial_reference": "Ulala", "dose_per_15L_pump": "6g", "dose_per_acre": "60g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots, grey fuzz.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Dimethomorph", "commercial_reference": "Acrobat", "dose_per_15L_pump": "15g", "dose_per_acre": "150g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Debris clearance.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      },
      {
        "issue_name": "Botrytis Rot",
        "type": "Fungal",
        "hindi_name": "बोट्राइटिस गलन",
        "symptoms": "Grey mold.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Air circulation.", "biological_spray": "Trichoderma.", "mechanical": "Remove infected parts." },
          "chemical_curative": { "active_ingredient": "Carbendazim", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर",
        "symptoms": "Tunnels in leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed control.", "biological_spray": "Neem oil.", "mechanical": "Crush larvae." },
          "chemical_curative": { "active_ingredient": "Spinosad", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "radicchio",
    "common_name": "Radicchio",
    "hindi_name": "रेडिकियो",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Cool soil." },
      { "stage_name": "Seedling", "day_range": "10-25", "water_requirement_sensitivity": "Medium", "stage_advice": "Thin out." },
      { "stage_name": "Vegetative Growth", "day_range": "25-60", "water_requirement_sensitivity": "High", "stage_advice": "Requires cool temps for color development." },
      { "stage_name": "Harvesting", "day_range": "60-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Harvest heads when firm." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 25:15:20 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea." },
        { "nutrient": "Potassium", "symptoms": "Poor head formation.", "solution": "MOP." },
        { "nutrient": "Calcium", "symptoms": "Tip burn in inner leaves.", "solution": "Calcium Nitrate." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal yellowing.", "solution": "MgSO4." }
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
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Flonicamid", "commercial_reference": "Ulala", "dose_per_15L_pump": "6g", "dose_per_acre": "60g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots, fuzz.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Dimethomorph", "commercial_reference": "Acrobat", "dose_per_15L_pump": "15g", "dose_per_acre": "150g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Holes in leaves.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Debris clearance.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      },
      {
        "issue_name": "Bottom Rot (Rhizoctonia)",
        "type": "Fungal",
        "hindi_name": "बॉटम रॉट",
        "symptoms": "Rotting at base.",
        "favorable_weather": "Humid, warm soil.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Raised beds.", "biological_spray": "Trichoderma.", "mechanical": "Remove infected plants." },
          "chemical_curative": { "active_ingredient": "Thiophanate Methyl", "commercial_reference": "Roko", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Drench." }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Row covers.", "biological_spray": "Neem oil.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "watercress",
    "common_name": "Watercress",
    "hindi_name": "जलकुम्भी",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination/Cutting", "day_range": "0-10", "water_requirement_sensitivity": "High", "stage_advice": "Requires very wet soil or flowing water." },
      { "stage_name": "Establishment", "day_range": "10-25", "water_requirement_sensitivity": "High", "stage_advice": "Maintain water levels." },
      { "stage_name": "Vegetative Growth", "day_range": "25-45", "water_requirement_sensitivity": "High", "stage_advice": "Rapid growth with high moisture." },
      { "stage_name": "Harvesting", "day_range": "45-60", "water_requirement_sensitivity": "High", "stage_advice": "Harvest tops regularly." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 20:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Iron", "symptoms": "Chlorosis.", "solution": "FeSO4." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted.", "solution": "DAP." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Holes in leaves.",
        "favorable_weather": "Dry air above water.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Submerge plants temporarily.", "biological_spray": "Neem.", "mechanical": "Sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Airflow.", "biological_spray": "Trichoderma.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim + Mancozeb", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Drainage control.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      }
    ]
  },
  {
    "crop_id": "mache",
    "common_name": "Mache / Corn Salad",
    "hindi_name": "मैश सलाद",
    "regional_names": {},
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-14", "water_requirement_sensitivity": "Medium", "stage_advice": "Needs cool soil." },
      { "stage_name": "Vegetative Growth", "day_range": "14-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Keep moist." },
      { "stage_name": "Harvesting", "day_range": "40-60", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest whole rosettes." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 5 tons, N:P:K 15:10:10 kg/acre",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted.", "solution": "DAP." },
        { "nutrient": "Potassium", "symptoms": "Brown edges.", "solution": "MOP." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Neem oil.", "mechanical": "Wash." },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellow spots, fuzz.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Spacing.", "biological_spray": "Bacillus subtilis.", "mechanical": "Remove leaves." },
          "chemical_curative": { "active_ingredient": "Metalaxyl + Mancozeb", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Slugs",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Holes in leaves.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Debris clearance.", "biological_spray": "N/A", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Metaldehyde", "commercial_reference": "Snail Kill", "dose_per_15L_pump": "N/A", "dose_per_acre": "2kg", "waiting_period_phi": "N/A", "application_instructions": "Broadcast." }
        }
      }
    ]
  },
  {
    "crop_id": "moringa-leaves",
    "common_name": "Moringa Leaves",
    "hindi_name": "मोरिंगा/सहजन",
    "regional_names": { "tamil": "Murungai", "telugu": "Munagaku", "marathi": "Shevga" },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination/Cutting", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure well-drained soil." },
      { "stage_name": "Seedling/Establishment", "day_range": "15-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect from frost and waterlogging." },
      { "stage_name": "Vegetative Branching", "day_range": "45-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Prune tips to encourage branching for more leaves." },
      { "stage_name": "First Harvest", "day_range": "90-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest leaves, apply nitrogen." },
      { "stage_name": "Regrowth/Coppicing", "day_range": "120+", "water_requirement_sensitivity": "Low", "stage_advice": "Regular harvesting and pruning." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.3-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N:P:K 30:15:15 kg/acre (intensive leaf production)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Overall yellowing.", "solution": "Urea 20 kg/acre." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on new leaves.", "solution": "FeSO4 spray." },
        { "nutrient": "Zinc", "symptoms": "Small leaves, short internodes.", "solution": "ZnSO4 spray." },
        { "nutrient": "Phosphorus", "symptoms": "Dark green, purple tints.", "solution": "DAP." },
        { "nutrient": "Potassium", "symptoms": "Brown margins.", "solution": "MOP." },
        { "nutrient": "Magnesium", "symptoms": "Older leaf yellowing.", "solution": "MgSO4." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालों वाली सूंडी",
        "symptoms": "Defoliation of entire branches.",
        "favorable_weather": "Warm, humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Summer ploughing.", "biological_spray": "Beauveria bassiana 50g/15L.", "mechanical": "Collect and destroy egg masses." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos 20% EC", "commercial_reference": "Dursban", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Bud Worm",
        "type": "Insect-Pest",
        "hindi_name": "कली छेदक",
        "symptoms": "Damages buds and young leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Light traps.", "biological_spray": "Bt 30g/15L.", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "70g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Bark Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल भक्षक सूंडी",
        "symptoms": "Webs on bark, feeding on stem.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean stems.", "biological_spray": "Beauveria.", "mechanical": "Insert iron wire in holes." },
          "chemical_curative": { "active_ingredient": "Dichlorvos 76% EC", "commercial_reference": "Nuvan", "dose_per_15L_pump": "10ml in hole", "dose_per_acre": "N/A", "waiting_period_phi": "14 Days", "application_instructions": "Inject into holes and plug." }
        }
      },
      {
        "issue_name": "Dieback",
        "type": "Fungal",
        "hindi_name": "डाईबैक",
        "symptoms": "Drying of branches from tip downwards.",
        "favorable_weather": "Wet conditions followed by dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Prune below infected part.", "biological_spray": "Trichoderma.", "mechanical": "Apply Bordeaux paste on cut ends." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride 50% WP", "commercial_reference": "Blitox", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray and apply paste." }
        }
      },
      {
        "issue_name": "Pod Fly",
        "type": "Insect-Pest",
        "hindi_name": "फली मक्खी",
        "symptoms": "Maggots inside pods (if flowering allowed).",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pheromone traps.", "biological_spray": "Neem oil.", "mechanical": "Destroy infested pods." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curled new leaves.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Verticillium lecanii.", "mechanical": "Water spray." },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Airflow.", "biological_spray": "Pseudomonas.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim + Mancozeb", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "curry-leaf",
    "common_name": "Curry Leaf",
    "hindi_name": "कढ़ी पत्ता",
    "regional_names": { "tamil": "Karuveppilai", "telugu": "Karivepaku", "marathi": "Kadi Patta" },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Seedling/Transplanting", "day_range": "0-30", "water_requirement_sensitivity": "High", "stage_advice": "Shade young plants." },
      { "stage_name": "Establishment", "day_range": "30-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Pinch tip to encourage branching." },
      { "stage_name": "Vegetative Growth", "day_range": "90-180", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply organic manure regularly." },
      { "stage_name": "First Harvest", "day_range": "180-210", "water_requirement_sensitivity": "Low", "stage_advice": "Pluck mature leaves." },
      { "stage_name": "Pruning/Coppicing", "day_range": "365+", "water_requirement_sensitivity": "Medium", "stage_advice": "Prune annually to maintain bush shape." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 kg/plant/year, N:P:K 20:10:10 g/plant",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale small leaves.", "solution": "Urea." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis.", "solution": "FeSO4." },
        { "nutrient": "Zinc", "symptoms": "Rosetting.", "solution": "ZnSO4." },
        { "nutrient": "Magnesium", "symptoms": "Older leaf yellowing.", "solution": "MgSO4." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Psyllid (Citrus Psylla)",
        "type": "Insect-Pest",
        "hindi_name": "सिट्रस सिला",
        "symptoms": "Nymphs suck sap, gall formation, distorted leaves.",
        "favorable_weather": "New flush period.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Prune affected parts.", "biological_spray": "Neem oil 10000 ppm 45ml/15L.", "mechanical": "Yellow traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Scale Insect",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Brown/black scales on stems and leaves, sooty mold.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pruning.", "biological_spray": "Verticillium lecanii.", "mechanical": "Rub off with brush." },
          "chemical_curative": { "active_ingredient": "Profenofos 50% EC", "commercial_reference": "Curacron", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती मोड़क",
        "symptoms": "Leaves rolled and webbed.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean cultivation.", "biological_spray": "Bt 30g/15L.", "mechanical": "Crush rolled leaves." },
          "chemical_curative": { "active_ingredient": "Quinalphos 25% EC", "commercial_reference": "Ekalux", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Airflow.", "biological_spray": "Trichoderma.", "mechanical": "Remove spotted leaves." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Collar Rot",
        "type": "Fungal",
        "hindi_name": "कॉलर रॉट",
        "symptoms": "Bark peeling at soil level, wilting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Good drainage.", "biological_spray": "Trichoderma drench.", "mechanical": "Expose root collar to sun." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride", "commercial_reference": "Blitox", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Soil drench." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking on tender tips.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "N/A", "biological_spray": "Neem oil.", "mechanical": "Water spray." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam", "commercial_reference": "Actara", "dose_per_15L_pump": "5g", "dose_per_acre": "50g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
  {
    "crop_id": "drumstick",
    "common_name": "Drumstick / Moringa Tree (For Pods)",
    "hindi_name": "सहजन (फली के लिए)",
    "regional_names": { "tamil": "Murungai", "telugu": "Munagakaya", "marathi": "Shevga" },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Seedling/Transplanting", "day_range": "0-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Avoid waterlogging." },
      { "stage_name": "Vegetative Growth", "day_range": "30-150", "water_requirement_sensitivity": "Low", "stage_advice": "Prune at 75cm to encourage branching." },
      { "stage_name": "Flowering", "day_range": "150-180", "water_requirement_sensitivity": "Medium", "stage_advice": "Moderate watering to avoid flower drop." },
      { "stage_name": "Pod Formation", "day_range": "180-210", "water_requirement_sensitivity": "Medium", "stage_advice": "Moisture needed for long pods." },
      { "stage_name": "Harvesting", "day_range": "210-240", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest green pods." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "FYM 10 kg/tree, N:P:K 45:15:30 g/tree",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing leaves.", "solution": "Urea." },
        { "nutrient": "Phosphorus", "symptoms": "Poor flowering.", "solution": "DAP." },
        { "nutrient": "Potassium", "symptoms": "Small/deformed pods.", "solution": "MOP." },
        { "nutrient": "Boron", "symptoms": "Flower drop, cracked pods.", "solution": "Borax." },
        { "nutrient": "Zinc", "symptoms": "Small leaves.", "solution": "ZnSO4." },
        { "nutrient": "Iron", "symptoms": "Chlorosis.", "solution": "FeSO4." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pod Fly",
        "type": "Insect-Pest",
        "hindi_name": "फली मक्खी",
        "symptoms": "Maggots inside pods, pods rot and dry.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pheromone traps.", "biological_spray": "Neem oil.", "mechanical": "Destroy infested pods." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray at flowering and pod setting." }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालों वाली सूंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Tillage.", "biological_spray": "Bt 30g.", "mechanical": "Hand pick." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos 20% EC", "commercial_reference": "Dursban", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Bud Worm",
        "type": "Insect-Pest",
        "hindi_name": "कली छेदक",
        "symptoms": "Feeds on flowers.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Light traps.", "biological_spray": "Beauveria.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7g", "dose_per_acre": "70g", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Bark Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल भक्षक सूंडी",
        "symptoms": "Webs on bark.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clean stems.", "biological_spray": "N/A", "mechanical": "Iron wire." },
          "chemical_curative": { "active_ingredient": "Dichlorvos", "commercial_reference": "Nuvan", "dose_per_15L_pump": "10ml/hole", "dose_per_acre": "N/A", "waiting_period_phi": "14 Days", "application_instructions": "Inject." }
        }
      },
      {
        "issue_name": "Dieback",
        "type": "Fungal",
        "hindi_name": "डाईबैक",
        "symptoms": "Drying of branches.",
        "favorable_weather": "Wet then dry.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Pruning.", "biological_spray": "Trichoderma.", "mechanical": "Bordeaux paste." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride", "commercial_reference": "Blitox", "dose_per_15L_pump": "40g", "dose_per_acre": "400g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Yellow traps.", "biological_spray": "Verticillium.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Imidacloprid", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml", "waiting_period_phi": "7 Days", "application_instructions": "Spray." }
        }
      },
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "फली गलन",
        "symptoms": "Pods rot.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Airflow.", "biological_spray": "Pseudomonas.", "mechanical": "Remove rotted pods." },
          "chemical_curative": { "active_ingredient": "Carbendazim + Mancozeb", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g", "waiting_period_phi": "14 Days", "application_instructions": "Spray." }
        }
      }
    ]
  },
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
  },
{
    "crop_id": "asparagus",
    "common_name": "Asparagus",
    "hindi_name": "शतावरी",
    "regional_names": {
      "marathi": "शतावरी",
      "punjabi": "ਸਤਾਵਰ",
      "tamil": "தண்ணீர்விட்டான் கிழங்கு",
      "telugu": "పిల్లిపీచర"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Crown Establishment",
        "day_range": "0-90 (Year 1)",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure deep, loose soil and consistent moisture for strong crown and root development. Do not overwater to avoid rotting."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "Winter months",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Allow ferns to yellow and die back naturally before cutting them at the ground level to push energy into the crown."
      },
      {
        "stage_name": "Spear Emergence",
        "day_range": "Spring (Year 2+)",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor soil moisture carefully. Avoid frost damage if possible. Harvest spears when 6-8 inches tall."
      },
      {
        "stage_name": "Fern Growth",
        "day_range": "Post-harvest summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical period for building reserves for next year's crop. Maintain regular irrigation and weed control."
      },
      {
        "stage_name": "Harvest",
        "day_range": "Ongoing spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest selectively. Do not harvest too long in the early years to allow the crown to strengthen."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 10 tons, N: 40 kg, P: 25 kg, K: 40 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older ferns and stunted spear growth.",
          "solution": "Apply Urea at 20 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor crown development, purple tint on stems and ferns.",
          "solution": "Apply SSP at 50 kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, increased susceptibility to diseases like rust.",
          "solution": "Apply MOP at 25 kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip dieback of spears and ferns.",
          "solution": "Apply Calcium Nitrate at 2 g/L (30g per 15L pump) as foliar spray."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older ferns.",
          "solution": "Apply Magnesium Sulphate at 3 g/L (45g per 15L pump)."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Hollow stems in spears and malformed tips.",
          "solution": "Apply Borax at 4 kg/acre to soil or foliar spray at 1.5 g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fusarium Crown and Root Rot",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम जड़ गलन",
        "symptoms": "Yellowing of ferns, reddish-brown lesions on lower stems and roots, crown rotting.",
        "favorable_weather": "Warm soil, poor drainage, stress conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free crowns, ensure excellent drainage, practice crop rotation.",
            "biological_spray": "Trichoderma viride at 2 kg/acre enriched in FYM applied to soil.",
            "mechanical": "Remove and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water as drench",
            "waiting_period_phi": "21",
            "application_instructions": "Drench the soil around the crown area thoroughly."
          }
        }
      },
      {
        "issue_name": "Asparagus Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट / गेरुआ",
        "symptoms": "Light green oval lesions on stems turning into reddish-brown blister-like pustules on ferns.",
        "favorable_weather": "High humidity and prolonged leaf wetness.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing for air circulation, cut and burn ferns in winter.",
            "biological_spray": "Bacillus subtilis at 5 ml/L.",
            "mechanical": "Prune severely infected sections early."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray thoroughly covering all fern surfaces when disease appears."
          }
        }
      },
      {
        "issue_name": "Asparagus Beetle",
        "type": "Insect-Pest",
        "hindi_name": "शतावरी भृंग",
        "symptoms": "Adults and larvae chew on spears causing scarring and browning, defoliate ferns.",
        "favorable_weather": "Warm spring weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean harvest daily, clean winter debris.",
            "biological_spray": "Neem oil (1500 ppm) at 50 ml/pump.",
            "mechanical": "Handpick adults in small patches."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Ustad, Cymbush",
            "dose_per_15L_pump": "10-15 ml",
            "dose_per_acre": "150 ml in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Spray after spear harvest is complete or on ferns during summer."
          }
        }
      },
      {
        "issue_name": "Purple Spot",
        "type": "Fungal",
        "hindi_name": "पर्पल स्पॉट",
        "symptoms": "Elliptical, slightly sunken purple lesions on spears and stems.",
        "favorable_weather": "Cool, wet conditions and blowing sand.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead irrigation, manage crop residues.",
            "biological_spray": "Pseudomonas fluorescens at 5 ml/L.",
            "mechanical": "Remove infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Apply at early symptom appearance on ferns."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clustering on ferns, sucking sap, causing yellowing, stunting, and sooty mold.",
        "favorable_weather": "Cool to moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Preserve natural enemies like ladybugs.",
            "biological_spray": "Lecanicillium lecanii at 5 g/L.",
            "mechanical": "Water sprays to dislodge insects."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray thoroughly on the fern canopy."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म (सुंडी)",
        "symptoms": "Spears cut off near soil surface, or chew marks on side of spears making them curl.",
        "favorable_weather": "Moist soil, active at night.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing before planting, clear weeds.",
            "biological_spray": "Beauveria bassiana at 5 g/L.",
            "mechanical": "Use physical collars or traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Apply as soil drench around the base in the evening."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on ferns, distorted growth, weakening of plant.",
        "favorable_weather": "Hot and dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use blue sticky traps.",
            "biological_spray": "Neem extract (Azadirachtin) 3000 ppm at 30 ml/pump.",
            "mechanical": "Overhead irrigation to wash them off."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray focusing on new growth and leaf axils."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bamboo-shoots",
    "common_name": "Bamboo Shoots",
    "hindi_name": "बाँस के अंकुर",
    "regional_names": {
      "marathi": "बांबूचे कोंब",
      "punjabi": "ਬਾਂਸ ਦੀਆਂ ਕਰੂੰਬਲਾਂ",
      "tamil": "மூங்கில் குருத்து",
      "telugu": "వెదురు చిగుళ్లు"
    },
    "category": "Vegetable",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Sprouting/Shooting",
        "day_range": "Early Monsoon",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for tender shoot development. Keep soil moist; cover emerging shoots with soil/mulch to keep them white and tender (etiolation)."
      },
      {
        "stage_name": "Culm Growth",
        "day_range": "Mid Monsoon",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Unharvested shoots grow rapidly into culms. Requires high moisture and nutrient availability."
      },
      {
        "stage_name": "Branching & Leafing",
        "day_range": "Post Monsoon",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "New leaves appear. Need balanced NPK to support foliage."
      },
      {
        "stage_name": "Mature Culm",
        "day_range": "Winter-Summer",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Dormant phase for shooting, focus on clump maintenance and thinning."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10-15 tons, N: 60 kg, P: 30 kg, K: 40 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, reduced shoot yield and size.",
          "solution": "Apply Urea at 30 kg/acre in splits."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow rhizome expansion, thin shoots.",
          "solution": "Apply SSP at 50 kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak culms, yellow leaf tips, poor disease resistance.",
          "solution": "Apply MOP at 25 kg/acre."
        },
        {
          "nutrient": "Silicon",
          "symptoms": "Drooping leaves, lodging of young culms, high pest susceptibility.",
          "solution": "Apply Potassium Silicate at 2 g/L foliar spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bamboo Aphids",
        "type": "Insect-Pest",
        "hindi_name": "बाँस का माहू",
        "symptoms": "Sooty mold on leaves, sticky honeydew, sap draining from tender shoots.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good air circulation by thinning out old culms.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "Prune heavily infested branches."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "60 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray on foliage if infestation is severe."
          }
        }
      },
      {
        "issue_name": "Bamboo Weevil",
        "type": "Insect-Pest",
        "hindi_name": "बाँस घुन/वीविल",
        "symptoms": "Holes in emerging shoots, rotting and death of the shoot, larvae feeding inside.",
        "favorable_weather": "Monsoon/shooting season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Harvest shoots early, remove and destroy infested shoots.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Light traps to catch adult weevils."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Soil drench around clumps."
          }
        }
      },
      {
        "issue_name": "Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Bore holes with frass near shoot nodes, stunting or death of tender shoots.",
        "favorable_weather": "Humid and warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Regular clump cleaning, destroy borer-infested shoots.",
            "biological_spray": "Bt (Bacillus thuringiensis) at 2 g/L.",
            "mechanical": "Extract larvae manually from accessible holes."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Apply near base of shoots."
          }
        }
      },
      {
        "issue_name": "Culm Rot",
        "type": "Fungal",
        "hindi_name": "कल्म रॉट",
        "symptoms": "Water-soaked lesions on young shoots, leading to foul-smelling rot and collapse.",
        "favorable_weather": "Heavy rainfall, waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid waterlogging around clumps.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Remove rotting shoots immediately."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Drench base of the clumps."
          }
        }
      },
      {
        "issue_name": "Leaf Rust",
        "type": "Fungal",
        "hindi_name": "पत्ती का गेरुआ",
        "symptoms": "Orange to brown powdery spots on the underside of leaves.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain clump spacing to reduce humidity.",
            "biological_spray": "Ampelomyces quisqualis (mycoparasite).",
            "mechanical": "Remove severely infected foliage."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Foliar spray if damage impacts vigor."
          }
        }
      }
    ]
  },
  {
    "crop_id": "globe-artichoke",
    "common_name": "Globe Artichoke",
    "hindi_name": "हाथीचक",
    "regional_names": {
      "marathi": "आर्टिचोक",
      "punjabi": "ਆਰਟੀਚੋਕ",
      "tamil": "ஆர்டிசோக்",
      "telugu": "ఆర్టిచోక్"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling/Transplanting",
        "day_range": "0-45 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires deep, fertile soil. Water regularly to establish strong taproots."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "45-90 Days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Large rosette formation requires good nitrogen availability and space."
      },
      {
        "stage_name": "Bud Initiation",
        "day_range": "90-110 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water stress here can abort buds or reduce size."
      },
      {
        "stage_name": "Head Development",
        "day_range": "110-150 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep moisture consistent. Provide potassium to improve bud quality."
      },
      {
        "stage_name": "Flowering/Harvest",
        "day_range": "150-180 Days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest buds before the bracts open and purplish flowers appear."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "FYM 10 tons, N: 60 kg, P: 40 kg, K: 50 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green/yellow leaves, overall stunting, small heads.",
          "solution": "Apply Urea at 25 kg/acre during vegetative phase."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, dark green to purplish tinge on older leaves.",
          "solution": "Apply DAP at 40 kg/acre as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves, loose or small heads.",
          "solution": "Apply MOP at 25 kg/acre before bud initiation."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn on young leaves, internal browning in buds.",
          "solution": "Foliar spray of Calcium Nitrate at 2-3 g/L (30-45g per 15L pump)."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked stems below heads, hollow stems, brittle leaves.",
          "solution": "Foliar spray of Boron (Solubor 20%) at 1-1.5 g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Botrytis (Grey Mold)",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड (बोट्राइटिस)",
        "symptoms": "Grey, fuzzy fungal growth on floral buds (heads) and decaying leaves.",
        "favorable_weather": "Cool, very humid, and rainy conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good spacing, avoid overhead watering late in the day.",
            "biological_spray": "Trichoderma harzianum or Bacillus subtilis.",
            "mechanical": "Remove and destroy infected buds/leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf, Sixer",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray focusing on heads and dense canopy."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery spots on both sides of leaves, leading to leaf drop.",
        "favorable_weather": "Dry days with cool, dewy nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good air circulation, remove weeds.",
            "biological_spray": "Ampelomyces quisqualis at 5 g/L.",
            "mechanical": "Remove severely affected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Foliar spray when disease first appears."
          }
        }
      },
      {
        "issue_name": "Artichoke Plume Moth",
        "type": "Insect-Pest",
        "hindi_name": "प्लम मोथ",
        "symptoms": "Larvae bore into stems and buds, causing black feeding tunnels and ruined heads.",
        "favorable_weather": "Warm dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut stalks below ground after harvest, use pheromone traps.",
            "biological_spray": "Bt (Bacillus thuringiensis) at 2 g/L.",
            "mechanical": "Destroy infested buds."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Spray targeting young larvae before they enter the bud."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curled leaves, honeydew, sooty mold, colonies inside bud bracts.",
        "favorable_weather": "Cool spring weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use reflective mulches, conserve ladybugs.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "Wash with strong water jet early in the day."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray ensuring coverage inside the canopy."
          }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Pest",
        "hindi_name": "स्लग और घोंघे",
        "symptoms": "Large ragged holes in leaves, slime trails, damaged tender buds.",
        "favorable_weather": "Wet, rainy conditions, active at night.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Eliminate hiding places, reduce soil surface moisture.",
            "biological_spray": "N/A",
            "mechanical": "Handpick at night, use beer traps, copper tape barriers."
          },
          "chemical_curative": {
            "active_ingredient": "Metaldehyde 5% Pellets",
            "commercial_reference": "Snailkill",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2 kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Broadcast pellets evenly on soil around the plants, avoiding contact with edible parts."
          }
        }
      },
      {
        "issue_name": "Crown Rot",
        "type": "Fungal",
        "hindi_name": "क्राउन रॉट",
        "symptoms": "Wilting plants, black/brown rotting at the soil line and roots.",
        "favorable_weather": "Waterlogged soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant on raised beds, ensure good drainage.",
            "biological_spray": "Trichoderma harzianum soil application.",
            "mechanical": "Remove and destroy affected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Soil drench around the base of the plant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "celery",
    "common_name": "Celery",
    "hindi_name": "अजमोद / सेलेरी",
    "regional_names": {
      "marathi": "सेलेरी",
      "punjabi": "ਅਜਮੋਦ",
      "tamil": "செலரி",
      "telugu": "సెలెరీ"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-45 Days (Nursery)",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds are slow to germinate. Require constant moisture and cool temperatures."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "45-55 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Water immediately after transplanting to avoid shock. Plant spacing is critical."
      },
      {
        "stage_name": "Rosette/Vegetative Growth",
        "day_range": "55-90 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Heavy feeder and heavy water user. Shallow roots need frequent, light irrigation."
      },
      {
        "stage_name": "Stalk Elongation",
        "day_range": "90-120 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth requires high N, K, and consistent moisture to prevent pithy (hollow) stalks."
      },
      {
        "stage_name": "Maturation (Blanching)",
        "day_range": "120-135 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Some varieties need blanching (excluding light) for tender stalks."
      },
      {
        "stage_name": "Harvest",
        "day_range": "135-150 Days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest when stalks reach desired size but before becoming woody or stringy."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 15 tons, N: 60 kg, P: 40 kg, K: 60 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green/yellow leaves, stunted growth, thin stalks.",
          "solution": "Apply Urea at 25 kg/acre in splits during growth."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted roots, dark green leaves with purplish margins.",
          "solution": "Apply DAP at 40 kg/acre as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves, poor stalk quality.",
          "solution": "Apply MOP at 30 kg/acre during stalk elongation."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Blackheart (browning and death of young inner leaves/heart).",
          "solution": "Foliar spray of Calcium Nitrate at 2 g/L (30g/pump) directly onto the heart."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Cracked stem (cross-cracks on stalks), brittle stalks, brown mottling.",
          "solution": "Foliar spray of Borax or Solubor at 1.5 g/L."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves, curling margins.",
          "solution": "Spray Magnesium Sulphate at 3 g/L."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Mottled yellowing between veins of young leaves.",
          "solution": "Foliar spray of Manganese Sulphate at 2 g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Early Blight (Cercospora)",
        "type": "Fungal",
        "hindi_name": "अगेती झुलसा",
        "symptoms": "Large, irregular yellowish-brown spots on leaves, spreading rapidly in warm, humid weather.",
        "favorable_weather": "Warm and highly humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Hot water seed treatment, crop rotation, wider spacing.",
            "biological_spray": "Pseudomonas fluorescens at 5 ml/L.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Foliar spray at first sign of disease."
          }
        }
      },
      {
        "issue_name": "Late Blight (Septoria)",
        "type": "Fungal",
        "hindi_name": "पछेती झुलसा",
        "symptoms": "Small, numerous brown spots with black dots (pycnidia) inside them on leaves and stalks.",
        "favorable_weather": "Cool, wet conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified seed, avoid working in fields when wet.",
            "biological_spray": "Bacillus subtilis at 5 ml/L.",
            "mechanical": "Destroy crop debris post-harvest."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Fusarium Yellows",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट",
        "symptoms": "Yellowing of leaves, vascular browning in stalks, severe stunting.",
        "favorable_weather": "Warm soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, long crop rotations.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Solarize soil in summer."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Soil drench around affected plants (mostly preventive)."
          }
        }
      },
      {
        "issue_name": "Leaf Miners",
        "type": "Insect-Pest",
        "hindi_name": "लीफ माइनर (सुरंग बनाने वाला कीट)",
        "symptoms": "White serpentine trails or mines on leaves, reducing photosynthetic area.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use yellow sticky traps.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "Crush larvae inside the mines early on."
          },
          "chemical_curative": {
            "active_ingredient": "Abamectin 1.9% EC",
            "commercial_reference": "Vertimec",
            "dose_per_15L_pump": "6 ml",
            "dose_per_acre": "80 ml in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Foliar spray upon noticing mines."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap from young leaves and heart, causing curling and vectoring mosaic viruses.",
        "favorable_weather": "Cool, dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps, intercropping with marigold.",
            "biological_spray": "Lecanicillium lecanii at 5 g/L.",
            "mechanical": "Strong water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "60 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray focusing on the heart and underside of leaves."
          }
        }
      },
      {
        "issue_name": "Celery Fly (Leaf Miner Fly)",
        "type": "Insect-Pest",
        "hindi_name": "सेलेरी फ्लाई",
        "symptoms": "Blister-like mines on leaves which turn brown and papery.",
        "favorable_weather": "Spring and autumn.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternative hosts (wild umbellifers).",
            "biological_spray": "Spinosad (organic formulations) at 2 ml/L.",
            "mechanical": "Remove blistered leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Spray when adult flies or early damage are seen."
          }
        }
      },
      {
        "issue_name": "Root Knot Nematodes",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Stunted, yellowing plants wilting in the sun. Roots have characteristic galls/knots.",
        "favorable_weather": "Sandy soils, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation, solarization.",
            "biological_spray": "Paecilomyces lilacinus at 2 kg/acre in soil.",
            "mechanical": "Destroy infected roots post-harvest."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2 kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil application before transplanting."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "आर्मीवर्म",
        "symptoms": "Large ragged holes in leaves and stalks, dark green frass on plants.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps for Spodoptera.",
            "biological_spray": "Bt (Bacillus thuringiensis) at 2 g/L.",
            "mechanical": "Handpick caterpillars at night."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "80 g in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Spray on foliage, hitting the worms directly."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rhubarb",
    "common_name": "Rhubarb",
    "hindi_name": "रूबर्ब",
    "regional_names": {
      "marathi": "रुबर्ब",
      "punjabi": "ਰੁਬਾਰਬ",
      "tamil": "ருபார்ப்",
      "telugu": "రుబార్బ్"
    },
    "category": "Vegetable",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      {
        "stage_name": "Crown Breaking/Sprouting",
        "day_range": "Early Spring",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Red buds break dormancy. Ensure soil has warmed up and is well-drained."
      },
      {
        "stage_name": "Leaf and Petiole Growth",
        "day_range": "Spring to Early Summer",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Period of rapid stalk (petiole) elongation. Needs ample moisture and Nitrogen."
      },
      {
        "stage_name": "Flowering (Bolting)",
        "day_range": "Late Spring/Summer",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Flower stalks emerge. Remove them immediately to preserve plant energy for edible stalks."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "Winter",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaves die back. Plant requires cold hours (chilling) to reset for the next year."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 15 tons, N: 40 kg, P: 30 kg, K: 50 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, thin and short stalks.",
          "solution": "Apply Urea at 20 kg/acre early in the season."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root and crown development, delayed spring sprouting.",
          "solution": "Apply SSP at 50 kg/acre as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stalks, marginal scorch on large leaves, poor disease resistance.",
          "solution": "Apply MOP at 25 kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn on unfolding leaves, crown breakdown.",
          "solution": "Apply Calcium Nitrate at 2 g/L as foliar spray."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal yellowing on older, large leaves.",
          "solution": "Apply Magnesium Sulphate at 3 g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Crown Rot",
        "type": "Fungal",
        "hindi_name": "क्राउन रॉट",
        "symptoms": "Wilting, collapsing leaves, base of the stalk and crown become soft, mushy, and brown.",
        "favorable_weather": "Heavy, poorly drained soil, warm and wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant in raised beds, ensure excellent drainage, divide crowns every 4-5 years.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Remove infected crowns completely."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Drench soil around the crown at first sign of wilt."
          }
        }
      },
      {
        "issue_name": "Ascochyta Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small, greenish-yellow spots turning brown with white centers on leaves.",
        "favorable_weather": "Cool, humid, and rainy conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean up dead leaves in autumn, increase plant spacing.",
            "biological_spray": "Bacillus subtilis at 5 ml/L.",
            "mechanical": "Remove severely spotted leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Foliar spray when spots appear."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "गेरुआ",
        "symptoms": "Orange to brown pustules on the underside of leaves.",
        "favorable_weather": "High humidity, dew.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead watering.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray if rust severely affects foliage."
          }
        }
      },
      {
        "issue_name": "Slugs and Snails",
        "type": "Pest",
        "hindi_name": "स्लग और घोंघे",
        "symptoms": "Large ragged holes in leaves and sometimes chewing on stalks; slime trails.",
        "favorable_weather": "Wet, rainy periods, active at night.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep area around plants weed-free, use copper barriers.",
            "biological_spray": "N/A",
            "mechanical": "Handpick, use beer traps."
          },
          "chemical_curative": {
            "active_ingredient": "Metaldehyde 5% Pellets",
            "commercial_reference": "Snailkill",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2 kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Broadcast pellets evenly on ground around plants."
          }
        }
      },
      {
        "issue_name": "Rhubarb Curculio",
        "type": "Insect-Pest",
        "hindi_name": "रूबर्ब वीविल",
        "symptoms": "Large snout beetles punching holes in stalks, causing sap leakage and stalk scarring.",
        "favorable_weather": "Spring and early summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove dock weeds (alternate hosts) nearby.",
            "biological_spray": "Neem oil as repellent.",
            "mechanical": "Handpick adults (they are large and easy to spot)."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "150 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray mainly on foliage if infestation is heavy, avoid spraying stalks nearing harvest."
          }
        }
      }
    ]
  },
  {
    "crop_id": "palm-hearts",
    "common_name": "Palm Hearts",
    "hindi_name": "पाम हार्ट्स",
    "regional_names": {
      "marathi": "पाम हार्ट्स",
      "punjabi": "ਪਾਮ ਹਾਰਟਸ",
      "tamil": "பாம் ஹார்ட்ஸ்",
      "telugu": "పామ్ హార్ట్స్"
    },
    "category": "Vegetable",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-6 Months",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires shade and constant humidity in nursery before field planting."
      },
      {
        "stage_name": "Vegetative Establishment",
        "day_range": "6-18 Months",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth of main stem. Provide balanced NPK for sturdy girth."
      },
      {
        "stage_name": "Clumping/Suckering",
        "day_range": "18-24 Months",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Offshoots develop (in clumping species like Peach Palm). Requires good nutrition."
      },
      {
        "stage_name": "Shoot Harvesting",
        "day_range": "24+ Months",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest inner core (apical meristem). In clumping types, suckers will regrow for future harvests."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N: 50 kg, P: 30 kg, K: 60 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Overall yellowing of all fronds, stunted growth, thin stems.",
          "solution": "Apply Urea at 25 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow establishment, reduced suckering, dark green older leaves.",
          "solution": "Apply SSP at 40 kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Orange/yellow spotting on older fronds, weak stems.",
          "solution": "Apply MOP at 30 kg/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Broad yellow bands along the margins of older leaves, green center.",
          "solution": "Apply Magnesium Sulphate at 25 kg/acre to soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "पाम वीविल",
        "symptoms": "Holes in the trunk, oozing sap, chewing sounds inside, wilting of central crown.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid mechanical injury to trunks, use pheromone traps.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Destroy heavily infested trees to prevent spread."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml (Stem Injection/Drench)",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "30",
            "application_instructions": "Drench the crown or inject into the trunk per local guidelines."
          }
        }
      },
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी घुन",
        "symptoms": "Yellowing/bronzing of fronds, fine webbing on the underside.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain humidity, overhead irrigation.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "High pressure water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Foliar spray ensuring coverage of undersides of fronds."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रॉट",
        "symptoms": "Yellowing and death of the newest emerging spear/frond, foul smell from rotting heart.",
        "favorable_weather": "Heavy rainfall, high humidity, wounded plants.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prevent wounds during harvest, ensure drainage.",
            "biological_spray": "Trichoderma viride in soil.",
            "mechanical": "Remove diseased parts and sanitize tools."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g in 200L water",
            "waiting_period_phi": "21",
            "application_instructions": "Drench the crown area directly."
          }
        }
      },
      {
        "issue_name": "Stem Bleeding",
        "type": "Fungal",
        "hindi_name": "स्टेम ब्लीडिंग",
        "symptoms": "Dark reddish-brown liquid oozing from cracks in the stem, turning black.",
        "favorable_weather": "Drought stress followed by heavy rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid stress, balanced fertilization.",
            "biological_spray": "Apply Trichoderma paste on wounds.",
            "mechanical": "Scrape off infected tissue and apply coal tar/Bordeaux paste."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "Make paste (10g/L)",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply as paste on the scraped wounded stem."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kohlrabi-stems",
    "common_name": "Kohlrabi",
    "hindi_name": "गांठ गोभी",
    "regional_names": {
      "marathi": "नवलकोल",
      "punjabi": "ਗੰਢ ਗੋਭੀ",
      "tamil": "நூல்கோல்",
      "telugu": "నూల్కోల్"
    },
    "category": "Vegetable",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-25 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Protect from extreme cold or heat. Maintain uniform moisture."
      },
      {
        "stage_name": "Transplanting/Early Vegetative",
        "day_range": "25-45 Days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure proper spacing so the swollen stem has room to expand."
      },
      {
        "stage_name": "Stem Swelling Initiation",
        "day_range": "45-60 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Needs high N and K, and consistent watering to prevent cracking."
      },
      {
        "stage_name": "Bulb Expansion",
        "day_range": "60-75 Days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth of the stem. Fluctuating water can cause tough, woody texture."
      },
      {
        "stage_name": "Harvest",
        "day_range": "75-85 Days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when 2-3 inches in diameter to avoid pithiness and tough fibers."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "FYM 10 tons, N: 40 kg, P: 25 kg, K: 30 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green/yellow leaves, stunted stem swelling.",
          "solution": "Apply Urea at 20 kg/acre during early vegetative phase."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purplish underside of leaves, delayed maturity.",
          "solution": "Apply DAP at 30 kg/acre as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal leaf scorch, poor quality and flavor of the swollen stem.",
          "solution": "Apply MOP at 20 kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn on young leaves, internal browning in the stem.",
          "solution": "Foliar spray of Calcium Nitrate at 2 g/L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Hollow stems, brown water-soaked areas inside the swollen stem, surface cracking.",
          "solution": "Apply Borax at 4 kg/acre to soil or foliar spray at 1 g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Diamondback Moth (DBM)",
        "type": "Insect-Pest",
        "hindi_name": "हीरा पीठ पतंगा (DBM)",
        "symptoms": "Small pale green caterpillars eating leaves from underside, leaving window-pane holes.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps (5/acre), mustard trap crop.",
            "biological_spray": "Bt (Bacillus thuringiensis) var. kurstaki at 2 g/L.",
            "mechanical": "Collect and destroy infested leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Spray focusing on the underside of leaves."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies of green/grey insects sucking sap, causing leaf curling and stunting.",
        "favorable_weather": "Cool, cloudy, and humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps, promote ladybugs.",
            "biological_spray": "Neem oil 1500 ppm at 50 ml/pump.",
            "mechanical": "Jet of water to wash them off."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "60 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Foliar spray for systemic control."
          }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Dark brown to black spots with concentric rings (target board pattern) on older leaves.",
        "favorable_weather": "High humidity, rainfall, and warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Hot water seed treatment, remove lower infected leaves.",
            "biological_spray": "Pseudomonas fluorescens at 5 g/L.",
            "mechanical": "Weed control to improve air flow."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray upon first appearance of spots."
          }
        }
      },
      {
        "issue_name": "Black Rot",
        "type": "Bacterial",
        "hindi_name": "काला सड़न (ब्लैक रॉट)",
        "symptoms": "V-shaped yellow lesions on leaf margins, veins turn black, systemic wilting.",
        "favorable_weather": "Warm and wet conditions, rain splash.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Certified disease-free seed, 3-year crop rotation.",
            "biological_spray": "Bacillus subtilis at 5 g/L.",
            "mechanical": "Remove and burn infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP + Streptomycin",
            "commercial_reference": "Blitox + Streptocycline",
            "dose_per_15L_pump": "40 g + 2 g",
            "dose_per_acre": "500 g + 25 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray thoroughly; copper acts as a protectant."
          }
        }
      },
      {
        "issue_name": "Cabbage Looper",
        "type": "Insect-Pest",
        "hindi_name": "पत्तागोभी की सूंडी",
        "symptoms": "Large ragged holes in leaves, caterpillars move in a looping motion.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Row covers, pheromone traps.",
            "biological_spray": "Bt (Bacillus thuringiensis) at 2 g/L.",
            "mechanical": "Handpick larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "80 g in 200L water",
            "waiting_period_phi": "7",
            "application_instructions": "Spray directly onto foliage."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग (फ्ली बीटल)",
        "symptoms": "Numerous tiny shot-holes in young leaves, stunted seedling growth.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Floating row covers, high seeding rate.",
            "biological_spray": "Neem oil 1500 ppm.",
            "mechanical": "White sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "60 ml in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray on seedlings if damage is severe."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी मिल्ड्यू",
        "symptoms": "Yellow patches on upper leaf surface, white/grey fluffy growth on underside.",
        "favorable_weather": "Cool, moist, and humid nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overhead watering, reduce plant density.",
            "biological_spray": "Trichoderma viride at 5 g/L.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Foliar spray ensuring coverage on the underside of leaves."
          }
        }
      }
    ]
  }
];
