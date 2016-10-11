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
