// C program to find given input is Fibonacci number or not.
// Fibonacci numbers are 0 1 1 2 3 5 8 13 and so on.
// Logic ==> add first two numbers to get the third number.
// if the number lets say n ,
// 5*n*n+4 || 5*n*n-4 is a square number then given number is a fibonacci
#include <stdio.h>
#include <math.h>
#include <stdbool.h>
bool IsPerfectSquare(int n)
{
    int s;
    s=sqrt(n);
    return (s*s==n);
}
bool isFibonacci(int n)
{
    return IsPerfectSquare(5*n*n-4) || IsPerfectSquare(5*n*n+4);
}
int main() {
    int n;
    printf("Enter a number to check whether it is a fibonacci or not\n");
    scanf("%d", &n);
    if(isFibonacci(n)){
        printf("Given number %d is Fibonacci Number.",n);
    }
    else{
        printf("Given number %d is not a Fibonacci Number.",n);
    }
}

