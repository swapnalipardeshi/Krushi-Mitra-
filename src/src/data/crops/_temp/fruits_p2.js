const citrusStages6 = [
  { stage_name: "Seedling / Nursery", day_range: "0-365", water_requirement_sensitivity: "High", stage_advice: "Ensure well-drained media. Protect from frost and excessive heat. Maintain optimum moisture to avoid damping off." },
  { stage_name: "Vegetative Growth (Pre-bearing)", day_range: "365-1095", water_requirement_sensitivity: "Medium", stage_advice: "Focus on canopy development. Apply balanced NPK and micronutrients. Prune to shape the tree structure." },
  { stage_name: "Flowering", day_range: "Spring/Ambe Bahar", water_requirement_sensitivity: "High", stage_advice: "Avoid moisture stress and heavy irrigation to prevent flower drop. Do not spray harsh chemicals during full bloom to protect pollinators." },
  { stage_name: "Fruit Set", day_range: "Post-bloom", water_requirement_sensitivity: "High", stage_advice: "Critical for fruit retention. Apply gibberellic acid if needed. Maintain uniform soil moisture." },
  { stage_name: "Fruit Development / Sizing", day_range: "Mid-season", water_requirement_sensitivity: "High", stage_advice: "Apply K and Ca to improve fruit size and rind quality. Regular irrigation prevents fruit splitting." },
  { stage_name: "Maturity and Harvesting", day_range: "Harvest", water_requirement_sensitivity: "Low", stage_advice: "Reduce irrigation slightly before harvest to improve TSS (Total Soluble Solids). Harvest at proper color break." }
];

const citrusStages5 = citrusStages6.slice(1);
const citrusStages4 = citrusStages6.slice(2);

const citrusDeficiencies8 = [
  { nutrient: "Nitrogen", symptoms: "Overall yellowing of older leaves, stunted growth, thin canopy, reduced fruit yield.", solution: "Urea @ 10-15g/liter or 500g-1kg per tree depending on age, or foliar spray of 19:19:19 @ 5g/liter (75g/15L pump, 1kg/acre)." },
  { nutrient: "Phosphorus", symptoms: "Bronzing or purpling of older leaves, thick-skinned puffy fruits with hollow centers.", solution: "Soil application of SSP @ 1-2 kg/tree. Foliar spray of 0:52:34 @ 5g/liter (75g/15L pump, 1kg/acre)." },
  { nutrient: "Potassium", symptoms: "Yellowing of leaf tips and margins. Fruits are small with very thin peel and prone to splitting.", solution: "Soil application of MOP or SOP @ 500g-1kg/tree. Foliar spray of 0:0:50 @ 5g/liter (75g/15L pump, 1kg/acre) during fruit development." },
  { nutrient: "Calcium", symptoms: "Yellowing along leaf margins in a V-shape. Increased fruit creasing and splitting.", solution: "Calcium Nitrate foliar spray @ 3-5g/liter (45-75g/15L pump, 500g-1kg/acre). Soil application of Gypsum." },
  { nutrient: "Magnesium", symptoms: "Distinct V-shaped yellowing leaving a green triangle at the base of the leaf along the midrib.", solution: "Magnesium Sulphate foliar spray @ 5g/liter (75g/15L pump, 1kg/acre). Soil application of MgSO4 @ 200-500g/tree." },
  { nutrient: "Zinc", symptoms: "Mottle leaf (interveinal chlorosis), small narrow leaves, short internodes (rosetting).", solution: "Zinc Sulphate (21% or 33%) foliar spray @ 2-3g/liter (30-45g/15L pump, 500g/acre) during flush." },
  { nutrient: "Iron", symptoms: "Severe interveinal chlorosis on young leaves, progressing to completely white/yellow leaves.", solution: "Foliar spray of Chelated Iron (Fe-EDTA/EDDHA 12%) @ 1-2g/liter (15-30g/15L pump, 250g/acre). Soil application of Fe-EDDHA for calcareous soils." },
  { nutrient: "Manganese", symptoms: "Diffuse interveinal chlorosis on young leaves, without size reduction (unlike zinc).", solution: "Manganese Sulphate foliar spray @ 2-3g/liter (30-45g/15L pump, 500g/acre)." }
];

