//  C program to check whether given number is prime number or not
//  A given number is prime if it is divisible by 1 and itself so check from 1 to number itself if remainder is zero by some other number then given number is not prime.

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main() {
    int n,c=0;
    printf("Enter a number to check if it is a prime number or not\n");
    scanf("%d", &n);
    for(int i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            c++;
        }
    }
    if(c==2)
    {
        printf("Given number is a prime number");
    }
    else
    {
        printf("Given number is not a prime number");
    }

}

