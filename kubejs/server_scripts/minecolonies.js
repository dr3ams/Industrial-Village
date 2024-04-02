// priority: 0

console.info("Starting minecolonies.js/...");

let destination = 'kubejs/data/minecolonies/crafterrecipes/';

let crafterrecipe = {
                      "type" : "recipe-template",
                      "tag": "",
                      "recipe": {
                        "crafter": "",
                        "inputs": [
                          {
                            "item": "",
                            "count": ""
                          }
                        ],
                        "result": "",
                        "count": "",
                        "intermediate": "",
                        "min-building-level": "1",
                        "max-building-level": "5"
                      }
                    };

function generateCrafterRecipes(event, crafter, inputs, output, minlevel, maxlevel, show_tooltip, tool, research_required, research_cancelled, intermediate, tag, filter_include, filter_exclude) {
//    let config = JsonIO.read('kubejs/config/minecolonies_crafterrecipe_config.json');
    let config = crafterrecipe;
    if (tag) config['tag'] = tag;
    if (filter_include) config['filter']['include'] = filter_include;
    if (filter_exclude) config['filter']['exclude'] = filter_exclude;
    if (show_tooltip) config['recipe']['show-tooltip'] = true;
    if (tool) config['recipe']['tool'] = tool;
    if (research_required) config['recipe']['research-id'] = research_required;
    if (research_cancelled) config['recipe']['not-research-id'] = research_cancelled;

    config.recipe.crafter = `${crafter}_crafting`;
    config.recipe.inputs = inputs;
    config.recipe.result = output.item;
    config.recipe.count = output.count;
    config.recipe.intermediate = intermediate || 'minecraft:air';
    config['recipe']['min-building-level'] = minlevel || 1;
    config['recipe']['max-building-level'] = maxlevel || 5;

    if (tag) {
		event.addJson(`kubejs:crafterrecipes/${crafter}/minecolonies.js_template_${String(output['item']).split(':')[1]}.json`, config);
    } else {
        config['recipe']['type'] = "recipe";
		event.addJson(`kubejs:crafterrecipes/${crafter}/minecolonies.js_${String(output['item']).split(':')[1]}.json`, config['recipe']);
    }

}

ServerEvents.tags('item', event => {
	event.get('minecolonies:sawmill_product_excluded').add('#minecraft:planks');
});

let variants = [{log:"_log",wood:"_wood"},{log:"_stem",wood:"_hyphae"}];
let variants_array = ["_log","_wood","_stem","_hyphae"];

ServerEvents.highPriorityData( event => {
    for (const mod_id in global.tree_types) {
        global.tree_types[mod_id].forEach((element)=> {

            //console.info("processing "+mod_id+":"+element.type);

            // LOGS WILL BECOME ALL STRIPPED LOGS/WOOD OF THE CURRENT TYPE
            // UNLESS THERE ARE NO STRIPPED VARIANTS, THEN IT IS THE NON-STRIPPED LOGS/WOOD
            let logs=[];
            let log_tags=[];
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
                            log_tags.push({tag:"chipped:"+stripped+element.type+variant.log});
                        }
                    }
                });
            }
            if ("log_tags" in element) {
                log_tags = element.log;
            }

            // LOGS INTO FOUR PLANKS
            logs.forEach((log)=>{
                generateCrafterRecipes(event, 'sawmill', [log], { item: mod_id+":"+element.type+"_planks", count: 4 }, 1, 5, false, "axe");
            });
            log_tags.forEach((log_tag)=>{
                generateCrafterRecipes(event, 'sawmill', [{"item":"[NS]:[PATH]"}], { item: mod_id+":"+element.type+"_planks", count: 4 }, 1, 5, false, "axe",
                undefined, undefined, undefined, log_tag.tag);
            });

        })
    }

});

console.info("End of minecolonies.js/.");