const citrusDeficiencies7 = citrusDeficiencies8.slice(0, 7);
const citrusDeficiencies6 = citrusDeficiencies8.slice(0, 6);
const citrusDeficiencies5 = citrusDeficiencies8.slice(0, 5);

const citrusPests12 = [
  {
    issue_name: "Citrus Canker", type: "Bacterial", hindi_name: "सिट्रस कैंकर (नींबू का नासूर)",
    symptoms: "Cork-like, raised, brownish lesions with yellow halos on leaves, twigs, and fruits. Severe defoliation and fruit drop.",
    favorable_weather: "High rainfall, high humidity, and warm temperatures (20-30°C).",
    solutions: {
      organic_ipm: { preventive_measures: "Prune and burn infected twigs before monsoon. Use windbreaks.", biological_spray: "Bacillus subtilis @ 5g/L.", mechanical: "Sanitize pruning tools." },
      chemical_curative: { active_ingredient: "Streptomycin Sulphate + Tetracycline Hydrochloride (9:1) + Copper Oxychloride 50% WP", commercial_reference: "Streptocycline + Blitox", dose_per_15L_pump: "1.5g Strepto + 45g COC", dose_per_acre: "20g Strepto + 500g COC in 200L water", waiting_period_phi: "15 Days", application_instructions: "Spray 2-3 times at 15-day intervals starting pre-monsoon." }
    }
  },
  {
    issue_name: "Citrus Greening (HLB)", type: "Bacterial", hindi_name: "सिट्रस ग्रीनिंग",
    symptoms: "Asymmetrical mottling of leaves, yellow shoots, small lopsided fruits with inverted color break (green at stylar end). Bitter juice.",
    favorable_weather: "Year-round, spread by Asian Citrus Psyllid.",
    solutions: {
      organic_ipm: { preventive_measures: "Use disease-free nursery stock. Eradicate infected trees.", biological_spray: "Beauveria bassiana for vector control.", mechanical: "Yellow sticky traps for psyllid monitoring." },
      chemical_curative: { active_ingredient: "Imidacloprid 17.8% SL (Vector Control)", commercial_reference: "Confidor (for vector)", dose_per_15L_pump: "5ml (Imidacloprid)", dose_per_acre: "50-75ml in 200L water", waiting_period_phi: "21 Days", application_instructions: "Main strategy is controlling the vector (Psylla). Tree removal is only permanent cure." }
    }
  },
  {
    issue_name: "Phytophthora Foot Rot / Gummosis", type: "Fungal", hindi_name: "गमोसिस / तना गलन",
    symptoms: "Oozing of gum from the main trunk near the soil line, bark cracking, yellowing of foliage, eventual tree death.",
    favorable_weather: "Waterlogged soils, prolonged wet periods, high humidity.",
    solutions: {
      organic_ipm: { preventive_measures: "Avoid flooding near the trunk. Bud high (20-25cm above ground). Paint trunk with Bordeaux paste.", biological_spray: "Trichoderma viride @ 10g/L soil drench.", mechanical: "Scrape affected bark." },
      chemical_curative: { active_ingredient: "Metalaxyl 8% + Mancozeb 64% WP OR Fosetyl-Al 80% WP", commercial_reference: "Ridomil Gold, Aliette", dose_per_15L_pump: "30g (Ridomil) or 45g (Aliette)", dose_per_acre: "400g (Ridomil) or 600g (Aliette) as drench/spray", waiting_period_phi: "15 Days", application_instructions: "Scrape infected bark and apply Metalaxyl paste. Drench root zone." }
    }
  },
  {
    issue_name: "Citrus Psylla", type: "Insect-Pest", hindi_name: "सिट्रस सिल्ला (रस चूसक)",
    symptoms: "Nymphs and adults suck sap from new flush, causing leaf curling and stunting. Excrete honeydew leading to sooty mould. Vector of Greening disease.",
    favorable_weather: "Spring and early summer during new flush emergence.",
    solutions: {
      organic_ipm: { preventive_measures: "Avoid staggered flushing.", biological_spray: "Azadirachtin 10000 PPM @ 3ml/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Thiamethoxam 25% WG OR Imidacloprid 17.8% SL", commercial_reference: "Actara, Confidor", dose_per_15L_pump: "5g (Actara) or 5ml (Confidor)", dose_per_acre: "100g (Actara) or 75ml (Confidor)", waiting_period_phi: "14 Days", application_instructions: "Spray at the initiation of new flush." }
    }
  },
  {
    issue_name: "Citrus Leaf Miner", type: "Insect-Pest", hindi_name: "पत्ती सुरंगक कीट",
    symptoms: "Silvery, serpentine mines/trails on tender leaves. Leaves curl, distort, and dry. Mines serve as entry points for Citrus Canker.",
    favorable_weather: "Warm and humid weather during new flush.",
    solutions: {
      organic_ipm: { preventive_measures: "Prune affected shoots.", biological_spray: "Neem oil 1500 PPM @ 5ml/L.", mechanical: "Pheromone traps." },
      chemical_curative: { active_ingredient: "Abamectin 1.9% EC OR Imidacloprid 17.8% SL", commercial_reference: "Vertimec, Confidor", dose_per_15L_pump: "10ml (Abamectin)", dose_per_acre: "150ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Spray on new flush when leaves are 1-2 cm long." }
    }
  },
  {
    issue_name: "Citrus Blackfly / Whitefly", type: "Insect-Pest", hindi_name: "सफ़ेद/काली मक्खी",
    symptoms: "Adults and nymphs suck sap from lower leaf surfaces. Heavy honeydew secretion leads to severe sooty mould, blocking photosynthesis.",
    favorable_weather: "Dry spells followed by high humidity.",
    solutions: {
      organic_ipm: { preventive_measures: "Maintain good aeration in canopy.", biological_spray: "Verticillium lecanii @ 5g/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Spirotetramat 150 OD OR Diafenthiuron 50% WP", commercial_reference: "Movento Energy, Pegasus", dose_per_15L_pump: "15ml (Movento)", dose_per_acre: "200ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Ensure thorough coverage of the underside of leaves." }
    }
  },
  {
    issue_name: "Mites (Rust / Red Spider)", type: "Insect-Pest", hindi_name: "मकड़ी (माइट)",
    symptoms: "Rust mites cause silvery/brown/black rough patches on fruit skin (shark skin). Red mites cause leaf stippling and drop.",
    favorable_weather: "Dry and dusty, warm conditions.",
    solutions: {
      organic_ipm: { preventive_measures: "Overhead irrigation to reduce dust.", biological_spray: "Hirsutella thompsonii.", mechanical: "N/A" },
      chemical_curative: { active_ingredient: "Propargite 57% EC OR Spiromesifen 22.9% SC", commercial_reference: "Omite, Oberon", dose_per_15L_pump: "30ml (Propargite) or 15ml (Oberon)", dose_per_acre: "400ml (Propargite) or 200ml (Oberon)", waiting_period_phi: "15 Days", application_instructions: "Spray thoroughly covering fruits and foliage." }
    }
  },
  {
    issue_name: "Scale Insects", type: "Insect-Pest", hindi_name: "स्केल कीट",
    symptoms: "Armored, hard, brown/red or soft green bumps on stems, leaves, and fruits. Stunted growth, yellowing, branch dieback.",
    favorable_weather: "Warm, dry conditions with poor air circulation.",
    solutions: {
      organic_ipm: { preventive_measures: "Prune to open canopy.", biological_spray: "Horticultural oil (Neem/Mineral oil).", mechanical: "Scrub off small infestations." },
      chemical_curative: { active_ingredient: "Buprofezin 25% SC + Horticultural Oil", commercial_reference: "Applaud", dose_per_15L_pump: "20ml", dose_per_acre: "300ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Mix with 1% mineral oil to penetrate the waxy scale shield." }
    }
  },
  {
    issue_name: "Fruit Fly", type: "Insect-Pest", hindi_name: "फल मक्खी",
    symptoms: "Punctures on ripening fruit, oozing juice, premature ripening and fruit drop. Maggots inside rotting fruit.",
    favorable_weather: "Warm and humid during ripening stage.",
    solutions: {
      organic_ipm: { preventive_measures: "Collect and deeply bury fallen fruits.", biological_spray: "N/A", mechanical: "Methyl Eugenol pheromone traps @ 4-6/acre." },
      chemical_curative: { active_ingredient: "Deltamethrin 2.8% EC + Jaggery (Poison Bait)", commercial_reference: "Decis", dose_per_15L_pump: "15ml + 100g Jaggery", dose_per_acre: "200ml in 200L water", waiting_period_phi: "10 Days", application_instructions: "Apply as coarse spray/bait on tree trunks or non-fruiting branches." }
    }
  },
  {
    issue_name: "Mealybug", type: "Insect-Pest", hindi_name: "मिलीबग",
    symptoms: "Cottony white masses on fruit stalks, twigs, and leaves. Sooty mould development on honeydew.",
    favorable_weather: "Warm weather, often spread by ants.",
    solutions: {
      organic_ipm: { preventive_measures: "Control ants (use sticky bands on trunk).", biological_spray: "Cryptolaemus montrouzieri (predatory beetle).", mechanical: "Sticky bands on tree trunk." },
      chemical_curative: { active_ingredient: "Profenofos 50% EC OR Chlorpyrifos 20% EC", commercial_reference: "Curacron, Radar", dose_per_15L_pump: "30ml", dose_per_acre: "400ml in 200L water", waiting_period_phi: "15 Days", application_instructions: "Direct spray at the cottony masses. Use a wetting agent/surfactant." }
    }
  },
  {
    issue_name: "Aphids", type: "Insect-Pest", hindi_name: "माहू / एफिड",
    symptoms: "Cluster of small soft-bodied insects on new shoots. Curling of young leaves, honeydew secretion. Vector of Tristeza Virus.",
    favorable_weather: "Cool, moist spring weather.",
    solutions: {
      organic_ipm: { preventive_measures: "Monitor new flushes.", biological_spray: "Neem oil @ 3ml/L.", mechanical: "Yellow sticky traps." },
      chemical_curative: { active_ingredient: "Dimethoate 30% EC", commercial_reference: "Rogor", dose_per_15L_pump: "30ml", dose_per_acre: "400ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "Spray when colonies are seen on new flush." }
    }
  },
  {
    issue_name: "Tristeza Virus", type: "Viral", hindi_name: "ट्रिस्टेजा वायरस",
    symptoms: "Vein clearing, stem pitting, rapid wilting (quick decline), poor fruit set, dieback.",
    favorable_weather: "Spread rapidly by Toxoptera citricida (Brown citrus aphid).",
    solutions: {
      organic_ipm: { preventive_measures: "Use resistant rootstocks (e.g., Rangpur lime). Use certified virus-free budwood.", biological_spray: "N/A", mechanical: "Eradicate severely declining trees." },
      chemical_curative: { active_ingredient: "Vector Control: Imidacloprid 17.8% SL", commercial_reference: "Confidor", dose_per_15L_pump: "5ml", dose_per_acre: "75ml in 200L water", waiting_period_phi: "14 Days", application_instructions: "No cure for the virus. Control the aphid vectors to prevent spread." }
    }
  }
];

const citrusPests10 = citrusPests12.slice(0, 10);
const citrusPests8 = citrusPests12.slice(0, 8);
const citrusPests6 = citrusPests12.slice(0, 6);
const citrusPests5 = citrusPests12.slice(0, 5);

export const data = [
  {
    crop_id: "sweet-orange",
    common_name: "Sweet Orange",
    hindi_name: "संतरा / मौसम्बी",
    regional_names: { marathi: "मोसंबी", punjabi: "ਮਾਲਟਾ", tamil: "சாத்துக்குடி", telugu: "బత్తాయి" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "mandarin",
    common_name: "Mandarin / Tangerine / Clementine",
    hindi_name: "संतरा / किन्नू",
    regional_names: { marathi: "संत्री", punjabi: "ਸੰਤਰਾ", tamil: "கமலா ஆரஞ்சு", telugu: "కమలా ఫలం" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "nagpur-orange",
    common_name: "Nagpur Orange / Santra",
    hindi_name: "नागपूरी संतरा",
    regional_names: { marathi: "नागपुरी संत्री", punjabi: "ਸੰਤਰਾ", tamil: "ஆரஞ்சு", telugu: "కమలా" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "kinnow",
    common_name: "Kinnow",
    hindi_name: "किन्नू",
    regional_names: { marathi: "किन्नू", punjabi: "ਕਿੰਨੂ", tamil: "கின்னு", telugu: "కిన్నూ" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 10 tons, N: 500g, P2O5: 250g, K2O: 300g per bearing tree/year",
      deficiencies: citrusDeficiencies8
    },
    pest_and_disease_solutions: citrusPests12
  },
  {
    crop_id: "lemon",
    common_name: "Lemon",
    hindi_name: "नींबू",
    regional_names: { marathi: "लिंबू", punjabi: "ਨਿੰਬੂ", tamil: "எலுமிச்சை", telugu: "నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi", "Zaid"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "5.5-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per bearing tree/year",
      deficiencies: citrusDeficiencies7
    },
    pest_and_disease_solutions: citrusPests10
  },
  {
    crop_id: "lime",
    common_name: "Lime / Kagzi Lime",
    hindi_name: "कागज़ी नींबू",
    regional_names: { marathi: "कागजी लिंबू", punjabi: "ਕਾਗਜ਼ੀ ਨਿੰਬੂ", tamil: "எலுமிச்சை", telugu: "నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi", "Zaid"],
    critical_stages: citrusStages6,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per bearing tree/year",
      deficiencies: citrusDeficiencies7
    },
    pest_and_disease_solutions: citrusPests10
  },
  {
    crop_id: "grapefruit",
    common_name: "Grapefruit",
    hindi_name: "चकोतरा / ग्रेपफ्रूट",
    regional_names: { marathi: "पपनस", punjabi: "ਗ੍ਰੇਪਫਰੂਟ", tamil: "பப்ளிமாஸ்", telugu: "పంపర పనస" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies6
    },
    pest_and_disease_solutions: citrusPests8
  },
  {
    crop_id: "pomelo",
    common_name: "Pomelo / Chakotra",
    hindi_name: "चकोतरा",
    regional_names: { marathi: "पपनस", punjabi: "ਚਕੋਤਰਾ", tamil: "பப்ளிமாஸ்", telugu: "పంపర పనస" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies6
    },
    pest_and_disease_solutions: citrusPests8
  },
  {
    crop_id: "bergamot",
    common_name: "Bergamot",
    hindi_name: "बर्गमॉट",
    regional_names: { marathi: "बर्गमॉट", punjabi: "ਬਰਗਮੌਟ", tamil: "பெர்கமோட்", telugu: "బెర్గామోట్" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5 tons, N: 250g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "citron",
    common_name: "Citron",
    hindi_name: "बड़ा नींबू / बिजोरा",
    regional_names: { marathi: "महाळुंग", punjabi: "ਖੱਟਾ", tamil: "கிடாரங்காய்", telugu: "మాదిఫలం" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "kumquat",
    common_name: "Kumquat",
    hindi_name: "कमक्वाट",
    regional_names: { marathi: "कमक्वाट", punjabi: "ਕੁਮਕੁਆਟ", tamil: "கும்குவாட்", telugu: "కుంక్వాట్" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 5 tons, N: 200g, P2O5: 100g, K2O: 150g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "yuzu",
    common_name: "Yuzu",
    hindi_name: "युजू",
    regional_names: { marathi: "युजू", punjabi: "ਯੂਜ਼ੂ", tamil: "யுசு", telugu: "యుజు" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages4,
    soil_and_nutrition: {
      ph_range: "6.0-7.0",
      basal_dose_per_acre: "FYM: 5 tons, N: 200g, P2O5: 100g, K2O: 150g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests5
  },
  {
    crop_id: "meyer-lemon",
    common_name: "Meyer Lemon",
    hindi_name: "मेयर नींबू",
    regional_names: { marathi: "मेयर लिंबू", punjabi: "ਮੇਅਰ ਨਿੰਬੂ", tamil: "மேயர் எலுமிச்சை", telugu: "మేయర్ నిమ్మ" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 5-8 tons, N: 300g, P2O5: 150g, K2O: 200g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  },
  {
    crop_id: "blood-orange",
    common_name: "Blood Orange",
    hindi_name: "रक्त संतरा",
    regional_names: { marathi: "रक्त संत्री", punjabi: "ਰਕਤ ਸੰਤਰਾ", tamil: "ரத்த ஆரஞ்சு", telugu: "రక్త కమల" },
    category: "Fruit",
    season: ["Kharif", "Rabi"],
    critical_stages: citrusStages5,
    soil_and_nutrition: {
      ph_range: "6.0-7.5",
      basal_dose_per_acre: "FYM: 8-10 tons, N: 400g, P2O5: 200g, K2O: 300g per tree/year",
      deficiencies: citrusDeficiencies5
    },
    pest_and_disease_solutions: citrusPests6
  }
];
