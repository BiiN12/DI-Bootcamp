# Exercise 1
# Working with the following string:

description = "strings are..."

# make it all uppercase
# replace the word "are" to "is"
# print just the word "strings"

# Solution:

description.upper()
description = description.replace('are', 'is')
print(description[:7])

# Exercise 2
# Create a variable called my_age, use python to know how old you will be in 123879 years

# Solution:
my_age = 23
print(f"In 123879 years, I will be {my_age + 123879}")

# Exercise 3
# Check what is the type of each value, then change it: if it is a string, make it an integer and vice-versa:

bank_balance = '33000'
phone_number = 532287514

print(f"Bank balance is {type(bank_balance)} and Phone number is {type(phone_number)}")
bank_balance = int(bank_balance)
phone_number = str(phone_number)
print(f"Bank balance is {type(bank_balance)} and Phone number is {type(phone_number)}")

# Exercise 4
# Create a variable called first_name and a variable called last_name, and then print your full name using those two variables

first_name = 'Biniyam'
last_name = 'Belete'

print(first_name + " " + last_name)


# Exercise 5
# Given the following values:

x = 5
y = 10
z = 0
word1 = "hello"
word2 = "world"

# 1. Check if x is less than y and y is greater than z.
# 2. Verify if word1 is not equal to word2.
# 3. Use the bool() function to check the boolean value of z and word1.

# Solution:
#1 
print(x < y and y > z)
#2
print(word1 is not word2)
#3
print(bool(z))
print(bool(word1))
