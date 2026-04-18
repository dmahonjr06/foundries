# A blacksmithing add-on.

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
- 




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