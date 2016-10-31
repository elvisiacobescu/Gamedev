var my_pic=new Image();
var my_pic2=new Image();
var my_bolet=new Image();
my_pic.src="img/green-terain.png";
my_pic2.src="img/orange-terain.png";
my_bolet.src="img/2-white25.png";
var retete={

}

var betle={
  c:0,//daca vreau sa beau
  runf:1,
  runf_anim:0,
  m_l:0,
  p_l:0,
  m_init_h:0,
  md:null,//monster dice number
  pd:null,//plaer dice number
  pd1:null,
  pd2:null,
  pd3:null,
  pd4:null,
  pd5:null,
  pd6:null,
  md1:null,
  md2:null,
  md3:null,
  md4:null,
  md5:null,
  md6:null
}

var player={
  selected:[-1,-1],
  n_monster:null,
  helth :101,
  dmg:2,
  def:2,
  dex:3,
  max_helth : 101,
  name : "me",
  i : 0,
  j : 0,
  k : 0,
  l : 0,
  exp:0,
  lvl:0,
  warning:0,
  sclickt: 0,
  nextloop: 5158000,
  time: 2548654,
  energi : 25,
  max_energi:25,
  silvar:20,
  gold:150,
  foame: 5,
  max_foame:30,
  self:0,
  twigs:1,
  inventory:[   {name:"row_pig_mit",foame:4,en:5,def:3,hp:100,energie:0,dmg:1,href:"img/food/row_pig_mit.png",type:"food",q:1,max_q:10,recipe:[1],value:3},
  {name:"faina",foame: 5,energie:0,href:"img/food/flower.png",type:"food",q:1,max_q:10,recipe:[1],value:4},
  {name:"carot",foame:5,energie:1,href:"img/food/carot.png",type:"food",q:1,max_q:10,recipe:[1],value:5},{name:"Badages",hp:15,en:null,href:"img/consumabile/smal-bandage.png",value:40,type:"consumable"},
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
    {name:"miracle drog",hp:25,en:10,href:"img/consumabile/potion3.png",value:130,type:"consumable"},
    {name:"Strong potion",hp:50,en:10,href:"img/consumabile/potion2.png",value:170,type:"consumable"},
    {name:"XXL potion",hp:100,en:25,href:"img/consumabile/potion3.png",value:360,type:"consumable"},
  {name:"Wod sord",dmg:1,href:"img/wepons/wod_sword.png",type:"wepon",value:2},
  {name:"Cover",def:1,href:"img/armur/hed_armur_1.png",type:"hed-armur",value:2,modi:2},
         {name:"Lether glovs",def:1,href:"img/armur/l_glovs1.png",type:"glovs-armur",value:2,modi:2},
         {name:"coif",def:3,href:"img/armur/hed_armur_2.png",type:"hed-armur",value:10,modi:2},
         {name:"Worn pants",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:10,modi:2},
         {name:"cloth armur",def:5,href:"img/armur/bodi_armur_2.png",type:"bodi-armur",value:20,modi:2},
         {name:"Lite boots",def:3,href:"img/armur/boots2.png",type:"fit-armur",value:10,modi:2},
         {name:"armur",def:3,href:"img/armur/hed_armur_1.png",type:"bodi-armur",value:10,modi:2},
         {name:"wariar glovs",def:5,href:"img/armur/l_glovs2.png",type:"glovs-armur",value:10,modi:2},
         {name:"lite armur",def:15,href:"img/armur/bodi_armur_1.png",type:"bodi-armur",value:30,modi:2}],
  status:{},
  max_inventory:30,
  torso_slot:null,
  hands_slot:null,
  hand_l_slot:{name:"iron_sword",dmg:3,href:"img/wepons/iron_sword.png",type:"wepon",value:6},
  hand_r_slot:null,
  had_slot:null,
  pents_slot:null,
  shues_slot:null,
  ring_slot1:{name:"Old iron ring",dmg:1,hp:1,href:"img/julary/ring2.png",type:"ring",value:10},
  ring_slot2:null,
  earring_slot1:null,
  earring_slot2:null,
  neckles:null,
  bag_slot:null,
  bagpack_slot1:null,
  bagpack_slot2:null,
  hors_slot:null,
  carage_slot:null,
  warning:0,
  warning_fader:0,
  loot:[],
  setposition : function(x,k){
    this.i=x;
    this.j=k;
  },
  move : function(x,y){
      var c=  clickt(x,y);
      console.log(c.i+","+c.j);
      //intreb daca patratica e adiacenta
      //merge 1,2
      //formula pt consum de energie este dificultatea terenuli / 1.5
      if(c.i===player.i && c.j===player.j){
        player.self=1;
        //test self
      }
      else if(this.energi>=1.5/hexagoane[mat[c.i][c.j]-1].speed){
        console.log(c.i+","+c.j);
        if((c.i+2===player.i && c.j===player.j && player.i%2===0) ||
          (c.i-2===player.i && c.j===player.j && player.i%2===0) ||
          (c.i+1===player.i && c.j===player.j && player.i%2===0) ||
          (c.i-1===player.i && c.j===player.j && player.i%2===0) ||
          (c.i+1===player.i && c.j+1===player.j && player.i%2===0) ||
          (c.i-1===player.i && c.j+1===player.j && player.i%2===0) ||
          (c.i-2===player.i && c.j===player.j && player.i%2===1) ||
          (c.i+2===player.i && c.j===player.j && player.i%2===1)||
          (c.i+1===player.i && c.j-1===player.j && player.i%2===1)||
          (c.i-1===player.i && c.j-1===player.j && player.i%2===1)||
          (c.i-1===player.i && c.j===player.j && player.i%2===1)||
          (c.i+1===player.i && c.j===player.j && player.i%2===1) )
          {
            // console.log(c.i+2);
            //  console.log("mutare legala i:"+player.i+" j:"+player.j)
            this.setposition(c.i,c.j);
            this.energi-=1.5/hexagoane[mat[this.i][this.j]-1].speed;
            this.passtime(Math.floor(3600/hexagoane[mat[this.i][this.j]-1].speed));
            //  console.log(this.foame);
            //testam daca exista parametru in obiect
            //  if (hexagoane[mat[player.i][player.j] - 1 ].options.deforest==null){
            //    console.log(' sunt  null');
            //  }
            //  console.log(hexagoane[mat[player.i][player.j]].options);
              // console.log("mutare legala ");
              //  console.log("destinatiaprim i:"+c.i+" j:"+c.j);
              //  console.log(player);
              //  console.log(cenAftCoordonates(this.i,this.j) );
              //clicktest
            }
            else {
              // console.log("muta "+c.i +" unde jucatorul este ="+player.i);
              //aici trebuie warning facut
              console.log("mutare ilegala player ");
              // console.log("tu ai apasat pe acest i:"+c.i+" j:"+c.j);
            }
          }else{
            this.warning=1;//primu warning
            this.warning_fader=200;
            console.log("nu aveti destula energie pentru a face acasta actiune");
          }
          //  console.log(c);//acici ar trebui sa se miste jucatorul (MUVE)
        },
  passtime : function(t){
    //scade 1 foame pe ora
    if(this.foame >= (t/3600/2)){
      this.foame-=t/3600/2;
    }else {
      if(this.helth >this.foame+t/3600/2){
        //console.log(this.helth>this.foame-(t/3600)/2);
        this.helth+=(this.foame-t/3600/2);
        this.foame=0;}
        else {
          this.helth=0;
          this.deth()};
        };
        this.time+=t;
        //cu trecerea timpului viata iti creste
        if(this.foame>0){
        if(this.helth+t/3600<=this.max_helth){
          this.helth+=t/3600;
        }else{this.helth=this.max_helth;};
      };
  },
  option : function(x,y){
    var k=this.i;
    var p=this.j;
    var centru=cenAftCoordonates(k,p);
    var opt=wherclic(x,y,centru);

    if (opt===0){
      // console.log("am apasat pe langa optiune");
      // console.log(centru);
      this.self=0;
    }else if(opt===1 && hexagoane[mat[this.i][this.j]-1].options.camp != null){
      var f=0;//vine de la foc de tabara daa ajuns sa fie pt toate bonusurile de la slep
      var p=0;//vine de la pierderi
      var addenergi=0;
      //aici trebuie facuta dormirea(recuperarea de energie)
      //daca esti in oras dormi la in in daca ai bani daca nu pe strada
    if(hexagoane[mat[this.i][this.j]-1].options.camp[1]==="inn"){
      if(this.silvar>=5){
          this.silvar-=5;
          f+=10;
          console.log(f);
        }else if(this.gold>=1){
          this.silvar+=95;
          this.gold-=1;
          f+=10;
        }else if(this.bag_slot!=null){
          f+=this.bag_slot.rest;
        }
      }
      //penalti sau bonusuri pentru wethar
      if(hexagoane[mat[this.i][this.j]-1].options.camp[3]==="Cold"){
        p+=2;
      }else if(hexagoane[mat[this.i][this.j]-1].options.camp[3]==="warm"){
        f+=1;
      }
      else if(hexagoane[mat[this.i][this.j]-1].options.camp[3]==="temperate"){
        var ran=random(1,4);
        switch (ran) {
          case 1:f+=1; //e mijlocul veri :))
            break;
          case 2:p+=1;//ploua
            break;
          case 3:p+=2;//iarna
            break;
          case 4:p+=3;//viscol
            break;
        }
      }
      //daca se poate si daca ai cu ce sa faci focul primesti +3 energie
      if(hexagoane[mat[this.i][this.j]-1].options.camp[1]==="fire"){
        if(this.twigs>0){
           this.twigs-=1;
           f+=3;
        }
      }
      //pierde 288000s (echivalentu a 8 ore)
       this.passtime(28800);
      //baze recovari 10
       addenergi+=10+f-p;
       if(this.energi+addenergi<=this.max_energi)
       {
         this.energi+=addenergi;
       }
       else{
         this.energi=this.max_energi;
       };

    //  console.log(this);
      this.self=0;
    }
    //aici face hranirea
    else if(opt===2 ){
    // console.log("self");
    }else if(opt===3 ){
        //aici se face co cautare face self=0 important
    // console.log("caut");
    var noroc=dice();
    //renders.d1=noroc-1;
    var i ;
    var string=hexagoane[mat[this.i][this.j]-1].options.cauta[noroc-1];
     //LOTING
    if(this.energi<0.50){
    this.warning==1;
    this.self=0;}
    else{
    console.log(string);
    switch (string) {
      case "loot1":
            loot1();
            this.self=3;//(self 3 e pentru lootingscreen)
            this.energi-=0.5;
        break;
      case "loot2":
      var loot =loot2();
        this.self=3;
        var obj={name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:1,recipe:[5,6]};
          this.energi-=0.5;
        this.loot.push(clone(obj));
         break;
      case "loot3":
        loot3();
        this.self=3;
          var obj={name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:1,recipe:[5,6]};
        this.loot.push(clone(obj ));
          this.energi-=0.5;
        break;
      case "loot4":
      var loot =loot4();
        this.self=3;
        this.loot.push(clone(obj));
          this.energi-=0.5;
        break;
      case "loot5":
      var loot =loot5();
        this.self=3;
        this.loot.push(clone(obj));
          this.energi-=0.5;
         break;
      case "loot6":
      var loot =loot6();
        this.self=3;
        this.loot.push(clone(obj));
          this.energi-=0.5;
         break;
      case "s_monster":
        this.n_monster=clone(monster.s_monster[random(0,monster.s_monster.length)])
        betle.m_init_h=this.n_monster.hp;
        initfight();
        this.energi-=0.5;
          break;
      case "m_monster":
      this.n_monster=clone(monster.m_monster[random(0,monster.m_monster.length)])
      betle.m_init_h=this.n_monster.hp;
      initfight();
        this.energi-=0.5;
          break;
      case "l_monster":
      this.n_monster=clone(monster.l_monster[random(0,monster.l_monster.length)])
      betle.m_init_h=this.n_monster.hp;
      initfight();
        this.energi-=0.5;
          break;
      case "B_monster":
      this.n_monster=clone(monster.B_monster[random(0,monster.B_monster.length)])
      betle.m_init_h=this.n_monster.hp;
      initfight();
        this.energi-=0.5;
          break;
      case "B_monster":
        this.energi-=0.5;
          break;
      case "guard":
        this.energi-=0.5;
          break;
      case "hunt_lite":
        this.energi-=0.5;
          break;
      case "hunt_have":
        this.energi-=0.5;
          break;
      case "wood":
        this.energi-=0.5;
          break;
      case "vegetables":
        this.energi-=0.5;
            var a=[{name:"bred",foame: 9,energie:0,href:"img/bred.png",type:"food",q:1,max_q:10,recipe:[2,3],value:5},
                            {name:"faina",foame: 5,energie:0,href:"img/flower.png",type:"food",q:1,max_q:10,recipe:[1],value:5},
                            {name:"sendvici",foame:20,energie:5,href:"img/bred.png",type:"food",q:1,max_q:10,value:5},{name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:0,max_q:10,recipe:[5,6],value:5}]
            var rand=random(1,a.length);
            this.loot.push(clone(a[rand-1]));
            this.self=3;
          break;
      case "twigs":
        this.energi-=0.5;
          var num=random(1,3);
          this.twigs+=num;
          this.self=4;
          break;
    }
    this.passtime(15*60);

   }
    }else if(opt===7){
      //aici se face chestii in meniu inclusiv face self=0


    }else{
          console.log("am apasat pe langa optiune");
         this.self=0;
        };
  },
  deth:function(){
    console.log("ups ai murit.....ps asta inseamna ca nu ai facutfunctia pt moarte daca inca trimit mesaju ista");
  },
  eat: function(x,y){
    // insne pozitia meniului cu mancare
    var sx=70;
    var sy=50;
    var l=310;
    var h=430;
    var  j ;
    var  i ;
    var m;
    var control=0;
    if(x < sx || x > (sx+l) || y < sy || y > (sy+h) ){
      this.self=0;
    }
    else {
        j=Math.floor((x-sx)/60);
        i=Math.floor((y-sy)/60);
        //console.log(x>j*60+sx&&y>i*60+sy);
        if(x>j*60+sx&&y>i*60+sy){
         m =  i*7+j;
        }
    }
    for(i=0;i<this.inventory.length && control!=1;i++){

      if(this.inventory[i].type==="food"){
        console.log(m);
        if(m===0){
          control=1;
          //aici papa
          console.log(this.foame<this.max_foame);
          if(this.foame<this.max_foame){
            //papa
            this.foame+=this.inventory[i].foame;

            if(this.energi+this.inventory[i].energie>this.max_energi){
              this.energi=this.max_energi;
            }
            else {
              this.energi+=this.inventory[i].energie;
            }
            this.passtime(600);
          }
          else{
            //ne ameninta ca e burtica plina
          this.warning=2;
          this.warning_fader=300;
          };
          if(this.inventory[i].q===1){
          //aici coatem din vector
          if(this.warning===0){
          this.inventory.splice(i,1);};
          }
          else {
            if(this.warning===0){
            this.inventory[i].q-=1;}
          }
          if (this.warning!=0){
            this.self=0;
          };
        }
        else{m-=1;}
      }
    }
  },
  cerceteaza:function(){},
  invaction:function(x,y){
    if(x<140 || x>1080 || y<150 || y>780){
    this.self=0;
    }else if( x<780){
    // console.log(Math.floor((y-150)/60));
    var hj=Math.floor((x-170)/60);
    var hi=Math.floor((y-150)/60);
    if(x>hj*60+170+10 && y>hi*60+150+10){
    // daca nu eraselectat ceva selecteaza
    // console.log(this.selected[0]===-1 || this.selected[1]===-1);
    if(this.selected[0]===-1 || this.selected[1]===-1){
      if((hi*10+hj)<this.inventory.length){
      this.selected[0]=hi;
      this.selected[1]=hj;}
    }else{//daca e selectat
      if((hi*10+hj)<this.inventory.length){
     var intermediar=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
     this.inventory[this.selected[0]*10+this.selected[1]]=clone(this.inventory[hi*10+hj]);
     this.inventory[hi*10+hj]=clone(intermediar);
     this.selected[0]=-1;
     this.selected[1]=-1;
        }
      }
    }
   }
   else if(x>760 && y<520){
     console.log("suntem in equipt") ;

       if(x<1070&&x>1020&&y<330&&y>280){
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
         if(this.inventory[this.selected[0]*10+this.selected[1]].type==="wepon"||this.inventory[this.selected[0]*10+this.selected[1]].type==="sheeld"){
             if(this.hand_l_slot==null){
               if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                 this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                 this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                 this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                 this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                   this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
               }

               this.hand_l_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
               this.inventory.splice(this.selected[0]*10+this.selected[1],1);
               this.selected[0]=-1;
               this.selected[1]=-1;
             }else{
               var intermediar;
               if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                 this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                 this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                 this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                 this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
               }
               if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                  this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
               }
               if(this.hand_l_slot.hp!=null){
                 this.max_helth-=this.hand_l_slot.hp;
               }
               if(this.hand_l_slot.en!=null) {
                 this.max_energi-=this.hand_l_slot.en;
               }
               if(this.hand_l_slot.dmg!=null) {
                 this.dmg-=this.hand_l_slot.dmg;
               }
               if(this.hand_l_slot.def!=null) {
                 this.def-=this.hand_l_slot.def;
               }
               if(this.hand_l_slot.dex!=null) {
                 this.dex-=this.hand_l_slot.dex;
               }
               intermediar=clone(this.hand_l_slot);
               this.hand_l_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
               this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
               this.selected[0]=-1;
               this.selected[1]=-1;
             }
            }
          }else{if(this.inventory.length<this.max_inventory){
            if(this.hand_l_slot.hp!=null){
              this.max_helth-=this.hand_l_slot.hp;
            }
            if(this.hand_l_slot.en!=null) {
              this.max_energi-=this.hand_l_slot.en;
            }
            if(this.hand_l_slot.dmg!=null) {
              this.dmg-=this.hand_l_slot.dmg;
            }
            if(this.hand_l_slot.def!=null) {
              this.def-=this.hand_l_slot.def;
            }
            if(this.hand_l_slot.dex!=null) {
              this.dex-=this.hand_l_slot.dex;
            }
            this.inventory.push(clone(this.hand_l_slot));
            this.hand_l_slot=null;}else{
              this.warning=100;
              this.warning_fader=200
            }

          }

       };
       if(x<845&&x>795&&y<330&&y>280){
        console.log("am incercat sa echipam o sabie in mana dreapta");
        if(this.selected[0]!=-1 && this.selected[1]!=-1){
        if(this.inventory[this.selected[0]*10+this.selected[1]].type==="wepon" || this.inventory[this.selected[0]*10+this.selected[1]].type==="sheeld"){
              if(this.hand_r_slot==null){
                if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                  this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                }
                if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                  this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                }
                if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                  this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                }
                if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                  this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                }
                if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                  this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                }
              this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
              this.inventory.splice(this.selected[0]*10+this.selected[1],1);
              this.selected[0]=-1;
              this.selected[1]=-1;
            }else{
              var intermediar;
              if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
              }
              if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
              }
              if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
              }
              if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
              }
              if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
              }
              if(this.hand_r_slot.hp!=null){
                this.max_helth-=this.hand_r_slot.hp;
              }
              if(this.hand_r_slot.en!=null) {
                this.max_energi-=this.hand_r_slot.en;
              }
              if(this.hand_r_slot.dmg!=null) {
                this.dmg-=this.hand_r_slot.dmg;
              }
              if(this.hand_r_slot.def!=null) {
                this.def-=this.hand_r_slot.def;
              }
              if(this.hand_r_slot.dex!=null) {
                this.dex-=this.hand_r_slot.dex;
              }
              intermediar=clone(this.hand_r_slot);
              this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
              this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
              this.selected[0]=-1;
              this.selected[1]=-1;
            }
          }
         }else{console.log("dezechipez acuma sefu");
           if(this.hand_r_slot.hp!=null){
             this.max_helth-=this.hand_r_slot.hp;
           }
           if(this.hand_r_slot.en!=null) {
             this.max_energi-=this.hand_r_slot.en;
           }
           if(this.hand_r_slot.dmg!=null) {
             this.dmg-=this.hand_r_slot.dmg;
           }
           if(this.hand_r_slot.def!=null) {
             this.def-=this.hand_r_slot.def;
           }
           if(this.hand_r_slot.dex!=null) {
             this.dex-=this.hand_r_slot.dex;
           }
           console.log("dezechipez acuma sefu");
           if(this.inventory.length<this.max_inventory){
           this.inventory.push(clone(this.hand_r_slot));}
           this.hand_r_slot=null;
          }
       }
       if(x<845&&x>795&&y<390&&y>340){
        //  console.log( "am apasatpe ring 1");
        //  verifica daca avem ceva selectat
           if(this.selected[0]!=-1 && this.selected[1]!=-1){
                if(this.inventory[this.selected[0]*10+this.selected[1]].type==="ring"){
                  if(this.ring_slot1==null){
                    if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                      this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                    }
                    if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                      this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                    }
                    if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                      this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                    }
                    if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                      this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                    }
                    if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                      this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                    }
                    this.ring_slot1=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                    this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                    // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                    // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                    // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                     this.selected[0]=-1;
                     this.selected[1]=-1;
                   }else{
                     if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                       this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                       this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                       this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                       this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                       this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                     }
                     if(this.ring_slot1.hp!=null){
                       this.max_helth-=this.ring_slot1.hp;
                     }
                     if(this.ring_slot1.en!=null) {
                       this.max_energi-=this.ring_slot1.en;
                     }
                     if(this.ring_slot1.dmg!=null) {
                       this.dmg-=this.ring_slot1.dmg;
                     }
                     if(this.ring_slot1.def!=null) {
                       this.def-=this.ring_slot1.def;
                     }
                     if(this.ring_slot1.dex!=null) {
                       this.dex-=this.ring_slot1.dex;
                     }
                     intermediar=clone(this.ring_slot1);
                     this.ring_slot1=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                     this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                     this.selected[0]=-1;
                     this.selected[1]=-1;
                   }
                }
           }else{

                 if(this.ring_slot1.hp!=null){
                   this.max_helth-=this.ring_slot1.hp;
                 }
                 if(this.ring_slot1.en!=null) {
                   this.max_energi-=this.ring_slot1.en;
                 }
                 if(this.ring_slot1.dmg!=null) {
                   this.dmg-=this.ring_slot1.dmg;
                 }
                 if(this.ring_slot1.def!=null) {
                   this.def-=this.ring_slot1.def;
                 }if(this.inventory.length<this.max_inventory){
                 this.inventory.push(clone(this.ring_slot1));};
                 this.ring_slot1=null;

           }
       }
       if(x<1070&&x>1020&&y<390&&y>340){
        //  console.log( "am apasatpe ring 2");
         //  verifica daca avem ceva selectat
            if(this.selected[0]!=-1 && this.selected[1]!=-1){
                 if(this.inventory[this.selected[0]*10+this.selected[1]].type==="ring"){
                   if(this.ring_slot2==null){
                     if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                       this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                       this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                       this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                       this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                     }
                     if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                       this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                     }
                     this.ring_slot2=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                     this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                     // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                     // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                     // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                      this.selected[0]=-1;
                      this.selected[1]=-1;
                    }else{
                      if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                        this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                      }
                      if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                        this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                      }
                      if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                        this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                      }
                      if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                        this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                      }
                      if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                        this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                      }
                      if(this.ring_slot2.hp!=null){
                        this.max_helth-=this.ring_slot2.hp;
                      }
                      if(this.ring_slot2.en!=null) {
                        this.max_energi-=this.ring_slot2.en;
                      }
                      if(this.ring_slot2.dmg!=null) {
                        this.dmg-=this.ring_slot2.dmg;
                      }
                      if(this.ring_slot2.def!=null) {
                        this.def-=this.ring_slot2.def;
                      }
                      if(this.ring_slot2.dex!=null) {
                        this.dex-=this.ring_slot2.dex;
                      }
                      intermediar=clone(this.ring_slot2);
                      this.ring_slot2=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                      this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                      this.selected[0]=-1;
                      this.selected[1]=-1;
                    }
                 }
            }else{

                  if(this.ring_slot2.hp!=null){
                    this.max_helth-=this.ring_slot2.hp;
                  }
                  if(this.ring_slot2.en!=null) {
                    this.max_energi-=this.ring_slot2.en;
                  }
                  if(this.ring_slot2.dmg!=null) {
                    this.dmg-=this.ring_slot2.dmg;
                  }
                  if(this.ring_slot2.def!=null) {
                    this.def-=this.ring_slot2.def;
                  }
                  if(this.ring_slot2.dex!=null) {
                    this.dex-=this.ring_slot2.dex;
                  }if(this.inventory.length<this.max_inventory){
                  this.inventory.push(clone(this.ring_slot2));}
                  this.ring_slot2=null;

            }
       }
       if(x<965&&x>905&&y<210&&y>160){
         //had_slot
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="hed-armur"){
                if(this.had_slot==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.had_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.had_slot.hp!=null){
                     this.max_helth-=this.had_slot.hp;
                   }
                   if(this.had_slot.en!=null) {
                     this.max_energi-=this.had_slot.en;
                   }
                   if(this.had_slot.dmg!=null) {
                     this.dmg-=this.had_slot.dmg;
                   }
                   if(this.had_slot.def!=null) {
                     this.def-=this.had_slot.def;
                   }
                   if(this.had_slot.dex!=null) {
                     this.dex-=this.had_slot.dex;
                   }
                   intermediar=clone(this.had_slot);
                   this.had_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.had_slot.hp!=null){
                 this.max_helth-=this.had_slot.hp;
               }
               if(this.had_slot.en!=null) {
                 this.max_energi-=this.had_slot.en;
               }
               if(this.had_slot.dmg!=null) {
                 this.dmg-=this.had_slot.dmg;
               }
               if(this.had_slot.def!=null) {
                 this.def-=this.had_slot.def;
               }
               if(this.had_slot.dex!=null) {
                 this.dex-=this.had_slot.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.had_slot));}
               this.had_slot=null;

         }
       }
       if(x<845&&x>795&&y<270&&y>220){
         //hands_slot
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="glovs-armur"){
                if(this.hands_slot==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.hands_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.hands_slot.hp!=null){
                     this.max_helth-=this.hands_slot.hp;
                   }
                   if(this.hands_slot.en!=null) {
                     this.max_energi-=this.hands_slot.en;
                   }
                   if(this.hands_slot.dmg!=null) {
                     this.dmg-=this.hands_slot.dmg;
                   }
                   if(this.hands_slot.def!=null) {
                     this.def-=this.hands_slot.def;
                   }
                   if(this.hands_slot.dex!=null) {
                     this.dex-=this.hands_slot.dex;
                   }
                   intermediar=clone(this.hands_slot);
                   this.hands_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.hands_slot.hp!=null){
                 this.max_helth-=this.hands_slot.hp;
               }
               if(this.hands_slot.en!=null) {
                 this.max_energi-=this.hands_slot.en;
               }
               if(this.hands_slot.dmg!=null) {
                 this.dmg-=this.hands_slot.dmg;
               }
               if(this.hands_slot.def!=null) {
                 this.def-=this.hands_slot.def;
               }
               if(this.hands_slot.dex!=null) {
                 this.dex-=this.hands_slot.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.hands_slot));}
               this.hands_slot=null;
         }
       }
       if(x<965&&x>905&&y<270&&y>220){
         // torso_slot , bodi-armur
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="bodi-armur"){
                if(this.torso_slot==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.torso_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.torso_slot.hp!=null){
                     this.max_helth-=this.torso_slot.hp;
                   }
                   if(this.torso_slot.en!=null) {
                     this.max_energi-=this.torso_slot.en;
                   }
                   if(this.torso_slot.dmg!=null) {
                     this.dmg-=this.torso_slot.dmg;
                   }
                   if(this.torso_slot.def!=null) {
                     this.def-=this.torso_slot.def;
                   }
                   if(this.torso_slot.dex!=null) {
                     this.dex-=this.torso_slot.def;
                   }
                   intermediar=clone(this.torso_slot);
                   this.torso_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.torso_slot.hp!=null){
                 this.max_helth-=this.torso_slot.hp;
               }
               if(this.torso_slot.en!=null) {
                 this.max_energi-=this.torso_slot.en;
               }
               if(this.torso_slot.dmg!=null) {
                 this.dmg-=this.torso_slot.dmg;
               }
               if(this.torso_slot.def!=null) {
                 this.def-=this.torso_slot.def;
               }
               if(this.torso_slot.dex!=null) {
                 this.dex-=this.torso_slot.def;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.torso_slot));}
               this.torso_slot=null;
         }
       }
       if(x<965&&x>905&&y<330&&y>280){
         //pents_slot , leg-armur
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="leg-armur"){
                if(this.pents_slot==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.pents_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.pents_slot.hp!=null){
                     this.max_helth-=this.pents_slot.hp;
                   }
                   if(this.pents_slot.en!=null) {
                     this.max_energi-=this.pents_slot.en;
                   }
                   if(this.hands_pents_slotslot.dmg!=null) {
                     this.dmg-=this.pents_slot.dmg;
                   }
                   if(this.pents_slot.def!=null) {
                     this.def-=this.pents_slot.def;
                   }
                   if(this.pents_slot.dex!=null) {
                     this.dex-=this.pents_slot.dex;
                   }
                   intermediar=clone(this.pents_slot);
                   this.pents_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.pents_slot.hp!=null){
                 this.max_helth-=this.pents_slot.hp;
               }
               if(this.pents_slot.en!=null) {
                 this.max_energi-=this.pents_slot.en;
               }
               if(this.pents_slot.dmg!=null) {
                 this.dmg-=this.pents_slot.dmg;
               }
               if(this.pents_slot.def!=null) {
                 this.def-=this.pents_slot.def;
               }
               if(this.pents_slot.dex!=null) {
                 this.dex-=this.pents_slot.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.pents_slot));}
               this.pents_slot=null;
         }
       }
       if(x<965&&x>905&&y<390&&y>340){
         //shues_slot , fit-armur
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="fit-armur"){
                if(this.shues_slot==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.shues_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.shues_slot.hp!=null){
                     this.max_helth-=this.shues_slot.hp;
                   }
                   if(this.shues_slot.en!=null) {
                     this.max_energi-=this.shues_slot.en;
                   }
                   if(this.shues_slot.dmg!=null) {
                     this.dmg-=this.shues_slot.dmg;
                   }
                   if(this.shues_slot.def!=null) {
                     this.def-=this.shues_slot.def;
                   }
                   if(this.shues_slot.dex!=null) {
                     this.dex-=this.shues_slot.dex;
                   }
                   intermediar=clone(this.shues_slot);
                   this.shues_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.shues_slot.hp!=null){
                 this.max_helth-=this.shues_slot.hp;
               }
               if(this.shues_slot.en!=null) {
                 this.max_energi-=this.shues_slot.en;
               }
               if(this.shues_slot.dmg!=null) {
                 this.dmg-=this.shues_slot.dmg;
               }
               if(this.shues_slot.def!=null) {
                 this.def-=this.shues_slot.def;
               }
               if(this.shues_slot.dex!=null) {
                 this.dex-=this.shues_slot.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.shues_slot));}
               this.shues_slot=null;
         }
       }
       if(x<965&&x>905&&y<450&&y>400){
         //caruta
       }
       if(x<1070&&x>1020&&y<450&&y>400){
         //sac de dormit
       }
       if(x<845&&x>795&&y<450&&y>400){
         // call
       }
       if(x<845&&x>795&&y<210&&y>160){
         // cercel stanga
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="earring"){
                if(this.earring_slot1==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.earring_slot1=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.earring_slot1.hp!=null){
                     this.max_helth-=this.earring_slot1.hp;
                   }
                   if(this.earring_slot1.en!=null) {
                     this.max_energi-=this.earring_slot1.en;
                   }
                   if(this.earring_slot1.dmg!=null) {
                     this.dmg-=this.earring_slot1.dmg;
                   }
                   if(this.earring_slot1.def!=null) {
                     this.def-=this.earring_slot1.def;
                   }
                   if(this.earring_slot1.dex!=null) {
                     this.dex-=this.earring_slot1.dex;
                   }
                   intermediar=clone(this.earring_slot1);
                   this.earring_slot1=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.earring_slot1.hp!=null){
                 this.max_helth-=this.earring_slot1.hp;
               }
               if(this.earring_slot1.en!=null) {
                 this.max_energi-=this.earring_slot1.en;
               }
               if (this.earring_slot1.dmg!=null) {
                 this.dmg-=this.earring_slot1.dmg;
               }
               if (this.earring_slot1.def!=null) {
                 this.def-=this.earring_slot1.def;
               }
               if(this.earring_slot1.dex!=null) {
                 this.dex-=this.earring_slot1.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.earring_slot1));}
               this.earring_slot1=null;
         }
       }
       if(x<1070&&x>1020&&y<210&&y>160){
         // cercel dreapta
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="earring"){
                if(this.earring_slot2==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.earring_slot2=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.earring_slot2.hp!=null){
                     this.max_helth-=this.earring_slot2.hp;
                   }
                   if(this.earring_slot2.en!=null) {
                     this.max_energi-=this.earring_slot2.en;
                   }
                   if(this.earring_slot2.dmg!=null) {
                     this.dmg-=this.earring_slot2.dmg;
                   }
                   if(this.earring_slot2.def!=null) {
                     this.def-=this.earring_slot2.def;
                   }
                   if(this.earring_slot2.dex!=null) {
                     this.dex-=this.earring_slot2.dex;
                   }
                   intermediar=clone(this.earring_slot2);
                   this.earring_slot2=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.earring_slot2.hp!=null){
                 this.max_helth-=this.earring_slot2.hp;
               }
               if(this.earring_slot2.en!=null) {
                 this.max_energi-=this.earring_slot2.en;
               }
               if(this.earring_slot2.dmg!=null) {
                 this.dmg-=this.earring_slot2.dmg;
               }
               if(this.earring_slot2.def!=null) {
                 this.def-=this.earring_slot2.def;
               }
               if(this.earring_slot2.dex!=null) {
                 this.dex-=this.earring_slot2.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.earring_slot2));}
               this.earring_slot2=null;
         }
       }
       if(x<1070&&x>1020&&y<270&&y>220){
         // pandantiv
         if(this.selected[0]!=-1 && this.selected[1]!=-1){
              if(this.inventory[this.selected[0]*10+this.selected[1]].type==="neckles"){
                if(this.neckles==null){
                  if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                    this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                    this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                    this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                    this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                  }
                  if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                    this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                  }
                  this.neckles=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                  // this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                  // this.hand_r_slot=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                  // this.inventory.splice(this.selected[0]*10+this.selected[1],1);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }else{
                   if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null){
                     this.max_helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null) {
                     this.max_energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dmg!=null) {
                     this.dmg+=this.inventory[this.selected[0]*10+this.selected[1]].dmg;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].def!=null) {
                     this.def+=this.inventory[this.selected[0]*10+this.selected[1]].def;
                   }
                   if(this.inventory[this.selected[0]*10+this.selected[1]].dex!=null) {
                     this.dex+=this.inventory[this.selected[0]*10+this.selected[1]].dex;
                   }
                   if(this.neckles.hp!=null){
                     this.max_helth-=this.neckles.hp;
                   }
                   if(this.neckles.en!=null) {
                     this.max_energi-=this.neckles.en;
                   }
                   if(this.neckles.dmg!=null) {
                     this.dmg-=this.neckles.dmg;
                   }
                   if(this.neckles.def!=null) {
                     this.def-=this.neckles.def;
                   }
                   if(this.neckles.dex!=null) {
                     this.dex-=this.neckles.dex;
                   }
                   intermediar=clone(this.neckles);
                   this.neckles=clone(this.inventory[this.selected[0]*10+this.selected[1]]);
                   this.inventory[this.selected[0]*10+this.selected[1]]=clone(intermediar);
                   this.selected[0]=-1;
                   this.selected[1]=-1;
                 }
              }
         }else{

               if(this.neckles.hp!=null){
                 this.max_helth-=this.neckles.hp;
               }
               if(this.neckles.en!=null) {
                 this.max_energi-=this.neckles.en;
               }
               if(this.neckles.dmg!=null) {
                 this.dmg-=this.neckles.dmg;
               }
               if(this.neckles.def!=null) {
                 this.def-=this.neckles.def;
               }
               if(this.neckles.dex!=null) {
                 this.dex-=this.neckles.dex;
               }if(this.inventory.length<this.max_inventory){
               this.inventory.push(clone(this.neckles));}
               this.neckles=null;
         }
       }

     }else{
       if(Math.sqrt(((1045-x)*(1045-x))+((725-y)*(725-y)))<=50&&this.selected[0]!=-1){
         this.inventory.splice(this.selected[0]*10+this.selected[1],1);
         this.selected[0]=-1;
         this.selected[1]=-1;
         console.log("intem delete");
       }
       if(x<970&&x>790&&y<750&&y>700 &&this.selected[0]!=-1 && this.inventory[this.selected[0]*10+this.selected[1]].type==="consumable"){
         if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null&&this.helth+this.inventory[this.selected[0]*10+this.selected[1]].hp>this.max_helth)
         {

           this.helth=this.max_helth;
           if (this.inventory[this.selected[0]*10+this.selected[1]].en!=null&&this.energi+this.inventory[this.selected[0]*10+this.selected[1]].en>this.max_energi) {
              this.energi=this.max_energi;
           }
           else if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null)
           {
             this.energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
           }
         }
         else
         if(this.inventory[this.selected[0]*10+this.selected[1]].hp!=null)
         {
           this.helth+=this.inventory[this.selected[0]*10+this.selected[1]].hp;
           if (this.inventory[this.selected[0]*10+this.selected[1]].en!=null&&this.energi+this.inventory[this.selected[0]*10+this.selected[1]].en>this.max_energi) {
              this.energi=this.max_energi;
           }
           else if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null)
           {
             this.energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
           }
         }else if (this.inventory[this.selected[0]*10+this.selected[1]].en!=null&&this.energi+this.inventory[this.selected[0]*10+this.selected[1]].en>this.max_energi) {
            this.energi=this.max_energi;
         }
         else if(this.inventory[this.selected[0]*10+this.selected[1]].en!=null)
         {
           this.energi+=this.inventory[this.selected[0]*10+this.selected[1]].en;
         }
         console.log("consumat");
         this.inventory.splice(this.selected[0]*10+this.selected[1],1);
         this.selected[0]=-1;
         this.selected[1]=-1;
       }
      // console.log("suntem in descriere") ;
    }
  },
  incaseaza:function(x){
      if(this.silvar+x>100){
      this.gold=Math.floor((this.silvar+x)/100);
      this.silvar=(this.silvar+x)%100;
    //  console.log((this.silvar+x)%100);
      }else
      {
        this.silvar+=x;
      }
  },
  plateste:function(x)
   {
    var gold=Math.floor(x/100);
    var silver;
    if(this.silvar-(x-gold*100)<0)
    {
      gold+1;
      silver=100+this.silvar-(x-gold*100);
    }
    else
    {
      silver=this.silvar-(x-gold*100);
    }
    if(this.gold>=gold && this.silvar>=silver)
    {  this.gold-=gold;
      this.silvar-=silver;
      return true;
   }else{return false;}
  },
  findaction:function(x,y)
    {
    //aici treuie pusa conditia sa le ia pe  toate
    if(x>460&&x<610&&y>450&&y<510)
      {
        var i;
        console.log(this.loot.length);
        for(i=0;i<this.loot.length;i++)
        {

          if(typeof this.loot[i]==="number")
          {
              console.log("iau banuti"+this.loot[i]);
            this.incaseaza(this.loot[i])
          }else
          if(typeof this.loot[i]==="object" && this.loot[i]!=null)
          {console.log("intru aici");
          if(this.inventory.length<this.max_inventory){
            this.inventory.push(clone(this.loot[i]));}
          }

        }
        this.loot=[];
        this.self=0;
      }else
    if(x>650&&x<800&&y>450&&y<510)
        {
        //am apasat pe arunca gunoaiele astea
          console.log("am apasat pe arunca gunoaiele astea");
            this.loot=[];
            this.self=0;
          }else
    if(x>460&&x<510&&y>390&&y<440){
      if(typeof this.loot[0]=="number"){
        this.incaseaza(this.loot[0]);
      }else{
        if(this.inventory.length<this.max_inventory){
        this.inventory.push(clone(this.loot[0]));}
      }
      this.loot.splice(0,1);

    }
  },
  atack:function(x,y){
    if(x>465&&x<640&&y>480&&y<540)
     {
          // console.log("atakal");
          this.passtime(10*60);
          var i;
          var p_dmg=0,m_dmg=0;
          for (var i = 0; i < betle.pd; i++) {

            var d =dice();
            switch (i) {
              case 0:betle.pd1=d;
                break;
              case 1:betle.pd2=d;
                break;
              case 2:betle.pd3=d;
                break;
              case 3:betle.pd4=d;
                break;
              case 4:betle.pd5=d;
                break;
              case 5:betle.pd6=d;
                break;
            }
            p_dmg+=this.dmg*multiplaer(d);
          }
          for (var i = 0; i < betle.md; i++) {

            var d =dice();
            switch (i) {
              case 0:betle.md1=d;
                break;
              case 1:betle.md2=d;
                break;
              case 2:betle.md3=d;
                break;
              case 3:betle.md4=d;
                break;
              case 4:betle.md5=d;
                break;
              case 5:betle.md6=d;
                break;
            }
            m_dmg+=this.n_monster.dmg*multiplaer(d);
          }
          if(m_dmg>=this.def){
          betle.p_l=m_dmg-this.def;
          this.helth-=m_dmg-this.def;
            }else{
          betle.p_l=0;
          this.helth-=0;
            }
          if(p_dmg>=this.n_monster.def){
          betle.m_l=p_dmg-this.n_monster.def;
          this.n_monster.hp-=p_dmg-this.n_monster.def;
        }else{
            betle.m_l=0;
            this.n_monster.hp-=0;
          }
            if(this.helth<0)
            {
              this.deth();
              this.self=0;
              this.n_monster=null;
            }else
            if(this.n_monster.hp<0)
            {
              this.killdmonster();
            }
    }
    if(x>465&&x<640&&y>570&&y<630)
      {
        if(this.energi>=5)
        { var m_dmg=0;
          this.passtime(2*60*60);
          this.energi-=5;
          for (var i = 0; i < betle.md; i++) {

            var d =dice();
            switch (i) {
              case 0:betle.md1=d;
                break;
              case 1:betle.md2=d;
                break;
              case 2:betle.md3=d;
                break;
              case 3:betle.md4=d;
                break;
              case 4:betle.md5=d;
                break;
              case 5:betle.md6=d;
                break;
            }
            m_dmg+=this.n_monster.dmg*multiplaer(d);
          }
          this.helth-=m_dmg/10;
          if(this.helth<0)
          {
            this.deth();
            this.self=0;
            this.n_monster=null;
            this.self=0;
          }
          console.log("fugi omulet fugi....");
          this.n_monster=null;
          this.self=0;
        }
      }
  },
  addxp:function(z)
    {
      this.exp+=z;
      if(this.exp>lvl[this.lvl])
      {
        this.lvl++;
      };
    },
  killdmonster:function()
    {
      //adauga loot
      var i;
      for (var i = 0; i < this.n_monster.lootnr; i++) {
        var ran=random(0,2);
        console.log("sunt in for"+i);
        switch (this.n_monster.loot[ran]) {
          case "l1":loot1();
            break;
          case "l2":loot2();
            break;
          case "l3":loot3();
            break;
          case "l4":loot4();
            break;
          case "l5":loot5();
            break;
          case "l6":loot6();
            break;
          case "l7":loot7();
            break;
          case "l8":loot8();
            break;
        }
      }
      //deschide lootscrean annd clouse batle sceen
      player.n_monster=null;
      player.self=3;
      betle.pd1=null;betle.pd2=null;betle.pd3=null;betle.pd4=null;betle.pd5=null;betle.pd6=null;
      betle.md1=null;betle.md2=null;betle.md3=null;betle.md4=null;betle.md5=null;betle.md6=null;
      betle.m_l=0;
      betle.p_l=0;
    }
 };
