import random

while True:
    string = input('Enter 10 character long string: ')
    string_len = len(string)
    if string_len > 10:
        print("String too long.")
    elif string_len < 10:
        print("String not long enough.")
    else:
        print("Perfect string")
        break
print(string[0] + string[-1])

string_chr = ''
for letter in string:
    string_chr += letter
    print(string_chr)

