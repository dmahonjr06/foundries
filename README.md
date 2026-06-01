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

## Material Types and their block state "foundry:material_type1" & "foundry:material_type2" number
0|0 - Empty
1|0 - Iron
2|0 - Gold
3|0 - Copper
4|0 - Diamond
5|0 - Netherite
6|0 - Obsidian
7|0 - Aluminium
8|0 - Zinc
9|0 - Osmium
10|0 - Titanium
11|0 - Lead
12|0 - Silver
13|0 - Brass
14|0 - Steel
15|0 - Dragon Steel (Dragon Scale and Steel mixture)
0|1 - Redstone
0|2 - Palladium
0|3 - Adamantium
**BELOW ARE RESOURCES NEEDED TO ADD**
0|4 - Emerald
0|5 - Lapis
0|6 - Tungsten

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

## Resource Ingots: 
- 


## Resource Ores:
- 


## Raw Resources:
- 

## Plates:
- Titanium Plate
- Palladium Plate
- Lead Plate
- Adamantium Plate
- Dragon Steel Plate
- Brass Plate

## Resource Blocks:
- Make all the blocks into resource blocks.
- Make recipes
- foundry:lead_block
- foundry:palladium_block
- foundry:silver_block

## Raw Resource Blocks:
- foundry:raw_adamantium_block
- foundry:raw_aluminium_block
- foundry:raw_brass_block
- foundry:raw_dragon_steel_block
- foundry:raw_lead_block
- foundry:raw_osmium_block
- foundry:raw_palladium_block
- foundry:raw_silver_block
- foundry:raw_titanium_block
- foundry:raw_zinc_block

## Buckets:
### Make these buckets then put them into the 'maps.ts' database for usage within the foundry.
Need to make buckets take the top-most liquid from the foundry and place it into the bucket when right-clicking on the foundry with an empty bucket.


## Provide Sound definitions and textures for all full blocks within blocks.json!




## MAKE BLOCKS WITH ENTITIES **UNMOVABLE**
- Make them unmovable so pistons don't mess up the entities within the blocks.