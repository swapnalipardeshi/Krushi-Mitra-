export const data = [
  {
    "crop_id": "rice",
    "common_name": "Rice (Paddy)",
    "hindi_name": "धान",
    "regional_names": {
      "marathi": "Bhat",
      "punjabi": "Chawal",
      "tamil": "Nel",
      "telugu": "Vari",
      "bengali": "Dhan"
    },
    "category": "Cereal",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain slight moisture, avoid flooding." },
      { "stage_name": "Seedling", "day_range": "7-21", "water_requirement_sensitivity": "High", "stage_advice": "Maintain shallow water depth to suppress weeds." },
      { "stage_name": "Tillering", "day_range": "21-50", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield. Maintain 2-3 cm water. Top dress with Nitrogen." },
      { "stage_name": "Panicle Initiation", "day_range": "50-65", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate water; severe stress reduces spikelet number." },
      { "stage_name": "Booting", "day_range": "65-75", "water_requirement_sensitivity": "High", "stage_advice": "Swelling of flag leaf sheath. Essential to maintain water level." },
      { "stage_name": "Heading", "day_range": "75-85", "water_requirement_sensitivity": "High", "stage_advice": "Panicle emerges. Drought causes sterility." },
      { "stage_name": "Flowering (Anthesis)", "day_range": "85-95", "water_requirement_sensitivity": "High", "stage_advice": "Avoid spraying during peak flowering time (morning)." },
      { "stage_name": "Milky Stage", "day_range": "95-105", "water_requirement_sensitivity": "Medium", "stage_advice": "Grain filling begins. Drain excess water gradually." },
      { "stage_name": "Dough Stage", "day_range": "105-115", "water_requirement_sensitivity": "Low", "stage_advice": "Grains harden. Start draining fields completely." },
      { "stage_name": "Maturity", "day_range": "115-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when 80% panicles turn straw colored." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "Urea: 22kg, SSP: 75kg, MOP: 20kg, Zinc Sulphate: 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Old leaves turn yellow starting from the tip and midrib.", "solution": "Urea @ 22kg/acre broadcasted." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves with purple bases, reduced tillering.", "solution": "SSP @ 75kg/acre or DAP @ 50kg/acre." },
        { "nutrient": "Potassium", "symptoms": "Yellowing and necrosis of leaf margins on older leaves.", "solution": "MOP @ 20kg/acre broadcasted." },
        { "nutrient": "Zinc", "symptoms": "Khaira disease: Rusty brown spots on older leaves, stunted growth.", "solution": "Zinc Sulphate 21% @ 10kg/acre as basal or Foliar spray of Zinc Sulphate (33%) @ 2g/L + Urea @ 10g/L." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on new leaves, eventually turning entire leaf white.", "solution": "Foliar spray of Ferrous Sulphate @ 5g/L + Citric acid @ 1g/L." },
        { "nutrient": "Sulfur", "symptoms": "General yellowing of new leaves, similar to N deficiency but on young leaves.", "solution": "Apply Bentonite Sulphur @ 10kg/acre." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis with a distinct green midrib on older leaves.", "solution": "Foliar spray of Magnesium Sulphate @ 10g/L." },
        { "nutrient": "Manganese", "symptoms": "Interveinal chlorosis on young leaves, with dark brown spots developing later.", "solution": "Foliar spray of Manganese Sulphate @ 5g/L." },
        { "nutrient": "Boron", "symptoms": "White tip of emerging leaves, poor panicle emergence.", "solution": "Foliar spray of Borax (20%) @ 1.5g/L." },
        { "nutrient": "Copper", "symptoms": "Bluish-green leaves, chlorosis at tips, empty grains.", "solution": "Foliar spray of Copper Sulphate @ 2g/L." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart in vegetative stage, white earhead in reproductive stage.",
        "favorable_weather": "High humidity (80-90%) and temperature (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clip seedling tips before transplanting. Avoid excess N.",
            "biological_spray": "Release Trichogramma japonicum @ 40,000/acre.",
            "mechanical": "Use pheromone traps @ 8-10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Cartap Hydrochloride 4% GR",
            "commercial_reference": "Padan",
            "dose_per_15L_pump": "N/A (Granule)",
            "dose_per_acre": "7.5 kg/acre",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Broadcast uniformly in standing water (2-3 cm)."
          }
        }
      },
      {
        "issue_name": "Brown Plant Hopper (BPH)",
        "type": "Insect-Pest",
        "hindi_name": "भूरा फूदका",
        "symptoms": "Hopper burn (drying of plants in circular patches), sooty mold.",
        "favorable_weather": "High humidity, excessive rainfall, dense canopy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Alleyways (skip one row after every 10 rows). Alternate wetting and drying.",
            "biological_spray": "Beauveria bassiana 1x10^8 CFU/g @ 5g/L.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Pymetrozine 50% WG",
            "commercial_reference": "Chess",
            "dose_per_15L_pump": "12 g",
            "dose_per_acre": "120 g in 150L water",
            "waiting_period_phi": "19 Days",
            "application_instructions": "Direct spray towards the basal portion of the plant."
          }
        }
      },
      {
        "issue_name": "Leaf Folder",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Leaves folded longitudinally and fastened with silk; caterpillars feed inside, causing white streaks.",
        "favorable_weather": "High humidity, low sunlight, excess nitrogen.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess nitrogen, keep fields weed-free.",
            "biological_spray": "Release Trichogramma chilonis.",
            "mechanical": "Draw a rope across the field to dislodge larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6 ml",
            "dose_per_acre": "60 ml in 150L water",
            "waiting_period_phi": "47 Days",
            "application_instructions": "Foliar spray covering canopy thoroughly."
          }
        }
      },
      {
        "issue_name": "Blast (Leaf, Collar, Node, Neck)",
        "type": "Fungal",
        "hindi_name": "झोंका रोग",
        "symptoms": "Spindle-shaped lesions with ash-colored centers and dark margins on leaves. Neck rot causes panicle to fall over.",
        "favorable_weather": "Cloudy weather, intermittent rain, 25-28°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Grow resistant varieties, balanced fertilization.",
            "biological_spray": "Pseudomonas fluorescens @ 5g/L.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Tricyclazole 75% WP",
            "commercial_reference": "Baan",
            "dose_per_15L_pump": "12 g",
            "dose_per_acre": "120 g in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray at disease appearance."
          }
        }
      },
      {
        "issue_name": "Bacterial Leaf Blight (BLB)",
        "type": "Bacterial",
        "hindi_name": "जीवाणु पत्ती झुलसा",
        "symptoms": "Water-soaked streaks spreading from leaf tips, turning yellow/white. 'Kresek' phase in seedlings.",
        "favorable_weather": "Strong winds, continuous heavy rain, 28-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid clipping seedling tips if BLB is endemic. Drain field temporarily.",
            "biological_spray": "Cow dung extract spray (20%).",
            "mechanical": "Destruction of infected stubbles."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate 9% + Tetracycline 1% SP",
            "commercial_reference": "Plantomycin",
            "dose_per_15L_pump": "1.5 g (along with Copper Oxychloride 30g)",
            "dose_per_acre": "15 g (with COC 300g)",
            "waiting_period_phi": "25 Days",
            "application_instructions": "Spray immediately upon symptom appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wheat",
    "common_name": "Wheat",
    "hindi_name": "गेहूं",
    "regional_names": {
      "marathi": "Gahu",
      "punjabi": "Kanak",
      "tamil": "Godhumai",
      "telugu": "Godhumalu",
      "gujarati": "Ghau"
    },
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing/Germination", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure proper seedbed moisture." },
      { "stage_name": "Crown Root Initiation (CRI)", "day_range": "21-25", "water_requirement_sensitivity": "High", "stage_advice": "Most critical stage for irrigation. Delay severely reduces yield." },
      { "stage_name": "Tillering", "day_range": "35-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogenous fertilizers. Second irrigation." },
      { "stage_name": "Jointing", "day_range": "45-60", "water_requirement_sensitivity": "High", "stage_advice": "Rapid stem elongation. Need adequate moisture." },
      { "stage_name": "Booting", "day_range": "70-75", "water_requirement_sensitivity": "High", "stage_advice": "Head begins to swell within the sheath." },
      { "stage_name": "Heading", "day_range": "85-90", "water_requirement_sensitivity": "High", "stage_advice": "Head emergence. Moisture stress affects grain numbers." },
      { "stage_name": "Flowering", "day_range": "95-105", "water_requirement_sensitivity": "High", "stage_advice": "Pollination. Very sensitive to heat and drought." },
      { "stage_name": "Milky", "day_range": "105-115", "water_requirement_sensitivity": "Medium", "stage_advice": "Grain formation. Irrigation needed if dry." },
      { "stage_name": "Dough", "day_range": "115-125", "water_requirement_sensitivity": "Low", "stage_advice": "Grains harden. Avoid irrigation to prevent lodging." },
      { "stage_name": "Maturity", "day_range": "130-140", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest at 10-12% grain moisture." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "Urea: 25kg, DAP: 50kg, MOP: 20kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Overall yellowing, starting with older leaves. Stunted plants.", "solution": "Top dress Urea @ 25kg/acre at CRI and Tillering." },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth, dark green leaves with purple tint.", "solution": "Ensure adequate basal DAP. Foliar spray NPK 19:19:19 @ 10g/L." },
        { "nutrient": "Potassium", "symptoms": "Leaf tips and margins turn brown and die (necrosis).", "solution": "Foliar spray MOP @ 5g/L." },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis, stunted growth, bronze spots.", "solution": "Zinc Sulphate 33% @ 2g/L foliar spray." },
        { "nutrient": "Manganese", "symptoms": "Grey speck: Greyish/white spots in interveinal areas of new leaves.", "solution": "Manganese Sulphate @ 5g/L spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Yellow Rust (Stripe Rust)",
        "type": "Fungal",
        "hindi_name": "पीला रतुआ",
        "symptoms": "Yellow pustules arranged in linear stripes on leaves.",
        "favorable_weather": "Cool (10-20°C) and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties (e.g., HD 2967).",
            "biological_spray": "Trichoderma viride spray.",
            "mechanical": "Rogue out early infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray immediately upon spotting."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Wilting and drying of plants. Roots are eaten away.",
        "favorable_weather": "Dry soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use well-decomposed FYM, frequent light irrigations.",
            "biological_spray": "Metarhizium anisopliae soil application.",
            "mechanical": "Destroy termite mounds."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "N/A (Soil drench/seed treatment)",
            "dose_per_acre": "1.2 L mixed with 20kg sand broadcasted",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply with light irrigation."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू (चेपा)",
        "symptoms": "Sucking sap from leaves and earheads; honeydew secretion leads to sooty mold.",
        "favorable_weather": "Cloudy weather with 20-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Neem oil 1500ppm @ 5ml/L.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at ETL of 5 aphids per earhead."
          }
        }
      }
    ]
  },
  {
    "crop_id": "maize",
    "common_name": "Maize (Corn)",
    "hindi_name": "मक्का",
    "regional_names": {
      "marathi": "Maka",
      "punjabi": "Makki",
      "tamil": "Makka Cholam",
      "telugu": "Mokka Jonna"
    },
    "category": "Cereal",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "V3-V5 (Early Vegetative)", "day_range": "15-20", "water_requirement_sensitivity": "Low", "stage_advice": "Weed control is critical." },
      { "stage_name": "V6-V8 (Knee High)", "day_range": "30-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Top dress Nitrogen. Rapid growth starts." },
      { "stage_name": "VT (Tasseling)", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Pollen shed. Moisture stress causes barren ears." },
      { "stage_name": "R1 (Silking)", "day_range": "55-65", "water_requirement_sensitivity": "High", "stage_advice": "Silks emerge. Most critical stage for water." },
      { "stage_name": "R2 (Blister)", "day_range": "65-75", "water_requirement_sensitivity": "High", "stage_advice": "Kernels look like white blisters." },
      { "stage_name": "R3 (Milk)", "day_range": "75-85", "water_requirement_sensitivity": "Medium", "stage_advice": "Kernels filled with milky fluid." },
      { "stage_name": "R4 (Dough)", "day_range": "85-95", "water_requirement_sensitivity": "Medium", "stage_advice": "Fluid thickens." },
      { "stage_name": "R5 (Dent)", "day_range": "95-105", "water_requirement_sensitivity": "Low", "stage_advice": "Denting occurs. Moisture stress reduces kernel weight." },
      { "stage_name": "R6 (Physiological Maturity)", "day_range": "105-115", "water_requirement_sensitivity": "Low", "stage_advice": "Black layer forms." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.8-7.0",
      "basal_dose_per_acre": "Urea: 30kg, DAP: 50kg, MOP: 25kg, Zinc Sulphate: 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "V-shaped yellowing on older leaves starting from tip.", "solution": "Urea @ 25kg/acre at knee high and tasseling." },
        { "nutrient": "Phosphorus", "symptoms": "Purple or red margins on older leaves.", "solution": "Adequate basal application." },
        { "nutrient": "Zinc", "symptoms": "White bud: Broad bands of bleached tissue on each side of the midrib on new leaves.", "solution": "Foliar spray Zinc Sulphate 33% @ 2g/L." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fall Armyworm (FAW)",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म",
        "symptoms": "Ragged holes in leaves, abundant frass in whorls.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, clean cultivation.",
            "biological_spray": "Metarhizium rileyi or Bt @ 2g/L.",
            "mechanical": "Pheromone traps @ 15/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "7.5 ml",
            "dose_per_acre": "75 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Direct spray into the whorl."
          }
        }
      },
      {
        "issue_name": "Stem Borer (Chilo partellus)",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Shot holes on leaves, dead heart in central shoot.",
        "favorable_weather": "High temperature and moderate humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove dead hearts.",
            "biological_spray": "Release Trichogramma chilonis.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3% CG",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "13 kg/acre",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply in whorls at 20-30 DAS."
          }
        }
      }
    ]
  },
  {
    "crop_id": "barley",
    "common_name": "Barley",
    "hindi_name": "जौ",
    "regional_names": {
      "punjabi": "Jau",
      "marathi": "Javas",
      "bengali": "Jab"
    },
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "10-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Establishment phase." },
      { "stage_name": "Tillering", "day_range": "30-40", "water_requirement_sensitivity": "High", "stage_advice": "First irrigation and top dressing." },
      { "stage_name": "Jointing", "day_range": "45-60", "water_requirement_sensitivity": "High", "stage_advice": "Rapid vegetative growth." },
      { "stage_name": "Booting", "day_range": "65-75", "water_requirement_sensitivity": "High", "stage_advice": "Awns visible." },
      { "stage_name": "Heading/Flowering", "day_range": "80-95", "water_requirement_sensitivity": "High", "stage_advice": "Critical for grain set." },
      { "stage_name": "Grain Filling", "day_range": "100-115", "water_requirement_sensitivity": "Medium", "stage_advice": "Dough stage to maturity." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "Urea: 20kg, DAP: 40kg, MOP: 15kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale yellow leaves, poor tillering.", "solution": "Urea top dressing." },
        { "nutrient": "Zinc", "symptoms": "Stunted growth, pale green leaves.", "solution": "Zinc sulphate foliar spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Covered Smut",
        "type": "Fungal",
        "hindi_name": "कवर्ड स्मट",
        "symptoms": "Grain replaced by black smut masses.",
        "favorable_weather": "Cool, moist conditions at sowing.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified disease-free seeds.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Carboxin 37.5% + Thiram 37.5% DS",
            "commercial_reference": "Vitavax Power",
            "dose_per_15L_pump": "N/A (Seed treatment)",
            "dose_per_acre": "3g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dry seed treatment before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "oats",
    "common_name": "Oats",
    "hindi_name": "जई",
    "regional_names": {
      "punjabi": "Javi",
      "tamil": "Oats"
    },
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "15-20", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure moisture." },
      { "stage_name": "Tillering", "day_range": "35-45", "water_requirement_sensitivity": "High", "stage_advice": "Irrigation promotes tillers." },
      { "stage_name": "Jointing", "day_range": "50-65", "water_requirement_sensitivity": "High", "stage_advice": "Stem elongation." },
      { "stage_name": "Heading", "day_range": "75-90", "water_requirement_sensitivity": "High", "stage_advice": "Panicle emergence." },
      { "stage_name": "Dough", "day_range": "100-115", "water_requirement_sensitivity": "Low", "stage_advice": "Grain maturation." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Urea: 15kg, SSP: 50kg",
      "deficiencies": [
        { "nutrient": "Manganese", "symptoms": "Grey speck: pale green spots merging into brown streaks.", "solution": "Manganese Sulphate foliar spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Crown Rust",
        "type": "Fungal",
        "hindi_name": "क्राउन रस्ट",
        "symptoms": "Orange pustules on leaves.",
        "favorable_weather": "Humid, mild temperatures (15-22°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, resistant varieties.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rye",
    "common_name": "Rye",
    "hindi_name": "राई (अनाज)",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "15-20", "water_requirement_sensitivity": "Low", "stage_advice": "Hardy crop, minimal care." },
      { "stage_name": "Tillering", "day_range": "35-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Main growth." },
      { "stage_name": "Jointing", "day_range": "50-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Stem extension." },
      { "stage_name": "Flowering", "day_range": "70-80", "water_requirement_sensitivity": "High", "stage_advice": "Anthesis." },
      { "stage_name": "Maturity", "day_range": "100-110", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.0",
      "basal_dose_per_acre": "Urea: 10kg, DAP: 25kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of old leaves.", "solution": "Urea top dress." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Ergot",
        "type": "Fungal",
        "hindi_name": "अर्गट",
        "symptoms": "Dark purple/black sclerotia replace grains.",
        "favorable_weather": "Wet, cool weather during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing, clean seed.",
            "biological_spray": "None.",
            "mechanical": "Float seeds in 20% salt solution to remove sclerotia."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray before flowering."
          }
        }
      }
    ]
  },
  {
    "crop_id": "triticale",
    "common_name": "Triticale",
    "hindi_name": "ट्रिटिकेल",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "7-14", "water_requirement_sensitivity": "Low", "stage_advice": "Drought tolerant." },
      { "stage_name": "Tillering", "day_range": "30-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogen." },
      { "stage_name": "Jointing", "day_range": "50-65", "water_requirement_sensitivity": "Medium", "stage_advice": "Rapid growth." },
      { "stage_name": "Heading", "day_range": "75-85", "water_requirement_sensitivity": "High", "stage_advice": "Grain set." },
      { "stage_name": "Maturity", "day_range": "105-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "Urea: 15kg, DAP: 30kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Rust",
        "type": "Fungal",
        "hindi_name": "लीफ रस्ट",
        "symptoms": "Brown pustules on leaves.",
        "favorable_weather": "Humid and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sorghum",
    "common_name": "Sorghum (Jowar)",
    "hindi_name": "ज्वार",
    "regional_names": {
      "marathi": "Jwari",
      "kannada": "Jola",
      "telugu": "Jonnalu",
      "tamil": "Cholam"
    },
    "category": "Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "1-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Keep weed free." },
      { "stage_name": "Vegetative", "day_range": "16-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Rapid growth." },
      { "stage_name": "Flag Leaf", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Very sensitive to drought." },
      { "stage_name": "Booting", "day_range": "55-65", "water_requirement_sensitivity": "High", "stage_advice": "Head emergence." },
      { "stage_name": "Flowering", "day_range": "65-75", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield." },
      { "stage_name": "Grain Fill", "day_range": "75-95", "water_requirement_sensitivity": "Medium", "stage_advice": "Dough stage." },
      { "stage_name": "Maturity", "day_range": "95-110", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Urea: 20kg, DAP: 35kg, MOP: 15kg",
      "deficiencies": [
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on new leaves.", "solution": "Ferrous sulphate spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart in young seedlings (1-4 weeks).",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, higher seed rate.",
            "biological_spray": "Neem seed kernel extract (NSKE 5%).",
            "mechanical": "Fish meal traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 30% FS",
            "commercial_reference": "Cruiser",
            "dose_per_15L_pump": "N/A (Seed treatment)",
            "dose_per_acre": "10 ml/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pearl-millet",
    "common_name": "Pearl Millet (Bajra)",
    "hindi_name": "बाजरा",
    "regional_names": {
      "marathi": "Bajri",
      "telugu": "Sajjalu",
      "tamil": "Kambu",
      "kannada": "Sajje"
    },
    "category": "Cereal",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "1-15", "water_requirement_sensitivity": "Low", "stage_advice": "Thinning if densely populated." },
      { "stage_name": "Tillering", "day_range": "15-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Top dress N." },
      { "stage_name": "Booting", "day_range": "35-45", "water_requirement_sensitivity": "High", "stage_advice": "Panicle development." },
      { "stage_name": "Flowering", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Sensitive to stress." },
      { "stage_name": "Grain Fill", "day_range": "55-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Milky to dough." },
      { "stage_name": "Maturity", "day_range": "70-85", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "Urea: 15kg, DAP: 25kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea top dress." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew (Green Ear)",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी (हरा बाल रोग)",
        "symptoms": "Whitish fungal growth on under surface of leaves, earheads converted to leafy structures.",
        "favorable_weather": "High humidity, moderate temps (20-25°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, rogueing infected plants.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 35% WS",
            "commercial_reference": "Apron",
            "dose_per_15L_pump": "N/A (Seed treatment)",
            "dose_per_acre": "6 g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment is most effective."
          }
        }
      }
    ]
  },
  {
    "crop_id": "finger-millet",
    "common_name": "Finger Millet (Ragi)",
    "hindi_name": "रागी/मंडुआ",
    "regional_names": {
      "kannada": "Ragi",
      "tamil": "Kezhvaragu",
      "telugu": "Ragulu"
    },
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "1-20", "water_requirement_sensitivity": "Medium", "stage_advice": "Nursery management or direct sowing." },
      { "stage_name": "Tillering", "day_range": "25-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Top dress N." },
      { "stage_name": "Flowering", "day_range": "50-65", "water_requirement_sensitivity": "High", "stage_advice": "Critical for water." },
      { "stage_name": "Grain Fill", "day_range": "70-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Moisture required." },
      { "stage_name": "Maturity", "day_range": "95-115", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "Urea: 10kg, DAP: 20kg",
      "deficiencies": [
        { "nutrient": "Calcium", "symptoms": "Tip drying.", "solution": "Gypsum application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Blast",
        "type": "Fungal",
        "hindi_name": "ब्लास्ट",
        "symptoms": "Spindle shaped lesions on leaves, neck blast causes breaking of earheads.",
        "favorable_weather": "High humidity, rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, balanced N.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Tricyclazole 75% WP",
            "commercial_reference": "Baan",
            "dose_per_15L_pump": "12 g",
            "dose_per_acre": "120 g in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "foxtail-millet",
    "common_name": "Foxtail Millet (Kangni)",
    "hindi_name": "कंगनी",
    "regional_names": {
      "telugu": "Korralu",
      "tamil": "Thinai",
      "kannada": "Navane"
    },
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "15-30", "water_requirement_sensitivity": "Low", "stage_advice": "Drought hardy." },
      { "stage_name": "Panicle Initiation", "day_range": "35-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Irrigation if dry." },
      { "stage_name": "Flowering", "day_range": "50-60", "water_requirement_sensitivity": "High", "stage_advice": "Crucial stage." },
      { "stage_name": "Grain Filling", "day_range": "65-75", "water_requirement_sensitivity": "Medium", "stage_advice": "Dough stage." },
      { "stage_name": "Maturity", "day_range": "80-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 15kg, P: 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "20 ml",
            "dose_per_acre": "200 ml",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "proso-millet",
    "common_name": "Proso Millet (Chena)",
    "hindi_name": "चेना",
    "regional_names": {
      "tamil": "Panivaragu",
      "telugu": "Varigalu"
    },
    "category": "Cereal",
    "season": ["Zaid", "Kharif"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "15-25", "water_requirement_sensitivity": "Low", "stage_advice": "Fast growing." },
      { "stage_name": "Panicle Emergence", "day_range": "30-40", "water_requirement_sensitivity": "High", "stage_advice": "Short duration, requires moisture here." },
      { "stage_name": "Flowering", "day_range": "45-55", "water_requirement_sensitivity": "High", "stage_advice": "Crucial." },
      { "stage_name": "Grain Filling", "day_range": "60-65", "water_requirement_sensitivity": "Medium", "stage_advice": "Quick maturity." },
      { "stage_name": "Maturity", "day_range": "70-75", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "N: 15kg, P: 10kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Poor root development.", "solution": "Basal P." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Head Smut",
        "type": "Fungal",
        "hindi_name": "हेड स्मट",
        "symptoms": "Panicle destroyed by black spore mass.",
        "favorable_weather": "Soil borne.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carboxin + Thiram",
            "commercial_reference": "Vitavax Power",
            "dose_per_15L_pump": "Seed Trt",
            "dose_per_acre": "2g/kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment."
          }
        }
      }
    ]
  },
  {
    "crop_id": "barnyard-millet",
    "common_name": "Barnyard Millet (Sanwa)",
    "hindi_name": "सांवा",
    "regional_names": {
      "tamil": "Kuthiraivali",
      "telugu": "Udalu"
    },
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "15-30", "water_requirement_sensitivity": "Low", "stage_advice": "Waterlogging tolerant." },
      { "stage_name": "Panicle Initiation", "day_range": "35-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Growth." },
      { "stage_name": "Flowering", "day_range": "50-60", "water_requirement_sensitivity": "High", "stage_advice": "Anthesis." },
      { "stage_name": "Grain Filling", "day_range": "65-75", "water_requirement_sensitivity": "Medium", "stage_advice": "Milk stage." },
      { "stage_name": "Maturity", "day_range": "80-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 15kg, P: 10kg",
      "deficiencies": [
        { "nutrient": "Zinc", "symptoms": "Stunted growth.", "solution": "Zinc sulphate spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart.",
        "favorable_weather": "Dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem extract.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6 ml",
            "dose_per_acre": "60 ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kodo-millet",
    "common_name": "Kodo Millet (Kodon)",
    "hindi_name": "कोदो",
    "regional_names": {
      "tamil": "Varagu",
      "telugu": "Arikalu"
    },
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "20-40", "water_requirement_sensitivity": "Low", "stage_advice": "Highly drought resistant." },
      { "stage_name": "Booting", "day_range": "45-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Panicle forms." },
      { "stage_name": "Flowering", "day_range": "65-75", "water_requirement_sensitivity": "High", "stage_advice": "Pollen shed." },
      { "stage_name": "Grain Filling", "day_range": "80-100", "water_requirement_sensitivity": "Medium", "stage_advice": "Milky to dough." },
      { "stage_name": "Maturity", "day_range": "110-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 10kg, P: 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing.", "solution": "Urea top dress." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Brown pustules.",
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
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "little-millet",
    "common_name": "Little Millet (Kutki)",
    "hindi_name": "कुटकी",
    "regional_names": {
      "tamil": "Samai",
      "telugu": "Samalu"
    },
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Vegetative", "day_range": "15-30", "water_requirement_sensitivity": "Low", "stage_advice": "Quick growth." },
      { "stage_name": "Panicle Initiation", "day_range": "35-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Booting." },
      { "stage_name": "Flowering", "day_range": "50-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical." },
      { "stage_name": "Grain Filling", "day_range": "65-75", "water_requirement_sensitivity": "Medium", "stage_advice": "Dough." },
      { "stage_name": "Maturity", "day_range": "80-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 10kg, P: 10kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 10% EC",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  }
];
