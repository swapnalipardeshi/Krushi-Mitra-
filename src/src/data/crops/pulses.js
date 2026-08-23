/**
 * PULSES — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: 27
 * Generated: 2026-08-22
 */

export const pulses = [
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
  },
{
    "crop_id": "black-turtle-bean",
    "common_name": "Black Turtle Bean",
    "hindi_name": "काला कछुआ बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate soil moisture without waterlogging." },
      { "stage_name": "Vegetative", "day_range": "15-35", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain weed-free environment and proper spacing." },
      { "stage_name": "Flowering", "day_range": "40-55", "water_requirement_sensitivity": "High", "stage_advice": "Critical period for moisture; avoid stress to prevent flower drop." },
      { "stage_name": "Pod Formation", "day_range": "60-75", "water_requirement_sensitivity": "High", "stage_advice": "Ensure nutrient availability for proper pod development." },
      { "stage_name": "Maturity", "day_range": "80-100", "water_requirement_sensitivity": "Low", "stage_advice": "Reduce watering to facilitate pod drying and harvesting." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 15-20 kg, P2O5: 40-50 kg, K2O: 20-30 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth.", "solution": "Urea 1 kg per acre spray or 19:19:19 NPK 75g per 15L pump." },
        { "nutrient": "Phosphorus", "symptoms": "Dark green leaves with purple purplish undersides.", "solution": "Foliar spray of 12:61:00 NPK 75g per 15L pump." },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis on new leaves, shortened internodes.", "solution": "Zinc Sulphate (21%) 30g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Yellowing between veins of youngest leaves, veins remain green.", "solution": "Chelated Iron (EDTA) 15-20g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bean Aphid",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Curling of young leaves, stunting, honeydew secretion leading to sooty mold.",
        "favorable_weather": "Cool and humid conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excessive nitrogen.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L pump.", "mechanical": "Yellow sticky traps 15-20 per acre." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor, Tata Mida", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray evenly ensuring coverage of leaf undersides." }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफ़ेद मक्खी",
        "symptoms": "Yellowing leaves, transmission of yellow mosaic viruses, presence of tiny white flies on undersides.",
        "favorable_weather": "Warm and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Field sanitation.", "biological_spray": "Verticillium lecanii 50g per 15L pump.", "mechanical": "Yellow sticky traps 20 per acre." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5 g", "dose_per_acre": "40 g", "waiting_period_phi": "21 days", "application_instructions": "Foliar application at first sight of pests." }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Holes in pods, larvae feeding inside on seeds, significant yield loss.",
        "favorable_weather": "Moderate temperature during pod stage",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Bird perches 10-15 per acre.", "biological_spray": "Bt (Bacillus thuringiensis) 30g per 15L pump.", "mechanical": "Pheromone traps 5-6 per acre." },
          "chemical_curative": { "active_ingredient": "Chlorantraniliprole 18.5% SC", "commercial_reference": "Coragen", "dose_per_15L_pump": "5-6 ml", "dose_per_acre": "50-60 ml", "waiting_period_phi": "20 days", "application_instructions": "Apply during flowering to early pod formation." }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark brown sunken lesions with reddish-brown margins on stems, leaves, and pods.",
        "favorable_weather": "Cool, wet, and highly humid weather",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use disease-free seeds, crop rotation.", "biological_spray": "Trichoderma viride 50g per 15L pump.", "mechanical": "Remove infected plant debris." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "15 days", "application_instructions": "Spray at onset of symptoms and repeat after 10-14 days." }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट / गेरुआ",
        "symptoms": "Reddish-brown pustules predominantly on the lower surface of leaves.",
        "favorable_weather": "Humid conditions with moderate temperatures",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Wider spacing to improve air flow.", "biological_spray": "Pseudomonas fluorescens 50g per 15L pump.", "mechanical": "Collect and destroy severely infected leaves." },
          "chemical_curative": { "active_ingredient": "Hexaconazole 5% SC", "commercial_reference": "Contaf", "dose_per_15L_pump": "20-25 ml", "dose_per_acre": "200-250 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray upon noticing initial pustules." }
        }
      }
    ]
  },
  {
    "crop_id": "lima-bean",
    "common_name": "Lima Bean",
    "hindi_name": "लीमा बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Sowing & Emergence", "day_range": "0-10", "water_requirement_sensitivity": "Medium", "stage_advice": "Sow in warm soils; cold wet soils cause rot." },
      { "stage_name": "Vegetative Growth", "day_range": "15-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Provide structural support if using vining types." },
      { "stage_name": "Flowering", "day_range": "45-60", "water_requirement_sensitivity": "High", "stage_advice": "Critical water stage; high temperatures can cause blossom drop." },
      { "stage_name": "Pod Set & Fill", "day_range": "65-85", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture for optimal seed filling." },
      { "stage_name": "Harvest", "day_range": "90-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when pods are plump for fresh use, or dry for storage." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.8",
      "basal_dose_per_acre": "N: 15-20 kg, P2O5: 40-60 kg, K2O: 30-40 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Overall pale green color, slower growth rate.", "solution": "Foliar application of Urea 1 kg/acre or 19:19:19 75g per 15L pump." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, delayed maturity, dark green leaves.", "solution": "Spray 12:61:00 NPK at 75g per 15L pump." },
        { "nutrient": "Potassium", "symptoms": "Marginal chlorosis and necrosis (burning) of older leaves.", "solution": "Sulphate of Potash (0:0:50) spray at 75g per 15L pump." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis in older leaves, margins may turn red/purple.", "solution": "Magnesium Sulphate 75g per 15L pump." },
        { "nutrient": "Manganese", "symptoms": "Interveinal chlorosis on young leaves, with distinct green veins.", "solution": "Manganese Sulphate 30g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Spider Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी घुन",
        "symptoms": "Stippling or fine speckling on leaves, fine webbing under leaves, premature leaf drop.",
        "favorable_weather": "Hot and very dry weather",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain adequate irrigation to reduce plant stress.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L pump.", "mechanical": "Overhead sprinkling to wash off mites." },
          "chemical_curative": { "active_ingredient": "Spiromesifen 22.9% SC", "commercial_reference": "Oberon", "dose_per_15L_pump": "15 ml", "dose_per_acre": "150 ml", "waiting_period_phi": "14 days", "application_instructions": "Ensure complete coverage of lower leaf surfaces." }
        }
      },
      {
        "issue_name": "Leafhoppers",
        "type": "Insect-Pest",
        "hindi_name": "फुदका",
        "symptoms": "Hopperburn: yellowing, browning, and curling of leaf edges.",
        "favorable_weather": "Warm and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Clear weed hosts.", "biological_spray": "Beauveria bassiana 50g per 15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride, Manik", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "14 days", "application_instructions": "Apply when pest population reaches economic threshold." }
        }
      },
      {
        "issue_name": "Root-Knot Nematodes",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls or knots on roots, stunted plants, midday wilting despite adequate moisture.",
        "favorable_weather": "Sandy soils and warm temperatures",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation with non-hosts like corn.", "biological_spray": "Paecilomyces lilacinus soil application.", "mechanical": "Solarization of soil." },
          "chemical_curative": { "active_ingredient": "Fluensulfone 2% GR", "commercial_reference": "Nimitz", "dose_per_15L_pump": "N/A", "dose_per_acre": "1-1.5 kg", "waiting_period_phi": "60 days", "application_instructions": "Apply to soil near root zone during early stages." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "White cottony fungal growth on pods and lower leaf surfaces, irregular yellow patches on upper leaves.",
        "favorable_weather": "Cool, humid, and wet conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Improve spacing for air circulation.", "biological_spray": "Bacillus subtilis 50g per 15L pump.", "mechanical": "Destroy infected crop debris." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold, Krilaxyl", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Foliar spray thoroughly covering all plant parts." }
        }
      },
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Water-soaked spots on leaves that turn brown with yellow halos, similar spots on pods.",
        "favorable_weather": "Warm, wet conditions; driving rain",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use certified disease-free seeds; do not work in wet fields.", "biological_spray": "Pseudomonas fluorescens 50g per 15L pump.", "mechanical": "Rogue out infected plants early." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride 50% WP + Streptomycin Sulphate 9% + Tetracycline 1%", "commercial_reference": "Blitox + Plantomycin", "dose_per_15L_pump": "40g COC + 2g Antibiotic", "dose_per_acre": "400g COC + 20g Antibiotic", "waiting_period_phi": "14 days", "application_instructions": "Spray immediately upon first symptom appearance." }
        }
      }
    ]
  },
  {
    "crop_id": "adzuki-bean",
    "common_name": "Adzuki Bean",
    "hindi_name": "अज़ुकी बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires well-drained soil; very sensitive to waterlogging." },
      { "stage_name": "Vegetative", "day_range": "20-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Weed management is critical due to slow initial growth." },
      { "stage_name": "Flowering", "day_range": "50-70", "water_requirement_sensitivity": "High", "stage_advice": "Needs consistent moisture; heat stress can abort flowers." },
      { "stage_name": "Pod Filling", "day_range": "75-90", "water_requirement_sensitivity": "High", "stage_advice": "Maintain soil moisture for seed size." },
      { "stage_name": "Maturation", "day_range": "95-120", "water_requirement_sensitivity": "Low", "stage_advice": "Dry conditions needed for optimal pod maturation." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 10-15 kg, P2O5: 30-40 kg, K2O: 20-30 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow leaves, especially older ones, stunted growth.", "solution": "Foliar spray of 19:19:19 75g per 15L pump." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, delayed maturity.", "solution": "Foliar application of 12:61:00 NPK at 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Browning of leaf margins.", "solution": "Sulphate of Potash spray at 75g per 15L." },
        { "nutrient": "Zinc", "symptoms": "Chlorosis between veins of newer leaves.", "solution": "Zinc Sulphate (21%) 30g per 15L pump." },
        { "nutrient": "Molybdenum", "symptoms": "Poor nodulation, nitrogen deficiency symptoms despite fertilizer.", "solution": "Ammonium Molybdate 1g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bean Fly / Stem Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Yellowing of leaves, drooping of tender leaves, death of seedlings, maggots tunneling in stem.",
        "favorable_weather": "Early season warmth",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Early sowing, increase seed rate.", "biological_spray": "Neem seed kernel extract (NSKE 5%) 50ml per 15L pump.", "mechanical": "Uproot and destroy infested seedlings." },
          "chemical_curative": { "active_ingredient": "Dimethoate 30% EC", "commercial_reference": "Rogor, Tara 909", "dose_per_15L_pump": "25-30 ml", "dose_per_acre": "250-300 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray during seedling stage if damage is seen." }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स / चुरडा-मुरडा",
        "symptoms": "Silvery patches on leaves, upward curling, flower drop.",
        "favorable_weather": "Dry and hot conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain field hygiene.", "biological_spray": "Lecanicillium lecanii 50g per 15L.", "mechanical": "Blue sticky traps 15-20 per acre." },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer, Conserve", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50-60 ml", "waiting_period_phi": "14 days", "application_instructions": "Target applications during early flowering stage." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सर्कोस्पोरा लीफ स्पॉट",
        "symptoms": "Circular to angular brown spots on leaves with gray centers and reddish margins.",
        "favorable_weather": "High humidity and moderate temperatures",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation, wider spacing.", "biological_spray": "Trichoderma harzianum 50g per 15L pump.", "mechanical": "Remove lower infected leaves." },
          "chemical_curative": { "active_ingredient": "Propiconazole 25% EC", "commercial_reference": "Tilt", "dose_per_15L_pump": "15 ml", "dose_per_acre": "150 ml", "waiting_period_phi": "21 days", "application_instructions": "Apply immediately upon observing leaf spots." }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "छाछिया रोग",
        "symptoms": "White powdery fungal patches on the upper surface of leaves, stems, and pods.",
        "favorable_weather": "Dry days with cool, humid nights",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid late sowing.", "biological_spray": "Ampelomyces quisqualis 50g per 15L pump.", "mechanical": "None specific." },
          "chemical_curative": { "active_ingredient": "Wettable Sulphur 80% WDG", "commercial_reference": "Sulfex, Cosavet", "dose_per_15L_pump": "40-50 g", "dose_per_acre": "400-500 g", "waiting_period_phi": "15 days", "application_instructions": "Spray covering entire foliage; avoid hot periods of the day." }
        }
      },
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक वायरस",
        "symptoms": "Scattered yellow and green patches on leaves, reduced pod size, stunting.",
        "favorable_weather": "High whitefly population favored by dry heat",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use resistant varieties, control vector (whitefly).", "biological_spray": "Neem oil to deter vectors.", "mechanical": "Yellow sticky traps to monitor and catch whiteflies." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara (Vector control)", "dose_per_15L_pump": "5 g", "dose_per_acre": "40-50 g", "waiting_period_phi": "21 days", "application_instructions": "Viral diseases have no cure; control whitefly vector early." }
        }
      }
    ]
  },
  {
    "crop_id": "winged-bean",
    "common_name": "Winged Bean",
    "hindi_name": "विंग्ड बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Scarification of seeds may be needed; keep soil moist." },
      { "stage_name": "Vining & Trellising", "day_range": "20-50", "water_requirement_sensitivity": "Medium", "stage_advice": "Provide strong supports/trellis for the aggressive climbing habit." },
      { "stage_name": "Flowering", "day_range": "60-80", "water_requirement_sensitivity": "High", "stage_advice": "Requires moisture; sensitive to day length (short-day plant)." },
      { "stage_name": "Pod Development", "day_range": "80-100", "water_requirement_sensitivity": "High", "stage_advice": "Constant moisture ensures tender pods for vegetable use." },
      { "stage_name": "Tuber/Seed Maturity", "day_range": "110-150", "water_requirement_sensitivity": "Low", "stage_advice": "Allow drying if harvesting for mature seeds or tubers." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 15 kg, P2O5: 40 kg, K2O: 30 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, reduced vine vigor.", "solution": "Urea 1 kg per acre spray." },
        { "nutrient": "Phosphorus", "symptoms": "Slow growth, poor root and nodule development.", "solution": "Foliar spray of 12:61:00 NPK 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Weak vines, poor tuber development.", "solution": "0:0:50 NPK foliar spray 75g per 15L pump." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "Magnesium Sulphate 75g per 15L pump." },
        { "nutrient": "Calcium", "symptoms": "Poor blossom retention, curling of new leaves.", "solution": "Calcium Nitrate spray 30g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling and yellowing of young leaves and shoots, sooty mold.",
        "favorable_weather": "Humid and overcast",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid excess N fertilizer.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L pump.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride, Manik", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "14 days", "application_instructions": "Spray targeting the undersides of leaves and growing tips." }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी घुन",
        "symptoms": "Yellow speckling on leaves, eventual leaf bronzing and drop, webbing.",
        "favorable_weather": "Hot and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain humidity through watering.", "biological_spray": "Beauveria bassiana 50g per 15L.", "mechanical": "Overhead watering." },
          "chemical_curative": { "active_ingredient": "Propargite 57% EC", "commercial_reference": "Omite, Simite", "dose_per_15L_pump": "30-40 ml", "dose_per_acre": "300-400 ml", "waiting_period_phi": "14 days", "application_instructions": "Ensure thorough coverage of foliage, particularly leaf undersides." }
        }
      },
      {
        "issue_name": "Pod Borers",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Holes in the characteristic winged pods, frass visible.",
        "favorable_weather": "Moderate temperatures",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Install bird perches.", "biological_spray": "Bacillus thuringiensis (Bt) 30g per 15L.", "mechanical": "Pheromone traps for monitoring." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7-8 g", "dose_per_acre": "70-80 g", "waiting_period_phi": "14 days", "application_instructions": "Spray during early pod formation stages." }
        }
      },
      {
        "issue_name": "False Rust (Synchytrium psophocarpi)",
        "type": "Fungal",
        "hindi_name": "झूठा रस्ट",
        "symptoms": "Orange-yellow gall-like pustules on leaves, stems, and pods.",
        "favorable_weather": "High humidity and rainfall",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Wide spacing, destruction of infected plants.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Prune severely infected vines." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Spray at 10-15 day intervals upon first sight of galls." }
        }
      },
      {
        "issue_name": "Collar Rot",
        "type": "Fungal",
        "hindi_name": "कॉलर रॉट",
        "symptoms": "Rotting at the stem base near the soil line, sudden wilting and collapse of vines.",
        "favorable_weather": "Warm weather and waterlogged soils",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Improve soil drainage, avoid deep planting.", "biological_spray": "Trichoderma viride applied to soil.", "mechanical": "Remove and destroy affected vines." },
          "chemical_curative": { "active_ingredient": "Copper Oxychloride 50% WP", "commercial_reference": "Blitox 50, Blue Copper", "dose_per_15L_pump": "40 g", "dose_per_acre": "400 g", "waiting_period_phi": "15 days", "application_instructions": "Soil drenching around the collar region of the plant." }
        }
      }
    ]
  },
  {
    "crop_id": "tepary-bean",
    "common_name": "Tepary Bean",
    "hindi_name": "टेपरी बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-7", "water_requirement_sensitivity": "Low", "stage_advice": "Requires very little moisture to germinate; prone to rotting if too wet." },
      { "stage_name": "Vegetative", "day_range": "10-35", "water_requirement_sensitivity": "Low", "stage_advice": "Highly drought-tolerant; excessive irrigation reduces yield." },
      { "stage_name": "Flowering & Podding", "day_range": "40-65", "water_requirement_sensitivity": "Medium", "stage_advice": "A light irrigation may boost yield, but can survive on residual moisture." },
      { "stage_name": "Maturity", "day_range": "70-90", "water_requirement_sensitivity": "Low", "stage_advice": "Requires hot, dry conditions for pods to dry naturally." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 20-30 kg, K2O: 0-15 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Mild yellowing of plants in extremely poor soils.", "solution": "Usually not required, but 19:19:19 NPK 75g per 15L spray if needed." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth and poor pod set.", "solution": "Basal application is sufficient; foliar 12:61:00 NPK 75g per 15L if acute." },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis in alkaline soils.", "solution": "Zinc Sulphate 30g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Chlorosis of newer leaves in highly alkaline soils.", "solution": "Chelated Iron (EDTA) 15-20g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leafhoppers",
        "type": "Insect-Pest",
        "hindi_name": "फुदका",
        "symptoms": "Yellowing and curling of leaf margins, reduced plant vigor.",
        "favorable_weather": "Hot and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed management.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray when hopperburn is first noticed." }
        }
      },
      {
        "issue_name": "Bean Weevils",
        "type": "Insect-Pest",
        "hindi_name": "बीन घुन",
        "symptoms": "Small holes in mature seeds, mostly a storage pest but infestation starts in field.",
        "favorable_weather": "Warm weather during pod drying",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Timely harvest.", "biological_spray": "N/A", "mechanical": "Solarization of harvested seeds." },
          "chemical_curative": { "active_ingredient": "Deltamethrin 2.8% EC", "commercial_reference": "Decis", "dose_per_15L_pump": "10-15 ml", "dose_per_acre": "100-150 ml", "waiting_period_phi": "14 days", "application_instructions": "Spray just before pod maturity to prevent field infestation." }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न",
        "symptoms": "Wilting of plants, rotting of roots and lower stem.",
        "favorable_weather": "Excess soil moisture, heavy rains",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Plant in well-drained soil, avoid overwatering.", "biological_spray": "Trichoderma harzianum soil application.", "mechanical": "Uproot dead plants." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30 g", "dose_per_acre": "300 g", "waiting_period_phi": "15 days", "application_instructions": "Soil drenching around affected patches." }
        }
      },
      {
        "issue_name": "Macrophomina Blight (Charcoal Rot)",
        "type": "Fungal",
        "hindi_name": "चारकोल रॉट",
        "symptoms": "Blackish patches on stems near soil, sudden wilting during extreme heat.",
        "favorable_weather": "High temperatures and drought stress",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain minimal moisture to avoid severe heat stress.", "biological_spray": "Trichoderma viride in soil.", "mechanical": "Destroy infected residue." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Drenching at the base of the plants." }
        }
      }
    ]
  },
  {
    "crop_id": "velvet-bean",
    "common_name": "Velvet Bean / Mucuna",
    "hindi_name": "कौंच बीज",
    "regional_names": {},
    "category": "Medicinal/Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-20", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect from waterlogging; aggressive early growth." },
      { "stage_name": "Vining/Vegetative", "day_range": "25-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires supports for optimal seed production; rapid biomass accumulation." },
      { "stage_name": "Flowering", "day_range": "85-110", "water_requirement_sensitivity": "High", "stage_advice": "Moisture required for good flower set and retention." },
      { "stage_name": "Pod Formation", "day_range": "115-150", "water_requirement_sensitivity": "Medium", "stage_advice": "Pods develop characteristic irritant hairs (trichomes) in some varieties." },
      { "stage_name": "Maturity", "day_range": "160-200", "water_requirement_sensitivity": "Low", "stage_advice": "Wait for pods to turn dark brown or black before harvest." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.5",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 40 kg, K2O: 20 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Reduced nodulation and slow vine growth.", "solution": "Foliar 12:61:00 NPK 75g per 15L pump." },
        { "nutrient": "Potassium", "symptoms": "Poor seed setting, weak vines.", "solution": "0:0:50 NPK 75g per 15L pump." },
        { "nutrient": "Zinc", "symptoms": "Interveinal chlorosis, small leaves.", "solution": "Zinc Sulphate 30g per 15L pump." },
        { "nutrient": "Sulphur", "symptoms": "General yellowing of entire plant, primarily new leaves.", "solution": "Bentonite Sulphur 10kg/acre soil application." },
        { "nutrient": "Calcium", "symptoms": "Deformed young leaves, poor pod fill.", "solution": "Calcium Nitrate spray 30g per 15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf-Eating Caterpillars",
        "type": "Insect-Pest",
        "hindi_name": "पत्ती खाने वाली इल्ली",
        "symptoms": "Extensive defoliation; large holes in leaves.",
        "favorable_weather": "Warm and humid conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Deep summer ploughing.", "biological_spray": "Bacillus thuringiensis (Bt) 30g per 15L.", "mechanical": "Handpick larvae in small plots." },
          "chemical_curative": { "active_ingredient": "Profenofos 50% EC", "commercial_reference": "Curacron", "dose_per_15L_pump": "30-40 ml", "dose_per_acre": "300-400 ml", "waiting_period_phi": "14 days", "application_instructions": "Spray when defoliation exceeds 15%." }
        }
      },
      {
        "issue_name": "Pod Borers",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Larvae boring into pods and eating developing seeds.",
        "favorable_weather": "Moderate temperature during flowering/podding",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Bird perches.", "biological_spray": "Neem seed kernel extract (NSKE 5%).", "mechanical": "Pheromone traps." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7-8 g", "dose_per_acre": "70-80 g", "waiting_period_phi": "14 days", "application_instructions": "Apply at 50% flowering and early pod stage." }
        }
      },
      {
        "issue_name": "Leaf Spot (Cercospora)",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown spots on leaves which coalesce and cause leaf drop.",
        "favorable_weather": "High humidity and continuous rain",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Proper spacing for aeration.", "biological_spray": "Trichoderma harzianum 50g per 15L.", "mechanical": "Remove severely infected vines." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Spray thoroughly when spots first appear." }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट / गेरुआ",
        "symptoms": "Reddish brown powdery spots on the underside of leaves.",
        "favorable_weather": "Cool nights and warm humid days",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Destroy alternative weed hosts.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Field sanitation." },
          "chemical_curative": { "active_ingredient": "Hexaconazole 5% SC", "commercial_reference": "Contaf", "dose_per_15L_pump": "25 ml", "dose_per_acre": "250 ml", "waiting_period_phi": "21 days", "application_instructions": "Foliar application at appearance of initial pustules." }
        }
      },
      {
        "issue_name": "Root-Knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, stunted plants, yellowing leaves.",
        "favorable_weather": "Light sandy soils",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation with cereals.", "biological_spray": "Paecilomyces lilacinus soil drench.", "mechanical": "Soil solarization." },
          "chemical_curative": { "active_ingredient": "Carbofuran 3% CG", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5-8 kg", "waiting_period_phi": "60 days", "application_instructions": "Soil application at sowing or planting time." }
        }
      }
    ]
  },
  {
    "crop_id": "grass-pea-khesari",
    "common_name": "Grass Pea / Khesari",
    "hindi_name": "खेसारी दाल / लतरी",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Sowing & Germination", "day_range": "0-15", "water_requirement_sensitivity": "Low", "stage_advice": "Often sown as a relay crop (Utera) in standing rice; relies on residual moisture." },
      { "stage_name": "Vegetative", "day_range": "20-50", "water_requirement_sensitivity": "Low", "stage_advice": "Extremely hardy; extensive root system develops." },
      { "stage_name": "Flowering", "day_range": "60-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Light winter showers benefit pod set, but tolerates drought well." },
      { "stage_name": "Pod Development", "day_range": "85-110", "water_requirement_sensitivity": "Low", "stage_advice": "Tolerates moisture stress; high ODAP toxin accumulates under severe drought." },
      { "stage_name": "Maturity", "day_range": "115-130", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest before complete drying to prevent pod shattering." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.5",
      "basal_dose_per_acre": "N: 8-10 kg, P2O5: 20-30 kg (usually relies on residual fertilizer from previous crop)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "General yellowing, though rare due to excellent nitrogen fixation.", "solution": "Foliar urea 2% spray if severe." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, delayed flowering.", "solution": "Foliar 12:61:00 NPK 75g per 15L pump." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of youngest leaves, lower yield.", "solution": "Gypsum 100 kg/acre at soil prep." },
        { "nutrient": "Zinc", "symptoms": "Small leaves, shortened internodes.", "solution": "Zinc Sulphate 30g per 15L spray." },
        { "nutrient": "Molybdenum", "symptoms": "Poor nodulation, N-deficiency symptoms.", "solution": "Seed treatment with Ammonium Molybdate." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "BOAA / ODAP Toxicity (Lathyrism)",
        "type": "Physiological/Toxin",
        "hindi_name": "लेथाइरिज्म (लकवा)",
        "symptoms": "Not a crop disease, but a neurotoxin (ODAP) accumulates in seeds under drought stress, causing paralysis in humans/animals if consumed in large quantities without proper processing.",
        "favorable_weather": "Severe drought and moisture stress",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Cultivate low-ODAP varieties (e.g., Mahateora, Ratan), soak seeds in hot water before consumption, ensure crop gets at least one irrigation.", "biological_spray": "N/A", "mechanical": "Boiling and decanting water before cooking." },
          "chemical_curative": { "active_ingredient": "N/A", "commercial_reference": "N/A", "dose_per_15L_pump": "N/A", "dose_per_acre": "N/A", "waiting_period_phi": "N/A", "application_instructions": "Agronomic management and post-harvest processing are the only solutions." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Clustering of insects on tender shoots and flowers, honeydew, sooty mold.",
        "favorable_weather": "Cloudy, humid weather during winter",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Early sowing.", "biological_spray": "Neem seed kernel extract (NSKE 5%) 50ml per 15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Dimethoate 30% EC", "commercial_reference": "Rogor", "dose_per_15L_pump": "30 ml", "dose_per_acre": "300 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray when aphid populations reach economic threshold levels." }
        }
      },
      {
        "issue_name": "Pod Borer (Helicoverpa armigera)",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Larvae feeding on flowers and boring into developing pods.",
        "favorable_weather": "Moderate temperature during reproductive stage",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Intercropping with coriander.", "biological_spray": "HaNPV 250 LE per acre.", "mechanical": "Bird perches, Pheromone traps." },
          "chemical_curative": { "active_ingredient": "Chlorantraniliprole 18.5% SC", "commercial_reference": "Coragen", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "20 days", "application_instructions": "Spray at 50% flowering and early pod setting." }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "छाछिया रोग / भभूतिया",
        "symptoms": "White powdery growth on leaves and stems, leading to defoliation.",
        "favorable_weather": "Dry weather with cool nights",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use resistant varieties.", "biological_spray": "Ampelomyces quisqualis 50g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Wettable Sulphur 80% WDG", "commercial_reference": "Sulfex", "dose_per_15L_pump": "40 g", "dose_per_acre": "400 g", "waiting_period_phi": "15 days", "application_instructions": "Spray at the onset of the disease and repeat after 15 days if needed." }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल फफूंदी",
        "symptoms": "Yellowing on the upper surface of leaves with fluffy fungal growth on the undersides.",
        "favorable_weather": "High humidity, cloudy and cool weather",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid dense sowing.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Remove infected debris." },
          "chemical_curative": { "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Foliar application covering the underside of leaves." }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Reddish-brown pustules on leaves and stems.",
        "favorable_weather": "Humid conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Trichoderma harzianum 50g per 15L.", "mechanical": "Field sanitation." },
          "chemical_curative": { "active_ingredient": "Propiconazole 25% EC", "commercial_reference": "Tilt", "dose_per_15L_pump": "15 ml", "dose_per_acre": "150 ml", "waiting_period_phi": "21 days", "application_instructions": "Apply at the appearance of first rust pustules." }
        }
      }
    ]
  },
  {
    "crop_id": "cluster-bean-guar",
    "common_name": "Cluster Bean / Guar",
    "hindi_name": "ग्वार",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif", "Zaid"],
    "critical_stages": [
      { "stage_name": "Germination & Seedling", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Sensitive to waterlogging; needs well-drained soil." },
      { "stage_name": "Vegetative Growth", "day_range": "20-45", "water_requirement_sensitivity": "Low", "stage_advice": "Highly drought tolerant; deep taproot development." },
      { "stage_name": "Pre-flowering & Branching", "day_range": "45-55", "water_requirement_sensitivity": "Medium", "stage_advice": "Moisture stress here reduces branch numbers." },
      { "stage_name": "Flowering", "day_range": "55-75", "water_requirement_sensitivity": "High", "stage_advice": "Critical stage; drought causes flower drop, excess water causes vegetative growth." },
      { "stage_name": "Pod Formation & Filling", "day_range": "75-95", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires adequate moisture for gum (galactomannan) development in seeds." },
      { "stage_name": "Maturity", "day_range": "100-120", "water_requirement_sensitivity": "Low", "stage_advice": "Dry conditions are essential for proper seed drying and gum quality." }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "N: 8-10 kg, P2O5: 16-20 kg, K2O: 0-10 kg",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green plants, poor vegetative growth.", "solution": "Usually N-fixation is enough, but foliar urea 2% spray if yellowing occurs early." },
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, poor root development, delayed flowering.", "solution": "Foliar 12:61:00 NPK 75g per 15L pump." },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching of older leaves, reduced drought tolerance.", "solution": "0:0:50 NPK 75g per 15L pump spray." },
        { "nutrient": "Zinc", "symptoms": "Stunted growth, interveinal chlorosis, 'little leaf' symptoms.", "solution": "Zinc Sulphate (21%) 30g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Chlorosis in young leaves in highly alkaline/calcareous soils.", "solution": "Chelated Iron (EDTA) 15-20g per 15L pump." },
        { "nutrient": "Molybdenum", "symptoms": "Pale leaves similar to N deficiency due to poor nodule function.", "solution": "Ammonium Molybdate seed treatment or 1g per 15L foliar spray." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves, reduced seed quality and gum content.", "solution": "Gypsum 100 kg/acre as basal." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Jassids (Leafhoppers)",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला / फुदका",
        "symptoms": "Yellowing and curling of leaf edges, 'hopperburn', stunted plant growth.",
        "favorable_weather": "Dry and warm weather",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Timely sowing, weed control.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L.", "mechanical": "Yellow sticky traps 20 per acre." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor, Tata Mida", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray when 2-3 jassids per leaf are observed." }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफ़ेद मक्खी",
        "symptoms": "Chlorotic spots, honeydew secretion, transmission of leaf curl virus.",
        "favorable_weather": "Hot and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid alternate hosts like cotton nearby.", "biological_spray": "Verticillium lecanii 50g per 15L.", "mechanical": "Yellow sticky traps 20 per acre." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "21 days", "application_instructions": "Foliar spray ensuring coverage on leaf undersides." }
        }
      },
      {
        "issue_name": "Guar Midge",
        "type": "Insect-Pest",
        "hindi_name": "ग्वार मिज",
        "symptoms": "Maggots feed on floral buds, buds dry up and fall off without forming pods.",
        "favorable_weather": "High humidity and moderate temperature during flowering",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Early sowing to escape peak midge populations.", "biological_spray": "Neem seed kernel extract (NSKE 5%).", "mechanical": "Collect and destroy infested buds." },
          "chemical_curative": { "active_ingredient": "Dimethoate 30% EC", "commercial_reference": "Rogor", "dose_per_15L_pump": "30 ml", "dose_per_acre": "300 ml", "waiting_period_phi": "21 days", "application_instructions": "Apply at early bud initiation stage." }
        }
      },
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी (झुलसा)",
        "symptoms": "Water-soaked spots on leaves turning angular and dark brown, stem cracking, blackening of veins.",
        "favorable_weather": "High humidity and rainfall",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use certified pathogen-free seeds, crop rotation.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Rogue out infected plants." },
          "chemical_curative": { "active_ingredient": "Streptomycin Sulphate 9% + Tetracycline 1% + Copper Oxychloride", "commercial_reference": "Plantomycin + Blitox 50", "dose_per_15L_pump": "2g (antibiotic) + 40g (COC)", "dose_per_acre": "20g (antibiotic) + 400g (COC)", "waiting_period_phi": "14 days", "application_instructions": "Spray immediately upon first symptom and repeat after 10 days." }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Dark brown, circular spots with concentric rings on leaves.",
        "favorable_weather": "Warm and humid weather, frequent rains",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Destruction of crop debris.", "biological_spray": "Trichoderma viride 50g per 15L.", "mechanical": "Remove lower infected leaves." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45, Uthane", "dose_per_15L_pump": "40 g", "dose_per_acre": "400 g", "waiting_period_phi": "21 days", "application_instructions": "Spray at appearance of spots and repeat after 15 days." }
        }
      },
      {
        "issue_name": "Root Rot / Charcoal Rot",
        "type": "Fungal",
        "hindi_name": "जड़ सड़न / चारकोल रॉट",
        "symptoms": "Sudden wilting of the whole plant, root and collar region turns black and shreds.",
        "favorable_weather": "High temperature and moisture stress followed by irrigation",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain consistent soil moisture, deep ploughing.", "biological_spray": "Trichoderma harzianum soil treatment.", "mechanical": "Uproot and burn diseased plants." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30 g", "dose_per_acre": "300 g", "waiting_period_phi": "21 days", "application_instructions": "Drenching the soil around the plant base." }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "छाछिया रोग",
        "symptoms": "White powdery growth on leaves, leading to yellowing and premature defoliation.",
        "favorable_weather": "Dry weather with cool nights",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid late sowing.", "biological_spray": "Ampelomyces quisqualis 50g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Hexaconazole 5% SC", "commercial_reference": "Contaf", "dose_per_15L_pump": "25 ml", "dose_per_acre": "250 ml", "waiting_period_phi": "21 days", "application_instructions": "Foliar spray when disease first appears." }
        }
      },
      {
        "issue_name": "Leaf Curl Virus",
        "type": "Viral",
        "hindi_name": "पत्ता मरोड़ वायरस",
        "symptoms": "Stunted growth, curling of leaves, thickened veins, severely reduced yield.",
        "favorable_weather": "High whitefly populations",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use resistant varieties, uproot infected plants immediately.", "biological_spray": "Neem oil to deter whiteflies.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Diafenthiuron 50% WP", "commercial_reference": "Pegasus (for Whitefly control)", "dose_per_15L_pump": "20-25 g", "dose_per_acre": "200-250 g", "waiting_period_phi": "21 days", "application_instructions": "Virus has no cure; apply insecticide early to control the whitefly vector." }
        }
      }
    ]
  },
  {
    "crop_id": "bambara-groundnut",
    "common_name": "Bambara Groundnut",
    "hindi_name": "बम्बारा मूंगफली",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires warm soil and moderate moisture." },
      { "stage_name": "Vegetative", "day_range": "20-45", "water_requirement_sensitivity": "Low", "stage_advice": "Highly drought tolerant; forms a bunchy canopy." },
      { "stage_name": "Flowering & Pegging", "day_range": "50-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Like peanuts, flowers produce pegs that enter soil; soil must be friable." },
      { "stage_name": "Pod Development", "day_range": "75-110", "water_requirement_sensitivity": "Medium", "stage_advice": "Pods develop underground; moisture aids expansion." },
      { "stage_name": "Maturity", "day_range": "120-150", "water_requirement_sensitivity": "Low", "stage_advice": "Leaves yellow and drop; dry soil needed for easy harvesting." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 8-10 kg, P2O5: 20-30 kg, K2O: 20 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Poor root and nodule development, reduced pegging.", "solution": "Foliar 12:61:00 NPK 75g per 15L pump." },
        { "nutrient": "Potassium", "symptoms": "Poor pod filling underground.", "solution": "0:0:50 NPK 75g per 15L spray." },
        { "nutrient": "Calcium", "symptoms": "Pops (empty pods), blackened seeds.", "solution": "Apply Gypsum 100-150 kg/acre at early flowering." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves.", "solution": "Magnesium Sulphate 75g per 15L pump." },
        { "nutrient": "Sulphur", "symptoms": "General yellowing, delayed maturity.", "solution": "Bentonite Sulphur 10kg/acre basal." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Damage to roots and developing underground pods, wilting plants.",
        "favorable_weather": "Dry spells",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Remove un-decomposed organic matter, frequent irrigation.", "biological_spray": "Metarhizium anisopliae soil application.", "mechanical": "Destroy termite mounds." },
          "chemical_curative": { "active_ingredient": "Chlorpyrifos 20% EC", "commercial_reference": "Radar, Dursban", "dose_per_15L_pump": "30-40 ml", "dose_per_acre": "300-400 ml", "waiting_period_phi": "30 days", "application_instructions": "Soil drenching around the root zone." }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of young leaves, honeydew, stunted growth.",
        "favorable_weather": "Cool and humid conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain weed-free field.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray on foliage if infestation is severe." }
        }
      },
      {
        "issue_name": "Leaf Spot (Cercospora)",
        "type": "Fungal",
        "hindi_name": "सर्कोस्पोरा पत्ती धब्बा",
        "symptoms": "Brown spots on leaves with yellow halos, premature leaf drop.",
        "favorable_weather": "High humidity and rainfall",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation, use resistant varieties.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Remove diseased residue." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Spray at appearance of symptoms." }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम विल्ट / उकठा",
        "symptoms": "Yellowing and wilting of leaves starting from the bottom, vascular browning.",
        "favorable_weather": "Warm soil temperatures and stress",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation for 3-4 years, avoid waterlogging.", "biological_spray": "Trichoderma viride seed/soil treatment.", "mechanical": "Uproot and burn infected plants." },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30 g", "dose_per_acre": "300 g", "waiting_period_phi": "21 days", "application_instructions": "Soil drenching around affected plants." }
        }
      },
      {
        "issue_name": "Root-Knot Nematodes",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, yellowing, stunted growth, reduced pod yield.",
        "favorable_weather": "Sandy soils",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation with non-hosts like maize or sorghum.", "biological_spray": "Paecilomyces lilacinus soil application.", "mechanical": "Deep summer ploughing." },
          "chemical_curative": { "active_ingredient": "Carbofuran 3% CG", "commercial_reference": "Furadan", "dose_per_15L_pump": "N/A", "dose_per_acre": "5-8 kg", "waiting_period_phi": "60 days", "application_instructions": "Soil application at sowing." }
        }
      }
    ]
  },
  {
    "crop_id": "white-lupin",
    "common_name": "White Lupin",
    "hindi_name": "सफेद ल्यूपिन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Germination", "day_range": "0-14", "water_requirement_sensitivity": "Medium", "stage_advice": "Requires moist, well-drained soil; cold tolerant." },
      { "stage_name": "Vegetative/Rosette", "day_range": "15-60", "water_requirement_sensitivity": "Low", "stage_advice": "Slow early growth, weed control is critical." },
      { "stage_name": "Stem Elongation", "day_range": "60-90", "water_requirement_sensitivity": "Medium", "stage_advice": "Rapid growth phase, increasing water demand." },
      { "stage_name": "Flowering & Pod Set", "day_range": "90-120", "water_requirement_sensitivity": "High", "stage_advice": "Highly sensitive to moisture and heat stress; causes flower drop." },
      { "stage_name": "Maturity", "day_range": "130-160", "water_requirement_sensitivity": "Low", "stage_advice": "Desiccation may be needed for even harvesting." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 30-40 kg, K2O: 20-30 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, dark green/purplish leaves.", "solution": "Foliar spray of 12:61:00 NPK 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Marginal chlorosis on older leaves, poor pod fill.", "solution": "0:0:50 NPK 75g per 15L spray." },
        { "nutrient": "Iron", "symptoms": "Chlorosis in young leaves, common in alkaline soils (pH > 7.0).", "solution": "Chelated Iron (EDTA) 15-20g per 15L." },
        { "nutrient": "Manganese", "symptoms": "Interveinal chlorosis, brown spots on leaves.", "solution": "Manganese Sulphate 30g per 15L spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Lupin Aphid",
        "type": "Insect-Pest",
        "hindi_name": "ल्यूपिन माहू",
        "symptoms": "Dense colonies on stems and flower spikes, causing wilting and flower drop.",
        "favorable_weather": "Cool and humid",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Early sowing.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray when aphid colonies begin to form on flower spikes." }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Twisting and bending of stems (shepherd's crook), lesions with orange spore masses.",
        "favorable_weather": "Wet, rainy conditions with mild temperatures",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use disease-free seeds, resistant varieties.", "biological_spray": "Trichoderma harzianum 50g per 15L.", "mechanical": "Destroy infected plants." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC", "commercial_reference": "Custodia", "dose_per_15L_pump": "15-20 ml", "dose_per_acre": "150-200 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray at early signs of stem twisting or lesions." }
        }
      },
      {
        "issue_name": "Brown Spot (Pleiochaeta setosa)",
        "type": "Fungal",
        "hindi_name": "ब्राउन स्पॉट",
        "symptoms": "Dark brown spots on leaves and stems, severe defoliation of seedlings.",
        "favorable_weather": "Cool and wet weather after sowing",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation, avoid planting near last year's stubble.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "Deep burial of stubble." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Seed treatment is most effective; foliar spray if symptoms appear." }
        }
      },
      {
        "issue_name": "Phomopsis Stem Blight",
        "type": "Fungal",
        "hindi_name": "तना अंगमारी",
        "symptoms": "Sunken lesions on stems, can lead to lupinosis toxicity in livestock if stubble is grazed.",
        "favorable_weather": "Summer rains on mature plants/stubble",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use resistant varieties, manage grazing carefully.", "biological_spray": "N/A", "mechanical": "Destroy infected stubble." },
          "chemical_curative": { "active_ingredient": "Chlorothalonil 75% WP", "commercial_reference": "Kavach", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "30 days", "application_instructions": "Spray during late flowering/pod set to reduce stubble infection." }
        }
      },
      {
        "issue_name": "Bean Seed Fly",
        "type": "Insect-Pest",
        "hindi_name": "बीन सीड फ्लाई",
        "symptoms": "Maggots feed on germinating seeds and young seedlings underground.",
        "favorable_weather": "Cool, wet soils with high organic matter",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Delay sowing until soils warm up, well-decomposed manure.", "biological_spray": "N/A", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 30% FS", "commercial_reference": "Cruiser", "dose_per_15L_pump": "N/A", "dose_per_acre": "N/A", "waiting_period_phi": "N/A", "application_instructions": "Seed treatment at 3-5 ml per kg of seed." }
        }
      }
    ]
  },
  {
    "crop_id": "blue-lupin",
    "common_name": "Blue Lupin",
    "hindi_name": "नीला ल्यूपिन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Emergence", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Avoid waterlogging which causes root rot." },
      { "stage_name": "Vegetative", "day_range": "20-60", "water_requirement_sensitivity": "Low", "stage_advice": "Tolerates poorer soils than white lupin." },
      { "stage_name": "Flowering", "day_range": "70-100", "water_requirement_sensitivity": "High", "stage_advice": "Critical for pod set." },
      { "stage_name": "Maturity", "day_range": "110-140", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest promptly as pods may shatter in dry conditions." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 30 kg, K2O: 20 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, reduced pod numbers.", "solution": "Foliar 12:61:00 NPK 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Leaf margin necrosis.", "solution": "0:0:50 NPK 75g per 15L spray." },
        { "nutrient": "Manganese", "symptoms": "Split seeds, brown patches on leaves.", "solution": "Manganese Sulphate 30g per 15L." },
        { "nutrient": "Iron", "symptoms": "Yellowing of young leaves in higher pH soils.", "solution": "Chelated Iron 15g per 15L." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sap sucking on tender growth, stunting, transmission of Bean Yellow Mosaic Virus.",
        "favorable_weather": "Cool and cloudy",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Maintain plant vigor.", "biological_spray": "Neem oil 30ml per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Dimethoate 30% EC", "commercial_reference": "Rogor", "dose_per_15L_pump": "25-30 ml", "dose_per_acre": "250-300 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray to reduce aphid numbers and viral transmission." }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Stem twisting, sunken lesions.",
        "favorable_weather": "Warm and wet conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Use resistant varieties (e.g., Mandelup).", "biological_spray": "Trichoderma viride 50g per 15L.", "mechanical": "Crop rotation." },
          "chemical_curative": { "active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "40 g", "dose_per_acre": "400 g", "waiting_period_phi": "21 days", "application_instructions": "Preventive spray during early flowering." }
        }
      },
      {
        "issue_name": "Brown Leaf Spot",
        "type": "Fungal",
        "hindi_name": "भूरा पत्ती धब्बा",
        "symptoms": "Brown spots leading to defoliation.",
        "favorable_weather": "Wet weather post-emergence",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid planting adjacent to previous year's stubble.", "biological_spray": "Pseudomonas fluorescens 50g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30 g", "dose_per_acre": "300 g", "waiting_period_phi": "21 days", "application_instructions": "Seed treatment is primary; foliar spray if needed." }
        }
      },
      {
        "issue_name": "Budworm (Helicoverpa)",
        "type": "Insect-Pest",
        "hindi_name": "बडवर्म / फली भेदक",
        "symptoms": "Larvae chewing into developing pods and seeds.",
        "favorable_weather": "Warm temperatures during pod fill",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Monitor with pheromone traps.", "biological_spray": "Bacillus thuringiensis (Bt) 30g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Spinosad 45% SC", "commercial_reference": "Tracer", "dose_per_15L_pump": "5-6 ml", "dose_per_acre": "50-60 ml", "waiting_period_phi": "14 days", "application_instructions": "Spray when caterpillars are small." }
        }
      }
    ]
  },
  {
    "crop_id": "yellow-lupin",
    "common_name": "Yellow Lupin",
    "hindi_name": "पीला ल्यूपिन",
    "regional_names": {},
    "category": "Pulse/Forage",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Establishment", "day_range": "0-20", "water_requirement_sensitivity": "Medium", "stage_advice": "Tolerates very sandy, acidic soils better than other lupins." },
      { "stage_name": "Vegetative", "day_range": "25-65", "water_requirement_sensitivity": "Low", "stage_advice": "Excellent early vigor, competes well with weeds." },
      { "stage_name": "Flowering", "day_range": "70-100", "water_requirement_sensitivity": "High", "stage_advice": "Produces fragrant yellow flowers; needs moisture." },
      { "stage_name": "Maturity", "day_range": "110-130", "water_requirement_sensitivity": "Low", "stage_advice": "Pods highly susceptible to shattering if delayed." }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-6.0",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 25-30 kg, K2O: 20 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, purple tinge on leaves.", "solution": "Foliar 12:61:00 NPK 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Poor pod set, leaf edge browning.", "solution": "0:0:50 NPK 75g per 15L spray." },
        { "nutrient": "Molybdenum", "symptoms": "Poor nodulation in very acidic soils.", "solution": "Sodium Molybdate seed treatment." },
        { "nutrient": "Calcium", "symptoms": "Poor root development in very sandy soils.", "solution": "Apply lime if pH is below 4.5, but crop is highly tolerant." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Yellow lupins are extremely susceptible; total crop loss possible. Twisted stems, lesions.",
        "favorable_weather": "Wet, warm conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Strictly use certified disease-free seeds.", "biological_spray": "Trichoderma harzianum 50g per 15L.", "mechanical": "Complete destruction of infected crop." },
          "chemical_curative": { "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% SC", "commercial_reference": "Custodia", "dose_per_15L_pump": "20 ml", "dose_per_acre": "200 ml", "waiting_period_phi": "21 days", "application_instructions": "Frequent preventive sprays needed in high-risk areas." }
        }
      },
      {
        "issue_name": "Bean Yellow Mosaic Virus (BYMV)",
        "type": "Viral",
        "hindi_name": "बीन पीला मोज़ेक वायरस",
        "symptoms": "Mottling of leaves, severe stunting, 'necrotic pod syndrome'.",
        "favorable_weather": "High aphid populations",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Control aphid vectors, use virus-tested seed.", "biological_spray": "Neem oil to repel aphids.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara (Vector control)", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "21 days", "application_instructions": "Control aphids early to prevent transmission." }
        }
      },
      {
        "issue_name": "Lupin Aphid",
        "type": "Insect-Pest",
        "hindi_name": "ल्यूपिन माहू",
        "symptoms": "Wilting, sooty mold, vector for viruses.",
        "favorable_weather": "Cool, humid weather",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Promote natural predators (ladybugs).", "biological_spray": "Verticillium lecanii 50g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "14 days", "application_instructions": "Spray when aphids are sighted on growing tips." }
        }
      },
      {
        "issue_name": "Redlegged Earth Mite",
        "type": "Insect-Pest",
        "hindi_name": "लाल पैर वाला घुन",
        "symptoms": "Silvery white patches on leaves, severe damage to seedlings.",
        "favorable_weather": "Cool, wet conditions (Autumn/Winter)",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Manage weeds before sowing.", "biological_spray": "N/A", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Bifenthrin 10% EC", "commercial_reference": "Talstar", "dose_per_15L_pump": "15 ml", "dose_per_acre": "150 ml", "waiting_period_phi": "14 days", "application_instructions": "Spray at emergence if mites are present." }
        }
      }
    ]
  },
  {
    "crop_id": "rice-bean",
    "common_name": "Rice Bean",
    "hindi_name": "चावल बीन",
    "regional_names": {},
    "category": "Pulse",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Tolerates poor soils and heavy rain better than most pulses." },
      { "stage_name": "Vegetative Growth", "day_range": "20-60", "water_requirement_sensitivity": "Low", "stage_advice": "Rapid, vining growth smothers weeds effectively." },
      { "stage_name": "Flowering", "day_range": "65-85", "water_requirement_sensitivity": "Medium", "stage_advice": "Produces bright yellow flowers; requires moderate moisture." },
      { "stage_name": "Pod Development", "day_range": "90-110", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure adequate moisture for seed size." },
      { "stage_name": "Maturity", "day_range": "115-130", "water_requirement_sensitivity": "Low", "stage_advice": "Pods shatter easily; harvest promptly when mature." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 10 kg, P2O5: 30-40 kg, K2O: 15-20 kg",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted plants, poor nodulation.", "solution": "Foliar 12:61:00 NPK 75g per 15L." },
        { "nutrient": "Potassium", "symptoms": "Weak vines, marginal leaf scorch.", "solution": "0:0:50 NPK 75g per 15L spray." },
        { "nutrient": "Zinc", "symptoms": "Small leaves, short internodes.", "solution": "Zinc Sulphate 30g per 15L pump." },
        { "nutrient": "Iron", "symptoms": "Chlorosis on young leaves in alkaline soil.", "solution": "Chelated Iron 15g per 15L pump." },
        { "nutrient": "Sulphur", "symptoms": "General yellowing, poor seed protein content.", "solution": "Gypsum 100 kg/acre basal." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetles",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot-holes in leaves of seedlings.",
        "favorable_weather": "Warm and dry conditions",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Weed management.", "biological_spray": "Neem oil (10000 ppm) 30ml per 15L.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5 ml", "dose_per_acre": "50 ml", "waiting_period_phi": "21 days", "application_instructions": "Spray if defoliation is severe on young plants." }
        }
      },
      {
        "issue_name": "Pod Borers",
        "type": "Insect-Pest",
        "hindi_name": "फली भेदक",
        "symptoms": "Larvae boring into pods and eating seeds.",
        "favorable_weather": "Moderate temperatures during pod stage",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Bird perches.", "biological_spray": "Bacillus thuringiensis (Bt) 30g per 15L.", "mechanical": "Pheromone traps." },
          "chemical_curative": { "active_ingredient": "Emamectin Benzoate 5% SG", "commercial_reference": "Proclaim", "dose_per_15L_pump": "7 g", "dose_per_acre": "70 g", "waiting_period_phi": "14 days", "application_instructions": "Apply during flowering and pod development." }
        }
      },
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown circular spots on leaves, premature defoliation.",
        "favorable_weather": "High humidity and rainfall",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Crop rotation.", "biological_spray": "Trichoderma viride 50g per 15L.", "mechanical": "Destroy infected debris." },
          "chemical_curative": { "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf, Companion", "dose_per_15L_pump": "30-40 g", "dose_per_acre": "300-400 g", "waiting_period_phi": "21 days", "application_instructions": "Spray upon noticing spots." }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "छाछिया रोग",
        "symptoms": "White powdery growth on leaves and stems.",
        "favorable_weather": "Dry weather with cool nights",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Avoid late sowing.", "biological_spray": "Ampelomyces quisqualis 50g per 15L.", "mechanical": "N/A" },
          "chemical_curative": { "active_ingredient": "Wettable Sulphur 80% WDG", "commercial_reference": "Sulfex", "dose_per_15L_pump": "40 g", "dose_per_acre": "400 g", "waiting_period_phi": "15 days", "application_instructions": "Spray when disease appears." }
        }
      },
      {
        "issue_name": "Yellow Mosaic Virus",
        "type": "Viral",
        "hindi_name": "पीला मोज़ेक वायरस",
        "symptoms": "Yellow and green mosaic patterns on leaves, stunting.",
        "favorable_weather": "High whitefly populations",
        "solutions": {
          "organic_ipm": { "preventive_measures": "Uproot infected plants.", "biological_spray": "Neem oil for vector control.", "mechanical": "Yellow sticky traps." },
          "chemical_curative": { "active_ingredient": "Thiamethoxam 25% WG", "commercial_reference": "Actara (Vector control)", "dose_per_15L_pump": "5 g", "dose_per_acre": "50 g", "waiting_period_phi": "21 days", "application_instructions": "Control whiteflies to prevent virus spread." }
        }
      }
    ]
  }
];
