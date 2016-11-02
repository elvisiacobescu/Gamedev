package ag;
import java.util.*;

public class obj {
 
	
	double interval_drp ;
	double interval_stg;
	List<Double> list=new ArrayList();
	int  returneaza(int a){
		int b;
		b= a-1;
		
		return b; 
	}
	
	 
	obj(double a,double b)
	{
		interval_drp=b;
		interval_stg=a;
	}
	
	public double calcul(double x, double y)
	{double val;
	val= Math.pow(1.5-x*(1-y),2)+Math.pow(2.25-x*(1-Math.pow(y, 2)),2)+Math.pow(2.625-x*(1-Math.pow( y , 3)), 2);
		return val;
	}
	
	public double randomesa()
	{
		Random rd=new Random();
		double randomizabil=0.0;
		double nr_rad;
		if (interval_stg<0)
		{
			randomizabil=randomizabil-interval_stg+interval_drp;
		}
		else randomizabil=interval_stg+interval_drp;
		
		nr_rad=rd.nextDouble()+rd.nextInt((int)randomizabil)-1;
		nr_rad=nr_rad+interval_stg;
		return nr_rad;
	}
	public double functie_random ()
	{
		double y;
		y=this.calcul(this.randomesa(), this.randomesa());
		return y;
	}
	/**
	 * 
	 * @param interval ida intervalul cu care se deplaseaza
	 * @return maximu progresiv ,minimu progresiv,maximu randomizat,minimu randomizat
	 */
	public  void  rezultat (double interval)
	{
	//	List<Double> list=new ArrayList();
		double max_prog=-100.0;
		double min_prog=100.0;
		double max_random=-100.0;
		double min_random=100.0;
		int a=0;
		for(double i=interval_stg;i<interval_drp;i=i+interval){
			for(double j=interval_stg;j<interval_drp;j=j+interval)
		{
			if(this.calcul(i,j)<min_prog)
				min_prog=this.calcul(i,j);
			   else
				   if( this.calcul(i,j)>max_prog);
			             max_prog=this.calcul(i,j);
	
		}
			
			
		}
		while(a<40)
		{
			double num=0.0;
			num=this.functie_random();
				if(num<min_random)
					min_random=num;
				else if(num>max_random)
					max_random=num;
			a++;
		}
		
		list.add(max_prog);
		list.add(min_prog);
		list.add(max_random);
		list.add(min_random);
		/*System.out.println("max_prog " + max_prog);
		System.out.println("min_prog " + min_prog);
		System.out.println("max_random " + max_random);
		System.out.println("min_random " + min_random);
	*/}
	public double getmax_prog(){
		return list.get(0); 		
	}
	public double getmin_prog(){
		return list.get(1); 		
	}
	public double getmax_random(){
		return list.get(2); 		
	}
	public double getmin_random(){
		return list.get(3); 		
	}
	
}
	

