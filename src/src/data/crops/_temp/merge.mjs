/**
 * Merge Script — Combines temp part files into final category files.
 * Run: node src/data/crops/_temp/merge.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMP_DIR = __dirname;
const OUTPUT_DIR = join(__dirname, '..');

// Category mapping: output filename -> temp file prefixes
const categories = {
  'cereals.js': ['cereals_p1', 'cereals_p2'],
  'pulses.js': ['pulses_p1', 'pulses_p2'],
  'oilseeds.js': ['oilseeds_p1', 'oilseeds_p2'],
  'vegetables.js': ['vegetables_p1', 'vegetables_p2', 'vegetables_p3', 'vegetables_p4', 'vegetables_p5', 'vegetables_p6'],
  'fruits.js': ['fruits_p1', 'fruits_p2', 'fruits_p3', 'fruits_p4', 'fruits_p5', 'fruits_p6'],
  'commercial.js': ['commercial_p1', 'commercial_p2', 'commercial_p3', 'commercial_p4', 'commercial_p5'],
};

// Export variable names
const exportNames = {
  'cereals.js': 'cereals',
  'pulses.js': 'pulses',
  'oilseeds.js': 'oilseeds',
  'vegetables.js': 'vegetables',
  'fruits.js': 'fruits',
  'commercial.js': 'commercial',
};

function extractArrayContent(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  // Find the array content between the first [ and last ]
  const firstBracket = content.indexOf('[');
  const lastBracket = content.lastIndexOf(']');
  if (firstBracket === -1 || lastBracket === -1) {
    console.warn(`Warning: Could not find array in ${filePath}`);
    return '';
  }
  // Extract inner content (without the outer [ and ])
  return content.substring(firstBracket + 1, lastBracket).trim();
}

let totalCrops = 0;

for (const [outputFile, prefixes] of Object.entries(categories)) {
  const exportName = exportNames[outputFile];
  const parts = [];
  
  for (const prefix of prefixes) {
    const tempFile = join(TEMP_DIR, `${prefix}.js`);
    try {
      const arrayContent = extractArrayContent(tempFile);
      if (arrayContent) {
        parts.push(arrayContent);
      }
      console.log(`  ✓ ${prefix}.js loaded`);
    } catch (err) {
      console.warn(`  ✗ ${prefix}.js not found or error: ${err.message}`);
    }
  }
  
  // Combine all parts into a single array
  const combinedContent = parts.filter(p => p.length > 0).join(',\n');
  
  // Count approximate crop entries
  const cropCount = (combinedContent.match(/"crop_id"/g) || []).length;
  totalCrops += cropCount;
  
  const header = `/**
 * ${outputFile.replace('.js', '').toUpperCase()} — Indian & Global Crop Database
 * Auto-generated from ICAR/KVK/CIBRC standards
 * Crops in this file: ${cropCount}
 * Generated: ${new Date().toISOString().split('T')[0]}
 */\n\n`;
  
  const output = `${header}export const ${exportName} = [\n${combinedContent}\n];\n`;
  
  const outputPath = join(OUTPUT_DIR, outputFile);
  writeFileSync(outputPath, output, 'utf-8');
  console.log(`✅ ${outputFile} — ${cropCount} crops — written to ${outputPath}`);
}

console.log(`\n🎉 Total crops merged: ${totalCrops}`);
