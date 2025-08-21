# Exercise 1
# Given this list:

list1 = [5, 10, 15, 20, 25, 50, 20]

# find the value 20 in the list, and if it is present, replace it with 200. Only update the first occurrence of a value
# Hint : Look at the index method

# Expected output:
# list1 = [5, 10, 15, 200, 25, 50, 20]

# Solution:

for i in range(len(list1)):
    if list1[i] == 20:
        list1[i] = 200
        break
print(list1)


# Exercise 2
# Unpack the following tuple into 4 variables

a_tuple = (10, 20, 30, 40)

# Expected output:
# a_tuple = (10, 20, 30, 40)
# Your code

a, b, c, d = a_tuple

print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40

# Exercise 3
fav_colors = {'blue', 'green', 'yellow', 'purple', 'red'}
friend_fav_color = {'pink', 'white', 'blue', 'orange'}
fav_colors.add('gray')

print(fav_colors.intersection(friend_fav_color))
fav_colors.clear()
print(fav_colors)
