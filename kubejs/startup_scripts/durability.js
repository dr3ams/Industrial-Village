ItemEvents.modification(event => {
	event.modify('minecraft:bow', item => {
    item.maxDamage = 384
  })	
	event.modify('minecraft:shield', item => {
    item.maxDamage = 336	
  })	
	event.modify('minecraft:crossbow', item => {
    item.maxDamage = 465
  })	
	event.modify('gems:golden_shield', item => {
    item.maxDamage = 100
  })	
	event.modify('gems:iron_shield', item => {
    item.maxDamage = 300
  })		
	event.modify('gems:iron_bow', item => {
    item.maxDamage = 300
  })	
	event.modify('gems:golden_bow', item => {
    item.maxDamage = 100
  })
})