export const data = [
  {
    "crop_id": "strawberry",
    "common_name": "Strawberry",
    "hindi_name": "स्ट्रॉबेरी",
    "regional_names": {
      "marathi": "स्ट्रॉबेरी",
      "punjabi": "ਸਟ੍ਰਾਬੇਰੀ",
      "tamil": "ஸ்ட்ராபெரி",
      "telugu": "స్ట్రాబెర్రీ"
    },
    "category": "Fruit",
    "season": ["Rabi"],
    "critical_stages": [
      {
        "stage_name": "Runner planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate soil moisture for root establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "31-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen fertilizers for canopy development."
      },
      {
        "stage_name": "Flowering",
        "day_range": "61-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid overhead irrigation to reduce disease risk."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "91-105",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate calcium and boron."
      },
      {
        "stage_name": "Fruiting",
        "day_range": "106-135",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture but avoid waterlogging."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "136-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation as growth slows."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "FYM 10 tons, N 20kg, P 40kg, K 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth",
          "solution": "Urea 100g per 15L pump or 25kg/acre"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple reddish hues",
          "solution": "DAP 25kg/acre"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of leaves",
          "solution": "MOP 20kg/acre or Foliar spray of 19:19:19 @ 75g/15L"
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Tip burn of young leaves, poor fruit quality",
          "solution": "Calcium Nitrate spray 50g per 15L pump"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves",
          "solution": "Magnesium Sulphate 50g per 15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves",
          "solution": "Iron Chelates (EDTA) 20g per 15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed fruits, poor fruit set",
          "solution": "Boron 20% @ 20g per 15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Grey Mould (Botrytis)",
        "type": "Fungal",
        "hindi_name": "ग्रे मोल्ड",
        "symptoms": "Grey fuzzy fungal growth on fruits and flowers.",
        "favorable_weather": "Cool, humid conditions (15-25°C, >85% RH)",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Proper spacing, removal of infected plant debris",
            "biological_spray": "Trichoderma viride @ 50g/15L",
            "mechanical": "Avoid overhead irrigation"
          },
          "chemical_curative": {
            "active_ingredient": "Captan 50% WP",
            "commercial_reference": "Captaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Spray at flowering and fruit set stages."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery patches on leaves, flowers, and fruits.",
        "favorable_weather": "Warm, dry days with cool, humid nights",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good air circulation, avoid excess nitrogen",
            "biological_spray": "Bacillus subtilis @ 50ml/15L",
            "mechanical": "Prune dense canopies"
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 23% SC",
            "commercial_reference": "Amistar",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Foliar spray upon initial symptom observation."
          }
        }
      },
      {
        "issue_name": "Two-spotted Spider Mite",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी का जाला",
        "symptoms": "Stippling on leaves, fine webbing under leaves, bronzing.",
        "favorable_weather": "Hot and dry conditions",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain adequate soil moisture, avoid dust accumulation",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L",
            "mechanical": "Water sprays to dislodge mites"
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "3",
            "application_instructions": "Ensure good coverage on the undersides of leaves."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "जड़-गांठ नेमाटोड",
        "symptoms": "Galls or knots on roots, stunted growth, wilting.",
        "favorable_weather": "Warm, sandy soils",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with marigold, use nematode-free planting material",
            "biological_spray": "Purpureocillium lilacinum @ 50g/15L for soil drench",
            "mechanical": "Solarization of soil before planting"
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1 kg applied to soil",
            "waiting_period_phi": "30",
            "application_instructions": "Soil application before planting."
          }
        }
      }
    ]
  },
  {
    "crop_id": "amla",
    "common_name": "Indian Gooseberry",
    "hindi_name": "आंवला",
    "regional_names": {
      "marathi": "आवळा",
      "punjabi": "ਆਂਵਲਾ",
      "tamil": "நெல்லிக்காய்",
      "telugu": "ఉసిరికాయ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Seedling/Graft Establishment",
        "day_range": "0-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure frequent light irrigation to establish root system."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "90-365",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen and train plant for strong framework."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "365-450",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restrict irrigation; shedding of leaves occurs."
      },
      {
        "stage_name": "Flowering",
        "day_range": "450-480",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Provide optimal moisture; avoid water stress to prevent flower drop."
      },
      {
        "stage_name": "Fruit Set",
        "day_range": "481-510",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate lightly; nutrient application supports retention."
      },
      {
        "stage_name": "Fruit Development & Maturity",
        "day_range": "511-700",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Regular irrigation ensures better fruit size and quality."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.5",
      "basal_dose_per_acre": "FYM 20 kg/tree, N 200g, P 100g, K 200g per tree per year",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, reduced growth",
          "solution": "Apply Urea 100g per tree"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves, poor root development",
          "solution": "Apply SSP 250g per tree"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves",
          "solution": "Apply MOP 150g per tree"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted shoots, rosette formation",
          "solution": "Foliar spray of Zinc Sulphate @ 0.5% (75g/15L pump)"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Fruit cracking and internal necrosis",
          "solution": "Foliar spray of Borax @ 0.2% (30g/15L pump)"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis of younger leaves",
          "solution": "Foliar spray of Ferrous Sulphate @ 0.5% (75g/15L pump)"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves",
          "solution": "Apply Magnesium Sulphate 50g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bark Eating Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "छाल खाने वाली सुंडी",
        "symptoms": "Presence of frass and silk webs on bark; holes in trunk/branches.",
        "favorable_weather": "Humid and warm weather",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Keep orchard clean, avoid overcrowding",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "Insert iron wire into holes to kill caterpillar, clean webs"
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "Apply directly into holes",
            "waiting_period_phi": "30",
            "application_instructions": "Inject 5-10 ml of solution into holes and seal with mud."
          }
        }
      },
      {
        "issue_name": "Shoot Gall Maker",
        "type": "Insect-Pest",
        "hindi_name": "गॉल मेकर",
        "symptoms": "Formation of hard woody galls on apical shoots, stunted growth.",
        "favorable_weather": "Monsoon and post-monsoon period",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of affected shoots",
            "biological_spray": "Neem oil @ 50ml/15L",
            "mechanical": "Cut and burn galled shoots in winter"
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray during new flush emergence."
          }
        }
      },
      {
        "issue_name": "Amla Rust",
        "type": "Fungal",
        "hindi_name": "आंवला रस्ट",
        "symptoms": "Circular reddish-brown pustules on leaves and fruits.",
        "favorable_weather": "High humidity, continuous rains",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure proper drainage and aeration",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "Remove infected fruits and leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "500g in 200L water",
            "waiting_period_phi": "14",
            "application_instructions": "Spray as preventive or at first sign of disease."
          }
        }
      }
    ]
  },
  {
    "crop_id": "blueberry",
    "common_name": "Blueberry",
    "hindi_name": "ब्लूबेरी",
    "regional_names": {},
    "category": "Fruit",
    "season": ["Kharif"],
    "critical_stages": [
      {
        "stage_name": "Bud Break",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure soil moisture as buds swell and open."
      },
      {
        "stage_name": "Bloom",
        "day_range": "16-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Crucial for fruit set, provide adequate water but avoid overhead."
      },
      {
        "stage_name": "Petal Fall to Fruit Set",
        "day_range": "31-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nutrient demand is high, maintain consistent moisture."
      },
      {
        "stage_name": "Fruit Development",
        "day_range": "46-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for berry size; water stress reduces yield."
      },
      {
        "stage_name": "Harvest & Post-Harvest",
        "day_range": "76-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation gradually after harvest to encourage dormancy."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-5.5",
      "basal_dose_per_acre": "N 50kg, P 20kg, K 40kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green to yellow leaves, poor shoot growth",
          "solution": "Apply Ammonium Sulfate"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on young leaves, common in high pH soils",
          "solution": "Iron Chelates 20g/15L pump"
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Reddening or yellowing between veins of older leaves",
          "solution": "Magnesium Sulfate 50g/15L pump"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal burning of leaves, small berries",
          "solution": "Potassium Sulfate"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mummy Berry",
        "type": "Fungal",
        "hindi_name": "ममी बेरी",
        "symptoms": "Blighted young shoots, berries become hard, pale, and shriveled.",
        "favorable_weather": "Cool, wet spring weather",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake and remove mummified berries from ground",
            "biological_spray": "Bacillus subtilis @ 50ml/15L",
            "mechanical": "Mulching to cover fallen mummies"
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "30",
            "application_instructions": "Apply at bud break and early bloom."
          }
        }
      },
      {
        "issue_name": "Spotted Wing Drosophila",
        "type": "Insect-Pest",
        "hindi_name": "स्पॉटेड विंग ड्रोसोफिला",
        "symptoms": "Soft, collapsing berries with small larvae inside.",
        "favorable_weather": "Moderate temperatures during fruit ripening",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Frequent harvesting, remove overripe fruit",
            "biological_spray": "Spinosad @ 5ml/15L",
            "mechanical": "Use baited traps for monitoring"
          },
          "chemical_curative": {
            "active_ingredient": "Zeta-cypermethrin",
            "commercial_reference": "Mustang Maxx",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "150ml in 200L water",
            "waiting_period_phi": "1",
            "application_instructions": "Apply when berries start changing color and flies are present."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mulberry",
    "common_name": "Mulberry",
    "hindi_name": "शहतूत",
    "regional_names": {
      "marathi": "तुती",
      "punjabi": "ਸ਼ਹਿਤੂਤ",
      "tamil": "மல்பெரி",
      "telugu": "మల్బరీ"
    },
    "category": "Fruit",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      {
        "stage_name": "Sprouting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure adequate soil moisture after pruning."
      },
      {
        "stage_name": "Vegetative Growth (Early)",
        "day_range": "16-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers for leaf yield."
      },
      {
        "stage_name": "Vegetative Growth (Late)",
        "day_range": "31-45",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Peak leaf production; requires consistent watering."
      },
      {
        "stage_name": "Leaf Harvest",
        "day_range": "46-60",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Maintain turgidity of leaves before plucking."
      },
      {
        "stage_name": "Post-Harvest Recovery",
        "day_range": "61-75",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Irrigate immediately after leaf harvest/pruning."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 8 tons, N 120kg, P 50kg, K 50kg per year in split doses",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale yellow leaves, reduced leaf yield",
          "solution": "Urea application after every harvest"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves, poor root growth",
          "solution": "Apply SSP as basal dose"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis of older leaves",
          "solution": "MOP application"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes",
          "solution": "Zinc Sulphate 0.5% foliar spray"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis of younger leaves",
          "solution": "Ferrous Sulphate 0.5% foliar spray"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pink Mealybug (Tukra)",
        "type": "Insect-Pest",
        "hindi_name": "मीली बग (टुकरा)",
        "symptoms": "Wrinkled, curled, and thickened apical leaves; stunted shoot growth.",
        "favorable_weather": "Summer months with high temperature and low humidity",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pluck and burn affected shoots",
            "biological_spray": "Cryptolaemus montrouzieri (predator beetle) release @ 100/acre",
            "mechanical": "Apply sticky bands on main stem"
          },
          "chemical_curative": {
            "active_ingredient": "Dichlorvos 76% EC",
            "commercial_reference": "Nuvan",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray safely; maintain 15 days waiting period before feeding silkworms."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powdery patches on lower surface of mature leaves.",
        "favorable_weather": "Cool temperature (20-24°C) with high humidity",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, ensure good sunlight penetration",
            "biological_spray": "Trichoderma harzianum @ 50g/15L",
            "mechanical": "Remove infected leaves"
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g in 200L water",
            "waiting_period_phi": "15",
            "application_instructions": "Spray on lower surface of leaves."
          }
        }
      }
    ]
  }
