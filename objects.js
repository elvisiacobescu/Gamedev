//trebuie populata TODO
var stuf={food:[
                {name:"row_pig_mit",foame:4,energie:0,href:"img/food/row_pig_mit.png",type:"food",q:1,max_q:10,recipe:[1],value:3},
                {name:"faina",foame: 5,energie:0,href:"img/food/flower.png",type:"food",q:1,max_q:10,recipe:[1],value:4},
                {name:"carot",foame:5,energie:1,href:"img/food/carot.png",type:"food",q:1,max_q:10,recipe:[1],value:5},
                {name:"mar",foame: 6,energie:2,href:"img/food/mar.png",type:"food",q:1,max_q:10,recipe:[5,6],value:7},
                {name:"orange",foame: 6,energie:3,href:"img/food/orange.png",type:"food",q:1,max_q:10,recipe:[5,6],value:9},
                {name:"bred",foame: 9,energie:0,href:"img/food/bred.png",type:"food",q:1,max_q:10,recipe:[2,3],value:10},
                {name:"orange gius",foame: 9,energie:5,href:"img/food/orange_gius.png",type:"food",q:1,max_q:10,recipe:[2,3],value:12},
                {name:"sandwich",foame:20,energie:5,href:"img/food/sandwich.png",type:"food",q:1,max_q:10,value:28}
              ],
          ingredients:[],
          wepan:[{name:"Wod sord",dmg:1,href:"img/wepons/wod_sword.png",type:"wepon",value:2},
                 {name:"Iron sord",dmg:3,href:"img/wepons/iron_sword.png",type:"wepon",value:6}],
          armur:[{name:"Cover",def:1,href:"img/armur/hed_armur_1.png",type:"hed-armur",value:2,modi:2},
                 {name:"Lether glovs",def:1,href:"img/armur/l_glovs1.png",type:"glovs-armur",value:2,modi:2},
                 {name:"coif",def:3,href:"img/armur/hed_armur_2.png",type:"hed-armur",value:10,modi:2},
                 {name:"Worn pants",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:10,modi:2},
                 {name:"cloth armur",def:5,href:"img/armur/bodi_armur_2.png",type:"bodi-armur",value:20,modi:2},
                 {name:"Lite boots",def:3,href:"img/armur/boots2.png",type:"fit-armur",value:10,modi:2},
                 {name:"armur",def:3,href:"img/armur/hed_armur_1.png",type:"bodi-armur",value:10,modi:2},
                 {name:"wariar glovs",def:5,href:"img/armur/l_glovs2.png",type:"glovs-armur",value:10,modi:2},
                 {name:"lite armur",def:15,href:"img/armur/bodi_armur_1.png",type:"bodi-armur",value:30,modi:2}],
          julary:[{name:"Old ring",hp:1,href:"img/julary/ring1.png",type:"ring",value:5,modi:2},
                  {name:"Old iron ring",dmg:1,hp:1,href:"img/julary/ring2.png",type:"ring",value:10,modi:2},
                  {name:"Old earring",hp:1,en:1,href:"img/julary/earring1.png",type:"earring",value:15,modi:2},
                  {name:"Old iron earring",dmg:1,en:2,hp:1,href:"img/julary/earring2.png",type:"earring",value:25,modi:2},
                  {name:"Old lether choker",dmg:1,dex:2,hp:1,href:"img/julary/neck1.png",type:"neckles",value:35,modi:2},
                  {name:"Bone neckles",dmg:1,dex:2,hp:1,href:"img/julary/neck2.png",type:"neckles",value:40,modi:2}],
          consumabile:[
                  {name:"Badages",hp:15,en:null,href:"img/consumabile/smal-bandage.png",value:40,type:"consumable"},
                  {name:"Large Bandages",hp:25,en:null,href:"img/consumabile/large-bandage.png",value:55,type:"consumable"},
                  {name:"Smal Healthpeck",hp:50,en:null,href:"img/consumabile/smal-bandage.png",value:105,type:"consumable"},
                  {name:"Medium Healthpeck",hp:100,en:null,href:"img/consumabile/smal-bandage.png",value:205,type:"consumable"},
                  {name:"Largi Healthpeck",hp:150,en:null,href:"img/consumabile/smal-bandage.png",value:305,type:"consumable"},
                  {name:"Medical Cart",hp:200,en:null,href:"img/consumabile/smal-bandage.png",value:400,type:"consumable"},
                  {name:"Energi drinck S",hp:null,en:5,href:"img/consumabile/smalenergidrinck.png",value:30,type:"consumable"},
                  {name:"Energi drinck M",hp:null,en:15,href:"img/consumabile/mediumenergidrinck.png",value:90,type:"consumable"},
                  {name:"Energi drinck B",hp:null,en:30,href:"img/consumabile/largeenergidrinck.png",value:180,type:"consumable"},
                  {name:"Energi drinck G",hp:null,en:50,href:"img/consumabile/hugeenergidrinck.png",value:300,type:"consumable"},
                  {name:"pein medicine",hp:15,en:5,href:"img/consumabile/smal-bandage.png",value:70,type:"consumable"},
                  {name:"miracle drog",hp:25,en:10,href:"img/consumabile/smal-bandage.png",value:130,type:"consumable"},
                  {name:"Strong potion",hp:50,en:10,href:"img/consumabile/smal-bandage.png",value:170,type:"consumable"},
                  {name:"invicibil potion",hp:100,en:25,href:"img/consumabile/smal-bandage.png",value:360,type:"consumable"}
                ],
                transport:[

                ]
};
//numai primi de la s monster sunt facute bine obiectele TODO
var monster={ s_monster:[{name:"bug",dmg:1,def:1,dex:1,hp:3,exp:1,href:"img/monsters/bug.png",loot:["l1","l1","l1"],lootnr:1,type:"s"},
                        {name:"Bug",dmg:2,def:1,dex:1,hp:6,exp:2,href:"img/monsters/bug.png",loot:["l1","l1","l1"],lootnr:1,type:"s"},
                        {name:"Spider",dmg:1,def:1,dex:2,hp:10,exp:3,href:"img/monsters/spider.png",loot:["l1","l1","l1"],lootnr:1,type:"s"},
                        {name:"Scorpion",dmg:2,def:1,dex:2,hp:12,exp:4,href:"img/monsters/scorpion.png",loot:["l1","l1","l2"],lootnr:1,type:"s"},
                        {name:"snake",dmg:2,def:2,dex:2,hp:15,exp:5,href:"img/monsters/snake.png",loot:["l1","l1","l2"],lootnr:1,type:"s"},
                        {name:"Dead-Head ",dmg:2,def:3,dex:2,hp:17,exp:6,href:"img/monsters/ded-head.png", loot:["l1","l1","l2"],lootnr:2,type:"s"},
                        {name:"smal monster7",dmg:3,def:1,dex:1,hp:20,exp:7,href:"img/monsters/snake.png",loot:["l1","l2","l2"],lootnr:2,type:"s"},
                        {name:"smal monster8",dmg:3,def:1,dex:2,hp:22,exp:8,href:"img/monsters/snake.png",loot:["l1","l2","l2"],lootnr:2,type:"s"},
                        {name:"smal monster9",dmg:3,def:2,dex:1,hp:24,exp:9,href:"img/monsters/snake.png",loot:["l1","l2","l2"],lootnr:2,type:"s"},
                        {name:"smal monster10",dmg:3,def:2,dex:2,hp:25,exp:10,href:"img/monsters/snake.png",loot:["l1","l2","l2"],lootnr:3,type:"s"},
                        {name:"smal monster11",dmg:3,def:3,dex:3,hp:30,exp:11,href:"img/monsters/snake.png",loot:["l1","l2","l2"],lootnr:3,type:"s"},
                        {name:"smal monster12",dmg:4,def:3,dex:4,hp:33,exp:12,href:"img/monsters/snake.png",loot:["l2","l2","l2"],lootnr:3,type:"s"},
                        {name:"smal monster13",dmg:5,def:3,dex:2,hp:35,exp:13,href:"img/monsters/snake.png",loot:["l2","l2","l2"],lootnr:3,type:"s"},
                        {name:"smal monster14",dmg:5,def:2,dex:4,hp:37,exp:14,href:"img/monsters/snake.png",loot:["l2","l2","l2"],lootnr:2,type:"s"},
                        {name:"smal monster15",dmg:6,def:7,dex:2,hp:40,exp:15,href:"img/monsters/snake.png",loot:["l2","l2","l3"],lootnr:4,type:"s"}
                      ],
            m_monster:[ {name:"medium monster1",dmg:10,def:10,dex:15,hp:60,exp:16,href:"img/monsters/asasin-m.png",loot:["l2","l2","l3"],lootnr:3,type:"m"},
                        {name:"medium monster2",dmg:10,def:11,dex:15,hp:65,exp:17,href:"img/monsters/asasin-m.png",loot:["l2","l3","l3"],lootnr:3,type:"m"},
                        {name:"medium monster4",dmg:15,def:13,dex:14,hp:75,exp:18,href:"img/monsters/asasin-m.png",loot:["l2","l3","l3"],lootnr:3,type:"m"},
                        {name:"medium monster3",dmg:10,def:12,dex:15,hp:70,exp:19,href:"img/monsters/asasin-m.png",loot:["l2","l3","l3"],lootnr:3,type:"m"},
                        {name:"medium monster5",dmg:15,def:14,dex:13,hp:80,exp:20,href:"img/monsters/asasin-m.png",loot:["l2","l2","l4"],lootnr:3,type:"m"},
                        {name:"medium monster6",dmg:15,def:15,dex:12,hp:85,exp:21,href:"img/monsters/asasin-m.png",loot:["l2","l3","l4"],lootnr:3,type:"m"},
                        {name:"medium monster7",dmg:20,def:16,dex:11,hp:90,exp:22,href:"img/monsters/asasin-m.png",loot:["l1","l4","l4"],lootnr:3,type:"m"},
                        {name:"medium monster8",dmg:20,def:17,dex:10,hp:95,exp:23,href:"img/monsters/asasin-m.png",loot:["l3","l3","l3"],lootnr:3,type:"m"},
                        {name:"medium monster9",dmg:20,def:18,dex:9,hp:100,exp:24,href:"img/monsters/asasin-m.png",loot:["l3","l3","l3"],lootnr:3,type:"m"},
                        {name:"medium monster10",dmg:25,def:19,dex:8,hp:105,exp:25,href:"img/monsters/asasin-m.png",loot:["l3","l4","l3"],lootnr:3,type:"m"},
                        {name:"medium monster11",dmg:25,def:20,dex:7,hp:110,exp:26,href:"img/monsters/asasin-m.png",loot:["l3","l4","l3"],lootnr:3,type:"m"},
                        {name:"medium monster12",dmg:25,def:21,dex:6,hp:115,exp:27,href:"img/monsters/asasin-m.png",loot:["l3","l4","l3"],lootnr:3,type:"m"},
                        {name:"medium monster13",dmg:25,def:22,dex:5,hp:120,exp:28,href:"img/monsters/asasin-m.png",loot:["l4","l4","l3"],lootnr:3,type:"m"},
                        {name:"medium monster14",dmg:25,def:23,dex:4,hp:125,exp:29,href:"img/monsters/asasin-m.png",loot:["l4","l4","l3"],lootnr:3,type:"m"},
                        {name:"medium monster15",dmg:25,def:24,dex:3,hp:130,exp:30,href:"img/monsters/asasin-m.png",loot:["l4","l4","l4"],lootnr:3,type:"m"}
                                  ],
            l_monster:[ {name:"largi monster1",dmg:50,def:48,dex:20,hp:200,exp:31,href:"img/monsters/asasin.png",loot:["l3","l4","l4"],lootnr:6,type:"l"},
                        {name:"largi monster2",dmg:55,def:47,dex:25,hp:172,exp:32,href:"img/monsters/asasin.png",loot:["l4","l4","l4"],lootnr:6,type:"l"},
                        {name:"largi monster3",dmg:60,def:46,dex:30,hp:173,exp:33,href:"img/monsters/asasin.png",loot:["l4","l4","l5"],lootnr:3,type:"l"},
                        {name:"largi monster4",dmg:65,def:45,dex:20,hp:177,exp:34,href:"img/monsters/asasin.png",loot:["l5","l4","l4"],lootnr:6,type:"l"},
                        {name:"largi monster5",dmg:75,def:44,dex:25,hp:171,exp:35,href:"img/monsters/asasin.png",loot:["l5","l5","l4"],lootnr:3,type:"l"},
                        {name:"largi monster6",dmg:85,def:43,dex:20,hp:172,exp:36,href:"img/monsters/asasin.png", loot:["l5","l5","l4"],lootnr:3,type:"l"},
                        {name:"largi monster7",dmg:90,def:42,dex:35,hp:174,exp:37,href:"img/monsters/asasin.png",loot:["l5","l5","l5"],lootnr:3,type:"l"},
                        {name:"largi monster8",dmg:100,def:41,dex:20,hp:180,exp:38,href:"img/monsters/asasin.png",loot:["l5","l5","l5"],lootnr:3,type:"l"},
                        {name:"largi monster9",dmg:105,def:40,dex:25,hp:170,exp:39,href:"img/monsters/asasin.png",loot:["l6","l5","l4"],lootnr:3,type:"l"},
                        {name:"largi monster10",dmg:110,def:39,dex:40,hp:170,exp:40,href:"img/monsters/asasin.png",loot:["l6","l5","l4"],lootnr:3,type:"l"},
                        {name:"largi monster11",dmg:115,def:38,dex:20,hp:200,exp:41,href:"img/monsters/asasin.png",loot:["l6","l5","l5"],lootnr:4,type:"l"},
                        {name:"largi monster12",dmg:120,def:37,dex:25,hp:177,exp:42,href:"img/monsters/asasin.png",loot:["l6","l5","l5"],lootnr:3,type:"l"},
                        {name:"largi monster13",dmg:125,def:36,dex:45,hp:172,exp:43,href:"img/monsters/asasin.png",loot:["l6","l5","l6"],lootnr:3,type:"l"},
                        {name:"largi monster14",dmg:130,def:35,dex:20,hp:190,exp:44,href:"img/monsters/asasin.png",loot:["l6","l5","l6"],lootnr:3,type:"l"}
                        ],
             B_monster:[{name:"colosus",dmg:180,def:80,dex:60,hp:200,exp:45,href:"img/monsters/asasin.png",loot:["l5","l6","l7"],lootnr:3,type:"b"},
                        {name:"bos2",dmg:190,def:70,dex:60,hp:250,exp:50,href:"img/monsters/asasin.png",loot:["l6","l6","l6"],lootnr:3,type:"b"},
                        {name:"bos3",dmg:200,def:75,dex:51,hp:300,exp:60,href:"img/monsters/asasin.png",loot:["l5","l7","l7"],lootnr:3,type:"b"},
                        {name:"bos4",dmg:225,def:65,dex:45,hp:350,exp:70,href:"img/monsters/asasin.png",loot:["l6","l7","l7"],lootnr:3,type:"b"},
                        {name:"Pirate",dmg:250,def:63,dex:45,hp:400,exp:80,href:"img/monsters/asasin.png",loot:["l7","l7","l7"],lootnr:2,type:"b"},
                        {name:"Ival wizard",dmg:300,def:60,dex:40,hp:500,exp:100,href:"img/monsters/asasin.png", loot:["l8","l8","l8"],lootnr:2,type:"b"}
                                  ]};
