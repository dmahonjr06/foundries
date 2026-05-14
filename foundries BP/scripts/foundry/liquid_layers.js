import { EquipmentSlot } from "@minecraft/server";
import { FoundryCheckItemsPlayerInterractsWith } from "../databases/liquid_layers_database";
export const adding_items_to_foundry = {
    onPlayerInteract({ block, player }) {
        const bucketInHand = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId === "minecraft:bucket";
        const multiBlockPart = block.permutation.getState("minecraft:multi_block_part");
        if (multiBlockPart !== 1)
            return;
        // TODO: Change the check to only be if the player has a valid item in hand.\
        if (bucketInHand)
            return; // Only works if the player doesn't have a bucket.
        FoundryCheckItemsPlayerInterractsWith(block, player);
        return;
    }
};
