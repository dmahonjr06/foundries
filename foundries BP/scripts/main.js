import { system, world } from "@minecraft/server";
import { lava_tank_component } from "./foundry/lava_tank";
import { spawn_foundry_block_entity } from "./foundry/foundry_entities";
import { faucet_interaction } from "./foundry/faucet";
import { adding_items_to_foundry } from "./foundry/liquid_layers";
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("foundry:lava_tank_interact", lava_tank_component);
    blockComponentRegistry.registerCustomComponent("foundry:spawn_foundry_entity", spawn_foundry_block_entity);
    blockComponentRegistry.registerCustomComponent("foundry:player_interact_with_foundry", adding_items_to_foundry);
    blockComponentRegistry.registerCustomComponent("foundry:faucet_pour", faucet_interaction);
});
// State Debugging
world.afterEvents.playerInteractWithBlock.subscribe(({ block, player }) => {
    if (player.isSneaking)
        return;
    const state = block.permutation.getAllStates();
    Object.entries(state).forEach(([state, value]) => {
        console.log(`${state}: ${value}`);
    });
    // block.getTags().forEach(tag => {
    //     console.log("tag", tag)
    // });
    //console.log(`Map color: \nR: ${(block.getMapColor().red * 255).toPrecision(3)},\nGreen: ${(block.getMapColor().green * 255).toPrecision(3)},\nBlue: ${(block.getMapColor().blue * 255).toPrecision(3)},\nAlpha: ${(block.getMapColor().alpha * 255).toPrecision(3)}`)
});
