var my_pic=new Image();
var my_pic2=new Image();
var my_bolet=new Image();
my_pic.src="img/green-terain.png";
my_pic2.src="img/orange-terain.png";
my_bolet.src="img/2-white25.png";
var loot101=[];var loot102=[];var loot103=[];var loot104=[];var loot105=[];var loot106=[];var loot107=[];var loot108=[];var loot101=[];var loot109=[];var loot110=[];
var retete={

}
var shop={
  select_s:1,
  select_p:1,
  select_c:1
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
// };
//asta doar ca sa setem trebuie facuta o functie pt setarea initial
//este un string
function start(x){

}
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
function lootcreator(y,x){
  var list=[];
  var i;
  for (var i = y+1; i < x+1; i++) {
      list.push(i);
  };
  for (i = 0; i < stuf.food.length; i++) {
    if(stuf.food[i].value<x+1&&stuf.food[i].value>y)
    {
      list.push(clone(stuf.food[i]));
    }
  };
  for (i = 0; i < stuf.wepan.length; i++) {
    if(stuf.wepan[i].value<x+1&&stuf.wepan[i].value>y)
    {
      list.push(clone(stuf.wepan[i]));
    }
  };
  for (i = 0; i < stuf.armur.length; i++) {
    if(stuf.armur[i].value<x+1&&stuf.armur[i].value>y)
    {
      list.push(clone(stuf.armur[i]));
    }
  };
  for (i = 0; i < stuf.julary.length; i++) {
    if(stuf.julary[i].value<x+1&&stuf.julary[i].value>y)
    {
      list.push(clone(stuf.julary[i]));
    }
  };
  for (i = 0; i < stuf.consumabile.length; i++) {
    if(stuf.consumabile[i].value<x+1&&stuf.consumabile[i].value>y)
    {
      list.push(clone(stuf.consumabile[i]));
    }
  };
  for (i = 0; i < stuf.ingredients.length; i++) {
    if(stuf.ingredients[i].value<x+1&&stuf.ingredients[i].value>y)
    {
      list.push(clone(stuf.ingredients[i]));
    }
  };
  for (i = 0; i < stuf.transport.length; i++) {
    if(stuf.transport[i].value<x+1&&stuf.transport[i].value>y)
    {
      list.push(clone(stuf.transport[i]));
    }
  };
  return list;
}
function loot1(){
  if(loot101.length===0)
  {
    loot101=lootcreator(0,10)
  }

    // punem in lu itemu
    var ran=random(0,loot101.length);

    if(typeof loot101[ran] === "number")
    {
      player.loot.push(loot101[ran]);
    } else {
        player.loot.push(clone(loot101[ran]));
    }

}
function loot2(){
  if(loot102.length===0)
  {
    loot102=lootcreator(10,20)
  }

    // punem in lu itemu
    var ran=random(0,loot102.length);

    if(typeof loot102[ran] === "number")
    {
      player.loot.push(loot102[ran]);
    } else {
        player.loot.push(clone(loot102[ran]));
    }
}
function loot3(){
  if(loot103.length===0)
  {
    loot103=lootcreator(20,30)
  }

    // punem in lu itemu
    var ran=random(0,loot103.length);

    if(typeof loot103[ran] === "number")
    {
      player.loot.push(loot103[ran]);
    } else {
        player.loot.push(clone(loot103[ran]));
    }
}
function loot4(){
  if(loot104.length===0)
  {
    loot104=lootcreator(30,50)
  }

    // punem in lu itemu
    var ran=random(0,loot104.length);

    if(typeof loot104[ran] === "number")
    {
      player.loot.push(loot104[ran]);
    } else {
        player.loot.push(clone(loot104[ran]));
    }
}
function loot5(){
  if(loot105.length===0)
  {
    loot105=lootcreator(50,70)
  }

    // punem in lu itemu
    var ran=random(0,loot105.length);

    if(typeof loot105[ran] === "number")
    {
      player.loot.push(loot105[ran]);
    } else {
        player.loot.push(clone(loot105[ran]));
    }
}
function loot6(){
  if(loot106.length===0)
  {
    loot106=lootcreator(70,90)
  }

    // punem in lu itemu
    var ran=random(0,loot106.length);

    if(typeof loot106[ran] === "number")
    {
      player.loot.push(loot106[ran]);
    } else {
        player.loot.push(clone(loot106[ran]));
    }
}
function loot7(){
    if(loot107.length===0)
    {
      loot107=lootcreator(90,120)
    }

      // punem in lu itemu
      var ran=random(0,loot107.length);

      if(typeof loot107[ran] === "number")
      {
        player.loot.push(loot107[ran]);
      } else {
          player.loot.push(clone(loot107[ran]));
      }
}
function loot8(){
    if(loot108.length===0)
    {
      loot108=lootcreator(120,150)
    }

      // punem in lista de loot itemu
      var ran=random(0,loot108.length);

      if(typeof loot108[ran] === "number")
      {
        player.loot.push(loot108[ran]);
      } else {
          player.loot.push(clone(loot108[ran]));
      }
}
function loot9(){
    if(loot109.length===0)
    {
      loot109=lootcreator(150,180)
    }

      // punem in lista de loot itemu
      var ran=random(0,loot109.length);

      if(typeof loot109[ran] === "number")
      {
        player.loot.push(loot109[ran]);
      } else {
          player.loot.push(clone(loot109[ran]));
      }
}
function loot10(){
    if(loot110.length===0)
    {
      loot110=lootcreator(180,200)
    }

      // punem in lista de loot itemu
      var ran=random(0,loot110.length);

      if(typeof loot110[ran] === "number")
      {
        player.loot.push(loot110[ran]);
      } else {
          player.loot.push(clone(loot110[ran]));
      }
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
        else if(Math.sqrt(((centru.x-25-x)*(centru.x-25-x))+((centru.y+50-y)*(centru.y+50-y)))<=raza){
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
         else if(Math.sqrt(((centru.x-25-x)*(centru.x-25-x))+((centru.y+100-y)*(centru.y+100-y)))<=raza){
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
       if(player.self===50)
       {
         rendershop();
       }
       if(player.self===100){
         renderbatleground();
       }
       renderwarning();
      };
  function rendershop(){
      var x;
    //frame categorii
    c.beginPath();
    c.rect(0,20,350,50);
    c.fillStyle="rgba(50,50,50,0.95)";
    c.stroke();
    c.fill();

    //aici o sa trebuiasca randate categoriile TODO sa pui alte imagini
    var img=["img/wepons/large_steel_sword.png","img/pants.png","img/julary/ring15.png","img/pants.png","img/food/corn.png","img/pants.png","img/consumabile/potion1.png"];
    for (var i = 0; i < 7; i++) {
      x=i*50
      c.beginPath();
      c.rect(x,20,50,50);
      c.fillStyle="white";
      c.strokeStyle="black";
      c.stroke();
      c.fill();

      c.beginPath();
      var my_pic3=new Image();
      my_pic3.src=img[i];
      c.drawImage(my_pic3,x,20);
    }

    //render selected border
    x=(shop.select_c-1)*50;
    c.beginPath();
    c.rect(x,20,50,50);
    c.strokeStyle="red";
    c.stroke();
    //frame inventar mare
    c.beginPath();
    c.strokeStyle="Black";
    c.rect(0,70,1220,610);
    c.fillStyle="rgba(50,50,50,0.95)";
    c.stroke();
    c.fill();
      //frame shop
      c.beginPath();
      c.rect(0,70,610,610);
      c.fillStyle="rgba(50,50,50,0.95)";
      c.stroke();
      c.fill();
          //shop tiles
          var y;
          for (var i = 0; i < 10; i++) {
            y=60*i+10;
            for (var j = 0; j < 10; j++) {
              x=60*j+10;
              c.beginPath();
              c.strokeStyle="Black";
              c.rect(x,y+70,50,50);
              c.fillStyle="white";
              c.stroke();
              c.fill();
            }
          }
          var t;//de la type
          switch (shop.select_c) {
            case 1:
                for (var i = 0; i <stuf.wepan.length; i++) {
                  x=(i%10)*60+10
                  y=Math.floor(i/10)*60+10
                  c.beginPath();
                  var my_pic3=new Image();
                  my_pic3.src=stuf.wepan[i].href;
                  c.drawImage(my_pic3,x,y+70);
                }
              break;
            case 2:
                  for (var i = 0; i <stuf.armur.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.armur[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
            case 3:
                  for (var i = 0; i <stuf.julary.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.julary[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
            case 4:
                  for (var i = 0; i <stuf.transport.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.transport[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
            case 5:
                  for (var i = 0; i <stuf.food.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.food[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
            case 6:
                  for (var i = 0; i <stuf.ingredients.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.ingredients[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
            case 7:
                  for (var i = 0; i <stuf.consumabile.length; i++) {
                    x=(i%10)*60+10
                    y=Math.floor(i/10)*60+10
                    c.beginPath();
                    var my_pic3=new Image();
                    my_pic3.src=stuf.consumabile[i].href;
                    c.drawImage(my_pic3,x,y+70);
                  }
                break;
          }
          var i=shop.select_s;
          if(shop.select_s >-1){
            x=60*(i%10)+10;
            y=60*Math.floor(i/10)+10;
            c.beginPath();
            c.strokeStyle="blue";
            c.rect(x,y+70,50,50);
            c.lineWidth=3;
            c.stroke();
          }
      //frame inventory
      c.beginPath();
      c.rect(610,70,610,610);
      c.strokeStyle="black";
      c.fillStyle="rgba(50,50,50,0.95)";
      c.stroke();
      c.fill();
            //inventory tiles
            for (var i = 0; i < 10; i++) {
              y=60*i+10;
              for (var j = 0; j < 10; j++) {
                x=60*j+10;
                c.beginPath();
                c.strokeStyle="Black";
                c.rect(x+610,y+70,50,50);
                c.fillStyle="white";
                c.stroke();
                c.fill();
                if(i*10+j>=player.max_inventory){
                  c.beginPath();
                  c.strokeStyle="Black";
                  c.rect(x+610,y+70,50,50);
                  c.fillStyle="red";
                  c.stroke();
                  c.fill();
                }
              }
            }
            //inventory items
            var nritems=player.inventory.length;
            for (var i = 0; i < nritems; i++) {
              x=60*(i%10)+10;
              y=60*Math.floor(i/10)+10;
              c.beginPath();
              var my_pic3=new Image();
              my_pic3.src=player.inventory[i].href;
              c.drawImage(my_pic3,x+610,y+70);
            }
            //inventory select
            var i=shop.select_p;
            if(i>-1){
              x=60*(i%10)+10;
              y=60*Math.floor(i/10)+10;
              c.beginPath();
              c.strokeStyle="blue";
              c.rect(x+610,y+70,50,50);
              c.lineWidth=3;
              c.stroke();
            }
    //shop description frame
    c.beginPath();
    c.strokeStyle="black";
    c.rect(0,680,410,120);
    c.fillStyle="rgba(50,50,50,0.95)";
    c.lineWidth=1;
    c.stroke();
    c.fill();
    //shop description

    //INVENTORY description frame
    c.beginPath();
    c.rect(810,680,410,120);
    c.fillStyle="rgba(50,50,50,0.95)";
    c.stroke();
    c.fill();
    //inventory description description

    //butons
    c.beginPath();
    c.rect(410,680,400,80);
    c.fillStyle="rgba(50,50,50,0.95)";
    c.stroke();
    c.fill();
    //buton buy
    c.beginPath();
    c.rect(420,690,180,60);
    c.fillStyle="rgba(0,210,0,0.95)";
    c.stroke();
    c.fill();
      //buton buy text
      c.beginPath();
      c.fillStyle = "black";
      c.font = "46px Verdana";
      c.fillText("BUY", 460, 736);
    //buton sel
    c.beginPath();
    c.rect(620,690,180,60);
    c.fillStyle="rgba(0,210,0,0.95)";
    c.stroke();
    c.fill();
      //buton sell text
      c.beginPath();
      c.fillStyle = "black";
      c.font = "46px Verdana";
      c.fillText("SELL", 660, 736);
    //render exist
    c.beginPath();
    c.rect(1160,10,60,60);
    c.fillStyle="red";
    c.stroke();
    c.fill();
  }
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
      if(player.selected[0]!=-1 && player.inventory[player.selected[0]*10+player.selected[1]].type!=null && player.inventory[player.selected[0]*10+player.selected[1]].type==="consumable")
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

            if(hexaop.worck!=null)
            {var x;
              var y;
              var my_pic3=new Image();
              my_pic3.src = "img/warck.png";
              c.beginPath();
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
            //shop

            if(hexaop.shop!=null && hexaop.shop===true)
            {var x;
              var y;
                c.beginPath();
              var my_pic3=new Image();
              my_pic3.src = "img/shopol.png";
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
          }else if(player.self===50){
            player.shopclicks(x,y);
          }else if(player.self===100){
            player.atack(x,y);
          }

    }, false);
})();
