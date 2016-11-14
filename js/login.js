function addjs_to_body(path){
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = path;
  document.body.appendChild(js);
}
function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
(function(){
    var log_in_buton=document.getElementById('login_buton');
    var register_buton_l=document.getElementById('register_buton');
    // daca exista ceva logatt in sesion storage
    var logatdeja=sessionStorage.getItem("player");
    if(logatdeja!=null && logatdeja>0){
      var elem=document.getElementById('log_in');
      elem.parentNode.removeChild(elem);
      addjs_to_body("js/first_meniu.js");
      removejscssfile("login.js","js");
    }
    log_in_buton.addEventListener("click",function (){
        var jsonstring="";
        var hr=new XMLHttpRequest();
        var data={
          nume:"",
          parola:""
        }
          var form=document.forms[0];
          data.nume=form.elements[0].value;
          data.parola=form.elements[1].value;
          jstring=JSON.stringify(data);
        var url="php/login.php?obj="+jstring;
        hr.open("GET",url,true);
        hr.send();
        hr.onreadystatechange = function()
        {
            if(hr.readyState == 4 && hr.status == 200)
              {
                  var rezultat = hr.responseText;
                  if(rezultat==="ceva a mers foarte prost")
                    {
                      document.getElementById('measage').innerHTML ="parola sau useru sunt gresite";
                      form.elements[0].value="";
                      form.elements[1].value="";
                    }else{
                        sessionStorage.setItem('player', rezultat);
                        setCookie("player",rezultat,3);
                    var elem=document.getElementById('log_in');
                    elem.parentNode.removeChild(elem);
                    addjs_to_body("js/first_meniu.js");
                    removejscssfile("login.js","js");
                    }
              }
          }
    });
})();
