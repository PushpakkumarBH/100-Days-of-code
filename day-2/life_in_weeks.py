# python program to calculate no. of days/weeks remaining
age = int(input("Enter your age"))
year_remaining = 90-age
days_remaining = year_remaining * 365
weeks_remaining = year_remaining * 52
months_remaining = year_remaining * 12
print("You have ",days_remaining," days ", weeks_remaining," weeks and ",months_remaining," months left.")
