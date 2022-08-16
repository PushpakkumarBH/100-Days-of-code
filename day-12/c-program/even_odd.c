//  C program to check whether given number is even or odd number 
//  if a number is even it is divisible by 2

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main() {
    int n;
    printf("Enter a number to check if it is a even number or not\n");
    scanf("%d", &n);
    if (n%2==0)
    {
        printf("Given number is a even");
    }
    else
    {
        printf("Given number is not even");
    }
}


