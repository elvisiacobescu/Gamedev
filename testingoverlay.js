var obj1={
  canvas_2 : document.getElementById("canvas2"),
  firstclick : function (center){
    renderc2 ();
  }  ,
  renderc2 : function (){
    var c_2 =this.canvas_2.getContext("2d");
    c_2.clearRect(0,0,canvas_2.width,canvas_2.height);
       for(i=0;i<mat.length;i+=1){x=0;y=0
         for(j=0;j<mat[i].length;j+=1){
           if(i%2===0){x=50*j+100*j;}
           else {x=75*(j+1)+100*j-(25*j);}
           y=50*i;
           if(mat[i][j]===1)
           {c_2.drawImage(my_pic,x,y);
           }
           else  if(mat[i][j]===2)
           {c_2.drawImage(my_pic2,x-0.75,y+0.75);}
      };
     };
}
}
