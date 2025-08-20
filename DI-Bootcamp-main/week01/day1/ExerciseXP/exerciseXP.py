# Exercise 1 : Hello World
print('Hello world\n' * 3)

# Exercise 2 : Some Math
print((99**3)*8)

# Exercise 3 : What is the output ?

# >>> 5 < 3  # False
# >>> 3 == 3  # True
# >>> 3 == "3"  # False
# >>> "3" > 3  # False
# >>> "Hello" == "hello"  # False

# Exercise 4 : Your computer brand

computer_brand = 'Dell'
print(f'I have a {computer_brand} computer.')

# Exercise 5 : Your information

name = 'BiiN'
age = 23
shoe_size = 41
info = 'Hello, My name is {} and i\'m {} years old. \nMy shoe size is {} and my favorite programming language is Python!'.format(name,age,shoe_size)
print(info)

# Exercise 6 : A & B

a = 12
b = 7
if a > b:
    print("Hello World")

# Exercise 7 : Odd or Even

num = int(input("Enter any number: "))
if (num % 2) == 0:
    print("It\'s even number!")
elif (num % 2) != 0:
    print("It\'s odd number!")

# Exercise 8 : What’s your name ?

my_name = 'biin'
user_name = input("Enter your name: ")
if user_name.lower() == my_name:
    print("We have same name. GIVE IT UP :)")
else:
    print("We don\'t have in common :)")

# Exercise 9 : Tall enough to ride a roller coaster

user_height = int(input("How tall are you?(in centimeters) "))
if user_height >= 145:
    print('You are tall enough to ride!')
elif user_height < 145:
    print("You need to grow some more to ride :(")