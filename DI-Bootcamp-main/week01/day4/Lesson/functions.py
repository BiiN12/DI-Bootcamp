# Exercise 1
# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def calculation(a, b):
    return a+b, a-b

res = calculation(40, 10)
print(res)

# Exercise 2
# create a function called country_info that receives a country name as argument
# and prints the capital of that country. Make the country name argument default
# Naboo (star wars planet). Its capital is Theed

countries_capitals = {
        # Major countries
        "USA": "Washington, D.C.",
        "UK": "London",
        "Canada": "Ottawa",
        "France": "Paris",
        "Germany": "Berlin",
        "Italy": "Rome",
        "Naboo": "Theed"
}
def country_info(country):
    if country in countries_capitals:
        print(f"The capital city of {country} is {countries_capitals[country]}.")
    else:
        print("This country is not supported!")

country_info("Naboo")
country_info("Greece")