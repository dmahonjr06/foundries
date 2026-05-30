import { Block, EquipmentSlot, ItemStack, Player } from "@minecraft/server";
import { foundryEntry } from "../definitions/typedef";
import { playerInputItemsIntoFoundry, bucketMap } from "../definitions/maps";


export function FoundryCheckItemsPlayerInterractsWith(block: Block, player: Player): foundryEntry | undefined {
    const itemID = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId

    block.dimension.getEntitiesAtBlockLocation(block.location).forEach(foundryEntity => {

        const entry = playerInputItemsIntoFoundry.get(itemID ?? "");
        if (!entry) return;

        const layers = Array.from({ length: 16 }, (_, i) => foundryEntity.getProperty(`foundry:layer${i + 1}`));
        const nextIndex = layers.findIndex(l => !l); // 0-15
        if (nextIndex === -1) return; // full

        // Clamp layersToFill to not don't write past layer16
        const layersToFill = Math.min(entry.layersToFill, 16 - nextIndex);

        for (let i = 0; i < layersToFill; i++) {
            const layerToPlace = nextIndex + 1 + i; // 1-16
            foundryEntity.setProperty(`foundry:layer${layerToPlace}`, true);
            foundryEntity.setProperty(`foundry:layer${layerToPlace}_material`, entry.materialNumber);
        }



        // If the item is a bucket, set the player's main hand to the corresponding bucket
        const equippable = player.getComponent("equippable");
        if (itemID?.includes("bucket")) {
            const bucketEntry = bucketMap.has(itemID) ? itemID : undefined;
            if (!bucketEntry) return;
            
            equippable?.setEquipment(EquipmentSlot.Mainhand, new ItemStack("minecraft:bucket", 1));
            return;
        }
        if (equippable) {
            const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
            if (slot && slot.amount > 1) {
                slot.amount -= 1;
            } else if (slot && slot.amount === 1) {
                equippable.setEquipment(EquipmentSlot.Mainhand, undefined);
            }
        }
    });

    return undefined;
}