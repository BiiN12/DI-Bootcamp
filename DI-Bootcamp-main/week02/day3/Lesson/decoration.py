#Decorators are python built-in functions that we "apply" to our functions within the class, i.e methods
from datetime import datetime, date

class Person:

    def __init__(self, first_name, last_name, birth_date):
        self.first_name = self.format_name(first_name)
        self.last_name = self.format_name(last_name)
        self.birth_date = self.parse_birthdate(birth_date)
    
    @staticmethod  #a method that don't really needs the self
    def format_name(name):
        return name.capitalize()
    
    @staticmethod
    def parse_birthdate(date_str):
        return datetime.strptime(date_str, '%d-%m-%Y').date()
    
    @classmethod
    def from_age(cls, first_name, last_name, age:int):
        current_year = datetime.today().year
        birth_year = current_year - age
        birth_date = f'1-01-{birth_year}'
        return cls(first_name, last_name, birth_date)
    
    @property
    def email(self):
        last_name = self.last_name.split()
        email = f'{self.first_name[0].lower()}.{last_name[0].lower()}@gmail.com'
        return email 
    

p1 = Person('john', 'snow da silva', '21-08-1990')
print(p1.birth_date)
print(p1.first_name)
print(p1.birth_date)

#how to use a class method when creating the object:
p2 = Person.from_age('aria', 'stark', 18)
print(p2.birth_date)

print(p1.email)
print(p2.email)