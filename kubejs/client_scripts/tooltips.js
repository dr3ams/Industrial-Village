ItemEvents.tooltip(event =>{

	event.add(['railcraft:steel_ingot'], 'This Steel Ingot is fake and has no real uses, trust me.')
	
	//event.add(['gems:ruby_upgrade_smithing_template', 'gems:sapphire_upgrade_smithing_template', 'gems:topaz_upgrade_smithing_template'], 'Can be found in Ancient Cities chests')
	
	event.addAdvanced('farmersdelight:straw', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').green(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• You may collect ').white(),
        Text.of('straw ').green(),
		Text.of('when harvesting grassy plants (Tall Grass, Wheat and Rice)').white()
		])
      text.add(2, [
        Text.of('• Can be used to make ').white(),
		Text.of('Rope').gold()
      ])
    }
  })
  
  	event.addAdvanced('kubejs:coin_task', (item, advanced, text) => {
	text.add(1, [
        Text.of('Task coin').blue()
    ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired by doing various ').white(),
		Text.of('Bounties ').blue(),
		Text.of('from the ').white(),
		Text.of('Bounty ').gold(),
        Text.of('board').white()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ Coins Exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green()
      ])
    }
  })	
  
	event.addAdvanced('farmersdelight:rope', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').green(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Climbable block, behaving in a similar manner to Vines and Ladders').white()
		])
      text.add(2, [
        Text.of('• To climb them, simply hold Jump while touching it').white()
      ])
	  text.add(3, [
        Text.of('• When placing Rope, you can use more ropes against the first one to deploy them downward').white()
      ])
	  text.add(4, [
        Text.of('• To suppress rope deployment, simply sneak while placing it').white()
      ])
    }
  })
	
	event.addAdvanced(['gems:ruby_upgrade_smithing_template', 'gems:sapphire_upgrade_smithing_template', 'gems:topaz_upgrade_smithing_template'], (item, advanced, text) => {
      text.add(1, [
        Text.of('Can be found in ').white(),
        Text.of('Ancient Cities ' ).aqua().bold(true),
        Text.of('chests').white()
      ])
	})
	
	event.addAdvanced('gems:dragonyx_upgrade_smithing_template', (item, advanced, text) => {
      text.add(1, [
        Text.of('Can be found in ').white(),
        Text.of('End Cities ').darkPurple(),
        Text.of('chests').white()
      ])
	})
	
	event.addAdvanced('#skilltree:gems', (item, advanced, text) => {
      text.add(1, [
        Text.of('• Use ').yellow(),
        Text.of('Smithing Table ').green().bold(true),
        Text.of('to insert it').yellow()
      ])
	})
  
  	event.addAdvanced(['skilltree:quiver', 'skilltree:fiery_quiver', 'skilltree:armored_quiver', 'skilltree:gilded_quiver', 'skilltree:toxic_quiver', 'skilltree:diamond_quiver', 'skilltree:healing_quiver', 'skilltree:silent_quiver', 'skilltree:bone_quiver'], (item, advanced, text) => {
      text.add(1, [
        Text.of('• Place together with ').white(),
		Text.of('arrows ').blue(),
		Text.of('in a ').white(),
        Text.of('crafting grid').gold()
      ])
	})
	
  	event.addAdvanced(['gems:topaz_shards', 'gems:sapphire_shards', 'gems:ruby_shards'], (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('Can be acquired from: ').green()
		])
      text.add(2, [
        Text.of('• Mining underground').white(),
      ])
	  text.add(3, [
        Text.of('• Breaking Tetra geodes').white(),
      ])
	  text.add(4, [
        Text.of('• Geodes in Mining Dimension').white(),
      ])
	  text.add(5, [
        Text.of('• Crushing Fossils').white(),
      ])
	  text.add(6, [
        Text.of('•  Minecolonies Sifter').white(),
      ])
	  text.add(7, [
        Text.of('• Cave Urn loot').white(),
      ])
	  text.add(8, [
        Text.of('• Gold Quest Coin reward').white(),
      ])
	  text.add(9, [
        Text.of('• Dungeon Coin reward').white(),
      ])
	  text.add(10, [
        Text.of('• Industrial Foregoing laser drill').white()
      ])
    }
  })

   event.addAdvanced('explorerscompass:explorerscompass', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('• Allows you to locate ').white(),
        Text.of('structures.' ).green().bold(true)
		])
      text.add(2, [
        Text.of('• Can be bought for a ').white(),
		Text.of('Quest coins ').gold(),
		Text.of('in the questbook').white()
      ])
    }
  })

   event.addAdvanced('naturescompass:naturescompass', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
      ])
    } else {
      text.add(1, [
        Text.of('• Allows you to search for a ').white(),
        Text.of('biome`s ').green().bold(true),
        Text.of('location').white()
      ])
    }
  })

   event.addAdvanced('#forge:pebbles', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• By holding a ').white(),
        Text.of('Pebble ').green().bold(true),
        Text.of('in both of your hands and ').white(),
        Text.of('holding right-click ').gold(),
		Text.of('you will nap the stones which has a chance to produce ').white(),
        Text.of('Flint').green().bold(true),
      ])
	    text.add(2, [
        Text.of('• You will need ').white(),
        Text.of('Flint ').green().bold(true),
        Text.of('to make your first ').white(),
        Text.of('Hatchet ').gold(),
		Text.of('to gather ').white(),
		Text.of('Wood ').blue(),
		Text.of('and to make ').white(),
        Text.of('Planks').yellow()
      ])
    }
  })

   event.addAdvanced('kubejs:proofofwork', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
		text.add(1, [
		Text.of('• Exchange it in ').white(),
        Text.of('Coins exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book. ').green()
      ])
	  	text.add(2, [
        Text.of('Can be acquired as: ').white()
      ])
      text.add(3, [
        Text.of('• one-time ').green().bold(true),
        Text.of('quest reward in  ').white(),
        Text.of('Minecolonies related ').gold(),
        Text.of('quests.').white()
      ])
	    text.add(4, [
        Text.of('• repeatable ').blue().bold(true),
        Text.of('random reward from some ').white(),
        Text.of('Minecolonies professions ').gold(),
        Text.of('(sifter, netherminer, miner)').white()
      ])
    }
  })
  
  event.addAdvanced('kubejs:monster_coin', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired from ').white(),
        Text.of('dungeon chests ').gold(),
        Text.of('and breaking ').white(),
        Text.of('spawners').gold()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('Coins exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)
      ])
    }
  })
  
    event.addAdvanced('#chalk:chalks', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Click on the ').white(),
          Text.of('full side ').green(),
          Text.of('of a block to draw a mark.').white()
        ])
        text.add(2, [
          Text.of('• The ').white(),
          Text.of('direction ').green(),
          Text.of('does matter and will point the arrow in that direction.').white()
        ])
      }
    })
  
	event.addAdvanced('natprog:flint_hatchet', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Will help you to gather your first ').white(),
          Text.of('wood').green()
        ])
        text.add(2, [
          Text.of('• Harvest ').white(),
          Text.of('Logs ').green(),
          Text.of('or straight away make ').white(),
		  Text.of('Stripped Logs ').green(),
		  Text.of('and then craft it into ').white(),
		  Text.of('Planks').yellow()
        ])
      }
    })
	
	event.addAdvanced('#minecraft:planks', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Crafted from ').white(),
          Text.of('Stripped Logs ').green(),
          Text.of('with a ').white(),
		  Text.of('Hatchet ').yellow(),
		  Text.of('and later with a ').white(),
		  Text.of('Saw ').yellow(),
		  Text.of('for increased yield').white()
        ])
		text.add(2, [
          Text.of('• You will automate it later with more ').white(),
          Text.of('advanced machinery').blue()
        ])
      }
    })
	
	event.addAdvanced('#minecraft:logs', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• Craft to ').white(),
          Text.of('Stripped Logs ').green(),
          Text.of('to produce ').white(),
		  Text.of('Planks').yellow()
        ])
      }
    })
	
	event.addAdvanced('railcraft:saltpeter_dust', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• You can get it from ').white(),
          Text.of('Saltpeter Ore ').yellow(),
          Text.of('which can be found in water-type biomes').white()
        ])
      }
    })
		
	event.addAdvanced('railcraft:sulfur_dust', (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, [
          Text.of('Hold ').gray(),
          Text.of('[Shift] ').yellow(),
          Text.of('to see more info.').gray()
        ])
      } else {
        text.add(1, [
          Text.of('• You can get it from ').white(),
          Text.of('Sulfur Ore ').yellow(),
          Text.of('which can be found underground').white()
        ])
      }
    })
})