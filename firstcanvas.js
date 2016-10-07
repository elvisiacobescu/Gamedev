(function(){
  console.log("helo.js");
  var canvas=document.getElementById("feeldsbord");
  var c=canvas.getContext("2d");
  // c.fillStyle="blue";
  // c.fillRect(0,0,100,100);
  // c.fillStyle="red";
  // c.fillRect(150,0,100,100);
  var time=0;
  function render(){
    c.clearRect(0,0,canvas.width,canvas.height)
    var y=0, sin, numRectangles=100, x=time, i, width=10, height=10;
    for (i = 0; i < numRectangles; i += 1){
      sin=Math.sin(i/20+time)/2+0.5;
      x= sin * (canvas.width-10);
      y=i*3;
      c.fillRect(x,y,width,height);
    }
    time+=0.01;
  }
  var x=0;

   (function animLoop(){
     requestAnimFrame(animLoop);
     render();
   })();

})();
