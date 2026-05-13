import { Block, BlockCustomComponent, Dimension } from "@minecraft/server";
import { faucet_validation } from "../definitions/typedef";

export const faucet_interaction: BlockCustomComponent = {
    onPlayerInteract({block , dimension})
    {
        if(!faucetValidation(block, dimension)) return;
        console.log("Interaction Successful");
        
        
        const blockBelow = block.below()?.typeId;
        if (blockBelow === "foundry:casting_table")
        {
            
            // #TODO: Function for spawning casting table handler entity
        }
        
        if (blockBelow === "foundry:basin")
        {
            // #TODO: Function for spawning basin handler entity 
        }
        
    }
}

// Check if:
// there is a "foundry:basin" below the faucet,
// the faucet is the correct cardinal direction,
// the "foundry:foundry" block is in the correct position
function faucetValidation(block:Block, dimension: Dimension): boolean {
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
    const blockBelow = block.below()?.typeId;
    const checkUnderFaucet = blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table";

    if (!checkUnderFaucet) {
        console.error("\nFAUCET VALIDATION FAILED: No basin or casting table detected");
        return false;
    }
    console.log(blockBelow);
    

    // Handles the checks for each cardinal direction the Faucet can be placed.
    const checks: Record<string, { block: boolean | undefined, direction: boolean | undefined, result: faucet_validation }> = {
        "north": { block: block.south()?.typeId === "foundry:foundry" && block.south()?.permutation.getState("minecraft:multi_block_part")=== 0, direction: ( block.south()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.south()?.permutation.getState("minecraft:cardinal_direction") === "west" ), result: { north: false, south: true,  east: false, west: false, basinUnderneath: true } },
        "south": { block: block.north()?.typeId === "foundry:foundry" && block.north()?.permutation.getState("minecraft:multi_block_part")=== 0, direction: ( block.north()?.permutation.getState("minecraft:cardinal_direction") === "east" || block.north()?.permutation.getState("minecraft:cardinal_direction") === "west" ), result: { north: true,  south: false, east: false, west: false, basinUnderneath: true } },
        "west":  { block: block.east()?.typeId === "foundry:foundry"  && block.east()?.permutation.getState("minecraft:multi_block_part") === 0, direction: ( block.east()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.east()?.permutation.getState("minecraft:cardinal_direction") === "south" ), result: { north: false, south: false, east: true,  west: false, basinUnderneath: true } },
        "east":  { block: block.west()?.typeId === "foundry:foundry"  && block.west()?.permutation.getState("minecraft:multi_block_part") === 0, direction: ( block.west()?.permutation.getState("minecraft:cardinal_direction") === "north" || block.west()?.permutation.getState("minecraft:cardinal_direction") === "south" ), result: { north: false, south: false, east: false, west: true,  basinUnderneath: true } },
    };

    const check = checks[cardinal_direction as string]
    if (check?.block && check?.direction) {
        // Debugging directions
        //console.log(`Faucet Validation ${cardinal_direction}, SUCCESSFUL`);
        return true
    }
    if (!check?.block && !check?.direction){
        console.error("\nFAUCET VALIDATION FAILED: There is no Foundry placed");
        return false;
    };
    if (blockBelow === "foundry:basin" || blockBelow === "foundry:casting_table")
    {
        console.error("\nFAUCET VALIDATION FAILED: Faucet is placed on the wrong side");
        return false;
    }

    // If no checks are valid
    return false;
}