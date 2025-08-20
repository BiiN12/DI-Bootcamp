# Exercise 2

# 1. ask the user to enter his/her name
# 2. use the len() function to check the length of the name. if it is less than 5 letter print('You have a short name :)')

# Solution:
# name = input("What is your name? ")
# name_len = len(name)
# if name_len < 5:
#     print('You have a short name :)')
# elif name_len > 5:
#     print('You have a long name!')

# Exercise 2 

# Ask the user for a number between 1 and 100
# If the number is a multiple of three, print Fizz
# If the number is a multiple of five, print Buzz.
# If the number is a multiple is a multiples of both three and five, print FizzBuzz instead.

# Solution:
number = int(input('Enter a number between 1-100: '))
if (number % 3) == 0 and (number % 5) == 0:
    print('FizzBuzz')
elif (number % 3) == 0:
    print('Fizz')
elif (number % 5) == 0:
    print("Buzz")