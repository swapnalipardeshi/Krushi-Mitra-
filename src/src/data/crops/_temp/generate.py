import json
import os
import random

def get_deficiencies():
    return [
        {"nutrient": "Nitrogen", "symptoms": "Stunted growth, pale green to yellow older leaves.", "solution": "Urea 5kg/acre top dressing or foliar spray 1% Urea (150g/15L pump)"},
        {"nutrient": "Phosphorus", "symptoms": "Dark green leaves with purplish tint, poor root growth.", "solution": "DAP 100g/15L pump foliar spray"},
        {"nutrient": "Potassium", "symptoms": "Marginal scorching and browning of older leaves.", "solution": "MOP 50g/15L pump spray"},
        {"nutrient": "Zinc", "symptoms": "Interveinal chlorosis, small leaves, stunted internodes.", "solution": "Zinc Sulphate (21%) 30g/15L pump"},
        {"nutrient": "Iron", "symptoms": "Interveinal chlorosis in young leaves, veins remain green.", "solution": "Ferrous Sulphate 30g + Citric acid 2g/15L pump"},
        {"nutrient": "Boron", "symptoms": "Terminal bud death, brittle leaves, hollow stems.", "solution": "Borax (20%) 15g/15L pump"}
    ]

pests_db = {
    "Powdery Mildew": {
        "type": "Fungal", "hindi_name": "पाउडरी मिल्ड्यू/चूर्णी फफूंद", 
        "symptoms": "White powdery patches on upper and lower leaf surfaces and stems.",
        "favorable_weather": "Warm days (20-25°C) and cool nights with low humidity.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Field sanitation, proper spacing.", "biological_spray": "Ampelomyces quisqualis @ 50g/15L pump", "mechanical": "Remove infected parts."},
            "chemical_curative": {"active_ingredient": "Azoxystrobin 11% + Tebuconazole 18.3% w/w SC", "commercial_reference": "Custodia", "dose_per_15L_pump": "15ml", "dose_per_acre": "150ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray at disease onset."}
        }
    },
    "Downy Mildew": {
        "type": "Fungal", "hindi_name": "डाउनी मिल्ड्यू", 
        "symptoms": "Yellow angular spots on upper surface and purplish downy growth on lower surface.",
        "favorable_weather": "High humidity (>85%) and cool temperatures (15-20°C).",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Improve aeration.", "biological_spray": "Trichoderma viride 50g/15L pump", "mechanical": "None."},
            "chemical_curative": {"active_ingredient": "Metalaxyl 8% + Mancozeb 64% WP", "commercial_reference": "Ridomil Gold", "dose_per_15L_pump": "30g", "dose_per_acre": "300g in 150L water", "waiting_period_phi": "21 Days", "application_instructions": "Spray thoroughly on both leaf surfaces."}
        }
    },
    "Alternaria Leaf Blight": {
        "type": "Fungal", "hindi_name": "अल्टरनेरिया झुलसा", 
        "symptoms": "Dark brown circular spots with concentric rings.",
        "favorable_weather": "High humidity, temp 25-30°C.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Use disease-free seeds.", "biological_spray": "Pseudomonas fluorescens @ 50g/15L", "mechanical": "None."},
            "chemical_curative": {"active_ingredient": "Mancozeb 75% WP", "commercial_reference": "Dithane M-45", "dose_per_15L_pump": "40g", "dose_per_acre": "400g in 150L water", "waiting_period_phi": "15 Days", "application_instructions": "Spray early morning."}
        }
    },
    "Fusarium Wilt": {
        "type": "Fungal", "hindi_name": "फ्यूजेरियम उकठा", 
        "symptoms": "Yellowing of lower leaves, drooping, eventual death of plant. Vascular browning.",
        "favorable_weather": "High soil moisture, warm temp (28-32°C).",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Crop rotation, soil solarization.", "biological_spray": "Trichoderma harzianum @ 1kg/acre in soil", "mechanical": "Uproot diseased plants."},
            "chemical_curative": {"active_ingredient": "Carbendazim 50% WP", "commercial_reference": "Bavistin", "dose_per_15L_pump": "30g", "dose_per_acre": "300g in 150L water", "waiting_period_phi": "21 Days", "application_instructions": "Soil drenching around root zone."}
        }
    },
    "Aphids": {
        "type": "Insect-Pest", "hindi_name": "माहू/चेपा", 
        "symptoms": "Curling of leaves, honeydew secretion, sooty mold.",
        "favorable_weather": "Cloudy weather, 15-25°C.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Avoid excess N.", "biological_spray": "Neem oil 10000 ppm @ 30ml/15L", "mechanical": "Yellow sticky traps @ 10/acre."},
            "chemical_curative": {"active_ingredient": "Imidacloprid 17.8% SL", "commercial_reference": "Confidor", "dose_per_15L_pump": "5ml", "dose_per_acre": "50ml in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray targeting leaf undersides."}
        }
    },
    "Whitefly": {
        "type": "Insect-Pest", "hindi_name": "सफेद मक्खी", 
        "symptoms": "Small white flies on leaf underside, yellowing, vector for viruses.",
        "favorable_weather": "Warm, dry weather (25-30°C).",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Weed management.", "biological_spray": "Lecanicillium lecanii @ 50g/15L", "mechanical": "Yellow sticky traps @ 10/acre."},
            "chemical_curative": {"active_ingredient": "Acetamiprid 20% SP", "commercial_reference": "Pride, Dhanpreet", "dose_per_15L_pump": "10g", "dose_per_acre": "100g in 150L water", "waiting_period_phi": "15 Days", "application_instructions": "Ensure complete coverage."}
        }
    },
    "Spider Mites": {
        "type": "Insect-Pest", "hindi_name": "मकड़ी/माइट", 
        "symptoms": "Stippling, fine webbing, leaves turn yellow/bronze.",
        "favorable_weather": "Hot and dry conditions.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Maintain field moisture.", "biological_spray": "Beauveria bassiana @ 50g/15L", "mechanical": "None."},
            "chemical_curative": {"active_ingredient": "Propargite 57% EC", "commercial_reference": "Omite", "dose_per_15L_pump": "30ml", "dose_per_acre": "300ml in 150L water", "waiting_period_phi": "15 Days", "application_instructions": "Spray leaf undersurfaces thoroughly."}
        }
    },
    "Nematode": {
        "type": "Nematode", "hindi_name": "सूत्रकृमि", 
        "symptoms": "Root galls, stunting, wilting in daytime.",
        "favorable_weather": "Sandy soil, warm temp.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Marigold crop rotation.", "biological_spray": "Purpureocillium lilacinum soil application", "mechanical": "Deep summer ploughing."},
            "chemical_curative": {"active_ingredient": "Fluensulfone 2% GR", "commercial_reference": "Nimitz", "dose_per_15L_pump": "N/A", "dose_per_acre": "4 kg/acre", "waiting_period_phi": "45 Days", "application_instructions": "Soil application before sowing."}
        }
    },
    "Thrips": {
        "type": "Insect-Pest", "hindi_name": "थ्रिप्स", 
        "symptoms": "Silvery patches on leaves, upward curling.",
        "favorable_weather": "Dry spell.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Overhead irrigation.", "biological_spray": "Neem oil @ 30ml/15L", "mechanical": "Blue sticky traps @ 10/acre."},
            "chemical_curative": {"active_ingredient": "Fipronil 5% SC", "commercial_reference": "Regent", "dose_per_15L_pump": "25ml", "dose_per_acre": "250ml in 150L water", "waiting_period_phi": "20 Days", "application_instructions": "Foliar spray."}
        }
    },
    "Leaf Spot": {
        "type": "Fungal", "hindi_name": "पत्ती धब्बा", 
        "symptoms": "Brown/black spots on leaves.",
        "favorable_weather": "High humidity, rains.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Field sanitation.", "biological_spray": "Pseudomonas @ 50g/15L", "mechanical": "Remove infected leaves."},
            "chemical_curative": {"active_ingredient": "Carbendazim 12% + Mancozeb 63% WP", "commercial_reference": "Saaf", "dose_per_15L_pump": "30g", "dose_per_acre": "300g in 150L water", "waiting_period_phi": "14 Days", "application_instructions": "Spray early morning."}
        }
    },
    "Rust": {
        "type": "Fungal", "hindi_name": "रस्ट/रोली",
        "symptoms": "Orange to brown pustules on leaf underside.",
        "favorable_weather": "High humidity, 15-22°C.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Weed free field.", "biological_spray": "Trichoderma @ 50g/15L", "mechanical": "Remove early infected leaves."},
            "chemical_curative": {"active_ingredient": "Hexaconazole 5% EC", "commercial_reference": "Contaf", "dose_per_15L_pump": "25ml", "dose_per_acre": "250ml in 150L water", "waiting_period_phi": "21 Days", "application_instructions": "Thorough coverage."}
        }
    }
}

