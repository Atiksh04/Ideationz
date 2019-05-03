import java.util.*;


class operate{

   void  add(int a,int b)
    {
        System.out.println("Sum is :" + (a+b) );
    }
    void sub(int a , int b)
    {
        System.out.println("Result is:"+ (a-b));
    }
    void mul(int a ,int b){
        System.out.println("Result is :"+ (a*b));
    }
    void div(int a , int b){
        System.out.println("Result is: " +(a/b));
    }
}

public class calculator{
   int a,b;
   void input()
   {

   }

    public static void main (String args[])
    {
        Scanner in =new Scanner(System.in);

        int f=0;

        do{
            System.out.println("Enter 1 for Addition , 2 for Subtraction , 3 for Multiplication , 4 for Division and 5 to Exit ");
            int ch=in.nextInt();
            int a=0 ,b=0;

            operate ob= new operate();
            if(ch==1) {
                System.out.println("Enter the First Value");
                a =in.nextInt();
                System.out.println("Enter the Second Value");
                 b=in.nextInt();
              
                ob.add(a,b);

            }
            else if(ch==2)
            {
                System.out.println("Enter the First Value");
                a =in.nextInt();
                System.out.println("Enter the Second Value");
                b=in.nextInt();

                ob.sub(a,b);}
            else if(ch==3)
            {
                System.out.println("Enter the First Value");
                a =in.nextInt();
                System.out.println("Enter the Second Value");
                b=in.nextInt();

                ob.mul(a,b);}
            else if(ch==4) {
                System.out.println("Enter the First Value");
                a = in.nextInt();
                System.out.println("Enter the Second Value");
                b = in.nextInt();
                ob.div(a,b1);
            }
            else
            {f=1;break;}
        }
        while(f==0);
    }
}