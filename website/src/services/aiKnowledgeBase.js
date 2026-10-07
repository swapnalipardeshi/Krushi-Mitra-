// 🌾 Krushi Mitra Pro Agricultural Expert Database & ICAR/KVK Master Index
import { cropList, cropDatabase, getCropById, getCropsByCategory } from '../../../src/src/data/index.js';

export { cropList, cropDatabase, getCropById, getCropsByCategory };

export const cropExpertRules = {
  Tomato: {
    critical_stages: ['Seedling', 'Flowering', 'Fruit Setting', 'Harvesting'],
    pests: ['Fruit Borer', 'Whitefly', 'Leaf Miner'],
    diseases: ['Early Blight', 'Late Blight', 'Bacterial Wilt'],
    nutrients: 'High Potassium required during fruiting; Calcium prevents Blossom End Rot.',
    water: 'Consistent moisture needed; irregular watering causes fruit cracking.',
  },
  Wheat: {
    critical_stages: ['CRI (Crown Root Initiation)', 'Tillering', 'Jointing', 'Flowering', 'Milk Stage'],
    pests: ['Aphids', 'Termites', 'Pink Borer'],
    diseases: ['Yellow Rust', 'Brown Rust', 'Karnal Bunt'],
    nutrients: 'Nitrogen split application is key; first dose at 21 days.',
    water: 'CRI stage (21 days after sowing) is the most critical for irrigation.',
  },
  Cotton: {
    critical_stages: ['Squaring', 'Flowering', 'Boll Development', 'Boll Opening'],
    pests: ['Pink Bollworm', 'Jassids', 'Whitefly'],
    diseases: ['Root Rot', 'Bacterial Blight', 'Para Wilt'],
    nutrients: 'Magnesium deficiency causes reddening of leaves (Lalya).',
    water: 'Sensitive to waterlogging; needs good drainage.',
  },
  Onion: {
    critical_stages: ['Seedling', 'Transplanting', 'Bulb Initiation', 'Bulb Development'],
    pests: ['Thrips', 'Onion Maggot'],
    diseases: ['Purple Blotch', 'Downy Mildew'],
    nutrients: 'Sulphur is critical for bulb pungency and storage life.',
    water: 'Stop irrigation 10-15 days before harvest for better shelf life.',
  },
  Rice: {
    critical_stages: ['Nursery', 'Tillering', 'Panicle Initiation', 'Flowering', 'Grain Filling'],
    pests: ['Stem Borer', 'Brown Plant Hopper (BPH)', 'Leaf Folder'],
    diseases: ['Blast', 'Bacterial Leaf Blight (BLB)', 'Sheath Blight'],
    nutrients: 'Zinc deficiency (Khaira disease) is common; use Zinc Sulphate.',
    water: 'Maintain 2-5 cm standing water during tillering to flowering.',
  },
  Chilli: {
    critical_stages: ['Vegetative', 'Flowering', 'Fruit Set', 'Fruit Ripening'],
    pests: ['Thrips', 'Mites', 'Aphids'],
    diseases: ['Dieback', 'Anthracnose', 'Leaf Curl Virus'],
    nutrients: 'High requirement for Nitrogen and Potash; avoid excess water.',
    water: 'Sensitive to waterlogging; flowering stage is most sensitive to drought.',
  },
  Soyabean: {
    critical_stages: ['Germination', 'Flowering', 'Pod Formation', 'Pod Filling'],
    pests: ['Girdle Beetle', 'Semilooper', 'Tobacco Caterpillar'],
    diseases: ['Yellow Mosaic Virus (YMV)', 'Root Rot', 'Rust'],
    nutrients: 'Seed treatment with Rhizobium and PSB is essential for Nitrogen fixation.',
    water: 'Needs consistent moisture during flowering and pod filling.',
  },
};

export const fewShotExamples = [
  {
    query: 'मेरे टमाटर के पत्तों पर पीले धब्बे दिख रहे हैं और वे सूख रहे हैं। क्या करूँ?',
    response: `यह **अगेती झुलसा (Early Blight)** के लक्षण हो सकते हैं। 
1. **जैविक उपचार**: नीम का तेल (5 मिली/लीटर) और बेकिंग सोडा (2 ग्राम/लीटर) का घोल बनाकर छिड़काव करें।
2. **रासायनिक उपचार**: **Mancozeb 75 WP (Dithane M-45)** 2.5 ग्राम प्रति लीटर पानी में मिलाकर छिड़काव करें।`
  }
];

export function getKnowledgeBrief(crops = []) {
  if (!Array.isArray(crops) || crops.length === 0) {
    return 'General crop guidance: focus on soil health, timely irrigation, and pest monitoring.';
  }

  const uniqueCrops = [...new Set(crops.map(c => String(c).trim()).filter(Boolean))];
  const cropSummary = uniqueCrops.map(crop => `${crop} requires timely monitoring of pests, irrigation, and nutrient balance.`).join(' ');
  return `Crop knowledge for ${uniqueCrops.join(', ')}: ${cropSummary}`;
}

export function getOfflineAdvice(query = '', crops = [], district = '') {
  const cropNames = Array.isArray(crops) && crops.length ? crops.join(', ') : 'your crop';
  const locationHint = district ? ` in ${district}` : '';
  return `Krushi Mitra suggests:\n\n- Check soil moisture and field drainage first.\n- Observe whether the issue is pest, disease, or nutrient stress.\n- For ${cropNames}${locationHint}, prioritize early action in the morning or evening.\n- Use neem-based sprays or locally available safe options for initial treatment.\n\nQuestion: ${query || 'Need seasonal field advice.'}`;
}

export function getFewShotContext() {
  return fewShotExamples
    .map(example => `User Query: ${example.query}\nExpert Advice: ${example.response}`)
    .join('\n\n');
}
