# Exercise 1: What Are You Learning?
def display_message():
    print("I am learning about functions in Python.")
display_message()

# Exercise 2: What’s Your Favorite Book?
def favorite_book(title):
    print(f'One of my favorite books is {title}')
favorite_book("Alice in Wonderland")

# Exercise 3: Some Geography
def describe_city(city, country='Unknown'):
    print(f"{city} is in {country}")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# Exercise 4: Random
import random

def compare(number:int):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {number}, Random number: {random_number}")

compare(7)

# Exercise 5: Let’s Create Some Personalized Shirts!
def make_shirt(size='large', text='I love Python!'):
    print(f"The size of the shirt is {size} and the text is {text}")

make_shirt()
make_shirt('medium')
make_shirt('small')
make_shirt(size="small", text="Hello!")

# Exercise 6: Magicians…
magician_name = ["Harry Houdini", "David Blaine", "Criss Angel"]
def show_magicians(magician_name):
    for name in magician_name:
        print(name)

def make_great(magician_name):
    for name in range(len(magician_name)):
        magician_name[name] = f"{magician_name[name]} the Great"

make_great(magician_name)
show_magicians(magician_name)

# Exercise 7: Temperature Advice
import random

def get_random_temp(month):
   
    # Determine temperature ranges based on seasons
    if month in [12, 1, 2]:  # Winter
        return round(random.uniform(-10, 10), 1)
    elif month in [3, 4, 5]:  # Spring
        return round(random.uniform(10, 20), 1)
    elif month in [6, 7, 8]:  # Summer
        return round(random.uniform(20, 40), 1)
    elif month in [9, 10, 11]:  # Autumn
        return round(random.uniform(10, 25), 1)
    else:
        print("Invalid month! Using full range -10 to 40.")
        return round(random.uniform(-10, 40), 1)


def main():
    month = int(input("Enter a month (1-12): "))

    temp = get_random_temp(month)
    print(f"The temperature right now is {temp}°C.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 23:
        print("Nice weather.")
    elif 23 <= temp < 32:
        print("A bit warm, stay hydrated.")
    else:  # 32 to 40
        print("It’s really hot! Stay cool.")


main()
