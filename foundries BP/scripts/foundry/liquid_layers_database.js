import { EquipmentSlot } from "@minecraft/server";
export const playerInputItemsIntoFoundry = new Map([
    // Layer 1 Items
    ["minecraft:iron_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: false, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer1_material", materialPropertyNumber: 19
        },
    ],
    // Layer 2 Items
    ["minecraft:iron_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: false, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer2_material", materialPropertyNumber: 19
        },
    ],
    // Layer 3 Items
    ["minecraft:iron_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: false, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer3_material", materialPropertyNumber: 19
        },
    ],
    // Layer 4 Items
    ["minecraft:iron_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: false, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer4_material", materialPropertyNumber: 19
        },
    ],
    // Layer 5 Items
    ["minecraft:iron_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: false, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer5_material", materialPropertyNumber: 19
        },
    ],
    // Layer 6 Items
    ["minecraft:iron_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: false, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer6_material", materialPropertyNumber: 19
        },
    ],
    // Layer 7 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: false,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer7_material", materialPropertyNumber: 19
        },
    ],
    // Layer 8 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: false, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer8_material", materialPropertyNumber: 19
        },
    ],
    // Layer 9 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: false, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer9_material", materialPropertyNumber: 19
        },
    ],
    // Layer 10 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: false, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer10_material", materialPropertyNumber: 19
        },
    ],
    // Layer 11 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: false, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer11_material", materialPropertyNumber: 19
        },
    ],
    // Layer 12 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: false, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer12_material", materialPropertyNumber: 19
        },
    ],
    // Layer 13 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: false, layer15: false, layer16: false,
            materialProperty: "foundry:layer13_material", materialPropertyNumber: 19
        },
    ],
    // Layer 14 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: false, layer16: false,
            materialProperty: "foundry:layer14_material", materialPropertyNumber: 19
        },
    ],
    // Layer 15 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: false,
            materialProperty: "foundry:layer15_material", materialPropertyNumber: 19
        },
    ],
    // Layer 16 Items
    ["minecraft:iron_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 2
        },
    ],
    ["minecraft:gold_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 3
        },
    ],
    ["minecraft:copper_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 4
        },
    ],
    ["minecraft:diamond|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 5
        },
    ],
    ["minecraft:netherite_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 6
        },
    ],
    ["minecraft:obsidian|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 7
        },
    ],
    ["foundry:aluminium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 8
        },
    ],
    ["foundry:zinc_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 9
        },
    ],
    ["foundry:osmium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 10
        },
    ],
    ["foundry:titanium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 11
        },
    ],
    ["foundry:lead_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 12
        },
    ],
    ["foundry:silver_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 13
        },
    ],
    ["foundry:brass_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 14
        },
    ],
    ["foundry:steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 15
        },
    ],
    ["foundry:dragon_steel_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 16
        },
    ],
    ["minecraft:redstone|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 17
        },
    ],
    ["foundry:palladium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 18
        },
    ],
    ["foundry:adamantium_ingot|true|true|true|true|true|true|true|true|true|true|true|true|true|true|true|false",
        {
            layer1: true, layer2: true, layer3: true, layer4: true, layer5: true, layer6: true, layer7: true, layer8: true,
            layer9: true, layer10: true, layer11: true, layer12: true, layer13: true, layer14: true, layer15: true, layer16: true,
            materialProperty: "foundry:layer16_material", materialPropertyNumber: 19
        }
    ]
]);
export function FoundryCheckItemsPlayerInterractsWith(block, player) {
    const itemID = player?.getComponent("equippable")?.getEquipment(EquipmentSlot.Mainhand)?.typeId;
    const FoundryTopBlock = block.above(1);
    if (FoundryTopBlock) {
        block.dimension.getEntitiesAtBlockLocation(FoundryTopBlock.location).forEach(foundryEntity => {
            const fetchLayer = [];
            for (let i = 1; i < 16; i++) {
                const layerPush = foundryEntity.getProperty(`foundry:layer${i + 1}`);
                fetchLayer.push(!!layerPush);
            }
            const foundryEntityProperties = playerInputItemsIntoFoundry.get(`${itemID}|${fetchLayer.map(value => String(value)).join("|")}`);
            if (foundryEntityProperties) {
                for (let i = 1; i < 16; i++) {
                    foundryEntity.setProperty(`layer${i}`, `${foundryEntityProperties}.layer${i}`);
                    foundryEntity.setProperty(foundryEntityProperties.materialProperty, foundryEntityProperties.materialPropertyNumber);
                }
                return foundryEntityProperties;
            }
        });
    }
    return undefined;
}
