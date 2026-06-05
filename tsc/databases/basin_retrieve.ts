export const mapBasinLiquidToSolidBlockType: ReadonlyMap<number, { material_type1: number, material_type2: number, itemToGive: string | undefined }> = new Map([
    [1,  { material_type1: 0,   material_type2: 0,  itemToGive: undefined }], // empty
    [2,  { material_type1: 1,   material_type2: 0,  itemToGive: "minecraft:iron_block" }], // iron
    [3,  { material_type1: 2,   material_type2: 0,  itemToGive: "minecraft:gold_block" }], // gold
    [4,  { material_type1: 3,   material_type2: 0,  itemToGive: "minecraft:copper_block" }], // copper
    [5,  { material_type1: 4,   material_type2: 0,  itemToGive: "minecraft:diamond_block" }], // diamond
    [6,  { material_type1: 5,   material_type2: 0,  itemToGive: "minecraft:netherite_block" }], // netherite
    [7,  { material_type1: 6,   material_type2: 0,  itemToGive: "minecraft:obsidian" }], // obsidian
    [8,  { material_type1: 7,   material_type2: 0,  itemToGive: "foundry:aluminium_block" }], // aluminium
    [9,  { material_type1: 8,   material_type2: 0,  itemToGive: "foundry:zinc_block" }], // zinc
    [10, { material_type1: 9,   material_type2: 0,  itemToGive: "foundry:osmium_block" }], // osmium
    [11, { material_type1: 10,  material_type2: 0,  itemToGive: "foundry:titanium_block" }], // titanium
    [12, { material_type1: 11,  material_type2: 0,  itemToGive: "foundry:lead_block" }], // lead
    [13, { material_type1: 12,  material_type2: 0,  itemToGive: "foundry:silver_block" }], // silver
    [14, { material_type1: 13,  material_type2: 0,  itemToGive: "foundry:brass_block" }], // brass
    [15, { material_type1: 14,  material_type2: 0,  itemToGive: "foundry:steel_block" }], // steel
    [16, { material_type1: 15,  material_type2: 0,  itemToGive: "foundry:dragon_steel_block" }], // dragon steel
    [17, { material_type1: 0,   material_type2: 1,  itemToGive: "minecraft:redstone_block" }], // redstone
    [18, { material_type1: 0,   material_type2: 2,  itemToGive: "foundry:palladium_block" }], // palladium
    [19, { material_type1: 0,   material_type2: 3,  itemToGive: "foundry:adamantium_block" }], // adamantium
    [20, { material_type1: 0,   material_type2: 4,  itemToGive: "minecraft:emerald_block" }], // emerald
    [21, { material_type1: 0,   material_type2: 5,  itemToGive: "minecraft:lapis_block" }], // lapis
    [22, { material_type1: 0,   material_type2: 6,  itemToGive: "foundry:tungsten_block" }], // tungsten
    [23, { material_type1: 0,   material_type2: 7,  itemToGive: "foundry:tin_block" }], // tin
    [24, { material_type1: 0,   material_type2: 8,  itemToGive: "foundry:nickel_block" }], // nickel
    [25, { material_type1: 0,   material_type2: 9,  itemToGive: "foundry:cobalt_block" }], // cobalt
    [26, { material_type1: 0,   material_type2: 10, itemToGive: "foundry:platinum_block" }], // platinum
    [27, { material_type1: 0,   material_type2: 11, itemToGive: "minecraft:quartz_block" }], // quartz
    [29, { material_type1: 0,   material_type2: 12, itemToGive: "minecraft:amethyst" }], // amethyst
]);