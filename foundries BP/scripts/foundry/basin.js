"use strict";
// TODO: 
const mapBasinLiquidToSolidBlockType = new Map([
    [1, { resource_types1: "empty", resource_types2: "empty" }],
    [2, { resource_types1: "minecraft:iron_block", resource_types2: "empty" }],
    [3, { resource_types1: "minecraft:gold_block", resource_types2: "empty" }],
    [4, { resource_types1: "minecraft:copper_block", resource_types2: "empty" }],
    [5, { resource_types1: "minecraft:diamond_block", resource_types2: "empty" }],
    [6, { resource_types1: "minecraft:netherite_block", resource_types2: "empty" }],
    [7, { resource_types1: "minecraft:obsidian_block", resource_types2: "empty" }],
    [8, { resource_types1: "foundry:aluminium_block", resource_types2: "empty" }],
    [9, { resource_types1: "foundry:zinc_block", resource_types2: "empty" }],
    [10, { resource_types1: "foundry:osmium_block", resource_types2: "empty" }],
    [11, { resource_types1: "foundry:titanium_block", resource_types2: "empty" }],
    [12, { resource_types1: "foundry:lead_block", resource_types2: "empty" }],
    [13, { resource_types1: "foundry:silver_block", resource_types2: "empty" }],
    [14, { resource_types1: "foundry:brass_block", resource_types2: "empty" }],
    [15, { resource_types1: "foundry:steel_block", resource_types2: "empty" }],
    [16, { resource_types1: "foundry:dragon_steel_block", resource_types2: "empty" }],
    [17, { resource_types1: "minecraft:redstone_block", resource_types2: "empty" }],
    [18, { resource_types1: "foundry:palladium_block", resource_types2: "empty" }],
    [19, { resource_types1: "foundry:adamantium_block", resource_types2: "empty" }],
]);
const turn_basin_solid = {
    onTick({ block: Block }) { }
};
