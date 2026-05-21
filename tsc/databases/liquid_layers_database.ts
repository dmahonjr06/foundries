import { Block, EquipmentSlot, Player } from "@minecraft/server";
import { foundryEntry } from "../definitions/typedef";

const playerInputItemsIntoFoundry: ReadonlyMap<string, { materialNumber: number, layersToFill: number }> = new Map([
    ["minecraft:lava_bucket",      { materialNumber: 1,  layersToFill: 1 }],
    ["minecraft:iron_ingot",       { materialNumber: 2,  layersToFill: 1 }],
    ["minecraft:gold_ingot",       { materialNumber: 3,  layersToFill: 1 }],
    ["minecraft:copper_ingot",     { materialNumber: 4,  layersToFill: 1 }],
    ["minecraft:diamond",          { materialNumber: 5,  layersToFill: 1 }],
    ["minecraft:netherite_ingot",  { materialNumber: 6,  layersToFill: 1 }],
    ["minecraft:obsidian",         { materialNumber: 7,  layersToFill: 1 }],
    ["foundry:aluminium_ingot",    { materialNumber: 8,  layersToFill: 1 }],
    ["foundry:zinc_ingot",         { materialNumber: 9,  layersToFill: 1 }],
    ["foundry:osmium_ingot",       { materialNumber: 10, layersToFill: 1 }],
    ["foundry:titanium_ingot",     { materialNumber: 11, layersToFill: 1 }],
    ["foundry:lead_ingot",         { materialNumber: 12, layersToFill: 1 }],
    ["foundry:silver_ingot",       { materialNumber: 13, layersToFill: 1 }],
    ["foundry:brass_ingot",        { materialNumber: 14, layersToFill: 1 }],
    ["foundry:steel_ingot",        { materialNumber: 15, layersToFill: 1 }],
    ["foundry:dragon_steel_ingot", { materialNumber: 16, layersToFill: 1 }],
    ["minecraft:redstone",         { materialNumber: 17, layersToFill: 1 }],
    ["foundry:palladium_ingot",    { materialNumber: 18, layersToFill: 1 }],
    ["foundry:adamantium_ingot",   { materialNumber: 19, layersToFill: 1 }],
    // Raw ores fill 2 layers
    ["minecraft:raw_iron",         { materialNumber: 2,  layersToFill: 2 }],
    ["minecraft:raw_gold",         { materialNumber: 3,  layersToFill: 2 }],
    ["minecraft:raw_copper",       { materialNumber: 4,  layersToFill: 2 }],
]);

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

        const equippable = player.getComponent("equippable");
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