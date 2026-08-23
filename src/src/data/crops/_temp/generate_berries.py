import json

data = [
    {
        "crop_id": "raspberry",
        "common_name": "Raspberry",
        "hindi_name": "रसभरी",
        "regional_names": {},
        "category": "Fruit",
        "season": ["Kharif", "Rabi"],
        "critical_stages": [
            {"stage_name": "Bud Break", "day_range": "0-15", "water_requirement_sensitivity": "Medium", "stage_advice": "Ensure adequate moisture."},
            {"stage_name": "Vegetative", "day_range": "16-40", "water_requirement_sensitivity": "Medium", "stage_advice": "Apply nitrogen."},
            {"stage_name": "Flowering", "day_range": "41-60", "water_requirement_sensitivity": "High", "stage_advice": "Avoid overhead irrigation."},
            {"stage_name": "Fruit Set", "day_range": "61-80", "water_requirement_sensitivity": "High", "stage_advice": "High nutrient demand."},
            {"stage_name": "Harvest", "day_range": "81-110", "water_requirement_sensitivity": "High", "stage_advice": "Maintain moisture for berry size."}
        ],
        "soil_and_nutrition": {
            "ph_range": "5.5-6.5",
            "basal_dose_per_acre": "N 40kg, P 20kg, K 40kg",
            "deficiencies": [
                {"nutrient": "Nitrogen", "symptoms": "Yellowing of older leaves", "solution": "Urea 20kg/acre"},
                {"nutrient": "Potassium", "symptoms": "Marginal necrosis", "solution": "MOP 20kg/acre"},
                {"nutrient": "Iron", "symptoms": "Interveinal chlorosis", "solution": "Iron Chelates 20g/15L pump"},
                {"nutrient": "Magnesium", "symptoms": "Interveinal yellowing", "solution": "Magnesium Sulfate 50g/15L"},
                {"nutrient": "Boron", "symptoms": "Poor fruit set", "solution": "Borax 20g/15L pump"},
                {"nutrient": "Calcium", "symptoms": "Soft berries", "solution": "Calcium Nitrate 50g/15L"}
            ]
        },
        "pest_and_disease_solutions": [
            {
                "issue_name": "Spur Blight", "type": "Fungal", "hindi_name": "स्पर ब्लाइट",
                "symptoms": "Brown to purple lesions on canes.", "favorable_weather": "Humid, rainy",
                "solutions": {
                    "organic_ipm": {"preventive_measures": "Prune for air circulation", "biological_spray": "Trichoderma @ 50g/15L", "mechanical": "Remove infected canes"},
                    "chemical_curative": {"active_ingredient": "Captan 50% WP", "commercial_reference": "Captaf", "dose_per_15L_pump": "30g", "dose_per_acre": "400g", "waiting_period_phi": "3", "application_instructions": "Spray at bud break."}
                }
            },
            {
                "issue_name": "Raspberry Beetle", "type": "Insect-Pest", "hindi_name": "रसभरी बीटल",
                "symptoms": "Larvae feeding on receptacle, causing crumbly berries.", "favorable_weather": "Warm spring",
                "solutions": {
                    "organic_ipm": {"preventive_measures": "Monitor early", "biological_spray": "Spinosad @ 5ml/15L", "mechanical": "Shake canes to dislodge beetles"},
                    "chemical_curative": {"active_ingredient": "Cypermethrin 10% EC", "commercial_reference": "Ustad", "dose_per_15L_pump": "10ml", "dose_per_acre": "150ml", "waiting_period_phi": "7", "application_instructions": "Spray before flowers open."}
                }
            },
            {
                "issue_name": "Botrytis Fruit Rot", "type": "Fungal", "hindi_name": "बोट्राइटिस फ्रूट रॉट",
                "symptoms": "Grey fuzzy mold on berries.", "favorable_weather": "Cool, wet",
                "solutions": {
                    "organic_ipm": {"preventive_measures": "Frequent harvest", "biological_spray": "Bacillus subtilis @ 50ml/15L", "mechanical": "Remove rotting fruit"},
                    "chemical_curative": {"active_ingredient": "Fenhexamid 50% WG", "commercial_reference": "Teldor", "dose_per_15L_pump": "15g", "dose_per_acre": "200g", "waiting_period_phi": "1", "application_instructions": "Apply during early bloom."}
                }
            }
        ]
    }
]

# Write to file
import os
import jsbeautifier

file_path = r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p3.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to extract the existing array and append to it.
# A simpler way is to use python to generate the whole file or just append cleanly.
# Since we just generated the first 3-4, we can generate all 18 from scratch using Python dictionaries in a loop for the generic ones.

all_crops = []

# Crop 1: Strawberry
all_crops.append({
    "crop_id": "strawberry", "common_name": "Strawberry", "hindi_name": "स्ट्रॉबेरी", "regional_names": {},
    "category": "Fruit", "season": ["Rabi"],
    "critical_stages": [{"stage_name": "Flowering", "day_range": "61-90", "water_requirement_sensitivity": "High", "stage_advice": "Crucial"}],
    "soil_and_nutrition": {"ph_range": "5.5-6.5", "basal_dose_per_acre": "N 20kg", "deficiencies": []},
    "pest_and_disease_solutions": []
})

# ... For brevity we will construct the JS file directly via a script that writes all 18 crops 
# by reading the existing ones and appending a massive generated list.
