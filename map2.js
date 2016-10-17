var my_pic=new Image();
var my_pic2=new Image();
var my_bolet=new Image();
my_pic.src="img/green-terain.png";
my_pic2.src="img/orange-terain.png";
my_bolet.src="img/2-white25.png";
var mat=[[1,1,1,1,1],[1,2,1,1,1],[1,14,2,1,1],[1,15,1,1,1],[1,2,1,1,1],[1,1,1,2,1],[2,1,2,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
var retete={

}
var stuf={food:[{name:"bred",foame: 9,energie:0,href:"img/bred.png",type:"food",q:0,max_q:10,recipe:[2,3],value:5},
                {name:"faina",foame: 5,energie:0,href:"img/flower.png",type:"food",q:0,max_q:10,recipe:[1],value:5},
                {name:"sendvici",foame:20,energie:5,href:"img/bred.png",type:"food",q:0,max_q:10,value:5}],
          ingredients:[{name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:0,max_q:10,recipe:[5,6],value:5},
          {name:"faina",foame: 5,energie:0,href:"img/flower.png",type:"food",q:0,max_q:10,recipe:[1],value:5},
          {nem:"carot",foame:5,energie:1,href:"img/carot.png",type:"food",q:0,max_q:10,recipe:[1],value:5},
          {nem:"row_pig_mit",foame:4,energie:0,href:"img/row_pig_mit.png",type:"food",q:0,max_q:10,recipe:[1],value:5}]
}
var hexagoane=[{type:"grass",    options:{shop:false,cooking:true,nr:3,camp:["fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                 speed:1.2,ref:"img/green-terain.png"},
               {type:"desert",   options:{shop:false,cooking:true,nr:3,camp:["fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","big_treasure","lite_monster"] ,deforest:["twigs","wod"]},              speed:0.9,ref:"img/orange-terain.png"},
               {type:"jungle",  options:{shop:false,cooking:true,nr:4,camp:["no_fire","bag","temperate"],eat:true,cauta:["twigs","wod","fruits","bunny","medium_treasure","lite_monster"],deforest:["twigs","wod"] }, speed:0.7,ref:"img/orange-terain.png"},
               {type:"forest",  options:{shop:false,cooking:true,nr:4,camp:["no_fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"],deforest:["twigs","wod"] },          speed:1,ref:"img/orange-terain.png"},
               {type:"swamp",   options:{shop:false,cooking:true,nr:3,camp:["no_fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                              speed:0.5,ref:"img/orange-terain.png"},
               {type:"mountain",options:{shop:false,cooking:true,nr:4,camp:["no_fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","big_treasure","lite_monster"] ,mine:["","",""]},               speed:0.5,ref:"img/orange-terain.png"},
               {type:"hill",     options:{shop:false,cooking:true,nr:3,camp:["fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                   speed:0.9,ref:"img/orange-terain.png"},
               {type:"inn",      options:{shop:false,cooking:true,nr:3,camp:["fire","inn","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:2,ref:"img/orange-terain.png"},
               {type:"pasture",  options:{shop:false,cooking:true,nr:4,camp:["fire","inn","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , worck:["shepherd","build"]},       speed:2,ref:"img/orange-terain.png"},
               {type:"stables",  options:{shop:false,cooking:true,nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , worck:["clean","build"] },               speed:2,ref:"img/orange-terain.png"},
               {type:"home",     options:{shop:false,cooking:true,nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , build:"cest"},                        speed:2,ref:"img/orange-terain.png"},
               {type:"shop",     options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"], craft:true },                                  speed:2,ref:"img/orange-terain.png"},
               {type:"warckshop",options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:2,ref:"img/orange-terain.png"},
               {type:"farm",     options:{shop:true,cooking:true,nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , worck:["clean","build"] },              speed:2,ref:"img/farm-terain.png"},
               {type:"palace",  options:{shop:true,cooking:true,nr:3,camp:["no-fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                   speed:2,ref:"img/castel-terain.png"}
             ];
bag1={
  ref:"img/2-white25.png",
  rest: 1
};

var player={
  helth :50,
  max_helth : 100,
  name : "me",
  i : 0,
  j : 0,
  warning:0,
  sclickt: 0,
  nextloop: 5158000,
  time: 2548654,
  energi : 25,
  max_energi:25,
  silvar:5,
  gold:0,
  foame: 5,
  max_foame:30,
  self:0,
  twigs:1,
  inventory:[{name:"mar",foame: 6,energie:2,href:"img/mar.png",type:"food",q:1,recipe:[5,6]},{name:"bred",foame: 10,energie:0 , href:"img/bred.png",type:"food",q:4,recipe:[2,3]}],
  status:{},
  max_inventory:15,
  torso_slot:null,
  hands_slot:null,
  had_slot:null,
  pnats_slot:null,
  shues_slot:null,
  ring_slot1:null,
  ring_slot2:null,
  necckles:null,
  bag_slot:bag1,
  bagpack_slot1:null,
  bagpack_slot2:null,
  hors_slot:null,
  carege_slot:null,
  warning:0,
  warning_fader:0,
  setposition : function(x,k){
    this.i=x;
    this.j=k;
  },
  move : function(x,y){
    var c=  clickt(x,y);
    //intreb daca patratica e adiacenta
    //merge 1,2
    //formula pt consum de energie este dificultatea terenuli / 1.5
    if(c.i===player.i && c.j===player.j){
     player.self=1;
     //test self
   }
else if(this.energi>=1.5/hexagoane[mat[c.i][c.j]-1].speed){
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
console.log(this.foame);
         //testam daca exista parametru in obiect
        //  if (hexagoane[mat[player.i][player.j] - 1 ].options.deforest==null){
        //    console.log(' sunt  null');
        //  }
          //  console.log(hexagoane[mat[player.i][player.j]].options);
            console.log("mutare legala ");
          //  console.log("destinatiaprim i:"+c.i+" j:"+c.j);
          //  console.log(player);
    //  console.log(cenAftCoordonates(this.i,this.j) );
    //clicktest
  }
      else {
        // console.log("muta "+c.i +" unde jucatorul este ="+player.i);
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
  if(this.helth+t/3600<=this.max_helth){
  this.helth+=t/3600;
}else{this.helth=this.max_helth;}
  },
  option : function(x,y){
    var k=this.i;
    var p=this.j;
    var centru=cenAftCoordonates(k,p);
    var opt=wherclic(x,y,centru);

    if (opt===0){
      console.log("am apasat pe langa optiune");
      console.log(centru);
      this.self=0;
    }else if(opt===1 && hexagoane[mat[this.i][this.j]-1].options.camp != null){
      var f=0;//vine de la foc de tabara daa ajuns sa fie pt toate bonusurile de la slep
      var p=0;//vine de la pierderi
      var addenergi=0;
      //aici trebuie facuta dormirea(recuperarea de energie)
      //daca esti in oras dormi la in in daca ai bani daca nu pe strada
    if(hexagoane[mat[this.i][this.j]-1].options.camp[2]==="inn"){
      if(thi.silvar>=5){
          this.silvar-=5;
          f+=10;
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
    else if(opt===2 && hexagoane[mat[this.i][this.j]-1].options.camp != null){
    // console.log("self");
    }
    else{
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
  }
};
function dice(){
console.log("mananc");
};
//TODO
function random(start,stop){
  return 1;
}
// vad pe care cerculet am apasat
function wherclic(x,y,centru)
    {var buton;
      var raza=25;
    console.log("ecuatia dreptei");
    console.log(centru);
    console.log();
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
         }
       else{
         buton=0;
       };
     };
       console.log(buton);
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
      center.x=cadran.coloana*150-175;
      center.y=cadran.linie*100;
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
    console.log(center);
  if(inHexagon(center,x,y)){
    coordonate.i=(cadran.linie-1)*2;
    coordonate.j=(cadran.coloana-1);
  }
  else{
    defcenter(2);
    console.log(center);
    console.log(center);
    if(inHexagon(center,x,y)){
      coordonate.i=(cadran.linie-1)*2-1;
      coordonate.j=(cadran.coloana-1)-1;//aici se refera de la spatiile din cadranu precedent
    }
    else{
      defcenter(3);
      console.log(center);
      if(inHexagon(center,x,y)){
     coordonate.i=(cadran.linie-1)*2+1;
     coordonate.j=(cadran.coloana-1)-1;
      }
      else{
        defcenter(4);
        console.log(center);
        console.log(inHexagon(center,x,y));
        if(inHexagon(center,x,y)){
          console.log((cadran.linie-1)*2+1);
          console.log((cadran.coloana-1));
          coordonate.i=(cadran.linie-1)*2+1;
          coordonate.j=(cadran.coloana-1);
        }
        else{
          defcenter(5);
          console.log(center);
          console.log(inHexagon(center,x,y));
          if(inHexagon(center,x,y)){
            console.log((cadran.linie-1)*2-1);
            console.log((cadran.coloana-1));
            coordonate.i=(cadran.linie-1)*2-1;
            coordonate.j=(cadran.coloana-1);
          };
        };
      };
    };
  };
  return coordonate;
}


player.setposition(3,0);


(function(){
      var x=0, y=0;
      var  i, j, pozx;
      var pozy=0;

     var canvas=document.getElementById("feeldsbord");
     var c=canvas.getContext("2d");

     function render(){
      c.clearRect(0,0,canvas.width,canvas.height);
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
               c.drawImage(my_pic3,x-0.75,y+0.75);}
               else{
                 var my_pic3=new Image();
                 my_pic3.src=hexagoane[mat[i][j]-1].ref;
               c.drawImage(my_pic3,x-0.75,y+0.75);}
            };
       };
       renderplayer();
       renderwarning();
       if(player.self===1){
         renderoptions(player.i,player.j);
       };
       if(player.self===2){
         renderfoodpanel();
       };
       renderwarning();
      };

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
        //console.log(hexaop.worck!=null);
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
            console.log('x= '+x);
            console.log('y= '+y);
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
          }
    }, false);
})();
