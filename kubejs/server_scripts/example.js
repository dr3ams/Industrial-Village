// priority: 0
console.info('Starting recipe modification scripts...')

ServerEvents.recipes(event => {
	event.shaped('minecraft:diamond', [
    'DDD',
    'DDD',
    'DDD'
	], {
    D: 'kubejs:diamond_nugget'
	})
	
	event.shaped('minecraft:emerald', [
    'EEE',
    'EEE',
    'EEE'
	], {
    E: 'kubejs:emerald_nugget'
	})
	
	event.shaped('kubejs:coin_02', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_01'
	})
	event.shapeless('9x kubejs:coin_01', ['kubejs:coin_02'])
	
	event.shaped('kubejs:coin_03', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_02'
	})
	event.shapeless('9x kubejs:coin_02', ['kubejs:coin_03'])
	
	
	event.shaped('kubejs:coin_04', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_03'
	})
	event.shapeless('9x kubejs:coin_03', ['kubejs:coin_04'])
	
	event.shaped('kubejs:coin_05', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_04'
	})
	event.shapeless('9x kubejs:coin_04', ['kubejs:coin_05'])
	

//event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'}) // You can combine filters, to create ANDk logic
//event.remove({output: 'minecraft:stone_pickaxe'}) // Removes all recipes where output is stone pickaxe
//event.remove({id: 'minecraft:glowstone'}) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
	
	event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastic');
	event.remove({output: 'industrialforegoing:plastic'});
	event.remove({output: 'industrialforegoing:dryrubber'});
	event.remove({output: 'industrialforegoing:tinydryrubber'});
	event.remove({output: 'industrialforegoing:latex_processing_unit'});

	event.remove({output: 'waystones:waystone'})
	event.remove({output: 'waystones:mossy_waystone'})
	event.remove({output: 'waystones:sandy_waystone'})
	event.remove({output: 'waystones:sharestone'})
	event.remove({output: 'waystones:bound_scroll'})
	event.remove({output: 'waystones:warp_scroll'})
	event.remove({output: 'waystones:warp_plate'})
	event.remove({output: 'waystones:warp_stone'})
    event.remove({output: 'gag:time_sand_pouch'})
    event.remove({output: 'gag:escape_rope'})
    event.remove({output: 'gag:hearthstone'})
    event.remove({output: 'gag:sacred_salt'})
    event.remove({output: 'gag:sacred_salve'})
    event.remove({output: 'gag:sacred_balm'})
	event.remove({output: 'gag:mining_dynamite'})
	event.remove({output: 'gag:labeling_tool'})
	
	event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:desh_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:ostrum_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:calorite_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_electrum', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_aluminum', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_lead', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_silver', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_nickel', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_uranium', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_constantan', type: 'minecraft:smelting'})
	event.remove({output: 'immersiveengineering:ingot_steel', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:nether_brick', type: 'minecraft:smelting'})
	
	event.remove({output: 'immersiveengineering:nugget_steel', type: 'minecraft:smelting'})
	event.remove({output: 'railcraft:lead_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'railcraft:zinc_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'railcraft:silver_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'railcraft:nickel_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'railcraft:tin_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'mffs:steel_compound'})
	event.remove({output: 'mffs:steel_ingot', type: 'minecraft:smelting'})
	
	event.remove({id: 'refinedstorage:quartz_enriched_iron'})
	event.remove({id: 'refinedstorage:raw_basic_processor'})
	event.remove({output: 'refinedstorage:basic_processor', type: 'minecraft:smelting'})
	event.remove({id: 'refinedstorage:raw_improved_processor'})
	event.remove({output: 'refinedstorage:improved_processor', type: 'minecraft:smelting'})
	event.remove({id: 'refinedstorage:raw_advanced_processor'})
	event.remove({output: 'refinedstorage:advanced_processor', type: 'minecraft:smelting'})
	
	
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:blasting'})
	event.blasting('3x immersiveengineering:nugget_copper', 'minecraft:raw_copper').cookingTime(200)
	event.blasting('4x immersiveengineering:nugget_copper', 'minecraft:copper_ore').cookingTime(200)
	event.blasting('5x immersiveengineering:nugget_copper', 'minecraft:deepslate_copper_ore').cookingTime(200)
	event.blasting('6x immersiveengineering:nugget_copper', 'minecraft:copper_ore').cookingTime(200)
	event.blasting('7x immersiveengineering:nugget_copper', 'ad_astra:glacio_copper_ore').cookingTime(200)
	
	
	event.remove({id: 'immersiveengineering:crafting/sheetmetal_iron'})
	event.remove({id: 'immersiveengineering:crafting/sheetmetal_steel'})
	
	event.remove({id: 'industrialforegoing:diamond_gear'})
	
	event.remove({id: 'industrialforegoing:plastic'})
	event.remove({id: 'extendedcrafting:black_iron_slate'})
	event.remove({id: 'extendedcrafting:redstone_ingot'})
	event.remove({id: 'extendedcrafting:black_iron_ingot'})
	
	event.remove({id: 'industrialforegoing:conveyor'})
	event.remove({id: 'industrialforegoing:conveyor_extraction_upgrade'})
	event.remove({id: 'industrialforegoing:conveyor_detection_upgrade'})
	event.remove({id: 'industrialforegoing:conveyor_insertion_upgrade'})
	event.remove({id: 'industrialforegoing:conveyor_bouncing_upgrade'})
	event.remove({id: 'railcraft:coke_oven_bricks'})
	event.remove({id: 'railcraft:blast_furnace_bricks'})
	event.remove({id: 'industrialforegoing:mob_imprisonment_tool'})
	event.remove({id: 'industrialforegoing:conveyor_dropping_upgrade'})
	event.remove({id: 'industrialforegoing:conveyor_blinking_upgrade'})
	event.remove({id: 'industrialforegoing:conveyor_splitting_upgrade'})
	event.remove({id: 'industrialforegoing:mycelial_reactor'})
	event.remove({id: 'industrialforegoing:mycelial_furnace'})
	event.remove({id: 'industrialforegoing:mycelial_slimey'})
	event.remove({id: 'industrialforegoing:mycelial_culinary'})
	event.remove({id: 'industrialforegoing:mycelial_potion'})
	event.remove({id: 'industrialforegoing:mycelial_ender'})
	event.remove({id: 'industrialforegoing:mycelial_explosive'})
	event.remove({id: 'industrialforegoing:mycelial_frosty'})
	event.remove({id: 'industrialforegoing:mycelial_halitosis'})
	event.remove({id: 'industrialforegoing:mycelial_magma'})
	event.remove({id: 'industrialforegoing:mycelial_pink'})
	event.remove({id: 'industrialforegoing:mycelial_netherstar'})
	event.remove({id: 'industrialforegoing:mycelial_death'})
	event.remove({id: 'industrialforegoing:mycelial_rocket'})
	event.remove({id: 'industrialforegoing:mycelial_crimed'})
	event.remove({id: 'industrialforegoing:mycelial_meatallurgic'})
	event.remove({id: 'industrialforegoing:pitiful_generator'})
	event.remove({id: 'industrialforegoing:mob_imprisonment_tool'})
	event.remove({id: 'industrialforegoing:mob_duplicator'})
	event.remove({id: 'ad_astra:coal_generator'})
	event.remove({id: 'ad_astra:fuel_refinery'})
	event.remove({id: 'ad_astra:solar_panel'})
	event.remove({id: 'prettypipes:pipe'})
	event.remove({id: 'constructionwand:infinity_wand'})
	event.remove({output: 'ad_astra:iron_rod'})
	event.remove({output: 'buildersaddition:iron_rod'})
	
	event.remove({output: 'toms_storage:ts.trim'})
	event.remove({output: 'toms_storage:ts.open_crate'})
	event.remove({output: 'toms_storage:ts.inventory_cable'})
	event.remove({output: 'toms_storage:ts.inventory_cable_framed'})
	event.remove({output: 'toms_storage:ts.inventory_cable_connector'})
	event.remove({output: 'toms_storage:ts.inventory_cable_connector_framed'})
	event.remove({output: 'toms_storage:ts.inventory_cable_connector_filtered'})
	event.remove({output: 'toms_storage:ts.inventory_proxy'})
	event.remove({output: 'toms_storage:ts.inventory_hopper_basic'})
	event.remove({output: 'toms_storage:ts.wireless_terminal'})
	event.remove({output: 'toms_storage:ts.adv_wireless_terminal'})
	event.remove({output: 'toms_storage:ts.item_filter'})
	event.remove({output: 'toms_storage:ts.polymorphic_item_filter'})
	event.remove({output: 'toms_storage:ts.tag_item_filter'})
	event.remove({output: 'toms_storage:ts.trim'})
	event.remove({output: 'toms_storage:ts.level_emitter'})
	event.remove({output: 'toms_storage:ts.adv_wireless_terminal'})
	event.remove({output: 'toms_storage:ts.paint_kit'})
	
	event.remove({output: 'functionalstorage:framed_controller_extension'})
	event.remove({output: 'functionalstorage:fluid_1'})
	event.remove({output: 'functionalstorage:fluid_2'})
	event.remove({output: 'functionalstorage:fluid_4'})
	event.remove({output: 'functionalstorage:compacting_drawer'})
	event.remove({output: 'functionalstorage:compacting_framed_drawer'})
	event.remove({output: 'functionalstorage:storage_controller'})
	event.remove({output: 'functionalstorage:framed_storage_controller'})
	event.remove({output: 'functionalstorage:controller_extension'})
	event.remove({output: 'functionalstorage:linking_tool'})
	event.remove({output: 'functionalstorage:simple_compacting_drawer'})
	event.remove({output: 'functionalstorage:framed_simple_compacting_drawer'})
	event.remove({output: 'functionalstorage:armory_cabinet'})
	event.remove({output: 'functionalstorage:ender_drawer'})	

	event.remove({output: 'sophisticatedbackpacks:compacting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:advanced_compacting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:inception_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:smelting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:auto_smelting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:smoking_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:auto_smoking_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:xp_pump_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:blasting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:auto_blasting_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:stonecutter_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:tank_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:battery_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:pump_upgrade'})
	event.remove({output: 'sophisticatedbackpacks:advanced_pump_upgrade'})

	//clay plate recipe
	event.smelting('kubejs:clay_plate_fired', 'kubejs:clay_plate_raw')
		
	//remove Ad astra compressor recipe
	event.remove({output: 'ad_astra:compressor'})
	
	//remove railcraft plates recipe and unregister them
	event.remove({output: 'railcraft:steel_plate'})
	
	//bucket with iron plates recipe
	event.remove({output: 'minecraft:bucket'})
	event.shaped('minecraft:bucket', [
    'I I',
    ' I '
	], {
    I: 'immersiveengineering:plate_iron'
	})
	
	
	//flint spear and shovel
	event.shaped('kubejs:flint_shovel', [
    ' F ',
    ' S ',
	' S '
	], {
	F: 'minecraft:flint',
	S: 'minecraft:stick'
	})
	
	event.shaped('kubejs:flint_spear', [
    '  F',
    ' S ',
	'S  '
	], {
	F: 'minecraft:flint',
	S: 'minecraft:stick'
	})
	
	event.shaped('kubejs:flint_pickaxe', [
    'AAA',
    'BC ',
    ' C '
	], {
	A: 'minecraft:flint',
	B: 'farmersdelight:rope',
	C: 'minecraft:stick'
	})
	
	event.remove({output: 'railcraft:solid_fueled_firebox'})
	event.shaped('railcraft:solid_fueled_firebox', [
	'BRB',
    'RCR',
	'BFB'
	], {
    B: 'immersiveengineering:blastbrick',
	R: 'immersiveengineering:radiator',
	C: 'minecraft:fire_charge',
	F: 'minecraft:blast_furnace'
	})


	event.remove({output:'railcraft:fluid_fueled_firebox'})
	event.shaped('railcraft:fluid_fueled_firebox', [
	'IOI',
    'RPR',
	'BFB'
	], {
    B: 'immersiveengineering:blastbrick',
	R: 'immersiveengineering:radiator',
	P: 'immersiveengineering:fluid_pump',
	F: 'minecraft:blast_furnace',
	I: 'railcraft:invar_plate',
	O: 'immersiveengineering:fluid_placer'
	})
	
	event.shaped('railcraft:charge_spool_small', [
	'   ',
    'WSW',
	'   '
	], {
    W: 'immersiveengineering:wire_copper',
	S: 'immersiveengineering:stick_treated'
	})
	
	event.shaped('railcraft:tin_plate', [
	'TT ',
    'H  ',
	'   '
	], {
    T: 'railcraft:tin_ingot',
	H: Item.of('immersiveengineering:hammer')
	})
	
	event.shaped('railcraft:brass_plate', [
	'BB ',
    'H  ',
	'   '
	], {
    B: 'railcraft:brass_ingot',
	H: Item.of('immersiveengineering:hammer')
	})
	
	event.shaped('kubejs:steel_file', [
	'  S',
    ' S ',
	'T  '
	], {
    S: 'immersiveengineering:ingot_steel',
	T: 'immersiveengineering:stick_treated'
	})
	
	event.remove({output:'railcraft:bushing_gear'})
	event.shaped('railcraft:bushing_gear', [
	'   ',
    'BFB',
	'   '
	], {
    B: 'railcraft:brass_plate',
	F: 'kubejs:steel_file'
	}).damageIngredient(Item.of('kubejs:steel_file'))
  
  //primitive
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"tag": "minecraft:planks"}
		],
		"tool": 
			{"tag": "farmersdelight:tools/knives"},
		"result": [
			{ "item": "kubejs:wooden_form", "count": 1}
		],
		"sound": "minecraft:item.axe.strip"
	})
	
	event.shaped('kubejs:stone_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'minecraft:flint'
	})
	
	event.shaped('kubejs:iron_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'immersiveengineering:plate_iron',
	B: 'minecraft:iron_ingot'
	})
	
	event.shaped('minecraft:flint', [
	'A  ',
	'B  ',
	'   '
	], {
	A: 'kubejs:stone_mortar',
	B: 'minecraft:gravel'
	}).damageIngredient('kubejs:stone_mortar')

	
	//clay brick unfired
	event.shapeless('kubejs:clay_brick_unfired', [
	'minecraft:clay_ball',
	'kubejs:wooden_form'
	]).damageIngredient('kubejs:wooden_form')
	event.smelting('kubejs:clay_brick', 'kubejs:clay_brick_unfired').cookingTime(100)
	event.campfireCooking('kubejs:clay_brick', 'kubejs:clay_brick_unfired').cookingTime(400)
	
	//blast furnace recipe
	event.remove({output: 'minecraft:blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
    'CCC',
    'CFC',
	'SSS'
	], {
    C: 'kubejs:primitive_ingot',
	F: 'minecraft:furnace',
	S: 'minecraft:smooth_stone'
	})	
	
	//furnace with clay recipe
	event.remove({output: 'minecraft:furnace'})
	event.shaped('minecraft:furnace', [
    'CCC',
    'CFC',
	'SSS'
	], {
    C: 'kubejs:clay_brick',
	F: 'minecraft:campfire',
	S: 'minecraft:cobblestone'
	})
	
	//brick unfired
	event.remove({output: 'minecraft:brick', type: 'minecraft:smelting'})
	event.shaped('3x kubejs:brick_unfired', [
	'AAA',
	'DBC',
	'   '
	], {
	A: 'minecraft:clay_ball',
	B: 'kubejs:wooden_form',
	C: 'minecraft:gravel',
	D: '#forge:sand'
	}).damageIngredient('kubejs:wooden_form')
	event.smelting('minecraft:brick', 'kubejs:brick_unfired').cookingTime(100)

	//unfired fireclay brick
	event.shaped('kubejs:fireclay_brick_unfired', [
	'   ',
	'DFD',
	'   '
	], {
	D: 'kubejs:fireclay_brick_dust',
	F: 'kubejs:wooden_form'
	}).damageIngredient('kubejs:wooden_form')
	event.blasting('kubejs:fireclay_brick', 'kubejs:fireclay_brick_unfired').cookingTime(200)
	
	//fireclay brick dust
	event.shaped('3x kubejs:fireclay_brick_dust', [
	'SG ',
	'CF ',
	'   '
	], {
	S: '#forge:sand',
	G: 'minecraft:gravel',
	C: 'kubejs:clay_dust',
	F: 'kubejs:wooden_form'
	}).damageIngredient('kubejs:wooden_form')
	
	//fireclay brick
	event.shaped('kubejs:fireclay_brick_dust', [
	'T  ',
	'M  ',
	'   '
	], {
	T: 'kubejs:fireclay_brick',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')
	
	//vanilla mc brick dust from terracota
	event.shaped('kubejs:brick_dust', [
	'T  ',
	'M  ',
	'   '
	], {
	T: 'minecraft:terracotta',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')
	
	event.shaped('1x kubejs:brick_dust', [
	'T  ',
	'M  ',
	'   '
	], {
	T: 'minecraft:brick',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')

	event.shaped('4x kubejs:brick_dust', [
	'T  ',
	'M  ',
	'   '
	], {
	T: 'minecraft:bricks',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')

	event.shaped('kubejs:clay_dust', [
	'T  ',
	'M  ',
	'   '
	], {
	T: 'minecraft:clay_ball',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')

	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"tag": "minecraft:terracotta"}
		],
		"tool": 
			{"tag": "farmersdelight:tools/pickaxes"},
		"result": [
			{ "item": "kubejs:brick_dust", "count": 4}
		]
	})	
	
	//primitive ingot
	event.shaped('railcraft:coal_dust', [
	'C  ',
	'M  ',
	'   '
	], {
	C: 'minecraft:coal',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')
	
	event.shaped('railcraft:charcoal_dust', [
	'C  ',
	'M  ',
	'   '
	], {
	C: 'minecraft:charcoal',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')
	
	event.shaped('kubejs:primitive_blend', [
	'AB ',
	'CD ',
	'   '
	], {
	A: 'kubejs:clay_dust',
	B: 'railcraft:charcoal_dust',	
	C: 'minecraft:raw_iron',
	D: 'kubejs:wooden_form'
	}).damageIngredient('kubejs:wooden_form')
	
	event.smelting('kubejs:primitive_ingot', 'kubejs:primitive_blend').cookingTime(300)
	
	event.shaped('kubejs:primitive_ingot_dust', [
	'C  ',
	'M  ',
	'   '
	], {
	C: 'kubejs:primitive_ingot',
	M: 'kubejs:stone_mortar'
	}).damageIngredient('kubejs:stone_mortar')
	
	//blast resistant brick for blast furnace
	event.shaped('2x kubejs:blastresistant_brick_dust', [
	'BCD',
	'AFE',
	'   '
	], {
	A: 'minecraft:glowstone_dust',
	B: 'kubejs:fireclay_brick_dust',	
	C: 'kubejs:primitive_ingot_dust',
	D: 'minecraft:gunpowder',	
	E: 'railcraft:charcoal_dust',
	F: 'kubejs:wooden_form'
	}).damageIngredient('kubejs:wooden_form')
	
	event.shaped('2x kubejs:blastresistant_brick_unfired', [
	'   ',
	'DFD',
	'   '
	], {
	D: 'kubejs:blastresistant_brick_dust',
	F: 'kubejs:wooden_form'
	}).damageIngredient('kubejs:wooden_form')
	event.blasting('kubejs:blastresistant_brick', 'kubejs:blastresistant_brick_unfired').cookingTime(300)
	
	event.remove({output: 'refinedstorage:silicon', type: 'minecraft:smelting'})
	event.blasting('refinedstorage:silicon', 'kubejs:raw_silicon').cookingTime(100)
		
	event.remove({id: 'ppfluids:fluid_pipe'})
	event.shaped('ppfluids:fluid_pipe', [
    "   ",
    "ABC",
    "   "
	], {
	A: 'minecraft:slime_ball',
	B: 'prettypipes:pipe',
	C: 'minecraft:blue_dye'
	})
	
	event.remove({id: 'ad_astra:recipes/nasa_workbench'})
	event.shaped('ad_astra:nasa_workbench', [
    "ABC",
    "DED",
    "CFA"
	], {
	A: 'immersiveengineering:rs_engineering',
	B: 'refinedstorage:advanced_processor',
	C: 'immersiveengineering:heavy_engineering',
	D: 'immersiveengineering:plate_steel',
	E: 'refinedstorage:crafter',
	F: 'pneumaticcraft:printed_circuit_board'
	})
	
	event.remove({id: 'mining_dimension:teleporter'})
	event.shaped('mining_dimension:teleporter', [
    "ABA",
    "BCB",
    "ABA"
	], {
	A: 'minecraft:copper_block',
	B: 'minecraft:ender_pearl',
	C: 'immersiveengineering:sample_drill'
	})
	
	event.remove({id: 'industrialforegoing:biofuel_generator'})
	event.shaped('industrialforegoing:biofuel_generator', [
    "ABA",
    "CDC",
    "EFE"
	], {
	A: 'pneumaticcraft:plastic',
	B: 'immersiveengineering:component_electronic',
	C: 'immersiveengineering:generator',
	D: 'industrialforegoing:machine_frame_simple',
	E: 'industrialforegoing:diamond_gear',
	F: 'pneumaticcraft:printed_circuit_board'
	})
	
	event.remove({id: 'industrialforegoing:bioreactor'})
	event.shaped('industrialforegoing:bioreactor', [
    "ABA",
    "CDC",
    "EFE"
	], {
	A: 'pneumaticcraft:plastic',
	B: 'pneumaticcraft:fluid_mixer',
	C: 'industrialforegoing:pink_slime_ingot',
	D: 'industrialforegoing:machine_frame_simple',
	E: 'immersiveengineering:heavy_engineering',
	F: 'immersiveengineering:furnace_heater'
	})
	
	//working on rods
	event.shaped('2x kubejs:screw', [
    " A ",
    " B ",
    " C "
	], {
	A: '#natprog:saw',
	B: 'immersiveengineering:stick_iron',
	C: 'kubejs:steel_file'
	}).damageIngredient('#natprog:saw').damageIngredient('kubejs:steel_file')
	
	event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})
	event.remove({id: 'immersiveengineering:crafting/stick_iron'})
	event.remove({id: 'immersiveengineering:crafting/stick_steel'})
	
	event.shaped('immersiveengineering:stick_iron', [
    " A ",
    " B ",
    "   "
	], {
	A: 'kubejs:steel_file',
	B: 'minecraft:iron_ingot'
	}).damageIngredient('kubejs:steel_file')
	
	event.shaped('immersiveengineering:stick_aluminum', [
    " A ",
    " B ",
    "   "
	], {
	A: 'kubejs:steel_file',
	B: 'immersiveengineering:ingot_aluminum'
	}).damageIngredient('kubejs:steel_file')
	
	event.shaped('immersiveengineering:stick_steel', [
    " A ",
    " B ",
    "   "
	], {
	A: 'kubejs:steel_file',
	B: 'immersiveengineering:ingot_steel'
	}).damageIngredient('kubejs:steel_file')
	
	event.remove({id: 'minecraft:torch'})
	event.shaped('4x minecraft:torch', [
    " A ",
    " B ",
    " C "
	], {
	A: '#minecraft:coals',
	B: '#supplementaries:ropes',
	C: '#forge:rods/wooden'
	})
})

PlayerEvents.loggedIn(event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
	event.player.give('ftbquests:book')
    event.player.give('10x minecraft:apple')
	event.player.give('4x minecraft:potato')
	event.player.give('minecraft:leather_leggings')
	event.player.give('minecraft:leather_boots')
	event.player.give('constructionwand:stone_wand')
	event.player.give('supplementaries:sack')
	event.player.give('2x minecraft:torch')
  }
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	

})