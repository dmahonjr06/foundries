# A blacksmithing add-on.

## 2 BLOCK MULTIBLOCK Furnace called a "Foundry"
- The bottom block will be a directional based block with 2 output sides and 1 lava tank side.
- The top block will be a glass tank where the the 16 liquid layers will be displayed through a property system with an entity inside the tank.
- The output sides will be able to connect to a "tap" block that can pour


## Using a custom anvil, interact with the anvil to place hot, unhammered pieces that need to be hammered into their correct shape.
### Unhammered part types
- Axe head,
- Battle-axe head,
- Spear head,
- Pickaxe head,
- Shovel head,
- Hammer head,
- Sword blade,
- Sword guard,
- Some rods (Some will be craftable, but some rarer ones will only be makeable from hamemring different ingots) [Might Change if too many states are used]
- Sword pommel
- Arrow head



## Craftable items:
(The Rods iron and above might be made using the anvil method if states are available)
- Stone rod,
- Iron rod
- Diamond rod
- Iron hammer (3 sticks, 2 iron)
- Diamond hammer (3 sticks, 2 iron)
- Different Arrow heads will be combined with different rods/sticks
- cogs






## CONCEPTS/TODO:
# Using a faucet and basin
When clicking on a faucet, the basin underneath is filled in 9 sections.
Using an ore on the 
Faucet will have an "on/off" state, which when turned on will check the first layer of the "foundry:foundry_liquids" entity. 


# Optimise the "liquid_layers_database.ts" database.
Could try make it under 1KB possibly.
It's currently at 110KB...
UPDATE: It is now at 1.2KB











# States and What some of them mean

## Material Types and their block state "foundry:material_types1" & "foundry:material_types2" number
1|0 - Lava
2|0 - Iron
3|0 - Gold
4|0 - Copper
5|0 - Diamond
6|0 - Netherite
7|0 - Obsidian
8|0 - Aluminium
9|0 - Zinc
10|0 - Osmium
11|0 - Titanium
12|0 - Lead
13|0 - Silver
14|0 - Brass
15|0 - Steel
16|0 - Dragon Steel (Dragon Scale and Steel mixture)
17|0 - Redstone
18|0 - Palladium
19|0 - Adamantium
**BELOW ARE RESOURCES NEEDED TO ADD**
20|0 - Emerald
21|0 - Lapis
22|0 - Tungsten

## Part Types and their block state with "smithing_anvil:parts" number
1 - Axe head
2 - Pickaxe head
3 - Shovel head
4 - Sword blade
5 - Sword guard
6 - Sword pommel
7 - spear head
8 - Battle-axe head,
9 - Hammer head,
10- Rods


