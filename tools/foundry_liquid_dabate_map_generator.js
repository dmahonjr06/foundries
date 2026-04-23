// ============================================================
// Foundry Map Generator
// ============================================================
 
const materials = [
    { id: "minecraft:iron_ingot",        propertyNumber: 2  },
    { id: "minecraft:gold_ingot",         propertyNumber: 3  },
    { id: "minecraft:copper_ingot",       propertyNumber: 4  },
    { id: "minecraft:diamond",            propertyNumber: 5  },
    { id: "minecraft:netherite_ingot",    propertyNumber: 6  },
    { id: "minecraft:obsidian",           propertyNumber: 7  },
    { id: "foundry:aluminium_ingot",      propertyNumber: 8  },
    { id: "foundry:zinc_ingot",           propertyNumber: 9  },
    { id: "foundry:osmium_ingot",         propertyNumber: 10 },
    { id: "foundry:titanium_ingot",       propertyNumber: 11 },
    { id: "foundry:lead_ingot",           propertyNumber: 12 },
    { id: "foundry:silver_ingot",         propertyNumber: 13 },
    { id: "foundry:brass_ingot",          propertyNumber: 14 },
    { id: "foundry:steel_ingot",          propertyNumber: 15 },
    { id: "foundry:dragon_steel_ingot",   propertyNumber: 16 },
    { id: "minecraft:redstone",           propertyNumber: 17 },
];
 
// How many layers to generate (max 16)
const numLayers = 16;
 
// ============================================================
 
function generateFoundryMap(materials, numLayers) {
    if (numLayers < 1 || numLayers > 16) {
        throw new Error("numLayers must be between 1 and 16");
    }
 
    const entries = [];
 
    for (let targetLayer = 1; targetLayer <= numLayers; targetLayer++) {
        // The boolean suffix: layers 1..(targetLayer-1) are true, rest are false
        const layerBools = Array.from({ length: 16 }, (_, i) => i < targetLayer - 1);
        const boolSuffix = layerBools.map(b => String(b)).join("|");
 
        // The result layer state: layers 1..targetLayer are true
        const resultLayers = Array.from({ length: 16 }, (_, i) => i < targetLayer);
 
        for (const mat of materials) {
            const key = `${mat.id}|${boolSuffix}`;
 
            const layerProps = {};
            for (let i = 1; i <= 16; i++) {
                layerProps[`layer${i}`] = resultLayers[i - 1];
            }
 
            const value = {
                ...layerProps,
                materialProperty: `foundry:layer${targetLayer}_material`,
                materialPropertyNumber: mat.propertyNumber,
            };
 
            entries.push([key, value]);
        }
    }
 
    return entries;
}
 
// ============================================================
// Output
// ============================================================
 
import { writeFileSync } from "fs";
 
const entries = generateFoundryMap(materials, numLayers);
 
const lines = [];
lines.push("export const playerInputItemsIntoFoundry = new Map([");
 
for (let i = 0; i < entries.length; i++) {
    const [key, val] = entries[i];
    const isLast = i === entries.length - 1;
 
    // Add layer comment at the start of each new layer group
    if (i % materials.length === 0) {
        const layerNum = parseInt(val.materialProperty.match(/layer(\d+)/)[1]);
        lines.push(`    // Layer ${layerNum} Items`);
    }
 
    const l = (n) => val[`layer${n}`];
    const row1 = `layer1: ${l(1)},  layer2: ${l(2)},  layer3: ${l(3)},  layer4: ${l(4)},  layer5: ${l(5)},  layer6: ${l(6)},  layer7: ${l(7)},  layer8: ${l(8)},`;
    const row2 = `layer9: ${l(9)}, layer10: ${l(10)}, layer11: ${l(11)}, layer12: ${l(12)}, layer13: ${l(13)}, layer14: ${l(14)}, layer15: ${l(15)}, layer16: ${l(16)},`;
 
    lines.push(`    ["${key}",`);
    lines.push(`        {`);
    lines.push(`            ${row1}`);
    lines.push(`            ${row2}`);
    lines.push(`            materialProperty: "${val.materialProperty}", materialPropertyNumber: ${val.materialPropertyNumber}`);
    lines.push(`        }${isLast ? "" : ","}`);
    lines.push(`    ]${isLast ? "" : ","}`);
}
 
lines.push("])");
 
const outputPath = "./playerInputItemsIntoFoundry.js";
writeFileSync(outputPath, lines.join("\n"));
console.log(`Generated ${entries.length} entries → ${outputPath}`);