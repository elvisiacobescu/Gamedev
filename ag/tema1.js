var a,b;
var Pi=3.14159265;
var digits=6;
var Max_temperature=10;
var precizie=1;

function generate_random( size,a,b)
  {
    var maxhilltop=[];
    var aux=[];
    var N=Math.log2((b-a)*Math.pow(10,precizie));
    for (var i = 0; i < size ; i++) {
      for (var j = 0; j <N; j++) {
        aux.push(generate_bool_numbers());
      }
      maxhilltop.push(aux);
      aux=[];
    }
    return maxhilltop;
  }
  //returneaza 1 sau 0
  function generate_bool_numbers(){
    var ran=Math.floor(Math.random()*2+1);
  //  console.log(ran%2);
    return ran%2;
  }
  //v e un vector
  function sumaRa(v) {
    var i,sum=0;
    for (i = 0; i < v.length; i++) {
      sum=sum+(v[i] * v[i]) - 10 * (Math.cos(2 *Math.PI*v[i]));
    }
    return sum;
  }
  //v e un vector
  function Rastringin(v){
    return 10 * v.length + sumaRa(v);
  }
  //v e un vector
  function sumaG(v)
  {
    var i,sum=0;
    for (i = 0; i < v.length; i++) {
      sum=sum + ((v[i] * v[i]) / 4000);
    }
    return sum;
  }
  //v e un vector
  function prodG(v){
    var i,prod=1;
    for (i = 0; i < v.length; i++)
    {
        if (i == 0)
        {
  			prod = prod * Math.cos(v[i]);
        }
        else
    		{
    			prod = prod * (Math.cos(v[i] / Math.sqrt(i)));
    		}
    }
    return prod;
  }
  //v este un vector
  function Griewangk(v)
  {
    return sumaG(v) - prodG(v) + 1;
  }
  //v este un vector
  function Rosenbrock(v)
  {
    var i;
    var sum;
    for (i = 0; i < v.length - 1; i++)
	{
		sum = sum + (100 * Math.pow((v[i + 1] - Math.pow(v[i], 2)), 2) + Math.pow(1 - v[i], 2));
	}
	return sum;
  }
  //veste un vector cu 2 parametri x1 si x2
   function Six_hump(v)
  {
    var x1=v[0],x2=v[1];
    var rez;
    rez = (4 - 2.1*Math.pow(x1, 2) + Math.pow(x1, 4) / 3)*Math.pow(x1, 2) + x1*x2 + (-4 + 4 * Math.pow(x2, 2))*Math.pow(x2, 2);
	return rez;
  }

  function decode(max_hilltop,a,b){
    var rez=[];
    var N = Math.log2((b - a)*Math.pow(10, precizie));
    var sol,x1=0,n;
    var rezultat=0;
    for (var j = 0; j < max_hilltop.length; j++) {
       for (var i =max_hilltop[j].length-1; i >0; i--) {
         if(max_hilltop[j][i]===1)
         {
           x1 = x1 + Math.pow(2, max_hilltop[j].length - i-1);
         }
       }
       rezultat = a + x1 * (b - a) / (Math.pow(2, N) - 1);
       rez.push(rezultat);
       x1=0;
    }
    return rez;
  }

  function decodeSix(max_hilltop,a,b,a1,b1)
  {
    var rez=[];
    var N = Math.log2((b - a)*Math.pow(10, precizie));
    var sol,x1=0,n;
    var rezultat;
    var amber= max_hilltop[0].length - 1;
    for (var i =amber; i >=0; i--) {
        if (max_hilltop[0][i] == 1)
  		    {
  			       x1 = x1 + Math.pow(2, amber-i);
  		    }
    }
    rezultat = a + x1 * (b - a) / (Math.pow(2, N) - 1);
    rez.push(rezultat);
    x1 = 0;
    N = Math.log2((b1 - a1)*Math.pow(10, precizie));
    for (var i = max_hilltop[1].length - 1; i >= 0; i--)
	   {
		     if (max_hilltop[1][i] == 1)
		       {
			          x1 = x1 + Math.pow(2, max_hilltop[1].length - i - 1);
		       }
	   }
     rezultat = a1 + x1 * (b1 - a1) / (Math.pow(2, N) - 1);
	    rez.push(rezultat);
	     return rez;
  }

