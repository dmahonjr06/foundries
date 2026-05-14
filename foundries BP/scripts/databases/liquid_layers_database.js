import { EquipmentSlot } from "@minecraft/server";
const playerInputItemsIntoFoundry = new Map([
    ["minecraft:lava_bucket", { materialNumber: 1 }],
    ["minecraft:iron_ingot", { materialNumber: 2 }],
    ["minecraft:gold_ingot", { materialNumber: 3 }],
    ["minecraft:copper_ingot", { materialNumber: 4 }],
    ["minecraft:diamond", { materialNumber: 5 }],
    ["minecraft:netherite_ingot", { materialNumber: 6 }],
    ["minecraft:obsidian", { materialNumber: 7 }],
    ["foundry:aluminium_ingot", { materialNumber: 8 }],
    ["foundry:zinc_ingot", { materialNumber: 9 }],
    ["foundry:osmium_ingot", { materialNumber: 10 }],
    ["foundry:titanium_ingot", { materialNumber: 11 }],
    ["foundry:lead_ingot", { materialNumber: 12 }],
    ["foundry:silver_ingot", { materialNumber: 13 }],
    ["foundry:brass_ingot", { materialNumber: 14 }],
    ["foundry:steel_ingot", { materialNumber: 15 }],
    ["foundry:dragon_steel_ingot", { materialNumber: 16 }],
    ["minecraft:redstone", { materialNumber: 17 }],
    ["foundry:palladium_ingot", { materialNumber: 18 }],
    ["foundry:adamantium_ingot", { materialNumber: 19 }],
]);
export function FoundryCheckItemsPlayerInterractsWith(block, player) {
    const itemID = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId;
    block.dimension.getEntitiesAtBlockLocation(block.location).forEach(foundryEntity => {
        const entry = playerInputItemsIntoFoundry.get(itemID ?? "");
        if (!entry)
            return;
        const layers = Array.from({ length: 16 }, (_, i) => foundryEntity.getProperty(`foundry:layer${i + 1}`));
        const nextIndex = layers.findIndex(l => !l); // 0-15
        if (nextIndex === -1)
            return; // full
        const layerToPlace = nextIndex + 1; // 1-16
        const equippable = player.getComponent("equippable");
        if (equippable) {
            const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
            if (slot && slot.amount > 1) {
                slot.amount -= 1;
            }
            if (slot && slot.amount === 1) {
                equippable.setEquipment(EquipmentSlot.Mainhand, undefined);
            }
        }
        foundryEntity.setProperty(`foundry:layer${layerToPlace}`, true);
        foundryEntity.setProperty(`foundry:layer${layerToPlace}_material`, entry.materialNumber);
    });
    return undefined;
}
