//  C program to check whether given number is Armstrong number or not
//  for a number to be armstrong number cube of each indivisual when summed should be equal to number given
// 153 => 1^3 + 5^3 + 3^3 == 153


#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main() {
    int n,rem,sum=0,temp;
    printf("Enter a number to check if it is a armstrong number or not\n");
    scanf("%d", &n);
    rem=n%10;
    for(temp=n;n!=0;n=n/10)
    {
    rem=n%10;
    sum=sum+(rem*rem*rem);
    }
    if(sum==temp)
        printf("Given number is a armstrong Number");
    else
        printf("Given number is not a armstrong number");
}

