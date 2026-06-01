import { BlockPermutation, ItemStack, system } from "@minecraft/server";
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
    [17, { resource_types1: "empty", resource_types2: "minecraft:redstone_block" }],
    [18, { resource_types1: "foundry:palladium_block", resource_types2: "empty" }],
    [19, { resource_types1: "foundry:adamantium_block", resource_types2: "empty" }],
]);
export function turn_basin_liquid_to_solid(basinBlock, entity) {
    if (entity.typeId !== "foundry:basin")
        return;
    const materialType = entity.getProperty("basin:material_type");
    const blockTypes = mapBasinLiquidToSolidBlockType.get(materialType);
    if (!blockTypes)
        return;
    console.log("BlockTypes: " + blockTypes.resource_types1 + ", " + blockTypes.resource_types2);
    system.waitTicks(60).finally(() => {
        basinBlock.setPermutation(BlockPermutation.resolve(basinBlock.typeId, {
            "basin:resource_types1": blockTypes.resource_types1,
            "basin:resource_types2": blockTypes.resource_types2
        }));
    });
}
;
export const retrieve_block_from_basin = {
    onPlayerInteract({ block, player }) {
        // Player takes Block from the Basin
        const resourceType1 = block.permutation.getState("basin:resource_types1");
        const resourceType2 = block.permutation.getState("basin:resource_types2");
        if (resourceType1 === "empty" && resourceType2 === "empty")
            return;
        if (!resourceType1 || typeof resourceType1 !== 'string')
            return;
        player?.addItem(new ItemStack(resourceType1, 1));
        block.setPermutation(BlockPermutation.resolve(block.typeId, {
            "basin:resource_types1": "empty",
            "basin:resource_types2": "empty"
        }));
        // Entity data reset
        const entities = block.dimension.getEntitiesAtBlockLocation(block.location);
        for (const entity of entities) {
            if (entity.typeId === "foundry:basin") {
                entity.setProperty("basin:material_type", 0);
            }
        }
    }
};
