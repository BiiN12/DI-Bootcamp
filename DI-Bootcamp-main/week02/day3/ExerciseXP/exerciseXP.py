# Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE

    def __str__(self):
        return f'{self.amount} {self.currency}'
    
    def __repr__(self):
        return f'{self.amount} {self.currency}'
    
    def __int__(self):
        return self.amount

    def __add__(self, other):
        if type(other) == int:
            return self.amount + other
        elif self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            return self.amount + other.amount
    
    def __iadd__(self, other):
        if type(other) == int:
            self.amount += other
        elif self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            self.amount += other.amount
        return self
    

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(c1 + 5)
# 10

print(c1 + c2)
# 15

print(c1) 
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

# print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# Exercise 2: Import
from func import add

print(add(7, 12))

# Exercise 3: String module
import string, random

string = string.ascii_letters
random_str = random.sample(string, 5)

print("".join(random_str))

# Exercise 4: Current Date
import datetime

today = datetime.datetime.now()
# print(today)

# Exercise 5: Amount of time left until January 1st

jan_1st = datetime.datetime(2026, 1, 1)

time_left = jan_1st - today
print(f"Time difference: {time_left}")

# Exercise 6: Birthday and minutes
def birthdate(day, month, year):
    user_birthdate = f'{day}-{month}-{year}'
    formatted_date = datetime.datetime.strptime(user_birthdate, '%d-%m-%Y')
    
    time_lived = datetime.datetime.now() - formatted_date
    total_minutes = time_lived.total_seconds()/60
    print(f'You lived {total_minutes:,.0f} minutes in your life.')

birthdate(12, 4, 2000)

# Exercise 7: Faker Module
# from faker import Faker  # Couldn't import faker
# faker = Faker()

# print(faker.name())

# 
    
