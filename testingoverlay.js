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
      c_2.fillText(player.helth+"/"+player.max_helth+" hp", 70, 233);
      c_2.beginPath();
      var my_pic=new Image();
      my_pic.src="img/heart.png";
      c_2.drawImage(my_pic,20,217)
      //foame
      c_2.beginPath();
      c_2.rect(50,250,100/(player.max_foame/player.foame),15);
      c_2.fillStyle = "orange";
      c_2.fill();
      c_2.beginPath();
      c_2.rect(50,250,100,15);
      c_2.stroke();
      c_2.beginPath();
      c_2.fillStyle = "black";
      c_2.font = "14px Verdana";
      c_2.fillText(player.foame+"/"+player.max_foame+" food", 70, 263);
      c_2.beginPath();
      var my_pic=new Image();
      my_pic.src="img/energi.png";
      c_2.drawImage(my_pic,20,277)
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
     c_2.fillText(player.energi+"/"+player.max_energi+" En", 70, 293);
     c_2.beginPath();
     var my_pic=new Image();
     my_pic.src="img/energi.png";
     c_2.drawImage(my_pic,20,277)
     }
}
(function animLoop(){
  requestAnimFrame(animLoop);
  render1();
})();
})();
