import { Block, BlockPermutation } from "@minecraft/server";

type foundryLayerOffset = {x: number, y: number, z: number}
const foundryMaxHeight: number = 10


export interface FoundryLayer {
    offsetHeight: foundryLayerOffset[],
    mandatory: boolean
}

export function foundryLayoutCheck(pos: foundryLayerOffset, direction: string)
{
        switch (direction) {
            case "west": return { x: pos.z, y: pos.y, z: -pos.x };
            case "south": return { x: -pos.x, y: pos.y, z: -pos.z };
            case "east": return { x: -pos.z, y: pos.y, z: pos.x };
            default: return pos;
        }
}

console.log(`X: ${foundryLayoutCheck({x: 0, y: 0, z: 0}, "minecraft:cardinal_direction").x}, test`);

export function foundryStructure(){ 
    const structure = new Map<number, FoundryLayer>([
    [0, {
        mandatory: true,
        offsetHeight: [
                    {x: -1, y: -1,z: -2},  {x:0, y:-1, z:-2},
                    {x: -1, y: -1,z: -1},  {x:0, y:-1, z:-1}
        ]
    }],
    [1, {
        mandatory: true,
        offsetHeight: [

                                  {x: -1, y: 0, z: -3},  {x:0, y: 0, z:-3},
            {x: -2, y: 0, z: -2},                                           {x:1,y:0,z:-2},
            {x: -2, y: 0, z: -1},                                           {x:1,y:0,z:-1},
                                  {x: -1, y: 0, z: 0}
        ]
    }]
]);

    // Dynamic addition of all layers past layer 1 to "structure" as they will be all the same.
    for (let layer = 2; layer < foundryMaxHeight; layer++) {
        const y: number = layer - 1
        structure.set(layer, {
            mandatory: true,
            offsetHeight: [

                                      {x: -1, y: y, z: -3},  {x: 0, y: y, z:-3},
                {x: -2, y: y, z: -2},                                           {x: 1,y: y, z: -2},
                {x: -2, y: y, z: -1},                                           {x: 1,y: y, z: -1},
                                      {x: -1, y: y, z: 0},   {x: 0, y: y, z: 0}
            ]
        })
    }
    return console.log(structure.size)

}