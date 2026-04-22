import { BlockPermutation, EquipmentSlot, ItemStack } from "@minecraft/server";
// Can only put lava in, can't take out yet. (Just for testing)
//  TODO: Make the tank accept a database of bucket types and returns.
export const lava_tank_component = {
    onPlayerInteract({ block, player }) {
        const cardinalDirection = block.permutation.getState("minecraft:cardinal_direction");
        const lava_level = block.permutation.getState("foundry:lava_level");
        const selectedSlot = player?.selectedSlotIndex;
        const playerInventory = player?.getComponent("inventory")?.container;
        const item = player?.getComponent('equippable')?.getEquipment(EquipmentSlot.Mainhand);
        const itemId = item?.typeId;
        const multiBlockPart = block.permutation.getState("minecraft:multi_block_part");
        if (multiBlockPart !== 0)
            return; // Only allow interaction with the bottom block of the multi-block structure.
        // Lava Tank full.
        if (lava_level === 12)
            return player?.onScreenDisplay.setActionBar("Lava Tank is full!");
        let newLavaLevel = lava_level;
        let itemToGive = undefined;
        if (itemId !== "minecraft:lava_bucket")
            return;
        itemToGive = new ItemStack("minecraft:bucket", 1);
        newLavaLevel = lava_level + 1;
        playerInventory?.setItem(selectedSlot, itemToGive);
        block.setPermutation(BlockPermutation.resolve(block.typeId, {
            "minecraft:cardinal_direction": cardinalDirection,
            "foundry:lava_level": newLavaLevel,
            "minecraft:multi_block_part": 0
        }));
        block.above(1)?.setPermutation(BlockPermutation.resolve(block.typeId, {
            "minecraft:cardinal_direction": cardinalDirection,
            "foundry:lava_level": newLavaLevel,
            "minecraft:multi_block_part": 1
        }));
    }
};
export const player_interact_with_foundry = {
    onPlayerInteract({ block, dimension, player }) {
        const bucketInHand = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId === "minecraft:bucket";
        const multiBlockPart = block.permutation.getState("minecraft:multi_block_part");
        if (multiBlockPart !== 0)
            return;
        // TODO: Change the check to only be if the player has a valid item in hand.\
        if (bucketInHand)
            return; // Only works if the player doesn't have a bucket.
        const foundryEntityLocation = block.above(1);
        dimension.getEntitiesAtBlockLocation(foundryEntityLocation).forEach(foundryLayer => {
        });
        return;
    }
};
