LootJS.modifiers(event => {
    //event.enableLogging();

    // chests
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot("minecraft:iron_horse_armor")
        .removeLoot("minecraft:golden_horse_armor")
        .removeLoot("minecraft:diamond_horse_armor")
        .removeLoot("minecraft:totem_of_undying")
        .removeLoot("minecraft:ender_chest")
        .removeLoot("minecraft:diamond")
		.removeLoot("minecraft:gold_block")
        .removeLoot("minecraft:diamond_block")
        .removeLoot("minecraft:iron_block")
        .removeLoot("minecraft:raw_iron_block")
        .removeLoot("minecraft:gold_ore")
        .removeLoot("minecraft:deepslate_gold_ore")
		
		.removeLoot("immersiveengineering:ingot_aluminum")
		.removeLoot("minecraft:diamond_helmet")
		.removeLoot("minecraft:diamond_chestplate")
		.removeLoot("minecraft:diamond_leggings")
		.removeLoot("minecraft:diamond_boots")
		.removeLoot("minecraft:iron_helmet")
		.removeLoot("minecraft:iron_chestplate")
		.removeLoot("minecraft:iron_leggings")
		.removeLoot("minecraft:iron_boots")
		.removeLoot("pneumaticcraft:compressed_iron_chestplate")
		.removeLoot("pneumaticcraft:compressed_iron_leggings")
		.removeLoot("pneumaticcraft:spawner_agitator")
		
		.removeLoot("pneumaticcraft:ingot_iron_compressed")
		.removeLoot("pneumaticcraft:compressed_stone")
		.removeLoot("pneumaticcraft:logistics_core")
		.removeLoot("pneumaticcraft:pressure_tube")
		.removeLoot("pneumaticcraft:spawner_agitator")
		

        .replaceLoot("minecraft:gold_ingot", LootEntry.of("minecraft:gold_nugget").limitCount([1, 10]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 12]))
        .replaceLoot("minecraft:diamond", "minecraft:coal")



})

