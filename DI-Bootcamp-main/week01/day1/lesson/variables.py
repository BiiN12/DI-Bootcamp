# Exercise 1
# You have a friend named Alice, and you want to send her a message with the following details:

name = 'Alice'
age = 30
city = 'New York'

# Tasks:

# Use f-strings to print a message saying:
#   "Hello, Alice! You are 30 years old and live in New York."
# Use str.format() to print the same message.

# Solution:
print(f"Hello, {name}! You are {age} years old and live in {city}")
print("Hello, {}! You are {} years old and live in {}.".format(name, age, city))

# Exercise 2

# Ask the user for their age using the input() function and store it in a variable age.
# Convert the inputted age into an integer and calculate the number of years until they turn 100.
# Display a message: "You will turn 100 in X years", where X is the number of years calculated.

user_age = int(input("How old are you? "))
years = 2025
user_age_100 = 100 - user_age + years
print(f"You will turn 100 in {user_age_100} years")