# TODO
## Basin:
- When the basin is full but the incoming material is different, we should solidify the basin contents into a block.
- Add an inventory of 1 slot to the entity (Use Minato's Inventory UI to make the inventory.) Make it a hopperable inventory.
- Potentially also a hopper could be used to automate the removal of the solidified block from the basin to allow continuous pouring of different materials?
- Add Component to retrieve block from foundry
- Map the different materials of the foundry:basin block to their corresponding material type when the basin entity is filled up.

## Resource Blocks:
- Make all the blocks into resource blocks.
- foundry:adamantium_block
- foundry:brass_block
- foundry:copper_block
- foundry:dragon_steel_block
- foundry:gold_block
- foundry:lead_block
- foundry:osmium_block
- foundry:palladium_block
- foundry:silver_block
- foundry:titanium_block
- foundry:zinc_block

## Raw Resource Blocks:
- foundry:raw_adamantium_block
- foundry:raw_aluminium_block
- foundry:raw_brass_block
- foundry:raw_dragon_steel_block
- foundry:raw_lead_block
- foundry:raw_netherite_block
- foundry:raw_obsidian_block
- foundry:raw_osmium_block
- foundry:raw_palladium_block
- foundry:raw_silver_block
- foundry:raw_titanium_block
- foundry:raw_zinc_block

## Buckets:
### Make these buckets then put them into the 'maps.ts' database for usage within the foundry.
REGULAR FULL:
- foundry:brass_bucket
- foundry:copper_bucket
- foundry:diamond_bucket
- foundry:dragon_steel_bucket
- foundry:gold_bucket
- foundry:iron_bucket
- foundry:lead_bucket
- foundry:netherite_bucket
- foundry:obsidian_bucket
- foundry:osmium_bucket
- foundry:palladium_bucket
- foundry:zinc_bucket
- foundry:redstone_bucket
- foundry:silver_bucket
- foundry:steel_bucket
- foundry:titanium_bucket

OBSIDIAN FULL BUCKETS:
- foundry:adamantium_obsidian_bucket
- foundry:aluminium_obsidian_bucket
- foundry:brass_obsidian_bucket
- foundry:copper_obsidian_bucket
- foundry:diamond_obsidian_bucket
- foundry:dragon_steel_obsidian_bucket
- foundry:gold_obsidian_bucket
- foundry:iron_obsidian_bucket
- foundry:lead_obsidian_bucket
- foundry:netherite_obsidian_bucket
- foundry:obsidian_obsidian_bucket
- foundry:osmium_obsidian_bucket
- foundry:palladium_obsidian_bucket
- foundry:redstone_obsidian_bucket
- foundry:silver_obsidian_bucket
- foundry:titanium_obsidian_bucket
- foundry:zinc_obsidian_bucket

3/4 FULL OBSIDIAN BUCKETS:
- foundry:3q_adamantium_obsidian_bucket
- foundry:3q_aluminium_obsidian_bucket
- foundry:3q_brass_obsidian_bucket
- foundry:3q_copper_obsidian_bucket
- foundry:3q_diamond_obsidian_bucket
- foundry:3q_dragon_steel_obsidian_bucket
- foundry:3q_gold_obsidian_bucket
- foundry:3q_iron_obsidian_bucket
- foundry:3q_netherite_obsidian_bucket
- foundry:3q_obsidian_obsidian_bucket
- foundry:3q_lead_obsidian_bucket
- foundry:3q_osmium_obsidian_bucket
- foundry:3q_palladium_obsidian_bucket
- foundry:3q_redstone_obsidian_bucket
- foundry:3q_silver_obsidian_bucket
- foundry:3q_titanium_obsidian_bucket
- foundry:3q_zinc_obsidian_bucket

1/2 FULL OBSIDIAN BUCKETS:
- foundry:half_adamantium_obsidian_bucket
- foundry:half_aluminium_obsidian_bucket
- foundry:half_brass_obsidian_bucket
- foundry:half_copper_obsidian_bucket
- foundry:half_diamond_obsidian_bucket
- foundry:half_dragon_steel_obsidian_bucket
- foundry:half_gold_obsidian_bucket
- foundry:half_iron_obsidian_bucket
- foundry:half_lead_obsidian_bucket
- foundry:half_netherite_obsidian_bucket
- foundry:half_obsidian_obsidian_bucket
- foundry:half_osmium_obsidian_bucket
- foundry:half_palladium_obsidian_bucket
- foundry:half_redstone_obsidian_bucket
- foundry:half_silver_obsidian_bucket
- foundry:half_titanium_obsidian_bucket
- foundry:half_zinc_obsidian_bucket

1/4 FULL OBSIDIAN BUCKETS:
- foundry:quarter_adamantium_obsidian_bucket
- foundry:quarter_aluminium_obsidian_bucket
- foundry:quarter_brass_obsidian_bucket
- foundry:quarter_copper_obsidian_bucket
- foundry:quarter_diamond_obsidian_bucket
- foundry:quarter_dragon_steel_obsidian_bucket
- foundry:quarter_gold_obsidian_bucket
- foundry:quarter_iron_obsidian_bucket
- foundry:quarter_lead_obsidian_bucket
- foundry:quarter_netherite_obsidian_bucket
- foundry:quarter_obsidian_obsidian_bucket
- foundry:quarter_osmium_obsidian_bucket
- foundry:quarter_palladium_obsidian_bucket
- foundry:quarter_redstone_obsidian_bucket
- foundry:quarter_silver_obsidian_bucket
- foundry:quarter_titanium_obsidian_bucket
- foundry:quarter_zinc_obsidian_bucket


## Provide Sound definitions and textures for all full blocks within blocks.json!




## MAKE BLOCKS WITH ENTITIES **UNMOVABLE**
- Make them unmovable so pistons don't mess up the entities within the blocks.