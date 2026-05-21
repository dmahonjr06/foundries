export const faucet_interaction = {
    onPlayerInteract({ block, dimension }) {
        if (!faucetValidation(block))
            return;
        console.log("Interaction Successful");
        const direction = block.permutation.getState("minecraft:cardinal_direction");
        const blockBelow = block.below()?.typeId;
        if (blockBelow === "foundry:casting_table") {
            // #TODO: Function for spawning casting table handler entity
        }
        if (blockBelow === "foundry:basin") {
            faucetPourIntoBasin(block, dimension);
        }
    }
};
// Check if:
// there is a "foundry:basin" below the faucet,
// the faucet is the correct cardinal direction,
// the "foundry:foundry" block is in the correct position
function faucetValidation(block) {
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
    const blockBelow = block.below()?.typeId;
    const checkUnderFaucet = blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table";
    if (!checkUnderFaucet) {
        console.error("\nFAUCET VALIDATION FAILED: No basin or casting table detected");
        return false;
    }
    console.log(blockBelow);
    // Handles the checks for each cardinal direction the Faucet can be placed.
    const checks = {
        "north": { block: block.south()?.typeId === "foundry:foundry" && block.south()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.south()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.south()?.permutation.getState("minecraft:cardinal_direction") === "west"), result: { north: false, south: true, east: false, west: false, basinUnderneath: true } },
        "south": { block: block.north()?.typeId === "foundry:foundry" && block.north()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.north()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.north()?.permutation.getState("minecraft:cardinal_direction") === "west"), result: { north: true, south: false, east: false, west: false, basinUnderneath: true } },
        "west": { block: block.east()?.typeId === "foundry:foundry" && block.east()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.east()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.east()?.permutation.getState("minecraft:cardinal_direction") === "south"), result: { north: false, south: false, east: true, west: false, basinUnderneath: true } },
        "east": { block: block.west()?.typeId === "foundry:foundry" && block.west()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.west()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.west()?.permutation.getState("minecraft:cardinal_direction") === "south"), result: { north: false, south: false, east: false, west: true, basinUnderneath: true } },
    };
    const check = checks[cardinal_direction];
    if (check?.block && check?.direction) {
        // Debugging directions
        //console.log(`Faucet Validation ${cardinal_direction}, SUCCESSFUL`);
        return true;
    }
    if (!check?.block && !check?.direction) {
        console.error("\nFAUCET VALIDATION FAILED: There is no Foundry placed");
        return false;
    }
    ;
    if (blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table") {
        console.error("\nFAUCET VALIDATION FAILED: Faucet is placed on the wrong side");
        return false;
    }
    // If no checks are valid
    return false;
}
;
function faucetPourIntoBasin(block, dimension) {
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
    let layerCount = 0;
    let pouredMaterial = 0;
    let basinCurrentFill = 0;
    let basinCurrentMaterial = 0;
    const directions = {
        "north": { foundryTopBlock: block.south()?.above() },
        "east": { foundryTopBlock: block.west()?.above() },
        "south": { foundryTopBlock: block.north()?.above() },
        "west": { foundryTopBlock: block.east()?.above() },
    };
    const attachedFoundryData = directions[cardinal_direction];
    if (!attachedFoundryData.foundryTopBlock)
        return;
    const foundryLiquidEntities = dimension.getEntitiesAtBlockLocation(attachedFoundryData.foundryTopBlock.location);
    const basinBlock = block.below();
    if (!basinBlock)
        return;
    const basinLiquidEntities = dimension.getEntitiesAtBlockLocation(basinBlock.location);
    // Read current basin state
    basinLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:basin")
            return;
        basinCurrentFill = entity.getProperty("basin:layer");
        basinCurrentMaterial = entity.getProperty("basin:material_type");
    });
    // Peek at the top filled foundry layer before draining anything
    let incomingMaterial = 0;
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            incomingMaterial = entity.getProperty(`foundry:layer${i}_material`);
            break;
        }
    });
    console.log(`Basin fill: ${basinCurrentFill}, Basin material: ${basinCurrentMaterial}, Incoming: ${incomingMaterial}`);
    // Stop if basin already has a different material
    if (basinCurrentFill > 0 && basinCurrentMaterial !== incomingMaterial) {
        console.log("Pour blocked - different materials");
        return;
    }
    // Stop if basin is already full
    if (basinCurrentFill >= 9) {
        console.log("Pour blocked - basin is full");
        return;
    }
    // TODO: when the basin is full but the incoming material is different, we should solidify the basin contents into a block and then start filling again with the new material, instead of just blocking the pour.
    // Potentially also a hopper could be used to automate the removal of the solidified block from the basin to allow continuous pouring of different materials?
    // Drain the foundry
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            const layerMaterial = entity.getProperty(`foundry:layer${i}_material`);
            if (layerCount > 0 && layerMaterial !== pouredMaterial)
                break;
            entity.setProperty(`foundry:layer${i}`, false);
            entity.setProperty(`foundry:layer${i}_material`, 0);
            pouredMaterial = layerMaterial;
            layerCount++;
        }
    });
    // Fill the basin
    if (layerCount > 0) {
        basinLiquidEntities.forEach(entity => {
            if (entity.typeId !== "foundry:basin")
                return;
            entity.setProperty("basin:layer", basinCurrentFill + layerCount);
            entity.setProperty("basin:material_type", pouredMaterial);
            console.log(`Basin filled to ${basinCurrentFill + layerCount} with material ${pouredMaterial}`);
        });
    }
}
;
// TODO: 
const mapBasinLiquidToSolidBlockType = new Map([
    [1, { state: "minecraft:lava" }],
    [2, { state: "minecraft:water" }],
]);
