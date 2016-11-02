package ag;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class minsimax {
	
	public static void main(String argv[])
	{
		
	 double interval_x;
	 double interval_y;
	 double distanta;
	 int acuritate;
	 double warst_case_max_rand=0.0;
	 double warst_case_min_rand=-100.0;
	 double best_case_max_rand=-100.0;
	 double best_case_min_rand=100.0;
	 int b;
		
		
		Scanner sc=new Scanner(System.in);
		System.out.println("  dati intervalul functiei /n dati x");
		interval_x=sc.nextDouble();
		System.out.println( "dati y");
		interval_y=sc.nextDouble();
		//obj func=new obj(interval_x,interval_y);
		System.out.println( "dati acuritaea");
		acuritate=sc.nextInt();
		System.out.println( "dati distanta");
		distanta=sc.nextDouble();
		//List<Double> list=new ArrayList();
		b=acuritate;
		while(acuritate!=0)
		{   List<Double> list=new ArrayList();
			obj func=new obj(interval_x,interval_y);
			func.rezultat(distanta);
			list.add(func.getmax_prog());
			list.add(func.getmin_prog());
			list.add(func.getmax_random());
			list.add(func.getmin_random());
			acuritate --;
			if (list.get(2)<warst_case_max_rand)
				warst_case_max_rand=list.get(2);
			if (list.get(3)>warst_case_min_rand)
				warst_case_min_rand=list.get(3);
			if (list.get(2)>best_case_max_rand)
				best_case_max_rand=list.get(2);
			if (list.get(3)<best_case_min_rand)
				best_case_min_rand=list.get(3);
			int a=0;
			a=b-acuritate;
			System.out.println("pentru incercarea numaru" + a);
			System.out.println("random max" +list.get(2));
			System.out.println("random min" +list.get(3));
			System.out.println("progresiv max"+list.get(0));
			System.out.println("progeresiv min"+list.get(1));
		
		}
		System.out.println("in cel mai bun caz maximu pentru random a fost"+ best_case_max_rand);
		System.out.println("in cel mai rau caz muximu pentru random a fost"+ warst_case_max_rand);
		System.out.println("in cel mai bun caz minimu pentru random a fost"+ best_case_min_rand);
		System.out.println("in cel mai rau caz minimu pentru random a fost"+ warst_case_min_rand);
		sc.close();
	}
}