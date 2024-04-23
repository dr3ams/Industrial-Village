// priority: 0

console.info('> jei.remove.categories scripts starting...')


JEIEvents.removeCategories(event => {
	
  event.remove('railcraft:blasting')
    event.remove('railcraft:blastfurnace')
   event.remove('railcraft:blast_furnace')
})