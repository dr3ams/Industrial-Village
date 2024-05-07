// priority: 10
console.info('Starting planks.js...');

let script_id = "kubejs:planks.js/";

let variants = [{log:"_log",wood:"_wood"},{log:"_stem",wood:"_hyphae"}];
let variants_array = ["_log","_wood","_stem","_hyphae"];

let left_axe =      {   item : "tetra:modular_double",
                        type : "forge:partial_nbt",
                        nbt  : {"double/head_left":"double/basic_axe_left","double/handle":"double/basic_handle"}
                    };
let right_axe =     {   item : "tetra:modular_double",
                        type : "forge:partial_nbt",
                        nbt  : {"double/head_right":"double/basic_axe_right","double/handle":"double/basic_handle"}
                    }

let axes =                 [   { item : "natprog:flint_hatchet" },
                               { tag : "forge:tools/axes" },
                               left_axe,
                               right_axe
                           ];

// adze

let damage_axes = ((recipe)=>{
    let rec = recipe;
    axes.forEach((axe)=>rec = rec.damageIngredient(axe));
});

ServerEvents.recipes( event => {

let planks_tree_data = {
    "minecraft" : {
        skipSlabsToPlanks:true, // some mod already does this recipe
        removeStrippingWithSaw:true,
        removeStrippingWithCuttingBoard:true,
        recipe_lambda:((type)=>[
            "minecraft:axe/stripped_"+type+"_to_"+type+"_planks",
            "minecraft:axe/stripped_"+type+"_log_to_"+type+"_planks",
            "minecraft:axe/stripped_"+type+"_wood_to_"+type+"_planks",
            "minecraft:saw/stripped_"+type+"_wood_to_"+type+"_planks"
        ])
    },
    "ad_astra" : {
        recipe_lambda:((type)=>[
            "ad_astra:recipes/"+type+"_planks"
        ])
    },
    "regions_unexplored" : {
    },
	"fruitfulfun" : {
    },
	"vinery" : {
    }
}

for (const mod_id in global.tree_types) {
    let mod_group = planks_tree_data[mod_id];
    global.tree_types[mod_id].forEach((element)=> {
        // REMOVE PLANK RECIPES
    	event.remove({id: mod_id+":"+element.type+"_planks"});
        if ("recipe_lambda" in mod_group) {
            mod_group.recipe_lambda(element.type).forEach((removeId)=>
                event.remove({id: removeId})
            );
        }

        // LOGS WILL BECOME ALL STRIPPED LOGS/WOOD OF THE CURRENT TYPE
        // UNLESS THERE ARE NO STRIPPED VARIANTS, THEN IT IS THE NON-STRIPPED LOGS/WOOD
        let logs=[];
        if ("log" in element) {
            logs = element.log;
        } else {
            let stripped = Item.exists(mod_id+":stripped_"+element.type+"_log")?"stripped_":"";
            variants.forEach((variant)=>{
                if (Item.exists(mod_id+":"+stripped+element.type+variant.wood)) {
                    logs.push({item:mod_id+":"+stripped+element.type+variant.wood});
                }
                if (Item.exists(mod_id+":"+stripped+element.type+variant.log)) {
                    logs.push({item:mod_id+":"+stripped+element.type+variant.log});
                    if ( ( (!("chipped" in element)) && (Item.exists("chipped:chipped_"+stripped+element.type+variant.log)) ) || (element.chipped) ) {
                        logs.push({tag:"chipped:"+stripped+element.type+variant.log});
                    }
                }
            });
        }

        // TWO SLABS MAKE A PLANK
        if (!mod_group.skipSlabsToPlanks) {
            if (Item.exists(mod_id+":"+element.type+"_slab")) {
                event.custom({
                    "type": "kubejs:shapeless",
                    "ingredients": [
                        { item : mod_id+":"+element.type+"_slab" },
                        { item : mod_id+":"+element.type+"_slab" }
                    ],
                    "result": { "item": mod_id+":"+element.type+"_planks", "count": 1 }
                }).id(script_id+mod_id+"_"+element.type+"_slab_to_planks");
            }
        }

        // STRIPPED USING AXE/SAW
        variants_array.forEach((variant)=>{
            if (mod_group.removeStrippingWithSaw) {
                event.remove({id: mod_id+":saw/"+element.type+variant+"_to_stripped_"+element.type+variant});
            }
            if ( (Item.exists(mod_id+":stripped_"+element.type+variant)) && (Item.exists(mod_id+":"+element.type+variant)) ) {
                damage_axes(
                    event.custom({
                        "type": "kubejs:shapeless",
                        "ingredients": [
                            { item : mod_id+":"+element.type+variant },
                            [axes,{tag:"natprog:saw"}]
                        ],
                        "result": { "item": mod_id+":stripped_"+element.type+variant }
                    }).id(script_id+"stripped_"+mod_id+"_"+element.type+variant)
                    .damageIngredient({ tag : "natprog:saw" })
                );
            }
        });

        // AXE/SAW ON LOGS/WOOD TO MAKE STRIPPED LOGS/WOOD AND BARK USING CUTTING_BOARD
        variants_array.forEach((variant)=>{
            if (mod_group.removeStrippingWithCuttingBoard) {
                event.remove({id: "farmersdelight:cutting/"+element.type+variant});
            }
            if ( (Item.exists(mod_id+":stripped_"+element.type+variant)) && (Item.exists(mod_id+":"+element.type+variant)) ) {
                let count = 0;
                [   {   type   : "farmersdelight:tool_action",
                        action : "axe_strip"
                    },
                    left_axe,
                    right_axe
                ].forEach((tool)=> {
                    count = count + 1;
                    event.custom({
                        "type": "farmersdelight:cutting",
                        "ingredients": [
                            {"item": mod_id+":"+element.type+variant}
                        ],
                        "tool": tool,
                        "result": [
                            { "item": mod_id+":stripped_"+element.type+variant },
                            { "item": "farmersdelight:tree_bark" }
                        ],
                        "sound": "minecraft:item.axe.strip"
                    })  .id(script_id+"strip_"+mod_id+"_"+element.type+variant+"_"+count)
                        .damageIngredient(tool);
                });
            }
        });

        // SAW LOGS INTO FOUR PLANKS
        event.custom({
            "type": "kubejs:shapeless",
            "ingredients": [
                { tag : "natprog:saw" },
                logs
            ],
            "result": { "item": mod_id+":"+element.type+"_planks", "count": 4 }
        })  .id(script_id+"saw_"+mod_id+"_"+element.type+"_logs_to_planks")
            .damageIngredient({ tag : "natprog:saw" });

        // AXE LOGS INTO PLANKS
        damage_axes(
            event.custom({
                "type": "kubejs:shapeless",
                "ingredients": [
                    axes,
                    logs
                ],
                "result": { "item": mod_id+":"+element.type+"_planks", "count": 1 }
            })  .id(script_id+"axe_"+mod_id+"_"+element.type+"_logs_to_planks")
        );
    });
}

// SLABS TO PLANKS FOR DYED WOOD
["red","orange","yellow","lime","green","cyan","light_blue","blue",
"purple","magenta","pink","brown","white","light_gray","gray","black"].forEach((dye)=> {
    // TWO SLABS MAKE A PLANK
    event.custom({
        type: "kubejs:shapeless",
        ingredients: [
            { item : "regions_unexplored:"+dye+"_painted_slab" },
            { item : "regions_unexplored:"+dye+"_painted_slab" }
        ],
        result: { item: "regions_unexplored:"+dye+"_painted_planks", "count": 1 }
    })  .id(script_id+dye+"_slabs_to_planks");
});

// KNIFE ON PLANKS USING CUTTING_BOARD TO MAKE WOODEN FORM
event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
        {"tag": "minecraft:planks"}
    ],
    "tool": {
        item : "tetra:modular_sword",
        type : "forge:partial_nbt",
        nbt  : {"sword/blade":"sword/knife","sword/hilt":"sword/basic_hilt"}
    },
    "result": [
        { "item": "kubejs:wooden_form", "count": 1}
    ],
    "sound": "minecraft:item.axe.strip"
})  .id(script_id+"cutting/wooden_form");

});

console.info('End of planks.js.');
