import { system, world } from "@minecraft/server";
import { FoundryStructureValidation } from "./foundry_structure";

system.beforeEvents.startup.subscribe(({blockComponentRegistry}) => {
    blockComponentRegistry.registerCustomComponent(
        "foundry:structure_controller_validation",
        foundryStructureValidation
    )
})

export const foundryStructureValidation: import("@minecraft/server").BlockCustomComponent = {
    onPlayerInteract({ block, player}){
        FoundryStructureValidation.isValidFoundryStructure(block, player, "minecraft:deepslate_bricks");
    }    
}

world.afterEvents.playerPlaceBlock.subscribe(({block}) => {
    const blockDirection = block.permutation.getAllStates()["minecraft:cardinal_direction"];
    console.log("Cardinal Direction: ",blockDirection);
});