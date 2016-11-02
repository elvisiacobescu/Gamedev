var obj={
  intervaldrp:null,
  intervalstg:null,
  list:[],
  returneaza:function(a){
    var b;
    b=a-1;
    return b;
  },
  obj:function(a,b)
  {
    intervaldrp=a;
    intervalstg=b;
  },
  calcul:function(x,y){
    var val;
    val=Math.pow(1.5-x*(1-y),2)+Math.pow(2.25-x*(1-Math.pow(y, 2)),2)+Math.pow(2.625-x*(1-Math.pow( y , 3)), 2);
    return val;
  },
  randomesa:function(){
    //nr rad este valoarea
    var randomizabil=0.0,nr_rad;
    if(this.intervalstg<0){
      randomizabil=randomizabil-intervalstg+intervaldrp;
    }
    else{
      randomizabil=intervalstg+intervaldrp;
    }
    nr_rad=Math.random()*randomizabil+intervalstg;
    return nr_rad;
  },
  functie_random:function(){
    var y;
    y=this.calcul(this.randomesa(),this.randomesa());
    return y;

  },//prin interval se da intervalul cu care sa se deplaseze
  rezultat:function(interval){
    var max_prog=-100,
        min_prog=100,
        max_random=-100,
        min_random=100,
        a=0;
    var i,j;
    for (i = intervalstg; i < intervaldrp; i=i+interval)
    {
      for (var j = intervalstg; j < intervaldrp; j=j+interval)
      {
          if(this.calcul(i,j)<min_prog)
          {
            min_prog=this.calcul(i,j);
          }
          else if(this.calcul(i,j)<max_prog)
          {
            max_prog=this.calcul(i,j);
          }
       }
    }
    while(a<40)
    {
      var num=0;
      num=this.functie_random();
      if(num<min_random){
        min_random=num;
      }
      else if(num>max_random)
      max_random=num;
      a++;
    }

    list.push(max_prog);
    list.push(min_prog);
    list.push(max_random);
    list.push(min_random);

  },
  getmax_prog:function(){
    return list[0];
  },
  getmin_prog:function(){
    return list[1];
  },
  getmax_random:function(){
    return list[2];
  },
  getmin_random:function(){
    return list[3];
  }
}

  var interval_x=-1;
  var interval_y=1;
  var warst_case_max_rand=0.0;
  var warst_case_min_rand=-100.0;
  var best_case_max_rand=-100.0;
  var best_case_min_rand=100.0;
  var acuritate=10;
  var distanta=0.1;
  var b=acuritate;
  while(acuritate!=0)
  {
    var list=[];
    obj.obj(interval_x,interval_y);
    obj.rezultat(distanta);
    list.push(obj.getmax_prog);
    list.push(obj.getmin_prog);
    list.push(obj.getmax_random);
    list.push(obj.getmin_random);
    acuritate--;
    if(list[2]<warst_case_max_rand)
    {
      warst_case_max_rand=list[2];
    }
    if(list[3]>warst_case_min_rand)
    {
      warst_case_min_rand=list[3];
    }
    if(list[2]>best_case_max_rand)
    {
      best_case_max_rand=list[2];
    }
    if(list[3]<best_case_min_rand)
    {
      best_case_min_rand=list[3];
    }
    var a=b-acuritate
    console.log("pentru incercarea numaru= " + a);
    console.log("random max= "+list[2]);
    console.log("random min= "+list[3]);
    console.log("progresiv max= "+list[0]);
    console.log("progeresiv min= "+list[1]);
  }
    console.log("in cel mai bun caz maximu pentru random a fost= "+ best_case_max_rand);
    console.log("in cel mai rau caz muximu pentru random a fost= "+ warst_case_max_rand);
    console.log("in cel mai bun caz minimu pentru random a fost= "+ best_case_min_rand);
    console.log("in cel mai rau caz minimu pentru random a fost= "+ warst_case_min_rand);

// console.log(Math.random()*15-5);
