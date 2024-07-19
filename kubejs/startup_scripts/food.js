// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('food script started')

ItemEvents.modification(event => {
  event.modify('immersiveengineering:ingot_uranium', item => {
    item.foodProperties = food => 
	{
		food
		.effect('slowness', 200, 255, 10)
		.effect('mining_fatigue', 200, 255, 10)
		.effect('instant_damage', 20, 255, 10)
		.effect('nausea', 200, 255, 10)
		.effect('blindness', 200, 255, 10)
		.effect('weakness', 200, 255, 10)	
		.effect('hunger', 200, 255, 10)		
		.effect('poison', 20, 255, 10)		
		.effect('wither', 200, 255, 10)		
		.effect('glowing', 200, 255, 10)		
		.effect('darkness', 200, 255, 10)
    }
	})
  })


StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'Industrial Village'; });
