var my_pic=new Image();
var my_pic2=new Image();
var my_bolet=new Image();
my_pic.src="img/green-terain.png";
my_pic2.src="img/orange-terain.png";
my_bolet.src="img/2-white25.png";
var mat=[[1,1,1,1,1],[1,2,1,1,1],[1,14,2,1,1],[1,15,1,1,1],[1,2,1,1,1],[1,1,1,2,1],[2,1,2,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
var hexagoane=[{type:"grass",    options:{nr:3,camp:["fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                 speed:"1.2",ref:"img/green-terain.png"},
               {type:"desert",   options:{nr:3,camp:["fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","big_treasure","lite_monster"] ,deforest:["twigs","wod"]},              speed:"0.9",ref:"img/orange-terain.png"},
               {type:"jungle",   options:{nr:4,camp:["no_fire","bag","temperate"],eat:true,cauta:["twigs","wod","fruits","bunny","medium_treasure","lite_monster"],deforest:["twigs","wod"] }, speed:"0.7",ref:"img/orange-terain.png"},
               {type:"forest",   options:{nr:4,camp:["no_fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"],deforest:["twigs","wod"] },          speed:"1",ref:"img/orange-terain.png"},
               {type:"swamp",    options:{nr:3,camp:["no_fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                              speed:"0.5",ref:"img/orange-terain.png"},
               {type:"mountain", options:{nr:4,camp:["no_fire","bag","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","big_treasure","lite_monster"] ,mine:["","",""]},               speed:"0.5",ref:"img/orange-terain.png"},
               {type:"hill",     options:{nr:3,camp:["no_fire","bag","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                   speed:"0.9",ref:"img/orange-terain.png"},
               {type:"inn",      options:{nr:3,camp:["fire","inn","Cold"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:"2",ref:"img/orange-terain.png"},
               {type:"pasture",  options:{nr:4,camp:["fire","inn","temperate"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] ,work:["shepherd","build"]},       speed:"2",ref:"img/orange-terain.png"},
               {type:"stables",  options:{nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] ,work:["clean","build"]},               speed:"2",ref:"img/orange-terain.png"},
               {type:"home",     options:{nr:4,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] , build:"cest"},                        speed:"2",ref:"img/orange-terain.png"},
               {type:"shop",     options:{nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:"2",ref:"img/orange-terain.png"},
               {type:"warckshop",options:{nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:"2",ref:"img/orange-terain.png"},
               {type:"farm",     options:{nr:3,camp:["fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                      speed:"2",ref:"img/farm-terain.png"},
               {type:"palace",   options:{nr:3,camp:["no-fire","inn","warm"],eat:true,cauta:["pig","sheep","buny","bunny","lite_treasure","lite_monster"] },                                   speed:"2",ref:"img/castel-terain.png"}
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
  sclickt: 0,
  nextloop: 5158000,
  time: 2548654,
  energi : 1,
  max_energi:25,
  silvar:5,
  gold:0,
  foame: 5,
  max_foame:30,
  self:0,
  twigs:1,
  inventory:[],
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

  setposition : function(x,k){
    this.i=x;
    this.j=k;
  },
  move : function(x,y){
    var c=  clickt(x,y);
    //intreb daca patratica e adiacenta
    //merge 1,2

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
         player.setposition(c.i,c.j);
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
      }else if(c.i===player.i && c.j===player.j){
        player.self=1;
        //test self
      }

      else {
        // console.log("muta "+c.i +" unde jucatorul este ="+player.i);
       console.log("mutare ilegala player ");
        // console.log("tu ai apasat pe acest i:"+c.i+" j:"+c.j);
      }
  //  console.log(c);//acici ar trebui sa se miste jucatorul (MUVE)
},
  passtime : function(t){
  //scade 0,5 foame pe ora
  if(this.foame >= (t/3600/2)){
  this.foame-=t/3600/2;
  }else {
  this.foame=0;
  if(this.helth >this.foame+t/3600/2){
  console.log(this.helth>this.foame-(t/3600)/2);
  this.helth+=(this.foame-t/3600/2);}
  else {
    this.helth=0;
    this.deth()};
};
  this.time+=t;
  },
  option : function(x,y){
    var k=this.i;
    var p=this.j;
    var centru=cenAftCoordonates(k,p);
    var opt=wherclic(x,y,centru);
    console.log();
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

      console.log(this);
      this.self=0;
    }
    else{
      console.log("am apasat pe langa optiune");
      this.self=0;
    };
  },
  deth:function(){
    console.log("ups ai murit.....ps asta inseamna ca nu ai facutfunctia pt moarte daca inca trimit mesaju ista");
  }

};
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

function clickt(x,y){
  var coordonate={
    i : undefined,
    j : undefined
  }

  var center={
    cx: undefined ,
    cy: undefined
  }

  var cadran={
  linie:undefined ,
  coloana: undefined
  }
  // un fel de raza
  var r=47;
  cadran.linie=Math.floor(y/100)+1;
  cadran.coloana=Math.floor(x/150)+1;
  // console.log(cadran);
  center.cx=cadran.coloana*100-50+(cadran.coloana-1)*50;
  center.cy=cadran.linie*100-50;
  // if(cente.cx+r)
  // firstclick(center);
  // console.log(center);
//aci se verifica coliziunea intre maus si hexagon
  if((center.cx+r>x) && (center.cy+r>y))
  {
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie-1;
  }
  else
  //lb
  if((center.cx+r<x) && (center.cy+r>y) && center.cy>y){
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie-2;
  }else
  //lt
  if((center.cx+r<x) && (center.cy-r<y)&& center.cy<y){
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie;
  }else if((center.cx-r<x) && (center.cy-r<y)){
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie-1;
  }else if((center.cx-r<x) && (center.cy+r>y)){
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie-1;
  }else if((center.cx+r>x) && (center.cy-r<y)){
    coordonate.j=cadran.coloana-1;
    coordonate.i=cadran.linie-1+cadran.linie-1;
  }
  return coordonate;
}


player.setposition(2,3);


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
       if(player.self===1){
         renderoptions(player.i,player.j);
       };
      };

      //aici o sa se randeze optiunile
      function renderoptions(i,j){
        var hexaop=hexagoane[mat[i][j]-1].options
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
          //console.log(hexaop.camp);
        }
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

            //  console.log(mousePos);
            //care este i si j? asta ne intereseaza aici pe ce casuta se afla el acuma
            //  console.log(canvas, message);
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
          }
    }, false);
})();
