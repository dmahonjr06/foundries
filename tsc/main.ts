import { system, world } from "@minecraft/server";
import { FoundryStructureValidation } from "./foundry_structure";
import { foundryStructure } from "./foundry_statics";

system.beforeEvents.startup.subscribe(({blockComponentRegistry}) => {
    blockComponentRegistry.registerCustomComponent(
        "foundry:structure_controller_validation",
        foundryStructureValidation
    )
})

const foundryStructureValidation: import("@minecraft/server").BlockCustomComponent = {
    onPlayerInteract({ block, player}){
        FoundryStructureValidation.isValidFoundryStructure(block, player, "minecraft:deepslate_bricks");
    }    
}

world.afterEvents.playerPlaceBlock.subscribe(({block}) => {
    const blockDirection = block.permutation.getAllStates()["minecraft:cardinal_direction"];
    console.log("Cardinal Direction: ",blockDirection);
});
foundryStructure()