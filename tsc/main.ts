import { system, world } from "@minecraft/server";

world.afterEvents.playerPlaceBlock.subscribe(({block}) => {
    const blockDirection = block.permutation.getAllStates()["minecraft:cardinal_direction"];
    console.log("Cardinal Direction: ",blockDirection);
});