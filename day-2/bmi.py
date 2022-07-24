#  python program to calculate body mass index
#  formula -> bmi = weight(kg)/height^2(m^2)
print("Welcome to BMI Calculator")
weight=int(input("Enter your weight\t"))
height=float(input("Enter your height\t"))
bmi = weight/(height*height)
new_bmi = int(bmi)
print("Your BMI is ",new_bmi)
