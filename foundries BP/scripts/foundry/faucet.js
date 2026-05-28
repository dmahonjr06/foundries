import { system } from "@minecraft/server";
import { turn_basin_liquid_to_solid } from "./basin";
let isPouring = false;
export const faucet_interaction = {
    onPlayerInteract({ block, dimension }) {
        if (!faucetValidation(block))
            return;
        console.log("Interaction Successful");
        const blockBelow = block.below()?.typeId;
        if (blockBelow === "foundry:casting_table") {
            // #TODO: Function for spawning casting table handler entity
        }
        if (blockBelow === "foundry:basin") {
            faucetPourIntoBasin(block, dimension);
        }
    }
};
function faucetValidation(block) {
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
    const blockBelow = block.below()?.typeId;
    const checkUnderFaucet = blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table";
    if (!checkUnderFaucet) {
        console.error("\nFAUCET VALIDATION FAILED: No basin or casting table detected");
        return false;
    }
    const checks = {
        "north": { block: block.south()?.typeId === "foundry:foundry" && block.south()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.south()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.south()?.permutation.getState("minecraft:cardinal_direction") === "west"), result: { north: false, south: true, east: false, west: false, basinUnderneath: true } },
        "south": { block: block.north()?.typeId === "foundry:foundry" && block.north()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.north()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.north()?.permutation.getState("minecraft:cardinal_direction") === "west"), result: { north: true, south: false, east: false, west: false, basinUnderneath: true } },
        "west": { block: block.east()?.typeId === "foundry:foundry" && block.east()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.east()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.east()?.permutation.getState("minecraft:cardinal_direction") === "south"), result: { north: false, south: false, east: true, west: false, basinUnderneath: true } },
        "east": { block: block.west()?.typeId === "foundry:foundry" && block.west()?.permutation.getState("minecraft:multi_block_part") === 0, direction: (block.west()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.west()?.permutation.getState("minecraft:cardinal_direction") === "south"), result: { north: false, south: false, east: false, west: true, basinUnderneath: true } },
    };
    const check = checks[cardinal_direction];
    if (check?.block && check?.direction) {
        return true;
    }
    if (!check?.block && !check?.direction) {
        console.error("\nFAUCET VALIDATION FAILED: There is no Foundry placed");
        return false;
    }
    if (blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table") {
        console.error("\nFAUCET VALIDATION FAILED: Faucet is placed on the wrong side");
        return false;
    }
    return false;
}
function pourNextLayer(foundryLiquidEntities, basinLiquidEntities, basinCurrentFill, incomingMaterial, layersRemaining, basinBlock) {
    if (layersRemaining <= 0 || basinCurrentFill >= 9) {
        isPouring = false;
        console.log("Pouring complete");
        return;
    }
    let pouredThisTick = false;
    // Pour one layer from the foundry
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        if (pouredThisTick)
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            const layerMaterial = entity.getProperty(`foundry:layer${i}_material`);
            if (layerMaterial !== incomingMaterial)
                break;
            entity.setProperty(`foundry:layer${i}`, false);
            entity.setProperty(`foundry:layer${i}_material`, 0);
            pouredThisTick = true;
            break;
        }
    });
    // If nothing was poured (foundry ran dry mid-pour), stop
    if (!pouredThisTick) {
        isPouring = false;
        console.log("Pouring stopped - foundry ran dry");
        return;
    }
    // Update basin entity
    basinLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:basin")
            return;
        const newFill = basinCurrentFill + 1;
        entity.setProperty("basin:layer", newFill);
        entity.setProperty("basin:material_type", incomingMaterial);
        console.log(`Poured 1 layer, basin now at ${newFill}`);
        if (newFill >= 9) {
            turn_basin_liquid_to_solid(basinBlock, entity);
            isPouring = false;
        }
    });
    // Only schedule next layer if still pouring
    if (!isPouring)
        return;
    // Schedule next layer after 10 ticks (0.5 seconds)
    system.runTimeout(() => {
        pourNextLayer(foundryLiquidEntities, basinLiquidEntities, basinCurrentFill + 1, incomingMaterial, layersRemaining - 1, basinBlock);
    }, 10);
}
function faucetPourIntoBasin(block, dimension) {
    if (isPouring) {
        console.log("Pour blocked - already pouring");
        return;
    }
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
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
        const basinEntity = block.dimension.getEntitiesAtBlockLocation(block.location);
        basinEntity.forEach(entity => {
            turn_basin_liquid_to_solid(basinBlock, entity);
        });
        return;
    }
    // Stop if foundry is empty
    if (incomingMaterial === 0) {
        console.log("Pour blocked - foundry is empty");
        return;
    }
    // Count how many contiguous layers of the same material are available
    let availableLayers = 0;
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            const layerMaterial = entity.getProperty(`foundry:layer${i}_material`);
            if (layerMaterial !== incomingMaterial)
                break;
            availableLayers++;
        }
    });
    const layersToPour = Math.min(availableLayers, 9 - basinCurrentFill);
    if (layersToPour <= 0)
        return;
    isPouring = true;
    console.log(`Pouring ${layersToPour} layers of material ${incomingMaterial}`);
    pourNextLayer(foundryLiquidEntities, basinLiquidEntities, basinCurrentFill, incomingMaterial, layersToPour, basinBlock);
}
