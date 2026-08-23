export const data = [
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
  }
];
