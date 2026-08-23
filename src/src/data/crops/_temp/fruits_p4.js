export const data = [
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
  }
];
