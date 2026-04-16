/**
 * item_textures_json_generator.js
 *
 * Scans the items texture folder and writes item_texture.json.
 *
 * Script:  C:\Users\dmaho\Documents\github\foundries\tools\item_textures_json_generator.js
 * Input:   C:\Users\dmaho\Documents\github\foundries\foundries RP\textures\items
 * Output:  C:\Users\dmaho\Documents\github\foundries\foundries RP\textures\item_texture.json
 *
 * Usage:
 *   node item_textures_json_generator.js
 */

import fs from "fs";
import path from "path";

// ── Config ────────────────────────────────────────────────────────────────────

const ITEMS_DIR   = String.raw`C:\Users\dmaho\Documents\github\foundries\foundries RP\textures\items`;
const OUTPUT_FILE = String.raw`C:\Users\dmaho\Documents\github\foundries\foundries RP\textures\item_texture.json`;
const TEX_NAME    = "atlas.items";
const PACK_NAME   = "foundries RP";

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Recursively collect all .png files under a directory.
 * Returns an array of absolute paths.
 */
function collectPNGs(dir) {
  const results = [];

  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && entry.name.endsWith(".png")) {
        results.push(full);
      }
    }
  }

  walk(dir);
  return results;
}

/**
 * Convert an absolute file path to the texture key and texture path.
 *
 * Example (ITEMS_DIR = …/textures/items):
 *   …/textures/items/buckets/molten_steel/half_full.png
 *   → key:     "buckets_molten_steel_half_full"
 *   → texPath: "textures/items/buckets/molten_steel/half_full"
 */
function toEntry(absPath) {
  // Path relative to the items folder, forward-slash separated, no extension
  const rel = path
    .relative(ITEMS_DIR, absPath)
    .replace(/\.png$/, "")
    .split(path.sep)
    .join("/");

  const texPath = "textures/items/" + rel;

  // The immediate subfolder of items/ (or null for top-level files)
  const parts  = rel.split("/");
  const key    = parts[parts.length - 1];
  const folder = parts.length > 1 ? parts.slice(0, -1).join("/") : null;

  return { key, texPath, folder };
}

/**
 * Capitalise and humanise a folder path for use as a comment label.
 * "buckets/molten_steel" → "Buckets / Molten steel"
 */
function folderLabel(folder) {
  return folder
    .split("/")
    .map((seg, i) => {
      const nice = seg.replace(/_/g, " ");
      return i === 0
        ? nice.charAt(0).toUpperCase() + nice.slice(1)
        : nice;
    })
    .join(" / ");
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log(`Scanning: ${ITEMS_DIR}`);

const files   = collectPNGs(ITEMS_DIR);
const entries = files
  .map(toEntry)
  .sort((a, b) => {
    // Sort by folder first, then by key within the folder
    const fa = a.folder || "";
    const fb = b.folder || "";
    return fa !== fb ? fa.localeCompare(fb) : a.key.localeCompare(b.key);
  });

// Build the texture_data block as a string so we can insert // comments
let textureDataStr = "";
let lastFolder = undefined;

for (const { key, texPath, folder } of entries) {
  if (folder !== lastFolder) {
    if (lastFolder !== undefined) textureDataStr += "\n";
    const label = folder ? folderLabel(folder) : "Root";
    textureDataStr += `        // ${label}\n`;
    lastFolder = folder;
  }
  textureDataStr += `        "${key}": {\n`;
  textureDataStr += `            "textures": "${texPath}"\n`;
  textureDataStr += `        },\n`;
}

// Remove trailing comma from last entry
textureDataStr = textureDataStr.replace(/,\n$/, "\n");

const output =
  `{\n` +
  `    "texture_name": "${TEX_NAME}",\n` +
  `    "resource_pack_name": "${PACK_NAME}",\n` +
  `    "texture_data": {\n` +
  textureDataStr +
  `    }\n` +
  `}\n`;

fs.writeFileSync(OUTPUT_FILE, output, "utf8");

console.log(`Done! ${entries.length} texture(s) written to:\n  ${OUTPUT_FILE}`);
