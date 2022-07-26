# python program of pizza delivery system

print('Welcome to Python Pizza Deliveries...')
size = input('What size of pizza do u want? S)mall M)edium L)arge ')
add_pepperoni = input('Do you want pepperoni? ')
ext_cheese = input('Do u want extra cheese? ')
price = 0

#  Adding prize to size of pizza 

if (size=='s' or size=='S'):
    price=15
elif (size=='m' or size=='M'):
    price=20
elif (size=='l' or size=='L'):
    price=25
else : print('Invalid size')

#  adding price for pepperoni

if (add_pepperoni=='y'or add_pepperoni=='Y'):
    if (price==15):
        price+=2
    elif (price==20 or price==25):
        price+=3
else:
     print('Pepperoni not added')

  
# adding price for extra cheese

if (ext_cheese=='y' or ext_cheese=='Y') :
    price+=1
else:
    print('Extra cheese not added')

print("Your Total Bill = ${0}".format(price))