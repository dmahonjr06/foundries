import { Block, BlockPermutation, BlockStates, Player, system, Vector3 } from "@minecraft/server";
import { BlockStateSuperset } from "@minecraft/vanilla-data";

const foundryStructure = [
                                  {x: -1, y: 0, z: -3},  {x:0, y: 0, z:-3},
            {x: -2, y: 0, z: -2}, {x: -1, y: -1,z: -2},  {x:0, y:-1, z:-2}, {x:1,y:0,z:-2},
            {x: -2, y: 0, z: -1}, {x: -1, y: -1,z: -1},  {x:0, y:-1, z:-1}, {x:1,y:0,z:-1},
                                  {x: -1, y: 0, z: 0}
]
function foundryLayoutCheck(direction: string) {
    return foundryStructure.map(pos => {
        switch (direction) {
            case "west": return { x: pos.z, y: pos.y, z: -pos.x };
            case "south": return { x: -pos.x, y: pos.y, z: -pos.z };
            case "east": return { x: -pos.z, y: pos.y, z: pos.x };
            default: return pos;
        }
    });
}

export class FoundryStructureValidation {
    static isValidFoundryStructure(controllerBlock: Block, player: Player | undefined, foundryBrickTypeID: string): boolean {
        const controllerFacingDirection = controllerBlock.permutation.getState("minecraft:cardinal_direction") as string;
        // const controllerValidationState = controllerBlock.permutation.getState("foundries:valid_foundry" as keyof BlockStateSuperset) as boolean;
        const foundryRotations = foundryLayoutCheck(controllerFacingDirection);

        for (const check of foundryRotations)
        {
            const blockPosition = {x: check.x, y: check.y, z: check.z};
            const block = controllerBlock.offset(blockPosition)

            if (block?.typeId !== foundryBrickTypeID)
            {
                // Updates the block state "foundries:valid_foundry" to false if there is no match
                controllerBlock.setPermutation(
                    BlockPermutation.resolve(
                        controllerBlock.typeId, {"minecraft:cardinal_direction": controllerFacingDirection, "foundries:valid_foundry": false}
                    )
                )
                player?.onScreenDisplay.setActionBar(`                          Foundry Invalid...\nMissing Deepslate Brick at ${block?.location.x}, ${block?.location.y}, ${block?.location.z}. Found: ${block?.typeId}`)
                return false;
            }
        }
        
        controllerBlock.setPermutation(
            BlockPermutation.resolve(
                controllerBlock.typeId, {"minecraft:cardinal_direction": controllerFacingDirection, "foundries:valid_foundry": true}
            )
        )
        player?.onScreenDisplay.setActionBar("FOUNDRY IS RUNNING")
        return true;
        
    }
}
