// var obj1={
//   canvas_2 : document.getElementById("canvas2"),
//   firstclick : function (center){
//     renderc2 ();
//   }  ,
(function(){
 function renderc2 (){
   canvas_2=document.getElementById("canvas2");
    var c_2 =document.getElementById("canvas2").getContext("2d");
   c_2.clearRect(0,0,canvas_2.width,canvas_2.height);
      //lasam 200/200 pentru a avea loc pentru ceas/poza /ceva interesant
      //x,y,l,h
      if(player.helth >= 0){
      c_2.beginPath();
      c_2.rect(50,220,100/(player.max_helth/player.helth),15);
      // c_2.stroke();
      c_2.fillStyle = "red";
      c_2.fill();
      c_2.beginPath();
      c_2.rect(50,220,100,15);
      c_2.stroke();
      c_2.beginPath();
      c_2.fillStyle = "black";
      c_2.font = "14px Verdana";
      c_2.fillText(player.helth+"/"+player.max_helth+"hp", 70, 233);
    }

    //    for(i=0;i<mat.length;i+=1){x=0;y=0
    //      for(j=0;j<mat[i].length;j+=1){
    //        if(i%2===0){x=50*j+100*j;}
    //        else {x=75*(j+1)+100*j-(25*j);}
    //        y=50*i;
    //        if(mat[i][j]===1)
    //        {c_2.drawImage(my_pic,x,y);
    //        }
    //        else  if(mat[i][j]===2)
    //        {c_2.drawImage(my_pic2,x-0.75,y+0.75);}
    //   };
    //  };
}
(function animLoop(){
  requestAnimFrame(animLoop);
  renderc2();
})();
})();
