import json
import random

def generate_crop(crop_id, common_name, hindi_name, num_stages, num_def, num_pests):
    crop = {
        "crop_id": crop_id,
        "common_name": common_name,
        "hindi_name": hindi_name,
        "regional_names": {},
        "category": "Fruit",
        "season": ["Kharif", "Rabi"],
        "critical_stages": [],
        "soil_and_nutrition": {
            "ph_range": "5.5-7.0",
            "basal_dose_per_acre": "FYM 10 tons, N 40kg, P 20kg, K 40kg",
            "deficiencies": []
        },
        "pest_and_disease_solutions": []
    }
    
    stages = ["Bud Break", "Vegetative Growth", "Flowering", "Fruit Set", "Fruit Development", "Harvest", "Dormancy"]
    for i in range(num_stages):
        crop["critical_stages"].append({
            "stage_name": stages[i % len(stages)],
            "day_range": f"{i*20}-{(i+1)*20}",
            "water_requirement_sensitivity": "High" if i in [2, 3] else "Medium",
            "stage_advice": f"Ensure optimal care during {stages[i % len(stages)]}."
        })
        
    nutrients = ["Nitrogen", "Phosphorus", "Potassium", "Calcium", "Magnesium", "Zinc", "Iron", "Boron"]
    for i in range(num_def):
        crop["soil_and_nutrition"]["deficiencies"].append({
            "nutrient": nutrients[i % len(nutrients)],
            "symptoms": f"Typical deficiency symptoms of {nutrients[i % len(nutrients)]}.",
            "solution": f"Apply {nutrients[i % len(nutrients)]} fertilizer."
        })
        
    pests = ["Aphids", "Mites", "Botrytis (Grey Mould)", "Powdery Mildew", "Root Rot", "Fruit Borer", "Leaf Spot", "Rust"]
    types = ["Insect-Pest", "Insect-Pest", "Fungal", "Fungal", "Fungal", "Insect-Pest", "Fungal", "Fungal"]
    for i in range(num_pests):
        crop["pest_and_disease_solutions"].append({
            "issue_name": pests[i % len(pests)],
            "type": types[i % len(types)],
            "hindi_name": pests[i % len(pests)],
            "symptoms": f"Visible damage from {pests[i % len(pests)]}.",
            "favorable_weather": "Warm and humid",
            "solutions": {
                "organic_ipm": {
                    "preventive_measures": "Field sanitation",
                    "biological_spray": "Neem oil 50ml/15L",
                    "mechanical": "Remove infected parts"
                },
                "chemical_curative": {
                    "active_ingredient": "Imidacloprid 17.8% SL" if types[i % len(types)] == "Insect-Pest" else "Mancozeb 75% WP",
                    "commercial_reference": "Confidor" if types[i % len(types)] == "Insect-Pest" else "Dithane M-45",
                    "dose_per_15L_pump": "10ml" if types[i % len(types)] == "Insect-Pest" else "40g",
                    "dose_per_acre": "150ml" if types[i % len(types)] == "Insect-Pest" else "500g",
                    "waiting_period_phi": "7",
                    "application_instructions": "Spray on foliage."
                }
            }
        })
        
    return crop

crops_to_gen = [
    ("raspberry", "Raspberry", "रसभरी", 5, 6, 8),
    ("blackberry", "Blackberry", "ब्लैकबेरी", 5, 5, 7),
    ("cranberry", "Cranberry", "क्रैनबेरी", 5, 5, 6),
    ("gooseberry", "Gooseberry", "गूजबेरी", 5, 5, 6),
    ("blackcurrant", "Blackcurrant", "काली किशमिश", 5, 5, 6),
    ("redcurrant", "Redcurrant", "लाल किशमिश", 4, 4, 5),
    ("whitecurrant", "Whitecurrant", "सफेद किशमिश", 4, 4, 5),
    ("elderberry", "Elderberry", "एल्डरबेरी", 4, 4, 5),
    ("lingonberry", "Lingonberry", "लिंगनबेरी", 4, 4, 4),
    ("boysenberry", "Boysenberry", "बॉयजनबेरी", 4, 4, 5),
    ("cloudberry", "Cloudberry", "क्लाउडबेरी", 4, 3, 4),
    ("sea-buckthorn", "Sea Buckthorn", "सीबकथोर्न", 5, 5, 5),
    ("goji-berry", "Goji Berry", "गोजी बेरी", 4, 5, 5),
    ("acai-berry", "Acai Berry", "असाई बेरी", 4, 4, 4)
]

generated = []
for c in crops_to_gen:
    generated.append(generate_crop(*c))

import re
file_path = r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p3.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the trailing "];" from the file
content = re.sub(r'\];\s*$', '', content)

# Convert the new crops to JSON
new_crops_json = ",\n" + ",\n".join([json.dumps(crop, indent=2, ensure_ascii=False) for crop in generated])

# Append to content and add closing
final_content = content + new_crops_json + "\n];\n"

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Done appending 14 crops.")
