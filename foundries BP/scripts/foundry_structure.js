import { foundryMaxHeight, getFoundryLayer, foundryVariants, foundryLavaTankConfigs } from './foundry_statics';
export function transformFoundryOffsetByDirection(pos, direction) {
    switch (direction) {
        case "west": return { x: pos.z, y: pos.y, z: -pos.x };
        case "south": return { x: -pos.x, y: pos.y, z: -pos.z };
        case "east": return { x: -pos.z, y: pos.y, z: pos.x };
        default: return pos;
    }
}
// Left or right variant of the foundry structure, which checks for the different block offsets based on the controller's cardinal direction and the variant of the structure being checked.
function tryVariant(controllerBlock, direction, foundryBrickTypeID, variant) {
    let validLayers = 0;
    const { lavaTankOffset, lavaTankBlockId } = foundryLavaTankConfigs[variant];
    // Validate lava tank exists before checking any layers
    const rotatedTankOffset = transformFoundryOffsetByDirection(lavaTankOffset, direction);
    const tankBlock = controllerBlock.offset(rotatedTankOffset);
    if (tankBlock?.typeId !== lavaTankBlockId) {
        return {
            valid: false,
            validLayers: 0,
            firstMissingPosition: tankBlock?.location,
        };
    }
    for (let i = 0; i < foundryMaxHeight; i++) {
        const layer = getFoundryLayer(i, variant);
        const rotated = layer.offsetHeight.map(pos => transformFoundryOffsetByDirection(pos, direction));
        const presentCount = rotated.filter(o => controllerBlock.offset(o)?.typeId === foundryBrickTypeID).length;
        // Debug logging for each layer and variant
        {
            console.log(`Tank block at offset: ${tankBlock?.typeId ?? "undefined"}`);
            console.log(`Layer ${i} | variant: ${variant} | mandatory: ${layer.mandatory} | present: ${presentCount}/${rotated.length}`);
            rotated.forEach(o => {
                const b = controllerBlock.offset(o);
                console.log(`  offset ${o.x},${o.y},${o.z} => ${b?.typeId ?? "undefined"}`);
            });
        }
        const missingCount = rotated.length - presentCount;
        if (presentCount === 0 && !layer.mandatory) {
            break; // player hasn't built this high, stop here
        }
        if (missingCount > 0) {
            const firstMissing = rotated.find(o => controllerBlock.offset(o)?.typeId !== foundryBrickTypeID);
            return {
                valid: false,
                validLayers,
                firstMissingPosition: controllerBlock.offset(firstMissing)?.location,
            };
        }
        validLayers++;
    }
    return { valid: true, validLayers };
}
export class FoundryStructureValidation {
    static isValidFoundryStructure(controllerBlock, player, foundryBrickTypeID) {
        const direction = controllerBlock.permutation.getState("minecraft:cardinal_direction");
        let fallbackResult;
        for (const variant of foundryVariants) {
            const result = tryVariant(controllerBlock, direction, foundryBrickTypeID, variant);
            if (result.valid) {
                player?.onScreenDisplay.setActionBar(`FOUNDRY IS RUNNING (${result.validLayers} LAYER${result.validLayers !== 1 ? "S" : ""})`);
                return result.validLayers;
            }
            if (!fallbackResult)
                fallbackResult = result;
        }
        player?.onScreenDisplay.setActionBar(`                         Layer ${fallbackResult?.validLayers}\n` +
            `Missing ${foundryBrickTypeID} at ${fallbackResult?.firstMissingPosition?.x}, ${fallbackResult?.firstMissingPosition?.y}, ${fallbackResult?.firstMissingPosition?.z}`);
        return 0;
    }
}