extra_pests = {
    "Orobanche": {
        "type": "Parasitic Weed", "hindi_name": "ओरोबैन्क/टोका",
        "symptoms": "Yellow unbranched stems near roots, stunting host.",
        "favorable_weather": "Dry soil.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Crop rotation.", "biological_spray": "None.", "mechanical": "Manual uprooting."},
            "chemical_curative": {"active_ingredient": "No specific post-emergence chemical.", "commercial_reference": "-", "dose_per_15L_pump": "-", "dose_per_acre": "-", "waiting_period_phi": "-", "application_instructions": "Rely on mechanical."}
        }
    },
    "Stem Borer": {
        "type": "Insect-Pest", "hindi_name": "तना छेदक",
        "symptoms": "Central shoot withers (dead heart).",
        "favorable_weather": "Warm and humid.",
        "solutions": {
            "organic_ipm": {"preventive_measures": "Clean cultivation.", "biological_spray": "Bt kurstaki @ 30g/15L", "mechanical": "Pheromone traps."},
            "chemical_curative": {"active_ingredient": "Chlorantraniliprole 18.5% SC", "commercial_reference": "Coragen", "dose_per_15L_pump": "6ml", "dose_per_acre": "60ml in 150L water", "waiting_period_phi": "20 Days", "application_instructions": "Spray on early symptoms."}
        }
    }
}
pests_db.update(extra_pests)


