// priority: 0
console.info('Starting recipe modification scripts...')

ServerEvents.recipes(event => {
	event.remove({id: 'regions_unexplored:alpha_planks'})
	event.remove({id: 'regions_unexplored:baobab_planks'})			//
	event.remove({id: 'regions_unexplored:blackwood_planks'})		//	
	event.remove({id: 'regions_unexplored:brimwood_planks'})		//
	event.remove({id: 'regions_unexplored:cobalt_planks'})			//
	event.remove({id: 'regions_unexplored:cypress_planks'})			//
	event.remove({id: 'regions_unexplored:dead_planks'})			//
	event.remove({id: 'regions_unexplored:eucalyptus_planks'})		//
	event.remove({id: 'regions_unexplored:joshua_planks'})			//
	event.remove({id: 'regions_unexplored:kapok_planks'})			//
	event.remove({id: 'regions_unexplored:larch_planks'})			//
	event.remove({id: 'regions_unexplored:magnolia_planks'})		//
	event.remove({id: 'regions_unexplored:maple_planks'})			//
	event.remove({id: 'regions_unexplored:mauve_planks'})			//
	event.remove({id: 'regions_unexplored:palm_planks'})			//
	event.remove({id: 'regions_unexplored:pine_planks'})			//
	event.remove({id: 'regions_unexplored:redwood_planks'})			//
	event.remove({id: 'regions_unexplored:socotra_planks'})			//
	event.remove({id: 'regions_unexplored:willow_planks'})			//

	// log + saw -> stripped log
	// stripped + saw -> 4x planks
	// stripped + axe -> 1x planks
    //
 	event.shapeless('regions_unexplored:stripped_palm_log', [
	'regions_unexplored:palm_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:palm_planks', [
	'regions_unexplored:stripped_palm_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:palm_planks', [
	'regions_unexplored:stripped_palm_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
    //
 	event.shapeless('regions_unexplored:stripped_mauve_log', [
	'regions_unexplored:mauve_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:mauve_planks', [
	'regions_unexplored:stripped_mauve_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:mauve_planks', [
	'regions_unexplored:stripped_mauve_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
    //
 	event.shapeless('regions_unexplored:stripped_maple_log', [
	'regions_unexplored:maple_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:maple_planks', [
	'regions_unexplored:stripped_maple_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:maple_planks', [
	'regions_unexplored:stripped_maple_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
   	//
 	event.shapeless('regions_unexplored:stripped_magnolia_log', [
	'regions_unexplored:magnolia_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:magnolia_planks', [
	'regions_unexplored:stripped_magnolia_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:magnolia_planks', [
	'regions_unexplored:stripped_magnolia_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
  	//
 	event.shapeless('regions_unexplored:stripped_larch_log', [
	'regions_unexplored:larch_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:larch_planks', [
	'regions_unexplored:stripped_larch_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:larch_planks', [
	'regions_unexplored:stripped_larch_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
  	//
 	event.shapeless('regions_unexplored:stripped_kapok_log', [
	'regions_unexplored:kapok_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:kapok_planks', [
	'regions_unexplored:stripped_kapok_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:kapok_planks', [
	'regions_unexplored:stripped_kapok_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
 	//
 	event.shapeless('regions_unexplored:stripped_joshua_log', [
	'regions_unexplored:joshua_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:joshua_planks', [
	'regions_unexplored:stripped_joshua_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:joshua_planks', [
	'regions_unexplored:stripped_joshua_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
 	event.shapeless('regions_unexplored:stripped_eucalyptus_log', [
	'regions_unexplored:eucalyptus_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:eucalyptus_planks', [
	'regions_unexplored:stripped_eucalyptus_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:eucalyptus_planks', [
	'regions_unexplored:stripped_eucalyptus_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
 	event.shapeless('regions_unexplored:stripped_dead_log', [
	'regions_unexplored:cypress_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:dead_planks', [
	'regions_unexplored:stripped_dead_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:dead_planks', [
	'regions_unexplored:stripped_dead_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
 	event.shapeless('regions_unexplored:stripped_cypress_log', [
	'regions_unexplored:cypress_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:cypress_planks', [
	'regions_unexplored:stripped_cypress_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:cypress_planks', [
	'regions_unexplored:stripped_cypress_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
 	event.shapeless('regions_unexplored:stripped_cobalt_log', [
	'regions_unexplored:cobalt_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:cobalt_planks', [
	'regions_unexplored:stripped_cobalt_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:cobalt_planks', [
	'regions_unexplored:stripped_cobalt_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
 	event.shapeless('regions_unexplored:stripped_brimwood_log', [
	'regions_unexplored:brimwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:brimwood_planks', [
	'regions_unexplored:stripped_brimwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:brimwood_planks', [
	'regions_unexplored:stripped_brimwood_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_willow_log', [
	'regions_unexplored:willow_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:willow_planks', [
	'regions_unexplored:stripped_willow_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:willow_planks', [
	'regions_unexplored:stripped_willow_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_socotra_log', [
	'regions_unexplored:socotra_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:socotra_planks', [
	'regions_unexplored:stripped_socotra_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:socotra_planks', [
	'regions_unexplored:stripped_socotra_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_redwood_log', [
	'regions_unexplored:redwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:redwood_planks', [
	'regions_unexplored:stripped_redwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:redwood_planks', [
	'regions_unexplored:stripped_redwood_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_pine_log', [
	'regions_unexplored:pine_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:pine_planks', [
	'regions_unexplored:stripped_pine_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:pine_planks', [
	'regions_unexplored:stripped_pine_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_blackwood_log', [
	'regions_unexplored:blackwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:blackwood_planks', [
	'regions_unexplored:stripped_blackwood_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:blackwood_planks', [
	'regions_unexplored:stripped_blackwood_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
	//
	event.shapeless('regions_unexplored:stripped_baobab_log', [
	'regions_unexplored:baobab_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('4x regions_unexplored:baobab_planks', [
	'regions_unexplored:stripped_baobab_log',
	'#natprog:saw'
	]).damageIngredient('#natprog:saw')
	
	event.shapeless('regions_unexplored:baobab_planks', [
	'regions_unexplored:stripped_baobab_log',
	'#natprog:axe'
	]).damageIngredient('#natprog:axe')
})
