ItemEvents.tooltip(event =>{

	event.add(['railcraft:steel_ingot'], 'This Steel Ingot is fake and has no real uses, trust me.')
	
	event.add(['gems:ruby_upgrade_smithing_template', 'gems:sapphire_upgrade_smithing_template', 'gems:topaz_upgrade_smithing_template'], 'Can be found in Ancient Cities chests')
	event.add(['gems:dragonyx_upgrade_smithing_template'], 'Can be found in End Cities chests')

   event.addAdvanced('#forge:pebbles', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gold(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gold()
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
          Text.of('Click on the ').white(),
          Text.of('full side ').green(),
          Text.of('of a block to draw a mark.').white()
        ])
        text.add(2, [
          Text.of('The ').white(),
          Text.of('direction ').green(),
          Text.of('does matter and will point the arrow in that direction.').white()
        ])
      }
    })
  
  
})