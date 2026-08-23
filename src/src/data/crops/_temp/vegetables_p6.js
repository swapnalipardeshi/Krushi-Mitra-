export const data = [
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
