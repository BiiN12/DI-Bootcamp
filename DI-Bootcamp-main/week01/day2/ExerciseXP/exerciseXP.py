# Exercise 1: Favorite Numbers
my_fav_numbers = {3, 7, 12}
friend_fav_numbers = {6, 9, 27}
my_fav_numbers.add(19)
my_fav_numbers.add(21)
my_fav_numbers.remove(21)

unpack_sets = list(my_fav_numbers) + list(friend_fav_numbers)

our_fav_numbers = set(unpack_sets)
print(our_fav_numbers)


# # Exercise 2: Tuple
numbers = (1, 2, 3)

# Add more integers by creating a new tuple
numbers = numbers + (4, 5)

print(numbers)


# Exercise 3: List Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)


# Exercise 4: Floats
# A float is a number that has a decimal point (like 1.5, 3.14, 10.0).
sequence = []

num = 1.5
while num <= 5:
    if num.is_integer():       
        sequence.append(int(num))
    else:
        sequence.append(num)
    num += 0.5

print(sequence)

# Exercise 5: For Loop
for i in range(1, 21):
    print(i)

for i in range(2, 21, 2):
    print(i)

# Exercise 6: While Loop
my_name = "biin"

while True:
    name = input("Enter your name: ")
    if name.lower() == my_name:
        print("We have the same name!")
        break

# Exercise 7: Favorite Fruits
favorite_fruits = input("Enter your favorite fruits (separated by spaces): ").split()

fruit_choice = input("Enter the name of a fruit: ")


if fruit_choice in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")


# Exercise 8: Pizza Toppings
toppings = []
base_price = 10
topping_price = 2.5

print("Enter pizza toppings one by one (type 'quit' to finish):")

while True:
    topping = input("Enter a topping: ")
    if topping.lower() == "quit":
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")


total_cost = base_price + len(toppings) * topping_price

print("\nYour pizza order summary:")
print("Toppings:", ", ".join(toppings) if toppings else "No extra toppings")
print(f"Total cost: ${total_cost}")


# Exercise 9: Cinemax Tickets
total_cost = 0


while True:
    age_input = input("Enter age (or 'done' to finish): ")
    if age_input.lower() == "done":
        break
    age = int(age_input)

    # Pricing rules
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price

print(f"\nTotal ticket cost: ${total_cost}")

# Bonus:
attendees = []


while True:
    age_input = input("Enter age (or 'done' to finish): ")
    if age_input.lower() == "done":
        break
    age = int(age_input)

    if 16 <= age <= 21:
        attendees.append(age)  # Keep only allowed ages

print("\nFinal list of attendees (ages):")
if attendees:
    print(attendees)
else:
    print("No one is allowed to watch this movie.")



# Exercise 10: Sandwich Orders
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

finished_sandwiches = []

print("Sorry, the deli has run out of Pastrami.\n")

while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  # Take the first sandwich
    print(f"I made your {current_sandwich} sandwich.")
    finished_sandwiches.append(current_sandwich)


print("\nAll sandwiches are ready:")
print(finished_sandwiches)
