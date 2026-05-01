import { Direction, system } from "@minecraft/server";

// Assign the directional state of the foundry to the "foundry:properties" entity
export const direction: import("@minecraft/server").BlockCustomComponent = {
    onPlace({block, dimension}){
        if (block.permutation.getState("minecraft:multi_block_part") !== 0) return;
        const blockState = block.permutation.getState("minecraft:cardinal_direction") as string;
        console.log(blockState);
        
    system.run(() => {
        const entities = dimension.getEntitiesAtBlockLocation(block.location)
        entities.forEach(entity => {
            entity.setProperty("foundry:direction", blockState);
        })
    })
    }
} 