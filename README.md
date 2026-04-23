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




## Block States used/reserved currently (Bound to change)
### Smithing Anvil
- "smithing_anvil:hammered_times": 3 states,
- "smithing_anvil:parts1": 16 states,
- "smithing_anvil:parts2": 5 states,
- "foundry:material_types1": 16 states,
- "foundry:material_types2": 2 states,
TOTAL: 3x16x2x16x2 = 3,072 reserved states.
[The parts2 state allows for 16*5 parts to be used, aka 80 parts reserved to be hammered] (Will most likely be lowered with the "material_types2" increased)


### Blacksmithing Furnace
- Will be a big bucket with a base having an interchangeable cast
- The block will be based on the "geometry.blacksmithing_furnace"
- Will make use of an entity version to compensate for the states and visual changes.




## Craftable items:
(The Rods iron and above might be made using the anvil method if states are available)
- Stone rod,
- Iron rod
- Diamond rod
- Iron hammer (3 sticks, 2 iron)
- Diamond hammer (3 sticks, 2 iron)
- Different Arrow heads will be combined with different rods/sticks







# CONCEPTS/TODO:
## Blacksmithing Furnace
- Interactable to put items inside of, (Like the Mixer from my old Foundries add-on)
- Has an inputtable "mold" state to allow pouring into different tool part molds (by left click and by redstone input)
- The furnace will have a fire and soul fire heating element.
- Fire will be able to burn more basic things,
- Soul Fire version will be able to burn everything and at a faster rate.
- Possibly other versions?












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