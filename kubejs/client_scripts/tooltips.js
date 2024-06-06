ItemEvents.tooltip(event =>{

	event.add(['railcraft:steel_ingot'], 'This Steel Ingot is fake and has no real uses, trust me.')
	
	//event.add(['gems:ruby_upgrade_smithing_template', 'gems:sapphire_upgrade_smithing_template', 'gems:topaz_upgrade_smithing_template'], 'Can be found in Ancient Cities chests')
	
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
        Text.of('By holding a ').white(),
        Text.of('Pebble ').green().bold(true),
        Text.of('in both of your hands and ').white(),
        Text.of('holding right-click ').gold(),
		Text.of('you will nap the stones which has a chance to produce ').white(),
        Text.of('Flint').green().bold(true),
		Text.of('.').white()
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
	
})