export const data = [
  {
    "crop_id": "chickpea",
    "common_name": "Chickpea / Bengal Gram",
    "hindi_name": "चना",
    "regional_names": { "marathi": "हरभरा", "punjabi": "ਛੋਲੇ", "tamil": "கொண்டைக்கடலை", "telugu": "శెనగలు" },
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure adequate soil moisture for uniform emergence." },
      { "stage_name": "Seedling", "day_range": "11-25", "water_requirement_sensitivity": "Low", "stage_advice": "Monitor for early soil-borne diseases and pests." },
      { "stage_name": "Branching", "day_range": "26-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply first irrigation if soil is dry. Avoid waterlogging." },
      { "stage_name": "Pre-flowering", "day_range": "46-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical stage for moisture; slight stress can reduce flower drop but severe stress aborts buds." },
      { "stage_name": "Flowering", "day_range": "56-70", "water_requirement_sensitivity": "High", "stage_advice": "Do not irrigate during peak flowering to prevent excessive vegetative growth." },
      { "stage_name": "Pod Formation", "day_range": "71-85", "water_requirement_sensitivity": "High", "stage_advice": "Pod borer attack is common; regular scouting needed." },
      { "stage_name": "Pod Filling", "day_range": "86-105", "water_requirement_sensitivity": "High", "stage_advice": "Ensure moisture availability for proper grain filling." },
      { "stage_name": "Maturity", "day_range": "106-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when pods turn brown and moisture is around 15%." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "8 kg N, 20 kg P2O5, 8 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth", "solution": "Urea 2% foliar spray, 300g/15L pump, 2kg/acre" },
        { "nutrient": "Phosphorus", "symptoms": "Dark green leaves with purple reddish tips, poor root growth", "solution": "DAP or MAP foliar spray 2%, 300g/15L pump, 2kg/acre" },
        { "nutrient": "Potassium", "symptoms": "Scorching of leaf margins starting from older leaves", "solution": "Sulfate of Potash (0-0-50) 1.5%, 225g/15L pump, 1.5kg/acre" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of new leaves, reduced nodulation", "solution": "Sulphur 80% WDG, 40g/15L pump, 500g/acre" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis in new leaves, shortened internodes", "solution": "Zinc Sulphate 21% + Lime, 30g+15g/15L pump, 500g/acre" },
        { "nutrient": "Iron", "symptoms": "Severe interveinal chlorosis on youngest leaves, turning almost white", "solution": "Ferrous Sulphate 0.5%, 75g/15L pump, 1kg/acre" },
        { "nutrient": "Boron", "symptoms": "Death of growing points, poor pod filling", "solution": "Boron 20%, 15g/15L pump, 200g/acre" },
        { "nutrient": "Molybdenum", "symptoms": "Similar to N deficiency, poor nodulation", "solution": "Ammonium Molybdate 1g/15L pump, 10g/acre" },
        { "nutrient": "Calcium", "symptoms": "Curling of young leaves, blossom end rot equivalent in pods", "solution": "Calcium Nitrate, 75g/15L pump, 1kg/acre" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Gram Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Caterpillars feed on leaves and bore into pods, leaving half their body outside while feeding on developing seeds.",
        "favorable_weather": "Warm days and cool nights, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, early sowing, intercropping with coriander/mustard.",
            "biological_spray": "HaNPV @ 250 LE/ha or Bacillus thuringiensis @ 1kg/ha",
            "mechanical": "Install pheromone traps @ 5/acre, bird perches @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g in 150L water",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at 50% flowering and repeat at pod formation."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा रोग",
        "symptoms": "Drooping of upper leaves followed by wilting of whole plant. Roots show dark internal discoloration.",
        "favorable_weather": "High soil temperature (25-30°C) and low moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation for 3 years, avoid early sowing.",
            "biological_spray": "Trichoderma viride seed treatment 10g/kg seed + soil application 2.5kg/acre.",
            "mechanical": "Uproot and destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP (Seed treatment)",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing. Drench affected patches with Carbendazim @ 1g/L water."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "कटुआ सुंडी",
        "symptoms": "Seedlings cut at ground level during night. Larvae hide in soil near base during day.",
        "favorable_weather": "Cloddy soil, presence of undecomposed organic matter.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, clean cultivation, flood irrigation if severe.",
            "biological_spray": "Metarhizium anisopliae soil drenching.",
            "mechanical": "Hand pick caterpillars from soil around cut plants."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "40ml",
            "dose_per_acre": "500ml applied as soil drench",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray on soil surface near plant base during evening."
          }
        }
      },
      {
        "issue_name": "Ascochyta Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा रोग",
        "symptoms": "Circular spots with grey center and dark margin on leaves, stems, and pods. Small black dots (pycnidia) in center.",
        "favorable_weather": "Cool (15-25°C) and wet weather, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds, wider spacing.",
            "biological_spray": "Pseudomonas fluorescens spray.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP + Hexaconazole 5% SC",
            "commercial_reference": "Taqat",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray immediately upon noticing symptoms. Repeat after 10-15 days if needed."
          }
        }
      },
      {
        "issue_name": "Dry Root Rot",
        "type": "Fungal",
        "hindi_name": "सूखा जड़ गलन",
        "symptoms": "Sudden drying of plants at flowering to pod stage. Roots become dark, brittle and devoid of fine roots.",
        "favorable_weather": "High day temperature (>30°C) coupled with moisture stress.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain soil moisture during pod development.",
            "biological_spray": "Trichoderma harzianum soil application.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Tebuconazole 25.9% EC",
            "commercial_reference": "Folicur",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml (as drench)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench the soil around the base of the plant."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pigeon-pea",
    "common_name": "Pigeon Pea / Tur / Arhar",
    "hindi_name": "अरहर / तुअर",
    "regional_names": { "marathi": "तूर", "punjabi": "ਅਰਹਰ", "tamil": "துவரை", "telugu": "కందులు" },
    "category": "Pulse",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing to Emergence", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires good moisture; avoid waterlogging." },
      { "stage_name": "Seedling", "day_range": "11-30", "water_requirement_sensitivity": "Low", "stage_advice": "Weed control is critical." },
      { "stage_name": "Early Vegetative", "day_range": "31-60", "water_requirement_sensitivity": "Low", "stage_advice": "Deep root system develops; tolerate mild drought." },
      { "stage_name": "Branching", "day_range": "61-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure no weed competition." },
      { "stage_name": "Flower Initiation", "day_range": "91-110", "water_requirement_sensitivity": "High", "stage_advice": "Extremely sensitive to moisture stress and waterlogging." },
      { "stage_name": "Flowering & Pod Formation", "day_range": "111-130", "water_requirement_sensitivity": "High", "stage_advice": "Monitor for pod fly and pod borer." },
      { "stage_name": "Pod Development", "day_range": "131-150", "water_requirement_sensitivity": "High", "stage_advice": "Needs adequate moisture to fill seeds." },
      { "stage_name": "Maturity", "day_range": "151-180", "water_requirement_sensitivity": "Low", "stage_advice": "Leaves drop, pods turn dry." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5, 10 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves with purplish underside.", "solution": "DAP foliar spray 2%, 300g/15L pump" },
        { "nutrient": "Sulphur", "symptoms": "Uniform yellowing of young leaves.", "solution": "Bentonite Sulphur 90% soil application 10kg/acre or Sulphur 80% WDG foliar 40g/15L" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis, little leaf.", "solution": "Zinc Sulphate 33%, 30g/15L pump" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis in newest leaves.", "solution": "FeSO4 0.5%, 75g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Older leaves turn yellow.", "solution": "Urea 2% spray, 300g/15L pump" },
        { "nutrient": "Boron", "symptoms": "Flower drop, distorted young leaves.", "solution": "Borax 20%, 15g/15L pump" },
        { "nutrient": "Potassium", "symptoms": "Leaf margin scorch.", "solution": "KNO3 (13-0-45) 1%, 150g/15L pump" },
        { "nutrient": "Molybdenum", "symptoms": "Similar to N deficiency.", "solution": "Ammonium molybdate soil/seed application." },
        { "nutrient": "Manganese", "symptoms": "Interveinal chlorotic spots.", "solution": "MnSO4 0.2%, 30g/15L pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pod Fly",
        "type": "Insect-Pest",
        "hindi_name": "फली की मक्खी",
        "symptoms": "Maggots feed on seeds inside intact pods. Exit holes visible only when adults emerge.",
        "favorable_weather": "Cool and humid conditions during podding.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing to escape peak pest population.",
            "biological_spray": "Neem seed kernel extract (NSKE) 5%.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at pod initiation stage."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Partial or total wilting of plants at flowering/podding. Black streak on stem under bark.",
        "favorable_weather": "High soil moisture followed by dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, 3-4 year crop rotation with cereals.",
            "biological_spray": "Trichoderma viride seed treatment @ 10g/kg.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil drenching in affected patches."
          }
        }
      },
      {
        "issue_name": "Sterility Mosaic Disease",
        "type": "Viral",
        "hindi_name": "बांझपन मोज़ेक",
        "symptoms": "Light green and yellow mosaic on leaves, complete or partial sterility (no flowers/pods).",
        "favorable_weather": "Presence of eriophyid mite vector.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Grow resistant varieties. Rogue out infected plants early.",
            "biological_spray": "N/A",
            "mechanical": "Destruction of volunteer pigeon pea plants."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray to control the mite vector. Do not spray during peak flowering."
          }
        }
      },
      {
        "issue_name": "Maruca Pod Borer (Spotted Pod Borer)",
        "type": "Insect-Pest",
        "hindi_name": "धब्बेदार फली छेदक",
        "symptoms": "Webbing of flowers, buds, and pods. Larvae feed inside the webbed mass.",
        "favorable_weather": "High humidity, continuous rains during flowering.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid dense canopy.",
            "biological_spray": "Bt var kurstaki @ 1 kg/ha.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray targeting the flower buds and young pods."
          }
        }
      },
      {
        "issue_name": "Phytophthora Blight",
        "type": "Fungal",
        "hindi_name": "फाइटोफ्थोरा झुलसा",
        "symptoms": "Water soaked lesions on leaves and stem, stem girdling, sudden blighting of young plants.",
        "favorable_weather": "Continuous rains, high humidity, cloudy days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good field drainage, sowing on ridges.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "30 days",
            "application_instructions": "Foliar spray upon initial symptom appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "green-gram",
    "common_name": "Green Gram / Moong",
    "hindi_name": "मूंग",
    "regional_names": { "marathi": "मूग", "punjabi": "ਮੂੰਗੀ", "tamil": "பச்சைப்பயறு", "telugu": "పెసలు" },
    "category": "Pulse",
    "season": ["Kharif", "Zaid", "Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing", "day_range": "0-5", "water_requirement_sensitivity": "Medium", "stage_advice": "Seedbed needs good moisture." },
      { "stage_name": "Seedling", "day_range": "6-15", "water_requirement_sensitivity": "Low", "stage_advice": "Control sucking pests to prevent YMV." },
      { "stage_name": "Vegetative", "day_range": "16-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed management." },
      { "stage_name": "Pre-flowering", "day_range": "36-40", "water_requirement_sensitivity": "High", "stage_advice": "First critical stage for irrigation if dry." },
      { "stage_name": "Flowering", "day_range": "41-50", "water_requirement_sensitivity": "High", "stage_advice": "Do not spray harsh chemicals; avoid moisture stress." },
      { "stage_name": "Pod Formation", "day_range": "51-60", "water_requirement_sensitivity": "High", "stage_advice": "Second critical irrigation stage." },
      { "stage_name": "Maturity", "day_range": "61-75", "water_requirement_sensitivity": "Low", "stage_advice": "Avoid rains during harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5, 8 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves.", "solution": "Sulphur 80% WDG, 40g/15L pump" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves.", "solution": "DAP 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis in middle leaves.", "solution": "Zinc Sulphate 33% 20g/15L pump" },
        { "nutrient": "Iron", "symptoms": "Yellowing of new leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale green plants.", "solution": "Urea 2% spray" },
        { "nutrient": "Molybdenum", "symptoms": "Pale leaves, poor nodulation.", "solution": "Seed treatment with Ammonium molybdate @ 2g/kg seed" },
        { "nutrient": "Boron", "symptoms": "Flower drop.", "solution": "Boron 20%, 15g/15L" },
        { "nutrient": "Potassium", "symptoms": "Margin scorch.", "solution": "KNO3 1% spray" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "MgSO4 0.5% spray" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mungbean Yellow Mosaic Virus (MYMV)",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक वायरस",
        "symptoms": "Yellow irregular patches on leaves, whole leaves turn completely yellow later. Severely reduces yield.",
        "favorable_weather": "Dry weather favoring whitefly population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, yellow sticky traps @ 10/acre.",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L.",
            "mechanical": "Uproot and destroy virus-infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray to control whitefly vector at early stages."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Tiny white insects under leaves, suck sap, vector for YMV.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Verticillium lecanii @ 5g/L.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "25g",
            "dose_per_acre": "250g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on lower surface of leaves."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू / भभूतिया रोग",
        "symptoms": "White powdery patches on leaves, stems, and pods.",
        "favorable_weather": "Dry weather with cool nights and warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf Plus",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सरकोस्पोरा पत्ती धब्बा",
        "symptoms": "Brown circular spots with grey centers on leaves.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray when spots appear."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods, eaten seeds.",
        "favorable_weather": "Cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt 1kg/ha.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "20 days",
            "application_instructions": "Spray at flowering/pod initiation."
          }
        }
      }
    ]
  },
  {
    "crop_id": "black-gram",
    "common_name": "Black Gram / Urad",
    "hindi_name": "उड़द",
    "regional_names": { "marathi": "उडीद", "punjabi": "ਮਾਂਹ", "tamil": "உளுந்து", "telugu": "మినుములు" },
    "category": "Pulse",
    "season": ["Kharif", "Zaid", "Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-5", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure adequate moisture." },
      { "stage_name": "Seedling", "day_range": "6-15", "water_requirement_sensitivity": "Low", "stage_advice": "Keep weed-free." },
      { "stage_name": "Vegetative", "day_range": "16-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Interculture operations." },
      { "stage_name": "Pre-flowering", "day_range": "36-40", "water_requirement_sensitivity": "High", "stage_advice": "Irrigation if soil is dry." },
      { "stage_name": "Flowering", "day_range": "41-50", "water_requirement_sensitivity": "High", "stage_advice": "Crucial for pod set." },
      { "stage_name": "Pod Formation", "day_range": "51-60", "water_requirement_sensitivity": "High", "stage_advice": "Manage pod borers." },
      { "stage_name": "Maturity", "day_range": "61-75", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest at maturity to prevent shattering." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5, 8 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves.", "solution": "Sulphur 80% WDG, 40g/15L" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves.", "solution": "DAP 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 20g/15L" },
        { "nutrient": "Iron", "symptoms": "Yellowing of new leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale plants.", "solution": "Urea 2% spray" },
        { "nutrient": "Molybdenum", "symptoms": "Poor nodulation.", "solution": "Ammonium molybdate seed treatment" },
        { "nutrient": "Boron", "symptoms": "Flower drop.", "solution": "Boron 20%, 15g/15L" },
        { "nutrient": "Potassium", "symptoms": "Margin scorch.", "solution": "KNO3 1% spray" },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis older leaves.", "solution": "MgSO4 0.5% spray" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक",
        "symptoms": "Yellow patches on leaves, stunting.",
        "favorable_weather": "Hot, dry conditions favoring whiteflies.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Neem oil 1500ppm.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray for whitefly control."
          }
        }
      },
      {
        "issue_name": "Leaf Crinkle Virus",
        "type": "Viral",
        "hindi_name": "पत्ती सिकुड़न रोग",
        "symptoms": "Enlargement and crinkling of leaves, partial or complete sterility.",
        "favorable_weather": "Humid weather, transmitted by aphids/whiteflies and seeds.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use virus-free certified seed.",
            "biological_spray": "N/A",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Vector control spray."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालदार सुंडी (कातरा)",
        "symptoms": "Voracious feeding on leaves leaving only midribs.",
        "favorable_weather": "Post-monsoon dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching around fields.",
            "biological_spray": "N/A",
            "mechanical": "Hand collection of gregarious young larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "25 days",
            "application_instructions": "Spray on seeing larvae."
          }
        }
      },
      {
        "issue_name": "Macrophomina Blight",
        "type": "Fungal",
        "hindi_name": "मैक्रोफोमिना झुलसा",
        "symptoms": "Brown lesions on stems and leaves, wilting.",
        "favorable_weather": "High temperature and humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Maggots tunnel in the stem, causing withering and drying of young plants.",
        "favorable_weather": "Humid and warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 30% FS",
            "commercial_reference": "Cruiser",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "3ml/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment is most effective."
          }
        }
      }
    ]
  },
  {
    "crop_id": "lentil",
    "common_name": "Lentil / Masoor",
    "hindi_name": "मसूर",
    "regional_names": { "marathi": "मसूर", "punjabi": "ਮਸਰ", "tamil": "மைசூர் பருப்பு", "telugu": "మసూర్ పప్పు" },
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Adequate soil moisture required." },
      { "stage_name": "Vegetative", "day_range": "11-40", "water_requirement_sensitivity": "Low", "stage_advice": "Weed management is critical due to slow initial growth." },
      { "stage_name": "Pre-flowering", "day_range": "41-55", "water_requirement_sensitivity": "Medium", "stage_advice": "First irrigation if no winter rains." },
      { "stage_name": "Flowering", "day_range": "56-70", "water_requirement_sensitivity": "High", "stage_advice": "Moisture stress reduces flower retention." },
      { "stage_name": "Pod Formation", "day_range": "71-90", "water_requirement_sensitivity": "High", "stage_advice": "Second irrigation if dry." },
      { "stage_name": "Seed Filling", "day_range": "91-110", "water_requirement_sensitivity": "High", "stage_advice": "Avoid terminal drought." },
      { "stage_name": "Maturity", "day_range": "111-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest before pods shatter." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5, 8 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, delayed maturity.", "solution": "DAP 2% foliar spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of top leaves.", "solution": "Sulphur 80% WDG 40g/pump" },
        { "nutrient": "Zinc", "symptoms": "Small leaves, stunted growth.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale green leaves.", "solution": "Urea 2% spray" },
        { "nutrient": "Boron", "symptoms": "Poor pod setting.", "solution": "Boron 20% 15g/pump" },
        { "nutrient": "Potassium", "symptoms": "Leaf edge firing.", "solution": "KNO3 1% spray" },
        { "nutrient": "Molybdenum", "symptoms": "Nitrogen deficiency symptoms.", "solution": "Ammonium molybdate seed treatment" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "गेरुआ (रस्ट)",
        "symptoms": "Brown/orange pustules on leaves, stems and pods.",
        "favorable_weather": "Cool weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, avoid dense planting.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on disease appearance."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Drooping of plants, root discoloration.",
        "favorable_weather": "High soil temp and moisture stress.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, late sowing.",
            "biological_spray": "Trichoderma seed treatment.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2g/kg seed (Seed treatment)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat seeds before sowing."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies of tiny insects sucking sap from terminal shoots.",
        "favorable_weather": "Cloudy, cool and humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil 1500 ppm @ 50ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on foliage."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in developing pods.",
        "favorable_weather": "Warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "HaNPV.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at pod formation."
          }
        }
      },
      {
        "issue_name": "Ascochyta Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Lesions with dark margins on leaves and pods.",
        "favorable_weather": "Prolonged wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seeds.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray during cloudy weather."
          }
        }
      }
    ]
  },
  {
    "crop_id": "field-pea",
    "common_name": "Field Pea / Green Pea",
    "hindi_name": "मटर",
    "regional_names": { "marathi": "वाटाणा", "punjabi": "ਮਟਰ", "tamil": "பட்டாணி", "telugu": "బఠానీ" },
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires optimal moisture." },
      { "stage_name": "Vegetative", "day_range": "11-40", "water_requirement_sensitivity": "Low", "stage_advice": "Weeding is crucial." },
      { "stage_name": "Pre-flowering", "day_range": "41-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical for irrigation." },
      { "stage_name": "Flowering", "day_range": "56-70", "water_requirement_sensitivity": "High", "stage_advice": "Avoid water stress." },
      { "stage_name": "Pod Formation", "day_range": "71-90", "water_requirement_sensitivity": "High", "stage_advice": "Crucial stage for yield." },
      { "stage_name": "Seed Filling", "day_range": "91-110", "water_requirement_sensitivity": "High", "stage_advice": "Needs adequate moisture." },
      { "stage_name": "Maturity", "day_range": "111-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest at correct moisture." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5, 10 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, poor root development.", "solution": "DAP 2% foliar spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of younger leaves.", "solution": "Sulphur 80% WDG 40g/pump" },
        { "nutrient": "Zinc", "symptoms": "Small leaves, stunted growth.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Overall pale appearance.", "solution": "Urea 2% spray" },
        { "nutrient": "Boron", "symptoms": "Hollow heart in seeds.", "solution": "Boron 20% 15g/pump" },
        { "nutrient": "Manganese", "symptoms": "Marsh spot in seeds.", "solution": "MnSO4 0.5% spray" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery growth on leaves and pods.",
        "favorable_weather": "Dry days and cool nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Sulfur 80% WDG",
            "commercial_reference": "Sulfex",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "10 days",
            "application_instructions": "Spray at disease onset."
          }
        }
      },
      {
        "issue_name": "Pea Leaf Miner",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती सुरंगी कीट",
        "symptoms": "White serpentine mines on leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil 50ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Abamectin 1.9% EC",
            "commercial_reference": "Vertimec",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray when mines are noticed."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट (गेरुआ)",
        "symptoms": "Yellow to brown pustules on leaves.",
        "favorable_weather": "Warm days with heavy dew.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy debris.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Caterpillar bores into pod and eats developing seeds.",
        "favorable_weather": "Moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt 1kg/ha.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray at flowering/pod initiation."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Yellowing and wilting of lower leaves.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cowpea",
    "common_name": "Cowpea / Lobia",
    "hindi_name": "लोबिया",
    "regional_names": { "marathi": "चवळी", "punjabi": "ਰਵਾਂਹ", "tamil": "காராமணி", "telugu": "అలసందలు" },
    "category": "Pulse",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires moist seedbed." },
      { "stage_name": "Vegetative", "day_range": "8-35", "water_requirement_sensitivity": "Low", "stage_advice": "Tolerates moderate drought." },
      { "stage_name": "Flowering", "day_range": "36-50", "water_requirement_sensitivity": "High", "stage_advice": "Crucial stage for irrigation." },
      { "stage_name": "Pod Formation", "day_range": "51-65", "water_requirement_sensitivity": "High", "stage_advice": "Water stress affects pod length and seed size." },
      { "stage_name": "Seed Filling", "day_range": "66-80", "water_requirement_sensitivity": "High", "stage_advice": "Needs adequate moisture." },
      { "stage_name": "Maturity", "day_range": "81-100", "water_requirement_sensitivity": "Low", "stage_advice": "Dry conditions preferred." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5, 8 kg K2O, 8 kg S",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green leaves.", "solution": "DAP 2% foliar spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves.", "solution": "Sulphur 80% WDG 40g/pump" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Overall pale color.", "solution": "Urea 2% spray" },
        { "nutrient": "Boron", "symptoms": "Poor pod set.", "solution": "Boron 20% 15g/pump" },
        { "nutrient": "Potassium", "symptoms": "Leaf margin scorch.", "solution": "KNO3 1% spray" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Colonies on tender shoots, sooty mould.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil 50ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on foliage."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods, eaten seeds.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at pod formation."
          }
        }
      },
      {
        "issue_name": "Mosaic Virus",
        "type": "Viral",
        "hindi_name": "मोज़ेक वायरस",
        "symptoms": "Mottling and malformation of leaves.",
        "favorable_weather": "High aphid/whitefly populations.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, vector control.",
            "biological_spray": "N/A",
            "mechanical": "Rogue infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Vector control spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Yellowing and wilting, rotting of roots.",
        "favorable_weather": "Waterlogged soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज (श्यामवर्ण)",
        "symptoms": "Dark brown sunken lesions on stems, leaves and pods.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Disease-free seeds.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kidney-bean",
    "common_name": "Kidney Bean / Rajma",
    "hindi_name": "राजमा",
    "regional_names": { "marathi": "राजमा", "punjabi": "ਰਾਜਮਾਂਹ", "tamil": "ராஜ்மா", "telugu": "రాజ్మా" },
    "category": "Pulse",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires moist seedbed." },
      { "stage_name": "Vegetative", "day_range": "11-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Sensitive to waterlogging." },
      { "stage_name": "Pre-flowering", "day_range": "36-45", "water_requirement_sensitivity": "High", "stage_advice": "Irrigation needed." },
      { "stage_name": "Flowering", "day_range": "46-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield." },
      { "stage_name": "Pod Formation", "day_range": "61-80", "water_requirement_sensitivity": "High", "stage_advice": "Moisture stress causes flower/pod drop." },
      { "stage_name": "Maturity", "day_range": "81-100", "water_requirement_sensitivity": "Low", "stage_advice": "Avoid excess water." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "30 kg N, 24 kg P2O5, 12 kg K2O, 10 kg S",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Does not nodulate well; needs high N.", "solution": "Urea top dressing or 2% spray" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, dark green leaves.", "solution": "DAP 2% foliar spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of younger leaves.", "solution": "Sulphur 80% WDG 40g/pump" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Boron", "symptoms": "Poor pod set, distorted leaves.", "solution": "Boron 20% 15g/pump" },
        { "nutrient": "Potassium", "symptoms": "Leaf margin scorch.", "solution": "KNO3 1% spray" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bean Common Mosaic Virus",
        "type": "Viral",
        "hindi_name": "बीन मोज़ेक",
        "symptoms": "Mosaic pattern, leaf rolling, stunting.",
        "favorable_weather": "Aphid activity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Virus-free seeds.",
            "biological_spray": "Neem oil for aphids.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Vector control."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "श्यामवर्ण",
        "symptoms": "Sunken dark lesions on pods and stems.",
        "favorable_weather": "Cool and wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, disease-free seed.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on appearance."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking, honeydew, sooty mould.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil 50ml/pump.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on foliage."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods, damaged seeds.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray at pod formation."
          }
        }
      },
      {
        "issue_name": "Angular Leaf Spot",
        "type": "Fungal",
        "hindi_name": "कोणीय पत्ती धब्बा",
        "symptoms": "Angular brown spots restricted by veins.",
        "favorable_weather": "High humidity, moderate temps.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on symptom appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "soybean",
    "common_name": "Soybean",
    "hindi_name": "सोयाबीन",
    "regional_names": { "marathi": "सोयाबीन", "punjabi": "ਸੋਇਆਬੀਨ", "tamil": "சோயாபீன்ஸ்", "telugu": "సోయాబీన్" },
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Avoid waterlogging, needs moist well-drained soil." },
      { "stage_name": "Seedling", "day_range": "11-25", "water_requirement_sensitivity": "Low", "stage_advice": "Critical for weed control (first 30-45 days)." },
      { "stage_name": "Vegetative", "day_range": "26-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Can tolerate some dry spells." },
      { "stage_name": "Flowering Initiation", "day_range": "46-55", "water_requirement_sensitivity": "High", "stage_advice": "Moisture stress causes severe flower drop." },
      { "stage_name": "Full Bloom", "day_range": "56-65", "water_requirement_sensitivity": "High", "stage_advice": "Critical for irrigation if dry." },
      { "stage_name": "Pod Development", "day_range": "66-80", "water_requirement_sensitivity": "High", "stage_advice": "Needs adequate moisture for pod expansion." },
      { "stage_name": "Seed Filling", "day_range": "81-100", "water_requirement_sensitivity": "High", "stage_advice": "Crucial for seed weight and oil content." },
      { "stage_name": "Maturity", "day_range": "101-120", "water_requirement_sensitivity": "Low", "stage_advice": "Leaves drop, pods turn brown." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5, 10 kg K2O, 10 kg S",
      "deficiencies": [
        { "nutrient": "Sulphur", "symptoms": "Yellowing of whole plant, especially new leaves. Important for oil synthesis.", "solution": "Sulphur 80% WDG, 40g/15L pump" },
        { "nutrient": "Nitrogen", "symptoms": "Pale green color, poor nodulation.", "solution": "Urea 2% spray" },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, dark green leaves with delayed maturity.", "solution": "DAP 2% spray" },
        { "nutrient": "Potassium", "symptoms": "Yellowing and necrosis of leaf margins on older leaves.", "solution": "KNO3 1% spray" },
        { "nutrient": "Zinc", "symptoms": "Stunted growth, interveinal chlorosis.", "solution": "Zinc Sulphate 21%, 30g/15L pump" },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on youngest leaves, turning almost white.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Manganese", "symptoms": "Interveinal chlorosis with dark green veins.", "solution": "MnSO4 0.5% spray" },
        { "nutrient": "Boron", "symptoms": "Wrinkled leaves, poor pod setting.", "solution": "Boron 20%, 15g/15L pump" },
        { "nutrient": "Molybdenum", "symptoms": "Similar to N deficiency, affects nodulation.", "solution": "Ammonium molybdate seed treatment" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Tobacco Caterpillar (Spodoptera)",
        "type": "Insect-Pest",
        "hindi_name": "तम्बाकू की सुंडी",
        "symptoms": "Gregarious feeding on leaves, skeletonization of leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, collect and destroy egg masses.",
            "biological_spray": "SlNPV 250 LE/ha.",
            "mechanical": "Pheromone traps @ 5/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "20 days",
            "application_instructions": "Spray during early instar stages."
          }
        }
      },
      {
        "issue_name": "Girdle Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गर्डल बीटल / चक्र भृंग",
        "symptoms": "Two parallel rings (girdles) on stem/petiole. Upper part dries and drops.",
        "favorable_weather": "High humidity, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid early sowing, optimum plant population.",
            "biological_spray": "N/A",
            "mechanical": "Collect and destroy infested plant parts."
          },
          "chemical_curative": {
            "active_ingredient": "Thiacloprid 21.7% SC",
            "commercial_reference": "Alanto",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray at 20-25 days after sowing."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vector for Yellow Mosaic Virus, yellowing of leaves.",
        "favorable_weather": "Hot and dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem oil 1500ppm.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray targeting undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक",
        "symptoms": "Yellow patches on leaves, stunting, severe yield loss.",
        "favorable_weather": "Whitefly proliferation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties (e.g., JS 20-29).",
            "biological_spray": "N/A",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Control whitefly vector."
          }
        }
      },
      {
        "issue_name": "Rhizoctonia Aerial Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Water-soaked spots on leaves, turning brown. Webbing of fungal mycelium visible.",
        "favorable_weather": "High humidity, continuous rains, dense canopy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid excess N.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "faba-bean",
    "common_name": "Faba Bean / Broad Bean",
    "hindi_name": "बाकला",
    "regional_names": { "marathi": "बाकला", "punjabi": "ਬਾਕਲਾ", "tamil": "பாகலா", "telugu": "బాకల" },
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Moist soil." },
      { "stage_name": "Vegetative", "day_range": "11-40", "water_requirement_sensitivity": "Low", "stage_advice": "Tolerant to cold." },
      { "stage_name": "Flowering", "day_range": "41-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical for yield." },
      { "stage_name": "Podding", "day_range": "61-90", "water_requirement_sensitivity": "High", "stage_advice": "Irrigation needed if dry." },
      { "stage_name": "Maturity", "day_range": "91-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5, 10 kg K2O",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP 2% spray" },
        { "nutrient": "Potassium", "symptoms": "Leaf margin necrosis.", "solution": "KNO3 1% spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves.", "solution": "Sulphur 80% WDG 40g/pump" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Boron", "symptoms": "Poor pod set.", "solution": "Boron 20% 15g/pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Chocolate Spot",
        "type": "Fungal",
        "hindi_name": "चॉकलेट स्पॉट",
        "symptoms": "Chocolate brown spots on leaves and stems.",
        "favorable_weather": "Cool and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Black Bean Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Black insects covering stems and leaves.",
        "favorable_weather": "Cool weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pinch off infested tips.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on appearance."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange/brown pustules on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Ascochyta Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Grey spots with black margins.",
        "favorable_weather": "Wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Broad Bean Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in seeds.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field hygiene.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Deltamethrin 2.8% EC",
            "commercial_reference": "Decis",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray at flowering."
          }
        }
      }
    ]
  },
  {
    "crop_id": "moth-bean",
    "common_name": "Moth Bean / Matki",
    "hindi_name": "मोठ",
    "regional_names": { "marathi": "मटकी", "punjabi": "ਮੋਠ", "tamil": "பயறு", "telugu": "మట్కీ" },
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-5", "water_requirement_sensitivity": "Medium", "stage_advice": "Drought tolerant once established." },
      { "stage_name": "Vegetative", "day_range": "6-30", "water_requirement_sensitivity": "Low", "stage_advice": "Highly drought tolerant." },
      { "stage_name": "Flowering", "day_range": "31-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Needs some moisture for good yield." },
      { "stage_name": "Podding", "day_range": "46-60", "water_requirement_sensitivity": "Medium", "stage_advice": "Crucial for grain filling." },
      { "stage_name": "Maturity", "day_range": "61-75", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "4 kg N, 10 kg P2O5",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP 2% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing.", "solution": "Sulphur 80% WDG 40g/pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Sucks sap, vector for YMV.",
        "favorable_weather": "Dry and hot.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक",
        "symptoms": "Yellowing of leaves.",
        "favorable_weather": "Whitefly presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "Rogue plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector control)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Control vector."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "कातरा",
        "symptoms": "Defoliation.",
        "favorable_weather": "Dry spells post rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching.",
            "biological_spray": "N/A",
            "mechanical": "Hand pick."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Macrophomina Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Drying of plants.",
        "favorable_weather": "Hot.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "horse-gram",
    "common_name": "Horse Gram / Kulthi",
    "hindi_name": "कुल्थी",
    "regional_names": { "marathi": "हुळगा", "punjabi": "ਕੁਲਥੀ", "tamil": "கொள்ளு", "telugu": "ఉలవలు" },
    "category": "Pulse",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-5", "water_requirement_sensitivity": "Low", "stage_advice": "Drought tolerant." },
      { "stage_name": "Vegetative", "day_range": "6-35", "water_requirement_sensitivity": "Low", "stage_advice": "Hardy crop." },
      { "stage_name": "Flowering", "day_range": "36-50", "water_requirement_sensitivity": "Medium", "stage_advice": "Needs some moisture." },
      { "stage_name": "Podding", "day_range": "51-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Grain filling." },
      { "stage_name": "Maturity", "day_range": "71-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "4 kg N, 10 kg P2O5",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth.", "solution": "DAP 2% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale leaves.", "solution": "Urea 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing.", "solution": "Sulphur 80% WDG 40g/pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vector for YMV.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक",
        "symptoms": "Yellowing.",
        "favorable_weather": "Whitefly presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "Rogue plants."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (Vector)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Control vector."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Drying of plants.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2g/kg seed",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "20 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White patches.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Sulfur 80% WDG",
            "commercial_reference": "Sulfex",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "navy-bean",
    "common_name": "Navy Bean",
    "hindi_name": "नेवी बीन",
    "regional_names": { "marathi": "नेवी बीन", "punjabi": "ਨੇਵੀ ਬੀਨ", "tamil": "நேவி பீன்", "telugu": "నేవీ బీన్" },
    "category": "Pulse",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Moist seedbed." },
      { "stage_name": "Vegetative", "day_range": "11-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed free." },
      { "stage_name": "Flowering", "day_range": "31-45", "water_requirement_sensitivity": "High", "stage_advice": "Critical." },
      { "stage_name": "Podding", "day_range": "46-70", "water_requirement_sensitivity": "High", "stage_advice": "Grain filling." },
      { "stage_name": "Maturity", "day_range": "71-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "20 kg N, 24 kg P2O5, 12 kg K2O",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted.", "solution": "DAP 2% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale.", "solution": "Urea 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing.", "solution": "Sulphur 80% WDG 40g/pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "श्यामवर्ण",
        "symptoms": "Dark lesions.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "7ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Common Blight",
        "type": "Bacterial",
        "hindi_name": "ब्लाइट",
        "symptoms": "Water soaked spots.",
        "favorable_weather": "Warm and wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Blitox + Streptocycline",
            "dose_per_15L_pump": "30g + 1g",
            "dose_per_acre": "300g + 10g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "8g",
            "dose_per_acre": "80g",
            "waiting_period_phi": "14 days",
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
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "pinto-bean",
    "common_name": "Pinto Bean",
    "hindi_name": "पिंटो बीन",
    "regional_names": { "marathi": "पिंटो बीन", "punjabi": "ਪਿੰਟੋ ਬੀਨ", "tamil": "பின்டோ பீன்", "telugu": "పింటో బీన్" },
    "category": "Pulse",
    "season": ["Rabi", "Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Moist seedbed." },
      { "stage_name": "Vegetative", "day_range": "11-30", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed free." },
      { "stage_name": "Flowering", "day_range": "31-45", "water_requirement_sensitivity": "High", "stage_advice": "Critical." },
      { "stage_name": "Podding", "day_range": "46-70", "water_requirement_sensitivity": "High", "stage_advice": "Grain filling." },
      { "stage_name": "Maturity", "day_range": "71-90", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "20 kg N, 24 kg P2O5, 12 kg K2O",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted.", "solution": "DAP 2% spray" },
        { "nutrient": "Nitrogen", "symptoms": "Pale.", "solution": "Urea 2% spray" },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis.", "solution": "Zinc Sulphate 33% 20g/pump" },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves.", "solution": "FeSO4 0.5% spray" },
        { "nutrient": "Sulphur", "symptoms": "Yellowing.", "solution": "Sulphur 80% WDG 40g/pump" }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "श्यामवर्ण",
        "symptoms": "Dark lesions.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Common Blight",
        "type": "Bacterial",
        "hindi_name": "ब्लाइट",
        "symptoms": "Water soaked spots.",
        "favorable_weather": "Warm and wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Blitox + Streptocycline",
            "dose_per_15L_pump": "30g + 1g",
            "dose_per_acre": "300g + 10g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Bt.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 days",
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
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "N/A",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  }
];
