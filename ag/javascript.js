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

    this.list.push(max_prog);
    this.list.push(min_prog);
    this.list.push(max_random);
    this.list.push(min_random);

  },
  getmax_prog:function(){
    return this.list[0];
  },
  getmin_prog:function(){
    return this.list[1];
  },
  getmax_random:function(){
    return this.list[2];
  },
  getmin_random:function(){
    return this.list[3];
  }
}

function mein1(){
  var interval_x=-3;
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
    var list1=[];
    obj.obj(interval_x,interval_y);
    obj.rezultat(distanta);
    list1.push(obj.getmax_prog());
    list1.push(obj.getmin_prog());
    list1.push(obj.getmax_random());
    list1.push(obj.getmin_random());
    acuritate--;
    if(list1[2]<warst_case_max_rand)
    {
      warst_case_max_rand=list1[2];
    }
    if(list1[3]>warst_case_min_rand)
    {
      warst_case_min_rand=list1[3];
    }
    if(list1[2]>best_case_max_rand)
    {
      best_case_max_rand=list1[2];
    }
    if(list1[3]<best_case_min_rand)
    {
      best_case_min_rand=list1[3];
    }
    var a=b-acuritate
    console.log("pentru incercarea numaru= " + a);
    console.log("random max= "+list1[2]);
    console.log("random min= "+list1[3]);
    console.log("progresiv max= "+list1[0]);
    console.log("progeresiv min= "+list1[1]);
  }
    console.log("in cel mai bun caz maximu pentru random a fost= "+ best_case_max_rand);
    console.log("in cel mai rau caz muximu pentru random a fost= "+ warst_case_max_rand);
    console.log("in cel mai bun caz minimu pentru random a fost= "+ best_case_min_rand);
    console.log("in cel mai rau caz minimu pentru random a fost= "+ warst_case_min_rand);
}
//mein1();
//interva[-5.12,5,12] minim poate fi si unu
function calc_rastrigin(n,vector){
    var sum=0;
    for (var i = 0; i < n; i++) {
        var x=vector[i];
        sum=sum+Math.pow(x,2)-10*Math.cos(2*Math.PI*x);
        }
    var rezultat=10*n+sum
    return rezultat;
}
// console.log(Math.random()*15-5);
//interval[-600,600]  minimul trebuie sa fie 0;
function calc_Griewang(n,vector){
  var sum=0;
  var produs=1;
  var rezultat;
  for (var i = 0; i < n; i++) {
    var x=vector[i];
    sum=sum+Math.pow(x,2)/4000;
  }
  for (var i = 0; i < n; i++) {
    produs=produs*Math.cos(x/Math.sqrt(i+1));
    // console.log(x/Math.sqrt(i));
  }
  rezultat=sum-produs+1;
  return rezultat;
}
//interval[-2.048,2.048]--aici trebuie cel utin doi x
function calc_Rosenbrock(n,vector){
  var sum=0;
  for (var i = 0; i <n-1; i++) {
    sum=sum+100*Math.pow(vector[i+1]-Math.pow(vector[i],2),2)+Math.pow((1-vector[i]),2);
  }
  return sum;
}
// sum(100·(x(i+1)-x(i)^2)^2+(1-x(i))^2)-x(i)
//console.log( (3.7 >>> 0).toString(2));//transforma in baza doi lol
//minimul este -1.0316 intervalul(-0.0898,0.7126),(0.0898,-0.7126)
function calc_Six_hump(x1,x2){
var rezultat=(4-2.3*Math.pow(x1,2)+Math.pow(x1,4/3))*Math.pow(x1,2)+x1*x2+(-4+4*Math.pow(x2,2))*Math.pow(x2,2);
return rezultat;
}
//numbers after 0
function randomarbitrar(min,max,n){
   var rezult= Math.random() * (max - min) + min;
   rezult=Math.floor(rezult*Math.pow(10,n))/Math.pow(10,n);
   return rezult;
}
// console.log(randomarbitrar(-15,15,5));
//n este numaru cifre dupa ,
//
//play se refera la hil claiming
function play_rastringin(n){
  var x1,x2;
  var array=[], array2=[], array3=[];
  var intervalstg=-5.12;
  var intervaldrp=5.12;
  var valori=2;
  var turns=1000,turns2=turns;
  var min=100;
  var interval=0.005;//acuratetea in care gaseste vecini
  //decate ori sa incerce sa caute un maxim local

  while(turns>0){
  array=[];
  x1=randomarbitrar(intervalstg,intervaldrp,n);
  x2=randomarbitrar(intervalstg,intervaldrp,n);
  array.push(x1); array.push(x2);
  //console.log(calc_rastrigin(valori,array));
  var min1=calc_rastrigin(valori,array);
  var test=1;

    test=1;

  while(test===1){
    //inainte
    array2[0]=todecimal(changebit(tobit(array[0]*Math.pow(10,n)),i))/Math.pow(10,n);
    console.log(array2[0]);
    //calculam minim local
    if(calc_rastrigin(valori,array2)<min1)
    { array[0]=array2[0]
      min1=calc_rastrigin(valori,array2);
      test=0;
    }
      //inseamna ca sa blocat intr-un minim local.. aproximativ
      // console.log(min1);
      if(min>min1){min=min1;
      }
      turns-=1;
    }
    console.log("minimul pentru rastringin este= "+min);
    var max=-1000000;
    while(turns2>0){
    array=[];
    x1=randomarbitrar(intervalstg,intervaldrp,n);
    x2=randomarbitrar(intervalstg,intervaldrp,n);
    array.push(x1); array.push(x2);
    //console.log(calc_rastrigin(valori,array));
    var max1=calc_rastrigin(valori,array);
    var test=1;

      test=1;
    while(test===1){
      //inainte
      array2[0]+=interval;
      //inapoi
      array2[0]-=interval;
      //calculam minim local
      if(calc_rastrigin(valori,array2)>max1)
      {
        max1=calc_rastrigin(valori,array2);
      }
      else if(calc_rastrigin(valori,array3)>max1)
      {
        max1=calc_rastrigin(valori,array3);
        //inseamna ca sa blocat intr-un minim local.. aproximativ
      }else test=0;

        }
        // console.log(min1);
        if(max<max1){max=max1;
        }
        turns2-=1;
      }
      console.log("maximul pentru rastringin este= "+max);

}
play_rastringin(3);
function play_Griewang(n){
  var x1,x2;
  var array=[], array2=[], array3=[];
  var intervalstg=-600;
  var intervaldrp=600;
  var valori=2;
  var turns=1000,turns2=turns;
  var min=100;
  var interval=0.005;//acuratetea in care gaseste vecini
  //decate ori sa incerce sa caute un maxim local

  while(turns>0){
  array=[];
  x1=randomarbitrar(intervalstg,intervaldrp,n);
  x2=randomarbitrar(intervalstg,intervaldrp,n);
  array.push(x1); array.push(x2);
  var min1=calc_Griewang(valori,array);
  //  console.log(min1);
  var test=1;

    test=1;
  while(test===1){
    //inainte
    array2[0]+=interval;
    //inapoi
    array2[0]-=interval;
    //calculam minim local
    if(calc_Griewang(valori,array2)<min1)
    {
      min1=calc_Griewang(valori,array2);
    }
    else if(calc_Griewang(valori,array3)<min1)
    {
      min1=calc_Griewang(valori,array2);
      //inseamna ca sa blocat intr-un minim local.. aproximativ
    }else test=0;

      }
      // console.log(min1);
      if(min>min1){min=min1;
      }
      turns-=1;
    }
    console.log("minimul pentru Griewang este= "+min);
    var max=-1000000;
    while(turns2>0){
    array=[];
    x1=randomarbitrar(intervalstg,intervaldrp,n);
    x2=randomarbitrar(intervalstg,intervaldrp,n);
    array.push(x1); array.push(x2);
    //console.log(calc_rastrigin(valori,array));
    var max1=calc_Griewang(valori,array);
    var test=1;

      test=1;
    while(test===1){
      //inainte
      array2[0]+=interval;
      //inapoi
      array2[0]-=interval;
      //calculam minim local
      if(calc_Griewang(valori,array2)>max1)
      {
        max1=calc_Griewang(valori,array2);
      }
      else if(calc_Griewang(valori,array3)>max1)
      {
        max1=calc_Griewang(valori,array2);
        //inseamna ca sa blocat intr-un minim local.. aproximativ
      }else test=0;

        }
        // console.log(min1);
        if(max<max1){max=max1;
        }
        turns2-=1;
      }
      console.log("maximul pentru Griewang este= "+max);
}
play_Griewang(3);

function play_Rosenbrock(n){
  var x1,x2;
  var array=[], array2=[], array3=[];
  var intervalstg=-2.048;
  var intervaldrp=2.048;
  var valori=2;
  var turns=1000,turns2=turns;
  var min=100;
  var interval=0.005;//acuratetea in care gaseste vecini
  //decate ori sa incerce sa caute un maxim local

  while(turns>0){
  array=[];
  x1=randomarbitrar(intervalstg,intervaldrp,n);
  x2=randomarbitrar(intervalstg,intervaldrp,n);
  array.push(x1); array.push(x2);
  var min1=calc_Rosenbrock(valori,array);
  //  console.log(min1);
  var test=1;

    test=1;
  while(test===1){
    //inainte
    array2[0]+=interval;
    //inapoi
    array2[0]-=interval;
    //calculam minim local
    if(calc_Rosenbrock(valori,array2)<min1)
    {
      min1=calc_Rosenbrock(valori,array2);
    }
    else if(calc_Rosenbrock(valori,array3)<min1)
    {
      min1=calc_Rosenbrock(valori,array2);
      //inseamna ca sa blocat intr-un minim local.. aproximativ
    }else test=0;

      }
      // console.log(min1);
      if(min>min1){min=min1;
      }
      turns-=1;
    }
    console.log("minimul pentru Rosenbrocks este= "+min);
    var max=-1000000;
    while(turns2>0){
    array=[];
    x1=randomarbitrar(intervalstg,intervaldrp,n);
    x2=randomarbitrar(intervalstg,intervaldrp,n);
    array.push(x1); array.push(x2);
    //console.log(calc_rastrigin(valori,array));
    var max1=calc_Rosenbrock(valori,array);
    var test=1;

      test=1;
    while(test===1){
      //inainte
      array2[0]+=interval;
      //inapoi
      array2[0]-=interval;
      //calculam minim local
      if(calc_Rosenbrock(valori,array2)>max1)
      {
        max1=calc_Rosenbrock(valori,array2);
      }
      else if(calc_Rosenbrock(valori,array3)>max1)
      {
        max1=calc_Rosenbrock(valori,array2);
        //inseamna ca sa blocat intr-un minim local.. aproximativ
      }else test=0;

        }
        // console.log(min1);
        if(max<max1){max=max1;
        }
        turns2-=1;
      }
      console.log("maximul pentru Rosenbrock este= "+max);
}
play_Rosenbrock(3);

function play_Six_hump(n){
  var x1,x2;
  var array=[], array2=[], array3=[];
  var intervalstg=-2.048;
  var intervaldrp=2.048;
  var valori=2;
  var turns=1000,turns2=turns;
  var min=100;
  var interval=0.005;//acuratetea in care gaseste vecini
  //decate ori sa incerce sa caute un maxim local

  while(turns>0){
  array=[];
  x1=randomarbitrar(intervalstg,intervaldrp,n);
  x2=randomarbitrar(intervalstg,intervaldrp,n);
  array.push(x1); array.push(x2);
  var min1=calc_Six_hump(array[0],array[1]);
  //  console.log(min1);
  var test=1;

    test=1;
  while(test===1){
    //inainte
    array2[0]+=interval;
    //inapoi
    array2[0]-=interval;
    //calculam minim local
    if(calc_Six_hump(array2[0],array2[1])<min1)
    {
      min1=calc_Six_hump(array2[0],array2[1]);
    }
    else if(calc_Six_hump(array3[0],array3[1])<min1)
    {
      min1=calc_Six_hump(array3[0],array3[1]);
      //inseamna ca sa blocat intr-un minim local.. aproximativ
    }else test=0;

      }
      // console.log(min1);
      if(min>min1){min=min1;
      }
      turns-=1;
    }
    console.log("minimul pentru Six hump este= "+min);
    var max=-1000000;
    while(turns2>0){
    array=[];
    x1=randomarbitrar(intervalstg,intervaldrp,n);
    x2=randomarbitrar(intervalstg,intervaldrp,n);
    array.push(x1); array.push(x2);
    //console.log(calc_rastrigin(valori,array));
    var max1=calc_Six_hump(array[0],array[1]);
    var test=1;

      test=1;
    while(test===1){
      //inainte
      array2[0]+=interval;
      //inapoi
      array2[0]-=interval;
      //calculam minim local
      if(calc_Six_hump(array2[0],array2[1])>max1)
      {
        max1=calc_Six_hump(array2[0],array2[1]);
      }
      else if(calc_Six_hump(array3[0],array3[1])>max1)
      {
        max1=calc_Six_hump(array3[0],array3[1]);
        //inseamna ca sa blocat intr-un minim local.. aproximativ
      }else test=0;

        }
        // console.log(min1);
        if(max<max1){max=max1;
        }
        turns2-=1;
      }
      console.log("maximul pentru Six hump este= "+max);
}
play_Six_hump(3);

function tobit(num){
  var bitum =(num >>> 0).toString(2);
  return bitum;
}
function todecimal(num){
  var decimal=0;
  var iteration=0;
  while(num>0)
  {
    decimal=decimal+num%10*Math.pow(2,iteration);
    // console.log(decimal);
    iteration++;
    num=Math.floor(num/10);
  }
  return decimal
}
// console.log(todecimal(111));
//schimba random unu din biti
function changebit(num,nr){
  var length=1;
  var num2=num;
  while(num2>9)
  {
    length+=1;
    num2=Math.floor(num2/10);
  }
    // console.log("avem atatea biti "+length);
  //var ran=Math.floor(Math.random() * (length) + 1)
    var ran=nr;
  // console.log(ran);
  var partea_d_fata=Math.floor(num/Math.pow(10,ran))
  var partea_d_spate=num-partea_d_fata*Math.pow(10,ran);
  // console.log(partea_d_fata);
  // console.log(partea_d_spate);
  var final=0;
  var partial;
  // console.log("aici ar trebui sa citeacdaca numaru de pe pozitia ran este egal= "+Math.floor(partea_d_spate/Math.pow(10,ran-1)));
  if(Math.floor(partea_d_spate/Math.pow(10,ran-1))===1)
  {
    partial=partea_d_spate/Math.pow(10,ran-1);
    // console.log("partial="+partial);
    partea_d_spate=Math.floor((partial-1)*Math.pow(10,ran-1));
    // console.log(partea_d_spate);
    final=(partea_d_fata*Math.pow(10,ran))+partea_d_spate;
    // console.log((partea_d_fata*Math.pow(10,ran)));
  }else if(Math.floor(partea_d_spate/Math.pow(10,ran-1))===0){
    //console.log(partea_d_fata*Math.pow(10,ran));
    partial=partea_d_spate/Math.pow(10,ran-1);
    partea_d_spate=Math.floor((partial+1)*Math.pow(10,ran-1));
    final=partea_d_fata*Math.pow(10,ran)+partea_d_spate;
    //console.log(partea_d_spate);
  }
  return final;
}
//console.log(changebit(100000000));
// function plas_rastingin(n){
//   var x1,x2;
//   var temperature=100,temperature2=temperature;
//   var list=[],list1=[],list2=[];
//   var intervalstg=-5.12;
//   var intervaldrp=5.12;
//   var valori=2;
//   var min=1000;
//   var max=-1000;
//   var list_solutii=[];
//
// x1=Math.floor(randomarbitrar(intervalstg,intervaldrp,n)*Math.pow(10,n))/Math.pow(10,n);
// x2=Math.floor(randomarbitrar(intervalstg,intervaldrp,n)*Math.pow(10,n))/Math.pow(10,n);
// console.log(x1);
// list.push(x1); list.push(x2);
// //avem lista si variabilile
// min=calc_rastrigin(valori,list);
// max=calc_rastrigin(valori,list);
// //trebuie sa ajungm la un freez poit setat de noi
// list1.push(list[0]);list1.push(list[1]);
// while (temperature2>0)
// {
//   list_solutii=[]
//   var numardbiti=1;
//   var lung =tobit(list1[0]*Math.pow(10,n));
//   while(lung>9){
//     numardbiti+=1;
//     lung=Math.floor(lung/10);
//
//   }
//   // console.log(numardbiti);
//   for (var i = 0; i < numardbiti; i++){
//
//     list_solutii.push(todecimal(changebit(tobit(list1[0]*Math.pow(10,n)),i))/Math.pow(10,n));
//     console.log(list1[0]);
//     // console.log(changebit(tobit(list1[0]*Math.pow(10,n)),i) +" "+ tobit(list1[0]*Math.pow(10,n)));
//   }
//   console.log(list_solutii);
//   // vedem care din lista de solutii e cea mai buna
// sol=null;
// var min_local=10000;
// var bet=1
// while(bet===1){
//   bet=0
// for (var i = 0; i<numardbiti; i++) {
//   list1[0]=list_solutii[i];
//   console.log(list1[0]);
//   if(min_local > calc_rastrigin(valori,list1)){
//     min_local=calc_rastrigin(valori,list1);
//     console.log(min_local);
//     sol=list1[0];
//     if(min_local===min)
//     {
//         bet=1
//         list_solutii.splice(i,1);
//     }
//   }
//
// }
//
// }
// // console.log(min_local);
// if(min>min_local){
//   min=min_local;
//   temperature2=temperature;
// }else{
//   temperature2-=1;
// }
//
//
//   //list1[0] = todecimal(changebit(tobit(list1[0]*Math.pow(10*n))))/Math.pow(10,n);
//
//   //spunem, daca acceptam soluti
// }
//
//
// // while (temperature2>0&&iteration>0)
// // { list2.push(list[0]);list2.push(list[1]);
// //   list2[0] = todecimal(changebit(tobit(list2[0]*Math.pow(10*n))))/Math.pow(10,n);
// //   //spunem, daca acceptam solutia
// //   if(max<calc_rastrigin(valori,list2))
// //   {
// //       max1=calc_rastrigin(valori,list2);
// //       temperature--;
// //   }
// //   iteration-=1
// // }
// console.log("valuare minima pentru Simulated Annealingpe functia rastincgin este: "+min);
// //1console.log("valuare maxima pentru Simulated Annealingpe functia rastincgin este: "+max);
// }
// // plas_rastingin(3);
