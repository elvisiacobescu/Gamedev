package transformare_de_precizie;
import java.util.Scanner;
public class transformare {
	public static void main( String argv[])

	{
		matehis mat=new matehis();
		String binar="";
		Scanner sc=new Scanner(System.in);
		System.out.println("dati numarul binar");
		binar=sc.next();
		int front;
		int end;
		System.out.println("dati inceputul intervalului");
		front=sc.nextInt();
		System.out.println("datisfarsitul intervalului");
		end=sc.nextInt();
		int numar_zecimale;
		System.out.println("dati numaru de zecimale permise");
		int val_interval;
		numar_zecimale=sc.nextInt();
		val_interval=end - front;
		System.out.println("intervalul = "+val_interval );
		long varianta=0;
		double rezultat=0.0;
		
		varianta=mat.trasformare(binar);
		if (front<0)
		{
			rezultat=mat.calculation(val_interval,varianta )+front;//-front;
			
				
		}
		else rezultat=mat.calculation(val_interval,varianta );
		int numarzecimale=(int) Math.pow(10, numar_zecimale);
		rezultat=rezultat*numarzecimale;
		//System.out.println(rezultat + "<---");
		rezultat=(int)rezultat/(double)numarzecimale;
		//System.out.println(rezultat + "<---");
		System.out.println("rezultatul este = " );
		System.out.println(  rezultat);
		sc.close();
	}
	
	
}
