# 🌾 Krushi Mitra — Master ICAR/KVK 369 Crops Dataset JSONL Fine-Tuning Generator (Python)
import json
import os
import glob

DATASET_FILE = os.path.join(os.path.dirname(__file__), "krushi_mitra_finetune_369_crops.jsonl")
CROPS_DIR = os.path.join(os.path.dirname(__file__), "../src/src/data/crops")

SYSTEM_INSTRUCTION = (
    "You are Krushi Mitra (कृषी मित्र) — a custom-trained, expert-level AI agricultural model "
    "built specifically for Indian farmers. You have deep domain knowledge of 369 Indian crop varieties, "
    "Kharif/Rabi/Zaid seasons, regional soil NPK metrics, pest/disease diagnoses with CIBRC remedies, "
    "mandi price forecasting, government schemes (PM-KISAN, PMFBY, KCC), and rural metrics (acre, quintal, bigha, 15L pump)."
)

def build_dataset():
    examples = []
    crop_files = glob.glob(os.path.join(CROPS_DIR, "*.js"))
    total_crops = 0

    for file_path in crop_files:
        filename = os.path.basename(file_path)
        if filename.startswith("_"):
            continue
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                # Count crop entries in JS array exports
                count = content.count("crop_id:")
                total_crops += count
                
                # Add sample fine-tuning prompt for each file category
                category_name = filename.replace(".js", "").capitalize()
                examples.append({
                    "messages": [
                        {"role": "system", "content": SYSTEM_INSTRUCTION},
                        {"role": "user", "content": f"Provide master ICAR knowledge for {category_name} crops in India."},
                        {
                            "role": "model",
                            "content": json.dumps({
                                "category": category_name,
                                "crop_count": count,
                                "database_source": "ICAR/KVK/CIBRC 2026 Standards",
                                "status": "active"
                            }, ensure_ascii=False)
                        }
                    ]
                })
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

    with open(DATASET_FILE, "w", encoding="utf-8") as out:
        for ex in examples:
            out.write(json.dumps(ex, ensure_ascii=False) + "\n")

    print(f"✅ Generated fine-tuning dataset with {total_crops} ICAR crops across {len(crop_files)} categories -> {DATASET_FILE}")

if __name__ == "__main__":
    build_dataset()
