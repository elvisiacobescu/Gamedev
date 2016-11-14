<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>helo canvas</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body style="margin:0px">
    <div id="log_in">
      <form id="login" action="index.html" method="post">
          <span id="user_span_text">User :</span><input class='celformat' type='text' value=''><br>
          <span id="password_span_text">Password :</span><input class='celformat' type='password' value=''>
          <div id="login_buton" class="butons">
            Login
          </div>
          <div id="register_buton" class="butons">
            Registar
          </div>
          <br><span id="measage"></span>
      </form>
    </div>
    <div id="border"></div>
    <script type="text/javascript">
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
      })();
    </script>
    <script src="js/login.js" charset="utf-8"></script>
    <script src="js/function.js" charset="utf-8"></script>

  </body>
</html>
