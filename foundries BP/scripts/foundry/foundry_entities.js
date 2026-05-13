// Summons the entity that controls what is shown within the top half of the foundry multi-block
export const spawn_foundry_block_entity = {
    onPlace({ block, dimension }) {
        const entitySummonLocation = {
            x: block?.x + 0.5,
            y: block?.y,
            z: block?.z + 0.5
        };
        // Spawns the foundry liquid entity
        {
            if (block.permutation.getState("minecraft:multi_block_part") === 1) {
                dimension.spawnEntity("foundry:foundry_liquids", entitySummonLocation);
            }
            ;
        }
        ;
        return;
    }
};
