import { Block, BlockPermutation, Entity, ItemStack, system } from "@minecraft/server";
import { BlockStateSuperset } from "@minecraft/vanilla-data";

// TODO: 
const mapBasinLiquidToSolidBlockType: ReadonlyMap<number, { material_type1: number, material_type2: number, itemToGive: string | undefined }> = new Map([
    [1,  { material_type1: 0,   material_type2: 0,  itemToGive: undefined }], // empty
    [2,  { material_type1: 1,   material_type2: 0,  itemToGive: "minecraft:iron_block" }], // iron
    [3,  { material_type1: 2,   material_type2: 0,  itemToGive: "minecraft:gold_block" }], // gold
    [4,  { material_type1: 3,   material_type2: 0,  itemToGive: "minecraft:copper_block" }], // copper
    [5,  { material_type1: 4,   material_type2: 0,  itemToGive: "minecraft:diamond_block" }], // diamond
    [6,  { material_type1: 5,   material_type2: 0,  itemToGive: "minecraft:netherite_block" }], // netherite
    [7,  { material_type1: 6,   material_type2: 0,  itemToGive: "minecraft:obsidian" }], // obsidian
    [8,  { material_type1: 7,   material_type2: 0,  itemToGive: "foundry:aluminium_block" }], // aluminium
    [9,  { material_type1: 8,   material_type2: 0,  itemToGive: "foundry:zinc_block" }], // zinc
    [10, { material_type1: 9,   material_type2: 0,  itemToGive: "foundry:osmium_block" }], // osmium
    [11, { material_type1: 10,  material_type2: 0,  itemToGive: "foundry:titanium_block" }], // titanium
    [12, { material_type1: 11,  material_type2: 0,  itemToGive: "foundry:lead_block" }], // lead
    [13, { material_type1: 12,  material_type2: 0,  itemToGive: "foundry:silver_block" }], // silver
    [14, { material_type1: 13,  material_type2: 0,  itemToGive: "foundry:brass_block" }], // brass
    [15, { material_type1: 14,  material_type2: 0,  itemToGive: "foundry:steel_block" }], // steel
    [16, { material_type1: 15,  material_type2: 0,  itemToGive: "foundry:dragon_steel_block" }], // dragon steel
    [17, { material_type1: 0,   material_type2: 1,  itemToGive: "minecraft:redstone_block" }], // redstone
    [18, { material_type1: 0,   material_type2: 2,  itemToGive: "foundry:palladium_block" }], // palladium
    [19, { material_type1: 0,   material_type2: 3,  itemToGive: "foundry:adamantium_block" }], // adamantium
]);

export function turn_basin_liquid_to_solid(basinBlock: Block, entity: Entity): void {
    if (entity.typeId !== "foundry:basin") return;
    const materialType = entity.getProperty("basin:material_type") as number;
    const blockTypes = mapBasinLiquidToSolidBlockType.get(materialType);
    if (!blockTypes) return;
    console.log(`BlockTypes: ${blockTypes.material_type1}, ${blockTypes.material_type2}`);
    system.waitTicks(60).finally(() => {
        basinBlock.setPermutation(
            BlockPermutation.resolve(basinBlock.typeId, {
                "basin:material_type1": blockTypes.material_type1,
                "basin:material_type2": blockTypes.material_type2
            })
        );
    });
};


export const retrieve_block_from_basin: import("@minecraft/server").BlockCustomComponent = {
    onPlayerInteract({block, player})
    {
        const entity = block.dimension.getEntitiesAtBlockLocation(block.location).find(e => e.typeId === "foundry:basin");
        if (!entity) return;
        const materialType = entity.getProperty("basin:material_type") as number;
        const blockTypes = mapBasinLiquidToSolidBlockType.get(materialType)
        if (!blockTypes) return;
        if (!blockTypes.itemToGive) return;
        // Player takes Block from Basin
        const resourceType1 = block.permutation.getState("basin:material_type1" as keyof BlockStateSuperset);
        const resourceType2 = block.permutation.getState("basin:material_type2" as keyof BlockStateSuperset);

        if (resourceType1 === "0" && resourceType2 === "0") return;

        // Change to correct item based on block state
        player?.addItem(new ItemStack(blockTypes.itemToGive, 1));
        block.setPermutation(
            BlockPermutation.resolve(block.typeId, {
                "basin:material_type1": 0,
                "basin:material_type2": 0
            })
        );

        // Entity data reset
        block.dimension.getEntitiesAtBlockLocation(block.location).forEach(entity => {
            if (entity.typeId === "foundry:basin") {
                entity.setProperty("basin:layer", 0);
                entity.setProperty("basin:material_type", 0);
            }
        });
    }
}