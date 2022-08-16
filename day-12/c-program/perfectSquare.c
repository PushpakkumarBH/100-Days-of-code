//  C program to check whether given number is perfect square or not
//  Ex:- 1,4,9,16,25,36,49,64,81,100...

#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main() {
    int n,s;
    printf("Enter a number to check given number is perfect square.\n");
    scanf("%d", &n);
    s=sqrt(n);
    if(n==s*s)
        printf("Given number is a perfect square.");
    else
        printf("Given number is not a perfect square.");

}

