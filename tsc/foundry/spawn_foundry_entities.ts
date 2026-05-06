import { Direction } from "@minecraft/server";

// Summons the entity that controls what is shown within the top half of the foundry multi-block
export const spawn_foundry_block_entity: import("@minecraft/server").BlockCustomComponent = {
    onPlace({block, dimension}){
        const direction = block.permutation.getState("minecraft:cardinal_direction") as Direction
        const entitySummonLocation = {
            x: block?.x + 0.5 as number,
            y: block?.y as number,
            z: block?.z + 0.5 as number
        };
        
    // Spawns the foundry liquid entity
    {
        

        if (block.permutation.getState("minecraft:multi_block_part") === 1)
        {
            dimension.spawnEntity("foundry:foundry_liquids", entitySummonLocation)
        };
    };

    // The foundry_properties entity which controls the direction, availability, etc 
    {
        if (block.permutation.getState("minecraft:multi_block_part") === 0)
        {
            dimension.spawnEntity("foundry:foundry_properties", entitySummonLocation, {})
        }
    }
    return;
    }
}
