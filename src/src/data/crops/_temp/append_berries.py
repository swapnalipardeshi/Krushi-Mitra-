import json
import re

file_path = r'c:\Users\F-R-I-D-A-Y\Desktop\Control Panel\Anand\src\data\crops\_temp\fruits_p3.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_berries = [
  {
    'crop_id': 'raspberry',
    'common_name': 'Raspberry (Red & Black)',
    'hindi_name': 'रसभरी',
    'regional_names': {'marathi': 'रास्पबेरी', 'punjabi': 'ਰਸਬੇਰੀ', 'tamil': 'ராஸ்பெர்ரி', 'telugu': 'రాస్ప్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi', 'Zaid'],
    'critical_stages': [
      {'stage_name': 'Dormancy', 'day_range': '0-30', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Keep soil moderately dry.'},
      {'stage_name': 'Bud Break', 'day_range': '31-45', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Initiate light irrigation.'},
      {'stage_name': 'Flowering', 'day_range': '46-60', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain even moisture to ensure pollination.'},
      {'stage_name': 'Fruit Set & Sizing', 'day_range': '61-80', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Peak water demand, avoid waterlogging.'},
      {'stage_name': 'Harvest', 'day_range': '81-120', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly to improve fruit sugar.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.8',
      'basal_dose_per_acre': 'FYM 10 tons, N 30kg, P 40kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing of older leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Purple tint on leaves', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf burn', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Calcium', 'symptoms': 'Soft fruit, tip burn', 'solution': 'Calcium Nitrate 50g/15L pump'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'},
        {'nutrient': 'Iron', 'symptoms': 'Yellowing between veins of new leaves', 'solution': 'Iron EDTA 20g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Botrytis Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Gray fuzzy mold on fruit', 'favorable_weather': 'Cool, wet conditions', 'solutions': {'organic_ipm': {'preventive_measures': 'Good canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected fruits'}, 'chemical_curative': {'active_ingredient': 'Fenhexamid 50% WG', 'commercial_reference': 'Teldor', 'dose_per_15L_pump': '15g', 'dose_per_acre': '200g in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Spray at early bloom'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots on leaves', 'favorable_weather': 'Dry, warm weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Adequate spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune affected parts'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Apply at first sign of disease'}}},
      {'issue_name': 'Spotted Wing Drosophila', 'type': 'Insect-Pest', 'hindi_name': 'स्पॉटेड विंग ड्रोसोफिला', 'symptoms': 'Larvae inside fruit', 'favorable_weather': 'Warm, humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Prompt harvest', 'biological_spray': 'Spinosad 5ml/15L', 'mechanical': 'Traps'}, 'chemical_curative': {'active_ingredient': 'Spinetoram 11.7% SC', 'commercial_reference': 'Delegate', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Apply as fruit begins to color'}}},
      {'issue_name': 'Raspberry Borer', 'type': 'Insect-Pest', 'hindi_name': 'तने का छेदक', 'symptoms': 'Wilting cane tips', 'favorable_weather': 'Warm weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune below damage', 'biological_spray': 'Beauveria bassiana 50g/15L', 'mechanical': 'Burn infested canes'}, 'chemical_curative': {'active_ingredient': 'Chlorantraniliprole 18.5% SC', 'commercial_reference': 'Coragen', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '60ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early in season'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी का जाला', 'symptoms': 'Stippling, webbing', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Maintain humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray focusing on undersides'}}},
      {'issue_name': 'Root Rot', 'type': 'Fungal', 'hindi_name': 'जड़ सड़न', 'symptoms': 'Wilting, brown roots', 'favorable_weather': 'Poor drainage', 'solutions': {'organic_ipm': {'preventive_measures': 'Raised beds', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Improve drainage'}, 'chemical_curative': {'active_ingredient': 'Metalaxyl 35% WS', 'commercial_reference': 'Ridomil', 'dose_per_15L_pump': '20g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Soil drench'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Nematodes', 'type': 'Nematode', 'hindi_name': 'सूत्रकृमि', 'symptoms': 'Stunted growth, galls', 'favorable_weather': 'Sandy soil', 'solutions': {'organic_ipm': {'preventive_measures': 'Crop rotation', 'biological_spray': 'Paecilomyces lilacinus 50g/15L', 'mechanical': 'Soil solarization'}, 'chemical_curative': {'active_ingredient': 'Fluopyram 34.48% SC', 'commercial_reference': 'Velum Prime', 'dose_per_15L_pump': 'N/A', 'dose_per_acre': '250ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Apply via drip'}}}
    ]
  },
  {
    'crop_id': 'blackberry',
    'common_name': 'Blackberry',
    'hindi_name': 'ब्लैकबेरी',
    'regional_names': {'marathi': 'ब्लॅकबेरी', 'punjabi': 'ਬਲੈਕਬੇਰੀ', 'tamil': 'பிளாக்பெர்ரி', 'telugu': 'బ్లాక్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi', 'Zaid'],
    'critical_stages': [
      {'stage_name': 'Dormancy', 'day_range': '0-30', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Keep soil moderately dry.'},
      {'stage_name': 'Bud Break', 'day_range': '31-45', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Initiate light irrigation.'},
      {'stage_name': 'Flowering', 'day_range': '46-60', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain even moisture to ensure pollination.'},
      {'stage_name': 'Fruit Set & Sizing', 'day_range': '61-80', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Peak water demand, avoid waterlogging.'},
      {'stage_name': 'Harvest', 'day_range': '81-120', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly to improve fruit sugar.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.8',
      'basal_dose_per_acre': 'FYM 10 tons, N 30kg, P 40kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing of older leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Purple tint on leaves', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf burn', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Calcium', 'symptoms': 'Soft fruit, tip burn', 'solution': 'Calcium Nitrate 50g/15L pump'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Botrytis Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Gray fuzzy mold on fruit', 'favorable_weather': 'Cool, wet conditions', 'solutions': {'organic_ipm': {'preventive_measures': 'Good canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected fruits'}, 'chemical_curative': {'active_ingredient': 'Fenhexamid 50% WG', 'commercial_reference': 'Teldor', 'dose_per_15L_pump': '15g', 'dose_per_acre': '200g in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Spray at early bloom'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots on leaves', 'favorable_weather': 'Dry, warm weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Adequate spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune affected parts'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Apply at first sign of disease'}}},
      {'issue_name': 'Spotted Wing Drosophila', 'type': 'Insect-Pest', 'hindi_name': 'स्पॉटेड विंग ड्रोसोफिला', 'symptoms': 'Larvae inside fruit', 'favorable_weather': 'Warm, humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Prompt harvest', 'biological_spray': 'Spinosad 5ml/15L', 'mechanical': 'Traps'}, 'chemical_curative': {'active_ingredient': 'Spinetoram 11.7% SC', 'commercial_reference': 'Delegate', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Apply as fruit begins to color'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी का जाला', 'symptoms': 'Stippling, webbing', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Maintain humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray focusing on undersides'}}},
      {'issue_name': 'Root Rot', 'type': 'Fungal', 'hindi_name': 'जड़ सड़न', 'symptoms': 'Wilting, brown roots', 'favorable_weather': 'Poor drainage', 'solutions': {'organic_ipm': {'preventive_measures': 'Raised beds', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Improve drainage'}, 'chemical_curative': {'active_ingredient': 'Metalaxyl 35% WS', 'commercial_reference': 'Ridomil', 'dose_per_15L_pump': '20g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Soil drench'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Cane Blight', 'type': 'Fungal', 'hindi_name': 'केन ब्लाइट', 'symptoms': 'Dark cankers on canes', 'favorable_weather': 'Wet weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune out dead canes', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Remove infected canes'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray post-pruning'}}}
    ]
  },
  {
    'crop_id': 'cranberry',
    'common_name': 'Cranberry',
    'hindi_name': 'क्रैनबेरी',
    'regional_names': {'marathi': 'क्रॅनबेरी', 'punjabi': 'ਕਰੈਨਬੇਰੀ', 'tamil': 'கிரான்பெர்ரி', 'telugu': 'క్రాన్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Kharif'],
    'critical_stages': [
      {'stage_name': 'Dormancy', 'day_range': '0-30', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Maintain winter flood if applicable.'},
      {'stage_name': 'Bud Break', 'day_range': '31-45', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Drain beds, monitor frost.'},
      {'stage_name': 'Bloom', 'day_range': '46-70', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Avoid overhead irrigation during day.'},
      {'stage_name': 'Fruit Set', 'day_range': '71-90', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Ensure adequate moisture.'},
      {'stage_name': 'Harvest', 'day_range': '91-120', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Flood for harvest or maintain moisture for dry harvest.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '4.0-5.0',
      'basal_dose_per_acre': 'N 10kg, P 20kg, K 20kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Poor growth, pale leaves', 'solution': 'Ammonium sulfate 10kg/acre'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Dark green to purple leaves', 'solution': 'MAP 10kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf burn', 'solution': 'Potassium sulfate 15kg/acre'},
        {'nutrient': 'Calcium', 'symptoms': 'Poor fruit quality', 'solution': 'Gypsum 50kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Epsom salt 5kg/acre'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Decayed fruits', 'favorable_weather': 'Warm, wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Improve drainage', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove trash'}, 'chemical_curative': {'active_ingredient': 'Chlorothalonil 75% WP', 'commercial_reference': 'Kavach', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '50', 'application_instructions': 'Apply during bloom'}}},
      {'issue_name': 'Cranberry Fruitworm', 'type': 'Insect-Pest', 'hindi_name': 'फल छेदक', 'symptoms': 'Larvae inside fruit', 'favorable_weather': 'Warm summer', 'solutions': {'organic_ipm': {'preventive_measures': 'Monitor with traps', 'biological_spray': 'Bt 50g/15L', 'mechanical': 'Flood beds'}, 'chemical_curative': {'active_ingredient': 'Chlorantraniliprole 18.5% SC', 'commercial_reference': 'Coragen', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '60ml in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Spray at egg hatch'}}},
      {'issue_name': 'Upright Dieback', 'type': 'Fungal', 'hindi_name': 'उर्ध्व क्षय', 'symptoms': 'Browning of uprights', 'favorable_weather': 'Heat stress', 'solutions': {'organic_ipm': {'preventive_measures': 'Reduce stress', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Prune dead vines'}, 'chemical_curative': {'active_ingredient': 'Propiconazole 25% EC', 'commercial_reference': 'Tilt', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '45', 'application_instructions': 'Apply early season'}}},
      {'issue_name': 'Black-headed Fireworm', 'type': 'Insect-Pest', 'hindi_name': 'फायरवर्म', 'symptoms': 'Webbing of tips', 'favorable_weather': 'Spring', 'solutions': {'organic_ipm': {'preventive_measures': 'Monitor', 'biological_spray': 'Spinosad 5ml/15L', 'mechanical': 'Spring flood'}, 'chemical_curative': {'active_ingredient': 'Spinetoram 11.7% SC', 'commercial_reference': 'Delegate', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Apply at hatch'}}},
      {'issue_name': 'Flea Beetle', 'type': 'Insect-Pest', 'hindi_name': 'पिस्सू भृंग', 'symptoms': 'Shot holes in leaves', 'favorable_weather': 'Dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Clean borders', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Thiamethoxam 25% WG', 'commercial_reference': 'Actara', 'dose_per_15L_pump': '10g', 'dose_per_acre': '100g in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Phytophthora Root Rot', 'type': 'Fungal', 'hindi_name': 'जड़ सड़न', 'symptoms': 'Wilting, poor roots', 'favorable_weather': 'Waterlogged soil', 'solutions': {'organic_ipm': {'preventive_measures': 'Drainage', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Improve beds'}, 'chemical_curative': {'active_ingredient': 'Metalaxyl 35% WS', 'commercial_reference': 'Ridomil', 'dose_per_15L_pump': '20g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Soil drench'}}}
    ]
  },
  {
    'crop_id': 'gooseberry',
    'common_name': 'Gooseberry (Cape & European)',
    'hindi_name': 'केप गूजबेरी / मकोय',
    'regional_names': {'marathi': 'गूजबेरी', 'punjabi': 'ਗੂਜ਼ਬੇਰੀ', 'tamil': 'கூஸ்பெர்ரி', 'telugu': 'గూస్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Seedling/Transplant', 'day_range': '0-30', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Keep soil moist for establishment.'},
      {'stage_name': 'Vegetative Growth', 'day_range': '31-60', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Promote branching.'},
      {'stage_name': 'Flowering', 'day_range': '61-80', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Do not stress for water.'},
      {'stage_name': 'Fruit Set', 'day_range': '81-100', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Adequate moisture for calyx development.'},
      {'stage_name': 'Harvest', 'day_range': '101-140', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water to prevent fruit cracking.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-7.0',
      'basal_dose_per_acre': 'FYM 8 tons, N 20kg, P 30kg, K 30kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Stunted growth, pale leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Dark green to purple leaves', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Poor fruit size, marginal burn', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Calcium', 'symptoms': 'Blossom end rot in fruits', 'solution': 'Calcium Nitrate 50g/15L pump'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots on leaves and fruit', 'favorable_weather': 'Dry, warm weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Adequate spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune affected parts'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Apply at first sign of disease'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Fruit Borer', 'type': 'Insect-Pest', 'hindi_name': 'फल छेदक', 'symptoms': 'Holes in fruit', 'favorable_weather': 'Warm weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Remove damaged fruits', 'biological_spray': 'Bt 50g/15L', 'mechanical': 'Pheromone traps'}, 'chemical_curative': {'active_ingredient': 'Emamectin benzoate 5% SG', 'commercial_reference': 'Proclaim', 'dose_per_15L_pump': '7g', 'dose_per_acre': '100g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray at egg hatch'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Brown spots on leaves', 'favorable_weather': 'Warm, humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Air circulation', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Remove debris'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी का जाला', 'symptoms': 'Stippling, webbing', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Maintain humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray focusing on undersides'}}},
      {'issue_name': 'Whitefly', 'type': 'Insect-Pest', 'hindi_name': 'सफेद मक्खी', 'symptoms': 'Yellowing leaves, honeydew', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Yellow sticky traps', 'biological_spray': 'Beauveria bassiana 50g/15L', 'mechanical': 'Traps'}, 'chemical_curative': {'active_ingredient': 'Diafenthiuron 50% WP', 'commercial_reference': 'Pegasus', 'dose_per_15L_pump': '25g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray thoroughly'}}}
    ]
  },
  {
    'crop_id': 'blackcurrant',
    'common_name': 'Blackcurrant',
    'hindi_name': 'काली किशमिश (ब्लैककरंट)',
    'regional_names': {'marathi': 'ब्लॅककरंट', 'punjabi': 'ਬਲੈਕਕਰੰਟ', 'tamil': 'கருப்பு திராட்சை வத்தல்', 'telugu': 'బ్లాక్ కరెంట్'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Bud Burst', 'day_range': '0-15', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Ensure moist soil.'},
      {'stage_name': 'Flowering', 'day_range': '16-35', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for yield, protect from frost.'},
      {'stage_name': 'Fruit Set', 'day_range': '36-55', 'water_requirement_sensitivity': 'High', 'stage_advice': 'High water demand.'},
      {'stage_name': 'Fruit Development', 'day_range': '56-80', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain irrigation.'},
      {'stage_name': 'Harvest', 'day_range': '81-110', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.5',
      'basal_dose_per_acre': 'FYM 10 tons, N 40kg, P 20kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'},
        {'nutrient': 'Iron', 'symptoms': 'Yellow young leaves', 'solution': 'Iron EDTA 20g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Currant Borer', 'type': 'Insect-Pest', 'hindi_name': 'छेदक', 'symptoms': 'Wilting shoots', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune infested canes', 'biological_spray': 'Beauveria 50g/15L', 'mechanical': 'Burn prunings'}, 'chemical_curative': {'active_ingredient': 'Chlorpyrifos 20% EC', 'commercial_reference': 'Dursban', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Spray stems'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Humid, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Good spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Gall Mite', 'type': 'Insect-Pest', 'hindi_name': 'गॉल माइट', 'symptoms': 'Swollen buds (big bud)', 'favorable_weather': 'Spring', 'solutions': {'organic_ipm': {'preventive_measures': 'Resistant varieties', 'biological_spray': 'Sulfur 80% WP 40g/15L', 'mechanical': 'Remove galls'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Apply pre-bloom'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Brown spots on leaves', 'favorable_weather': 'Wet weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Remove fallen leaves', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Air circulation'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Botrytis', 'type': 'Fungal', 'hindi_name': 'ग्रे मोल्ड', 'symptoms': 'Rotting fruit', 'favorable_weather': 'Humid, cool', 'solutions': {'organic_ipm': {'preventive_measures': 'Canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Captan 50% WP', 'commercial_reference': 'Captaf', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray at bloom'}}}
    ]
  },
  {
    'crop_id': 'redcurrant',
    'common_name': 'Redcurrant',
    'hindi_name': 'लाल किशमिश (रेडकरंट)',
    'regional_names': {'marathi': 'रेडकरंट', 'punjabi': 'ਰੈੱਡਕਰੰਟ', 'tamil': 'சிவப்பு திராட்சை வத்தல்', 'telugu': 'ఎర్ర కరెంట్'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Bud Burst', 'day_range': '0-15', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Ensure moist soil.'},
      {'stage_name': 'Flowering & Fruit Set', 'day_range': '16-40', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for yield, protect from frost.'},
      {'stage_name': 'Fruit Development', 'day_range': '41-75', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain irrigation.'},
      {'stage_name': 'Harvest', 'day_range': '76-100', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.8',
      'basal_dose_per_acre': 'FYM 8 tons, N 30kg, P 20kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Currant Borer', 'type': 'Insect-Pest', 'hindi_name': 'छेदक', 'symptoms': 'Wilting shoots', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune infested canes', 'biological_spray': 'Beauveria 50g/15L', 'mechanical': 'Burn prunings'}, 'chemical_curative': {'active_ingredient': 'Chlorpyrifos 20% EC', 'commercial_reference': 'Dursban', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Spray stems'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Humid, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Good spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Brown spots on leaves', 'favorable_weather': 'Wet weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Remove fallen leaves', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Air circulation'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Botrytis', 'type': 'Fungal', 'hindi_name': 'ग्रे मोल्ड', 'symptoms': 'Rotting fruit', 'favorable_weather': 'Humid, cool', 'solutions': {'organic_ipm': {'preventive_measures': 'Canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Captan 50% WP', 'commercial_reference': 'Captaf', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray at bloom'}}}
    ]
  },
  {
    'crop_id': 'whitecurrant',
    'common_name': 'Whitecurrant',
    'hindi_name': 'सफेद किशमिश (व्हाइटकरंट)',
    'regional_names': {'marathi': 'व्हाईटकरंट', 'punjabi': 'ਵਾਈਟਕਰੰਟ', 'tamil': 'வெள்ளை திராட்சை வத்தல்', 'telugu': 'తెల్ల కరెంట్'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Bud Burst', 'day_range': '0-15', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Ensure moist soil.'},
      {'stage_name': 'Flowering & Fruit Set', 'day_range': '16-40', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for yield, protect from frost.'},
      {'stage_name': 'Fruit Development', 'day_range': '41-75', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain irrigation.'},
      {'stage_name': 'Harvest', 'day_range': '76-100', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.8',
      'basal_dose_per_acre': 'FYM 8 tons, N 30kg, P 20kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L pump'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Encourage ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Currant Borer', 'type': 'Insect-Pest', 'hindi_name': 'छेदक', 'symptoms': 'Wilting shoots', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune infested canes', 'biological_spray': 'Beauveria 50g/15L', 'mechanical': 'Burn prunings'}, 'chemical_curative': {'active_ingredient': 'Chlorpyrifos 20% EC', 'commercial_reference': 'Dursban', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Spray stems'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Humid, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Good spacing', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Brown spots on leaves', 'favorable_weather': 'Wet weather', 'solutions': {'organic_ipm': {'preventive_measures': 'Remove fallen leaves', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Air circulation'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Botrytis', 'type': 'Fungal', 'hindi_name': 'ग्रे मोल्ड', 'symptoms': 'Rotting fruit', 'favorable_weather': 'Humid, cool', 'solutions': {'organic_ipm': {'preventive_measures': 'Canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Captan 50% WP', 'commercial_reference': 'Captaf', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray at bloom'}}}
    ]
  },
  {
    'crop_id': 'elderberry',
    'common_name': 'Elderberry',
    'hindi_name': 'एल्डरबेरी',
    'regional_names': {'marathi': 'एल्डरबेरी', 'punjabi': 'ਐਲਡਰਬੇਰੀ', 'tamil': 'எல்டர்பெர்ரி', 'telugu': 'ఎల్డర్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Kharif'],
    'critical_stages': [
      {'stage_name': 'Bud Break', 'day_range': '0-20', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Maintain soil moisture.'},
      {'stage_name': 'Flowering', 'day_range': '21-50', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Adequate water needed.'},
      {'stage_name': 'Fruit Development', 'day_range': '51-90', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for berry sizing.'},
      {'stage_name': 'Harvest', 'day_range': '91-120', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Allow clusters to ripen completely.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '5.5-6.5',
      'basal_dose_per_acre': 'FYM 10 tons, N 30kg, P 20kg, K 30kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Stunted growth', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Iron', 'symptoms': 'Yellowing of young leaves', 'solution': 'Iron EDTA 20g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Elder Shoot Borer', 'type': 'Insect-Pest', 'hindi_name': 'छेदक', 'symptoms': 'Wilting shoots, frass', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune infested', 'biological_spray': 'Beauveria 50g/15L', 'mechanical': 'Burn prunings'}, 'chemical_curative': {'active_ingredient': 'Chlorpyrifos 20% EC', 'commercial_reference': 'Dursban', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Spray base'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी का जाला', 'symptoms': 'Stippling, webbing', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Maintain humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray undersides'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Dry, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Spacing', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Apply early'}}},
      {'issue_name': 'Rust', 'type': 'Fungal', 'hindi_name': 'रतुआ', 'symptoms': 'Orange pustules', 'favorable_weather': 'Humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Remove alternate hosts', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves, honeydew', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}}
    ]
  },
  {
    'crop_id': 'lingonberry',
    'common_name': 'Lingonberry',
    'hindi_name': 'लिंगनबेरी',
    'regional_names': {'marathi': 'लिंगोनबेरी', 'punjabi': 'ਲਿੰਗੋਨਬੇਰੀ', 'tamil': 'லிங்கன்பெர்ரி', 'telugu': 'లింగన్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Bud Break', 'day_range': '0-20', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Maintain moist soil.'},
      {'stage_name': 'Flowering', 'day_range': '21-40', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Ensure irrigation.'},
      {'stage_name': 'Fruit Set & Growth', 'day_range': '41-70', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for sizing.'},
      {'stage_name': 'Harvest', 'day_range': '71-100', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '4.5-5.5',
      'basal_dose_per_acre': 'N 20kg, P 20kg, K 20kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Pale leaves', 'solution': 'Ammonium sulfate 10kg/acre'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Dark leaves', 'solution': 'MAP 10kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Leaf scorch', 'solution': 'Potassium sulfate 10kg/acre'},
        {'nutrient': 'Iron', 'symptoms': 'Interveinal chlorosis', 'solution': 'Iron EDTA 20g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Decaying fruit', 'favorable_weather': 'Wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Drainage', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove trash'}, 'chemical_curative': {'active_ingredient': 'Chlorothalonil 75% WP', 'commercial_reference': 'Kavach', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Apply at bloom'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Spots on leaves', 'favorable_weather': 'Humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Air flow', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray as needed'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी', 'symptoms': 'Stippling', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray undersides'}}}
    ]
  },
  {
    'crop_id': 'boysenberry',
    'common_name': 'Boysenberry',
    'hindi_name': 'बॉयजनबेरी',
    'regional_names': {'marathi': 'बॉयजेनबेरी', 'punjabi': 'ਬੋਯਸੇਨਬੇਰੀ', 'tamil': 'பாய்சன்பெர்ரி', 'telugu': 'బాయ్సెన్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi', 'Zaid'],
    'critical_stages': [
      {'stage_name': 'Dormancy', 'day_range': '0-30', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Keep soil moderately dry.'},
      {'stage_name': 'Flowering', 'day_range': '31-60', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Maintain even moisture.'},
      {'stage_name': 'Fruit Set', 'day_range': '61-80', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for yield.'},
      {'stage_name': 'Harvest', 'day_range': '81-110', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-6.5',
      'basal_dose_per_acre': 'FYM 10 tons, N 30kg, P 30kg, K 30kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Purple tint', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf burn', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Botrytis Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Gray mold', 'favorable_weather': 'Cool, wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Canopy management', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Fenhexamid 50% WG', 'commercial_reference': 'Teldor', 'dose_per_15L_pump': '15g', 'dose_per_acre': '200g in 200L', 'waiting_period_phi': '1', 'application_instructions': 'Spray early bloom'}}},
      {'issue_name': 'Cane Blight', 'type': 'Fungal', 'hindi_name': 'केन ब्लाइट', 'symptoms': 'Dark cankers', 'favorable_weather': 'Wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Prune dead canes', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Burn prunings'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray post-pruning'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी', 'symptoms': 'Stippling', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray undersides'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'Sticky traps'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Root Rot', 'type': 'Fungal', 'hindi_name': 'जड़ सड़न', 'symptoms': 'Wilting', 'favorable_weather': 'Poor drainage', 'solutions': {'organic_ipm': {'preventive_measures': 'Drainage', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Metalaxyl 35% WS', 'commercial_reference': 'Ridomil', 'dose_per_15L_pump': '20g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Soil drench'}}}
    ]
  },
  {
    'crop_id': 'cloudberry',
    'common_name': 'Cloudberry',
    'hindi_name': 'क्लाउडबेरी',
    'regional_names': {'marathi': 'क्लाउडबेरी', 'punjabi': 'ਕਲਾਊਡਬੇਰੀ', 'tamil': 'கிளவுட்பெர்ரி', 'telugu': 'క్లౌడ్బెర్రీ'},
    'category': 'Fruit',
    'season': ['Rabi'],
    'critical_stages': [
      {'stage_name': 'Bud Break', 'day_range': '0-20', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Maintain moist soil.'},
      {'stage_name': 'Flowering', 'day_range': '21-40', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Ensure irrigation.'},
      {'stage_name': 'Fruit Set', 'day_range': '41-70', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for sizing.'},
      {'stage_name': 'Harvest', 'day_range': '71-100', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Reduce water slightly.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '3.5-4.5',
      'basal_dose_per_acre': 'N 10kg, P 10kg, K 10kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Pale leaves', 'solution': 'Ammonium sulfate 10kg/acre'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Dark leaves', 'solution': 'MAP 5kg/acre'},
        {'nutrient': 'Iron', 'symptoms': 'Interveinal chlorosis', 'solution': 'Iron EDTA 20g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Fruit Rot', 'type': 'Fungal', 'hindi_name': 'फल सड़न', 'symptoms': 'Decaying fruit', 'favorable_weather': 'Wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Drainage', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Remove trash'}, 'chemical_curative': {'active_ingredient': 'Chlorothalonil 75% WP', 'commercial_reference': 'Kavach', 'dose_per_15L_pump': '30g', 'dose_per_acre': '400g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Apply at bloom'}}},
      {'issue_name': 'Leaf Spot', 'type': 'Fungal', 'hindi_name': 'पत्ती धब्बा', 'symptoms': 'Spots on leaves', 'favorable_weather': 'Humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Air flow', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray as needed'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी', 'symptoms': 'Stippling', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray undersides'}}}
    ]
  },
  {
    'crop_id': 'sea-buckthorn',
    'common_name': 'Sea Buckthorn',
    'hindi_name': 'सीबकथॉर्न',
    'regional_names': {'marathi': 'सीबकथॉर्न', 'punjabi': 'ਸੀਬਕਥੌਰਨ', 'tamil': 'சீபக்தார்ன்', 'telugu': 'సీబక్థార్న్'},
    'category': 'Fruit',
    'season': ['Kharif', 'Rabi'],
    'critical_stages': [
      {'stage_name': 'Establishment', 'day_range': '0-60', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Regular watering for deep roots.'},
      {'stage_name': 'Bud Break', 'day_range': '61-90', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Maintain moisture.'},
      {'stage_name': 'Flowering', 'day_range': '91-110', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Needs adequate water.'},
      {'stage_name': 'Fruit Set', 'day_range': '111-140', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for berry development.'},
      {'stage_name': 'Harvest', 'day_range': '141-170', 'water_requirement_sensitivity': 'Low', 'stage_advice': 'Reduce water.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.0-7.5',
      'basal_dose_per_acre': 'FYM 10 tons, P 20kg, K 20kg (fixes own N)',
      'deficiencies': [
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Iron', 'symptoms': 'Interveinal chlorosis', 'solution': 'Iron EDTA 20g/15L'},
        {'nutrient': 'Zinc', 'symptoms': 'Little leaf', 'solution': 'Zinc sulphate 15g/15L'},
        {'nutrient': 'Boron', 'symptoms': 'Poor fruit set', 'solution': 'Borax 20g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Sea Buckthorn Fly', 'type': 'Insect-Pest', 'hindi_name': 'मक्खी', 'symptoms': 'Maggots in fruit', 'favorable_weather': 'Warm summer', 'solutions': {'organic_ipm': {'preventive_measures': 'Yellow sticky traps', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Traps'}, 'chemical_curative': {'active_ingredient': 'Dimethoate 30% EC', 'commercial_reference': 'Rogor', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '15', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early'}}},
      {'issue_name': 'Fusarium Wilt', 'type': 'Fungal', 'hindi_name': 'उकठा रोग', 'symptoms': 'Wilting, yellowing', 'favorable_weather': 'Warm, wet soil', 'solutions': {'organic_ipm': {'preventive_measures': 'Drainage', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Carbendazim 50% WP', 'commercial_reference': 'Bavistin', 'dose_per_15L_pump': '20g', 'dose_per_acre': '300g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Soil drench'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Dry, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Spacing', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Apply early'}}},
      {'issue_name': 'Spider Mites', 'type': 'Insect-Pest', 'hindi_name': 'मकड़ी', 'symptoms': 'Stippling', 'favorable_weather': 'Hot, dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Humidity', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '3', 'application_instructions': 'Spray undersides'}}}
    ]
  },
  {
    'crop_id': 'goji-berry',
    'common_name': 'Goji Berry / Wolfberry',
    'hindi_name': 'गोजी बेरी',
    'regional_names': {'marathi': 'गोजी बेरी', 'punjabi': 'ਗੋਜੀ ਬੇਰੀ', 'tamil': 'கோஜி பெர்ரி', 'telugu': 'గోజీ బెర్రీ'},
    'category': 'Fruit',
    'season': ['Kharif', 'Rabi'],
    'critical_stages': [
      {'stage_name': 'Vegetative', 'day_range': '0-45', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Establish deep roots.'},
      {'stage_name': 'Flowering', 'day_range': '46-75', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Needs adequate water.'},
      {'stage_name': 'Fruit Set', 'day_range': '76-105', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for berry development.'},
      {'stage_name': 'Harvest', 'day_range': '106-150', 'water_requirement_sensitivity': 'Medium', 'stage_advice': 'Maintain moderate moisture.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '6.8-8.1',
      'basal_dose_per_acre': 'FYM 8 tons, N 30kg, P 20kg, K 20kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L pump'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Iron', 'symptoms': 'Interveinal chlorosis', 'solution': 'Iron EDTA 20g/15L'},
        {'nutrient': 'Zinc', 'symptoms': 'Little leaf', 'solution': 'Zinc sulphate 15g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Goji Gall Mite', 'type': 'Insect-Pest', 'hindi_name': 'गॉल माइट', 'symptoms': 'Blisters on leaves', 'favorable_weather': 'Warm spring', 'solutions': {'organic_ipm': {'preventive_measures': 'Resistant varieties', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Remove galls'}, 'chemical_curative': {'active_ingredient': 'Spiromesifen 22.9% SC', 'commercial_reference': 'Oberon', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Apply early'}}},
      {'issue_name': 'Aphids', 'type': 'Insect-Pest', 'hindi_name': 'माहू', 'symptoms': 'Curled leaves', 'favorable_weather': 'Cool, moist', 'solutions': {'organic_ipm': {'preventive_measures': 'Ladybugs', 'biological_spray': 'Verticillium lecanii 50g/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Imidacloprid 17.8% SL', 'commercial_reference': 'Confidor', 'dose_per_15L_pump': '5ml', 'dose_per_acre': '75ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Spray early'}}},
      {'issue_name': 'Powdery Mildew', 'type': 'Fungal', 'hindi_name': 'पाउडरी मिल्ड्यू', 'symptoms': 'White powdery spots', 'favorable_weather': 'Dry, warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Spacing', 'biological_spray': 'Bacillus subtilis 50ml/15L', 'mechanical': 'Prune'}, 'chemical_curative': {'active_ingredient': 'Myclobutanil 10% WP', 'commercial_reference': 'Systhane', 'dose_per_15L_pump': '10g', 'dose_per_acre': '150g in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Apply early'}}},
      {'issue_name': 'Anthracnose', 'type': 'Fungal', 'hindi_name': 'एन्थ्रेक्नोज', 'symptoms': 'Dark lesions on fruit', 'favorable_weather': 'Warm, wet', 'solutions': {'organic_ipm': {'preventive_measures': 'Canopy management', 'biological_spray': 'Pseudomonas 50g/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Azoxystrobin 23% SC', 'commercial_reference': 'Amistar', 'dose_per_15L_pump': '15ml', 'dose_per_acre': '200ml in 200L', 'waiting_period_phi': '7', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Flea Beetle', 'type': 'Insect-Pest', 'hindi_name': 'पिस्सू भृंग', 'symptoms': 'Shot holes', 'favorable_weather': 'Dry', 'solutions': {'organic_ipm': {'preventive_measures': 'Clean borders', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'N/A'}, 'chemical_curative': {'active_ingredient': 'Thiamethoxam 25% WG', 'commercial_reference': 'Actara', 'dose_per_15L_pump': '10g', 'dose_per_acre': '100g in 200L', 'waiting_period_phi': '15', 'application_instructions': 'Foliar spray'}}}
    ]
  },
  {
    'crop_id': 'acai-berry',
    'common_name': 'Acai Berry',
    'hindi_name': 'असाई बेरी',
    'regional_names': {'marathi': 'असाई बेरी', 'punjabi': 'ਅਸਾਈ ਬੇਰੀ', 'tamil': 'அசாய் பெர்ரி', 'telugu': 'అసై బెర్రీ'},
    'category': 'Fruit',
    'season': ['Kharif'],
    'critical_stages': [
      {'stage_name': 'Seedling', 'day_range': '0-60', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Keep moist.'},
      {'stage_name': 'Vegetative', 'day_range': '61-120', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Needs high humidity.'},
      {'stage_name': 'Flowering', 'day_range': '121-150', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Consistent water.'},
      {'stage_name': 'Fruiting', 'day_range': '151-180', 'water_requirement_sensitivity': 'High', 'stage_advice': 'Crucial for yield.'}
    ],
    'soil_and_nutrition': {
      'ph_range': '4.5-6.5',
      'basal_dose_per_acre': 'FYM 10 tons, N 40kg, P 20kg, K 40kg',
      'deficiencies': [
        {'nutrient': 'Nitrogen', 'symptoms': 'Yellowing leaves', 'solution': 'Urea 100g/15L'},
        {'nutrient': 'Phosphorus', 'symptoms': 'Poor root growth', 'solution': 'DAP 20kg/acre'},
        {'nutrient': 'Potassium', 'symptoms': 'Marginal leaf scorch', 'solution': 'MOP 15kg/acre'},
        {'nutrient': 'Magnesium', 'symptoms': 'Interveinal chlorosis', 'solution': 'Magnesium Sulphate 50g/15L'}
      ]
    },
    'pest_and_disease_solutions': [
      {'issue_name': 'Palm Weevil', 'type': 'Insect-Pest', 'hindi_name': 'पाम वीविल', 'symptoms': 'Holes in trunk', 'favorable_weather': 'Warm, humid', 'solutions': {'organic_ipm': {'preventive_measures': 'Traps', 'biological_spray': 'Beauveria 50g/15L', 'mechanical': 'Remove infested'}, 'chemical_curative': {'active_ingredient': 'Chlorpyrifos 20% EC', 'commercial_reference': 'Dursban', 'dose_per_15L_pump': '30ml', 'dose_per_acre': '400ml in 200L', 'waiting_period_phi': '30', 'application_instructions': 'Spray trunk'}}},
      {'issue_name': 'Rhinoceros Beetle', 'type': 'Insect-Pest', 'hindi_name': 'गैंडा भृंग', 'symptoms': 'Chewed fronds', 'favorable_weather': 'Warm', 'solutions': {'organic_ipm': {'preventive_measures': 'Clean plantation', 'biological_spray': 'Metarhizium 50g/15L', 'mechanical': 'Traps'}, 'chemical_curative': {'active_ingredient': 'Carbaryl 50% WP', 'commercial_reference': 'Sevin', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '15', 'application_instructions': 'Apply in leaf axils'}}},
      {'issue_name': 'Leaf Blight', 'type': 'Fungal', 'hindi_name': 'पत्ती झुलसा', 'symptoms': 'Brown lesions', 'favorable_weather': 'High humidity', 'solutions': {'organic_ipm': {'preventive_measures': 'Air circulation', 'biological_spray': 'Trichoderma 50g/15L', 'mechanical': 'Remove infected'}, 'chemical_curative': {'active_ingredient': 'Mancozeb 75% WP', 'commercial_reference': 'Dithane M-45', 'dose_per_15L_pump': '40g', 'dose_per_acre': '500g in 200L', 'waiting_period_phi': '14', 'application_instructions': 'Foliar spray'}}},
      {'issue_name': 'Mealybug', 'type': 'Insect-Pest', 'hindi_name': 'मीली बग', 'symptoms': 'White cottony masses', 'favorable_weather': 'Dry spells', 'solutions': {'organic_ipm': {'preventive_measures': 'Predator beetles', 'biological_spray': 'Neem oil 50ml/15L', 'mechanical': 'Water spray'}, 'chemical_curative': {'active_ingredient': 'Profenofos 50% EC', 'commercial_reference': 'Curacron', 'dose_per_15L_pump': '20ml', 'dose_per_acre': '300ml in 200L', 'waiting_period_phi': '15', 'application_instructions': 'Spray thoroughly'}}}
    ]
  }
]

# Create javascript string
new_js = content[:content.rfind(']')]
if not new_js.rstrip().endswith(','):
    new_js += ',\n'

for i, berry in enumerate(new_berries):
    new_js += json.dumps(berry, indent=2)
    if i < len(new_berries) - 1:
        new_js += ',\n'
new_js += '\n];\n'

# Write updated content
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_js)
print('Success')