stages_template_1 = [
    {"stage_name": "Sowing/Transplanting", "day_range": "0-15", "water_requirement_sensitivity": "High", "stage_advice": "Ensure good soil moisture for uniform establishment."},
    {"stage_name": "Vegetative Growth", "day_range": "16-45", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogenous fertilizers, keep field weed-free."},
    {"stage_name": "Active Growth/Branching", "day_range": "46-80", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure pest management. Apply micronutrients if required."},
    {"stage_name": "Flowering/Maturation", "day_range": "81-110", "water_requirement_sensitivity": "Low", "stage_advice": "Avoid water stress. Stop harsh chemical sprays."},
    {"stage_name": "Harvest", "day_range": "111-140", "water_requirement_sensitivity": "Low", "stage_advice": "Withhold irrigation 1-2 weeks before harvest for better active ingredient accumulation."}
]
stages_template_2 = [
    {"stage_name": "Early Growth", "day_range": "0-30", "water_requirement_sensitivity": "High", "stage_advice": "Frequent light irrigations."},
    {"stage_name": "Vegetative Phase", "day_range": "31-70", "water_requirement_sensitivity": "Medium", "stage_advice": "Maintain optimum moisture, apply recommended fertilizers."},
    {"stage_name": "Pre-harvest/Maturity", "day_range": "71-100", "water_requirement_sensitivity": "Low", "stage_advice": "Restricted irrigation. Protect from diseases."},
    {"stage_name": "Harvesting", "day_range": "100-120", "water_requirement_sensitivity": "Low", "stage_advice": "Harvest at correct physiological maturity."}
]
stages_template_6 = stages_template_1 + [{"stage_name": "Post-Harvest Processing", "day_range": "140+", "water_requirement_sensitivity": "Low", "stage_advice": "Dry in shade, maintain temperature to retain volatile oils."}]


crop_specs = [
    ("ashwagandha", "Ashwagandha", "अश्वगंधा", "Medicinal", 5, 6, ["Alternaria Leaf Blight", "Fusarium Wilt", "Orobanche", "Aphids", "Spider Mites", "Thrips", "Nematode"]),
    ("shatavari", "Shatavari", "शतावरी", "Medicinal", 5, 5, ["Leaf Spot", "Rust", "Aphids", "Spider Mites", "Nematode"]),
    ("sarpagandha", "Sarpagandha", "सर्पगंधा", "Medicinal", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Whitefly", "Spider Mites"]),
    ("senna", "Senna", "सन्ना/सनाय", "Medicinal", 5, 5, ["Leaf Spot", "Alternaria Leaf Blight", "Aphids", "Whitefly", "Spider Mites", "Thrips"]),
    ("isabgol", "Isabgol", "ईसबगोल", "Medicinal", 5, 6, ["Downy Mildew", "Powdery Mildew", "Aphids", "Fusarium Wilt", "Leaf Spot", "Whitefly", "Spider Mites"]),
    ("kalmegh", "Kalmegh", "कालमेघ", "Medicinal", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites", "Whitefly"]),
    ("brahmi", "Brahmi", "ब्राह्मी", "Medicinal", 4, 4, ["Leaf Spot", "Rust", "Aphids", "Spider Mites"]),
    ("tulsi", "Tulsi", "तुलसी", "Medicinal", 5, 5, ["Powdery Mildew", "Leaf Spot", "Aphids", "Whitefly", "Spider Mites", "Rust"]),
    ("aloe_vera", "Aloe Vera", "एलोवेरा", "Medicinal", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites", "Thrips"]),
    ("stevia", "Stevia", "स्टीविया", "Medicinal", 5, 5, ["Leaf Spot", "Powdery Mildew", "Aphids", "Whitefly", "Spider Mites"]),
    ("artemisia", "Artemisia", "आर्टेमिसिया", "Medicinal", 4, 4, ["Powdery Mildew", "Leaf Spot", "Aphids", "Spider Mites"]),
    ("giloy", "Giloy", "गिलोय", "Medicinal", 4, 4, ["Leaf Spot", "Rust", "Aphids", "Spider Mites"]),
    ("poppy", "Poppy", "अफीम", "Medicinal", 5, 5, ["Downy Mildew", "Fusarium Wilt", "Aphids", "Whitefly", "Thrips", "Spider Mites"]),
    ("belladonna", "Belladonna", "बेलाडोना", "Medicinal", 4, 4, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites"]),
    ("digitalis", "Digitalis", "डिजिटेलिस", "Medicinal", 4, 4, ["Leaf Spot", "Rust", "Aphids", "Spider Mites"]),
    ("cinchona", "Cinchona", "सिनकोना", "Medicinal", 4, 4, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites"]),
    ("neem_medicinal", "Neem", "नीम", "Medicinal", 5, 5, ["Leaf Spot", "Powdery Mildew", "Aphids", "Whitefly", "Spider Mites"]),
    ("st_johns_wort", "St. John's Wort", "सेंट जॉन्स वॉर्ट", "Medicinal", 4, 4, ["Leaf Spot", "Rust", "Aphids", "Spider Mites"]),
    ("valerian", "Valerian", "वेलेरियन", "Medicinal", 4, 4, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites"]),
    ("echinacea", "Echinacea", "एकिनेसिया", "Medicinal", 4, 4, ["Leaf Spot", "Powdery Mildew", "Aphids", "Spider Mites"]),
    ("ginseng", "Ginseng", "जिन्सेंग", "Medicinal", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites", "Nematode"]),
    ("citronella", "Citronella", "सिट्रोनेला", "Aromatic", 4, 4, ["Leaf Spot", "Rust", "Stem Borer", "Aphids"]),
    ("lemongrass", "Lemongrass", "लेमनग्रास", "Aromatic", 4, 4, ["Leaf Spot", "Rust", "Stem Borer", "Aphids"]),
    ("palmarosa", "Palmarosa", "पामारोज़ा", "Aromatic", 4, 4, ["Leaf Spot", "Rust", "Aphids", "Spider Mites"]),
    ("vetiver", "Vetiver", "खस", "Aromatic", 4, 4, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Nematode"]),
    ("geranium", "Geranium", "जीरेनियम", "Aromatic", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Whitefly", "Spider Mites"]),
    ("patchouli", "Patchouli", "पचौली", "Aromatic", 4, 4, ["Fusarium Wilt", "Leaf Spot", "Nematode", "Aphids", "Spider Mites"]),
    ("lavender", "Lavender", "लैवेंडर", "Aromatic", 5, 5, ["Leaf Spot", "Powdery Mildew", "Aphids", "Whitefly", "Spider Mites"]),
    ("mentha", "Mentha", "मेंथा", "Aromatic", 5, 6, ["Rust", "Fusarium Wilt", "Leaf Spot", "Aphids", "Whitefly", "Spider Mites", "Thrips"]),
    ("rose_damask", "Rose", "गुलाब", "Aromatic", 6, 6, ["Powdery Mildew", "Leaf Spot", "Rust", "Aphids", "Thrips", "Spider Mites", "Nematode"]),
    ("jasmine", "Jasmine", "चमेली", "Aromatic", 5, 5, ["Leaf Spot", "Rust", "Aphids", "Whitefly", "Spider Mites", "Thrips"]),
    ("chamomile", "Chamomile", "कैमोमाइल", "Aromatic", 4, 4, ["Leaf Spot", "Powdery Mildew", "Aphids", "Spider Mites"]),
    ("tuberose", "Tuberose", "रजनीगंधा", "Aromatic", 5, 5, ["Leaf Spot", "Fusarium Wilt", "Aphids", "Spider Mites", "Nematode"]),
    ("eucalyptus_oil", "Eucalyptus", "नीलगिरी", "Aromatic", 5, 5, ["Leaf Spot", "Powdery Mildew", "Aphids", "Whitefly", "Spider Mites", "Stem Borer"])
]

all_crops = []

def get_stages(cnt):
    if cnt == 4: return stages_template_2[:]
    elif cnt == 6: return stages_template_6[:]
    else: return stages_template_1[:]

for cid, cname, hname, cat, stg_cnt, def_cnt, pest_names in crop_specs:
    
    stages = get_stages(stg_cnt)
    defs = get_deficiencies()[:def_cnt]
    pests = [pests_db[p].copy() for p in pest_names if p in pests_db]
    for i, p in enumerate(pests):
        p["issue_name"] = pest_names[i]
        
    c = {
        "crop_id": cid,
        "common_name": cname,
        "hindi_name": hname,
        "regional_names": {},
        "category": cat,
        "season": ["Kharif", "Rabi"],
        "critical_stages": stages,
        "soil_and_nutrition": {
            "ph_range": "6.5-7.5",
            "basal_dose_per_acre": "FYM 5-10 tonnes, N:P:K balanced dose",
            "deficiencies": defs
        },
        "pest_and_disease_solutions": pests
    }
    all_crops.append(c)

target_file = r"c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\commercial_p4.js"
os.makedirs(os.path.dirname(target_file), exist_ok=True)

with open(target_file, "w", encoding="utf-8") as f:
    f.write("export const data = ")
    f.write(json.dumps(all_crops, indent=2, ensure_ascii=False))
    f.write(";\n")
print("Done writing", len(all_crops), "crops.")
