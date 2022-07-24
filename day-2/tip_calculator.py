# python program to generate tip to be given in restaurant
print('Welcome to Tip Calculator')
t_bill = float(input("what was the total bill? \n"))
split_bill = int(input("How many people to split bill? \n"))
tip_perc = int(input("what percentage would you like to give? 10 , 12 or 15% \n"))
bill_with_tip = tip_perc/100*t_bill+t_bill
final_bill = bill_with_tip/split_bill
final=round(final_bill,2)
# round func is used to round decimal values upto 2 integers...
print("Amount to be paid by each person is ",final)