function compute_fitness(max_hilltop,type){
  var a, b, a1, b1;
  switch (type) {
    case 1:
  		 a = -5.12;
  		 b = 5.12;
  		 return Rastringin(decode(max_hilltop, a, b));
  	 case 2:
  		 a = -600;
  		 b = 600;
  		 return Griewangk(decode(max_hilltop, a, b));
  	 case 3:
  		 a = -2.048;
  		 b = 2.048;
  		 return Rosenbrock(decode(max_hilltop, a, b));
  	 case 4:
  		 a = -3;
  		 b = 3;
  		 a1 = -2;
  		 b1 = 2;
  		 return Six_hump(decodeSix(max_hilltop, a, b, a1, b1));
  	 default:
  		console.log("Cod gresit!");
  }

}
function flip_bit(max_hilltop,bit_position,vect_position)
{
  if (max_hilltop[vect_position][bit_position] == 1)
  	{
      max_hilltop[vect_position][bit_position]=0;
    }
  	else
  	{
      max_hilltop[vect_position][bit_position]=1;
  	}
  	return max_hilltop;

}
function add(max_hilltops,max_hilltop){
  //console.log(max_hilltops);
    max_hilltops.push(max_hilltop);
	  return max_hilltops;
}
function max(max_hilltops,type)
{
  var v=[];
  var max_fitness,fitness;
  max_fitness = compute_fitness(max_hilltops[0],type);
  v=max_hilltops[0];
  for (var i = 0; i < max_hilltops.length; i++)
  {
    for (var j = 0; j < max_hilltops[i].length; j++)
    {
      fitness = compute_fitness(max_hilltops[i], type);
      if (fitness > max_fitness)
      {
        max_fitness = fitness;
        v = max_hilltops[j];
      }
    }
  }
  return v;
}

function steepest_ascent_hill_climbing(max_number_of_iterations,type,size)
{
  var a,b,a1,b1;
  switch (type)
	{
	case 1:
		a = -5.12;
		b = 5.12;
		break;
	case 2:
		a = -600;
		b = 600;
		break;
	case 3:
		a = -2.048;
		b = 2.048;
		break;
	case 4:
		a = -3;
		b = 3;
		a1 = -2;
		b1 = 2;
		break;
	default:
		console.log("Cod gresit!");
		break;
	}
  var max_hilltops=[];
  var max_hilltop,hilltop;
  var increase_found;
  var max_fitness,fitness;

  for (var i = 0; i <= max_number_of_iterations; i++)
	{
		max_hilltop=generate_random(size,a,b);
		max_fitness = compute_fitness(max_hilltop,type);
		increase_found = true;
		while (increase_found)
		{

			for (var j = 0; j < max_hilltop.length; j++)
			{
				increase_found = false;
				for (var bit_position = 0; bit_position< max_hilltop[j].length; bit_position++)
				{
					hilltop = flip_bit(max_hilltop, bit_position,j);
					fitness = compute_fitness(hilltop,type);
					if (fitness >max_fitness)
					{
						max_fitness = fitness;
						max_hilltop = hilltop;
						increase_found = true;
					}
				}
			}
		}
    //ce face treaba asta?
		max_hilltops=add(max_hilltops,max_hilltop);
	}
  return max(max_hilltops, type);
}

 function generate_random_bit_position(size)
  {
    var ran=Math.floor(Math.random()*size+0);
    //returneaza var re 0 si size
    return ran;
  }

  function simulated_annealing(){
    var a, b, a1, b1;
  	switch (type)
  	{
  	case 1:
  		a = -5.12;
  		b = 5.12;
  		break;
  	case 2:
  		a = -600;
  		b = 600;
  		break;
  	case 3:
  		a = -2.048;
  		b = 2.048;
  		break;
  	case 4:
  		a = -3;
  		b = 3;
  		a1 = -2;
  		b1 = 2;
  		break;
  	default:
  		console.log("Cod gresit!");
  		break;
  	}
    var temperature=Max_temperature, bit_position, probability;
    var max_hilltop=[], hilltop=[];
    var max_fitness, fitness, acceptance_probability;
    max_hilltop = generate_random(size, a, b);
    max_fitness = compute_fitness(max_hilltop, type);
    while (temperature > 0)
  	{
  		for (var i = 0; i <= max_number_of_iteration; i++)
  		{
  			for (var j = 0; j < max_hilltop.length; j++)
  			{
  				bit_position = generate_random_bit_position(max_hilltop[j].length - 1);
  				hilltop = flip_bit(max_hilltop, bit_position, j);
  				fitness = compute_fitness(hilltop,type);
  				if (fitness > max_fitness)
  				{
  					max_fitness = fitness;
  					max_hilltop = hilltop;
  				}
  				else
  				{
  					probability = rand() % 2;
            //cef ace aici
  					acceptance_probability = Math.exp((max_fitness - fitness) / temperature);
  					if (probability < acceptance_probability)
  					{
  						max_fitness = fitness;
  						max_hilltop = hilltop;
  					}
  				}
  			}
  		}
  		temperature = temperature*temperature_step;
  	}
    return max_hilltop;
  }

(function test(){
var v=[];
var opt,nrIteratii;
var ceva=0,x=0;
for (var i = 1; i <= 30; i++)
	{
		v = steepest_ascent_hill_climbing(30, 1, 5);
		x = compute_fitness(v, 4);
    console.log(x);
		ceva = ceva + x;
	}
})();
