import { system, world } from "@minecraft/server";
import { lava_tank_component } from "./foundry/lava_tank";
import { spawn_foundry_block_entities } from "./foundry/foundry_entities";
import { faucet_interaction } from "./foundry/faucet";
import { adding_items_to_foundry } from "./foundry/liquid_layers";
import { retrieve_block_from_basin } from "./foundry/basin";
import { inputMold } from "./foundry/casting_table";
system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) => {
    blockComponentRegistry.registerCustomComponent("foundry:lava_tank_interact", lava_tank_component);
    blockComponentRegistry.registerCustomComponent("foundry:spawn_foundry_block_entities", spawn_foundry_block_entities);
    blockComponentRegistry.registerCustomComponent("foundry:player_interact_with_foundry", adding_items_to_foundry);
    blockComponentRegistry.registerCustomComponent("foundry:faucet_pour", faucet_interaction),
        blockComponentRegistry.registerCustomComponent("foundry:retrieve_block_from_basin", retrieve_block_from_basin);
    blockComponentRegistry.registerCustomComponent("foundry:input_mold_interact", inputMold);
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