// };
//asta doar ca sa setem trebuie facuta o functie pt setarea initial
player.setposition(3,0);
function initfight(){
      //vede cine are mai mare dexteritatea
      var n=1 ,m=1 , s=player.n_monster.dex;
      if(player.n_monster.dex>player.dex){
        m=Math.floor(player.n_monster.dex/player.dex)+1;
      }else if(player.dex>player.n_monster.dex){
        n=Math.floor(player.dex/player.n_monster.dex)+1;
      }
      if(n>6){
        betle.pd=6;
      }else{
        betle.pd=n;
      }
      if(m>6){
        betle.md=6;
      }else{
        betle.md=m;
      }
      var i;
      for (var i = 0; i < n; i++) {
            switch (i) {
              case 0:betle.pd1=0;
                break;
              case 1:betle.pd2=0;
                break;
              case 2:betle.pd3=0;
                break;
              case 3:betle.pd4=0;
                  break;
              case 4:betle.pd5=0;
                break;
              case 5:betle.pd6=0;
                  break;
              default:

            }
          };
      for (var i = 0; i < m; i++) {
                switch (i) {
                  case 0:betle.md1=0;
                    break;
                  case 1:betle.md2=0;
                    break;
                  case 2:betle.md3=0;
                    break;
                  case 3:betle.md4=0;
                      break;
                  case 4:betle.md5=0;
                    break;
                  case 5:betle.md6=0;
                      break;
                  default:

                }
              }

}
function multiplaer(d){
  switch (d) {
    case 1:return 0.5;
      break;
    case 2:return 0.75;
      break;
    case 3:return 1;
      break;
    case 4:return 1.25;
      break;
    case 5:return 1.5;
      break;
    case 6:return 2;
      break;
  }
}
function loot1(){
  var list=[];
  list.push(1);list.push(2);list.push(3);list.push(4);list.push(5);list.push(6);
  var i;
  //pune mancarea pe care ar putea sa o gaseasca
  for (var i = 0; i < 5; i++) {
    list.push(clone(stuf.food[i]));
  }
  //pune itemele pe care ar putea sa le gaseasca
  list.push(clone(stuf.wepan[0]));
  list.push(clone(stuf.armur[0]));
  list.push(clone(stuf.armur[1]));
  list.push(7);
  list.push(clone(stuf.armur[2]));
  list.push(clone(stuf.armur[3]));
  list.push(8);
  list.push(clone(stuf.armur[4]));
  list.push(clone(stuf.armur[5]));
  list.push(clone(stuf.julary[0]));
  list.push(9);
  list.push(clone(stuf.julary[2]));
  list.push(clone(stuf.julary[4]));
  list.push(10);
  // ar mai trebui adaugate si alte iteme cand sunt facute

  // puen in lu itemu
  var ran=random(0,list.length);

  if(typeof list[ran] === "number")
  {
    player.loot.push(list[ran]);
  } else {
      player.loot.push(clone(list[ran]));
  }
}
///loot 2 trebuie schimbat ... acum e facut in interesul functionarii TODO
function loot2(){
  var list=[];
  list.push(1);list.push(2);list.push(3);list.push(4);list.push(5);list.push(6);
  var i;
  //pune mancarea pe care ar putea sa o gaseasca
  for (var i = 0; i < 5; i++) {
    list.push(clone(stuf.food[i]));
  }
  //pune itemele pe care ar putea sa le gaseasca
  list.push(clone(stuf.wepan[0]));
  list.push(clone(stuf.armur[0]));
  list.push(clone(stuf.armur[1]));
  list.push(7);
  list.push(clone(stuf.armur[2]));
  list.push(clone(stuf.armur[3]));
  list.push(8);
  list.push(clone(stuf.armur[4]));
  list.push(clone(stuf.armur[5]));
  list.push(clone(stuf.julary[0]));
  list.push(9);
  list.push(clone(stuf.julary[2]));
  list.push(clone(stuf.julary[4]));
  list.push(10);
  // ar mai trebui adaugate si alte iteme cand sunt facute

  // puen in lu itemu
  var ran=random(0,list.length);

  if(typeof list[ran] === "number")
  {
    player.loot.push(list[ran]);
  } else {
      player.loot.push(clone(list[ran]));
  }
}
function loot3(){
  return 3;
}
function loot4(){
  return 4;
}
function loot5(){
  return 5;
}
function loot6(){
  return 6;
}
function dice(){
    // random 1-6
    var num;
    num=Math.floor((Math.random() * 6) + 1);
    //    console.log(num);
    return num;
};
function random(min,max){
  var num;
  num=Math.floor((Math.random() * max)+min );
    return num;
}
// vad pe care cerculet am apasat
function wherclic(x,y,centru)
    {var buton;
      var raza=25;
    // console.log("ecuatia dreptei");
    // console.log(centru);
    // console.log();
     //se verifica daca sa apasat pe camp
     if(player.i%2===0){
      if(Math.sqrt(((centru.x-50-x)*(centru.x-50-x))+((centru.y-y)*(centru.y-y)))<=raza){
           buton=1;
           console.log("am apasat pe butonul 1");
        }
        else if(Math.sqrt(((centru.x-25-x)*(centru.x-25-x))+((centru.y-50-y)*(centru.y-50-y)))<=raza){
          buton=2;
          player.self=2;
          console.log("am apasat pe butonul 2");
        }
        else if(Math.sqrt(((centru.x+25-x)*(centru.x+25-x))+((centru.y-50-y)*(centru.y-50-y)))<=raza){
          buton=3;
          console.log("am apasat pe butonul 3");
        }
        else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y-y)*(centru.y-y)))<=raza){
          buton=4;
          console.log("am apasat pe butonul 4");
        }
        else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y-y)*(centru.y-y)))<=raza){
          buton=5;
          console.log("am apasat pe butonul 5");
        }
        else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y-y)*(centru.y-y)))<=raza){
          buton=6;
          console.log("am apasat pe butonul 6");
        }
        else if(Math.sqrt(((centru.x-x)*(centru.x-x))+((centru.y-y)*(centru.y-y)))<=raza){
          buton=7;
          player.self=5;
          console.log("am apasat pe inventori");
        }
      else{
        buton=0;
      };}
      else if(player.i%2===1){
       if(Math.sqrt(((centru.x-50-x)*(centru.x-50-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
            buton=1;
            console.log("am apasat pe butonul 1");
         }
         else if(Math.sqrt(((centru.x-25-x)*(centru.x-25-x))+((centru.y-y)*(centru.y-y)))<=raza){
           buton=2;
           player.self=2;
           console.log("am apasat pe butonul 2");
         }
         else if(Math.sqrt(((centru.x+25-x)*(centru.x+25-x))+((centru.y-y)*(centru.y-y)))<=raza){
           buton=3;
           console.log("am apasat pe butonul 3");
         }
         else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
           buton=4;
           console.log("am apasat pe butonul 4");
         }
         else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
           buton=5;
           console.log("am apasat pe butonul 5");
         }
         else if(Math.sqrt(((centru.x+50-x)*(centru.x+50-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
           buton=6;
           console.log("am apasat pe butonul 6");
         }  else if(Math.sqrt(((centru.x-x)*(centru.x-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
             buton=7;
               player.self=5;
             console.log("am apasat pe inventori");
           }
       else{
         buton=0;
       };
     };
      //  console.log(buton);
      return buton;
};
//afla care poligon a fost apasat//infunctiasta s-ar putea afla
// si cere e centruu si le trimita prin obiect
function cenAftCoordonates(i,j){
    var center={
      x:undefined,
      y:undefined,
    }
      if (i%2==0){
        center.y=i*50+50;
        center.x=150*j+50;
      }
      else if(i%2==1){
        center.y=i*50;
        center.x=150*j+125;
      };
      return center;
}
//returneaza true/falce daca se afla in hexagonu cu centru c si punctul de coordonate x,y
function inHexagon(c,x,y){
   //avem un hexagon care are puncte care au la randul lor
    var inside=true;
    var h={
      p1:{x:null,y:null},
      p2:{x:null,y:null},
      p3:{x:null,y:null},
      p4:{x:null,y:null},
      p5:{x:null,y:null},
      p6:{x:null,y:null},
    }
    //declar punctele hexagonuluifata de centru
    h.p1.x=c.x-50;h.p1.y=c.y;
    h.p2.x=c.x-25;h.p2.y=c.y-50;
    h.p3.x=c.x+25;h.p3.y=c.y-50;
    h.p4.x=c.x+50;h.p4.y=c.y;
    h.p5.x=c.x+25;h.p5.y=c.y+50;
    h.p6.x=c.x-25;h.p6.y=c.y+50;
    if (x < h.p1.x || x > h.p4.x || y < h.p2.y || y > h.p5.y) {
    			inside = false;
    		}else{
    			if (x < h.p2.x) {
    				var yUpLimit = (h.p6.y - h.p1.y) * (x - h.p1.x) / (h.p6.x - h.p1.x) + h.p1.y;
    				var yDownLimit = (h.p2.y - h.p1.y) * (x - h.p1.x) / (h.p2.x - h.p1.x) + h.p1.y;
    				if (y < yDownLimit || y > yUpLimit)
    					inside = false;
    			}
    			if (x > h.p5.x) {
    				var yUpLimit = (h.p5.y - h.p4.y) * (x - h.p4.x) / (h.p5.x - h.p4.x) + h.p4.y;
    				var yDownLimit = (h.p4.y - h.p3.y) * (x - h.p3.x) / (h.p4.x - h.p3.x) + h.p3.y;
    				if (y < yDownLimit || y > yUpLimit)
    					inside = false;
    			};
    		};
      //  console.log(inside);
        return inside;
};

function clickt(x,y){
  var coordonate={
    i : undefined,
    j : undefined
  }

  var center={
    x: undefined ,
    y: undefined
  }

  var cadran={
  linie:undefined ,
  coloana: undefined
  }
  //ar rebui sa seteze centru
    function defcenter(z){
      if(z===1)
      {
        center.x=cadran.coloana*100-50+(cadran.coloana-1)*50;
        center.y=cadran.linie*100-50;
      }else if(z===2){
        center.x=(cadran.coloana*150)-175;
        center.y=cadran.linie*100-100;
      }else if(z===3){
        center.x=cadran.coloana*150-175;
        center.y=cadran.linie*100+100;
      }else if(z===4){
        center.x=(cadran.coloana+1)*150-175;
        center.y=cadran.linie*100;
      }else if(z===5){
          center.x=(cadran.coloana+1)*150-175;
          center.y=cadran.linie*100-100;
        }
    };
      // un fel de raza
      var r=47;
      cadran.linie=Math.floor(y/100)+1;
      cadran.coloana=Math.floor(x/150)+1;
      // console.log(cadran);
      //verificam pt fiecare centru daca se afla in hexagonu respectiv
      defcenter(1);
      // console.log(center);
      if(inHexagon(center,x,y)){

        coordonate.i=(cadran.linie-1)*2;
        coordonate.j=(cadran.coloana-1);
      }
      else{
        defcenter(2);

        if(inHexagon(center,x,y)){

          coordonate.i=(cadran.linie-1)*2-1;
          coordonate.j=(cadran.coloana-1)-1;//aici se refera de la spatiile din cadranu precedent
        }
        else{
          defcenter(3);
          if(inHexagon(center,x,y)){
            coordonate.i=(cadran.linie)*2+1;
            coordonate.j=(cadran.coloana-1)-1;
          }
          else{
            defcenter(4);
            // console.log(center);
            // console.log(inHexagon(center,x,y));
            if(inHexagon(center,x,y)){
              // console.log((cadran.linie-1)*2+1);
              // console.log((cadran.coloana-1));
              coordonate.i=(cadran.linie-1)*2+1;
              coordonate.j=(cadran.coloana-1);
            }
            else{
              defcenter(5);
              // console.log(center);
              // console.log(inHexagon(center,x,y));
              if(inHexagon(center,x,y)){
                // console.log((cadran.linie-1)*2-1);
                // console.log((cadran.coloana-1));
                coordonate.i=(cadran.linie-1)*2-1;
                coordonate.j=(cadran.coloana-1);
              };
            };
          };
        };
      };
      return coordonate;
    }

(function(){
      var x=0, y=0;
      var  i, j, pozx;
      var pozy=0;

     var canvas=document.getElementById("feeldsbord");
     var c=canvas.getContext("2d");

  function render(){
      c.clearRect(0,0,canvas.width,canvas.height);
       rendermap();
       renderplayer();
       renderwarning();
       if(player.n_monster!=null)
       {
         player.self=100;
       }
       if(player.self===1){
         renderoptions(player.i,player.j);
       };
       if(player.self===2){
         renderfoodpanel();
       };
       if(player.self===3){
         renderloot();
       }
       if(player.self===5){
         renderinventory();
       }
       if(player.self===100){
         renderbatleground();
       }
       renderwarning();
      };
  function renderbatleground(){
    //randeaza cadru exterior
    c.beginPath();
    c.rect(250,150,600,600);
    c.fillStyle="rgba(50,50,50,1)";
    c.stroke();
    c.fill();
    //randeaza partea stanga
    c.beginPath();
    c.rect(250,150,300,300);
    c.fillStyle="rgba(50,50,50,1)";
    c.stroke();
    c.fill();
    //randeaza partea dreapta
    c.beginPath();
    c.rect(550,150,300,300);
    c.fillStyle="rgba(50,50,50,1)";
    c.stroke();
    c.fill();
    //aici trebuie pus backrounurile
    // {}
    //aici trebuie pusi monstri
    if(player.n_monster.type==="s")
      {
        c.beginPath();
        var my_pic=new Image();
        my_pic.src=player.n_monster.href;
        c.drawImage(my_pic,635,300);

      }else if(player.n_monster.type==="m"){
        c.beginPath();
        var my_pic=new Image();
        my_pic.src=player.n_monster.href;
        c.drawImage(my_pic,575,200);

      }
      else if(player.n_monster.type==="l"||player.n_monster.type==="b"){
        c.beginPath();
        var my_pic=new Image();
        my_pic.src=player.n_monster.href;
        c.drawImage(my_pic,545,150);

      }
    //randeaza vietile
    c.beginPath();
    var my_pic=new Image();
    my_pic.src="img/heart.png";
    c.drawImage(my_pic,270,170)
    c.beginPath();
    var my_pic=new Image();
    my_pic.src="img/heart.png";
    c.drawImage(my_pic,570,170);
    c.beginPath();
    c.rect(310,168,200/(player.max_helth/player.helth),30);
    c.fillStyle = "red";
    c.fill();
    c.beginPath();
    c.rect(310,168,200,30);
    c.stroke();
    c.beginPath();
    c.rect(610,168,200/(betle.m_init_h/player.n_monster.hp),30);
    c.fillStyle = "red";
    c.fill();
    c.beginPath();
    c.rect(610,168,200,30);
    c.stroke();
    c.beginPath();
    c.fillStyle = "white";
    c.font = "14px Verdana";
    c.fillText(Math.floor(player.helth*10)/10+"/"+player.max_helth+" ", 360, 188);
    c.beginPath();
    c.fillStyle = "white";
    c.font = "14px Verdana";
    c.fillText(Math.floor(player.n_monster.hp*10)/10+"/"+betle.m_init_h+" ", 660, 188);
    c.beginPath();
    c.fillStyle = "red";
    c.font = "64px Verdana";
    c.fillText("VS", 505, 320);
    c.beginPath();
    c.fillStyle = "red";
    c.font = "20px Verdana";
    c.fillText("-"+betle.p_l, 460, 220);
    c.beginPath();
    c.fillStyle = "red";
    c.font = "20px Verdana";
    c.fillText("-"+betle.m_l, 750, 220);
    c.beginPath();
    c.rect(250,450,190,130);
    c.stroke();
    c.beginPath();
    c.rect(440,450,220,300);
    c.stroke();
    c.beginPath();
    c.rect(660,450,190,130);
    c.stroke();
    //randeaza zarurile
    var i;
    for (var i = 0; i < 6; i++) {
      switch (i) {
        case 0:
            if(betle.pd1==null){
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/no-dice.png";
              c.drawImage(my_pic,260+i*60,460);
            }else {
              switch (betle.pd1) {
                case 0:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/yes-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 1:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/1-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 2:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/2-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 3:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/3-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 4:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/4-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 5:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/5-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 6:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/6-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
              }
            }
              if(betle.md1==null){
                c.beginPath();
                // console.log(true);
                var my_pic=new Image();
                my_pic.src="img/no-dice.png";
                c.drawImage(my_pic,670+i*60,460);
              }else {
                switch (betle.md1) {
                  case 0:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/yes-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 1:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/1-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 2:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/2-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 3:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/3-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 4:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/4-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 5:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/5-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 6:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/6-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                }
              }
          break;
        case 1:
            if(betle.pd2==null){
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/no-dice.png";
              c.drawImage(my_pic,260+i*60,460);
            }else {
              switch (betle.pd2) {
                case 0:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/yes-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 1:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/1-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 2:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/2-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 3:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/3-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 4:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/4-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 5:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/5-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
                case 6:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/6-dice.png";
                c.drawImage(my_pic,260+i*60,460);
                  break;
              }
            }
              if(betle.md2==null){
                c.beginPath();
                // console.log(true);
                var my_pic=new Image();
                my_pic.src="img/no-dice.png";
                c.drawImage(my_pic,670+i*60,460);
              }else {
                switch (betle.md2) {
                  case 0:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/yes-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 1:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/1-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 2:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/2-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 3:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/3-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 4:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/4-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 5:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/5-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                  case 6:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/6-dice.png";
                  c.drawImage(my_pic,670+i*60,460);
                    break;
                }
              }
          break;
        case 2:
          if(betle.pd3==null){
            c.beginPath();
            var my_pic=new Image();
            my_pic.src="img/no-dice.png";
            c.drawImage(my_pic,260+i*60,460);
          }else {
            switch (betle.pd3) {
              case 0:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/yes-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 1:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/1-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 2:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/2-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 3:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/3-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 4:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/4-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 5:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/5-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
              case 6:
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/6-dice.png";
              c.drawImage(my_pic,260+i*60,460);
                break;
            }
          }
            if(betle.md3==null){
              c.beginPath();
              // console.log(true);
              var my_pic=new Image();
              my_pic.src="img/no-dice.png";
              c.drawImage(my_pic,670+i*60,460);
            }else {
              switch (betle.md3) {
                case 0:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/yes-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 1:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/1-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 2:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/2-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 3:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/3-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 4:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/4-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 5:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/5-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
                case 6:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/6-dice.png";
                c.drawImage(my_pic,670+i*60,460);
                  break;
              }
            }
          break;
        case 3:
          i-=3;
            if(betle.pd4==null){
              c.beginPath();
              var my_pic=new Image();
              my_pic.src="img/no-dice.png";
              c.drawImage(my_pic,260+i*60,520);
            }else {
              switch (betle.pd4) {
                case 0:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/yes-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 1:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/1-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 2:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/2-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 3:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/3-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 4:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/4-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 5:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/5-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
                case 6:
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/6-dice.png";
                c.drawImage(my_pic,260+i*60,520);
                  break;
              }
            }
              if(betle.md4==null){
                c.beginPath();
                // console.log(true);
                var my_pic=new Image();
                my_pic.src="img/no-dice.png";
                c.drawImage(my_pic,670+i*60,520);
              }else {
                switch (betle.md4) {
                  case 0:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/yes-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 1:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/1-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 2:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/2-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 3:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/3-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 4:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/4-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 5:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/5-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                  case 6:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/6-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                    break;
                }
              }
              i+=3;
          break;
        case 4:
            i-=3;
              if(betle.pd5==null){
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/no-dice.png";
                c.drawImage(my_pic,260+i*60,520);
              }else {
                switch (betle.pd5) {
                  case 0:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/yes-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 1:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/1-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 2:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/2-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 3:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/3-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 4:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/4-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 5:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/5-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 6:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/6-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                }
              }
                if(betle.md5==null){
                  c.beginPath();
                  // console.log(true);
                  var my_pic=new Image();
                  my_pic.src="img/no-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                }else {
                  switch (betle.md5) {
                    case 0:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/yes-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 1:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/1-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 2:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/2-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 3:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/3-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 4:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/4-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 5:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/5-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 6:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/6-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                  }
                }
                i+=3;
          break;
        case 5:
            i-=3;
              if(betle.pd6==null){
                c.beginPath();
                var my_pic=new Image();
                my_pic.src="img/no-dice.png";
                c.drawImage(my_pic,260+i*60,520);
              }else {
                switch (betle.pd6) {
                  case 0:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/yes-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 1:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/1-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 2:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/2-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 3:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/3-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 4:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/4-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 5:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/5-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                  case 6:
                  c.beginPath();
                  var my_pic=new Image();
                  my_pic.src="img/6-dice.png";
                  c.drawImage(my_pic,260+i*60,520);
                    break;
                }
              }
                if(betle.md6==null){
                  c.beginPath();
                  // console.log(true);
                  var my_pic=new Image();
                  my_pic.src="img/no-dice.png";
                  c.drawImage(my_pic,670+i*60,520);
                }else {
                  switch (betle.md6) {
                    case 0:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/yes-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 1:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/1-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 2:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/2-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 3:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/3-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 4:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/4-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 5:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/5-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                    case 6:
                    c.beginPath();
                    var my_pic=new Image();
                    my_pic.src="img/6-dice.png";
                    c.drawImage(my_pic,670+i*60,520);
                      break;
                  }
                }
                i+=3;
          break;
      }
    }
    //randeaza butoanele
    c.beginPath();
    c.rect(465,480,170,60);
    c.fillStyle="red";
    c.stroke();
    c.fill();
    c.beginPath();
    var my_pic=new Image();
    my_pic.src="img/white_skull.png";
    c.drawImage(my_pic,465,480);
    c.beginPath();
    c.fillStyle = "white";
    c.font = "26px Verdana";
    c.fillText("ATTACK", 530, 520);
    c.beginPath();
    c.rect(465,570,170,60);
    c.fillStyle="blue";
    c.stroke();
    c.fill();
    c.beginPath();
    c.rect(465,660,170,60);
    c.fillStyle="green";
    c.stroke();
    c.fill();
    c.beginPath();
    var my_pic=new Image();
    my_pic.src="img/runing-shues.png";
    c.drawImage(my_pic,470,575);
    c.beginPath();
    c.fillStyle = "white";
    c.font = "26px Verdana";
    c.fillText("ESCAPE", 528, 610);
    //randeaza descrierile
    var color="white"
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DMG: "+player.dmg, 260, 610);
    var color="white"
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DEF: "+player.def, 260, 668);
    var color="white"
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DEX: "+player.dex, 260, 735);
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DMG: "+player.n_monster.dmg, 670, 610);
    var color="white"
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DEF: "+player.n_monster.def, 670, 668);
    var color="white"
    c.beginPath();
    c.fillStyle = color;
    c.font = "20px Verdana";
    c.fillText("DEX: "+player.n_monster.dex, 670, 735);
  }
  function renderinventory(){
        //randeaza suportu pentru elementele din meniu
        c.beginPath();
        c.rect(170,150,610,610);
        c.fillStyle="rgba(50,50,50,0.95)";
        c.stroke();
        c.fill();

        var n=10,i,j,m=10,x,y,k=0,s=0;
        var items=player.max_inventory;
        for(i=0;i<m;i++){
          for(j=0;j<n;j++){
            x=170+j*50+(j+1)*10;
            y=50*i+10*(i+1)+150;
              if(items>0){
              if(player.selected[0]!=i || player.selected[1]!=j ){
              c.beginPath();
              c.rect(x,y,50,50);
              c.fillStyle="rgba(220,213,213,1)";
              c.lineWidth=1;
              c.strokeStyle="black";
              c.stroke();
              c.fill();
            }else if(player.selected[0]===i && player.selected[1]===j){
                c.beginPath();
                c.rect(x,y,50,50);
                c.fillStyle="rgba(220,213,213,1)";
                c.lineWidth=4;
                c.strokeStyle="blue";
                c.stroke();
                c.fill();
              };

              items-=1;

            }else{

              c.beginPath();
              c.rect(x,y,50,50);
              c.fillStyle="rgba(220,23,13,1)";
              c.lineWidth=1;
              c.strokeStyle="black";
              c.stroke();
              c.fill();

            }
          }
      };

      for(i=0;i<player.inventory.length;i++){
        j=i%10;
        k=Math.floor(i/10);
        x=170+j*50+(j+1)*10;
        y=50*k+10*(k+1)+150;
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.inventory[i].href;
        c.drawImage(my_pic3,x,y);
        if(player.inventory[i].q!=null){
          c.beginPath();
          c.fillStyle = "black";
          c.font = "20px Verdana";
          c.fillText(player.inventory[i].q, x+35, y+45);
        }
        if((i+1)%10!=0){s+=1;}
      };
    // randeaza suportu pentru echipamenet echipat
    // render  spaces
     {
      c.beginPath();
      c.rect(780,150,300,610);
      c.fillStyle="rgba(50,50,50,0.95)";
      c.stroke();
      c.fill();
      c.beginPath();
      var my_pic3=new Image();
      my_pic3.src="img/plaer-item-background-white.png";
      c.drawImage(my_pic3,780,155);
      //al doilea rand
      c.beginPath();
      c.rect(905,160,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(905,220,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(905,280,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(905,340,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(905,400,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      //primu rand
      c.beginPath();
      c.rect(795,280,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(795,220,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(795,340,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(795,160,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(795,400,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      //randu 3
      c.beginPath();
      c.rect(1020,160,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(1020,220,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(1020,280,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(1020,340,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      c.beginPath();
      c.rect(1020,400,50,50);
      c.fillStyle="rgba(220,213,213,1)";
      c.stroke();
      c.fill();
      if (player.had_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/helmet5.png";
        c.drawImage(my_pic3,905,160);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.had_slot.href;
        c.drawImage(my_pic3,905,160);
      }
      if (player.hands_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/glov.png";
        c.drawImage(my_pic3,795,220);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.hands_slot.href;
        c.drawImage(my_pic3,795,220);

      }
      if (player.ring_slot1==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/ring.png";
        c.drawImage(my_pic3,795,340);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.ring_slot1.href;
        c.drawImage(my_pic3,795,340);
      }
      if (player.ring_slot2==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/ring.png";
        c.drawImage(my_pic3,1020,340);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.ring_slot2.href;
        c.drawImage(my_pic3,1020,340);

      }
      if (player.earring_slot1==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/ler.png";
        c.drawImage(my_pic3,795,160);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.earring_slot1.href;
        c.drawImage(my_pic3,795,160);
      }
      if (player.earring_slot2==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/rer.png";
        c.drawImage(my_pic3,1020,160);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.earring_slot2.href;
        c.drawImage(my_pic3,1020,160);
      }
      if (player.neckles==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/neckles.png";
        c.drawImage(my_pic3,1020,220);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.neckles.href;
        c.drawImage(my_pic3,1020,220);
      }
      if (player.torso_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/body.png";
        c.drawImage(my_pic3,905,220);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.torso_slot.href;
        c.drawImage(my_pic3,905,220);
      }
      if (player.hand_l_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/hand1.png";
        c.drawImage(my_pic3,1020,280);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.hand_l_slot.href;
        c.drawImage(my_pic3,1020,280);
      }
      if (player.hand_r_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/hand1.png";
        c.drawImage(my_pic3,795,280);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.hand_r_slot.href;
        c.drawImage(my_pic3,795,280);
      }
      if (player.pents_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/pants.png";
        c.drawImage(my_pic3,905,280);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.pents_slot.href;
        c.drawImage(my_pic3,905,280);
      }
      if (player.shues_slot==null){
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src="img/fit.png";
        c.drawImage(my_pic3,905,340);
      }else{
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.shues_slot.href;
        c.drawImage(my_pic3,905,340);
      }
        if (player.hors_slot==null){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/hors.png";
          c.drawImage(my_pic3,795,400);
        }else{
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src=player.hors_slot.href;
          c.drawImage(my_pic3,795,400);
      }
        if (player.carage_slot==null){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/car.png";
          c.drawImage(my_pic3,905,400);
        }else{
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src=player.carage_slot.href;
          c.drawImage(my_pic3,905,400);
        }
        if (player.bag_slot==null){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/sleepbag.png";
          c.drawImage(my_pic3,1020,400);
        }else{
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src=player.bag_slot.href;
          c.drawImage(my_pic3,1020,400);
        }
    };
      //randeaza suportu pentru descriere
      c.beginPath();
      c.rect(780,520,300,240);
      c.fillStyle="rgba(50,50,50,0.95)";
      c.stroke();
      c.fill();
      //delete buton
      c.beginPath();
      var my_pic3=new Image();
      my_pic3.src="img/trash.png";
      c.drawImage(my_pic3,1020,700);
      if(player.selected[0]!=-1 && player.inventory[player.selected[0]*10+player.selected[1]].type==="consumable")
      {
        //aratam butonul de consum
        c.beginPath();
        c.rect(790,700,180,50);
        c.fillStyle="rgba(2,255,2,1)";
        c.stroke();
        c.fill();
        c.beginPath();
        c.fillStyle = "red";
        c.font = "35px Verdana";
        c.fillText("CONSUM",800 ,735 );
      }else
      {
        c.beginPath();
        c.rect(790,700,180,50);
        c.fillStyle="rgba(50,50,50,0.5)";
        c.stroke();
        c.fill();
        c.beginPath();
        c.fillStyle = "gray";
        c.font = "35px Verdana";
        c.fillText("CONSUM",800 ,735 );
      }
      if(player.selected[0]!=-1){
      c.beginPath();
      c.fillStyle = "white";
      c.font = "16px Verdana";
      c.fillText("Name: "+player.inventory[player.selected[0]*10+player.selected[1]].name,800 ,535 );
      c.beginPath();
      c.fillStyle = "white";
      c.font = "16px Verdana";
      c.fillText("Type  : "+player.inventory[player.selected[0]*10+player.selected[1]].type,800 ,555 );
      var s=0,g=0;
      g=Math.floor(player.inventory[player.selected[0]*10+player.selected[1]].value/100)
      s=player.inventory[player.selected[0]*10+player.selected[1]].value-g*100;
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("S :"+s,1000,535 );
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("G :"+g,1000,555 );
      }
      var n=0;
      if(player.selected[0]!=-1){
      if(player.inventory[player.selected[0]*10+player.selected[1]].dmg!=null)
      {
        if(n<4){
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("STR :"+player.inventory[player.selected[0]*10+player.selected[1]].dmg,800,575+n*20);
        }else{
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("STR :"+player.inventory[player.selected[0]*10+player.selected[1]].dmg,950,575+(n-4)*20);
        }
        n+=1;
      }
      if(player.inventory[player.selected[0]*10+player.selected[1]].def!=null)
      {
        if(n<4){
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("DEF :"+player.inventory[player.selected[0]*10+player.selected[1]].def,800,575+n*20);
        }else{
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("DEF:"+player.inventory[player.selected[0]*10+player.selected[1]].def,950,575+(n-4)*20);
        }
        n+=1;
      }
      if(player.inventory[player.selected[0]*10+player.selected[1]].dex!=null)
      {
        if(n<5){
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("DEX :"+player.inventory[player.selected[0]*10+player.selected[1]].dex,800,575+n*20);
        }else{
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("DEX:"+player.inventory[player.selected[0]*10+player.selected[1]].dex,950,575+(n-4)*20);
        }
        n+=1;
      }
      if(player.inventory[player.selected[0]*10+player.selected[1]].hp!=null)
      {
        if(player.inventory[player.selected[0]*10+player.selected[1]].type==="consumable"){
        if(n<5){
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("Heal :"+player.inventory[player.selected[0]*10+player.selected[1]].hp,800,575+n*20);
        }else{
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("Heal:"+player.inventory[player.selected[0]*10+player.selected[1]].hp,950,575+(n-4)*20);
        }
        n+=1;
      }else{
        if(n<4){
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("Max_hp :"+player.inventory[player.selected[0]*10+player.selected[1]].hp,800,575+n*20);
        }else{
          c.beginPath();
          c.fillStyle = "white";
          c.font = "16px Verdana";
          c.fillText("Max_hp:"+player.inventory[player.selected[0]*10+player.selected[1]].hp,950,575+(n-4)*20);
        }
        n+=1;
      }
    }
    if(player.inventory[player.selected[0]*10+player.selected[1]].en!=null)
    {
      if(player.inventory[player.selected[0]*10+player.selected[1]].type==="consumable"||player.inventory[player.selected[0]*10+player.selected[1]].type==="food"){
      if(n<5){
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("restor energi :"+player.inventory[player.selected[0]*10+player.selected[1]].en,800,575+n*20);
      }else{
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("restor energi:"+player.inventory[player.selected[0]*10+player.selected[1]].en,950,575+(n-4)*20);
      }
      n+=1;
    }else{
      if(n<5){
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Max_en :"+player.inventory[player.selected[0]*10+player.selected[1]].en,800,575+n*20);
      }else{
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Max_en:"+player.inventory[player.selected[0]*10+player.selected[1]].en,950,575+(n-4)*20);
      }
      n+=1;
      }
    }
    if(player.inventory[player.selected[0]*10+player.selected[1]].foame!=null)
    {
      if(n<5){
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Feed :"+player.inventory[player.selected[0]*10+player.selected[1]].foame,800,575+n*20);
      }else{
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Feed :"+player.inventory[player.selected[0]*10+player.selected[1]].foame,950,575+(n-4)*20);
      }
      n+=1;
    }
    if(player.inventory[player.selected[0]*10+player.selected[1]].insp!=null)
    {
      if(n<5){
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Inventory space :"+player.inventory[player.selected[0]*10+player.selected[1]].insp,800,575+n*20);
      }else{
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Inventory space :"+player.inventory[player.selected[0]*10+player.selected[1]].insp,950,575+(n-4)*20);
      }
      n+=1;
    }
    if(player.inventory[player.selected[0]*10+player.selected[1]].idmg!=null)
    {
      if(n<5){
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Instant Dmg:"+player.inventory[player.selected[0]*10+player.selected[1]].idmg,800,575+n*20);
      }else{
        c.beginPath();
        c.fillStyle = "white";
        c.font = "16px Verdana";
        c.fillText("Instant Dmg :"+player.inventory[player.selected[0]*10+player.selected[1]].idmg,950,575+(n-4)*20);
      }
      n+=1;
    }
    }
  }
  function rendermap(){
        for(i=0;i<mat.length;i+=1){x=0;y=0
          for(j=0;j<mat[i].length;j+=1){
            if(i%2===0){x=50*j+100*j;}
            else {x=75*(j+1)+100*j-(25*j);}
            y=50*i;
            if(mat[i][j]===1)
            { var my_pic3=new Image();
              my_pic3.src=hexagoane[mat[i][j]-1].ref;
              c.drawImage(my_pic3,x,y);
            }
            else  if(mat[i][j]===2)
            {var my_pic3=new Image();
              my_pic3.src=hexagoane[mat[i][j]-1].ref;
              c.drawImage(my_pic3,x,y);}
              else{
                var my_pic3=new Image();
                my_pic3.src=hexagoane[mat[i][j]-1].ref;
              c.drawImage(my_pic3,x,y);}
           };
      };
      }
  function renderfoodpanel(){
            c.beginPath();
            c.rect(70,50,310,430);
            c.fillStyle="rgba(50,50,50,0.95)";
            c.fill();
            var n=5,i,j,m=7,x,y,k=0;
            for(i=0;i<m;i++){
              for(j=0;j<n;j++){
                x=70+j*50+(j+1)*10;
                y=50*i+10*(i+1)+50;
                c.beginPath();
                c.rect(x,y,50,50);
                c.fillStyle="rgba(220,213,213,1)";
                c.stroke();
                c.fill();}
              };

              var food=[];
              for(i=0;i<player.inventory.length;i++){
                if(player.inventory[i].type==="food"){
                  food.push(player.inventory[i]);
                };
              };
              // console.log(food);
              for(i=0;i<m && k<food.length;i++){
                for(j=0;j<n && k<food.length;j++){
                  x=70+j*50+(j+1)*10;
                  y=50*i+10*(i+1)+50;
                  c.beginPath();
                  var my_pic3=new Image();
                  my_pic3.src=food[k].href;
                  c.drawImage(my_pic3,x-0.75,y+0.75);
                  c.beginPath();
                  c.fillStyle = "black";
                  c.font = "20px Verdana";
                  c.fillText(food[k].q, x+35, y+45);
                  k+=1;
                }
              };
    };

      //aici o sa se randeze optiunile
  function renderoptions(i,j){
          var hexaop=hexagoane[mat[i][j]-1].options;
          //console.log(hexagoane[mat[i][j]-1].options);
          if (hexaop.camp!=null){
            var x;
            var y;
            var my_pic3=new Image();
            my_pic3.src = "img/camp1.png";
            //afla centru lui isi j
            var centers=cenAftCoordonates(i,j);
              //console.log(centers);
              if(player.i%2===0){
                x=centers.x-75;
                y=centers.y-25;
              }else if(player.i%2===1){
                x=centers.x-75;
                y=centers.y+25;
              }
              c.drawImage(my_pic3,x,y);
            }
            c.beginPath
            if(hexaop.eat!=null && hexaop.eat===true )
            {var x;
              var y;
              var my_pic3=new Image();
              my_pic3.src = "img/eat.png";
              var centers=cenAftCoordonates(i,j);
              if(player.i%2===0){
                x=centers.x-50;
                y=centers.y-75;
              }else if(player.i%2===1){
                x=centers.x-50;
                y=centers.y-25;
              };
              c.drawImage(my_pic3,x,y);
            };
            //inventory
            c.beginPath();
            if(player.inventory!=null)
            {var x;
              var y;
              var my_pic3=new Image();
              my_pic3.src = "img/inventory.png";
              var centers=cenAftCoordonates(i,j);
              if(player.i%2===0){
                x=centers.x-25;
                y=centers.y-25;
              }else if(player.i%2===1){
                x=centers.x-25;
                y=centers.y+25;
              };
              c.drawImage(my_pic3,x,y);
            };
            //warck
            c.beginPath();
            if(hexaop.worck!=null)
            {var x;
              var y;
              var my_pic3=new Image();
              my_pic3.src = "img/warck.png";
              var centers=cenAftCoordonates(i,j);
              if(player.i%2===0){
                x=centers.x-50;
                y=centers.y+25;
              }else if(player.i%2===1){
                x=centers.x-50;
                y=centers.y+75;
              };
              c.drawImage(my_pic3,x,y);
            };
            //cerceteaza
            c.beginPath();
            if(hexaop.cauta!=null)
            { var x;
              var y;
              var my_pic3=new Image();
              my_pic3.src = "img/lupa.png";
              var centers=cenAftCoordonates(i,j);
              if(player.i%2===0){
                x=centers.x;
                y=centers.y-75;
              }else if(player.i%2===1){
                x=centers.x;
                y=centers.y-25;
              };
              c.drawImage(my_pic3,x,y);
            };
      };
  function renderloot(){
    c.beginPath();
    c.rect(450,380,370,140);
    c.fillStyle="rgba(150,150,50,0.95)";
    c.fill();
    var n=6,i;
    if(true){
    c.beginPath();
    c.rect(460,450,150,60);
    c.fillStyle="rgba(78,97,204,1)";
    c.fill();
    c.stroke();
    c.beginPath();
    c.fillStyle = "black";
    c.font = "20px Verdana";
    c.fillText("LOOT ALL", 485, 485);
    c.beginPath();
    c.rect(650,450,150,60);
    c.fillStyle="rgba(78,97,204,1)";
    c.fill();
    c.stroke();
    c.beginPath();
    c.fillStyle = "black";
    c.font = "20px Verdana";
    c.fillText("TRESH ALL", 670, 485);

    }
    if(player.loot.length===0){player.self=0}
    for(i=0;i<n;i++){
        y=380+10;
        x=450+50*i+10*(i+1);
        c.beginPath();
        c.rect(x,y,50,50);
        c.fillStyle="rgba(220,213,213,1)";
        c.stroke();
        c.fill();}

    var max=player.loot.length;
    // console.log(max);
    for(i=0;i<n;i++){
      y=380+10;
      x=450+50*i+10*(i+1);
      c.beginPath();
      // console.log(typeof player.loot[i]);
      if(typeof player.loot[i]==="number"){
        if(player.loot[i]===1){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/1-silvar.png";
          c.drawImage(my_pic3,x,y);
        }else if(player.loot[i]===2){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/2-silvar.png";
          c.drawImage(my_pic3,x,y);
        }else if(player.loot[i]>2){
          c.beginPath();
          var my_pic3=new Image();
          my_pic3.src="img/5-silvar.png";
          c.drawImage(my_pic3,x,y);
          c.beginPath();
          c.fillStyle = "black";
          c.font = "20px Verdana";
          c.fillText(player.loot[i], x+35, y+45);

        };
      }else if(player.loot[i]!=null){
        //aici trebuie pus obiectul
        c.beginPath();
        var my_pic3=new Image();
        my_pic3.src=player.loot[i].href;
        c.drawImage(my_pic3,x-0.75,y+0.75);
      }
    };


    };
  function renderplayer(){
          x=0 ,y=0;
          i=player.i;
          j=player.j;
          if(i%2===0){y=100*i/2+40;
          x=75*j+42+j*75;}
            else {y=100*i/2+40;
            x=75*j+42+j*75+75;}

            c.drawImage(my_bolet,x,y);
       };
  function renderwarning(){
    if(player.warning!=0){
        if (player.warning===1){
          var f=1-1/player.warning_fader;
          c.beginPath();
          c.fill();
          c.rect(50,220,300,15);
          c.fillStyle = "red";
          c.fill();
          c.beginPath();
          c.rect(51,221,298,13);
          c.stroke();
          c.beginPath();
          c.fillStyle = "black";
          c.font = "14px Verdana";
          c.fillText("nu aveti destula energie", 70, 233);
          if(player.warning_fader===1){
            player.warning=0;
          }else{player.warning_fader-=1;};
        };
        if (player.warning===2){
          var f=1-1/player.warning_fader;
          c.beginPath();
          c.fill();
          c.rect(50,220,300,15);
          c.fillStyle = "red";
          c.fill();
          c.beginPath();
          c.rect(51,221,298,13);
          c.stroke();
          c.beginPath();
          c.fillStyle = "black";
          c.font = "14px Verdana";
          c.fillText("you are full", 70, 233);
          if(player.warning_fader===1){
            player.warning=0;
          }else{player.warning_fader-=1;};
        };

    };
    }
  (function animLoop(){
       requestAnimFrame(animLoop);
       render();
  })();
  function getMousePos(canvas, evt) {
       var rect = canvas.getBoundingClientRect();
       return {
         x: evt.clientX - rect.left,
         y: evt.clientY - rect.top
       };
     }
  canvas.addEventListener('mousemove', function(evt) {
             var mousePos = getMousePos(canvas, evt);
             var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
            pozx=mousePos.x;
            pozy=mousePos.y;
           }, false);
  canvas.addEventListener('click', function(event) {
      var x = event.pageX,
            y = event.pageY;
            // console.log('x= '+x);
            // console.log('y= '+y);
        if(player.self===0){
            player.move(x,y);
          }
          else if(player.self===1){
              // aici ar trebui sa faca alta functie dar deocamdata testam .... trebuie sa faca(vezi optiune selectata selectata)
              player.self===0;
              player.option(x,y);
          }else if(player.self===2)
          {
            player.eat(x,y);
          }else if(player.self===5)
          {
            player.invaction(x,y);
          }else if(player.self===3){
            player.findaction(x,y)
          }else if(player.self===100){
            player.atack(x,y);
          }

    }, false);
})();
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
