import { Block, BlockPermutation, Vector3 } from "@minecraft/server";

export type foundryLayerOffset = Vector3

export type FoundryVariant = "left" | "right";

export interface FoundryLayer {
    offsetHeight: foundryLayerOffset[],
    mandatory: boolean
}

export interface LavaTankConfig {
    lavaTankOffset: Vector3;
    lavaTankBlockId: string;
}

export const foundryLavaTankConfigs: Record<FoundryVariant, LavaTankConfig> = {
    right: { lavaTankOffset: { x: -1, y: 0, z: 0 }, lavaTankBlockId: "foundry:lava_tank" },
    left:  { lavaTankOffset: { x: 1, y: 0, z: 0 }, lavaTankBlockId: "foundry:lava_tank" },
};

export const foundryMaxHeight = 10;
export function getFoundryLayer(layer: number, variant: FoundryVariant): FoundryLayer {
    const LayerY: number = layer - 1;
    if (layer === 0 && variant === "right")
    {
        return {
            mandatory: true,
            offsetHeight: [
                        {x: -1, y: -1,z: -2},  {x: 0, y: -1, z:-2},
                        {x: -1, y: -1,z: -1},  {x: 0, y: -1, z:-1}
            ]
        };
    };
    if (layer === 0 && variant === "left")
    {
        return {
            mandatory: true,
            offsetHeight: [
                        {x: 0, y: LayerY,z: -2},  {x: 1, y:LayerY, z:-2},
                        {x: 0, y: LayerY,z: -1},  {x: 1, y:LayerY, z:-1}
            ]
        };
    }
    if (variant === "right")
    {
        // Fix for checks for the lava tank
        if (layer === 1) {
            return {
                mandatory: false,
                offsetHeight: [
                                            {x:-1, y: LayerY, z:-3}, {x:0, y:LayerY, z:-3},
                    {x:-2, y: LayerY, z:-2},                                               {x:1, y: LayerY, z:-2},
                    {x:-2, y: LayerY, z:-1},                                               {x:1, y: LayerY, z:-1}
                ]
            };
        }

        
        return {
            mandatory: false,
            offsetHeight: [
                                        {x:-1, y: LayerY, z:-3}, {x:0, y: LayerY, z:-3},  
                {x:-2, y: LayerY, z:-2},                                                {x:1, y: LayerY, z:-2},
                {x:-2, y: LayerY, z:-1},                                                {x:1, y: LayerY, z:-1},
                                        {x:-1, y: LayerY, z: 0}, {x:0, y: LayerY, z: 0},
            ]
        };
    };

    if (variant === "left") {
        if (layer === 1) {
            return {
                mandatory: false,
                offsetHeight: [
                                  {x:0, y:LayerY, z:-3}, {x:1, y:LayerY, z:-3},
                    {x:-1, y:LayerY, z:-2},                                     {x:2, y:LayerY, z:-2},
                    {x:-1, y:LayerY, z:-1},                                     {x:2, y:LayerY, z:-1},
                ]
            };
        }
        return {
            mandatory: false,
            offsetHeight: [
                                        {x:0, y:LayerY, z:-3}, {x:1, y:LayerY, z:-3},
                {x:-1, y:LayerY, z:-2},                                               {x:2, y:LayerY, z:-2},
                {x:-1, y:LayerY, z:-1},                                               {x:2, y:LayerY, z:-1},
                                        {x:0, y:LayerY, z: 0}, {x:1, y:LayerY, z: 0},
            ]
        };
    }

    return {
        mandatory: false,
        offsetHeight: [

                                      {x: 0, y: LayerY, z: -3},  {x: 1, y: LayerY, z:-3},
            {x: -1, y: LayerY, z: -2},                                               {x:2,y: LayerY,z:-2},
            {x: -1, y: LayerY, z: -1},                                               {x:2,y: LayerY,z:-1},
                                      {x: 0, y: LayerY, z: 0}, {x: 1, y: LayerY, z: 0}
        ]
    }

}
export const foundryVariants: FoundryVariant[] = ["left", "right"];