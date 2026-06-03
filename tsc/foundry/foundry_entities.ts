import { Direction } from "@minecraft/server";

// Summons the entity that controls what is shown within the top half of the foundry multi-block
export const spawn_foundry_block_entities: import("@minecraft/server").BlockCustomComponent = {
    onPlace({block, dimension}){
        const entitySummonLocation = {
            x: block?.x + 0.5 as number,
            y: block?.y as number,
            z: block?.z + 0.5 as number
        };
        
    // Spawns the Foundry Liquid entity
    {
        if (block.permutation.getState("minecraft:multi_block_part") === 1)
        {
            dimension.spawnEntity("foundry:foundry_liquids", entitySummonLocation)
        };
    };
    // Spawns the Basin entity
    if (block.typeId === "foundry:basin")
    {
        console.log("test1");
        
        dimension.spawnEntity("foundry:basin", entitySummonLocation)
    }
    
    if (block.typeId === "foundry:casting_table")
    {
        console.log("test");
        
        dimension.spawnEntity("foundry:casting_table", entitySummonLocation)
    }
    return; 
    }
}
