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
	
	
	function compressRecipe(item1, item2, reversed) {
    event.shaped(item1, ["AAA", "AAA", "AAA"], { A: item2 });
    if (reversed) {
      event.shapeless(Item.of(item2, 9), [item1]);
    }
	}
	compressRecipe("immersiveengineering:storage_lead", "immersiveengineering:ingot_lead", true);
	compressRecipe("immersiveengineering:storage_electrum", "immersiveengineering:ingot_electrum", true);
	compressRecipe("immersiveengineering:storage_constantan", "immersiveengineering:ingot_constantan", true);
	compressRecipe("immersiveengineering:storage_nickel", "immersiveengineering:ingot_nickel", true);
	compressRecipe("immersiveengineering:storage_aluminum", "immersiveengineering:ingot_aluminum", true);
	compressRecipe("immersiveengineering:storage_silver", "immersiveengineering:ingot_silver", true);
	

//event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'}) // You can combine filters, to create ANDk logic
//event.remove({output: 'minecraft:stone_pickaxe'}) // Removes all recipes where output is stone pickaxe
//event.remove({id: 'minecraft:glowstone'}) // Removes recipe by ID. in this case, data/minecraft/recipes/glowstone.json
	
	event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastic');
	event.remove({output: 'industrialforegoing:plastic'});
	event.remove({output: 'industrialforegoing:dryrubber'});
	event.remove({output: 'industrialforegoing:tinydryrubber'});
	event.remove({output: 'industrialforegoing:latex_processing_unit'});
	
	event.remove({output: 'sophisticatedbackpacks:stack_upgrade_starter_tier'});
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_tier_1'});
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_tier_2'});
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_tier_3'});
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_tier_4'});
	
	//event.remove({output: Item.of('capsule:capsule', '{color:16777215,overpowered:1,size:1,state:0}')});
	
	event.remove({output: 'skilltree:copper_ring'}); 
	event.remove({output: 'skilltree:iron_ring'}); 
	event.remove({output: 'skilltree:golden_ring'}); 
	event.remove({output: 'skilltree:simple_necklace'}); 
	event.remove({output: 'skilltree:traveler_necklace'}); 
	event.remove({output: 'skilltree:fisherman_necklace'}); 
	event.remove({output: 'skilltree:assassin_necklace'}); 
	event.remove({output: 'skilltree:healer_necklace'}); 
	event.remove({output: 'skilltree:scholar_necklace'}); 
	event.remove({output: 'skilltree:arsonist_necklace'});
	event.remove({output: 'explorerscompass:explorerscompass'});

    event.remove({output: 'gag:time_sand_pouch'})
    event.remove({output: 'gag:escape_rope'})
    event.remove({output: 'gag:hearthstone'})
    event.remove({output: 'gag:sacred_salt'})
    event.remove({output: 'gag:sacred_salve'})
    event.remove({output: 'gag:sacred_balm'})
	event.remove({output: 'gag:mining_dynamite'})
	event.remove({output: 'gag:labeling_tool'})
	
	event.remove({output: 'meadow:woodcutter'})
	
	event.remove({output: 'ironchest:dirt_chest'})
	event.remove({output: 'ironchest:trapped_dirt_chest'})
	event.remove({output: 'ironchest:trapped_crystal_chest'})
	event.remove({output: 'ironchest:diamond_to_crystal_chest_upgrade'})
	event.remove({output: 'ironchest:crystal_chest'})
	event.remove({output: 'ironchest:trapped_iron_chest'})
	event.remove({output: 'ironchest:trapped_gold_chest'})
	event.remove({output: 'ironchest:trapped_diamond_chest'})
	event.remove({output: 'ironchest:trapped_copper_chest'})
	event.remove({output: 'ironchest:trapped_obsidian_chest'})
	event.remove({output: 'ironchest:wood_to_iron_chest_upgrade'})
	
	event.remove({id: 'minecraft:bread'})
	event.remove({id: 'vintagedelight:oat_bread'})
	event.remove({id: 'regions_unexplored:barley_smelting'})
	event.remove({id: 'regions_unexplored:barley_smoking'})
	
	event.remove({output: 'minecraft:iron_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:gold_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:desh_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:ostrum_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:calorite_ingot', type: 'minecraft:smelting'})
	event.remove({output: 'ad_astra:desh_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'ad_astra:ostrum_ingot', type: 'minecraft:blasting'})
	event.remove({output: 'ad_astra:calorite_ingot', type: 'minecraft:blasting'})
	
	

	//event.remove({output: 'ad_astra:desh_fluid_pipe'})
	event.remove({output: 'ad_astra:ostrum_fluid_pipe'})
	

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
	
	event.remove({id: 'ad_astra:etrionic_blast_furnace'})
	
	event.remove({id: 'refinedstorage:quartz_enriched_iron'})
	event.remove({id: 'refinedstorage:raw_basic_processor'})
	event.remove({output: 'refinedstorage:basic_processor', type: 'minecraft:smelting'})
	event.remove({id: 'refinedstorage:raw_improved_processor'})
	event.remove({output: 'refinedstorage:improved_processor', type: 'minecraft:smelting'})
	event.remove({id: 'refinedstorage:raw_advanced_processor'})
	event.remove({output: 'refinedstorage:advanced_processor', type: 'minecraft:smelting'})
	
	
	//event.remove({output: 'minecraft:copper_ingot', type: 'minecraft:blasting'})
	//event.blasting('3x immersiveengineering:nugget_copper', 'minecraft:raw_copper').cookingTime(50)
	//event.blasting('4x immersiveengineering:nugget_copper', 'minecraft:copper_ore').cookingTime(50)
	//event.blasting('5x immersiveengineering:nugget_copper', 'minecraft:deepslate_copper_ore').cookingTime(50)
	//event.blasting('6x immersiveengineering:nugget_copper', 'minecraft:copper_ore').cookingTime(50)
	//event.blasting('7x immersiveengineering:nugget_copper', 'ad_astra:glacio_copper_ore').cookingTime(50)
	
	
	event.remove({id: 'immersiveengineering:crafting/sheetmetal_iron'})
	event.remove({id: 'immersiveengineering:crafting/sheetmetal_steel'})
	
	event.remove({id: 'industrialforegoing:diamond_gear'})
	
	event.remove({id: 'industrialforegoing:plastic'})
	event.remove({id: 'extendedcrafting:black_iron_slate'})
	event.remove({id: 'extendedcrafting:redstone_ingot'})
	event.custom({
        "type":"immersiveengineering:alloy",
        "input0":
        {
            "item":"minecraft:iron_ingot"
        },
        "input1":
        {
            "item":"minecraft:redstone_block"
        },
        "result":
        {
            "base_ingredient":
            {
                "item":"extendedcrafting:redstone_ingot"},
                "count":1
            },
            "time":400
        })
	event.remove({id: 'extendedcrafting:black_iron_ingot'})
	event.custom({
        "type":"immersiveengineering:alloy",
        "input0":
        {
            "item":"minecraft:iron_ingot"
        },
        "input1":
        {
            "tag":"forge:dyes/black"
        },
        "result":
        {
            "base_ingredient":
            {
                "item":"extendedcrafting:black_iron_ingot"},
                "count":1
            },
            "time":400
        })
	
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
	//event.remove({id: 'ad_astra:fuel_refinery'})
	event.remove({id: 'ad_astra:solar_panel'})
	event.remove({id: 'prettypipes:pipe'})
	event.remove({output: 'ad_astra:steel_rod'})
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
		
	event.remove({output: 'ad_astra:compressor'})
		event.shaped('ad_astra:compressor', [
    'ABA',
    'CDC',
    'ABA'
	], {
	A: 'pneumaticcraft:ingot_iron_compressed',
	B: 'industrialforegoing:machine_frame_pity',
	C: 'pneumaticcraft:pneumatic_cylinder',
	D: 'pneumaticcraft:advanced_air_compressor'
	})
	
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
	
	event.shapeless('railcraft:charge_spool_small', [
	'immersiveengineering:wirecoil_copper'
	])
	
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
	
	event.remove({output:'constructionwand:stone_wand'})
	event.shaped('constructionwand:stone_wand', [
	'  B',
    ' A ',
	'   '
	], {
    A: 'minecraft:stick',
	B: 'minecraft:cobblestone'
	})
  
  //primitive
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{"tag": "minecraft:planks"}
		],
		"tool": 
			{"tag": "forge:tools/knives"},
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
	B: 'immersiveengineering:plate_iron'
	})
	
	event.shapeless('minecraft:flint', [
	'minecraft:gravel',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')

	event.shapeless('minecraft:oak_planks', [
	'vinery:apple_log',
	'#forge:tools/axes'
	]).damageIngredient('#forge:tools/axes')
	
	event.shapeless('minecraft:oak_planks', [
	'vinery:apple_wood',
	'#forge:tools/axes'
	]).damageIngredient('#forge:tools/axes')
	
	//clay brick unfired
	event.shapeless('kubejs:clay_brick_unfired', [
	'minecraft:clay_ball',
	'kubejs:wooden_form'
	]).damageIngredient('kubejs:wooden_form')
	event.smelting('kubejs:clay_brick', 'kubejs:clay_brick_unfired').cookingTime(100)
	event.campfireCooking('kubejs:clay_brick', 'kubejs:clay_brick_unfired').cookingTime(200)
	
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
	event.blasting('kubejs:fireclay_brick', 'kubejs:fireclay_brick_unfired').cookingTime(50)
	
	//fireclay brick dust
	event.shapeless('3x kubejs:fireclay_brick_dust', [
	'#forge:sand',
	'minecraft:gravel',
	'kubejs:clay_dust',
	'kubejs:wooden_form'
	]).damageIngredient('kubejs:wooden_form')
	
	//fireclay brick
	event.shapeless('kubejs:fireclay_brick_dust', [
	'kubejs:fireclay_brick',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')
	
	//vanilla mc brick dust from terracota
	event.shapeless('kubejs:brick_dust', [
	'minecraft:terracotta',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')
	
	event.shapeless('1x kubejs:brick_dust', [
	'minecraft:brick',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')

	event.shapeless('4x kubejs:brick_dust', [
	'minecraft:bricks',
	'kubejs:stone_mortar'
	]).damageIngredient('kubejs:stone_mortar')

	event.shapeless('kubejs:clay_dust', [
	'minecraft:clay_ball',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')

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
	event.shapeless('railcraft:coal_dust', [
	'minecraft:coal',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')
	
	event.shapeless('railcraft:charcoal_dust', [
	'minecraft:charcoal',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')
	
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
	
	event.smelting('kubejs:primitive_ingot', 'kubejs:primitive_blend').cookingTime(100)
	
	event.shapeless('kubejs:primitive_ingot_dust', [
	'kubejs:primitive_ingot',
	'#indvil:mortars'
	]).damageIngredient('#indvil:mortars')
	
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
	event.blasting('kubejs:blastresistant_brick', 'kubejs:blastresistant_brick_unfired').cookingTime(100)
	
	event.remove({output: 'refinedstorage:silicon', type: 'minecraft:smelting'})
	event.blasting('refinedstorage:silicon', 'kubejs:raw_silicon').cookingTime(100)
		
	event.remove({id: 'ppfluids:fluid_pipe'})
	event.shaped('ppfluids:fluid_pipe', [
    "   ",
    "ABC",
    "   "
	], {
	A: 'refinedstorage:silicon',
	B: 'prettypipes:pipe',
	C: 'minecraft:blue_dye'
	})
	
	event.remove({id: 'ad_astra:nasa_workbench'})
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
	
	event.shapeless('4x minecraft:torch', [
	'#minecraft:coals',
	'#forge:ropes',
	'#forge:rods/wooden'
	])
	
/// END	
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
	event.player.give('2x natprog:stone_pebble')
  }
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	

})