import { BlockPermutation, EquipmentSlot, ItemStack, system } from "@minecraft/server";
import { molds } from "../databases/mold_list";
import { castingTableDatabase } from "../databases/casting_table_database";
import { getIsPouring, setIsPouring } from "../definitions/consts";
export const inputMold = {
    onPlayerInteract({ block, player, face }) {
        if (face !== "Up")
            return;
        const equippable = player?.getComponent("equippable");
        const mainhand = equippable?.getEquipment(EquipmentSlot.Mainhand);
        const mainhandId = mainhand?.typeId;
        const currentPart = block.permutation.getState("foundry:part");
        const currentMaterial1 = block.permutation.getState("foundry:material_type1");
        const currentMaterial2 = block.permutation.getState("foundry:material_type2");
        const cardinalDirection = block.permutation.getState("minecraft:cardinal_direction") ?? "north";
        const hasCast = currentMaterial1 !== 0 || currentMaterial2 !== 0;
        // ── Retrieve cast item ───────────────────────────────────────────────
        if (hasCast) {
            if (mainhandId !== undefined && mainhandId !== "")
                return; // must be empty hand
            const materialNumber = decodeMaterial(currentMaterial1, currentMaterial2);
            const moldKey = currentPart; // e.g. "ingot_mold"
            const entry = castingTableDatabase.get(moldKey);
            const outputItem = entry?.outputs.get(materialNumber);
            if (outputItem) {
                player?.addItem(new ItemStack(outputItem, 1));
            }
            // Reset material states, keep the mold
            block.setPermutation(BlockPermutation.resolve("foundry:casting_table", {
                "foundry:part": currentPart,
                "foundry:material_type1": 0,
                "foundry:material_type2": 0,
                "minecraft:cardinal_direction": cardinalDirection
            }));
            return;
        }
        if (currentPart !== "empty" && (!mainhandId || mainhandId === "")) {
            // Return the mold item to the player
            const moldItemId = `foundry:${currentPart}`;
            player?.addItem(new ItemStack(moldItemId, 1));
            block.setPermutation(BlockPermutation.resolve("foundry:casting_table", {
                "foundry:part": "empty",
                "foundry:material_type1": 0,
                "foundry:material_type2": 0,
                "minecraft:cardinal_direction": cardinalDirection
            }));
            return;
        }
        if (currentPart === "empty") {
            const mold = molds.find(m => m === mainhandId);
            if (!mold)
                return;
            const moldKey = mold.split(":")[1]; // e.g. "ingot_mold"
            block.setPermutation(BlockPermutation.resolve("foundry:casting_table", {
                "foundry:part": moldKey,
                "foundry:material_type1": 0,
                "foundry:material_type2": 0,
                "minecraft:cardinal_direction": cardinalDirection
            }));
            // Consume one mold from the player's hand
            const slot = equippable?.getEquipmentSlot(EquipmentSlot.Mainhand);
            if (slot && slot.amount > 1) {
                slot.amount -= 1;
            }
            else if (slot && slot.amount === 1) {
                equippable?.setEquipment(EquipmentSlot.Mainhand, undefined);
            }
        }
    }
};
// Encode materialNumber (0–63) into two 0–15 block states
function encodeMaterial(materialNumber) {
    return {
        type1: materialNumber % 16,
        type2: Math.floor(materialNumber / 16)
    };
}
// Decode two 0–15 block states back into a materialNumber
export function decodeMaterial(type1, type2) {
    return type1 + (type2 * 16);
}
// Called by the faucet once pouring is complete
export function solidifyCastingTable(castingTableBlock, materialNumber) {
    const currentPart = castingTableBlock.permutation.getState("foundry:part");
    if (!currentPart || currentPart === "empty")
        return;
    const { type1, type2 } = encodeMaterial(materialNumber);
    const cardinalDirection = castingTableBlock.permutation.getState("minecraft:cardinal_direction") ?? "north";
    system.waitTicks(40).then(() => {
        castingTableBlock.setPermutation(BlockPermutation.resolve("foundry:casting_table", {
            "foundry:part": currentPart,
            "foundry:material_type1": type1,
            "foundry:material_type2": type2,
            "minecraft:cardinal_direction": cardinalDirection
        }));
        // Reset the entity fill state
        castingTableBlock.dimension
            .getEntitiesAtBlockLocation(castingTableBlock.location)
            .forEach(entity => {
            if (entity.typeId !== "foundry:casting_table")
                return;
            entity.setProperty("casting_table:pour_state", 0);
            entity.setProperty("casting_table:material_type", 0);
        });
    });
}
export function castingTablePourNextLayer(foundryLiquidEntities, castingTableEntity, castingTableBlock, currentFill, incomingMaterial, layersRemaining) {
    if (layersRemaining <= 0) {
        setIsPouring(false);
        console.log("Casting table pour complete");
        solidifyCastingTable(castingTableBlock, incomingMaterial);
        return;
    }
    let pouredThisTick = false;
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        if (pouredThisTick)
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            const layerMaterial = entity.getProperty(`foundry:layer${i}_material`);
            if (layerMaterial !== incomingMaterial)
                break;
            entity.setProperty(`foundry:layer${i}`, false);
            entity.setProperty(`foundry:layer${i}_material`, 0);
            pouredThisTick = true;
            break;
        }
    });
    if (!pouredThisTick) {
        setIsPouring(false);
        console.log("Casting table pour stopped - foundry ran dry");
        return;
    }
    const newFill = currentFill + 1;
    castingTableEntity.setProperty("casting_table:pour_state", newFill);
    castingTableEntity.setProperty("casting_table:material_type", incomingMaterial);
    console.log(`Casting table fill: ${newFill}`);
    system.runTimeout(() => {
        castingTablePourNextLayer(foundryLiquidEntities, castingTableEntity, castingTableBlock, newFill, incomingMaterial, layersRemaining - 1);
    }, 10);
}
// imported to faucet.ts to handle pouring into the casting table
export function faucetPourIntoCastingTable(block, dimension) {
    setIsPouring(false);
    if (getIsPouring()) {
        console.log("Pour blocked - already pouring");
        return;
    }
    const cardinal_direction = block.permutation.getState("minecraft:cardinal_direction");
    const directions = {
        "north": { foundryTopBlock: block.south()?.above() },
        "east": { foundryTopBlock: block.west()?.above() },
        "south": { foundryTopBlock: block.north()?.above() },
        "west": { foundryTopBlock: block.east()?.above() },
    };
    const attachedFoundryData = directions[cardinal_direction];
    if (!attachedFoundryData?.foundryTopBlock)
        return;
    const foundryLiquidEntities = dimension.getEntitiesAtBlockLocation(attachedFoundryData.foundryTopBlock.location);
    const castingTableBlock = block.below();
    if (!castingTableBlock)
        return;
    // Get the mold type from the block state
    const moldKey = castingTableBlock.permutation.getState("foundry:part");
    if (!moldKey || moldKey === "empty") {
        console.log("Pour blocked - no mold in casting table");
        return;
    }
    // Check if already has a cast result
    const mat1 = castingTableBlock.permutation.getState("foundry:material_type1");
    const mat2 = castingTableBlock.permutation.getState("foundry:material_type2");
    if (mat1 !== 0 || mat2 !== 0) {
        console.log("Pour blocked - casting table already has a cast");
        return;
    }
    const entry = castingTableDatabase.get(moldKey);
    if (!entry) {
        console.log(`Pour blocked - no database entry for mold: ${moldKey}`);
        return;
    }
    // Find the casting table entity
    const castingTableEntities = dimension.getEntitiesAtBlockLocation(castingTableBlock.location);
    let castingTableEntity;
    castingTableEntities.forEach(entity => {
        if (entity.typeId === "foundry:casting_table")
            castingTableEntity = entity;
    });
    if (!castingTableEntity) {
        console.log("Pour blocked - no casting table entity found");
        return;
    }
    // Check current fill on the entity
    const currentFill = castingTableEntity.getProperty("casting_table:pour_state");
    if (currentFill >= entry.layersRequired) {
        console.log("Pour blocked - casting table already full");
        return;
    }
    // Peek at the top foundry layer
    let incomingMaterial = 0;
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            incomingMaterial = entity.getProperty(`foundry:layer${i}_material`);
            break;
        }
    });
    if (incomingMaterial === 0) {
        console.log("Pour blocked - foundry is empty");
        return;
    }
    // Check the mold can produce something with this material
    if (!entry.outputs.has(incomingMaterial)) {
        console.log(`Pour blocked - mold ${moldKey} has no output for material ${incomingMaterial}`);
        return;
    }
    // Count available matching layers
    let availableLayers = 0;
    foundryLiquidEntities.forEach(entity => {
        if (entity.typeId !== "foundry:foundry_liquids")
            return;
        for (let i = 16; i >= 1; i--) {
            if (entity.getProperty(`foundry:layer${i}`) === false)
                continue;
            const layerMaterial = entity.getProperty(`foundry:layer${i}_material`);
            if (layerMaterial !== incomingMaterial)
                break;
            availableLayers++;
        }
    });
    const layersToPour = Math.min(availableLayers, entry.layersRequired - currentFill);
    if (layersToPour <= 0)
        return;
    setIsPouring(true);
    console.log(`Pouring ${layersToPour} layers into casting table (${moldKey})`);
    castingTablePourNextLayer(foundryLiquidEntities, castingTableEntity, castingTableBlock, currentFill, incomingMaterial, layersToPour);
}
