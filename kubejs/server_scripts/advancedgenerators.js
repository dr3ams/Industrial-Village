// priority: 0
console.info('Starting advgenerators recipe modification scripts...')

ServerEvents.recipes(event => {

	//adv generators
	event.remove({output: 'advgenerators:iron_frame'})
	event.remove({output: 'advgenerators:iron_tubing'})
	event.remove({output: 'advgenerators:iron_wiring'})
	event.remove({output: 'advgenerators:controller'})
	event.remove({output: 'advgenerators:pressure_valve'})
	event.remove({output: 'advgenerators:advanced_pressure_valve'})
	event.remove({output: 'advgenerators:turbine_blade'})
	event.remove({output: 'advgenerators:turbine_rotor_tier2'})
	event.remove({output: 'advgenerators:turbine_rotor_tier3'})
	event.remove({output: 'advgenerators:turbine_rotor_tier4'})
	event.remove({output: 'advgenerators:turbine_rotor_tier5'})
	event.remove({output: 'advgenerators:power_io'})
	event.remove({output: 'advgenerators:turbine_tier2'})
    event.remove({output: 'advgenerators:turbine_tier3'})
    event.remove({output: 'advgenerators:turbine_tier4'})
    event.remove({output: 'advgenerators:turbine_tier5'})
	event.remove({id: 'advgenerators:turbines/kit_tier2'})
	event.remove({id: 'advgenerators:turbines/kit_tier3'})
	event.remove({id: 'advgenerators:turbines/kit_tier4_invar'})
	event.remove({id: 'advgenerators:turbines/kit_tier4_steel'})
	event.remove({id: 'advgenerators:turbines/kit_tier5_enderium'})
	event.remove({id: 'advgenerators:turbines/kit_tier5_alloy'})
	event.remove({output: 'advgenerators:power_capacitor_tier1'})
    event.remove({output: 'advgenerators:power_capacitor_tier2'})
    event.remove({output: 'advgenerators:power_capacitor_tier3'})
	event.remove({id: 'advgenerators:capacitors/capacitor_kit_tier2_alloy'})
	event.remove({id: 'advgenerators:capacitors/capacitor_kit_tier2_electrum'})
    event.remove({id: 'advgenerators:capacitors/capacitor_kit_tier3_signalum'})
	event.remove({id: 'advgenerators:capacitors/capacitor_kit_tier3_alloy'})
	event.remove({id: 'extendedcrafting:ultimate_component'})
	
	event.replaceInput({}, 'advgenerators:iron_tubing', 'ad_astra:calorite_plate');
	event.replaceInput({}, 'advgenerators:controller', 'industrialforegoing:machine_frame_supreme');
    event.replaceInput({}, 'advgenerators:iron_wiring', 'immersiveengineering:wirecoil_redstone');
    event.replaceInput({}, 'advgenerators:iron_frame', 'ad_astra:desh_plate');
	event.replaceInput({}, 'advgenerators:pressure_valve', 'pneumaticcraft:reinforced_pressure_tube');
    event.replaceInput({}, 'advgenerators:advanced_pressure_valve', 'pneumaticcraft:advanced_pressure_tube');
	event.replaceInput({}, 'advgenerators:turbine_blade', 'pneumaticcraft:turbine_blade');
	
	event.remove({id: 'advgenerators:heating_chamber'})
	event.shaped('advgenerators:heating_chamber', [
    "ABA",
    "CDC",
    "ACA"
	], {
	A: 'ad_astra:desh_plate',
	B: 'pneumaticcraft:reinforced_pressure_tube',
	C: 'ad_astra:calorite_plate',
	D: 'immersiveengineering:furnace_heater'
	})
	
	event.remove({id: 'advgenerators:modules/fuel_tank'})
	event.shaped('advgenerators:fuel_tank', [
    "ABA",
    "BCB",
    "ADA"
	], {
	A: 'ad_astra:desh_plate',
	B: 'pneumaticcraft:reinforced_pressure_tube',
	C: 'ad_astra:desh_tank',
	D: 'ad_astra:calorite_plate'
	})
	
	event.remove({id: 'advgenerators:modules/fe_output'})
	event.shaped('advgenerators:fe_output', [
    "ABA",
    "CDC",
    "AEA"
	], {
	A: 'ad_astra:desh_plate',
	B: 'ad_astra:calorite_plate',
	C: 'ad_astra:desh_cable',
	D: 'immersiveengineering:generator',
	E: 'immersiveengineering:component_electronic'
	})
	
	event.shaped('advgenerators:power_capacitor_tier1', [
    "ABA",
    "CDC",
    "AEA"
	], {
	A: 'ad_astra:calorite_plate',
	B: 'pneumaticcraft:printed_circuit_board',
	C: 'ad_astra:desh_cable',
	D: 'industrialforegoing:machine_frame_supreme',
	E: 'immersiveengineering:capacitor_hv'
	})
})
