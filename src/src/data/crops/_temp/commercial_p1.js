export const data = [
  {
    "crop_id": "tea",
    "common_name": "Tea",
    "hindi_name": "चाय",
    "regional_names": {
      "assamese": "Chah",
      "bengali": "Cha",
      "tamil": "Teyilai",
      "malayalam": "Teyila"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-180 days", "water_requirement_sensitivity": "High", "stage_advice": "Maintain shade and high humidity." },
      { "stage_name": "Young Tea", "day_range": "1-3 years", "water_requirement_sensitivity": "High", "stage_advice": "Form frame by pruning and centering." },
      { "stage_name": "Prune Recovery", "day_range": "30-60 days post prune", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect new buds from blister blight." },
      { "stage_name": "Active Flush", "day_range": "Seasonal peaks", "water_requirement_sensitivity": "High", "stage_advice": "Ensure adequate nitrogen supply." },
      { "stage_name": "Dormancy", "day_range": "Winter months", "water_requirement_sensitivity": "Low", "stage_advice": "Withhold fertilizers, manage weeds." },
      { "stage_name": "Tipping", "day_range": "Post recovery", "water_requirement_sensitivity": "Medium", "stage_advice": "Tip at correct height to establish plucking table." },
      { "stage_name": "Plucking Rounds", "day_range": "Every 7-14 days", "water_requirement_sensitivity": "High", "stage_advice": "Maintain standard plucking (two leaves and a bud)." }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-5.5",
      "basal_dose_per_acre": "NPK 40:20:20 kg/acre (maintenance)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, stunted growth, reduced flush.", "solution": "Urea 2 kg/100L water spray; soil application as per schedule." },
        { "nutrient": "Potassium", "symptoms": "Marginal necrosis and tip burn on older leaves.", "solution": "Muriate of Potash (MOP) application." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis on older leaves (inverted V shape).", "solution": "Magnesium Sulphate 200g/15L pump spray." },
        { "nutrient": "Zinc", "symptoms": "Little leaf, rosetting, chlorosis of young leaves.", "solution": "Zinc Sulphate 30g + 15g Urea/15L pump spray." },
        { "nutrient": "Sulphur", "symptoms": "Yellowing of young leaves (Tea Yellows).", "solution": "Sulphur 80% WDG 30g/15L pump spray." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on youngest leaves, turning white.", "solution": "Ferrous Sulphate 50g/15L pump." },
        { "nutrient": "Manganese", "symptoms": "Mottled chlorosis on young leaves.", "solution": "Manganese Sulphate 30g/15L pump." },
        { "nutrient": "Boron", "symptoms": "Thickened, brittle leaves, dieback of shoots.", "solution": "Borax 20g/15L pump spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Blister Blight",
        "type": "Fungal",
        "hindi_name": "फफोलेदार झुलसा",
        "symptoms": "Translucent spots on young leaves turning into white blister-like growths on the undersurface.",
        "favorable_weather": "High humidity >80%, misty weather, temperature 15-20°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Prune shade trees to allow sunlight, control weed growth.",
            "biological_spray": "Pseudomonas fluorescens 10g/L.",
            "mechanical": "Pluck infected shoots early."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC or Copper Oxychloride 50% WP",
            "commercial_reference": "Contaf / Blitox",
            "dose_per_15L_pump": "30 ml (Hexa) or 40g (COC)",
            "dose_per_acre": "400 ml or 500g in 200L water",
            "waiting_period_phi": "7-14 days",
            "application_instructions": "Spray immediately after plucking, covering the upper canopy."
          }
        }
      },
      {
        "issue_name": "Tea Mosquito Bug",
        "type": "Insect-Pest",
        "hindi_name": "टी मॉस्किटो बग",
        "symptoms": "Water-soaked lesions on young shoots which turn dark brown/black; stems curl and die back.",
        "favorable_weather": "Warm and humid conditions, post-monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management, avoid dense shade.",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG or Quinalphos 25% EC",
            "commercial_reference": "Actara / Ekalux",
            "dose_per_15L_pump": "5g or 30ml",
            "dose_per_acre": "100g or 400ml",
            "waiting_period_phi": "10-15 days",
            "application_instructions": "Spray during early morning or late evening."
          }
        }
      },
      {
        "issue_name": "Red Spider Mite",
        "type": "Insect-Pest",
        "hindi_name": "लाल मकड़ी",
        "symptoms": "Upper surface of mature leaves turns coppery-brown or bronze. Fine webbing may be seen.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain shade, ensure soil moisture.",
            "biological_spray": "Neem oil 1500ppm 50ml/15L pump.",
            "mechanical": "Pluck infested leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC or Fenazaquin 10% EC",
            "commercial_reference": "Omite / Magister",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Thorough coverage of foliage is essential."
          }
        }
      },
      {
        "issue_name": "Black Rot",
        "type": "Fungal",
        "hindi_name": "काला सड़ांध",
        "symptoms": "Leaves turn black, rot, and remain suspended by a mycelial thread.",
        "favorable_weather": "Continuous rain and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve aeration by plucking/skiffing.",
            "biological_spray": "Trichoderma viride soil/foliar application.",
            "mechanical": "Remove infected branches."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray focusing on the lower canopy and stems."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coffee",
    "common_name": "Coffee",
    "hindi_name": "कॉफी",
    "regional_names": {
      "kannada": "Kaapi",
      "malayalam": "Kaappi",
      "tamil": "Kaapi"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-6 months", "water_requirement_sensitivity": "High", "stage_advice": "Protect from direct sun, ensure good drainage." },
      { "stage_name": "Establishment", "day_range": "1-3 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Train plants (single vs multiple stem system)." },
      { "stage_name": "Blossom", "day_range": "Post blossom showers", "water_requirement_sensitivity": "High", "stage_advice": "Crucial period for fruit set." },
      { "stage_name": "Berry Development", "day_range": "May to September", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply main nutrient doses." },
      { "stage_name": "Backing", "day_range": "Post monsoon", "water_requirement_sensitivity": "Medium", "stage_advice": "Provide backing showers if no rain." },
      { "stage_name": "Ripening", "day_range": "October-December", "water_requirement_sensitivity": "Low", "stage_advice": "Berries turn from green to red." },
      { "stage_name": "Harvest", "day_range": "Nov-Feb", "water_requirement_sensitivity": "Low", "stage_advice": "Selective hand picking of ripe cherries." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-6.5",
      "basal_dose_per_acre": "NPK 60:40:40 kg/acre (Arabica)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "General yellowing starting from older leaves, poor growth.", "solution": "Urea application to soil; foliar spray 2%." },
        { "nutrient": "Phosphorus", "symptoms": "Bronze or purplish tint on older leaves.", "solution": "Rock phosphate or DAP application." },
        { "nutrient": "Potassium", "symptoms": "Marginal scorching and drying of older leaves.", "solution": "MOP application 20kg/acre." },
        { "nutrient": "Zinc", "symptoms": "Rosetting, very small narrow leaves.", "solution": "Zinc Sulphate 50g/15L pump." },
        { "nutrient": "Magnesium", "symptoms": "Interveinal chlorosis (yellowing between green veins).", "solution": "Magnesium Sulphate 20kg/acre to soil." },
        { "nutrient": "Boron", "symptoms": "Crinkled, asymmetrical young leaves.", "solution": "Borax 20g/15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Coffee Berry Borer",
        "type": "Insect-Pest",
        "hindi_name": "कॉफी बेरी बोरर",
        "symptoms": "Small pinhole at the tip of the berries; internal feeding leads to drop or poor quality beans.",
        "favorable_weather": "Humid weather during berry development.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean harvest, remove left-over berries (gleanings).",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Broca traps with ethanol:methanol (1:1)."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "45 ml",
            "dose_per_acre": "600 ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray mainly on developing berries."
          }
        }
      },
      {
        "issue_name": "Coffee Leaf Rust",
        "type": "Fungal",
        "hindi_name": "पत्ती रोली",
        "symptoms": "Pale yellow spots on upper leaf surface, orange powdery patches on the lower surface. Causes severe defoliation.",
        "favorable_weather": "Continuous wet weather and high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plant resistant varieties (e.g., Chandragiri), maintain optimal shade.",
            "biological_spray": "Pseudomonas fluorescens 10g/L.",
            "mechanical": "Remove severely infected leaves if practical."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC or Bordeaux mixture (0.5%)",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "20 days",
            "application_instructions": "Pre-monsoon and post-monsoon sprays are critical."
          }
        }
      },
      {
        "issue_name": "White Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "सफेद तना छेदक",
        "symptoms": "Yellowing of leaves, wilting of branches, ridges on the main stem. Mainly affects Arabica.",
        "favorable_weather": "Hot, dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain good shade, trace and uproot heavily infested plants before monsoon.",
            "biological_spray": "N/A - physical removal is key.",
            "mechanical": "Scrubbing the main stem to remove loose bark and eggs."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC (for stem swabbing)",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "60 ml (swabbing solution)",
            "dose_per_acre": "N/A (swab directly on stems)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Swab the main stem and thick primaries during April-May and Oct-Nov."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cocoa",
    "common_name": "Cocoa",
    "hindi_name": "कोको",
    "regional_names": {
      "malayalam": "Cocoa",
      "kannada": "Cocoa"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-6 months", "water_requirement_sensitivity": "High", "stage_advice": "Provide 50% shade." },
      { "stage_name": "Jorquetting", "day_range": "1-1.5 years", "water_requirement_sensitivity": "Medium", "stage_advice": "First branching (jorquette) formation." },
      { "stage_name": "Flowering", "day_range": "Continuous after 3 years", "water_requirement_sensitivity": "High", "stage_advice": "Requires midges for pollination." },
      { "stage_name": "Cherelle Wilt", "day_range": "Early pod stage", "water_requirement_sensitivity": "High", "stage_advice": "Natural physiological thinning, manage stress." },
      { "stage_name": "Pod Development", "day_range": "150-170 days from fruit set", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure adequate potassium." },
      { "stage_name": "Harvesting", "day_range": "Peak in Oct-Dec & Apr-Jun", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest ripe pods carefully without damaging the cushion." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "NPK 100:40:140 g/tree/year",
      "deficiencies": [
        { "nutrient": "Potassium", "symptoms": "Yellowing of leaf margins turning into brown necrosis.", "solution": "MOP soil application." },
        { "nutrient": "Zinc", "symptoms": "Sickle shaped leaves, short internodes.", "solution": "Zinc Sulphate 30g/15L pump foliar spray." },
        { "nutrient": "Nitrogen", "symptoms": "Pale green to yellow entire leaf.", "solution": "Urea application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Black Pod Disease",
        "type": "Fungal",
        "hindi_name": "ब्लैक पॉड",
        "symptoms": "Brown/black spots on pods expanding rapidly to cover the entire pod. White mycelial growth may appear.",
        "favorable_weather": "Heavy rainfall, high humidity, cool temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Frequent harvesting, prune to increase aeration.",
            "biological_spray": "Trichoderma viride paste on lesions.",
            "mechanical": "Remove and destroy infected pods."
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP or Metalaxyl + Mancozeb",
            "commercial_reference": "Blitox / Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400-500g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on pods and foliage before monsoon."
          }
        }
      },
      {
        "issue_name": "Tea Mosquito Bug",
        "type": "Insect-Pest",
        "hindi_name": "टी मॉस्किटो बग",
        "symptoms": "Feeding lesions on pods leading to corky patches, distortion, and sometimes cherelle wilt.",
        "favorable_weather": "New flush periods, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Shade regulation.",
            "biological_spray": "Neem oil 1500ppm @ 50ml/15L.",
            "mechanical": "Pruning of water shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5-7 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray on flushes and young pods."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rubber",
    "common_name": "Rubber",
    "hindi_name": "रबर",
    "regional_names": {
      "malayalam": "Rubber",
      "kannada": "Rubber"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "1-2 years", "water_requirement_sensitivity": "High", "stage_advice": "Bud grafting preparation." },
      { "stage_name": "Immature", "day_range": "Years 1-7", "water_requirement_sensitivity": "Medium", "stage_advice": "Establish cover crops, form clear trunk." },
      { "stage_name": "Pre-tapping", "day_range": "Year 6-7", "water_requirement_sensitivity": "Low", "stage_advice": "Assess trunk girth (should be ~50cm)." },
      { "stage_name": "Tapping", "day_range": "Year 7 onwards", "water_requirement_sensitivity": "Medium", "stage_advice": "Tap early morning, avoid tapping on rainy days." },
      { "stage_name": "Wintering", "day_range": "Dec-Feb", "water_requirement_sensitivity": "Low", "stage_advice": "Natural leaf fall; suspend tapping if yield drops." },
      { "stage_name": "Re-foliation", "day_range": "Feb-Mar", "water_requirement_sensitivity": "Medium", "stage_advice": "New leaves emerge; highly susceptible to diseases." }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-6.0",
      "basal_dose_per_acre": "NPK 30:30:30 kg/acre (mature)",
      "deficiencies": [
        { "nutrient": "Magnesium", "symptoms": "Yellowing between veins on older leaves, extending to margins.", "solution": "Magnesium sulphate 50g/15L pump." },
        { "nutrient": "Potassium", "symptoms": "Marginal yellowing/browning of leaves.", "solution": "MOP application." },
        { "nutrient": "Zinc", "symptoms": "Narrow, reduced leaves with chlorotic margins.", "solution": "Zinc sulphate 30g/15L pump." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Abnormal Leaf Fall",
        "type": "Fungal",
        "hindi_name": "असामान्य पत्ती झड़ना (फाइटोफ्थोरा)",
        "symptoms": "Black lesion with a drop of latex on the petiole, followed by shedding of green leaves.",
        "favorable_weather": "Heavy monsoon rains, high humidity, low temperature.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed clearing, proper drainage.",
            "biological_spray": "Not highly effective during severe monsoon.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Copper Oxychloride 50% WP in oil (prophylactic)",
            "commercial_reference": "Blitox + Spray Oil",
            "dose_per_15L_pump": "Not applied by pump (aerial/micron sprayer)",
            "dose_per_acre": "1-2 kg COC in 5-6 liters of spray oil per hectare",
            "waiting_period_phi": "N/A",
            "application_instructions": "Pre-monsoon spraying using mist blower."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "चूर्णी फफूंदी",
        "symptoms": "White powdery growth on young tender leaves causing them to curl, crinkle, and fall.",
        "favorable_weather": "Misty mornings, cool temperatures during refoliation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid late wintering clones.",
            "biological_spray": "Ampelomyces quisqualis.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Sulphur Dust 85% DP or Hexaconazole 5% EC",
            "commercial_reference": "Sulfex / Contaf",
            "dose_per_15L_pump": "30 ml (Hexa) or dust directly",
            "dose_per_acre": "11-14 kg sulphur dust per hectare",
            "waiting_period_phi": "N/A",
            "application_instructions": "Dusting at 3-8 day intervals during refoliation."
          }
        }
      }
    ]
  },
  {
    "crop_id": "tobacco",
    "common_name": "Tobacco",
    "hindi_name": "तम्बाकू",
    "regional_names": {
      "gujarati": "Tambaku",
      "telugu": "Pogaku"
    },
    "category": "Cash Crop",
    "season": ["Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-45 days", "water_requirement_sensitivity": "High", "stage_advice": "Protect from damping off." },
      { "stage_name": "Transplanting", "day_range": "45-55 days", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate immediately after transplanting." },
      { "stage_name": "Vegetative Growth", "day_range": "55-90 days", "water_requirement_sensitivity": "Medium", "stage_advice": "Top dressing of fertilizers." },
      { "stage_name": "Topping", "day_range": "When flower buds appear", "water_requirement_sensitivity": "Low", "stage_advice": "Remove terminal bud to increase leaf size." },
      { "stage_name": "Desuckering", "day_range": "Post topping", "water_requirement_sensitivity": "Low", "stage_advice": "Remove axillary buds (suckers)." },
      { "stage_name": "Maturity", "day_range": "90-120 days", "water_requirement_sensitivity": "Low", "stage_advice": "Leaves become yellowish-green." },
      { "stage_name": "Harvest (Priming)", "day_range": "120-150 days", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest leaves in stages from bottom up." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "NPK 40:20:20 kg/acre (varies by type)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green/yellow lower leaves, reduced size.", "solution": "Urea/CAN top dressing." },
        { "nutrient": "Potassium", "symptoms": "Mottling, tip burn, puckering of leaves.", "solution": "Potassium Sulphate (Avoid MOP/Chloride in tobacco) application." },
        { "nutrient": "Magnesium", "symptoms": "Sand drown (interveinal chlorosis of lower leaves).", "solution": "Magnesium Sulphate 20kg/acre." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Tobacco Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "तम्बाकू की सूंडी (स्पोडोप्टेरा)",
        "symptoms": "Larvae scrape the green matter in early stages, later completely defoliate the plant.",
        "favorable_weather": "Humid, cloudy weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, castor as trap crop.",
            "biological_spray": "SlNPV 250 LE/ha.",
            "mechanical": "Pheromone traps @ 5/acre, collect egg masses."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "100 g",
            "waiting_period_phi": "15 days",
            "application_instructions": "Spray thoroughly targeting the underside of leaves."
          }
        }
      },
      {
        "issue_name": "Tobacco Mosaic Virus (TMV)",
        "type": "Viral",
        "hindi_name": "टीएमवी (मोज़ेक)",
        "symptoms": "Mottling, blistering, and distortion of leaves. Stunted growth.",
        "favorable_weather": "Mechanical transmission through handling.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wash hands with soap before entering field, prohibit smoking in field, use resistant varieties.",
            "biological_spray": "N/A - prevention only.",
            "mechanical": "Uproot and burn infected plants early."
          },
          "chemical_curative": {
            "active_ingredient": "No chemical cure; control vectors like aphids if any (though TMV is mechanically transmitted)",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Rogue out infected plants immediately."
          }
        }
      },
      {
        "issue_name": "Orobanche (Broomrape)",
        "type": "Parasitic Weed",
        "hindi_name": "ओरोबैन्च",
        "symptoms": "Parasitic leafless plant attached to tobacco roots, stunting the tobacco plant and wilting it.",
        "favorable_weather": "Dry soils, consecutive tobacco cultivation.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with non-host crops (paddy, sorghum).",
            "biological_spray": "N/A",
            "mechanical": "Hand pulling before Orobanche flowering/seed set."
          },
          "chemical_curative": {
            "active_ingredient": "Imazethapyr 10% SL (Warning: requires highly precise application)",
            "commercial_reference": "Pursuit",
            "dose_per_15L_pump": "10 ml (directed spray)",
            "dose_per_acre": "100-150 ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Post-emergence directed spray ONLY if recommended; physical removal is safer."
          }
        }
      }
    ]
  },
  {
    "crop_id": "betel-vine",
    "common_name": "Betel Vine",
    "hindi_name": "पान",
    "regional_names": {
      "bengali": "Paan",
      "telugu": "Tamalapaku"
    },
    "category": "Cash Crop",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Land Prep & Standard Planting", "day_range": "May-June", "water_requirement_sensitivity": "Medium", "stage_advice": "Plant Agathi (Sesbania) as live standards." },
      { "stage_name": "Vine Planting", "day_range": "August-October", "water_requirement_sensitivity": "High", "stage_advice": "Plant cuttings and provide initial shade." },
      { "stage_name": "Trailing", "day_range": "Post establishment", "water_requirement_sensitivity": "High", "stage_advice": "Tie vines to standards every 15-20 days." },
      { "stage_name": "Lowering", "day_range": "Once a year", "water_requirement_sensitivity": "High", "stage_advice": "Coil the vine near the base to rejuvenate." },
      { "stage_name": "Harvesting", "day_range": "Continuous after 6 months", "water_requirement_sensitivity": "High", "stage_advice": "Pluck mature leaves frequently." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "Organic manure heavy (Neem cake + FYM)",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of leaves, reducing market value.", "solution": "Urea 1% foliar spray or apply organic nitrogen." },
        { "nutrient": "Iron", "symptoms": "Interveinal chlorosis on tender leaves.", "solution": "Ferrous sulphate spray 50g/15L." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Foot Rot / Wilt",
        "type": "Fungal",
        "hindi_name": "जड़ गलन / उकठा (फाइटोफ्थोरा)",
        "symptoms": "Drooping of leaves, rotting of the stem at the soil level, rapid death of vine.",
        "favorable_weather": "Waterlogging, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ensure excellent drainage, avoid excessive watering.",
            "biological_spray": "Trichoderma viride applied to soil.",
            "mechanical": "Remove and burn infected vines."
          },
          "chemical_curative": {
            "active_ingredient": "Bordeaux mixture 1% or Metalaxyl MZ",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g as soil drench",
            "waiting_period_phi": "21 days",
            "application_instructions": "Drench the soil around the root zone."
          }
        }
      }
    ]
  },
  {
    "crop_id": "areca-nut",
    "common_name": "Areca Nut",
    "hindi_name": "सुपारी",
    "regional_names": {
      "kannada": "Adike",
      "malayalam": "Adakka"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "12-18 months", "water_requirement_sensitivity": "High", "stage_advice": "Maintain shade." },
      { "stage_name": "Transplanting", "day_range": "Pre-monsoon", "water_requirement_sensitivity": "High", "stage_advice": "Plant in pits with good drainage." },
      { "stage_name": "Vegetative", "day_range": "1-5 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Protect stems from sun scorch." },
      { "stage_name": "Flowering", "day_range": "Nov-Feb", "water_requirement_sensitivity": "High", "stage_advice": "Irrigate properly to avoid flower drop." },
      { "stage_name": "Nut Development", "day_range": "Mar-Aug", "water_requirement_sensitivity": "High", "stage_advice": "Apply fertilizers." },
      { "stage_name": "Harvest", "day_range": "Sep-Dec", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest ripe nuts." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "NPK 100:40:140 g/palm/year",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves, reduced crown size.", "solution": "Urea application." },
        { "nutrient": "Potassium", "symptoms": "Yellowing and necrosis of leaflet tips.", "solution": "MOP application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Koleroga (Fruit Rot)",
        "type": "Fungal",
        "hindi_name": "फलों की सड़ांध",
        "symptoms": "Rotting and extensive shedding of immature nuts. White mycelium on nuts.",
        "favorable_weather": "Heavy, continuous monsoon rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cover bunches with polythene covers before monsoon.",
            "biological_spray": "N/A",
            "mechanical": "Remove fallen diseased nuts."
          },
          "chemical_curative": {
            "active_ingredient": "Bordeaux mixture 1%",
            "commercial_reference": "N/A",
            "dose_per_15L_pump": "Prepare fresh",
            "dose_per_acre": "Thorough coverage of bunches",
            "waiting_period_phi": "20 days",
            "application_instructions": "Pre-monsoon spray in May-June, and mid-monsoon spray in July-August."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coconut",
    "common_name": "Coconut",
    "hindi_name": "नारियल",
    "regional_names": {
      "malayalam": "Thenga",
      "tamil": "Thengai"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-1 year", "water_requirement_sensitivity": "High", "stage_advice": "Protect from cattle and direct sun." },
      { "stage_name": "Vegetative", "day_range": "1-5 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Ring weeding and basin preparation." },
      { "stage_name": "Flowering initiation", "day_range": "5-7 years", "water_requirement_sensitivity": "High", "stage_advice": "Provide adequate irrigation." },
      { "stage_name": "Button stage", "day_range": "0-2 months post fertilization", "water_requirement_sensitivity": "High", "stage_advice": "Button shedding is common; ensure K and B levels." },
      { "stage_name": "Nut development", "day_range": "3-9 months", "water_requirement_sensitivity": "High", "stage_advice": "Requires continuous water supply." },
      { "stage_name": "Maturity", "day_range": "10-12 months", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest mature nuts." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "NPK 500:320:1200 g/palm/year",
      "deficiencies": [
        { "nutrient": "Potassium", "symptoms": "Yellowing of leaf margins, reduced number of leaves and nuts.", "solution": "MOP 1.2 kg/palm." },
        { "nutrient": "Magnesium", "symptoms": "Yellowing of leaves exposed to sunlight, while shaded parts remain green.", "solution": "Magnesium sulphate 500g/palm/year." },
        { "nutrient": "Boron", "symptoms": "Crown choking, deformed leaves, barren nuts.", "solution": "Borax 50g/palm in soil." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग (राइनोसेरोस बीटल)",
        "symptoms": "Beetle bores into unopened fronds; opening leaves show geometric V-shaped cuts.",
        "favorable_weather": "All year round, breeds in manure pits.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Treat manure pits with Metarhizium anisopliae.",
            "biological_spray": "Baculovirus oryctes (release infected beetles).",
            "mechanical": "Use pheromone traps, extract beetles using a metal hook."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC mixed with sand",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Apply to inner leaf axils",
            "waiting_period_phi": "N/A",
            "application_instructions": "Place Sevidol/Chlorpyrifos-sand mixture in leaf axils."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ का घुन",
        "symptoms": "Holes in the trunk with brownish ooze, chewed fibers protruding, drooping of the crown.",
        "favorable_weather": "Damage by rhinoceros beetle or physical injury facilitates entry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid mechanical injuries to the stem.",
            "biological_spray": "N/A",
            "mechanical": "Pheromone traps (ferrolure) to trap adults."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL (stem injection)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Root feeding or stem injection (2-3 ml in 10 ml water)."
          }
        }
      }
    ]
  },
  {
    "crop_id": "oil-palm",
    "common_name": "Oil Palm",
    "hindi_name": "ताड़ तेल",
    "regional_names": {
      "telugu": "Oil palm"
    },
    "category": "Plantation",
    "season": ["Kharif", "Rabi", "Zaid"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "12-14 months", "water_requirement_sensitivity": "High", "stage_advice": "Requires 5 liters water/seedling/day." },
      { "stage_name": "Planting", "day_range": "Pre-monsoon", "water_requirement_sensitivity": "High", "stage_advice": "Triangular planting 9x9x9m." },
      { "stage_name": "Immature Phase", "day_range": "1-3 years", "water_requirement_sensitivity": "High", "stage_advice": "Ablation (removal of early flowers)." },
      { "stage_name": "Mature/Flowering", "day_range": "Year 4+", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure pollinating weevils are present." },
      { "stage_name": "Fruit Bunch Dev", "day_range": "5-6 months post anthesis", "water_requirement_sensitivity": "High", "stage_advice": "Critical for oil content." },
      { "stage_name": "Harvesting", "day_range": "Continuous", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest Fresh Fruit Bunches (FFB) every 10-14 days." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "NPK 1200:600:1200 g/palm/year (mature)",
      "deficiencies": [
        { "nutrient": "Boron", "symptoms": "Hook leaf, crinkled leaves, fish-bone shape, poor fruit set.", "solution": "Borax 50-100g/palm soil application." },
        { "nutrient": "Magnesium", "symptoms": "Orange-yellow discoloration on older leaves.", "solution": "Magnesium sulphate 500g/palm." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-shaped cuts on leaves.",
        "favorable_weather": "All year.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "Metarhizium on breeding sites.",
            "mechanical": "Manual removal."
          },
          "chemical_curative": {
            "active_ingredient": "Phorate 10G or Carbofuran 3G",
            "commercial_reference": "Thimet / Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "Apply 10-15g in leaf axils",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply granules mixed with sand into the innermost leaf axils."
          }
        }
      }
    ]
  },
  {
    "crop_id": "hops",
    "common_name": "Hops",
    "hindi_name": "हॉप्स",
    "regional_names": {},
    "category": "Beverage",
    "season": ["Kharif"],
    "critical_stages": [
      { "stage_name": "Spring emergence", "day_range": "April", "water_requirement_sensitivity": "Medium", "stage_advice": "Pruning of initial shoots." },
      { "stage_name": "Training", "day_range": "May", "water_requirement_sensitivity": "Medium", "stage_advice": "Train bines clockwise up the trellis string." },
      { "stage_name": "Vegetative Growth", "day_range": "June-July", "water_requirement_sensitivity": "High", "stage_advice": "Rapid growth, needs high N." },
      { "stage_name": "Flowering/Cone dev", "day_range": "August", "water_requirement_sensitivity": "High", "stage_advice": "Water strictly, ensure P and K." },
      { "stage_name": "Harvest", "day_range": "Late Aug-Sep", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when cones are papery and aromatic." }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "NPK high N demand early season",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Pale green leaves, slow climbing.", "solution": "Urea application." },
        { "nutrient": "Zinc", "symptoms": "Short internodes, upward curling of leaves.", "solution": "Zinc sulphate foliar spray." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "डाउनी फफूंदी",
        "symptoms": "Basal spikes are stunted, yellow. Brown spots on leaves, rotting of cones.",
        "favorable_weather": "Cool, wet spring weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove basal spikes manually, ensure airflow.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "Prune lower leaves after bines reach 6ft."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl + Mancozeb",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "14 days",
            "application_instructions": "Spray on emerging foliage and basal shoots."
          }
        }
      }
    ]
  },
  {
    "crop_id": "yerba-mate",
    "common_name": "Yerba Mate",
    "hindi_name": "यर्बा माते",
    "regional_names": {},
    "category": "Beverage",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "0-6 months", "water_requirement_sensitivity": "High", "stage_advice": "Provide 50% shade." },
      { "stage_name": "Establishment", "day_range": "1-3 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Formative pruning." },
      { "stage_name": "Vegetative Growth", "day_range": "Spring-Summer", "water_requirement_sensitivity": "High", "stage_advice": "Peak leaf production." },
      { "stage_name": "Harvest", "day_range": "Winter", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest leaves and twigs." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.0",
      "basal_dose_per_acre": "Organic compost heavy",
      "deficiencies": [
        { "nutrient": "Nitrogen", "symptoms": "Slow growth, small yellowish leaves.", "solution": "Organic N or urea top dress." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Mate Psyllid",
        "type": "Insect-Pest",
        "hindi_name": "माते सिला",
        "symptoms": "Leaf galling, curling, and stunted growth.",
        "favorable_weather": "Spring flush.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of infested shoots.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "N/A"
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "21 days",
            "application_instructions": "Spray on early flush."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kola-nut",
    "common_name": "Kola Nut",
    "hindi_name": "कोला नट",
    "regional_names": {},
    "category": "Beverage",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Seedling", "day_range": "1-2 years", "water_requirement_sensitivity": "High", "stage_advice": "Requires heavy shade." },
      { "stage_name": "Vegetative", "day_range": "3-6 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Canopy establishment." },
      { "stage_name": "Flowering/Fruiting", "day_range": "Year 7+", "water_requirement_sensitivity": "High", "stage_advice": "Adequate water needed for pod set." },
      { "stage_name": "Harvest", "day_range": "Nov-Jan", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest mature pods." }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "NPK balanced",
      "deficiencies": [
        { "nutrient": "Potassium", "symptoms": "Marginal necrosis on mature leaves.", "solution": "MOP application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Kola Weevil",
        "type": "Insect-Pest",
        "hindi_name": "कोला घुन",
        "symptoms": "Larvae bore into the nuts, destroying them.",
        "favorable_weather": "Storage and late maturation phase.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest, avoid leaving pods on ground.",
            "biological_spray": "N/A",
            "mechanical": "Remove infested pods."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 10% EC",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "30 days",
            "application_instructions": "Spray on maturing pods if severe."
          }
        }
      }
    ]
  },
  {
    "crop_id": "guarana",
    "common_name": "Guarana",
    "hindi_name": "ग्वाराना",
    "regional_names": {},
    "category": "Beverage",
    "season": ["Kharif", "Rabi"],
    "critical_stages": [
      { "stage_name": "Nursery", "day_range": "0-1 year", "water_requirement_sensitivity": "High", "stage_advice": "Root cuttings in humid conditions." },
      { "stage_name": "Vegetative", "day_range": "1-3 years", "water_requirement_sensitivity": "Medium", "stage_advice": "Prune to encourage bushiness." },
      { "stage_name": "Flowering", "day_range": "Dry season", "water_requirement_sensitivity": "High", "stage_advice": "Requires bees for pollination." },
      { "stage_name": "Harvest", "day_range": "Rainy season", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest when capsules open exposing the seed." }
    ],
    "soil_and_nutrition": {
      "ph_range": "4.5-5.5",
      "basal_dose_per_acre": "High P requirement for establishment",
      "deficiencies": [
        { "nutrient": "Phosphorus", "symptoms": "Stunted growth, poor flowering.", "solution": "SSP application." }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark sunken lesions on leaves and fruit.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning for airflow.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "20 days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  }
];
