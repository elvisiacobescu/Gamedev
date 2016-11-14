
    var player={
      name:"me",
      position:[[0,0,0],[0,1,0],[0,0,0],[0,0,0]]
    };

    (function(){
        var x=10, y=20;
        var mat=[[1,1,1],[1,2,1],[1,1,1],[1,1,1]], i, j, pozx, pozy;
       var my_pic=new Image();
       var my_pic2=new Image();
       var my_bolet=new Image();
       my_pic.src="img/green-terain.png";
       my_pic2.src="img/orange-terain.png";
       my_bolet.src="img/2-white25.png";
       var canvas=document.getElementById("feeldsbord");
       var c=canvas.getContext("2d");
       function render(){
        c.clearRect(0,0,canvas.width,canvas.height);
           for(i=0;i<mat.length;i+=1){x=0;y=0
             for(j=0;j<3;j+=1){
               if(i%2===0){y=100*j;}
               else {y=50+100*j;}
               x=75*i;
               if(mat[i][j]===1)
               {c.drawImage(my_pic,x,y);
               }
               else  if(mat[i][j]===2)
               {c.drawImage(my_pic2,x,y);}
          };
         };
         renderplaer();
        };
        function renderplaer(){
          poz=player.position;
          for(i=0;i<poz.length;i+=1){x=0;y=0
            for(j=0;j<3;j+=1){
            if(poz[i][j]===1)
              {
              if(i%2===0){y=100*j+42;}
              else {y=50+100*j+42;}
              x=75*i+42;
              c.drawImage(my_bolet,x,y);
            }


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
              //care este i si j? asta ne intereseaza aici pe ce casuta se afla el acuma
              //  console.log(canvas, message);
             }, false);
             canvas.addEventListener('onclick',function(){});
    })();
