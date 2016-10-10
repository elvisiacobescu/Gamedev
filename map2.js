var my_pic=new Image();
var my_pic2=new Image();
var my_bolet=new Image();
my_pic.src="img/green-terain.png";
my_pic2.src="img/orange-terain.png";
my_bolet.src="img/2-white25.png";
var mat=[[1,1,1,1,1],[1,2,1,1,1],[1,1,2,1,1],[1,2,1,1,1],[1,2,1,1,1],[1,1,1,2,1],[2,1,2,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]];
var player={
  name : "me",
  i : 0,
  j : 0,
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
        console.log("mutare legala i:"+player.i+" j:"+player.j)
         player.setposition(c.i,c.j);
          //  console.log("mutare legala i:"+player.i+" j:"+player.j)
           console.log("destinatiaprim i:"+c.i+" j:"+c.j);
        // console.log(player);
      }

      else {
        // console.log("muta "+c.i +" unde jucatorul este ="+player.i);
        console.log("mutare ilegala player i:"+player.i+" j:"+player.j);
        console.log("tu ai apasat pe acest i:"+c.i+" j:"+c.j);}
    console.log(c);//acici ar trebui sa se miste jucatorul (MUVE)
  }
};
//afla care poligon a fost apasat//infunctiasta s-ar putea afla
// si cere e centruu si le trimita prin obiect
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
             {c.drawImage(my_pic,x,y);
             }
             else  if(mat[i][j]===2)
             {c.drawImage(my_pic2,x-0.75,y+0.75);}
        };
       };
       renderplayer();
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
            player.move(x,y);
    }, false);


    // canvas.addEventListener('Click',function(evt){
    //          var mousePos = getMousePos(canvas, evt);
    //          console.log(mousePos);
    // //        },false);
    //   canvas.addEventListener("click",onClick,false);
    //        function onClick(e) {
    //   var element = canvas;
    //   var offsetX = 0, offsetY = 0
    //   var mousePos = getMousePos(canvas, evt);
    //   offsetX += mousePos.x;
    //
      //     if (element.offsetParent) {
      //   do {
      //     offsetX += mousePos.x;
      //     offsetY += element.offsetTop;
      //   } while ((element = element.offsetParent));
      // }
    // console.log(offsetX);
    // }
})();

// // aici am facut un experiment acum o sa incerc sa il si incaptulez
// var canvas_2 =document.getElementById("canvas2");;
// var c_2=canvas_2.getContext("2d")
// canvas_2.style.zindex ="99";
// var my_pic=new Image();
// var my_pic2=new Image();
// var my_bolet=new Image();
// my_pic2.src="img/green-terain.png";
// my_pic.src="img/orange-terain.png";
// my_bolet.src="img/2-white25.png";
// function firstclick(center){
//   canvas_2.style.zIndex ="99";
//   renderc2 ();
//
// };
// function renderc2(){
//   c_2.clearRect(0,0,canvas_2.width,canvas_2.height);
//      for(i=0;i<mat.length;i+=1){x=0;y=0
//        for(j=0;j<mat[i].length;j+=1){
//          if(i%2===0){x=50*j+100*j;}
//          else {x=75*(j+1)+100*j-(25*j);}
//          y=50*i;
//          if(mat[i][j]===1)
//          {c_2.drawImage(my_pic,x,y);
//          }
//          else  if(mat[i][j]===2)
//          {c_2.drawImage(my_pic2,x-0.75,y+0.75);}
//     };
//    };
// }
