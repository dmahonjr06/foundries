import { system, world } from "@minecraft/server";
import { lava_tank_component, player_interact_with_foundry } from "./foundry/lava_tank";
import { spawn_foundry_block_entity } from "./foundry/spawn_foundry_entities";
import { direction } from "./foundry/properties";
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("foundry:lava_tank_interact", lava_tank_component);
    blockComponentRegistry.registerCustomComponent("foundry:spawn_foundry_entity", spawn_foundry_block_entity);
    blockComponentRegistry.registerCustomComponent("foundry:player_interact_with_foundry", player_interact_with_foundry);
    blockComponentRegistry.registerCustomComponent("foundry:set_direction_property", direction);
});
// State Debugging
world.afterEvents.playerInteractWithBlock.subscribe(({ block }) => {
    const state = block.permutation.getAllStates();
    Object.entries(state).forEach(([state, value]) => {
        console.log(`${state}: ${value}`);
    });
    const entities = block.dimension.getEntitiesAtBlockLocation(block.location);
    entities.forEach(entity => {
        console.log(`\nPROPERTIES: \nfoundry:direction - ${entity.getProperty("foundry:direction")}`);
    });
    // block.getTags().forEach(tag => {
    //     console.log("tag", tag)
    // });
    //console.log(`Map color: \nR: ${(block.getMapColor().red * 255).toPrecision(3)},\nGreen: ${(block.getMapColor().green * 255).toPrecision(3)},\nBlue: ${(block.getMapColor().blue * 255).toPrecision(3)},\nAlpha: ${(block.getMapColor().alpha * 255).toPrecision(3)}`)
});