LootJS.modifiers((event) => {
		
	const lootsize = 9;//amount of unique item stacks that will be allowed to generate from a loot table (item stacks can an item with a count so a stack of 6 bones for instance)



    event.addLootTableModifier("minecraft:chests/nether_bridge")
	.addLoot("skilltree:copper_ring").randomChance(0.1)
	.addLoot("skilltree:iron_ring").randomChance(0.1)
	.addLoot("skilltree:simple_necklace").randomChance(0.1)
	
	event.addLootTableModifier("minecraft:chests/bastion_treasure")
	.addLoot("skilltree:copper_ring").randomChance(0.1)
	.addLoot("skilltree:iron_ring").randomChance(0.1)
	.addLoot("skilltree:simple_necklace").randomChance(0.1)
		
	event.addLootTableModifier("minecraft:archaeology/desert_pyramid")
	.addLoot("skilltree:copper_ring").randomChance(0.1)
	.addLoot("skilltree:iron_ring").randomChance(0.1)
	.addLoot("skilltree:simple_necklace").randomChance(0.1)
	
	event.addBlockLootModifier('minecraft:spawner')
    .addLoot('kubejs:monster_coin')
	
	
    event.addLootTypeModifier(LootType.CHEST)
	.addLoot(
	LootEntry.of("kubejs:monster_coin").when((c) => c.randomChance(0.3)).limitCount([1, 1]),
	LootEntry.of("prettypipes:pipe").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
	
	LootEntry.of("ppfluids:fluid_pipe").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
	LootEntry.of("logicchips:chip").when((c) => c.randomChance(0.3)).limitCount([1, 5]),
	LootEntry.of("gag:mining_dynamite").when((c) => c.randomChance(0.3)).limitCount([5, 8]),
	LootEntry.of("immersiveengineering:dust_gold").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:dust_aluminum").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:component_steel").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:component_iron").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("gems:topaz_shards").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("gems:sapphire_shards").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("gems:ruby_shards").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("collectorsalbum:common_card_package").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("collectorsalbum:epic_card_package").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("collectorsalbum:rare_card_package").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("collectorsalbum:uncommon_card_package").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:advanced_catalyst").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:basic_catalyst").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:black_iron_ingot").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:black_iron_slate").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:ender_ingot").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:enhanced_redstone_ingot").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:luminessence").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("extendedcrafting:redstone_ingot").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
	LootEntry.of("minecraft:anvil").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
 	LootEntry.of("immersiveengineering:dust_steel").when((c) => c.randomChance(0.05)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:dust_silver").when((c) => c.randomChance(0.1)).limitCount([1, 4]),
	LootEntry.of("immersiveengineering:dust_lead").when((c) => c.randomChance(0.1)).limitCount([1, 4]),
	LootEntry.of("immersiveengineering:dust_iron").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:plate_silver").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:wirecoil_redstone").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:wirecoil_steel").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:plate_steel").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:plate_nickel").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:plate_lead").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:plate_iron").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:plate_gold").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:plate_electrum").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:plate_aluminum").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:mold_wire").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:mold_unpacking").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:mold_rod").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:mold_plate").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:hemp_fiber").when((c) => c.randomChance(0.2)).limitCount([1, 6]),
	LootEntry.of("immersiveengineering:ingot_aluminum").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:ingot_electrum").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:ingot_lead").when((c) => c.randomChance(0.3)).limitCount([1, 4]),
	LootEntry.of("immersiveengineering:ingot_nickel").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:ingot_silver").when((c) => c.randomChance(0.2)).limitCount([1, 4]),
	LootEntry.of("immersiveengineering:ingot_steel").when((c) => c.randomChance(0.01)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:ingot_uranium").when((c) => c.randomChance(0.3)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:jerrycan").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:mold_gear").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:fertilizer").when((c) => c.randomChance(0.2)).limitCount([2, 10]),
	LootEntry.of("immersiveengineering:stick_iron").when((c) => c.randomChance(0.3)).limitCount([2, 3]),
	LootEntry.of("immersiveengineering:stick_aluminum").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("immersiveengineering:raw_nickel").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:raw_lead").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:raw_aluminum").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("railcraft:charcoal_dust").when((c) => c.randomChance(0.2)).limitCount([1, 5]),
	LootEntry.of("quark:redstone_randomizer").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("prettypipes:high_retrieval_module").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("ppfluids:high_fluid_retrieval_module").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("pneumaticcraft:upgrade_matrix").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("railcraft:sulfur_dust").when((c) => c.randomChance(0.3)).limitCount([3, 16]),
	LootEntry.of("pneumaticcraft:plastic").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:wirecoil_structure_rope").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("pneumaticcraft:logistics_core").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:wirecoil_structure_steel").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("kubejs:diamond_dust").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("mffs:focus_matrix").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("minecraft:comparator").when((c) => c.randomChance(0.3)).limitCount([1, 1]),
	LootEntry.of("minecraft:glow_item_frame").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("minecraft:repeater").when((c) => c.randomChance(0.3)).limitCount([1, 1]),
	LootEntry.of("pneumaticcraft:bandage").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
	LootEntry.of("pneumaticcraft:capacitor").when((c) => c.randomChance(0.3)).limitCount([1, 1]),
	LootEntry.of("pneumaticcraft:compressed_iron_gear").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:wirecoil_electrum_ins").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:wirecoil_electrum").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:wirecoil_copper_ins").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:wirecoil_copper").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:stick_steel").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
 	LootEntry.of("supplementaries:bomb").when((c) => c.randomChance(0.2)).limitCount([1, 4]),
	LootEntry.of("railcraft:saltpeter_dust").when((c) => c.randomChance(0.3)).limitCount([3, 16]),
	LootEntry.of("railcraft:slag").when((c) => c.randomChance(0.3)).limitCount([4, 12]),
	LootEntry.of("refinedstorage:processor_binding").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("refinedstorage:raw_basic_processor").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("railcraft:coal_coke").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("railcraft:coal_dust").when((c) => c.randomChance(0.3)).limitCount([1, 3]),
	LootEntry.of("railcraft:ender_dust").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("railcraft:obsidian_dust").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("tetra:pristine_lapis").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:pristine_emerald").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:pristine_diamond").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:pristine_amethyst").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:metal_scrap").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:forged_mesh").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:forged_bolt").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("tetra:forged_beam").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("supplementaries:statue").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("supplementaries:hat_stand").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("supplementaries:globe").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("immersiveengineering:coke").when((c) => c.randomChance(0.3)).limitCount([1, 5]),
	LootEntry.of("immersiveengineering:coal_coke").when((c) => c.randomChance(0.3)).limitCount([1, 4]),
	LootEntry.of("kubejs:raw_silicon").when((c) => c.randomChance(0.1)).limitCount([1, 5]),
	LootEntry.of("railcraft:iron_gear").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("railcraft:gold_gear").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:fruity_granola_bar").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:potato_crate").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:beetroot_crate").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:carrot_crate").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:tomato_crate").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:grapefruit_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:lemon_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:orange_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("minecraft:diamond_axe").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("minecraft:netherite_hoe").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("natprog:diamond_saw").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("fluxnetworks:flux_point").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("fluxnetworks:flux_plug").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:apple_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("natprog:netherite_saw").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:pomegranate_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:tangerine_sapling").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:lime_sapling").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:citron_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("fruitfulfun:pomelo_sapling").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("minecraft:diamond_hoe").when((c) => c.randomChance(0.01)).limitCount([1, 1]),
	LootEntry.of("railcraft:invar_ingot").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
	LootEntry.of("immersiveengineering:ingot_hop_graphite").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("railcraft:tin_ingot").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
	LootEntry.of("pneumaticcraft:compressed_iron_gear").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("industrialforegoing:diamond_gear").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("torchmaster:megatorch").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:cucumber").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:ghostly_chili").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:cucumber_salad").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:pumpkin_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("miners_delight:baked_cave_carrot").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("miners_delight:cooked_arthropod").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:kelp_roll").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:cabbage_rolls").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:cucumber_seeds").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:deluxe_granola_bar").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("miners_delight:bone_broth_cup").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:ghost_pepper").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:oat_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:cave_soup_cup").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("miners_delight:insect_stew_cup").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:bat_soup_cup").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:fish_stew_cup").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:vegan_wrap").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:hamburger").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:tomato_seeds").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("farmersdelight:cabbage_seeds").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:pepper_jam_mason_jar").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:gearo_berry_mason_jar").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:glow_berry_mason_jar").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:vinegar_mason_jar").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("vintagedelight:chocolate_nut_granola_bar").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
	LootEntry.of("miners_delight:baked_cod_stew_cup").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:bat_cookie").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("miners_delight:improvised_barbecue_stick").when((c) => c.randomChance(0.1)).limitCount([1, 1])
	
	);
	
	let lootlist = new Array();
    event
        .addLootTypeModifier(LootType.CHEST)
        .apply((context)=>{
            if (context.lootSize() > lootsize) {

                lootlist = [];
                context.forEachLoot((loot) =>{
                    lootlist.push(loot);
                })

                context.removeLoot(ItemFilter.ALWAYS_TRUE);
                
                while (lootlist.length > lootsize){
                    let index = Math.floor(Math.random() * lootlist.length);
                    lootlist.splice(index,1);
                }
                lootlist.forEach(item =>{
                    context.addLoot(item);
                })
            }
        })
});