// priority: 0
console.info('Starting armor recipes scripts...')

ServerEvents.recipes(event => {

	event.remove({id: 'minecolonies:chainmailhelmet'})
	event.remove({id: 'minecolonies:chainmailchestplate'})
	event.remove({id: 'minecolonies:chainmailleggings'})
	event.remove({id: 'minecolonies:chainmailboots'})
	event.remove({id: 'gems:shaped/chainmail_helmet'})
	event.remove({id: 'gems:shaped/chainmail_chestplate'})
	event.remove({id: 'gems:shaped/chainmail_leggings'})
	event.remove({id: 'gems:shaped/chainmail_boots'})

	event.shaped('kubejs:copper_chestplate', [
    "C C",
    "CPC",
    "CPC"
	], {
	C: 'minecraft:copper_ingot',
	P: 'immersiveengineering:plate_copper'
	})
	
	event.shaped('kubejs:copper_helmet', [
    "CPC",
    "C C",
    "   "
	], {
	C: 'minecraft:copper_ingot',
	P: 'immersiveengineering:plate_copper'
	})
	
	event.shaped('kubejs:copper_leggings', [
    "PPP",
    "C C",
    "C C"
	], {
	C: 'minecraft:copper_ingot',
	P: 'immersiveengineering:plate_copper'
	})
	
	event.shaped('kubejs:copper_boots', [
    "   ",
    "C C",
    "C C"
	], {
	C: 'minecraft:copper_ingot'
	})
//////////////////////////////////////////////////////////////////////////////
	event.shaped('kubejs:uranium_chestplate', [
    "C C",
    "CPC",
    "CPC"
	], {
	C: 'immersiveengineering:ingot_uranium',
	P: 'immersiveengineering:plate_uranium'
	})
	
	event.shaped('kubejs:uranium_helmet', [
    "CPC",
    "C C",
    "   "
	], {
	C: 'immersiveengineering:ingot_uranium',
	P: 'immersiveengineering:plate_uranium'
	})
	
	event.shaped('kubejs:uranium_leggings', [
    "PPP",
    "C C",
    "C C"
	], {
	C: 'immersiveengineering:ingot_uranium',
	P: 'immersiveengineering:plate_uranium'
	})
	
	event.shaped('kubejs:uranium_boots', [
    "   ",
    "C C",
    "C C"
	], {
	C: 'immersiveengineering:ingot_uranium'
	})
//////////////////////////////////////////////////////////////////////////////

	event.remove({id: 'minecraft:iron_chestplate'})
	event.remove({id: 'minecraft:iron_helmet'})
	event.remove({id: 'minecraft:iron_leggings'})
	event.remove({id: 'minecraft:iron_boots'})
	
	event.shaped('minecraft:iron_chestplate', [
    "C C",
    "CPC",
    "CPC"
	], {
	C: 'minecraft:iron_ingot',
	P: 'immersiveengineering:plate_iron'
	})
	
	event.shaped('minecraft:iron_helmet', [
    "CPC",
    "C C",
    "   "
	], {
	C: 'minecraft:iron_ingot',
	P: 'immersiveengineering:plate_iron'
	})
	
	event.shaped('minecraft:iron_leggings', [
    "PPP",
    "C C",
    "C C"
	], {
	C: 'minecraft:iron_ingot',
	P: 'immersiveengineering:plate_iron'
	})
	
	event.shaped('minecraft:iron_boots', [
    "   ",
    "C C",
    "C C"
	], {
	C: 'minecraft:iron_ingot'
	})
//////////////////////////////////////////////////////////////////////////////
	event.shaped('kubejs:obsidian_chestplate', [
    "C C",
    "CCC",
    "CCC"
	], {
	C: 'kubejs:obsidian_plate'
	})
	
	event.shaped('kubejs:obsidian_helmet', [
    "CCC",
    "C C",
    "   "
	], {
	C: 'kubejs:obsidian_plate'
	})
	
	event.shaped('kubejs:obsidian_leggings', [
    "CCC",
    "C C",
    "C C"
	], {
	C: 'kubejs:obsidian_plate'
	})
	
	event.shaped('kubejs:obsidian_boots', [
    "   ",
    "C C",
    "C C"
	], {
	C: 'kubejs:obsidian_plate'
	})
//////////////////////////////////////////////////////////////////////////////
// THE END
})
