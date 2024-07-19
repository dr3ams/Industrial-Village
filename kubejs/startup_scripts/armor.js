// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {


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
	
})

ItemEvents.armorTierRegistry(event => {
  event.add('copper_armor', tier => {
    tier.durabilityMultiplier = 10
    tier.slotProtections = [2, 4, 4, 2]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_gold'
    tier.toughness = 0
    tier.knockbackResistance = 0.0
  })
})


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
