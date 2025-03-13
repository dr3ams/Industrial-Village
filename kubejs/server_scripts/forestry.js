// priority: 0

console.info("forestry recipes script is loading...");

	const removals = [
	 
	 
	 
	];



	ServerEvents.recipes((event) => {
	  // Change recipes here
	  removals.forEach((element) => {
		event.remove({ output: element });
	  });




////////////////	END
});
    