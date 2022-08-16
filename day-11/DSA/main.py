def reverse(string):
    string = string[::-1]
    return string

def reverse2(string):
    str=" "
    for i in string:
        str= i + str
    return str

var = reverse2("olleH")
print(var)