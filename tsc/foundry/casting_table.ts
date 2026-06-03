import { BlockPermutation, Direction, EquipmentSlot } from "@minecraft/server"
import {BlockStateSuperset} from "@minecraft/vanilla-data";
import { molds } from "../databases/mold_list";

export const inputMold: import("@minecraft/server").BlockCustomComponent = {
    onPlayerInteract({block, player, face}){
        if (face !== Direction.Up) return;
        const mainhand = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)

        const mold = molds.find(mold => mold === mainhand?.typeId);
        
        if (!mold) return;
        console.log(`${player?.name} interacted with a mold: ${mold}`);

        const cardinalDirection = block.permutation.getState("minecraft:cardinal_direction" as keyof BlockStateSuperset) ?? "north";

        block.setPermutation(
            BlockPermutation.resolve(
                "foundry:casting_table",
                {
                    "foundry:part": mold.split(":")[1],
                    "minecraft:cardinal_direction": cardinalDirection
                }
            )
        )
    
        
    }
}