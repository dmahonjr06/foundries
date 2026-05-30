import { Block, EquipmentSlot, Player } from "@minecraft/server";
import { foundryEntry } from "../typedef";
import { layer1, layer2, layer3, layer4, layer5, layer6, layer7, layer8, layer9, layer10, layer11, layer12, layer13, layer14, layer15, layer16 } from "../consts";

export const playerInputItemsIntoFoundry = new Map([
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

export function FoundryCheckItemsPlayerInterractsWith(block: Block, player: Player): foundryEntry | undefined {
    const itemID = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId
    const FoundryTopBlock = block.above(1);



    if (FoundryTopBlock) {
        block.dimension.getEntitiesAtBlockLocation(FoundryTopBlock.location).forEach(foundryEntity => {
            const fetchLayer1 = foundryEntity.getProperty("foundry:layer1")
            const fetchLayer2 = foundryEntity.getProperty("foundry:layer2")
            const fetchLayer3 = foundryEntity.getProperty("foundry:layer3")
            const fetchLayer4 = foundryEntity.getProperty("foundry:layer4")
            const fetchLayer5 = foundryEntity.getProperty("foundry:layer5")
            const fetchLayer6 = foundryEntity.getProperty("foundry:layer6")
            const fetchLayer7 = foundryEntity.getProperty("foundry:layer7")
            const fetchLayer8 = foundryEntity.getProperty("foundry:layer8")
            const fetchLayer9 = foundryEntity.getProperty("foundry:layer9")
            const fetchLayer10 = foundryEntity.getProperty("foundry:layer10")
            const fetchLayer11 = foundryEntity.getProperty("foundry:layer11")
            const fetchLayer12 = foundryEntity.getProperty("foundry:layer12")
            const fetchLayer13 = foundryEntity.getProperty("foundry:layer13")
            const fetchLayer14 = foundryEntity.getProperty("foundry:layer14")
            const fetchLayer15 = foundryEntity.getProperty("foundry:layer15")
            const fetchLayer16 = foundryEntity.getProperty("foundry:layer16")
            
            
            
            const foundryEntityProperties = playerInputItemsIntoFoundry.get(`${itemID}|${fetchLayer1}|${fetchLayer2}|${fetchLayer3}|${fetchLayer4}|${fetchLayer5}|${fetchLayer6}|${fetchLayer7}|${fetchLayer8}|${fetchLayer9}|${fetchLayer10}|${fetchLayer11}|${fetchLayer12}|${fetchLayer13}|${fetchLayer14}|${fetchLayer15}|${fetchLayer16}`)
            
            
            if (foundryEntityProperties){
                foundryEntity.setProperty(layer1, foundryEntityProperties.layer1)
                foundryEntity.setProperty(layer2, foundryEntityProperties.layer2)
                foundryEntity.setProperty(layer3, foundryEntityProperties.layer3)
                foundryEntity.setProperty(layer4, foundryEntityProperties.layer4)
                foundryEntity.setProperty(layer5, foundryEntityProperties.layer5)
                foundryEntity.setProperty(layer6, foundryEntityProperties.layer6)
                foundryEntity.setProperty(layer7, foundryEntityProperties.layer7)
                foundryEntity.setProperty(layer8, foundryEntityProperties.layer8)
                foundryEntity.setProperty(layer9, foundryEntityProperties.layer9)
                foundryEntity.setProperty(layer10, foundryEntityProperties.layer10)
                foundryEntity.setProperty(layer11, foundryEntityProperties.layer11)
                foundryEntity.setProperty(layer12, foundryEntityProperties.layer12)
                foundryEntity.setProperty(layer13, foundryEntityProperties.layer13)
                foundryEntity.setProperty(layer14, foundryEntityProperties.layer14)
                foundryEntity.setProperty(layer15, foundryEntityProperties.layer15)
                foundryEntity.setProperty(layer16, foundryEntityProperties.layer16)
                foundryEntity.setProperty(foundryEntityProperties.materialProperty, foundryEntityProperties.materialPropertyNumber)

                return foundryEntityProperties
            }
        })
    }
    return undefined
}