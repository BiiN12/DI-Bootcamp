# Exercise 1: Converting Lists into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

number_dict = dict(zip(keys, values))
# for i in range(len(keys)):
#     number_dict[keys[i]] = values[i]

print(number_dict)

# Exercise 2: Cinemax #2

# Under 3 years old: Free
# 3 to 12 years old: $10
# Over 12 years old: $15

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
print("Enter a family member's name to add('q' to quit): ")
while True:
    name = input("Enter a name: ")
    if name == 'q':
        break
    else:
        age = int(input("How old are you: "))
        family[name] = age

total_price = int()

for key, value in family.items():
    if value < 3:
        print(f"The ticket price for {key} is free!")
    elif value >= 3 and value <= 12:
        print(f"The ticket price for {key} is $10.")
        total_price += 10
    elif value > 12:
        print(f"The ticket price for {key} is $15.")
        total_price += 15

print(f"The total price is ${total_price}.")


# Exercise 3: Zara
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
        }
}

brand["number_stores"] = 2
print(f"Zara’s clients - {brand['type_of_clothes']}")
brand["country_creation"] = "Spain"

if brand["international_competitors"]:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])

print(len(brand.keys()))
print(brand.keys())

# Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
chr_to_indices = dict(zip(users, range(len(users))))
print(chr_to_indices)

indices_to_chr = dict(zip(range(len(users)), users))
print(indices_to_chr)

sorted_chr = dict(zip(sorted(users), range(len(users))))
print(sorted_chr)