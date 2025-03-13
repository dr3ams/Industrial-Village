// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {

//		COPPER
 event.create('kubejs:copper_helmet', 'helmet').tier('copper_armor')
    .displayName('Copper Helmet')
    .rarity('common')
    .texture('kubejs:item/copper_helmet')
    .maxStackSize(1)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:copper_armor')

  event.create('kubejs:copper_chestplate', 'chestplate').tier('copper_armor')
    .displayName('Copper Chestplate')
    .rarity('common')
    .texture('kubejs:item/copper_chestplate')
    .maxStackSize(1)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:copper_armor')

  event.create('kubejs:copper_leggings', 'leggings').tier('copper_armor')
    .displayName('Copper Leggings')
    .rarity('common')
    .texture('kubejs:item/copper_leggings')
    .maxStackSize(1)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:copper_armor')

  event.create('kubejs:copper_boots', 'boots').tier('copper_armor')
    .displayName('Copper Boots')
    .rarity('common')
    .texture('kubejs:item/copper_boots')
    .maxStackSize(1)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:copper_armor')
	
//		URANIUM
 event.create('kubejs:uranium_helmet', 'helmet').tier('uranium_armor')
    .displayName('Uranium Helmet')
    .rarity('common')
    .texture('kubejs:item/uranium_helmet')
    .maxStackSize(1)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:uranium_armor')

  event.create('kubejs:uranium_chestplate', 'chestplate').tier('uranium_armor')
    .displayName('Uranium Chestplate')
    .rarity('common')
    .texture('kubejs:item/uranium_chestplate')
    .maxStackSize(1)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:uranium_armor')

  event.create('kubejs:uranium_leggings', 'leggings').tier('uranium_armor')
    .displayName('Uranium Leggings')
    .rarity('common')
    .texture('kubejs:item/uranium_leggings')
    .maxStackSize(1)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:uranium_armor')

  event.create('kubejs:uranium_boots', 'boots').tier('uranium_armor')
    .displayName('Uranium Boots')
    .rarity('common')
    .texture('kubejs:item/uranium_boots')
    .maxStackSize(1)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:uranium_armor')
	
	//		OBSIDIAN
 event.create('kubejs:obsidian_helmet', 'helmet').tier('obsidian_armor')
    .displayName('Obsidian Helmet')
    .rarity('common')
    .texture('kubejs:item/obsidian_helmet')
    .maxStackSize(1)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:obsidian_armor')

  event.create('kubejs:obsidian_chestplate', 'chestplate').tier('obsidian_armor')
    .displayName('Obsidian Chestplate')
    .rarity('common')
    .texture('kubejs:item/obsidian_chestplate')
    .maxStackSize(1)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:obsidian_armor')

  event.create('kubejs:obsidian_leggings', 'leggings').tier('obsidian_armor')
    .displayName('Obsidian Leggings')
    .rarity('common')
    .texture('kubejs:item/obsidian_leggings')
    .maxStackSize(1)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:obsidian_armor')

  event.create('kubejs:obsidian_boots', 'boots').tier('obsidian_armor')
    .displayName('Obsidian Boots')
    .rarity('common')
    .texture('kubejs:item/obsidian_boots')
    .maxStackSize(1)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:obsidian_armor')

		//		CARTON LOL
 event.create('kubejs:carton_helmet', 'helmet').tier('carton_armor')
    .displayName('Carton Helmet')
    .rarity('common')
    .texture('kubejs:item/carton_helmet')
    .maxStackSize(1)
    .tag('forge:helmets')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/helmets')
    .tag('kubejs:carton_armor')
	.tooltip('Shouldnt be CREATEd')

  event.create('kubejs:carton_chestplate', 'chestplate').tier('carton_armor')
    .displayName('Carton Chestplate')
    .rarity('common')
    .texture('kubejs:item/carton_chestplate')
    .maxStackSize(1)
    .tag('forge:chestplates')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/chestplates')
    .tag('kubejs:carton_armor')
	.tooltip('Shouldnt be CREATEd')

  event.create('kubejs:carton_leggings', 'leggings').tier('carton_armor')
    .displayName('Carton Leggings')
    .rarity('common')
    .texture('kubejs:item/carton_leggings')
    .maxStackSize(1)
    .tag('forge:leggings')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/leggings')
    .tag('kubejs:carton_armor')
	.tooltip('Shouldnt be CREATEd')

  event.create('kubejs:carton_boots', 'boots').tier('carton_armor')
    .displayName('Carton Boots')
    .rarity('common')
    .texture('kubejs:item/carton_boots')
    .maxStackSize(1)
    .tag('forge:boots')
    .tag('forge:armor')
    .tag('forge:armors')
    .tag('forge:armors/boots')
    .tag('kubejs:carton_armor')
	.tooltip('Shouldnt be CREATEd')
//////////////END	
})

ItemEvents.armorTierRegistry(event => {
  event.add('copper_armor', tier => {
    tier.durabilityMultiplier = 10
    tier.slotProtections = [2, 3, 3, 2]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_gold'
    tier.toughness = 0
    tier.knockbackResistance = 0.0
  })
  
    event.add('uranium_armor', tier => {
    tier.durabilityMultiplier = 11
    tier.slotProtections = [1, 2, 3, 2]
    tier.enchantmentValue = 19
    tier.equipSound = 'minecraft:item.armor.equip_gold'
    tier.toughness = 0
    tier.knockbackResistance = 0.0
  })
  
    event.add('obsidian_armor', tier => {
    tier.durabilityMultiplier = 15
    tier.slotProtections = [3, 5, 5, 4]
    tier.enchantmentValue = 20
    tier.equipSound = 'minecraft:item.armor.equip_diamond'
    tier.toughness = 1
    tier.knockbackResistance = 0.5
  })
  
    event.add('carton_armor', tier => {
    tier.durabilityMultiplier = 2
    tier.slotProtections = [1, 1, 1, 1]
    tier.enchantmentValue = 10
    tier.equipSound = 'minecraft:item.armor.equip_leather'
    tier.toughness = 0
    tier.knockbackResistance = 0
  })
})


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
