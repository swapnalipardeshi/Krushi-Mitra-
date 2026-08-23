/**
 * COMMERCIAL — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: 122
 * Generated: 2026-08-22
 */

export const commercial = [
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
  },
{
    "crop_id": "cotton",
    "common_name": "Cotton",
    "hindi_name": "कपास",
    "regional_names": {
      "marathi": "कापूस",
      "punjabi": "ਕਪਾਹ",
      "tamil": "பருத்தி",
      "telugu": "పత్తి"
    },
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure proper seed placement."
      },
      {
        "stage_name": "Seedling",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Maintain weed-free environment."
      },
      {
        "stage_name": "Squaring",
        "day_range": "35-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for square formation."
      },
      {
        "stage_name": "Flowering",
        "day_range": "60-80",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Avoid water stress to prevent flower drop."
      },
      {
        "stage_name": "Boll Development",
        "day_range": "80-110",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Needs optimal nutrition."
      },
      {
        "stage_name": "Boll Opening",
        "day_range": "110-130",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation to allow bolls to open fully."
      },
      {
        "stage_name": "Picking 1",
        "day_range": "130-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest during dry weather."
      },
      {
        "stage_name": "Picking 2",
        "day_range": "150-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Final harvest of remaining bolls."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.8-8.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, stunted growth.",
          "solution": "Urea 2% foliar spray, 500g per 15L pump."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purple discoloration.",
          "solution": "DAP 2% foliar spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing and necrosis of leaf margins.",
          "solution": "MOP 5kg per acre via fertigation."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in older leaves.",
          "solution": "Magnesium Sulphate 1% spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes.",
          "solution": "Zinc Sulphate 5g/L."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Shedding of squares and young bolls.",
          "solution": "Borax 0.1% spray."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of young leaves.",
          "solution": "Sulphur 80% WDG 2g/L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves.",
          "solution": "Ferrous Sulphate 0.5% spray."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Hooking of young leaves.",
          "solution": "Calcium Nitrate 2g/L spray."
        },
        {
          "nutrient": "Manganese",
          "symptoms": "Mottling of young leaves.",
          "solution": "Manganese Sulphate 2g/L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "American Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "अमेरिकन सुंडी",
        "symptoms": "Larvae feed on squares, flowers, and bolls. Large holes in bolls with feces visible.",
        "favorable_weather": "Warm, humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep summer ploughing, crop rotation with non-hosts.",
            "biological_spray": "HaNPV 250 LE/ha, Bacillus thuringiensis 1 kg/ha.",
            "mechanical": "Pheromone traps @ 5/acre, Light traps @ 1/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad 45% SC",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "65-75 ml in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray on first sight of larvae."
          }
        }
      },
      {
        "issue_name": "Pink Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "गुलाबी सुंडी",
        "symptoms": "Larvae enter bolls and feed on seeds. Rosette flowers.",
        "favorable_weather": "Dry weather followed by high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely sowing, destruction of crop residues.",
            "biological_spray": "Trichogramma bactrae @ 1.5 lakh/ha.",
            "mechanical": "Pheromone traps @ 10/acre for monitoring."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7 g",
            "dose_per_acre": "88 g in 200L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray when ETL is reached."
          }
        }
      },
      {
        "issue_name": "Spotted Bollworm",
        "type": "Insect-Pest",
        "hindi_name": "चितकबरी सुंडी",
        "symptoms": "Boring into terminal shoots causing them to droop and wither.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid late sowing.",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Collection and destruction of infested shoots."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage of foliage."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing of leaves, sooty mold due to honeydew excretion, vectors Leaf Curl Virus.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Verticillium lecanii 5g/L.",
            "mechanical": "Yellow sticky traps @ 20/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "20 g",
            "dose_per_acre": "250 g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Ensure coverage on underside of leaves."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Leaves turn yellow, then red and curl downwards. 'Hopper burn' symptom.",
        "favorable_weather": "Cloudy weather with high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Neem oil 10000 ppm 2ml/L.",
            "mechanical": "Avoid excess nitrogen."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5 ml",
            "dose_per_acre": "40-50 ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Foliar spray on appearance."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू / चेपा",
        "symptoms": "Curling of leaves, stunted growth, sooty mold.",
        "favorable_weather": "Cool, humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Conserve ladybird beetles.",
            "biological_spray": "Verticillium lecanii 5g/L.",
            "mechanical": "Yellow sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5 g",
            "dose_per_acre": "40 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray when colonies are seen."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Intercropping with non-hosts.",
            "biological_spray": "Neem Seed Kernel Extract (NSKE) 5%.",
            "mechanical": "Blue sticky traps."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "10 Days",
            "application_instructions": "Spray early morning."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony masses on stems and leaves, severe stunting.",
        "favorable_weather": "Warm and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternative weed hosts like Parthenium.",
            "biological_spray": "Cryptolaemus montrouzieri (predator beetle) release.",
            "mechanical": "Prune and destroy heavily infested parts."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Add sticker for better adherence to waxy bodies."
          }
        }
      },
      {
        "issue_name": "Red Cotton Bug",
        "type": "Insect-Pest",
        "hindi_name": "लाल कपास कीट",
        "symptoms": "Red bugs congregate on bolls and seeds, staining the lint.",
        "favorable_weather": "Maturity stage of crop.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "Beauveria bassiana 5g/L.",
            "mechanical": "Hand collection in early stages."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30 ml",
            "dose_per_acre": "400 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Target congregating nymphs and adults."
          }
        }
      },
      {
        "issue_name": "Dusky Cotton Bug",
        "type": "Insect-Pest",
        "hindi_name": "डस्की कपास कीट",
        "symptoms": "Feeds on seeds in open bolls, lowering seed weight and oil content.",
        "favorable_weather": "Dry season during boll opening.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid delaying harvest.",
            "biological_spray": "Neem oil 10000 ppm 2ml/L.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25 ml",
            "dose_per_acre": "300 ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray open bolls carefully."
          }
        }
      },
      {
        "issue_name": "Leaf Curl Virus (CLCuD)",
        "type": "Viral",
        "hindi_name": "पत्ता मरोड़ रोग",
        "symptoms": "Upward or downward curling of leaves, thickened veins, enations on underside.",
        "favorable_weather": "High whitefly population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, manage whitefly vector.",
            "biological_spray": "None for virus directly.",
            "mechanical": "Uproot and burn infected plants early."
          },
          "chemical_curative": {
            "active_ingredient": "Diafenthiuron 50% WP (for vector)",
            "commercial_reference": "Pegasus",
            "dose_per_15L_pump": "20 g",
            "dose_per_acre": "250 g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Vector control only. No cure for virus."
          }
        }
      },
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Angular, water-soaked lesions on leaves. 'Black arm' on stems.",
        "favorable_weather": "High humidity and rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Acid delinting of seeds.",
            "biological_spray": "Pseudomonas fluorescens 10g/L.",
            "mechanical": "Avoid overhead irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin sulphate + Copper oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 30g",
            "dose_per_acre": "30g + 500g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray covering both sides of leaves."
          }
        }
      },
      {
        "issue_name": "Grey Mildew",
        "type": "Fungal",
        "hindi_name": "ग्रे फफूंदी (दहिया रोग)",
        "symptoms": "Irregular angular, pale translucent spots on lower surface, greyish white powdery growth.",
        "favorable_weather": "Cool and humid nights.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, removal of lower leaves.",
            "biological_spray": "Trichoderma viride 5g/L.",
            "mechanical": "Improve aeration."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15 g",
            "dose_per_acre": "200 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply immediately upon symptom detection."
          }
        }
      },
      {
        "issue_name": "Alternaria Leaf Spot",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया पत्ती धब्बा",
        "symptoms": "Brown, irregular spots with concentric rings on older leaves.",
        "favorable_weather": "Intermittent rains, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain crop vigor through proper nutrition.",
            "biological_spray": "Bacillus subtilis 5g/L.",
            "mechanical": "Remove infected crop debris."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "500 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Preventive or early curative spray."
          }
        }
      },
      {
        "issue_name": "Fusarium Wilt",
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing and wilting of leaves starting from base. Brown discoloration of vascular tissues.",
        "favorable_weather": "Soil temp 25-28C, sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties, crop rotation.",
            "biological_spray": "Trichoderma harzianum soil application.",
            "mechanical": "Remove wilted plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "Drenching: 20 g",
            "dose_per_acre": "Drenching: 500 g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench soil around base of plants."
          }
        }
      },
      {
        "issue_name": "Verticillium Wilt",
        "type": "Fungal",
        "hindi_name": "वर्टिसिलियम विल्ट",
        "symptoms": "Mottling and wilting. Vascular browning is lighter than Fusarium.",
        "favorable_weather": "Cooler soil temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with cereals, avoid solanaceous crops.",
            "biological_spray": "Trichoderma spp. enriched FYM.",
            "mechanical": "Solarization of soil."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "200 ml (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Soil drenching."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Sudden wilting of entire plant. Roots become soft and decayed.",
        "favorable_weather": "High soil moisture, heavy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve soil drainage.",
            "biological_spray": "Trichoderma viride soil application.",
            "mechanical": "Subsoiling."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride 50% WP",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "500 g (Drenching)",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench root zone."
          }
        }
      },
      {
        "issue_name": "Myrothecium Leaf Spot",
        "type": "Fungal",
        "hindi_name": "मायरोथेशियम लीफ स्पॉट",
        "symptoms": "Circular to irregular brown spots with raised margins. Fructifications visible.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorothalonil 75% WP",
            "commercial_reference": "Kavach",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Tobacco Streak Virus",
        "type": "Viral",
        "hindi_name": "टोबैको स्ट्रीक वायरस",
        "symptoms": "Necrotic streaks on leaves, stems, and squares.",
        "favorable_weather": "High thrips population.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Control parthenium weed, manage thrips vector.",
            "biological_spray": "None.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram 11.7% SC (for vector)",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "15 ml",
            "dose_per_acre": "180 ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control thrips vector."
          }
        }
      },
      {
        "issue_name": "Tarnished Plant Bug",
        "type": "Insect-Pest",
        "hindi_name": "प्लांट बग",
        "symptoms": "Shedding of squares, malformed bolls.",
        "favorable_weather": "Warm days.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "Neem based sprays.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Acephate 75% SP",
            "commercial_reference": "Asataf",
            "dose_per_15L_pump": "30 g",
            "dose_per_acre": "350 g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on appearance."
          }
        }
      }
    ]
  },
  {
    "crop_id": "jute",
    "common_name": "Jute",
    "hindi_name": "जूट / पटसन",
    "regional_names": {
      "bengali": "পাট",
      "assamese": "মৰাপাট"
    },
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "10-25",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Weed control is critical."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "25-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid growth phase, requires N."
      },
      {
        "stage_name": "Pre-flowering",
        "day_range": "60-90",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor for semilooper."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at early pod stage for best fiber."
      },
      {
        "stage_name": "Retting",
        "day_range": "110-130",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Submerge in slow-running clear water."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 15kg",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted plants, pale green leaves.",
          "solution": "Urea top dressing 10kg/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor root development, purplish leaves.",
          "solution": "SSP basal application."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems, susceptible to diseases.",
          "solution": "MOP application."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing of newer leaves.",
          "solution": "Gypsum 50kg/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Rosetting, stunted internodes.",
          "solution": "Zinc Sulphate spray."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "FeSO4 spray."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Deformed leaves.",
          "solution": "Borax application."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Dark brown lesions on stem, leading to rotting.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma viride.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray on first symptom."
          }
        }
      },
      {
        "issue_name": "Jute Semilooper",
        "type": "Insect-Pest",
        "hindi_name": "सेमीलूपर",
        "symptoms": "Caterpillars feed on apical leaves.",
        "favorable_weather": "Humid, cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Hand picking."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "रोएंदार सुंडी",
        "symptoms": "Defoliation of entire plant.",
        "favorable_weather": "Sporadic.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Light traps.",
            "biological_spray": "Bt.",
            "mechanical": "Collect and destroy egg masses."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Yellow Mite",
        "type": "Insect-Pest",
        "hindi_name": "पीली मकड़ी",
        "symptoms": "Leaves curl downwards, turn coppery.",
        "favorable_weather": "Warm and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen 22.9% SC",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Thorough coverage."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Irregular dark lesions on leaves and stem.",
        "favorable_weather": "Humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Seed treatment.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Soft Rot",
        "type": "Fungal",
        "hindi_name": "मुलायम गलन",
        "symptoms": "Soft, watery rot of stems.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Apion Weevil",
        "type": "Insect-Pest",
        "hindi_name": "एपियन वीविल",
        "symptoms": "Grubs bore into stems causing knots, lowering fiber quality.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Nematode",
        "hindi_name": "जड़ गाँठ निमेटोड",
        "symptoms": "Stunted growth, galls on roots.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold intercrop.",
            "biological_spray": "Paecilomyces.",
            "mechanical": "Deep ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "10kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sunn_hemp",
    "common_name": "Sunn Hemp",
    "hindi_name": "सनई",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing",
        "day_range": "0-7",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture needed for germination."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "15-40",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "45-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "If for fiber, harvest at pod formation."
      },
      {
        "stage_name": "Pod Formation",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "If for seed."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest for seed."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-7.5",
      "basal_dose_per_acre": "N: 10kg, P: 20kg",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "SSP basal."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Urea spray."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burning.",
          "solution": "MOP."
        },
        {
          "nutrient": "Sulphur",
          "symptoms": "Yellowing.",
          "solution": "Sulphur spray."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "बालों वाली सुंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Light traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Pustules on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Boring holes in stem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mesta",
    "common_name": "Mesta (Kenaf)",
    "hindi_name": "मेस्ता / पटवा",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "10-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weed management."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Fiber harvest."
      },
      {
        "stage_name": "Pod Formation",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Seed harvest."
      },
      {
        "stage_name": "Maturity",
        "day_range": "130-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Pale leaves.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "Iron sulphate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean fields.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Hopper burn.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White masses.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove weeds.",
            "biological_spray": "Verticillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "Rotting stem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "flax_fiber",
    "common_name": "Flax (Fiber)",
    "hindi_name": "अलसी (रेशा)",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Emergence",
        "day_range": "7-14",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-50",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Stem elongation."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Peak growth."
      },
      {
        "stage_name": "Boll Formation",
        "day_range": "70-90",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest for fiber at yellowing."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "For seed."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Pale leaves.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Weak stem.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        },
        {
          "nutrient": "B",
          "symptoms": "Stem cracking.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Flax Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "7 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Seed treatment / Drench."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry and warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "कटवर्म",
        "symptoms": "Cut seedlings.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ploughing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sisal",
    "common_name": "Sisal",
    "hindi_name": "सिसल",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Nursery",
        "day_range": "0-180",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Bulbil planting."
      },
      {
        "stage_name": "Transplanting",
        "day_range": "180-210",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Field prep."
      },
      {
        "stage_name": "Vegetative 1",
        "day_range": "210-700",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "700-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "First harvest."
      },
      {
        "stage_name": "Ratoon/Continuing",
        "day_range": "1000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Regular harvests."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Soft leaves.",
          "solution": "Lime."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed leaves.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Sisal Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Zebra Disease",
        "type": "Fungal",
        "hindi_name": "ज़ेबरा रोग",
        "symptoms": "Striped lesions on leaves.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White patches, yellowing.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "abaca",
    "common_name": "Abaca (Manila Hemp)",
    "hindi_name": "अबाका",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-400",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Trunk growth."
      },
      {
        "stage_name": "Shooting",
        "day_range": "400-500",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Flower emergence."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "500-600",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest pseudostem."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "Zinc sulphate."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Abaca Bunchy Top Virus",
        "type": "Viral",
        "hindi_name": "बंची टॉप",
        "symptoms": "Bunchy top, stunted.",
        "favorable_weather": "Aphid presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean material.",
            "biological_spray": "None.",
            "mechanical": "Eradicate."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control aphids."
          }
        }
      },
      {
        "issue_name": "Abaca Mosaic Virus",
        "type": "Viral",
        "hindi_name": "मोज़ेक",
        "symptoms": "Mosaic patterns.",
        "favorable_weather": "Aphids.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed control.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Vector control."
          }
        }
      },
      {
        "issue_name": "Corm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring in corm.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean planting.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Boring in pseudostem.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "विल्ट",
        "symptoms": "Wilting.",
        "favorable_weather": "Warm soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coir",
    "common_name": "Coir (Coconut)",
    "hindi_name": "नारियल रेशा",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-1500",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tree growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500-1800",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nut set."
      },
      {
        "stage_name": "Maturity",
        "day_range": "1800-2100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nut maturity (11-12 months for coir)."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 50kg, P: 25kg, K: 100kg",
      "deficiencies": [
        {
          "nutrient": "K",
          "symptoms": "Yellowing of leaf tips.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Yellow bands on leaves.",
          "solution": "Mg sulphate."
        },
        {
          "nutrient": "B",
          "symptoms": "Crown choking.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-shaped cuts on leaves.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean manure.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract with hook."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown spray."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes in trunk, oozing.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Trunk injection."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "कली गलन",
        "symptoms": "Rotting of heart leaf.",
        "favorable_weather": "Heavy monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crown cleaning.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Crown application."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ramie",
    "common_name": "Ramie",
    "hindi_name": "रैमी",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rhizome planting."
      },
      {
        "stage_name": "Establishment",
        "day_range": "30-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weed control."
      },
      {
        "stage_name": "Growth",
        "day_range": "60-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Stem elongation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut near ground."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Stunted.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor fiber.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak stems.",
          "solution": "Lime."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "सुंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogged.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "kapok",
    "common_name": "Kapok",
    "hindi_name": "सेमल",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-180",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "180-700",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "700-800",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Blooms."
      },
      {
        "stage_name": "Pod Maturity",
        "day_range": "800-900",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Slow growth.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Poor roots.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Small pods.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Holes in pods.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "70ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Aeration.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "agave",
    "common_name": "Agave",
    "hindi_name": "एगेव",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "60-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "1000-1500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Lower leaves."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "End of life cycle."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip necrosis.",
          "solution": "MOP."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak leaves.",
          "solution": "Lime."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Agave Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark spots.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "henequen",
    "common_name": "Henequen",
    "hindi_name": "हेनिकेन",
    "regional_names": {},
    "category": "Fiber",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "60-1000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "1000-1500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      },
      {
        "stage_name": "Flowering",
        "day_range": "1500+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "End of life."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Leaf tip necrosis.",
          "solution": "MOP."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Weak leaves.",
          "solution": "Lime."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Boring.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Rainy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sugarcane",
    "common_name": "Sugarcane",
    "hindi_name": "गन्ना",
    "regional_names": {
      "marathi": "ऊस",
      "tamil": "கரும்பு",
      "telugu": "చెరకు"
    },
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate moisture for sett sprouting."
      },
      {
        "stage_name": "Tillering",
        "day_range": "45-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for final stalk population."
      },
      {
        "stage_name": "Grand Growth",
        "day_range": "120-250",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maximum water and nutrient demand."
      },
      {
        "stage_name": "Maturity",
        "day_range": "250-360",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Stop irrigation 15 days before harvest for sucrose accumulation."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "360-390",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest close to ground."
      },
      {
        "stage_name": "Ratoon Sprouting",
        "day_range": "390-420",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Stubble shaving and gap filling."
      },
      {
        "stage_name": "Ratoon Tillering",
        "day_range": "420-500",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply extra N."
      },
      {
        "stage_name": "Ratoon Grand Growth",
        "day_range": "500-600",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Earthing up."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "N: 60kg, P: 30kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing of older leaves, thin stalks.",
          "solution": "Urea top dressing 50kg/acre."
        },
        {
          "nutrient": "P",
          "symptoms": "Purple tint on leaves, poor root growth.",
          "solution": "DAP application."
        },
        {
          "nutrient": "K",
          "symptoms": "Orange-yellow color on older leaves, firing of margins.",
          "solution": "MOP 30kg/acre."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Interveinal chlorosis on young leaves.",
          "solution": "FeSO4 1% spray."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Broad yellow bands, shortened internodes.",
          "solution": "ZnSO4 5kg/acre to soil."
        },
        {
          "nutrient": "S",
          "symptoms": "General yellowing of young leaves.",
          "solution": "Gypsum 100kg/acre."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Mottled chlorosis.",
          "solution": "MgSO4 spray."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Spindly stalks.",
          "solution": "Lime."
        },
        {
          "nutrient": "B",
          "symptoms": "Distorted growing points.",
          "solution": "Borax."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Pale green to white longitudinal stripes.",
          "solution": "MnSO4 spray."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Red Rot",
        "type": "Fungal",
        "hindi_name": "लाल सड़न",
        "symptoms": "Leaves dry from top down. Splitting stalk shows reddened tissues with cross white bands. Sour alcoholic smell.",
        "favorable_weather": "High humidity, waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Healthy setts, resistant vars.",
            "biological_spray": "Trichoderma sett treatment.",
            "mechanical": "Uproot infected clumps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "Sett treatment 1g/L",
            "waiting_period_phi": "N/A",
            "application_instructions": "Treat setts before planting."
          }
        }
      },
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Production of a black whip-like structure from the central shoot.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rogueing.",
            "biological_spray": "None.",
            "mechanical": "Cover whip with plastic bag, cut and burn."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उकठा",
        "symptoms": "Stunted growth, yellowing, hollow stalks.",
        "favorable_weather": "Drought followed by rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "N/A",
            "application_instructions": "Drenching."
          }
        }
      },
      {
        "issue_name": "Grassy Shoot Disease",
        "type": "Viral",
        "hindi_name": "ग्रासी शूट (फाइटोप्लाज्मा)",
        "symptoms": "Profuse tillering, narrow pale leaves, grassy appearance.",
        "favorable_weather": "Vector (aphid/leafhopper) presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Moist Hot Air Treatment (MHAT) of setts.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid (for vector)",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control vector."
          }
        }
      },
      {
        "issue_name": "Leaf Scald",
        "type": "Bacterial",
        "hindi_name": "लीफ स्कैल्ड",
        "symptoms": "White stripes on leaves, necrosis.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "Disinfect tools."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride + Streptomycin",
            "commercial_reference": "Blitox + Plantomycin",
            "dose_per_15L_pump": "30g + 2g",
            "dose_per_acre": "500g + 30g",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रस्ट",
        "symptoms": "Orange-brown pustules on leaves.",
        "favorable_weather": "High humidity, moderate temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Eye Spot",
        "type": "Fungal",
        "hindi_name": "आई स्पॉट",
        "symptoms": "Eye shaped lesions.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Sett Rot",
        "type": "Fungal",
        "hindi_name": "सेट रोट",
        "symptoms": "Pineapple odor from rotting setts.",
        "favorable_weather": "Waterlogged soil at planting.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "Sett dip 1g/L",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Sett treatment."
          }
        }
      },
      {
        "issue_name": "Early Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "अर्ली शूट बोरर",
        "symptoms": "Dead heart in young tillers, can be pulled out easily, emits bad smell.",
        "favorable_weather": "High temp, low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trash mulching.",
            "biological_spray": "Trichogramma chilonis release.",
            "mechanical": "Pull out dead hearts."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "150ml (Drenching)",
            "waiting_period_phi": "60 Days",
            "application_instructions": "Drench along rows."
          }
        }
      },
      {
        "issue_name": "Top Borer",
        "type": "Insect-Pest",
        "hindi_name": "टॉप बोरर",
        "symptoms": "Shot holes in leaves, dead heart in grown canes, bunchy top.",
        "favorable_weather": "Moderate temp, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Collect egg masses.",
            "biological_spray": "Isotima javensis parasite.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "13 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Internode Borer",
        "type": "Insect-Pest",
        "hindi_name": "इंटरनोड बोरर",
        "symptoms": "Holes in internodes filled with frass.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Detrashing.",
            "biological_spray": "Trichogramma chilonis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Borer",
        "type": "Insect-Pest",
        "hindi_name": "रूट बोरर",
        "symptoms": "Dead heart in young tillers, not easily pulled out.",
        "favorable_weather": "Sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing.",
            "biological_spray": "EPN.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "Drench",
            "dose_per_acre": "1L with irrigation water",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Apply with irrigation."
          }
        }
      },
      {
        "issue_name": "Stalk Borer",
        "type": "Insect-Pest",
        "hindi_name": "स्टाक बोरर",
        "symptoms": "Holes in stalk.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Trichogramma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Pyrilla",
        "type": "Insect-Pest",
        "hindi_name": "पाइरिला",
        "symptoms": "Leaves turn pale, covered with sooty mold due to honeydew.",
        "favorable_weather": "High humidity, dense crop.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Epiricania melanoleuca (parasitoid).",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Yellowing, pinkish discoloration, sooty mold.",
        "favorable_weather": "Dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Water management.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "Greyish/black encrustations on internodes.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Healthy setts.",
            "biological_spray": "None.",
            "mechanical": "Detrashing."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray after detrashing."
          }
        }
      },
      {
        "issue_name": "Woolly Aphid",
        "type": "Insect-Pest",
        "hindi_name": "वूली एफिड",
        "symptoms": "White powdery patches on underside of leaves, heavy sooty mold.",
        "favorable_weather": "Cloudy, high humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing.",
            "biological_spray": "Micromus igorotus predator release.",
            "mechanical": "Detrashing."
          },
          "chemical_curative": {
            "active_ingredient": "Acephate 75% SP",
            "commercial_reference": "Asataf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Thorough coverage."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Damage to planted setts, poor germination, drying of grown shoots.",
        "favorable_weather": "Dry sandy soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Well decomposed FYM only.",
            "biological_spray": "Metarhizium anisopliae soil app.",
            "mechanical": "Frequent irrigation."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "Sett dip 5ml/L",
            "dose_per_acre": "500ml soil drench",
            "waiting_period_phi": "N/A",
            "application_instructions": "Sett treatment or soil drench."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sugar_beet",
    "common_name": "Sugar Beet",
    "hindi_name": "चुकंदर",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "15-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Thinning."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Leaf growth."
      },
      {
        "stage_name": "Root Expansion",
        "day_range": "70-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Sugar accumulation."
      },
      {
        "stage_name": "Ripening",
        "day_range": "120-150",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "150-180",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest roots."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "B",
          "symptoms": "Heart rot.",
          "solution": "Borax."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Speckled leaves.",
          "solution": "MnSO4."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Interveinal yellowing.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cercospora Leaf Spot",
        "type": "Fungal",
        "hindi_name": "सरकोस्पोरा धब्बा",
        "symptoms": "Round spots with grey center.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rotation.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Difenoconazole",
            "commercial_reference": "Score",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू",
        "symptoms": "White powder.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Aeration.",
            "biological_spray": "Sulfur.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rhizomania",
        "type": "Viral",
        "hindi_name": "राइजोमेनिया",
        "symptoms": "Root proliferation.",
        "favorable_weather": "Wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "None",
            "commercial_reference": "None",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Preventive only."
          }
        }
      },
      {
        "issue_name": "Beet Cyst Nematode",
        "type": "Nematode",
        "hindi_name": "सिस्ट निमेटोड",
        "symptoms": "Stunted, white cysts on roots.",
        "favorable_weather": "Sandy soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trap crops.",
            "biological_spray": "Paecilomyces.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "10kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil app."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling.",
        "favorable_weather": "Cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ladybirds.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Rotting root.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sweet_sorghum",
    "common_name": "Sweet Sorghum",
    "hindi_name": "मीठा ज्वार",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Seedling",
        "day_range": "10-30",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Weeding."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-60",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Booting",
        "day_range": "60-75",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for sugar."
      },
      {
        "stage_name": "Flowering",
        "day_range": "75-90",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Maturity",
        "day_range": "90-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest stalk."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 15kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Margin burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "White bud.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "FeSO4."
        },
        {
          "nutrient": "S",
          "symptoms": "Yellowing new leaves.",
          "solution": "Sulphur."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "शूट फ्लाई",
        "symptoms": "Dead heart.",
        "favorable_weather": "Late sowing.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin",
            "commercial_reference": "Ustad",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes, dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Destroy stubbles.",
            "biological_spray": "Trichogramma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "8kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Whorl application."
          }
        }
      },
      {
        "issue_name": "Fall Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म",
        "symptoms": "Ragged leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinetoram",
            "commercial_reference": "Delegate",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Whorl spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Red spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
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
            "preventive_measures": "Resistant vars.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Grain Mold",
        "type": "Fungal",
        "hindi_name": "दाना फफूंदी",
        "symptoms": "Molded grains.",
        "favorable_weather": "Rain at maturity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "15g",
            "dose_per_acre": "200g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Honeydew.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Ladybirds.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sugar_maple",
    "common_name": "Sugar Maple",
    "hindi_name": "मैपल",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sapling",
        "day_range": "0-3650",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Establishment."
      },
      {
        "stage_name": "Maturation",
        "day_range": "3650-10000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tree growth."
      },
      {
        "stage_name": "Sap Flow (Spring)",
        "day_range": "10000+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tapping."
      },
      {
        "stage_name": "Dormancy",
        "day_range": "10000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Winter."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.3",
      "basal_dose_per_acre": "N: 0kg, P: 0kg, K: 0kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Ca",
          "symptoms": "Decline.",
          "solution": "Lime."
        },
        {
          "nutrient": "Mn",
          "symptoms": "Small leaves.",
          "solution": "MnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Asian Longhorned Beetle",
        "type": "Insect-Pest",
        "hindi_name": "भृंग",
        "symptoms": "Holes in trunk.",
        "favorable_weather": "Summer.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Quarantine.",
            "biological_spray": "None.",
            "mechanical": "Remove tree."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "Trunk inject",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Injection."
          }
        }
      },
      {
        "issue_name": "Pear Thrips",
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Damaged buds.",
        "favorable_weather": "Spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spinosad",
            "commercial_reference": "Tracer",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "N/A",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Leaf spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Rake leaves.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Verticillium Wilt",
        "type": "Fungal",
        "hindi_name": "विल्ट",
        "symptoms": "Dieback.",
        "favorable_weather": "Stress.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sanitation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "Trunk inject",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "N/A",
            "application_instructions": "Injection."
          }
        }
      }
    ]
  },
  {
    "crop_id": "palmyrah_palm",
    "common_name": "Palmyrah Palm",
    "hindi_name": "ताड़",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Nursery."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-3000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Trunk Formation",
        "day_range": "3000-5000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Flowering/Tapping",
        "day_range": "5000+",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Sap collection."
      },
      {
        "stage_name": "Fruiting",
        "day_range": "5000+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fruit harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-8.0",
      "basal_dose_per_acre": "N: 10kg, P: 5kg, K: 10kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed leaves.",
          "solution": "Borax."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-cuts.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Inject."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रोट",
        "symptoms": "Rotting.",
        "favorable_weather": "Rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean crown.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "लीफ ब्लाइट",
        "symptoms": "Drying leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sago_palm",
    "common_name": "Sago Palm",
    "hindi_name": "सागो",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-365",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "365-2000",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Trunk growth."
      },
      {
        "stage_name": "Starch Accumulation",
        "day_range": "2000-3000",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Pre-flowering."
      },
      {
        "stage_name": "Harvest",
        "day_range": "3000-3500",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fell before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 20kg, P: 10kg, K: 20kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Tip burn.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "B",
          "symptoms": "Deformed.",
          "solution": "Borax."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhinoceros Beetle",
        "type": "Insect-Pest",
        "hindi_name": "गैंडा भृंग",
        "symptoms": "V-cuts.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Extract."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Crown."
          }
        }
      },
      {
        "issue_name": "Red Palm Weevil",
        "type": "Insect-Pest",
        "hindi_name": "लाल ताड़ वीविल",
        "symptoms": "Holes.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid injury.",
            "biological_spray": "None.",
            "mechanical": "Traps."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Inject."
          }
        }
      },
      {
        "issue_name": "Bud Rot",
        "type": "Fungal",
        "hindi_name": "बड रोट",
        "symptoms": "Rotting.",
        "favorable_weather": "Rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean crown.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "N/A",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Apply."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "White spots.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cassava",
    "common_name": "Tapioca (Cassava)",
    "hindi_name": "टैपिओका",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sprouting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Moisture."
      },
      {
        "stage_name": "Establishment",
        "day_range": "15-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Weeding."
      },
      {
        "stage_name": "Canopy Development",
        "day_range": "60-120",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Tuber Initiation",
        "day_range": "120-150",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Bulking starts."
      },
      {
        "stage_name": "Tuber Bulking",
        "day_range": "150-240",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Starch accumulation."
      },
      {
        "stage_name": "Harvest",
        "day_range": "240-300",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Uproot tubers."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "N: 40kg, P: 20kg, K: 40kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "P",
          "symptoms": "Stunted.",
          "solution": "DAP."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor tubers.",
          "solution": "MOP."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        },
        {
          "nutrient": "Fe",
          "symptoms": "Chlorosis.",
          "solution": "FeSO4."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Interveinal yellowing.",
          "solution": "MgSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Cassava Mosaic Disease",
        "type": "Viral",
        "hindi_name": "मोज़ेक",
        "symptoms": "Mosaic patterns, distortion.",
        "favorable_weather": "Whitefly presence.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean planting.",
            "biological_spray": "None.",
            "mechanical": "Rogueing."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Control whitefly."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vector.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Traps.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White masses, bunchy top.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean sets.",
            "biological_spray": "Verticillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Spider Mite",
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी",
        "symptoms": "Speckling.",
        "favorable_weather": "Dry, hot.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Irrigation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Spiromesifen",
            "commercial_reference": "Oberon",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Tuber Rot",
        "type": "Fungal",
        "hindi_name": "कंद गलन",
        "symptoms": "Rotting tubers.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "स्केल",
        "symptoms": "Stems covered.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean sets.",
            "biological_spray": "None.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Dip or spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "arrowroot",
    "common_name": "Arrowroot",
    "hindi_name": "अरारोट",
    "regional_names": {},
    "category": "Sugar Crop",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Planting",
        "day_range": "0-30",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rhizome planting."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-150",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Growth."
      },
      {
        "stage_name": "Rhizome Bulking",
        "day_range": "150-240",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Starch storage."
      },
      {
        "stage_name": "Harvest",
        "day_range": "240-300",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-6.5",
      "basal_dose_per_acre": "N: 30kg, P: 15kg, K: 30kg",
      "deficiencies": [
        {
          "nutrient": "N",
          "symptoms": "Yellowing.",
          "solution": "Urea."
        },
        {
          "nutrient": "K",
          "symptoms": "Poor rhizomes.",
          "solution": "MOP."
        },
        {
          "nutrient": "Mg",
          "symptoms": "Chlorosis.",
          "solution": "MgSO4."
        },
        {
          "nutrient": "Zn",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizome Rot",
        "type": "Fungal",
        "hindi_name": "सड़न",
        "symptoms": "Rotting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Copper oxychloride",
            "commercial_reference": "Blitox",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "500g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "रोलर",
        "symptoms": "Rolled leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos",
            "commercial_reference": "Dursban",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "400ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White mass.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Neem.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
{
    "crop_id": "black-pepper",
    "common_name": "Black Pepper",
    "hindi_name": "\u0915\u093e\u0932\u0940 \u092e\u093f\u0930\u094d\u091a",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Harvesting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Calcium deficiency.",
          "solution": "Apply Calcium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Quick Wilt (Phytophthora)",
        "type": "Fungal",
        "hindi_name": "Quick Wilt (Phytophthora) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Quick Wilt (Phytophthora).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Insect-Pest",
        "hindi_name": "Anthracnose rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Anthracnose.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Slow Decline (Nematode)",
        "type": "Insect-Pest",
        "hindi_name": "Slow Decline (Nematode) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Slow Decline (Nematode).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Pollu Disease",
        "type": "Insect-Pest",
        "hindi_name": "Pollu Disease rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Pollu Disease.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stunt Disease (Virus)",
        "type": "Insect-Pest",
        "hindi_name": "Stunt Disease (Virus) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stunt Disease (Virus).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mealy Bug",
        "type": "Insect-Pest",
        "hindi_name": "Mealy Bug rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mealy Bug.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "Scale rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Scale.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Top Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "Top Shoot Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Top Shoot Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Gall Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Gall Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Gall Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Pepper Weevil",
        "type": "Insect-Pest",
        "hindi_name": "Pepper Weevil rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Pepper Weevil.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "white-pepper",
    "common_name": "White Pepper",
    "hindi_name": "\u0938\u092b\u0947\u0926 \u092e\u093f\u0930\u094d\u091a",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "Stem Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Nematodes",
        "type": "Nematode",
        "hindi_name": "Nematodes rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Nematodes.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "green-pepper",
    "common_name": "Green Pepper",
    "hindi_name": "\u0939\u0930\u0940 \u092e\u093f\u0930\u094d\u091a",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "Stem Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "long-pepper",
    "common_name": "Long Pepper",
    "hindi_name": "\u092a\u093f\u092a\u094d\u092a\u0932\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cumin",
    "common_name": "Cumin",
    "hindi_name": "\u091c\u0940\u0930\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Wilt (Fusarium)",
        "type": "Fungal",
        "hindi_name": "Wilt (Fusarium) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt (Fusarium).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Blight (Alternaria)",
        "type": "Insect-Pest",
        "hindi_name": "Blight (Alternaria) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Blight (Alternaria).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphid",
        "type": "Insect-Pest",
        "hindi_name": "Aphid rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphid.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "Cutworm rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Cutworm.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "Whitefly rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Whitefly.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "coriander",
    "common_name": "Coriander",
    "hindi_name": "\u0927\u0928\u093f\u092f\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Gall (Protomyces)",
        "type": "Insect-Pest",
        "hindi_name": "Stem Gall (Protomyces) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Gall (Protomyces).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphid",
        "type": "Insect-Pest",
        "hindi_name": "Aphid rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphid.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mite",
        "type": "Insect-Pest",
        "hindi_name": "Mite rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mite.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Spot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Spot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Knot Nematode",
        "type": "Insect-Pest",
        "hindi_name": "Root Knot Nematode rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Knot Nematode.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fennel",
    "common_name": "Fennel",
    "hindi_name": "\u0938\u094c\u0902\u092b",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "fenugreek-seed",
    "common_name": "Fenugreek seed",
    "hindi_name": "\u092e\u0947\u0925\u0940 \u092c\u0940\u091c",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mustard-spice",
    "common_name": "Mustard (spice)",
    "hindi_name": "\u0930\u093e\u0908",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ajwain",
    "common_name": "Ajwain",
    "hindi_name": "\u0905\u091c\u0935\u093e\u092f\u0928",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "nigella",
    "common_name": "Nigella",
    "hindi_name": "\u0915\u0932\u094c\u0902\u091c\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "aniseed",
    "common_name": "Aniseed",
    "hindi_name": "\u0938\u094c\u0902\u092b \u092c\u0940\u091c",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "dill-seed",
    "common_name": "Dill Seed",
    "hindi_name": "\u0938\u094b\u092f\u093e/\u0938\u0941\u0935\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "caraway",
    "common_name": "Caraway",
    "hindi_name": "\u0936\u093e\u0939\u091c\u0940\u0930\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "celery-seed",
    "common_name": "Celery Seed",
    "hindi_name": "\u0905\u091c\u092e\u094b\u0926 \u092c\u0940\u091c",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cardamom-green",
    "common_name": "Cardamom (Small/Green)",
    "hindi_name": "\u0907\u0932\u093e\u092f\u091a\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Harvesting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Calcium deficiency.",
          "solution": "Apply Calcium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Capsule Rot (Azhukal)",
        "type": "Fungal",
        "hindi_name": "Capsule Rot (Azhukal) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Capsule Rot (Azhukal).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Rot",
        "type": "Fungal",
        "hindi_name": "Rhizome Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Katte/Cardamom Mosaic Virus",
        "type": "Insect-Pest",
        "hindi_name": "Katte/Cardamom Mosaic Virus rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Katte/Cardamom Mosaic Virus.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Foorkey/Cardamom Chirke Virus",
        "type": "Insect-Pest",
        "hindi_name": "Foorkey/Cardamom Chirke Virus rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Foorkey/Cardamom Chirke Virus.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Shoot & Panicle Borer",
        "type": "Insect-Pest",
        "hindi_name": "Shoot & Panicle Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Shoot & Panicle Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Grub",
        "type": "Insect-Pest",
        "hindi_name": "Root Grub rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Grub.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "Hairy Caterpillar rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Hairy Caterpillar.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "Whitefly rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Whitefly.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "large-cardamom",
    "common_name": "Large Cardamom (Black)",
    "hindi_name": "\u092c\u0921\u093c\u0940 \u0907\u0932\u093e\u092f\u091a\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Chirke/Foorkey Virus",
        "type": "Insect-Pest",
        "hindi_name": "Chirke/Foorkey Virus rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Chirke/Foorkey Virus.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Capsule Rot",
        "type": "Fungal",
        "hindi_name": "Capsule Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Capsule Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "Stem Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Spot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Spot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Grub",
        "type": "Insect-Pest",
        "hindi_name": "Root Grub rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Grub.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cinnamon",
    "common_name": "Cinnamon",
    "hindi_name": "\u0926\u093e\u0932\u091a\u0940\u0928\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cassia",
    "common_name": "Cassia",
    "hindi_name": "\u0915\u0948\u0938\u093f\u092f\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "clove",
    "common_name": "Clove",
    "hindi_name": "\u0932\u094c\u0902\u0917",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Spot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Spot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Die Back",
        "type": "Insect-Pest",
        "hindi_name": "Die Back rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Die Back.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "Stem Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Scale",
        "type": "Insect-Pest",
        "hindi_name": "Scale rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Scale.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mealybug",
        "type": "Insect-Pest",
        "hindi_name": "Mealybug rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mealybug.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "nutmeg",
    "common_name": "Nutmeg",
    "hindi_name": "\u091c\u093e\u092f\u092b\u0932",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Fruit Rot",
        "type": "Fungal",
        "hindi_name": "Fruit Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Fruit Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Dieback",
        "type": "Insect-Pest",
        "hindi_name": "Dieback rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Dieback.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Shot Hole Borer",
        "type": "Insect-Pest",
        "hindi_name": "Shot Hole Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Shot Hole Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "White Scale",
        "type": "Insect-Pest",
        "hindi_name": "White Scale rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by White Scale.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Blight rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Blight.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thread Blight",
        "type": "Insect-Pest",
        "hindi_name": "Thread Blight rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thread Blight.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Bark Borer",
        "type": "Insect-Pest",
        "hindi_name": "Bark Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Bark Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "ginger",
    "common_name": "Ginger",
    "hindi_name": "\u0905\u0926\u0930\u0915",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Harvesting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Calcium deficiency.",
          "solution": "Apply Calcium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Soft Rot (Pythium)",
        "type": "Fungal",
        "hindi_name": "Soft Rot (Pythium) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Soft Rot (Pythium).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Bacterial Wilt (Ralstonia)",
        "type": "Fungal",
        "hindi_name": "Bacterial Wilt (Ralstonia) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Bacterial Wilt (Ralstonia).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Rot",
        "type": "Fungal",
        "hindi_name": "Rhizome Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Phyllosticta Leaf Spot",
        "type": "Insect-Pest",
        "hindi_name": "Phyllosticta Leaf Spot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Phyllosticta Leaf Spot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "Shoot Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Shoot Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Scale",
        "type": "Insect-Pest",
        "hindi_name": "Rhizome Scale rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Scale.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Insect-Pest",
        "hindi_name": "Root-knot Nematode rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root-knot Nematode.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Fly",
        "type": "Insect-Pest",
        "hindi_name": "Rhizome Fly rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Fly.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Roller",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Roller rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Roller.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "turmeric",
    "common_name": "Turmeric",
    "hindi_name": "\u0939\u0932\u094d\u0926\u0940",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Harvesting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Calcium deficiency.",
          "solution": "Apply Calcium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizome Rot (Pythium)",
        "type": "Fungal",
        "hindi_name": "Rhizome Rot (Pythium) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Rot (Pythium).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Blotch (Taphrina)",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Blotch (Taphrina) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Blotch (Taphrina).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Spot (Colletotrichum)",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Spot (Colletotrichum) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Spot (Colletotrichum).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Shoot Borer",
        "type": "Insect-Pest",
        "hindi_name": "Shoot Borer rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Shoot Borer.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Scale",
        "type": "Insect-Pest",
        "hindi_name": "Rhizome Scale rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Scale.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Insect-Pest",
        "hindi_name": "Root-knot Nematode rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root-knot Nematode.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizome Fly",
        "type": "Insect-Pest",
        "hindi_name": "Rhizome Fly rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizome Fly.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Lacewing Bug",
        "type": "Insect-Pest",
        "hindi_name": "Lacewing Bug rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Lacewing Bug.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "galangal",
    "common_name": "Galangal",
    "hindi_name": "\u0915\u0941\u0932\u0902\u091c\u0928",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "allspice",
    "common_name": "Allspice",
    "hindi_name": "\u0911\u0932\u0938\u094d\u092a\u093e\u0907\u0938",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "star-anise",
    "common_name": "Star Anise",
    "hindi_name": "\u091a\u0915\u094d\u0930 \u092b\u0942\u0932",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "saffron",
    "common_name": "Saffron",
    "hindi_name": "\u0915\u0947\u0938\u0930",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Magnesium deficiency.",
          "solution": "Apply Magnesium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Corm Rot",
        "type": "Fungal",
        "hindi_name": "Corm Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Corm Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Fusarium",
        "type": "Insect-Pest",
        "hindi_name": "Fusarium rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Fusarium.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Rhizoctonia",
        "type": "Insect-Pest",
        "hindi_name": "Rhizoctonia rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rhizoctonia.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Nematode",
        "type": "Insect-Pest",
        "hindi_name": "Nematode rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Nematode.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "vanilla",
    "common_name": "Vanilla",
    "hindi_name": "\u0935\u0928\u0940\u0932\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "Root Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Root Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stem Rot (Fusarium)",
        "type": "Fungal",
        "hindi_name": "Stem Rot (Fusarium) rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stem Rot (Fusarium).",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Anthracnose",
        "type": "Insect-Pest",
        "hindi_name": "Anthracnose rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Anthracnose.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Bean Bug",
        "type": "Insect-Pest",
        "hindi_name": "Bean Bug rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Bean Bug.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Slug/Snail",
        "type": "Insect-Pest",
        "hindi_name": "Slug/Snail rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Slug/Snail.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bay-leaf",
    "common_name": "Bay Leaf",
    "hindi_name": "\u0924\u0947\u091c\u092a\u0924\u094d\u0924\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "mint",
    "common_name": "Mint",
    "hindi_name": "\u092a\u0941\u0926\u0940\u0928\u093e",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      },
      {
        "stage_name": "Maturity",
        "day_range": "80-100",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Maturity stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of leaves, stunted growth indicating Iron deficiency.",
          "solution": "Apply Iron rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Insect-Pest",
        "hindi_name": "Rust rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Rust.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Insect-Pest",
        "hindi_name": "Leaf Blight rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Leaf Blight.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Stolon Rot",
        "type": "Fungal",
        "hindi_name": "Stolon Rot rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Stolon Rot.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Cutworm",
        "type": "Insect-Pest",
        "hindi_name": "Cutworm rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Cutworm.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "Hairy Caterpillar rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Hairy Caterpillar.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Mites",
        "type": "Insect-Pest",
        "hindi_name": "Mites rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Mites.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "lemongrass",
    "common_name": "Lemongrass",
    "hindi_name": "\u0932\u0947\u092e\u0928\u0917\u094d\u0930\u093e\u0938",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Yellowing of leaves, stunted growth indicating Zinc deficiency.",
          "solution": "Apply Zinc rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "Wilt rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Wilt.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
  {
    "crop_id": "asafoetida",
    "common_name": "Asafoetida",
    "hindi_name": "\u0939\u0940\u0902\u0917",
    "regional_names": {
      "marathi": "",
      "punjabi": "",
      "tamil": "",
      "telugu": ""
    },
    "category": "Spice",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling/Sprouting",
        "day_range": "0-20",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Seedling/Sprouting stage."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Vegetative Growth stage."
      },
      {
        "stage_name": "Flowering",
        "day_range": "40-60",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Flowering stage."
      },
      {
        "stage_name": "Fruit/Seed Setting",
        "day_range": "60-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Monitor moisture and nutrients during Fruit/Seed Setting stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.5",
      "basal_dose_per_acre": "10 tons FYM, 50kg N, 40kg P, 30kg K",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of leaves, stunted growth indicating Nitrogen deficiency.",
          "solution": "Apply Nitrogen rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Yellowing of leaves, stunted growth indicating Phosphorus deficiency.",
          "solution": "Apply Phosphorus rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Yellowing of leaves, stunted growth indicating Potassium deficiency.",
          "solution": "Apply Potassium rich fertilizer, e.g., Urea/SSP/MOP or micronutrient mix at 50g/15L pump, 500g/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "Aphids rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Aphids.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Thrips",
        "type": "Insect-Pest",
        "hindi_name": "Thrips rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Thrips.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "10 ml",
            "dose_per_acre": "100 ml",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      },
      {
        "issue_name": "Powdery Mildew",
        "type": "Fungal",
        "hindi_name": "Powdery Mildew rog",
        "symptoms": "Visible damage on leaves, stems or roots caused by Powdery Mildew.",
        "favorable_weather": "High humidity, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, proper spacing, field sanitation.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L pump or Trichoderma viride @ 50g/15L pump.",
            "mechanical": "Use yellow/blue sticky traps 10-15 per acre."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40 g",
            "dose_per_acre": "400 g",
            "waiting_period_phi": "7-14 Days",
            "application_instructions": "Spray evenly covering both sides of foliage."
          }
        }
      }
    ]
  },
{
    "crop_id": "ashwagandha",
    "common_name": "Ashwagandha",
    "hindi_name": "अश्वगंधा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Dark brown circular spots with concentric rings.",
        "favorable_weather": "High humidity, temp 25-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Alternaria Leaf Blight"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Parasitic Weed",
        "hindi_name": "ओरोबैन्क/टोका",
        "symptoms": "Yellow unbranched stems near roots, stunting host.",
        "favorable_weather": "Dry soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "None.",
            "mechanical": "Manual uprooting."
          },
          "chemical_curative": {
            "active_ingredient": "No specific post-emergence chemical.",
            "commercial_reference": "-",
            "dose_per_15L_pump": "-",
            "dose_per_acre": "-",
            "waiting_period_phi": "-",
            "application_instructions": "Rely on mechanical."
          }
        },
        "issue_name": "Orobanche"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "shatavari",
    "common_name": "Shatavari",
    "hindi_name": "शतावरी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "sarpagandha",
    "common_name": "Sarpagandha",
    "hindi_name": "सर्पगंधा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "senna",
    "common_name": "Senna",
    "hindi_name": "सन्ना/सनाय",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Dark brown circular spots with concentric rings.",
        "favorable_weather": "High humidity, temp 25-30°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds.",
            "biological_spray": "Pseudomonas fluorescens @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Alternaria Leaf Blight"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "isabgol",
    "common_name": "Isabgol",
    "hindi_name": "ईसबगोल",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "डाउनी मिल्ड्यू",
        "symptoms": "Yellow angular spots on upper surface and purplish downy growth on lower surface.",
        "favorable_weather": "High humidity (>85%) and cool temperatures (15-20°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve aeration.",
            "biological_spray": "Trichoderma viride 50g/15L pump",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on both leaf surfaces."
          }
        },
        "issue_name": "Downy Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "kalmegh",
    "common_name": "Kalmegh",
    "hindi_name": "कालमेघ",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      }
    ]
  },
  {
    "crop_id": "brahmi",
    "common_name": "Brahmi",
    "hindi_name": "ब्राह्मी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "tulsi",
    "common_name": "Tulsi",
    "hindi_name": "तुलसी",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      }
    ]
  },
  {
    "crop_id": "aloe_vera",
    "common_name": "Aloe Vera",
    "hindi_name": "एलोवेरा",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "stevia",
    "common_name": "Stevia",
    "hindi_name": "स्टीविया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "artemisia",
    "common_name": "Artemisia",
    "hindi_name": "आर्टेमिसिया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "giloy",
    "common_name": "Giloy",
    "hindi_name": "गिलोय",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "poppy",
    "common_name": "Poppy",
    "hindi_name": "अफीम",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "डाउनी मिल्ड्यू",
        "symptoms": "Yellow angular spots on upper surface and purplish downy growth on lower surface.",
        "favorable_weather": "High humidity (>85%) and cool temperatures (15-20°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Improve aeration.",
            "biological_spray": "Trichoderma viride 50g/15L pump",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray thoroughly on both leaf surfaces."
          }
        },
        "issue_name": "Downy Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "belladonna",
    "common_name": "Belladonna",
    "hindi_name": "बेलाडोना",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "digitalis",
    "common_name": "Digitalis",
    "hindi_name": "डिजिटेलिस",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "cinchona",
    "common_name": "Cinchona",
    "hindi_name": "सिनकोना",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "neem_medicinal",
    "common_name": "Neem",
    "hindi_name": "नीम",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "st_johns_wort",
    "common_name": "St. John's Wort",
    "hindi_name": "सेंट जॉन्स वॉर्ट",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "valerian",
    "common_name": "Valerian",
    "hindi_name": "वेलेरियन",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "echinacea",
    "common_name": "Echinacea",
    "hindi_name": "एकिनेसिया",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "ginseng",
    "common_name": "Ginseng",
    "hindi_name": "जिन्सेंग",
    "regional_names": {},
    "category": "Medicinal",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "citronella",
    "common_name": "Citronella",
    "hindi_name": "सिट्रोनेला",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      }
    ]
  },
  {
    "crop_id": "lemongrass",
    "common_name": "Lemongrass",
    "hindi_name": "लेमनग्रास",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      }
    ]
  },
  {
    "crop_id": "palmarosa",
    "common_name": "Palmarosa",
    "hindi_name": "पामारोज़ा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "vetiver",
    "common_name": "Vetiver",
    "hindi_name": "खस",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "geranium",
    "common_name": "Geranium",
    "hindi_name": "जीरेनियम",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "patchouli",
    "common_name": "Patchouli",
    "hindi_name": "पचौली",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "lavender",
    "common_name": "Lavender",
    "hindi_name": "लैवेंडर",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "mentha",
    "common_name": "Mentha",
    "hindi_name": "मेंथा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "rose_damask",
    "common_name": "Rose",
    "hindi_name": "गुलाब",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      },
      {
        "stage_name": "Post-Harvest Processing",
        "day_range": "140+",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Dry in shade, maintain temperature to retain volatile oils."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        },
        {
          "nutrient": "Boron",
          "symptoms": "Terminal bud death, brittle leaves, hollow stems.",
          "solution": "Borax (20%) 15g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "jasmine",
    "common_name": "Jasmine",
    "hindi_name": "चमेली",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed free field.",
            "biological_spray": "Trichoderma @ 50g/15L",
            "mechanical": "Remove early infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% EC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Thorough coverage."
          }
        },
        "issue_name": "Rust"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "थ्रिप्स",
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Overhead irrigation.",
            "biological_spray": "Neem oil @ 30ml/15L",
            "mechanical": "Blue sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "25ml",
            "dose_per_acre": "250ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Foliar spray."
          }
        },
        "issue_name": "Thrips"
      }
    ]
  },
  {
    "crop_id": "chamomile",
    "common_name": "Chamomile",
    "hindi_name": "कैमोमाइल",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Early Growth",
        "day_range": "0-30",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Frequent light irrigations."
      },
      {
        "stage_name": "Vegetative Phase",
        "day_range": "31-70",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."
      },
      {
        "stage_name": "Pre-harvest/Maturity",
        "day_range": "71-100",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Restricted irrigation. Protect from diseases."
      },
      {
        "stage_name": "Harvesting",
        "day_range": "100-120",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at correct physiological maturity."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      }
    ]
  },
  {
    "crop_id": "tuberose",
    "common_name": "Tuberose",
    "hindi_name": "रजनीगंधा",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "फ्यूजेरियम उकठा",
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, soil solarization.",
            "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil",
            "mechanical": "Uproot diseased plants."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Soil drenching around root zone."
          }
        },
        "issue_name": "Fusarium Wilt"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Marigold crop rotation.",
            "biological_spray": "Purpureocillium lilacinum soil application",
            "mechanical": "Deep summer ploughing."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "4 kg/acre",
            "waiting_period_phi": "45 Days",
            "application_instructions": "Soil application before sowing."
          }
        },
        "issue_name": "Nematode"
      }
    ]
  },
  {
    "crop_id": "eucalyptus_oil",
    "common_name": "Eucalyptus",
    "hindi_name": "नीलगिरी",
    "regional_names": {},
    "category": "Aromatic",
    "season": [
      "Kharif",
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Sowing/Transplanting",
        "day_range": "0-15",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure good soil moisture for uniform establishment."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "16-45",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."
      },
      {
        "stage_name": "Active Growth/Branching",
        "day_range": "46-80",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure pest management. Apply micronutrients if required."
      },
      {
        "stage_name": "Flowering/Maturation",
        "day_range": "81-110",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Avoid water stress. Stop harsh chemical sprays."
      },
      {
        "stage_name": "Harvest",
        "day_range": "111-140",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Stunted growth, pale green to yellow older leaves.",
          "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green leaves with purplish tint, poor root growth.",
          "solution": "DAP 100g/15L pump foliar spray"
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching and browning of older leaves.",
          "solution": "MOP 50g/15L pump spray"
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.",
          "solution": "Zinc Sulphate (21%) 30g/15L pump"
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves, veins remain green.",
          "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Pseudomonas @ 50g/15L",
            "mechanical": "Remove infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray early morning."
          }
        },
        "issue_name": "Leaf Spot"
      },
      {
        "type": "Fungal",
        "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद",
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation, proper spacing.",
            "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray at disease onset."
          }
        },
        "issue_name": "Powdery Mildew"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excess N.",
            "biological_spray": "Neem oil 10000 ppm @ 30ml/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting leaf undersides."
          }
        },
        "issue_name": "Aphids"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Weed management.",
            "biological_spray": "Lecanicillium lecanii @ 50g/15L",
            "mechanical": "Yellow sticky traps @ 10/acre."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride, Dhanpreet",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Ensure complete coverage."
          }
        },
        "issue_name": "Whitefly"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "मकड़ी/माइट",
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field moisture.",
            "biological_spray": "Beauveria bassiana @ 50g/15L",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propargite 57% EC",
            "commercial_reference": "Omite",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray leaf undersurfaces thoroughly."
          }
        },
        "issue_name": "Spider Mites"
      },
      {
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki @ 30g/15L",
            "mechanical": "Pheromone traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "20 Days",
            "application_instructions": "Spray on early symptoms."
          }
        },
        "issue_name": "Stem Borer"
      }
    ]
  },
{
    "crop_id": "berseem",
    "common_name": "Berseem / Egyptian Clover",
    "hindi_name": "बरसीम",
    "regional_names": {
      "punjabi": "ਬਾਠ",
      "marathi": "बरसीम",
      "telugu": "బర్సీం",
      "gujarati": "બરસીમ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Ensure sufficient moisture for proper emergence."
      },
      {
        "stage_name": "First Cut",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply light irrigation after first cutting to stimulate regrowth."
      },
      {
        "stage_name": "Subsequent Cuts",
        "day_range": "Every 30-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain soil moisture for continuous vegetative growth."
      },
      {
        "stage_name": "Seed Setting",
        "day_range": "150-180 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Reduce irrigation to allow seed maturation."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "8 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green leaves with purplish margins.",
          "solution": "Apply 10 kg P2O5 per acre or spray NPK 19:19:19 at 75g/15L pump."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of older leaves, poor regrowth after cutting.",
          "solution": "Apply Urea 10 kg/acre after cutting."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, shortened internodes, chlorotic patches.",
          "solution": "Spray Zinc Sulphate at 30g/15L pump."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Poor nodulation, pale leaves similar to N deficiency.",
          "solution": "Seed treatment with Sodium Molybdate 1g/kg seed."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing of new leaves, spindly growth.",
          "solution": "Apply Bentonite Sulfur 10 kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Rot",
        "type": "Fungal",
        "hindi_name": "तना गलन",
        "symptoms": "White mycelial growth on stems near soil line, rotting of stems.",
        "favorable_weather": "High humidity, continuous wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid waterlogging, maintain proper drainage.",
            "biological_spray": "Trichoderma viride at 100g/15L pump.",
            "mechanical": "Remove infected plant debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf, Sprint",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray focusing on the basal region of the plants."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting of plants, roots turn brown and soft.",
        "favorable_weather": "Poor drainage, high soil moisture.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation, improve soil drainage.",
            "biological_spray": "Pseudomonas fluorescens 100ml/15L pump.",
            "mechanical": "Uproot and destroy affected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Soil drenching around infected patches."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellowish patches on upper leaf surface, purplish growth on lower surface.",
        "favorable_weather": "Cool and humid weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Wider spacing, avoid late planting.",
            "biological_spray": "Bacillus subtilis at 50ml/15L pump.",
            "mechanical": "Remove severely infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% SC",
            "commercial_reference": "Custodia",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray at the first sign of disease."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू/चेपा",
        "symptoms": "Nymphs and adults suck sap from tender shoots, causing curling and yellowing.",
        "favorable_weather": "Cloudy weather, moderate temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Install yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm at 50ml/15L pump.",
            "mechanical": "Use water spray to wash off aphids."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor, Tata Mida",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray ensuring thorough coverage, avoid feeding directly after spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Larvae feed on leaves greedily, leaving only midribs.",
        "favorable_weather": "Warm and humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Plow field post-harvest to expose pupae.",
            "biological_spray": "Beauveria bassiana 100g/15L pump.",
            "mechanical": "Handpick large caterpillars if feasible."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim, Missile",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during late evening hours."
          }
        }
      }
    ]
  },
  {
    "crop_id": "lucerne",
    "common_name": "Lucerne / Alfalfa",
    "hindi_name": "रिजका",
    "regional_names": {
      "marathi": "लसूण घास",
      "punjabi": "ਲੂਸਣ",
      "gujarati": "રજકો",
      "telugu": "లూసర్న్"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain even moisture, avoid waterlogging."
      },
      {
        "stage_name": "Early Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply light irrigation, manage weeds."
      },
      {
        "stage_name": "First Cut",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cut at 10% bloom stage for best quality."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Every 25-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate promptly after cutting."
      },
      {
        "stage_name": "Flowering/Seed Production",
        "day_range": "100+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce water if seed production is desired."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-7.5",
      "basal_dose_per_acre": "10 kg N, 32 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted, dark blue-green foliage, slow regrowth.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "White or yellow spots on leaf margins, later necrotic.",
          "solution": "Apply MOP 20 kg/acre."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Yellowing/reddening of upper leaves, shortened internodes.",
          "solution": "Spray Boron 20% at 15g/15L pump."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "General yellowing, thin stems.",
          "solution": "Apply Gypsum 100 kg/acre."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Curling of young leaves, poor nodulation.",
          "solution": "Lime application in acidic soils."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Pale green/yellow leaves with gray mould on underside.",
        "favorable_weather": "Cool, wet conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, clean seed.",
            "biological_spray": "Pseudomonas fluorescens 100ml/15L pump.",
            "mechanical": "Early cutting to reduce loss."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Small brown spots on leaves causing premature defoliation.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut the crop early to save yield.",
            "biological_spray": "Trichoderma 100g/15L pump.",
            "mechanical": "Remove infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if severity is high in seed crops."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap, yellowing leaves, honeydew production.",
        "favorable_weather": "Cool, dry weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm 50ml/15L.",
            "mechanical": "Water spray."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara, Areva",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g in 150L water",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Avoid spraying if ladybird beetles are active."
          }
        }
      },
      {
        "issue_name": "Alfalfa Weevil",
        "type": "Insect-Pest",
        "hindi_name": "रिजका घुन",
        "symptoms": "Larvae skeletonize leaves, adults notch leaf edges.",
        "favorable_weather": "Early spring.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest to disrupt life cycle.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Flame throwers for stubble (rare)."
          },
          "chemical_curative": {
            "active_ingredient": "Indoxacarb 14.5% SC",
            "commercial_reference": "Avaunt",
            "dose_per_15L_pump": "10ml",
            "dose_per_acre": "100ml in 150L water",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray targeting larvae."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Complete defoliation, larvae hide in soil during day.",
        "favorable_weather": "Warm and moist.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt kurstaki.",
            "mechanical": "Light traps."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml in 150L water",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray evenly."
          }
        }
      },
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Galls on roots, yellowing and stunting of plants.",
        "favorable_weather": "Sandy soils, warm temperatures.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation with non-hosts like grasses.",
            "biological_spray": "Purpureocillium lilacinum soil application.",
            "mechanical": "Solarization of soil."
          },
          "chemical_curative": {
            "active_ingredient": "Fluensulfone 2% GR",
            "commercial_reference": "Nimitz",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application before sowing."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cowpea-fodder",
    "common_name": "Cowpea (Fodder)",
    "hindi_name": "लोबिया (चारा)",
    "regional_names": {
      "marathi": "चवळी",
      "tamil": "కారంమణి",
      "kannada": "ಅಲಸಂದೆ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure adequate soil moisture."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Critical for biomass accumulation."
      },
      {
        "stage_name": "Pre-flowering/Harvest",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 50% flowering for best fodder quality."
      },
      {
        "stage_name": "Seed Formation (if left for seed)",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Irrigate to ensure good seed filling."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale green leaves, slow growth (indicates poor nodulation).",
          "solution": "Apply 10 kg Urea if nodulation is poor."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, dark green to purple leaves.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis in young leaves.",
          "solution": "Spray Ferrous Sulfate at 30g/15L pump."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves, short internodes.",
          "solution": "Spray Zinc Sulphate at 30g/15L pump."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling of leaves, honeydew, sooty mold.",
        "favorable_weather": "Dry and cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil 1500 ppm 50ml/15L.",
            "mechanical": "Strong water jet."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Small shot holes in leaves.",
        "favorable_weather": "Dry conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves with yellow halos.",
        "favorable_weather": "High humidity, warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove debris."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severity high."
          }
        }
      },
      {
        "issue_name": "Mosaic Virus",
        "type": "Viral",
        "hindi_name": "मोज़ेक वायरस",
        "symptoms": "Mottling, blistering, and distortion of leaves.",
        "favorable_weather": "Presence of aphid vectors.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties, control vectors.",
            "biological_spray": "Neem oil against vectors.",
            "mechanical": "Rogue out infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP (Vector control)",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray to control aphid vectors."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Larvae bore into pods and eat developing seeds (if left for seed).",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps (Helilure).",
            "biological_spray": "HaNPV.",
            "mechanical": "Hand pick larvae."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray during flowering/podding."
          }
        }
      }
    ]
  },
  {
    "crop_id": "stylosanthes",
    "common_name": "Stylosanthes",
    "hindi_name": "स्टाइलो",
    "regional_names": {
      "telugu": "స్టైలో",
      "kannada": "ಸ್ಟೈಲೊ"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow initial growth, control weeds."
      },
      {
        "stage_name": "Active Vegetative",
        "day_range": "40-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant, responds well to rain."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "High biomass stage."
      },
      {
        "stage_name": "Harvest",
        "day_range": "110-120 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut before stems become too woody."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, poor biomass.",
          "solution": "Apply 20 kg P2O5 at sowing."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing of young leaves.",
          "solution": "Use SSP as phosphorus source."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Nitrogen deficiency symptoms.",
          "solution": "Seed treatment with Sodium Molybdate."
        },
        {
          "nutrient": "Calcium",
          "symptoms": "Poor root development in acidic soils.",
          "solution": "Liming if pH is very low."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Anthracnose",
        "type": "Fungal",
        "hindi_name": "एन्थ्रेक्नोज",
        "symptoms": "Dark brown lesions on stems and leaves, leading to dieback.",
        "favorable_weather": "High rainfall, warm conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use resistant varieties (e.g., Seca).",
            "biological_spray": "Trichoderma spp.",
            "mechanical": "Destroy infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Wilting of branches, holes in stems.",
        "favorable_weather": "Dry spells.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pruning of affected branches.",
            "biological_spray": "Beauveria bassiana.",
            "mechanical": "Burn infected debris."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 5% SC",
            "commercial_reference": "Regent",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if damage is high."
          }
        }
      },
      {
        "issue_name": "Web Blight",
        "type": "Fungal",
        "hindi_name": "वेब ब्लाइट",
        "symptoms": "Mycelial web over leaves in humid conditions.",
        "favorable_weather": "High humidity, prolonged rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid dense canopies.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Improve air circulation."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Termites",
        "type": "Insect-Pest",
        "hindi_name": "दीमक",
        "symptoms": "Wilting, roots eaten away.",
        "favorable_weather": "Dry soils.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use well decomposed manure.",
            "biological_spray": "Metarhizium anisopliae.",
            "mechanical": "Destroy termite mounds."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorpyrifos 20% EC",
            "commercial_reference": "Durmet",
            "dose_per_15L_pump": "50ml",
            "dose_per_acre": "500ml",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil drenching."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cluster-bean-fodder",
    "common_name": "Cluster Bean (Fodder)",
    "hindi_name": "ग्वार (चारा)",
    "regional_names": {
      "gujarati": "ગુવાર",
      "punjabi": "ਗੁਆਰਾ",
      "marathi": "गवार"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Needs light moisture to establish."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-45 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought hardy, fast growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest for fodder at 50% flowering."
      },
      {
        "stage_name": "Pod Formation (if seed)",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Critical for seed setting."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "8 kg N, 16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted plants, poor nodulation.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of old leaves in early stages.",
          "solution": "Apply small starter dose of Nitrogen."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf, stunted growth.",
          "solution": "Spray Zinc Sulphate 30g/15L pump."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in young leaves in alkaline soils.",
          "solution": "Foliar spray of FeSO4 at 0.5%."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Water soaked spots on leaves, blackening of stems.",
        "favorable_weather": "High humidity, continuous rain.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free seeds, crop rotation.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Remove infected plants."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 40g",
            "dose_per_acre": "20g + 400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray during clear weather."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Yellowing of leaf margins, cupping of leaves.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Neem Oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "अल्टरनेरिया झुलसा",
        "symptoms": "Concentric dark brown rings on leaves.",
        "favorable_weather": "Warm, wet weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Field sanitation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove lower infected leaves."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Whitefly",
        "type": "Insect-Pest",
        "hindi_name": "सफेद मक्खी",
        "symptoms": "Vectors leaf curl virus, sucks sap.",
        "favorable_weather": "Hot and dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Yellow sticky traps.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Acetamiprid 20% SP",
            "commercial_reference": "Pride",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "desmodium",
    "common_name": "Desmodium",
    "hindi_name": "डेस्मोडियम",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow to establish, requires weed control."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "40-90 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Provides good grazing."
      },
      {
        "stage_name": "Flowering",
        "day_range": "100-120 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Peak biomass."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cutting",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates heavy grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.0-6.5",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Poor growth.",
          "solution": "Apply SSP 100 kg/acre."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Poor nodulation in acidic soils.",
          "solution": "Seed treatment."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis.",
          "solution": "Apply MOP 15 kg/acre."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Root-knot Nematode",
        "type": "Nematode",
        "hindi_name": "सूत्रकृमि",
        "symptoms": "Stunting, galls on roots.",
        "favorable_weather": "Sandy soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Purpureocillium lilacinum.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "5 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown necrotic spots on leaves.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Cool, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "siratro",
    "common_name": "Siratro",
    "hindi_name": "सिराट्रो",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vining",
        "day_range": "30-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Spreads rapidly."
      },
      {
        "stage_name": "Flowering",
        "day_range": "90-110 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Biomass peak."
      },
      {
        "stage_name": "Harvest/Grazing",
        "day_range": "Ongoing",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.0",
      "basal_dose_per_acre": "10 kg N, 20 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "ZnSO4 spray."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Pale leaves.",
          "solution": "Seed treatment."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rhizoctonia Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Webbing and rotting of leaves.",
        "favorable_weather": "Humid, warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid dense stands.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Bean Fly",
        "type": "Insect-Pest",
        "hindi_name": "बीन फ्लाई",
        "symptoms": "Seedling wilting.",
        "favorable_weather": "Warm weather.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early sowing.",
            "biological_spray": "Neem extract.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Dimethoate 30% EC",
            "commercial_reference": "Rogor",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray early."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Rusty pustules on leaves.",
        "favorable_weather": "High humidity.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Hexaconazole 5% SC",
            "commercial_reference": "Contaf",
            "dose_per_15L_pump": "20ml",
            "dose_per_acre": "200ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "vetch",
    "common_name": "Vetch",
    "hindi_name": "वेच/रेवासी",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Rapid vine growth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "70-90 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Peak forage quality."
      },
      {
        "stage_name": "Pod Fill (if seed)",
        "day_range": "100+ days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Requires moisture for seeds."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "10 kg N, 24 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted, dark leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Leaf margin burn.",
          "solution": "Apply MOP."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Yellowing new leaves.",
          "solution": "Apply Bentonite sulfur."
        },
        {
          "nutrient": "Boron",
          "symptoms": "Poor seed set.",
          "solution": "Spray Boron."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Curling leaves.",
        "favorable_weather": "Cool, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Downy Mildew",
        "type": "Fungal",
        "hindi_name": "मृदुरोमिल आसिता",
        "symptoms": "Yellow patches, gray mold.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Spacing.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Metalaxyl + Mancozeb",
            "commercial_reference": "Ridomil Gold",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Botrytis Rot",
        "type": "Fungal",
        "hindi_name": "गलन",
        "symptoms": "Gray fluffy mold on stems/leaves.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Canopy management.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove infected parts."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Pea Weevil",
        "type": "Insect-Pest",
        "hindi_name": "वीविल",
        "symptoms": "Holes in seeds/leaves.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean seed.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "napier-grass",
    "common_name": "Napier Grass / Hybrid Napier",
    "hindi_name": "नेपियर घास",
    "regional_names": {
      "marathi": "हत्ती घास",
      "punjabi": "ਨੇਪੀਅਰ",
      "telugu": "నేపియర్"
    },
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment (Rooted slips)",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep soil moist for slips to root."
      },
      {
        "stage_name": "First Cut",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 1-1.5m height."
      },
      {
        "stage_name": "Regrowth/Subsequent Cuts",
        "day_range": "Every 45 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Apply nitrogen and irrigate immediately after each cut."
      },
      {
        "stage_name": "Winter Dormancy",
        "day_range": "Dec-Jan",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Reduce irrigation, do not harvest."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.5-8.0",
      "basal_dose_per_acre": "20 kg N, 20 kg P2O5, 16 kg K2O",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing of entire plant, slow regrowth.",
          "solution": "Apply 20 kg N/acre after every cut."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted tillering, purplish leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal scorching of older leaves.",
          "solution": "Apply MOP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Pale bands near leaf base.",
          "solution": "Spray Zinc Sulphate 30g/15L."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis on new leaves.",
          "solution": "Spray FeSO4 30g/15L."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Smut",
        "type": "Fungal",
        "hindi_name": "कंडवा",
        "symptoms": "Black powdery mass on inflorescence/stems.",
        "favorable_weather": "Humid conditions.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Use disease-free planting material.",
            "biological_spray": "Trichoderma.",
            "mechanical": "Remove and burn infected tillers."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Long spindle shaped brown lesions.",
        "favorable_weather": "Warm and humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid excessive nitrogen.",
            "biological_spray": "Pseudomonas fluorescens.",
            "mechanical": "Harvest early."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart in young tillers.",
        "favorable_weather": "Warm, dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut close to ground level.",
            "biological_spray": "Bt.",
            "mechanical": "Remove dead hearts."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap from tender leaves.",
        "favorable_weather": "Cloudy.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain field hygiene.",
            "biological_spray": "Neem Oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Mealy Bug",
        "type": "Insect-Pest",
        "hindi_name": "मिलीबग",
        "symptoms": "White cottony mass on leaf sheaths.",
        "favorable_weather": "Dry periods.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Remove alternative weed hosts.",
            "biological_spray": "Verticillium lecanii.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray directly on bugs."
          }
        }
      }
    ]
  },
  {
    "crop_id": "guinea-grass",
    "common_name": "Guinea Grass",
    "hindi_name": "गिनी घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tolerates shade, good for intercropping."
      },
      {
        "stage_name": "First Cut",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Harvest at 50-75cm height."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Every 35-40 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires moisture for good regrowth."
      },
      {
        "stage_name": "Flowering",
        "day_range": "Post 90 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Nutritional quality drops rapidly after flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5, 15 kg K2O",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing, slow growth.",
          "solution": "Apply 10 kg N/acre after every cut."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple tint on leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Magnesium",
          "symptoms": "Interveinal chlorosis in old leaves.",
          "solution": "Spray MgSO4."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Stunted tillering.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Ergot",
        "type": "Fungal",
        "hindi_name": "अरगट",
        "symptoms": "Sticky exudate on inflorescence.",
        "favorable_weather": "Cool, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Harvest before flowering.",
            "biological_spray": "None.",
            "mechanical": "Remove infected heads."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart in young tillers.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early planting.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Foliar spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean cultivation.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "para-grass",
    "common_name": "Para Grass",
    "hindi_name": "पारा घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Loves waterlogged conditions."
      },
      {
        "stage_name": "Vegetative Growth",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Rapid trailing growth."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cut",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Maintain flooded or very wet soil."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "White bud/patches.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Brown patches on leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely cutting.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Dead heart.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Water management.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Grasshoppers",
        "type": "Insect-Pest",
        "hindi_name": "टिड्डा",
        "symptoms": "Chewed leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Neem oil.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rhodes-grass",
    "common_name": "Rhodes Grass",
    "hindi_name": "रोड्स घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-14 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Fine seedbed needed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Drought tolerant once established."
      },
      {
        "stage_name": "Harvest",
        "day_range": "70-80 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at early flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Pale leaves.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early cut.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Fall Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "फॉल आर्मीवर्म",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Metarhizium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Scale Insects",
        "type": "Insect-Pest",
        "hindi_name": "स्केल कीट",
        "symptoms": "White scales on stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Neem oil.",
            "biological_spray": "Lecanicillium.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Profenofos 50% EC",
            "commercial_reference": "Curacron",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sudan-grass",
    "common_name": "Sudan Grass",
    "hindi_name": "सूडान घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Seedling",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Beware of prussic acid (HCN) if stressed."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-50 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Fast growth."
      },
      {
        "stage_name": "Harvest",
        "day_range": "50-60 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Harvest at boot stage. Never graze when very young due to HCN."
      },
      {
        "stage_name": "Regrowth",
        "day_range": "Post-cut",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple tint.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Interveinal chlorosis.",
          "solution": "Spray FeSO4."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "White bands.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Blight",
        "type": "Fungal",
        "hindi_name": "पत्ती झुलसा",
        "symptoms": "Large necrotic lesions.",
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
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Shoot Fly",
        "type": "Insect-Pest",
        "hindi_name": "तना मक्खी",
        "symptoms": "Dead heart.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "High seed rate.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Cypermethrin 25% EC",
            "commercial_reference": "Super Killer",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Cut at ground level.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Reddish pustules.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "rye-grass",
    "common_name": "Rye Grass",
    "hindi_name": "राई घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Keep moist."
      },
      {
        "stage_name": "Tillering",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Apply nitrogen."
      },
      {
        "stage_name": "Harvest",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cut before heading."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Purple leaf base.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Tip burn.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Crown Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Orange pustules on leaves.",
        "favorable_weather": "Mild, humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Bacillus subtilis.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Timely cutting.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "timothy-grass",
    "common_name": "Timothy Grass",
    "hindi_name": "टिमोथी घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Slow to establish."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Cool weather preferred."
      },
      {
        "stage_name": "Harvest",
        "day_range": "80+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at early bloom."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "12 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Weak stems.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Yellow/brown pustules.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Dry, cool.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Sticky traps.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "orchard-grass",
    "common_name": "Orchard Grass / Cocksfoot",
    "hindi_name": "ओर्कर्ड घास",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Rabi"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Tolerates shade."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Clump forming."
      },
      {
        "stage_name": "Harvest",
        "day_range": "80+ days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Cut at boot stage."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "15 kg N, 15 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Potassium",
          "symptoms": "Marginal necrosis.",
          "solution": "Apply MOP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early harvest.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Rust",
        "type": "Fungal",
        "hindi_name": "रतुआ",
        "symptoms": "Pustules.",
        "favorable_weather": "Cool, wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Resistant varieties.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Propiconazole 25% EC",
            "commercial_reference": "Tilt",
            "dose_per_15L_pump": "15ml",
            "dose_per_acre": "150ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "bermuda-grass",
    "common_name": "Bermuda Grass / Dub",
    "hindi_name": "दूब/दूर्वा",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Fodder",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-30 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Spreads via runners/rhizomes."
      },
      {
        "stage_name": "Active Growth",
        "day_range": "30-60 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Highly drought tolerant."
      },
      {
        "stage_name": "Grazing/Cut",
        "day_range": "Ongoing",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Withstands heavy grazing."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-8.5",
      "basal_dose_per_acre": "10 kg N, 10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing.",
          "solution": "Apply Urea."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis in alkaline soils.",
          "solution": "Spray FeSO4."
        },
        {
          "nutrient": "Phosphorus",
          "symptoms": "Dark green, slow growth.",
          "solution": "Apply SSP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Avoid overwatering.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "White Grub",
        "type": "Insect-Pest",
        "hindi_name": "सफेद गिडार",
        "symptoms": "Roots eaten, dead patches.",
        "favorable_weather": "Monsoon.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Deep ploughing.",
            "biological_spray": "Metarhizium.",
            "mechanical": "Light traps for beetles."
          },
          "chemical_curative": {
            "active_ingredient": "Fipronil 0.3% GR",
            "commercial_reference": "Regent GR",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "7 kg",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Soil application."
          }
        }
      },
      {
        "issue_name": "Armyworm",
        "type": "Insect-Pest",
        "hindi_name": "सैनिक कीट",
        "symptoms": "Defoliation.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean field.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Chlorantraniliprole 18.5% SC",
            "commercial_reference": "Coragen",
            "dose_per_15L_pump": "6ml",
            "dose_per_acre": "60ml",
            "waiting_period_phi": "21 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "dhaincha",
    "common_name": "Dhaincha (Sesbania aculeata)",
    "hindi_name": "ढैंचा",
    "regional_names": {
      "punjabi": "ਜੰਤਰ",
      "marathi": "धैंचा",
      "telugu": "జీలుగ"
    },
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Rapid Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Tolerates waterlogging and salinity."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-50 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil just before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-9.0",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted growth, poor nodulation.",
          "solution": "Apply SSP at sowing."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Apply Zinc Sulphate."
        },
        {
          "nutrient": "Molybdenum",
          "symptoms": "Pale leaves.",
          "solution": "Seed treatment."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Stem Borer",
        "type": "Insect-Pest",
        "hindi_name": "तना छेदक",
        "symptoms": "Holes in stems.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Early incorporation.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Usually not required for green manure."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes in leaves.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe defoliation occurs."
          }
        }
      }
    ]
  },
  {
    "crop_id": "sunn-hemp-green-manure",
    "common_name": "Sunn Hemp (Green Manure)",
    "hindi_name": "सनई (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-10 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-60 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil at 50% flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing early on.",
          "solution": "Usually fixes own N."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Pale new leaves.",
          "solution": "Apply SSP."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Hairy Caterpillar",
        "type": "Insect-Pest",
        "hindi_name": "रोएंदार सूंडी",
        "symptoms": "Defoliation.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Trenching around field.",
            "biological_spray": "Beauveria.",
            "mechanical": "Handpick in gregarious phase."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Wilt",
        "type": "Fungal",
        "hindi_name": "उखटा",
        "symptoms": "Drooping and drying.",
        "favorable_weather": "Warm, wet soil.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Crop rotation.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Soil drench."
          }
        }
      },
      {
        "issue_name": "Pod Borer",
        "type": "Insect-Pest",
        "hindi_name": "फली छेदक",
        "symptoms": "Bores into pods (if left for seed).",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Pheromone traps.",
            "biological_spray": "HaNPV.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Emamectin Benzoate 5% SG",
            "commercial_reference": "Proclaim",
            "dose_per_15L_pump": "7g",
            "dose_per_acre": "70g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cowpea-green-manure",
    "common_name": "Cowpea (Green Manure)",
    "hindi_name": "लोबिया (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-7 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Rapid growth."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough into soil before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "6.0-7.0",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Yellowing early on.",
          "solution": "Usually fixes own N."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
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
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Leaf Spot",
        "type": "Fungal",
        "hindi_name": "पत्ती धब्बा",
        "symptoms": "Brown spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 12% + Mancozeb 63% WP",
            "commercial_reference": "Saaf",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray if severe."
          }
        }
      },
      {
        "issue_name": "Flea Beetle",
        "type": "Insect-Pest",
        "hindi_name": "पिस्सू भृंग",
        "symptoms": "Shot holes.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Beauveria.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Thiamethoxam 25% WG",
            "commercial_reference": "Actara",
            "dose_per_15L_pump": "5g",
            "dose_per_acre": "50g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "wild-indigo",
    "common_name": "Wild Indigo / Tephrosia",
    "hindi_name": "जंगली नील",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif"
    ],
    "critical_stages": [
      {
        "stage_name": "Establishment",
        "day_range": "0-20 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Slow initial growth."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "30-50 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "60-70 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough before it becomes woody."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.5",
      "basal_dose_per_acre": "10 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Sulfur",
          "symptoms": "Pale leaves.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Small leaves.",
          "solution": "Spray ZnSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Leaf Webber",
        "type": "Insect-Pest",
        "hindi_name": "पत्ता लपेटक",
        "symptoms": "Webbed leaves.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Bt.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Quinalphos 25% EC",
            "commercial_reference": "Ekalux",
            "dose_per_15L_pump": "30ml",
            "dose_per_acre": "300ml",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Root Rot",
        "type": "Fungal",
        "hindi_name": "जड़ गलन",
        "symptoms": "Wilting.",
        "favorable_weather": "Waterlogging.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Good drainage.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "30g",
            "dose_per_acre": "300g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Drench."
          }
        }
      },
      {
        "issue_name": "Aphids",
        "type": "Insect-Pest",
        "hindi_name": "माहू",
        "symptoms": "Sucking sap.",
        "favorable_weather": "Dry.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "cluster-bean-green-manure",
    "common_name": "Cluster Bean (Green Manure)",
    "hindi_name": "ग्वार (हरी खाद)",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Germination",
        "day_range": "0-15 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Ensure moisture."
      },
      {
        "stage_name": "Vegetative",
        "day_range": "20-40 days",
        "water_requirement_sensitivity": "Low",
        "stage_advice": "Drought tolerant."
      },
      {
        "stage_name": "Incorporation",
        "day_range": "45-55 days",
        "water_requirement_sensitivity": "Medium",
        "stage_advice": "Plough before flowering."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "7.0-8.5",
      "basal_dose_per_acre": "16 kg P2O5",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Stunted.",
          "solution": "Apply SSP."
        },
        {
          "nutrient": "Zinc",
          "symptoms": "Little leaf.",
          "solution": "Spray ZnSO4."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Chlorosis.",
          "solution": "Spray FeSO4."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Bacterial Blight",
        "type": "Bacterial",
        "hindi_name": "जीवाणु अंगमारी",
        "symptoms": "Water soaked spots.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Pseudomonas.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Streptomycin + Copper Oxychloride",
            "commercial_reference": "Plantomycin + Blitox",
            "dose_per_15L_pump": "2g + 40g",
            "dose_per_acre": "20g + 400g",
            "waiting_period_phi": "15 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Jassids",
        "type": "Insect-Pest",
        "hindi_name": "हरा तेला",
        "symptoms": "Yellow margins.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Neem oil.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Imidacloprid 17.8% SL",
            "commercial_reference": "Confidor",
            "dose_per_15L_pump": "5ml",
            "dose_per_acre": "50ml",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      },
      {
        "issue_name": "Alternaria Blight",
        "type": "Fungal",
        "hindi_name": "झुलसा",
        "symptoms": "Brown rings.",
        "favorable_weather": "Humid.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "None.",
            "biological_spray": "Trichoderma.",
            "mechanical": "None."
          },
          "chemical_curative": {
            "active_ingredient": "Mancozeb 75% WP",
            "commercial_reference": "Dithane M-45",
            "dose_per_15L_pump": "40g",
            "dose_per_acre": "400g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Spray."
          }
        }
      }
    ]
  },
  {
    "crop_id": "azolla",
    "common_name": "Azolla (Aquatic bio-fertilizer)",
    "hindi_name": "अजोला",
    "regional_names": {},
    "category": "Forage",
    "primary_use": "Green Manure",
    "season": [
      "Kharif",
      "Rabi",
      "Zaid"
    ],
    "critical_stages": [
      {
        "stage_name": "Inoculation",
        "day_range": "Day 1",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Requires 5-10 cm standing water."
      },
      {
        "stage_name": "Multiplication",
        "day_range": "Day 7-14",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Doubles in biomass every few days."
      },
      {
        "stage_name": "Harvest/Incorporation",
        "day_range": "Day 15-20",
        "water_requirement_sensitivity": "High",
        "stage_advice": "Harvest half to allow continuous growth."
      }
    ],
    "soil_and_nutrition": {
      "ph_range": "5.5-7.0",
      "basal_dose_per_acre": "Super Phosphate 4-5 kg/ha in ponds",
      "deficiencies": [
        {
          "nutrient": "Phosphorus",
          "symptoms": "Slow growth, red discoloration.",
          "solution": "Add small amount of SSP to water."
        },
        {
          "nutrient": "Nitrogen",
          "symptoms": "Fixes its own N via Anabaena.",
          "solution": "Not usually deficient."
        },
        {
          "nutrient": "Iron",
          "symptoms": "Yellowing of fronds.",
          "solution": "Not common, add soil."
        }
      ]
    },
    "pest_and_disease_solutions": [
      {
        "issue_name": "Azolla Weevil",
        "type": "Insect-Pest",
        "hindi_name": "अजोला वीविल",
        "symptoms": "Eats fronds, leaving them brown and fragmented.",
        "favorable_weather": "Warm.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Clean inoculum.",
            "biological_spray": "Neem extract in water.",
            "mechanical": "Remove severely infested patches."
          },
          "chemical_curative": {
            "active_ingredient": "Carbofuran 3G",
            "commercial_reference": "Furadan",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "1-2 kg in pond",
            "waiting_period_phi": "30 Days",
            "application_instructions": "Broadcasting in pond (caution with toxicity)."
          }
        }
      },
      {
        "issue_name": "Fungal Rot",
        "type": "Fungal",
        "hindi_name": "फंगल रॉट",
        "symptoms": "Brown, rotting fronds in clumps.",
        "favorable_weather": "High humidity, high temp.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Maintain partial shade.",
            "biological_spray": "None.",
            "mechanical": "Remove rotting mass."
          },
          "chemical_curative": {
            "active_ingredient": "Carbendazim 50% WP",
            "commercial_reference": "Bavistin",
            "dose_per_15L_pump": "10g",
            "dose_per_acre": "100g",
            "waiting_period_phi": "14 Days",
            "application_instructions": "Light spray over pond."
          }
        }
      },
      {
        "issue_name": "Snails",
        "type": "Insect-Pest",
        "hindi_name": "घोंघा",
        "symptoms": "Feed heavily on Azolla.",
        "favorable_weather": "Wet.",
        "solutions": {
          "organic_ipm": {
            "preventive_measures": "Screen water inlets.",
            "biological_spray": "None.",
            "mechanical": "Hand collection."
          },
          "chemical_curative": {
            "active_ingredient": "Metaldehyde",
            "commercial_reference": "Snail Kill",
            "dose_per_15L_pump": "N/A",
            "dose_per_acre": "2 kg",
            "waiting_period_phi": "N/A",
            "application_instructions": "Apply pellets around edges."
          }
        }
      }
    ]
  }
];
