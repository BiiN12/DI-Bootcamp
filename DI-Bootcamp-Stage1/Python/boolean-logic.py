# Exercise 1 : Boolean Logic

first = "Hello World"
# This is a comment.

#7
print(len("What's my length?"))

#8
print("i am shouting".upper())

#10
print(str(4) + "real")

#11
cool = 3 * "cool"
print(cool)

#12
# one_0 = 1 / 0


#15
# num = int(input("Enter any number: "))
# if num < 0:
#     print("That number is less than 0!")
# elif num > 0:
#     print("That number is greater than 0!")
# else:
#     print("You picked 0!")

#16
text = "apple"
print(text.index("l"))

#17
check_y = "xylophone"
print("y" in check_y)

#18
my_string = "Hello World"
print(my_string.islower())


##########

# Exercise 2 : cat's and dog's years

human_years = 10
cat_years = 15
dog_years = 15

if human_years > 1:
    cat_years += 9
    dog_years += 9
    for year in range(2, human_years):
        cat_years += 4
        dog_years += 5
    
print([human_years, cat_years, dog_years])