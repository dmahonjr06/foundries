// ============================================================
// Render Controllers Generator
// ============================================================

const numLayers = 16;

const textures = [
    "texture.empty",
    "texture.lava",
    "texture.liquid_iron",
    "texture.liquid_gold",
    "texture.liquid_copper",
    "texture.liquid_diamond",
    "texture.liquid_netherite",
    "texture.liquid_obsidian",
    "texture.liquid_aluminium",
    "texture.liquid_zinc",
    "texture.liquid_osmium",
    "texture.liquid_titanium",
    "texture.liquid_lead",
    "texture.liquid_silver",
    "texture.liquid_brass",
    "texture.liquid_steel",
    "texture.liquid_dragon_steel",
    "texture.liquid_redstone",
    "texture.liquid_palladium",
    "texture.liquid_adamantium"
];

// ============================================================

function generateRenderControllers(numLayers, textures) {
    const controllers = {};

    for (let i = 1; i <= numLayers; i++) {
        const key = `controller.render.liquid_layer${i}`;

        // part_visibility: only layer i is a query, all others are false
        const partVisibility = {};
        for (let j = 1; j <= numLayers; j++) {
            partVisibility[`layer${j}`] = j === i
                ? `query.property('foundry:layer${i}')`
                : false;
        }

        controllers[key] = {
            geometry: "geometry.foundry_layers",
            materials: [{ "*": "Material.default" }],
            textures: [`array.liquids[query.property('foundry:layer${i}_material')]`],
            part_visibility: [partVisibility],
            arrays: {
                textures: {
                    "array.liquids": textures,
                },
            },
        };
    }

    return {
        format_version: "1.26.0",
        render_controllers: controllers,
    };
}

// ============================================================
// Output
// ============================================================

import { writeFileSync } from "fs";

const result = generateRenderControllers(numLayers, textures);

const outputPath = "foundries RP/render_controllers/foundry_layers.rc.json";
writeFileSync(outputPath, JSON.stringify(result, null, 4));
console.log(`Generated ${numLayers} render controllers → ${outputPath}`);