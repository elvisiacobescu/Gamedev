(function()
{
  var bodi=document.body;
  var para = document.createElement("div");
  para.setAttribute("id","meniu");
  var child = document.getElementById('border');
  child.parentNode.insertBefore(para, child);
  adddiv("meniu","new_game");
  document.getElementById("new_game").innerHTML="New Game";
  adddiv("meniu","cards","hiden");
  adddiv("cards","card1","card1 card");
  document.getElementById('card1').innerHTML='<img src="img/intro_card_test.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("cards","card2","card2 card");
  document.getElementById('card2').innerHTML='<img src="img/intro_card_test.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("cards","card3","card3 card");
  document.getElementById('card3').innerHTML='<img src="img/intro_card_test.jpg" width="100" height="150" alt="nu EXISTA IMAGINEA" />';
  adddiv("meniu","load_game");
  document.getElementById("load_game").innerHTML="Load Game";
  document.getElementById('new_game').addEventListener("click",function(){
      toggleClass(document.getElementById('cards'),'active');
  })
  document.getElementById('card1').addEventListener("click",function(){
      //diliteaza meniu;
      var elem= document.getElementById('meniu');
      elem.parentNode.removeChild(elem);
      var canvas=document.createElement('canvas');
      canvas.setAttribute("id","feeldsbord");
      canvas.setAttribute("width","1225");
      canvas.setAttribute("height","950");
      canvas.setAttribute("class","pozcan1");
      var canvas2=document.createElement('canvas');
      canvas2.setAttribute("id","canvas2");
      canvas2.setAttribute("width","200");
      canvas2.setAttribute("height","950");
      canvas2.setAttribute("class","pozcan2");
      var child = document.getElementById('border');
      child.parentNode.insertBefore(canvas, child);
      child.parentNode.insertBefore(canvas2, child);
      addjs_to_body("js/objects.js");
      var time=setTimeout(addgame, 1);

  })

})();
function addgame(){
  addjs_to_body("js/map2.js");
  addjs_to_body("js/testingoverlay.js");
  var time=setTimeout(seplaer, 1);

}

function seplaer(){

}
