export const foundryLavaTankConfigs = {
    right: { lavaTankOffset: { x: -1, y: 0, z: 0 }, lavaTankBlockId: "foundry:lava_tank" },
    left: { lavaTankOffset: { x: 1, y: 0, z: 0 }, lavaTankBlockId: "foundry:lava_tank" },
};
export const foundryMaxHeight = 10;
export function getFoundryLayer(layer, variant) {
    const LayerY = layer - 1;
    if (layer === 0 && variant === "right") {
        return {
            mandatory: true,
            offsetHeight: [
                { x: -1, y: -1, z: -2 }, { x: 0, y: -1, z: -2 },
                { x: -1, y: -1, z: -1 }, { x: 0, y: -1, z: -1 }
            ]
        };
    }
    ;
    if (layer === 0 && variant === "left") {
        return {
            mandatory: true,
            offsetHeight: [
                { x: 0, y: LayerY, z: -2 }, { x: 1, y: LayerY, z: -2 },
                { x: 0, y: LayerY, z: -1 }, { x: 1, y: LayerY, z: -1 }
            ]
        };
    }
    if (variant === "right") {
        // Fix for checks for the lava tank
        if (layer === 1) {
            return {
                mandatory: false,
                offsetHeight: [
                    { x: -1, y: LayerY, z: -3 }, { x: 0, y: LayerY, z: -3 },
                    { x: -2, y: LayerY, z: -2 }, { x: 1, y: LayerY, z: -2 },
                    { x: -2, y: LayerY, z: -1 }, { x: 1, y: LayerY, z: -1 }
                ]
            };
        }
        return {
            mandatory: false,
            offsetHeight: [
                { x: -1, y: LayerY, z: -3 }, { x: 0, y: LayerY, z: -3 },
                { x: -2, y: LayerY, z: -2 }, { x: 1, y: LayerY, z: -2 },
                { x: -2, y: LayerY, z: -1 }, { x: 1, y: LayerY, z: -1 },
                { x: -1, y: LayerY, z: 0 }, { x: 0, y: LayerY, z: 0 },
            ]
        };
    }
    ;
    if (variant === "left") {
        if (layer === 1) {
            return {
                mandatory: false,
                offsetHeight: [
                    { x: 0, y: LayerY, z: -3 }, { x: 1, y: LayerY, z: -3 },
                    { x: -1, y: LayerY, z: -2 }, { x: 2, y: LayerY, z: -2 },
                    { x: -1, y: LayerY, z: -1 }, { x: 2, y: LayerY, z: -1 },
                ]
            };
        }
        return {
            mandatory: false,
            offsetHeight: [
                { x: 0, y: LayerY, z: -3 }, { x: 1, y: LayerY, z: -3 },
                { x: -1, y: LayerY, z: -2 }, { x: 2, y: LayerY, z: -2 },
                { x: -1, y: LayerY, z: -1 }, { x: 2, y: LayerY, z: -1 },
                { x: 0, y: LayerY, z: 0 }, { x: 1, y: LayerY, z: 0 },
            ]
        };
    }
    return {
        mandatory: false,
        offsetHeight: [
            { x: 0, y: LayerY, z: -3 }, { x: 1, y: LayerY, z: -3 },
            { x: -1, y: LayerY, z: -2 }, { x: 2, y: LayerY, z: -2 },
            { x: -1, y: LayerY, z: -1 }, { x: 2, y: LayerY, z: -1 },
            { x: 0, y: LayerY, z: 0 }, { x: 1, y: LayerY, z: 0 }
        ]
    };
}
export const foundryVariants = ["left", "right"];
