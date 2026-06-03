// ============================================================
// Casting Table Database
// Configure mold types, their layer costs, and output items.
// outputs: Map<materialNumber, itemId>
// ============================================================
export const castingTableDatabase = new Map([
    ["ingot_mold", {
            layersRequired: 1,
            outputs: new Map([
                [2, "minecraft:iron_ingot"],
                [3, "minecraft:gold_ingot"],
                [4, "minecraft:copper_ingot"],
                [5, "minecraft:diamond"],
                [6, "minecraft:netherite_ingot"],
                [7, "minecraft:obsidian"],
                [8, "foundry:aluminium_ingot"],
                [9, "foundry:zinc_ingot"],
                [10, "foundry:osmium_ingot"],
                [11, "foundry:titanium_ingot"],
                [12, "foundry:lead_ingot"],
                [13, "foundry:silver_ingot"],
                [14, "foundry:brass_ingot"],
                [15, "foundry:steel_ingot"],
                [16, "foundry:dragon_steel_ingot"],
                [18, "foundry:palladium_ingot"],
                [19, "foundry:adamantium_ingot"],
            ])
        }],
    ["axe_mold", {
            layersRequired: 3,
            outputs: new Map([
            // TODO: Add axe head items when they exist
            // [2,  "foundry:iron_axe_head"],
            ])
        }],
]);
