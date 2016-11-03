package transformare_de_precizie;

public class matehis {	

	
	
	public  long toDecimal(long n) {
    long d = 0; // decimal representation
    int i = 0; // power we're going to raise n to
    while (n != 0) {
        int r = (int)(n % 10); // remainder
        if (r != 0)
            d += (long)Math.pow(2, i); // raise 2 to the i and add it to the sum
        ++i;
        n /= 10; // reduce n
    }
    System.out.println("transformare " + d);
    return d;
}


 public long trasformare(String a)
{long b=0;
 long binar=0;
for(int i=0;i<a.length();i++)
{
	if(a.charAt(i)=='0')
	{
		binar=binar*10+0;
	}
	else binar=binar*10+1;
}
System.out.println("cum ies inn baza doi" + binar);
b=this.toDecimal(binar);
	return b; 
	
}

 
public double calculation(int m , long b  )
{
	double n= m /(Math.pow(2, 22)-1);
    double x;
    
    System.out.println("n= " + n);
    
    x=b*n;
    System.out.println("b= " + b);
    System.out.println("inainte de numar fix de zecimale " + x);
    
    return x;
}



}
