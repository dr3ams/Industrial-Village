// priority: 50

Platform.getInfo('iv').name = 'Industrial Village'

global.tree_types =
    {   "minecraft" : [
            { type:"oak" },
            { type:"spruce" },
            { type:"birch" },
            { type:"jungle" },
            { type:"acacia" },
            { type:"dark_oak" },
            { type:"mangrove" },
            { type:"cherry" },
            { type:"bamboo", log:[{item:"minecraft:stripped_bamboo_block"}] },
            { type:"crimson" },
            { type:"warped" }
        ],
        "ad_astra" : [
            { type:"aeronos", log:[{item:"ad_astra:aeronos_cap"},{item:"ad_astra:aeronos_stem"}] },
            { type:"strophar", log:[{item:"ad_astra:strophar_cap"},{item:"ad_astra:strophar_stem"}] },
            { type:"glacian" }
        ],
        "regions_unexplored" : [
            { type:"alpha" },
            { type:"baobab" },
            { type:"blackwood" },
            { type:"blue_bioshroom" },
            { type:"brimwood" },
            { type:"cobalt" },
            { type:"cypress" },
            { type:"dead" },
            { type:"eucalyptus" },
            { type:"green_bioshroom" },
            { type:"joshua" },
            { type:"kapok" },
            { type:"larch" },
            { type:"magnolia" },
            { type:"maple" },
            { type:"mauve" },
            { type:"palm" },
            { type:"pine" },
            { type:"pink_bioshroom" },
            { type:"redwood" },
            { type:"socotra" },
            { type:"willow" },
            { type:"yellow_bioshroom" }
        ]
    };

//// DO NOT MODIFY the returned data.
//// the returned data contains objects shared by global.tree_types.
//function mergeTreeTypesWithLocalData(localData) {
//    let returnData = global.tree_types.filter( (global_element)=>
//        ! localData.some( (local_element)=> local_element.id===global_element.id )
//    );
//    localData.forEach((mod_group)=> {
//        console.log(mod_group)
//        returnData.push = {
//            ...global.tree_types.find((element) => {
//        console.log(element)
//
//    return            element["id"] === mod_group["id"]
//            }
//            ),
//            ...mod_group
//        }
//    }
//    );
//    return returnData;
//}
