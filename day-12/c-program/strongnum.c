//  C program to check whether given number is strong number or not
//  ex:- 145 is a strong number
//  1! + 4! + 5! = 145
// call a factorial fumction and declare a sum variable to store 
// the factorial sum and compare it with the user input

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int fact(int n){
    if(n==1)
        return 1;
    else
        return n*fact(n-1);
}

int main() {
    int n,sum=0,temp,rem;
    printf("Enter a number to check if it is a strong number or not\n");
    scanf("%d", &n);
    for(temp=n;n!=0;n=n/10)
    {
        rem=n%10;
        sum+=fact(rem);
    }
    if(temp==sum)
    {
        printf("Given number is a strong number");
    }
    else
    {
        printf("Given number is not a strong number");
    }

}

