export const data = [
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
  }
];
