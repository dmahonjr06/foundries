import { Block, EquipmentSlot, Player } from "@minecraft/server";
import { foundryEntry } from "../definitions/typedef";
import { layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10, layer11, layer12, layer13, layer14, layer15, layer16 } from "../definitions/consts";

export const playerInputItemsIntoFoundry = new Map<string, foundryEntry>([
    // Layer 1 Items
    ["minecraft:iron_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: false,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 19
        },
    ],
    // Layer 2 Items
    ["minecraft:iron_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: false,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 19
        },
    ],
    // Layer 3 Items
    ["minecraft:iron_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: false,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 19
        },
    ],
    // Layer 4 Items
    ["minecraft:iron_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: false,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 19
        },
    ],
    // Layer 5 Items
    ["minecraft:iron_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: false,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 19
        },
    ],
    // Layer 6 Items
    ["minecraft:iron_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: false,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 19
        },
    ],
    // Layer 7 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 19
        },
    ],
    // Layer 8 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 19
        },
    ],
    // Layer 9 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 19
        },
    ],
    // Layer 10 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 19
        },
    ],
    // Layer 11 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 19
        },
    ],
    // Layer 12 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 19
        },
    ],
    // Layer 13 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 19
        },
    ],
    // Layer 14 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 19
        },
    ],
    // Layer 15 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 19
        },
    ],
    // Layer 16 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true,  layer2: true,  layer3: true,  layer4: true,  layer5: true,  layer6: true,  layer7: true,  layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 19
        }
    ]
])


// Don't need to touch ever again. This handles putting items into the foundry ONLY
// Only need to touch if needs optimisation or more readability
export function FoundryCheckItemsPlayerInterractsWith(block: Block, player: Player): foundryEntry | undefined {
    const itemID = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId
    const FoundryTopBlock = block.above(1);
    if (!FoundryTopBlock) return;
    
    const foundryLiquidEntity = block.dimension.getEntitiesAtBlockLocation(FoundryTopBlock.location)
    for (const foundryEntity of foundryLiquidEntity) {
        // Stop if the foundry is already full
        if (foundryEntity.getProperty("foundry:layer16") === true) return;


        const fetchLayers = Array.from({ length: 16 }, (_, index) => foundryEntity.getProperty(`foundry:layer${index + 1}`))
        const foundryEntityProperties = playerInputItemsIntoFoundry.get(`${itemID}|${fetchLayers.join("|")}`)
        // Stop if it's not a registered `playerInputItemsIntoFoundry` input
        if (!foundryEntityProperties) continue;

        const layers = [layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10, layer11, layer12, layer13, layer14, layer15, layer16]
        for (let index = 0; index < layers.length; index++) {
            const layerKey = `layer${index + 1}` as keyof foundryEntry
            foundryEntity.setProperty(layers[index], foundryEntityProperties[layerKey] as boolean)
        }
        foundryEntity.setProperty(foundryEntityProperties.materialProperty, foundryEntityProperties.materialPropertyNumber)
        const equippable = player.getComponent("equippable");
        if (equippable) {
            const slot = equippable.getEquipmentSlot(EquipmentSlot.Mainhand);
            if (slot && slot.amount > 1) {
                slot.amount -= 1;
            }
            if (slot && slot.amount === 1 )
            {
                equippable.setEquipment(EquipmentSlot.Mainhand, undefined)
            }
        }
        return foundryEntityProperties
    }
    return undefined
}