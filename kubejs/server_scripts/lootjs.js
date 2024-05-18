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
		
		.addLoot("skilltree:copper_ring")
		.addLoot("skilltree:iron_ring")
		.addLoot("skilltree:simple_necklace")

})