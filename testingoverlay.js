// var obj1={
//   canvas_2 : document.getElementById("canvas2"),
//   firstclick : function (center){
//     renderc2 ();
//   }  ,
(function(){
 function render1(){
   canvas_2=document.getElementById("canvas2");
    var c_2 =document.getElementById("canvas2").getContext("2d");
   c_2.clearRect(0,0,canvas_2.width,canvas_2.height);
      //lasam 200/200 pentru a avea loc pentru ceas/poza /ceva interesant
      //x,y,l,h
      //viata
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
      c_2.fillText(Math.floor(player.helth*10)/10+"/"+player.max_helth+" ", 70, 233);
      c_2.beginPath();
      var my_pic=new Image();
      my_pic.src="img/heart.png";
      c_2.drawImage(my_pic,20,217)
      //foame
      c_2.beginPath();
      if(player.foame<=player.max_foame){
      c_2.rect(50,250,100/(player.max_foame/player.foame),15);
      }else{c_2.rect(50,250,100,15);}
      c_2.fillStyle = "orange";
      c_2.fill();
      c_2.beginPath();
      c_2.rect(50,250,100,15);
      c_2.stroke();
      c_2.beginPath();
      c_2.fillStyle = "black";
      c_2.font = "14px Verdana";
      c_2.fillText(Math.floor(player.foame*10)/10+"/"+player.max_foame+" ", 70, 263);
      c_2.beginPath();
      var my_pic=new Image();
      my_pic.src="img/food.png";
      c_2.drawImage(my_pic,20,247)
      //ideia de timp
      c_2.beginPath();
      c_2.fillStyle = "black";
      c_2.font = "14px Verdana";
      var timeleft=player.nextloop-player.time;
      var days   = Math.floor(timeleft/86400);
      var hours  = Math.floor((timeleft-(86400*days))/3600);
      var minutes= Math.floor((timeleft-(86400*days)-(3600*hours))/60);
      var seconds= timeleft-(86400*days)-(3600*hours)-(60*minutes);
      c_2.fillText(seconds+"s "+minutes+"m "+hours +"h "+ days +"d left", 35, 150);
      c_2.beginPath();
      var my_pic=new Image();
      my_pic.src="img/ticktac.png";
      c_2.drawImage(my_pic,50,35);
     //energie
     c_2.beginPath();
     c_2.rect(50,280,100/(player.max_energi/player.energi),15);
     c_2.fillStyle = "#76fffa";
     c_2.fill();
     c_2.beginPath();
     c_2.rect(50,280,100,15);
     c_2.stroke();
     c_2.beginPath();
     c_2.fillStyle = "black";
     c_2.font = "14px Verdana";
     c_2.fillText(Math.floor(player.energi*10)/10+"/"+player.max_energi+" ", 70, 293);
     c_2.beginPath();
     var my_pic=new Image();
     my_pic.src="img/energi2.png";
     c_2.drawImage(my_pic,20,276);
     //deseneaza poartofelul
     c_2.beginPath();
     c_2.rect(10,322,140,45);
     c_2.stroke();
     c_2.beginPath();
     c_2.rect(10,387,140,45);
     c_2.stroke();
     c_2.beginPath();
     var my_pic=new Image();
     my_pic.src="img/5-silvar.png";
     c_2.drawImage(my_pic,20,320);
     var my_pic=new Image();
     c_2.beginPath();
     my_pic.src="img/5-gold.png";
     c_2.drawImage(my_pic,20,385);
     var my_pic=new Image();
     c_2.beginPath();
     c_2.fillStyle = "black";
     c_2.font = "20px Verdana";
     c_2.fillText(player.silvar, 75, 353);
     c_2.stroke();
     c_2.beginPath();
     c_2.fillStyle = "black";
     c_2.font = "20px Verdana";
     c_2.fillText(player.gold, 75, 418);
     c_2.stroke();
     }
}
(function animLoop(){
  requestAnimFrame(animLoop);
  render1();
})();
})();