var mat=[[1,1,1,1,1,1,1,1],
         [1,2,1,1,1,1,1,],
         [1,14,2,1,1,1,1,1],
         [1,15,1,1,1,1,1,],
         [1,2,1,1,1,1,1,1],
         [1,1,1,2,1,1,1,],
         [2,1,2,1,1,1,1,1],
         [1,1,2,1,1,1,1,],
         [1,1,1,1,1,1,1,1],
         [1,1,1,1,1,1,1,],
         [1,1,1,1,2,1,1,1],
         [1,1,1,1,1,1,1,],
         [1,1,1,1,1,1,1,1],
         [1,1,1,1,2,1,1,],
         [1,1,2,1,1,1,1,1],
         [1,1,1,2,1,1,1,],
         [1,1,1,1,1,2,1,1]];

//trebuie refacute toate imagineile si corectate in options chestii TODO
var hexagoane=[{type:"grass",    options:{shop:false,cooking:true,nr:3,camp:["fire","bag","temperate"],eat:true,cauta:["loot1","loot1","loot1","s_monster","s_monster","m_monster"],batle_feeld:"" },    speed:1.2,ref:"img/green-terain.png"},
               {type:"desert",   options:{shop:false,cooking:true,nr:3,camp:["fire","bag","Cold"],eat:true,cauta:["loot2","loot3","loot4","loot5","s_monster","m_monster"] ,deforest:["twigs","wod"]},               speed:0.9,ref:"img/orange-terain.png"},
               {type:"jungle",  options:{shop:false,cooking:true,nr:4,camp:["no_fire","bag","temperate"],eat:true,cauta:["twigs","wod","fruits","bunny","medium_treasure","lite_monster"],deforest:["twigs","wod"] },speed:0.7,ref:"img/orange-terain.png"},
               {type:"forest",  options:{shop:false,cooking:true,nr:4,camp:["no_fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"],deforest:["twigs","wod"] },         speed:1,ref:"img/orange-terain.png"},
               {type:"swamp",   options:{shop:false,cooking:true,nr:3,camp:["no_fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                             speed:0.5,ref:"img/orange-terain.png"},
               {type:"mountain",options:{shop:false,cooking:true,nr:4,camp:["fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","big_treasure","lite_monster"] ,mine:["","",""]},              speed:0.5,ref:"img/orange-terain.png"},
               {type:"hill",     options:{shop:false,cooking:true,nr:3,camp:["fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                    speed:0.9,ref:"img/orange-terain.png"},
               {type:"inn",      options:{shop:false,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                    speed:2,ref:"img/orange-terain.png"},
               {type:"pasture",  options:{shop:false,cooking:true,nr:4,camp:["fire","inn","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , worck:["shepherd","build"]},   speed:2,ref:"img/orange-terain.png"},
               {type:"stables",  options:{shop:false,cooking:true,nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , worck:["clean","build"] },          speed:2,ref:"img/orange-terain.png"},
               {type:"home",     options:{shop:false,cooking:true,nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , build:"cest"},                      speed:2,ref:"img/orange-terain.png"},
               {type:"shop",     options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"], craft:true },                         speed:2,ref:"img/orange-terain.png"},
               {type:"warckshop",options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                     speed:2,ref:"img/orange-terain.png"},
               {type:"farm",     options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["loot2","loot3","loot4","loot5","s_monster","s_monster"] , worck:["clean","build"] },           speed:2,ref:"img/farm-terain.png"},
               {type:"palace",  options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["loot2","loot3","loot4","loot5","s_monster","s_monster"] },                                   speed:2,ref:"img/castel-terain.png"}
             ];
var lvl=[5,15,45,70,150,280,400,600,900,1300,1700,2200,2800,3500,4300,5200,6200,7300,8500,9700];
