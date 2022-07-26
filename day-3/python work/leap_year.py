# python program to finad whether given year is leap or not

year = int(input("Enter the year "))
if ((year%4)==0):
    if ((year%100)==0):
        if ((year%400)==0):
            print('Its a leap year')
        else:
            print('not a leap year')
    else:
        print('not a leap year')