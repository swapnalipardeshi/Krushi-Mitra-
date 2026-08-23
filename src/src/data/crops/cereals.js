/**
 * CEREALS — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: 25
 * Generated: 2026-08-22
 */

export const cereals = [
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
  },
{
    "crop_id": "teff",
    "common_name": "Teff",
    "hindi_name": "टेफ",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate moisture but avoid waterlogging, as seeds are very small and can rot."
      },
      {
        "stage_name": "Tillering",
        "day_range": "15-35",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply top dressing of nitrogen to promote robust tillering."
      },
      {
        "stage_name": "Heading and Flowering",
        "day_range": "35-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical period for moisture. Ensure soil is moist to prevent flower abortion."
      },
      {
        "stage_name": "Grain Filling to Maturity",
        "day_range": "55-80",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation. Allow soil to dry slightly to facilitate ripening."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth, reduced tillering.",
          "solution": "Apply Urea (15-20 kg/acre) as top dressing or spray 1% Urea solution (150g per 15L pump, 1.5kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green to purplish leaves, poor root development.",
          "solution": "Apply SSP (50 kg/acre) as basal or spray NPK 19:19:19 (75g per 15L pump, 750g/acre)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted growth in early stages.",
          "solution": "Spray Zinc Sulphate 21% at 30g per 15L pump (300g/acre)."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves with green veins.",
          "solution": "Spray Ferrous Sulphate at 30g per 15L pump (300g/acre) along with citric acid."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Teff Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange-red pustules on leaves and stems.",
        "favorable_weather": "High humidity, warm temperatures (20-25°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, ensure proper spacing.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray at first sign of pustules."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "शूट फ्लाई",
        "symptoms": "Dead heart symptom in young seedlings.",
        "favorable_weather": "Warm and moist conditions during early growth.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, increase seed rate slightly.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use fish meal traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray during seedling stage if damage exceeds 5%."
          }
        }
      },
      {
        "issue_name": "Head Smut",
        "type": "Fungal",
        "hindi_name": "स्मट",
        "symptoms": "Panicles replaced by black powdery spore masses.",
        "favorable_weather": "Moderate temperature, soilborne infection.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, solarization.",
            "biological_spray": "Trichoderma viride as seed treatment.",
            "mechanical": "Rogue out infected panicles before they open."
          },
          "chemical_curative": {
            "active_ingredient": "Carboxin 37.5% + Thiram 37.5% DS",
            "commercial_reference": "Vitavax Power",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment at 3g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "आर्मीवर्म",
        "symptoms": "Defoliation, caterpillars feeding on leaves and panicles.",
        "favorable_weather": "Dry spells followed by heavy rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep field free of weeds.",
            "biological_spray": "Bt (Bacillus thuringiensis) 30g per 15L pump.",
            "mechanical": "Handpick caterpillars if feasible."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "70 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray focusing on caterpillars in late evening."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewed leaves, often defoliating young plants completely.",
        "favorable_weather": "Dry and hot conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem oil 10000 ppm at 30 ml per 15L pump.",
            "mechanical": "Use sweep nets."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on the crop and borders."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fonio",
    "common_name": "Fonio",
    "hindi_name": "फोनियो",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moist soil for germination, very fine seeds need a smooth seedbed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant, but occasional moisture helps quick growth."
      },
      {
        "stage_name": "Heading",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid extreme drought during panicle emergence."
      },
      {
        "stage_name": "Maturity",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest as soon as seeds harden to avoid shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.0",
      "basal_dose_per_acre": "N: 10 kg, P: 10 kg, K: 5 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, stunted plants.",
          "solution": "Apply mild top dressing of Urea (10 kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, purplish tint on older leaves.",
          "solution": "Apply DAP as basal dose."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf margins, weak stems.",
          "solution": "Spray NPK 0:0:50 (75g per 15L pump)."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis on older leaves.",
          "solution": "Spray Magnesium Sulphate (40g per 15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Brown necrotic spots on leaves leading to drying.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, avoid excess nitrogen.",
            "biological_spray": "Trichoderma viride spray.",
            "mechanical": "Remove heavily infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly upon noticing initial symptoms."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart, bore holes in stems.",
        "favorable_weather": "Warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, intercropping.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray when dead hearts cross 5%."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, sooty mold on honeydew.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies like ladybird beetles.",
            "biological_spray": "Neem oil (1500 ppm) at 40 ml per 15L pump.",
            "mechanical": "Use yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting the underside of leaves."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Grains transformed into black powdery masses.",
        "favorable_weather": "Moderate temperature.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens seed treatment.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 2% DS",
            "commercial_reference": "Raxil",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1.5g/kg seed for treatment",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dry seed treatment before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wild-rice",
    "common_name": "Wild Rice",
    "hindi_name": "जंगली चावल",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Germination and Emergence",
        "day_range": "0-20",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds need to be submerged in water to germinate properly."
      },
      {
        "stage_name": "Floating Leaf Stage",
        "day_range": "20-40",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain water levels to support floating leaves without submerging them entirely."
      },
      {
        "stage_name": "Aerial Leaf and Tillering",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Plants emerge above water; optimal nutrition needed for tillering."
      },
      {
        "stage_name": "Heading and Maturity",
        "day_range": "70-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Gradual draining of water can be done as grains mature, watch for shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing leaves, poor tillering.",
          "solution": "Apply slow-release Nitrogen fertilizers due to aquatic environment."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green leaves.",
          "solution": "Incorporate SSP (40 kg/acre) into soil before flooding."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rusty brown spots on older leaves, stunted plants.",
          "solution": "Apply Zinc Sulphate 21% (10 kg/acre) as basal."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves, common in some alkaline conditions.",
          "solution": "Spray Ferrous Sulphate (30g per 15L pump) + Citric acid."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Brown Spot",
        "type": "Fungal",
        "hindi_name": "भूरा धब्बा",
        "symptoms": "Oval, brown spots on leaves and glumes.",
        "favorable_weather": "High humidity, poor soil nutrition.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure adequate nitrogen supply.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Use clean seeds."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray twice at 15-day intervals."
          }
        }
      },
      {
        "issue_name": "Rice Worm",
        "type": "Insect-Pest",
        "hindi_name": "राइस वर्म",
        "symptoms": "Larvae feed on developing grains causing empty husks.",
        "favorable_weather": "Warm, wet conditions during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Synchronized planting to avoid continuous hosts.",
            "biological_spray": "Bt spray at 30g per 15L pump.",
            "mechanical": "Use light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply strictly considering aquatic toxicity; avoid if water flows out to natural bodies."
          }
        }
      },
      {
        "issue_name": "Ergot",
        "type": "Fungal",
        "hindi_name": "अरगट",
        "symptoms": "Grains replaced by hard, black sclerotia.",
        "favorable_weather": "Cool, damp weather during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed, crop rotation.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "Floatation method to separate sclerotia from seeds."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Preventive spray during heading."
          }
        }
      },
      {
        "issue_name": "Midge",
        "type": "Insect-Pest",
        "hindi_name": "मिज",
        "symptoms": "Larvae feed inside florets, causing empty grains.",
        "favorable_weather": "High humidity, continuous cloud cover.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Lambda Cyhalothrin 5% EC",
            "commercial_reference": "Karate",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during evening hours at early flowering."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jobs-tears",
    "common_name": "Job's Tears",
    "hindi_name": "कोइक्स",
    "regional_names": {"bengali": "Gargargi"},
    "category": "Cereal",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires warm soil and moderate moisture for even emergence."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Vigorous growth stage; apply nitrogenous fertilizers and ensure good soil moisture."
      },
      {
        "stage_name": "Flowering and Grain Formation",
        "day_range": "60-100",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress here can significantly reduce grain size and yield."
      },
      {
        "stage_name": "Maturity",
        "day_range": "100-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Grains turn hard and greyish/white; stop irrigation to facilitate harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 30 kg, P: 20 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "General yellowing, reduced plant height and poor tillering.",
          "solution": "Top dress Urea 15 kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants with dark green or purplish leaves.",
          "solution": "Apply SSP as basal dose."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf tips and margins.",
          "solution": "Apply MOP (10 kg/acre) or spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Light yellow stripes along leaf midribs.",
          "solution": "Spray Zinc Sulphate (30g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Large, elongated brown lesions on leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overcrowding, ensure good air circulation.",
            "biological_spray": "Pseudomonas fluorescens 20ml per 15L pump.",
            "mechanical": "Remove basal infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Larvae bore into stems causing dead heart.",
        "favorable_weather": "High temperature, dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plough field deeply after harvest to expose pupae.",
            "biological_spray": "Beauveria bassiana 50g per 15L pump.",
            "mechanical": "Use pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Cartap Hydrochloride 4% GR",
            "commercial_reference": "Padan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "7.5 kg/acre broadcast",
            "waiting_period_phi": "25 Days",
            "application_instructions": "Broadcast granules in soil with slight moisture."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "स्मट",
        "symptoms": "Grains are replaced by black spore masses.",
        "favorable_weather": "Moderate temperatures and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use certified disease-free seeds.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "Rogue and burn infected heads."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply as preventive spray at heading."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewing damage on leaves.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management around field borders.",
            "biological_spray": "Neem seed kernel extract (NSKE) 5%.",
            "mechanical": "Physical removal if possible."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray when damage is noticeable."
          }
        }
      }
    ]
  },
  {
    "crop_id": "canary-grass",
    "common_name": "Canary Grass",
    "hindi_name": "कैनेरी घास",
    "regional_names": {},
    "category": "Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moist, fine seedbed. Sowing shallow is critical."
      },
      {
        "stage_name": "Tillering",
        "day_range": "20-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nitrogen application promotes higher number of tillers."
      },
      {
        "stage_name": "Heading/Flowering",
        "day_range": "45-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for yield. Avoid moisture stress."
      },
      {
        "stage_name": "Maturity",
        "day_range": "75-105",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Prone to shattering; harvest promptly when seeds turn golden-brown."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted plants, pale green to yellow leaves.",
          "solution": "Apply Urea (15 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, dark green leaves with purple tint.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of youngest leaves first.",
          "solution": "Use Ammonium Sulphate or apply Bentonite Sulphur (10 kg/acre)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange to reddish-brown pustules on leaves.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing, resistant varieties.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Avoid excess nitrogen."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clusters of small insects on leaves, yellowing, honeydew.",
        "favorable_weather": "Cool, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain natural predators.",
            "biological_spray": "Neem oil (1500 ppm) 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Yellowing of leaves, plant wilting, decayed roots.",
        "favorable_weather": "Waterlogged or poorly drained soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve soil drainage, crop rotation.",
            "biological_spray": "Trichoderma soil application.",
            "mechanical": "Rogue out wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water (Soil Drench)",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Drench near the root zone."
          }
        }
      }
    ]
  },
  {
    "crop_id": "buckwheat",
    "common_name": "Buckwheat",
    "hindi_name": "कुट्टू",
    "regional_names": {"marathi": "Kuttu", "gujarati": "Kuttu"},
    "category": "Pseudo-Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Avoid soil crusting. Requires good moisture for rapid emergence."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth phase, very sensitive to weed competition initially."
      },
      {
        "stage_name": "Flowering",
        "day_range": "30-55",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Prolonged flowering period. Extreme heat or drought can cause blossom drop."
      },
      {
        "stage_name": "Seed Set",
        "day_range": "55-75",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Adequate moisture needed for grain filling."
      },
      {
        "stage_name": "Maturity",
        "day_range": "75-90",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest when 75% of seeds have turned dark to prevent shattering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, stunted growth.",
          "solution": "Apply Urea (15 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, purplish tinge on stems.",
          "solution": "Apply SSP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf margins.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curling of young leaves, blossom drop.",
          "solution": "Apply agricultural lime if soil is too acidic."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set, brittle stems.",
          "solution": "Spray Boron 20% (15g/15L pump) at early flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted growth.",
          "solution": "Apply Zinc Sulphate 33% (5 kg/acre) to soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "भभूतिया रोग",
        "symptoms": "White powdery patches on leaves and stems.",
        "favorable_weather": "Dry days with cool, dewy nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Adequate plant spacing.",
            "biological_spray": "Ampelomyces quisqualis 50g per 15L pump.",
            "mechanical": "Remove severely infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray at initial appearance of white patches."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Plants wilt, brown discoloration at stem base, root decay.",
        "favorable_weather": "Heavy, poorly drained soils, excess rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve drainage, crop rotation.",
            "biological_spray": "Trichoderma viride drench.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Soil drenching around affected plants."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Clustered on new shoots and flowers, causing honeydew and sooty mold.",
        "favorable_weather": "Cool and cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen fertilizers.",
            "biological_spray": "Neem oil 10000 ppm at 30 ml/pump.",
            "mechanical": "Yellow sticky traps (10/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray uniformly over foliage."
          }
        }
      },
      {
        "issue_name": "Wireworms",
        "type": "Insect-Pest",
        "hindi_name": "वायरवर्म",
        "symptoms": "Larvae feed on seeds and roots, causing patchy emergence.",
        "favorable_weather": "Cool, moist soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plough field deeply during summer.",
            "biological_spray": "Metarhizium anisopliae soil application.",
            "mechanical": "Bait traps."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 0.3% GR",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg/acre broadcast",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply at the time of field preparation."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Circular brown lesions on leaves.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, avoid dense planting.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray upon spotting lesions."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot-holes in cotyledons and early true leaves.",
        "favorable_weather": "Warm, dry weather in early season.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Increase seeding rate slightly.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 10% EC",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if damage exceeds economic threshold."
          }
        }
      }
    ]
  },
  {
    "crop_id": "quinoa",
    "common_name": "Quinoa",
    "hindi_name": "क्विनोआ",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination and Emergence",
        "day_range": "0-10",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds need adequate moisture; avoid deep sowing."
      },
      {
        "stage_name": "Two-leaf to Branching",
        "day_range": "10-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires weed-free environment due to slow early growth."
      },
      {
        "stage_name": "Flowering (Anthesis)",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Highly sensitive to heat stress (>35C) which can cause pollen sterility."
      },
      {
        "stage_name": "Grain Filling",
        "day_range": "70-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Needs moderate moisture to maximize grain size."
      },
      {
        "stage_name": "Physiological Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Plants turn pale yellow/red. Harvest when grains are hard and dry."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.5",
      "basal_dose_per_acre": "N: 40 kg, P: 20 kg, K: 20 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow entire plants, poor branching.",
          "solution": "Apply Urea (20 kg/acre) split at 30 and 45 days."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, reddening of leaves.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, higher susceptibility to drought.",
          "solution": "Spray NPK 13:0:45 (75g/15L pump)."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed setting, empty panicles.",
          "solution": "Spray Boron 20% (15g/15L pump) before flowering."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, shortened internodes.",
          "solution": "Foliar spray of Zinc Sulphate (30g/15L pump)."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Spray Magnesium Sulphate (40g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellowish spots on upper leaf surface, greyish fuzz on lower surface.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid overhead irrigation.",
            "biological_spray": "Bacillus subtilis formulation.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly at onset of symptoms."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown to black circular lesions.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, clean cultivation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "150 ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems, wilting of top branches.",
        "favorable_weather": "Dry, warm spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy crop residues.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray thoroughly targeting stems."
          }
        }
      },
      {
        "issue_name": "Cutworms",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Seedlings cut at soil level during night.",
        "favorable_weather": "Cool nights, dry soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing to expose larvae.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Hand collection in early morning."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water (Soil Drench)",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Drench soil around plants."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, stunted growth, presence of ants.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Intercropping with strong-smelling herbs.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10 g",
            "dose_per_acre": "100 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting the undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Lygus Bugs",
        "type": "Insect-Pest",
        "hindi_name": "लाइगस बग",
        "symptoms": "Feeding on developing seeds causing shriveled grains.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control around field.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Sweep netting."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray during grain formation if bugs are abundant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "grain-amaranth",
    "common_name": "Grain Amaranth",
    "hindi_name": "राजगिरा",
    "regional_names": {"hindi": "Ramdana", "marathi": "Rajgira", "gujarati": "Rajgira", "tamil": "Keerai"},
    "category": "Pseudo-Cereal",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tiny seeds require very shallow planting and light, frequent watering."
      },
      {
        "stage_name": "Active Vegetative",
        "day_range": "20-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid elongation. Adequate nitrogen ensures sturdy stalks."
      },
      {
        "stage_name": "Inflorescence Emergence",
        "day_range": "45-65",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture stress here reduces head size and yield."
      },
      {
        "stage_name": "Grain Filling",
        "day_range": "65-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain soil moisture but avoid waterlogging to prevent lodging."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation. Harvest after first frost (in cold areas) or when grains harden."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 30 kg, P: 20 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green/yellow leaves, stunted inflorescence.",
          "solution": "Apply Urea (15 kg/acre) as top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Delayed flowering, dark or purple foliage (beyond natural coloration).",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, lodging.",
          "solution": "Apply MOP (10 kg/acre) or spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn on younger leaves.",
          "solution": "Spray Calcium Nitrate (30g/15L pump)."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Spray Ferrous Sulphate (30g/15L pump) + Citric acid."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set, brittle stems.",
          "solution": "Spray Boron 20% (15g/15L pump) at early flowering."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "डैम्पिंग ऑफ",
        "symptoms": "Seedlings rot at soil level and topple over.",
        "favorable_weather": "Cool, wet soils, overcrowding.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overwatering, treat seed with Trichoderma.",
            "biological_spray": "Trichoderma drench.",
            "mechanical": "Thinning to improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 35% WS",
            "commercial_reference": "Apron",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment 2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown, water-soaked lesions on leaves which dry up.",
        "favorable_weather": "High humidity, warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove lower infected leaves, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray at 10-15 day intervals."
          }
        }
      },
      {
        "issue_name": "Stem Weevil",
        "type": "Insect-Pest",
        "hindi_name": "तना घुन",
        "symptoms": "Grubs bore into stems causing swelling, splitting, and lodging.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, crop rotation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Uproot and burn infested plants."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply as basal stem spray in early stages."
          }
        }
      },
      {
        "issue_name": "Leaf Webbers",
        "type": "Insect-Pest",
        "hindi_name": "लीफ वेबर",
        "symptoms": "Leaves webbed together, caterpillars feeding inside.",
        "favorable_weather": "Warm, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Handpick and destroy webbed leaves.",
            "biological_spray": "Bt formulation at 30g/pump.",
            "mechanical": "Light traps for adults."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray with high volume to penetrate webs."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, sooty mold, stunting.",
        "favorable_weather": "Cool and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve natural enemies like ladybirds.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray targeting the colonies."
          }
        }
      },
      {
        "issue_name": "White Rust",
        "type": "Fungal",
        "hindi_name": "सफेद रस्ट",
        "symptoms": "White blister-like pustules on the underside of leaves.",
        "favorable_weather": "Cool nights, heavy dew, warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure good drainage, weed control.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Remove highly infected lower leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray covering undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small round holes in leaves, especially on seedlings.",
        "favorable_weather": "Dry, warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain adequate moisture to help seedlings outgrow damage.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage to seedlings is severe."
          }
        }
      }
    ]
  },
  {
    "crop_id": "chia",
    "common_name": "Chia Seed",
    "hindi_name": "चिया बीज",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires consistent light moisture; sensitive to waterlogging."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "10-50",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid growth, needs weeding early on."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Short-day plant; flowering triggered by day length. Avoid drought."
      },
      {
        "stage_name": "Seed Development and Maturity",
        "day_range": "80-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Dry conditions needed for uniform ripening and easy harvesting."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20 kg, P: 15 kg, K: 15 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, reduced branching.",
          "solution": "Apply mild dose of Urea (10 kg/acre) top dressing."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Delayed flowering, dark green leaves.",
          "solution": "Apply SSP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning of leaf edges.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, stunted plants.",
          "solution": "Apply Zinc Sulphate (5 kg/acre) to soil."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed setting, empty floral spikes.",
          "solution": "Spray Boron 20% (15g/15L pump) pre-flowering."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट",
        "symptoms": "Yellowing of leaves, vascular browning, plant wilting.",
        "favorable_weather": "Warm soils, high moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, improve soil drainage.",
            "biological_spray": "Trichoderma viride soil application.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "300 g in 150L water (Soil Drench)",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drench near the root zone."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing leaves, sooty mold from honeydew, vector for viruses.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Neem oil (10000 ppm) at 30 ml/pump.",
            "mechanical": "Yellow sticky traps (15/acre)."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "25 g",
            "dose_per_acre": "250 g in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray covering both leaf surfaces."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of young leaves, stunted growth.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve predators (lacewings, ladybirds).",
            "biological_spray": "Verticillium lecanii 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on seeing initial colonies."
          }
        }
      },
      {
        "issue_name": "Sclerotinia Stem Rot",
        "type": "Fungal",
        "hindi_name": "स्क्लेरोटीनिया स्टेम रोट",
        "symptoms": "White cottony growth on stems, black resting bodies (sclerotia) inside stems.",
        "favorable_weather": "Cool, prolonged wet periods, dense canopies.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider row spacing, deep ploughing.",
            "biological_spray": "Trichoderma harzianum.",
            "mechanical": "Rogue out infected plants carefully."
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "250 ml in 150L water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Spray directing to the lower stems."
          }
        }
      },
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी घुन",
        "symptoms": "Stippling on leaves, fine webbing on underside, drying of leaves.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep field adequately irrigated.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "300 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray focusing on undersides of leaves."
          }
        }
      }
    ]
  },
  {
    "crop_id": "canihua",
    "common_name": "Canihua",
    "hindi_name": "कैनिहुआ",
    "regional_names": {},
    "category": "Pseudo-Cereal",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Seeds are very small, shallow sowing and consistent moisture needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Frost tolerant in early stages, rapid branching."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical stage for yield; avoid extreme drought."
      },
      {
        "stage_name": "Maturity",
        "day_range": "70-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Shatter-prone; harvest when seeds change color to dark brown/black."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 15 kg, P: 10 kg, K: 10 kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves, stunted growth.",
          "solution": "Apply Urea (10 kg/acre)."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, purplish tint.",
          "solution": "Apply DAP as basal."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Browning leaf margins.",
          "solution": "Spray NPK 0:0:50 (75g/15L pump)."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, chlorosis.",
          "solution": "Spray Zinc Sulphate 21% (30g/15L pump)."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Yellow spots on top of leaves, grey fuzz underneath.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, avoid overhead watering.",
            "biological_spray": "Pseudomonas fluorescens 20ml/pump.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in young leaves.",
        "favorable_weather": "Dry, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Beauveria bassiana 50g/pump.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "50 ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage to seedlings is severe."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Yellowing leaves, honeydew.",
        "favorable_weather": "Cool, cloudy days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Natural predators.",
            "biological_spray": "Neem oil 1500 ppm at 40 ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "50 g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray uniformly."
          }
        }
      },
      {
        "issue_name": "Damping Off",
        "type": "Fungal",
        "hindi_name": "डैम्पिंग ऑफ",
        "symptoms": "Seedling collapse at soil line.",
        "favorable_weather": "Cold, wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good soil drainage.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Seed treatment 2g/kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds prior to sowing."
          }
        }
      }
    ]
  }
];
