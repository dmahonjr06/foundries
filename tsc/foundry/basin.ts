import { Block, BlockPermutation, Entity, ItemStack, system } from "@minecraft/server";
import { BlockStateSuperset } from "@minecraft/vanilla-data";
import { mapBasinLiquidToSolidBlockType } from "../databases/basin_input";

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