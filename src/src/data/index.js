/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  Indian & Global Crop Database — Master Index                       ║
 * ║  369 Crops | 12 Categories | ICAR/KVK/CIBRC + FAO/CABI Standards   ║
 * ║  Generated: 2026-08-22                                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Coverage:
 *   - Cereals & Pseudo-Cereals:  25 crops
 *   - Pulses & Grain Legumes:    27 crops
 *   - Oilseeds:                  18 crops
 *   - Vegetables:                90 crops
 *   - Fruits & Tree Nuts:        87 crops
 *   - Commercial (Plantation, Fiber, Sugar, Spices, Medicinal, Forage): 122 crops
 *   ─────────────────────────────────────
 *   Total:                       369 crops
 */

// ── Category Imports ────────────────────────────────────────────────────
import { cereals } from './crops/cereals.js';
import { pulses } from './crops/pulses.js';
import { oilseeds } from './crops/oilseeds.js';
import { vegetables } from './crops/vegetables.js';
import { fruits } from './crops/fruits.js';
import { commercial } from './crops/commercial.js';

// ── Re-export category arrays ───────────────────────────────────────────
export { cereals, pulses, oilseeds, vegetables, fruits, commercial };

// ── Combined flat list of all crops ─────────────────────────────────────
export const cropList = [
  ...cereals,
  ...pulses,
  ...oilseeds,
  ...vegetables,
  ...fruits,
  ...commercial,
];

// ── Indexed lookup map (keyed by crop_id) ───────────────────────────────
export const cropDatabase = Object.fromEntries(
  cropList.map(crop => [crop.crop_id, crop])
);

// ── Quick Lookup Helpers ────────────────────────────────────────────────

/**
 * Find a crop by its unique ID.
 * @param {string} id - e.g., 'paddy-rice', 'tomato', 'mango'
 * @returns {object|null}
 */
export const getCropById = (id) => cropDatabase[id] ?? null;

/**
 * Filter crops by category.
 * @param {string} category - e.g., 'Cereal', 'Pulse', 'Vegetable', 'Fruit', 'Spice', etc.
 * @returns {object[]}
 */
export const getCropsByCategory = (category) =>
  cropList.filter(c => c.category === category);

/**
 * Filter crops by growing season.
 * @param {string} season - 'Kharif', 'Rabi', or 'Zaid'
 * @returns {object[]}
 */
export const getCropsBySeason = (season) =>
  cropList.filter(c => c.season && c.season.includes(season));

/**
 * Search crops by common name, Hindi name, or regional names (case-insensitive).
 * @param {string} query - Search term
 * @returns {object[]}
 */
export const searchCropByName = (query) => {
  const q = query.toLowerCase();
  return cropList.filter(c => {
    if (c.common_name && c.common_name.toLowerCase().includes(q)) return true;
    if (c.hindi_name && c.hindi_name.includes(query)) return true;
    if (c.regional_names) {
      return Object.values(c.regional_names).some(
        name => name && name.toLowerCase().includes(q)
      );
    }
    return false;
  });
};

/**
 * Get all unique categories present in the database.
 * @returns {string[]}
 */
export const getCategories = () =>
  [...new Set(cropList.map(c => c.category).filter(Boolean))];

/**
 * Get database statistics.
 * @returns {object}
 */
export const getStats = () => {
  let totalStages = 0;
  let totalDeficiencies = 0;
  let totalIssues = 0;

  for (const crop of cropList) {
    if (crop.critical_stages) totalStages += crop.critical_stages.length;
    if (crop.soil_and_nutrition?.deficiencies)
      totalDeficiencies += crop.soil_and_nutrition.deficiencies.length;
    if (crop.pest_and_disease_solutions)
      totalIssues += crop.pest_and_disease_solutions.length;
  }

  return {
    totalCrops: cropList.length,
    totalStages,
    totalDeficiencies,
    totalPestDiseaseEntries: totalIssues,
    categories: getCategories(),
    byCategory: Object.fromEntries(
      getCategories().map(cat => [cat, getCropsByCategory(cat).length])
    ),
  };
};
