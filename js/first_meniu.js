
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
  silvar:0,
  gold:3,
  foame: 5,
  max_foame:30,
  self:0,
  twigs:1,
  inventory:[   {name:"row_pig_mit",foame:4,en:5,def:3,hp:100,energie:0,dmg:1,href:"img/food/row_pig_mit.png",type:"food",q:1,max_q:10,recipe:[1],value:3},
    {name:"faina",foame: 5,energie:0,href:"img/food/flower.png",type:"food",q:1,max_q:10,recipe:[1],value:4},
    {name:"carot",foame:5,energie:1,href:"img/food/carot.png",type:"food",q:1,max_q:10,recipe:[1],value:5},
    {name:"miracle drog",hp:25,en:10,href:"img/consumabile/potion3.png",value:130,type:"consumable"},
    {name:"Strong potion",hp:50,en:10,href:"img/consumabile/potion2.png",value:170,type:"consumable"},
    {name:"XXL potion",hp:100,en:25,href:"img/consumabile/potion3.png",value:360,type:"consumable"},
  ],
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
    else if(opt===2){
    // console.log("self");
    }else if(opt===3){
        //aici se face o cautare face self=0 important
    // console.log("caut");
    var noroc=dice();
    //renders.d1=noroc-1;
    var i ;
    var string=hexagoane[mat[this.i][this.j]-1].options.cauta[noroc-1];
    console.log(string);
     //LOTING
    if(this.energi<0.50){
    this.warning==1;
    this.self=0;}
    else{
    //console.log(string);
    switch (string) {
      case "loot1":
            loot1();
            this.self=3;//(self 3 e pentru lootingscreen)
            this.energi-=0.5;
        break;
      case "loot2":
      loot2();
        this.self=3;

          this.energi-=0.5;

         break;
      case "loot3":
        loot3();
        this.self=3;


          this.energi-=0.5;
        break;
      case "loot4":
      loot4();
        this.self=3;

          this.energi-=0.5;
        break;
      case "loot5":
      loot5();
        this.self=3;
          this.energi-=0.5;
         break;
      case "loot6":
      loot6();
        this.self=3;
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
    }else if(opt===6){
     this.self=50;

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
      this.gold+=Math.floor((this.silvar+x)/100);
      this.silvar=(this.silvar+x)%100;
    //  console.log((this.silvar+x)%100);
      }else
      {
        this.silvar+=x;
      }
  },
  plateste:function(x)
   {
     var total=this.silvar+this.gold*100;
     if(total>=x)
     {
       total=total-x;
       this.gold=Math.floor(total/100);
       this.silvar=total%100;

       return true;
     }else{
       return false;
     }
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
          case "l9":loot9();
            break;
          case "l10":loot10();
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
    },
  shopclicks:function(x,y){
      //case 5 pentru bui are cantitate si trebuie vazut cum adaug TODO !! uitate si cand faci lutingu ca la fel trebuie sa faca si acolo si nu face
      //exit
      if(x<1220&&x>1160&&y>10&&y<70)
      {
        this.self=0
      }
      //select from inventory
      if(x>610&&x<1220&&y<680&&y>70){

        var i=Math.floor((y-70)/60);
        var j=Math.floor((x-610)/60);
        var wobj=i*10+j
        if(x>j*60+10+610&&x<j*60+670&&y>i*60+80 &&y<i*60+130){
          if(this.inventory.length >wobj)
          {
            shop.select_p=wobj;

          }
        }
      }
      //select from shop
         if(x>0&&x<610&&y<680&&y>70){

              var i=Math.floor((y)/60)-1;
              var j=Math.floor((x)/60);
              var wobj=i*10+j
              if(x>j*60+10 &&x<(j+1)*60&&y>i*60+80 &&y<i*60+130){
                switch (shop.select_c) {
                  case 1:
                      if(stuf.wepan.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                    break;
                  case 2:
                      if(stuf.armur.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                  case 3:
                      if(stuf.julary.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                  case 4:
                      if(stuf.transport.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                  case 5:
                      if(stuf.food.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                  case 6:
                      if(stuf.ingredients.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                  case 7:
                      if(stuf.consumabile.length>wobj)
                      {
                        shop.select_s=wobj;
                      }
                      break;
                }


              }
            }
      //sell/buy
      if(x>410&&x<810&&y<760&&y>680)
      {
        //sell
        if(x>620&&x<800&&y<750&&y>690)
        {
          if(shop.select_p!=-1)
          {
            this.incaseaza(Math.floor(this.inventory[shop.select_p].value-this.inventory[shop.select_p].value/4));
            this.inventory.splice(shop.select_p,1);
            shop.select_p=-1;
          }
        }
        if(x>420&&x<600&&y<750&&y>690)
        {
          if(shop.select_s!=-1){
            switch (shop.select_c) {
              case 1:
              if(this.max_inventory>this.inventory.length){
              if(this.plateste(stuf.wepan[shop.select_s].value)){
                  this.inventory.push(stuf.wepan[shop.select_s]);
                }else{
                  //warning no pesos
                  this.warning=51;
                  this.warning_fader=1000;
                }
              }else{
                //no space
                this.warning=49;
                this.warning_fader=1000;
              }
                break;
              case 2:if(this.max_inventory>this.inventory.length){
                  if(this.plateste(stuf.armur[shop.select_s].value)){
                      this.inventory.push(stuf.armur[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }
                  break;
              case 3:if(this.max_inventory>this.inventory.length){
                  if(this.plateste(stuf.julary[shop.select_s].value)){
                      this.inventory.push(stuf.julary[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }
                  break;
              case 4:if(this.max_inventory>this.inventory.length){
                  if(this.plateste(stuf.transport[shop.select_s].value)){
                      this.inventory.push(stuf.transport[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }
                  break;
              case 5:if(this.max_inventory>this.inventory.length){
                    // is singurele care au cantitate TODO
                  if(this.plateste(stuf.food[shop.select_s].value)){
                      this.inventory.push(stuf.food[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }
                  break;
              case 6:if(this.max_inventory>this.inventory.length){
                  if(this.plateste(stuf.ingredients[shop.select_s].value)){
                      this.inventory.push(stuf.ingredients[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }
                  break;
              case 7:if(this.max_inventory>this.inventory.length){
                  if(this.plateste(stuf.consumabile[shop.select_s].value)){
                      this.inventory.push(stuf.consumabile[shop.select_s]);
                    }else{
                      this.warning=51;
                      this.warning_fader=1000;
                    }
                  }else{
                    //no space
                    this.warning=49;
                    this.warning_fader=1000;
                  }

                  break;
            }
          }
        }
      }
      //select category
        if(x>0&&x<350&&y<70&&y>20)
        {
          var j=Math.floor(x/50);
          shop.select_c=j+1;
          shop.select_s=-1;
        }
   },
  setparam:function(gold,silver,str,ag,def,helth,hunger,energi,item1,item2){
        this.gold=gold;
        this.silvar=silver;
        this.dmg=str;
        this.def=def;
        this.dex=ag;
        this.helth=helth;
        this.max_helth=helth;
        this.energi=energi;
        this.max_energi=energi;
        this.foame=hunger;
        this.max_foame=hunger;
        this.inventory=[];
        this.inventory.push(clone(item1));
        this.inventory.push(clone(item2));
        this.time=0;
        this.i=2;
        this.j=2;
        this.torso_slot=null;
        this.hands_slot=null;
        this.hand_l_slot=null;
        this.hand_r_slot=null;
        this.had_slot=null;
        this.pents_slot=null;
        this.shues_slot=null;
        this.ring_slot1=null;
        this.ring_slot2=null;
        this.earring_slot1=null;
        this.earring_slot2=null;
        this.neckles=null;
        this.bag_slot=null;
        this.bagpack_slot1=null;
        this.bagpack_slot2=null;
        this.hors_slot=null;
        this.carage_slot=null;
  },
  start:function(x){
    switch (x) {
      case "card1":
        player.setposition(4,2);
        this.setparam(0,50,2,2,5,150,30,20,{name:"pants2",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:20,modi:1},{name:"Miracle drug",hp:25,en:10,href:"img/consumabile/potion1.png",value:130,type:"consumable"});
        console.log("warrior");
        break;
      case "card2":
        player.setposition(4,2);
        this.setparam(0,50,4,3,2,150,30,35,{name:"pants2",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:20,modi:1},{name:"Miracle drug",hp:25,en:10,href:"img/consumabile/potion1.png",value:130,type:"consumable"});
        console.log("Mage");
        break;
      case "card3":
        player.setposition(4,2);
        this.setparam(0,50,3,5,1,150,30,20,{name:"pants2",def:3,href:"img/armur/pants1.png",type:"leg-armur",value:20,modi:1},{name:"Miracle drug",hp:25,en:10,href:"img/consumabile/potion1.png",value:130,type:"consumable"});
        console.log("asasin");
        break;
    }
  }

 };

(function()
{
  var bodi=document.body;
  var para = document.createElement("div");
  para.setAttribute("id","meniu");
  var child = document.getElementById('border');
  child.parentNode.insertBefore(para, child);
  adddiv("meniu","new_game");
  document.getElementById("new_game").innerHTML="New Game";
  adddiv("meniu","cards","hiden");
  adddiv("cards","card1","card1 card");
  document.getElementById('card1').innerHTML='<img src="img/card_worrior.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("cards","card2","card2 card");
  document.getElementById('card2').innerHTML='<img src="img/intro_card_test.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("cards","card3","card3 card");
  document.getElementById('card3').innerHTML='<img src="img/intro_card_test.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("meniu","load_game");
  document.getElementById("load_game").innerHTML="Load Game";
  document.getElementById('new_game').addEventListener("click",function(){
      toggleClass(document.getElementById('cards'),'active');
  });
  var classname = document.getElementsByClassName("card");

  Array.from(classname).forEach(function(element) {
       element.addEventListener('click', play);
     });

  function play(){
          var idpartial=this.id;
          var elem= document.getElementById('meniu');
          elem.parentNode.removeChild(elem);
          var canvas=document.createElement('canvas');
          canvas.setAttribute("id","feeldsbord");
          canvas.setAttribute("width","1225");
          canvas.setAttribute("height","950");
          canvas.setAttribute("class","pozcan1");
          var canvas2=document.createElement('canvas');
          canvas2.setAttribute("id","canvas2");
          canvas2.setAttribute("width","200");
          canvas2.setAttribute("height","950");
          canvas2.setAttribute("class","pozcan2");
          var child = document.getElementById('border');
          child.parentNode.insertBefore(canvas, child);
          child.parentNode.insertBefore(canvas2, child);
          console.log(idpartial);
          play2(idpartial);

     }
     function play2(idpartial){
       addjs_to_body("js/objects.js","before");
      var time=setTimeout(play3(idpartial),9);
     }
     function play3(idpartial){
       addjs_to_body("js/map2.js","before");
      play4(idpartial);
     }
     function play4(idpartial){

       addjs_to_body("js/testingoverlay.js","before");
       var time=setTimeout(play5(idpartial),9);
     }
     function play5(idpartial){
     player.start(idpartial);
     }
})();
