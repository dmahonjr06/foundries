import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// ── Configuration ────────────────────────────────────────────────────────────

const OUTPUT_DIR = "C:\\Users\\dmaho\\Documents\\github\\foundries\\foundries BP\\items\\buckets\\buckets"; // Change this to your desired output directory

const ITEM_NAMES = [
  "brass",
  "copper",
  "diamond",
  "dragon_steel",
  "gold",
  "iron",
  "lead",
  "netherite",
  "empty_obsidian",
  "osmium",
  "palladium",
  "zinc",
  "redstone",
  "silver",
  "steel",
  "titanium"
];

// ── Template ─────────────────────────────────────────────────────────────────

function createItemTemplate(name) {
  return {
    format_version: "1.26.10",
    "minecraft:item": {
      description: {
        identifier: `foundry:${name}_bucket`,
        menu_category: {
          category: "items",
        },
      },
      components: {
        "minecraft:icon": `${name}_bucket`,
        "minecraft:max_stack_size": 1,
      },
    },
  };
}

// ── Generator ─────────────────────────────────────────────────────────────────

function generateItems(names, outputDir) {
  mkdirSync(outputDir, { recursive: true });

  for (const name of names) {
    const filePath = join(outputDir, `${name}.json`);
    const content = JSON.stringify(createItemTemplate(name), null, 4);
    writeFileSync(filePath, content, "utf-8");
    console.log(`✔ Created: ${filePath}`);
  }

  console.log(`\nDone — ${names.length} file(s) written to "${outputDir}"`);
}

generateItems(ITEM_NAMES, OUTPUT_DIR);