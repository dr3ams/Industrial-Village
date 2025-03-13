// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
	// Register new items here
	// e.create('example_item').displayName('Example Item')
	
event.create('ring_template').displayName('Ring Template').tooltip('Provided to Blacksmith to craft Golden Ring')	
event.create('necklace_template').displayName('Necklace Template').tooltip('Provided to Blacksmith to craft Golden Necklace')
event.create('plate_compressed_iron').displayName('Compressed Iron Plate')
	
event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests').rarity('Uncommon')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests').rarity('Uncommon')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests').rarity('Rare')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests').rarity('Epic')
event.create('monster_coin').displayName('Dungeon Coin').rarity('Rare')
event.create('proofofwork').displayName('Proof Of Work').rarity('Rare')
event.create('coin_task').displayName('Task Coin')

event.create('obsidian_plate').displayName('Obsidian Plate')
event.create('tin_grit').displayName('Tin Grit')
event.create('zinc_grit').displayName('Zinc Grit')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('diamond_dust').displayName('Diamond Dust')
event.create('emerald_nugget').displayName('Emerald Nugget')

event.create('clay_plate_raw').displayName('Raw Clay Plate')
event.create('clay_plate_fired').displayName('Fired Clay Plate')

event.create('coin_01').displayName('Coin')
event.create('coin_02').displayName('Couple of Coins')
event.create('coin_03').displayName('Stack of Coins')
event.create('coin_04').displayName('Pile of Coins')
event.create('coin_05').displayName('Dozen of Coins')

//mainly quest icons
event.create('medal').displayName('Medal').glow(true)
event.create('heart').displayName('Heart')
event.create('icon_goal').displayName('Icon Goal')
event.create('icon_info').displayName('Icon Info')
event.create('icon_exclamation').displayName('Test Icon')

event.create('caution').displayName('caution')
event.create('chest').displayName('chest')
event.create('fire').displayName('fire')
event.create('forbid').displayName('forbid')
event.create('heart-half').displayName('heart-half')
event.create('help').displayName('help')
event.create('key').displayName('key')
event.create('lightning').displayName('lightning')
event.create('lock').displayName('lock')
event.create('lock-2').displayName('lock-2')
event.create('manuscript').displayName('manuscript')
event.create('mark').displayName('mark')
event.create('scaling').displayName('scaling')
event.create('scroll').displayName('scroll')
event.create('skull').displayName('skull')
event.create('star').displayName('star')


event.create('flint_spear', 'sword').tier('stone').maxDamage(68).useAnimation("spear").speed(1.4)
event.create('flint_shovel', 'shovel').tier('stone').maxDamage(67)
event.create('flint_pickaxe', 'pickaxe').tier('stone').maxDamage(98)
event.create('steel_file', 'sword').tier('iron').maxDamage(120)

//primitive recipes
event.create('wooden_form').displayName('Wooden Form').maxDamage(64)
event.create('stone_mortar').displayName('Stone Mortar').maxDamage(64)
event.create('iron_mortar').displayName('Iron Mortar').maxDamage(220)

event.create('screw').displayName('Iron Screw')

event.create('brick_unfired').displayName('Unfired Brick')
event.create('brick_dust').displayName('Brick Dust')

event.create('clay_dust').displayName('Clay Dust')
event.create('clay_brick_unfired').displayName('Unfired Clay Brick')
event.create('clay_brick').displayName('Clay Brick')

event.create('fireclay_brick').displayName('Fire Clay Brick')
event.create('fireclay_brick_dust').displayName('Fire Clay Brick Dust')
event.create('fireclay_brick_unfired').displayName('Unfired Fire Clay Brick')

event.create('blastresistant_brick').displayName('Blast Resistant Brick')
event.create('blastresistant_brick_dust').displayName('Blast Resistant Brick Dust')
event.create('blastresistant_brick_unfired').displayName('Unfired Blast Resistant Brick')

event.create('primitive_ingot_dust').displayName('Primitive Ingot Dust')
event.create('primitive_blend').displayName('Primitive Blend')
event.create('primitive_ingot').displayName('Primitive Ingot')

event.create('raw_silicon').displayName('Raw Silicon')

event.create('rick').displayName('Pet Coal').unstackable().burnTime(60000).rarity('EPIC').tooltip('Named Rick')

event.create('advancedmixedmetalalloy').displayName('Advanced Mixed Metal Alloy')

        event.create('artifact_reach').displayName('Artifact of the Reach')
        .tag('curios:belt')
		.tag('artifacts:artifacts')
        .subtypes(item => {
          let collection = Utils.newList()
          item.nbt = `{CurioAttributeModifiers: [{AttributeName: 'generic.max_health',   Name: 'generic.max_health', Amount: 20, Operation: 0, UUID: [I; 42853, 1689024593, -201178, -1559272105]}]}`
          collection.add(item)
          return collection
        })



//patreon recognition
event.create('fox').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('kruscle').displayName('Kruscle Patreon Supporter Icon')
event.create('plua').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('crankonator').displayName('Kruscle Patreon Supporter Icon')
event.create('lexileexx').displayName('LexiLeeXx Patreon Supporter Icon')
	
})

ItemEvents.modification(event => {
  event.modify('kubejs:artifact_reach', item => {
    item.maxStackSize = 1
  })
})


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
