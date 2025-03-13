ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
		
	event.removeAllTagsFrom('mffs:steel_compound') 
	event.removeAllTagsFrom('mffs:steel_ingot') 
	event.removeAllTagsFrom('railcraft:lead_ingot') 
	event.removeAllTagsFrom('railcraft:lead_plate') 
	event.removeAllTagsFrom('railcraft:lead_ore') 
	event.removeAllTagsFrom('railcraft:deepslate_lead_ore') 
	event.removeAllTagsFrom('railcraft:lead_raw')
	event.removeAllTagsFrom('railcraft:iron_plate')
	event.removeAllTagsFrom('railcraft:lead_block') 
	event.removeAllTagsFrom('railcraft:lead_nugget') 
	event.removeAllTagsFrom('railcraft:steel_ingot') 
	event.removeAllTagsFrom('railcraft:steel_plate') 
	event.removeAllTagsFrom('railcraft:steel_block') 
	event.removeAllTagsFrom('railcraft:steel_nugget') 
	event.removeAllTagsFrom('railcraft:nickel_ore') 
	event.removeAllTagsFrom('railcraft:nickel_ingot') 
	event.removeAllTagsFrom('railcraft:deepslate_nickel_ore') 
	event.removeAllTagsFrom('railcraft:nickel_raw') 
	event.removeAllTagsFrom('railcraft:nickel_block') 
	event.removeAllTagsFrom('railcraft:nickel_nugget') 
	event.removeAllTagsFrom('railcraft:nickel_plate') 
	event.removeAllTagsFrom('railcraft:silver_plate') 
	event.removeAllTagsFrom('railcraft:silver_ingot') 
	event.removeAllTagsFrom('railcraft:silver_ore') 
	event.removeAllTagsFrom('railcraft:deepslate_silver_ore') 
	event.removeAllTagsFrom('railcraft:silver_raw') 
	event.removeAllTagsFrom('railcraft:silver_block') 
	event.removeAllTagsFrom('railcraft:silver_nugget') 
	event.removeAllTagsFrom('ad_astra:steel_ingot') 
	event.removeAllTagsFrom('ad_astra:steel_plate') 
	event.removeAllTagsFrom('ad_astra:steel_rod')
	event.removeAllTagsFrom('ad_astra:steel_nugget')
	event.removeAllTagsFrom('ad_astra:steel_block')
	event.removeAllTagsFrom('ad_astra:iron_plate')
	event.removeAllTagsFrom('ad_astra:iron_rod')
	event.removeAllTagsFrom('buildersaddition:iron_rod')
	
	
	event.removeAllTagsFrom('forestry:resource_storage_bronze')
	event.removeAllTagsFrom('forestry:raw_tin_block')
	event.removeAllTagsFrom('forestry:resource_storage_tin')
	event.removeAllTagsFrom('forestry:gear_bronze')
	event.removeAllTagsFrom('forestry:gear_copper')
	event.removeAllTagsFrom('forestry:gear_tin')
	event.removeAllTagsFrom('forestry:raw_tin')
	event.removeAllTagsFrom('forestry:ingot_tin')
	event.removeAllTagsFrom('forestry:ingot_bronze')
	
	event.removeAllTagsFrom('pneumaticcraft:copper_nugget')
	event.removeAllTagsFrom('skilltree:copper_nugget')
	
	event.removeAllTagsFrom('industrialforegoing:plastic')
	event.add('forge:plastic', 'pneumaticcraft:plastic')
	
	event.add('minecraft:flowers', 'regions_unexplored:clover')
	
	event.get('indvil:mortars')
		.add('kubejs:stone_mortar')
		.add('kubejs:iron_mortar')
		 
	event.get('forge:ropes')
		.add('farmersdelight:rope')
		.add('immersiveengineering:hemp_fiber')	 

	event.add('immersiveengineering:toolbox/tools', 'kubejs:steel_file')
	event.get('farmersdelight:tools/pickaxes')
	.add('minecraft:iron_pickaxe')
	.add('minecraft:golden_pickaxe')
	.add('minecraft:diamond_pickaxe')
	.add('minecraft:netherite_pickaxe')
	.add('immersiveengineering:pickaxe_steel')
	.add('natprog:bone_pickaxe')
	.add('kubejs:flint_pickaxe')
	
	//event.add('curios:hipstrap', 'minecraft:lantern')
	
	event.remove('pneumaticcraft:upgrade_components', 'minecraft:lapis_lazuli')

	event.get('natprog:considered_as_pickaxe')
	.add('industrialforegoing:infinity_drill')
	.add('immersiveengineering:drill')
	.add('pneumaticcraft:jackhammer')
	
	event.get('natprog:considered_as_axe')
	.add('industrialforegoing:infinity_saw')
	
	event.add('forge:tools/axes', 'natprog:flint_hatchet')
	

	
	event.get('minecraft:tools')
		.add('natprog:bronze_saw') 
		.add('natprog:copper_saw')
		.add('natprog:diamond_saw')
		.add('natprog:flint_saw')
		.add('natprog:gold_saw')
		.add('natprog:iron_saw')
		.add('natprog:netherite_saw')
		.add('natprog:steel_saw')
		
		event.get('forge:tools')
		.add('natprog:bronze_saw') 
		.add('natprog:copper_saw')
		.add('natprog:diamond_saw')
		.add('natprog:flint_saw')
		.add('natprog:gold_saw')
		.add('natprog:iron_saw')
		.add('natprog:netherite_saw')
		.add('natprog:steel_saw')

	event.get('forge:fertilizer')
		.add('industrialforegoing:fertilizer')
		.add('minecraft:bone_meal')
		.add('forestry:fertilizer_compound')
		.add('immersiveengineering:fertilizer')

///////////////// END		
})