,
{
  "crop_id": "raspberry",
  "common_name": "Raspberry (Red & Black)",
  "hindi_name": "\u0930\u0938\u092d\u0930\u0940",
  "regional_names": {
    "marathi": "\u0930\u093e\u0938\u094d\u092a\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a30\u0a38\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0bb0\u0bbe\u0bb8\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c30\u0c3e\u0c38\u0c4d\u0c2a\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Initiate light irrigation."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture to ensure pollination."
    },
    {
      "stage_name": "Fruit Set & Sizing",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Peak water demand, avoid waterlogging."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-120",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly to improve fruit sugar."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 40kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing of older leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint on leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Soft fruit, tip burn",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellowing between veins of new leaves",
        "solution": "Iron EDTA 20g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray fuzzy mold on fruit",
      "favorable_weather": "Cool, wet conditions",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected fruits"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at early bloom"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Spotted Wing Drosophila",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u094d\u092a\u0949\u091f\u0947\u0921 \u0935\u093f\u0902\u0917 \u0921\u094d\u0930\u094b\u0938\u094b\u092b\u093f\u0932\u093e",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prompt harvest",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply as fruit begins to color"
        }
      }
    },
    {
      "issue_name": "Raspberry Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u0924\u0928\u0947 \u0915\u093e \u091b\u0947\u0926\u0915",
      "symptoms": "Wilting cane tips",
      "favorable_weather": "Warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune below damage",
          "biological_spray": "Beauveria bassiana 50g/15L",
          "mechanical": "Burn infested canes"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorantraniliprole 18.5% SC",
          "commercial_reference": "Coragen",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "60ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early in season"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, brown roots",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Raised beds",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve drainage"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Nematodes",
      "type": "Nematode",
      "hindi_name": "\u0938\u0942\u0924\u094d\u0930\u0915\u0943\u092e\u093f",
      "symptoms": "Stunted growth, galls",
      "favorable_weather": "Sandy soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Crop rotation",
          "biological_spray": "Paecilomyces lilacinus 50g/15L",
          "mechanical": "Soil solarization"
        },
        "chemical_curative": {
          "active_ingredient": "Fluopyram 34.48% SC",
          "commercial_reference": "Velum Prime",
          "dose_per_15L_pump": "N/A",
          "dose_per_acre": "250ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Apply via drip"
        }
      }
    }
  ]
},
{
  "crop_id": "blackberry",
  "common_name": "Blackberry",
  "hindi_name": "\u092c\u094d\u0932\u0948\u0915\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u092c\u094d\u0932\u0945\u0915\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a2c\u0a32\u0a48\u0a15\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0baa\u0bbf\u0bb3\u0bbe\u0b95\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c2c\u0c4d\u0c32\u0c3e\u0c15\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Initiate light irrigation."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture to ensure pollination."
    },
    {
      "stage_name": "Fruit Set & Sizing",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Peak water demand, avoid waterlogging."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-120",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly to improve fruit sugar."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 40kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing of older leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint on leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Soft fruit, tip burn",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray fuzzy mold on fruit",
      "favorable_weather": "Cool, wet conditions",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected fruits"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at early bloom"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Spotted Wing Drosophila",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u094d\u092a\u0949\u091f\u0947\u0921 \u0935\u093f\u0902\u0917 \u0921\u094d\u0930\u094b\u0938\u094b\u092b\u093f\u0932\u093e",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prompt harvest",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply as fruit begins to color"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, brown roots",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Raised beds",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve drainage"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Cane Blight",
      "type": "Fungal",
      "hindi_name": "\u0915\u0947\u0928 \u092c\u094d\u0932\u093e\u0907\u091f",
      "symptoms": "Dark cankers on canes",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune out dead canes",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove infected canes"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray post-pruning"
        }
      }
    }
  ]
},
{
  "crop_id": "cranberry",
  "common_name": "Cranberry",
  "hindi_name": "\u0915\u094d\u0930\u0948\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0915\u094d\u0930\u0945\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a15\u0a30\u0a48\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bbf\u0bb0\u0bbe\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c15\u0c4d\u0c30\u0c3e\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain winter flood if applicable."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "31-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Drain beds, monitor frost."
    },
    {
      "stage_name": "Bloom",
      "day_range": "46-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Avoid overhead irrigation during day."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "71-90",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure adequate moisture."
    },
    {
      "stage_name": "Harvest",
      "day_range": "91-120",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Flood for harvest or maintain moisture for dry harvest."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.0-5.0",
    "basal_dose_per_acre": "N 10kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Poor growth, pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark green to purple leaves",
        "solution": "MAP 10kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "Potassium sulfate 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Poor fruit quality",
        "solution": "Gypsum 50kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Epsom salt 5kg/acre"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decayed fruits",
      "favorable_weather": "Warm, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Improve drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "50",
          "application_instructions": "Apply during bloom"
        }
      }
    },
    {
      "issue_name": "Cranberry Fruitworm",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u0932 \u091b\u0947\u0926\u0915",
      "symptoms": "Larvae inside fruit",
      "favorable_weather": "Warm summer",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Monitor with traps",
          "biological_spray": "Bt 50g/15L",
          "mechanical": "Flood beds"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorantraniliprole 18.5% SC",
          "commercial_reference": "Coragen",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "60ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray at egg hatch"
        }
      }
    },
    {
      "issue_name": "Upright Dieback",
      "type": "Fungal",
      "hindi_name": "\u0909\u0930\u094d\u0927\u094d\u0935 \u0915\u094d\u0937\u092f",
      "symptoms": "Browning of uprights",
      "favorable_weather": "Heat stress",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Reduce stress",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Prune dead vines"
        },
        "chemical_curative": {
          "active_ingredient": "Propiconazole 25% EC",
          "commercial_reference": "Tilt",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "45",
          "application_instructions": "Apply early season"
        }
      }
    },
    {
      "issue_name": "Black-headed Fireworm",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u093e\u092f\u0930\u0935\u0930\u094d\u092e",
      "symptoms": "Webbing of tips",
      "favorable_weather": "Spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Monitor",
          "biological_spray": "Spinosad 5ml/15L",
          "mechanical": "Spring flood"
        },
        "chemical_curative": {
          "active_ingredient": "Spinetoram 11.7% SC",
          "commercial_reference": "Delegate",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Apply at hatch"
        }
      }
    },
    {
      "issue_name": "Flea Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093f\u0938\u094d\u0938\u0942 \u092d\u0943\u0902\u0917",
      "symptoms": "Shot holes in leaves",
      "favorable_weather": "Dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean borders",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Thiamethoxam 25% WG",
          "commercial_reference": "Actara",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Phytophthora Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting, poor roots",
      "favorable_weather": "Waterlogged soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Improve beds"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    }
  ]
},
{
  "crop_id": "gooseberry",
  "common_name": "Gooseberry (Cape & European)",
  "hindi_name": "\u0915\u0947\u092a \u0917\u0942\u091c\u092c\u0947\u0930\u0940 / \u092e\u0915\u094b\u092f",
  "regional_names": {
    "marathi": "\u0917\u0942\u091c\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a17\u0a42\u0a1c\u0a3c\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bc2\u0bb8\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c17\u0c42\u0c38\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Seedling/Transplant",
      "day_range": "0-30",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Keep soil moist for establishment."
    },
    {
      "stage_name": "Vegetative Growth",
      "day_range": "31-60",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Promote branching."
    },
    {
      "stage_name": "Flowering",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Do not stress for water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "81-100",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Adequate moisture for calyx development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "101-140",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water to prevent fruit cracking."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-7.0",
    "basal_dose_per_acre": "FYM 8 tons, N 20kg, P 30kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Stunted growth, pale leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark green to purple leaves",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Poor fruit size, marginal burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Calcium",
        "symptoms": "Blossom end rot in fruits",
        "solution": "Calcium Nitrate 50g/15L pump"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots on leaves and fruit",
      "favorable_weather": "Dry, warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Adequate spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune affected parts"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Apply at first sign of disease"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Fruit Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u092b\u0932 \u091b\u0947\u0926\u0915",
      "symptoms": "Holes in fruit",
      "favorable_weather": "Warm weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove damaged fruits",
          "biological_spray": "Bt 50g/15L",
          "mechanical": "Pheromone traps"
        },
        "chemical_curative": {
          "active_ingredient": "Emamectin benzoate 5% SG",
          "commercial_reference": "Proclaim",
          "dose_per_15L_pump": "7g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at egg hatch"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air circulation",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove debris"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray focusing on undersides"
        }
      }
    },
    {
      "issue_name": "Whitefly",
      "type": "Insect-Pest",
      "hindi_name": "\u0938\u092b\u0947\u0926 \u092e\u0915\u094d\u0916\u0940",
      "symptoms": "Yellowing leaves, honeydew",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Yellow sticky traps",
          "biological_spray": "Beauveria bassiana 50g/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Diafenthiuron 50% WP",
          "commercial_reference": "Pegasus",
          "dose_per_15L_pump": "25g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray thoroughly"
        }
      }
    }
  ]
},
{
  "crop_id": "blackcurrant",
  "common_name": "Blackcurrant",
  "hindi_name": "\u0915\u093e\u0932\u0940 \u0915\u093f\u0936\u092e\u093f\u0936 (\u092c\u094d\u0932\u0948\u0915\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u092c\u094d\u0932\u0945\u0915\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a2c\u0a32\u0a48\u0a15\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0b95\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c2c\u0c4d\u0c32\u0c3e\u0c15\u0c4d \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "16-35",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "36-55",
      "water_requirement_sensitivity": "High",
      "stage_advice": "High water demand."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "56-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-110",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 40kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellow young leaves",
        "solution": "Iron EDTA 20g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Gall Mite",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0949\u0932 \u092e\u093e\u0907\u091f",
      "symptoms": "Swollen buds (big bud)",
      "favorable_weather": "Spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Resistant varieties",
          "biological_spray": "Sulfur 80% WP 40g/15L",
          "mechanical": "Remove galls"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply pre-bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "redcurrant",
  "common_name": "Redcurrant",
  "hindi_name": "\u0932\u093e\u0932 \u0915\u093f\u0936\u092e\u093f\u0936 (\u0930\u0947\u0921\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u0930\u0947\u0921\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a30\u0a48\u0a71\u0a21\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0b9a\u0bbf\u0bb5\u0baa\u0bcd\u0baa\u0bc1 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c0e\u0c30\u0c4d\u0c30 \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering & Fruit Set",
      "day_range": "16-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "41-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "76-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "whitecurrant",
  "common_name": "Whitecurrant",
  "hindi_name": "\u0938\u092b\u0947\u0926 \u0915\u093f\u0936\u092e\u093f\u0936 (\u0935\u094d\u0939\u093e\u0907\u091f\u0915\u0930\u0902\u091f)",
  "regional_names": {
    "marathi": "\u0935\u094d\u0939\u093e\u0908\u091f\u0915\u0930\u0902\u091f",
    "punjabi": "\u0a35\u0a3e\u0a08\u0a1f\u0a15\u0a30\u0a70\u0a1f",
    "tamil": "\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bc8 \u0ba4\u0bbf\u0bb0\u0bbe\u0b9f\u0bcd\u0b9a\u0bc8 \u0bb5\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
    "telugu": "\u0c24\u0c46\u0c32\u0c4d\u0c32 \u0c15\u0c30\u0c46\u0c02\u0c1f\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Burst",
      "day_range": "0-15",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Ensure moist soil."
    },
    {
      "stage_name": "Flowering & Fruit Set",
      "day_range": "16-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield, protect from frost."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "41-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain irrigation."
    },
    {
      "stage_name": "Harvest",
      "day_range": "76-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.8",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L pump"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Encourage ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Currant Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested canes",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray stems"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Humid, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Good spacing",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Brown spots on leaves",
      "favorable_weather": "Wet weather",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove fallen leaves",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Air circulation"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Botrytis",
      "type": "Fungal",
      "hindi_name": "\u0917\u094d\u0930\u0947 \u092e\u094b\u0932\u094d\u0921",
      "symptoms": "Rotting fruit",
      "favorable_weather": "Humid, cool",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Captan 50% WP",
          "commercial_reference": "Captaf",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray at bloom"
        }
      }
    }
  ]
},
{
  "crop_id": "elderberry",
  "common_name": "Elderberry",
  "hindi_name": "\u090f\u0932\u094d\u0921\u0930\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u090f\u0932\u094d\u0921\u0930\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a10\u0a32\u0a21\u0a30\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b8e\u0bb2\u0bcd\u0b9f\u0bb0\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c0e\u0c32\u0c4d\u0c21\u0c30\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain soil moisture."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-50",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Adequate water needed."
    },
    {
      "stage_name": "Fruit Development",
      "day_range": "51-90",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "91-120",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Allow clusters to ripen completely."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "5.5-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 20kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Stunted growth",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Yellowing of young leaves",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Elder Shoot Borer",
      "type": "Insect-Pest",
      "hindi_name": "\u091b\u0947\u0926\u0915",
      "symptoms": "Wilting shoots, frass",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune infested",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray base"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940 \u0915\u093e \u091c\u093e\u0932\u093e",
      "symptoms": "Stippling, webbing",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Maintain humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Rust",
      "type": "Fungal",
      "hindi_name": "\u0930\u0924\u0941\u0906",
      "symptoms": "Orange pustules",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Remove alternate hosts",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves, honeydew",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    }
  ]
},
{
  "crop_id": "lingonberry",
  "common_name": "Lingonberry",
  "hindi_name": "\u0932\u093f\u0902\u0917\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0932\u093f\u0902\u0917\u094b\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a32\u0a3f\u0a70\u0a17\u0a4b\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0bb2\u0bbf\u0b99\u0bcd\u0b95\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c32\u0c3f\u0c02\u0c17\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Maintain moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure irrigation."
    },
    {
      "stage_name": "Fruit Set & Growth",
      "day_range": "41-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "71-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.5-5.5",
    "basal_dose_per_acre": "N 20kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark leaves",
        "solution": "MAP 10kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Leaf scorch",
        "solution": "Potassium sulfate 10kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decaying fruit",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Apply at bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Spots on leaves",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air flow",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray as needed"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "boysenberry",
  "common_name": "Boysenberry",
  "hindi_name": "\u092c\u0949\u092f\u091c\u0928\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u092c\u0949\u092f\u091c\u0947\u0928\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a2c\u0a4b\u0a2f\u0a38\u0a47\u0a28\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0baa\u0bbe\u0baf\u0bcd\u0b9a\u0ba9\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c2c\u0c3e\u0c2f\u0c4d\u0c38\u0c46\u0c28\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi",
    "Zaid"
  ],
  "critical_stages": [
    {
      "stage_name": "Dormancy",
      "day_range": "0-30",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Keep soil moderately dry."
    },
    {
      "stage_name": "Flowering",
      "day_range": "31-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Maintain even moisture."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "61-80",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield."
    },
    {
      "stage_name": "Harvest",
      "day_range": "81-110",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 30kg, P 30kg, K 30kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Purple tint",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf burn",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Botrytis Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Gray mold",
      "favorable_weather": "Cool, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Fenhexamid 50% WG",
          "commercial_reference": "Teldor",
          "dose_per_15L_pump": "15g",
          "dose_per_acre": "200g in 200L",
          "waiting_period_phi": "1",
          "application_instructions": "Spray early bloom"
        }
      }
    },
    {
      "issue_name": "Cane Blight",
      "type": "Fungal",
      "hindi_name": "\u0915\u0947\u0928 \u092c\u094d\u0932\u093e\u0907\u091f",
      "symptoms": "Dark cankers",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Prune dead canes",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Burn prunings"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray post-pruning"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "Sticky traps"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Root Rot",
      "type": "Fungal",
      "hindi_name": "\u091c\u0921\u093c \u0938\u0921\u093c\u0928",
      "symptoms": "Wilting",
      "favorable_weather": "Poor drainage",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Metalaxyl 35% WS",
          "commercial_reference": "Ridomil",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    }
  ]
},
{
  "crop_id": "cloudberry",
  "common_name": "Cloudberry",
  "hindi_name": "\u0915\u094d\u0932\u093e\u0909\u0921\u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0915\u094d\u0932\u093e\u0909\u0921\u092c\u0947\u0930\u0940",
    "punjabi": "\u0a15\u0a32\u0a3e\u0a0a\u0a21\u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bbf\u0bb3\u0bb5\u0bc1\u0b9f\u0bcd\u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c15\u0c4d\u0c32\u0c4c\u0c21\u0c4d\u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Bud Break",
      "day_range": "0-20",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moist soil."
    },
    {
      "stage_name": "Flowering",
      "day_range": "21-40",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Ensure irrigation."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "41-70",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for sizing."
    },
    {
      "stage_name": "Harvest",
      "day_range": "71-100",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Reduce water slightly."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "3.5-4.5",
    "basal_dose_per_acre": "N 10kg, P 10kg, K 10kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Pale leaves",
        "solution": "Ammonium sulfate 10kg/acre"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Dark leaves",
        "solution": "MAP 5kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Fruit Rot",
      "type": "Fungal",
      "hindi_name": "\u092b\u0932 \u0938\u0921\u093c\u0928",
      "symptoms": "Decaying fruit",
      "favorable_weather": "Wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Remove trash"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorothalonil 75% WP",
          "commercial_reference": "Kavach",
          "dose_per_15L_pump": "30g",
          "dose_per_acre": "400g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Apply at bloom"
        }
      }
    },
    {
      "issue_name": "Leaf Spot",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u0927\u092c\u094d\u092c\u093e",
      "symptoms": "Spots on leaves",
      "favorable_weather": "Humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air flow",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray as needed"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "sea-buckthorn",
  "common_name": "Sea Buckthorn",
  "hindi_name": "\u0938\u0940\u092c\u0915\u0925\u0949\u0930\u094d\u0928",
  "regional_names": {
    "marathi": "\u0938\u0940\u092c\u0915\u0925\u0949\u0930\u094d\u0928",
    "punjabi": "\u0a38\u0a40\u0a2c\u0a15\u0a25\u0a4c\u0a30\u0a28",
    "tamil": "\u0b9a\u0bc0\u0baa\u0b95\u0bcd\u0ba4\u0bbe\u0bb0\u0bcd\u0ba9\u0bcd",
    "telugu": "\u0c38\u0c40\u0c2c\u0c15\u0c4d\u0c25\u0c3e\u0c30\u0c4d\u0c28\u0c4d"
  },
  "category": "Fruit",
  "season": [
    "Kharif",
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Establishment",
      "day_range": "0-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Regular watering for deep roots."
    },
    {
      "stage_name": "Bud Break",
      "day_range": "61-90",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moisture."
    },
    {
      "stage_name": "Flowering",
      "day_range": "91-110",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs adequate water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "111-140",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "141-170",
      "water_requirement_sensitivity": "Low",
      "stage_advice": "Reduce water."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.0-7.5",
    "basal_dose_per_acre": "FYM 10 tons, P 20kg, K 20kg (fixes own N)",
    "deficiencies": [
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      },
      {
        "nutrient": "Zinc",
        "symptoms": "Little leaf",
        "solution": "Zinc sulphate 15g/15L"
      },
      {
        "nutrient": "Boron",
        "symptoms": "Poor fruit set",
        "solution": "Borax 20g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Sea Buckthorn Fly",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u094d\u0916\u0940",
      "symptoms": "Maggots in fruit",
      "favorable_weather": "Warm summer",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Yellow sticky traps",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Dimethoate 30% EC",
          "commercial_reference": "Rogor",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Fusarium Wilt",
      "type": "Fungal",
      "hindi_name": "\u0909\u0915\u0920\u093e \u0930\u094b\u0917",
      "symptoms": "Wilting, yellowing",
      "favorable_weather": "Warm, wet soil",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Drainage",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Carbendazim 50% WP",
          "commercial_reference": "Bavistin",
          "dose_per_15L_pump": "20g",
          "dose_per_acre": "300g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Soil drench"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Spider Mites",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0915\u0921\u093c\u0940",
      "symptoms": "Stippling",
      "favorable_weather": "Hot, dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Humidity",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "3",
          "application_instructions": "Spray undersides"
        }
      }
    }
  ]
},
{
  "crop_id": "goji-berry",
  "common_name": "Goji Berry / Wolfberry",
  "hindi_name": "\u0917\u094b\u091c\u0940 \u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0917\u094b\u091c\u0940 \u092c\u0947\u0930\u0940",
    "punjabi": "\u0a17\u0a4b\u0a1c\u0a40 \u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b95\u0bcb\u0b9c\u0bbf \u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c17\u0c4b\u0c1c\u0c40 \u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif",
    "Rabi"
  ],
  "critical_stages": [
    {
      "stage_name": "Vegetative",
      "day_range": "0-45",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Establish deep roots."
    },
    {
      "stage_name": "Flowering",
      "day_range": "46-75",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs adequate water."
    },
    {
      "stage_name": "Fruit Set",
      "day_range": "76-105",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for berry development."
    },
    {
      "stage_name": "Harvest",
      "day_range": "106-150",
      "water_requirement_sensitivity": "Medium",
      "stage_advice": "Maintain moderate moisture."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "6.8-8.1",
    "basal_dose_per_acre": "FYM 8 tons, N 30kg, P 20kg, K 20kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L pump"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Iron",
        "symptoms": "Interveinal chlorosis",
        "solution": "Iron EDTA 20g/15L"
      },
      {
        "nutrient": "Zinc",
        "symptoms": "Little leaf",
        "solution": "Zinc sulphate 15g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Goji Gall Mite",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0949\u0932 \u092e\u093e\u0907\u091f",
      "symptoms": "Blisters on leaves",
      "favorable_weather": "Warm spring",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Resistant varieties",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Remove galls"
        },
        "chemical_curative": {
          "active_ingredient": "Spiromesifen 22.9% SC",
          "commercial_reference": "Oberon",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Aphids",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u093e\u0939\u0942",
      "symptoms": "Curled leaves",
      "favorable_weather": "Cool, moist",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Ladybugs",
          "biological_spray": "Verticillium lecanii 50g/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Imidacloprid 17.8% SL",
          "commercial_reference": "Confidor",
          "dose_per_15L_pump": "5ml",
          "dose_per_acre": "75ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Spray early"
        }
      }
    },
    {
      "issue_name": "Powdery Mildew",
      "type": "Fungal",
      "hindi_name": "\u092a\u093e\u0909\u0921\u0930\u0940 \u092e\u093f\u0932\u094d\u0921\u094d\u092f\u0942",
      "symptoms": "White powdery spots",
      "favorable_weather": "Dry, warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Spacing",
          "biological_spray": "Bacillus subtilis 50ml/15L",
          "mechanical": "Prune"
        },
        "chemical_curative": {
          "active_ingredient": "Myclobutanil 10% WP",
          "commercial_reference": "Systhane",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "150g in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Apply early"
        }
      }
    },
    {
      "issue_name": "Anthracnose",
      "type": "Fungal",
      "hindi_name": "\u090f\u0928\u094d\u0925\u094d\u0930\u0947\u0915\u094d\u0928\u094b\u091c",
      "symptoms": "Dark lesions on fruit",
      "favorable_weather": "Warm, wet",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Canopy management",
          "biological_spray": "Pseudomonas 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Azoxystrobin 23% SC",
          "commercial_reference": "Amistar",
          "dose_per_15L_pump": "15ml",
          "dose_per_acre": "200ml in 200L",
          "waiting_period_phi": "7",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Flea Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093f\u0938\u094d\u0938\u0942 \u092d\u0943\u0902\u0917",
      "symptoms": "Shot holes",
      "favorable_weather": "Dry",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean borders",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "N/A"
        },
        "chemical_curative": {
          "active_ingredient": "Thiamethoxam 25% WG",
          "commercial_reference": "Actara",
          "dose_per_15L_pump": "10g",
          "dose_per_acre": "100g in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Foliar spray"
        }
      }
    }
  ]
},
{
  "crop_id": "acai-berry",
  "common_name": "Acai Berry",
  "hindi_name": "\u0905\u0938\u093e\u0908 \u092c\u0947\u0930\u0940",
  "regional_names": {
    "marathi": "\u0905\u0938\u093e\u0908 \u092c\u0947\u0930\u0940",
    "punjabi": "\u0a05\u0a38\u0a3e\u0a08 \u0a2c\u0a47\u0a30\u0a40",
    "tamil": "\u0b85\u0b9a\u0bbe\u0baf\u0bcd \u0baa\u0bc6\u0bb0\u0bcd\u0bb0\u0bbf",
    "telugu": "\u0c05\u0c38\u0c48 \u0c2c\u0c46\u0c30\u0c4d\u0c30\u0c40"
  },
  "category": "Fruit",
  "season": [
    "Kharif"
  ],
  "critical_stages": [
    {
      "stage_name": "Seedling",
      "day_range": "0-60",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Keep moist."
    },
    {
      "stage_name": "Vegetative",
      "day_range": "61-120",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Needs high humidity."
    },
    {
      "stage_name": "Flowering",
      "day_range": "121-150",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Consistent water."
    },
    {
      "stage_name": "Fruiting",
      "day_range": "151-180",
      "water_requirement_sensitivity": "High",
      "stage_advice": "Crucial for yield."
    }
  ],
  "soil_and_nutrition": {
    "ph_range": "4.5-6.5",
    "basal_dose_per_acre": "FYM 10 tons, N 40kg, P 20kg, K 40kg",
    "deficiencies": [
      {
        "nutrient": "Nitrogen",
        "symptoms": "Yellowing leaves",
        "solution": "Urea 100g/15L"
      },
      {
        "nutrient": "Phosphorus",
        "symptoms": "Poor root growth",
        "solution": "DAP 20kg/acre"
      },
      {
        "nutrient": "Potassium",
        "symptoms": "Marginal leaf scorch",
        "solution": "MOP 15kg/acre"
      },
      {
        "nutrient": "Magnesium",
        "symptoms": "Interveinal chlorosis",
        "solution": "Magnesium Sulphate 50g/15L"
      }
    ]
  },
  "pest_and_disease_solutions": [
    {
      "issue_name": "Palm Weevil",
      "type": "Insect-Pest",
      "hindi_name": "\u092a\u093e\u092e \u0935\u0940\u0935\u093f\u0932",
      "symptoms": "Holes in trunk",
      "favorable_weather": "Warm, humid",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Traps",
          "biological_spray": "Beauveria 50g/15L",
          "mechanical": "Remove infested"
        },
        "chemical_curative": {
          "active_ingredient": "Chlorpyrifos 20% EC",
          "commercial_reference": "Dursban",
          "dose_per_15L_pump": "30ml",
          "dose_per_acre": "400ml in 200L",
          "waiting_period_phi": "30",
          "application_instructions": "Spray trunk"
        }
      }
    },
    {
      "issue_name": "Rhinoceros Beetle",
      "type": "Insect-Pest",
      "hindi_name": "\u0917\u0948\u0902\u0921\u093e \u092d\u0943\u0902\u0917",
      "symptoms": "Chewed fronds",
      "favorable_weather": "Warm",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Clean plantation",
          "biological_spray": "Metarhizium 50g/15L",
          "mechanical": "Traps"
        },
        "chemical_curative": {
          "active_ingredient": "Carbaryl 50% WP",
          "commercial_reference": "Sevin",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Apply in leaf axils"
        }
      }
    },
    {
      "issue_name": "Leaf Blight",
      "type": "Fungal",
      "hindi_name": "\u092a\u0924\u094d\u0924\u0940 \u091d\u0941\u0932\u0938\u093e",
      "symptoms": "Brown lesions",
      "favorable_weather": "High humidity",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Air circulation",
          "biological_spray": "Trichoderma 50g/15L",
          "mechanical": "Remove infected"
        },
        "chemical_curative": {
          "active_ingredient": "Mancozeb 75% WP",
          "commercial_reference": "Dithane M-45",
          "dose_per_15L_pump": "40g",
          "dose_per_acre": "500g in 200L",
          "waiting_period_phi": "14",
          "application_instructions": "Foliar spray"
        }
      }
    },
    {
      "issue_name": "Mealybug",
      "type": "Insect-Pest",
      "hindi_name": "\u092e\u0940\u0932\u0940 \u092c\u0917",
      "symptoms": "White cottony masses",
      "favorable_weather": "Dry spells",
      "solutions": {
        "organic_ipm": {
          "preventive_measures": "Predator beetles",
          "biological_spray": "Neem oil 50ml/15L",
          "mechanical": "Water spray"
        },
        "chemical_curative": {
          "active_ingredient": "Profenofos 50% EC",
          "commercial_reference": "Curacron",
          "dose_per_15L_pump": "20ml",
          "dose_per_acre": "300ml in 200L",
          "waiting_period_phi": "15",
          "application_instructions": "Spray thoroughly"
        }
      }
    }
  ]
}
];
