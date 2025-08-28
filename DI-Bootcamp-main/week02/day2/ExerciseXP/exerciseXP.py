# Exercise 1: Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass



all_cats = [Bengal('Bengal', 3), Chartreux('Chartreux', 7), Siamese('Siamese', 5)]
print(all_cats)

sara_pets = Pets(all_cats)
sara_pets.walk()



# Exercise 2: Dogs
class Dog:
    def __init__(self, name, age, weight):
        # ... code to initialize attributes ...
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        # ... code to return bark message ...
        return f'{self.name} is barking'

    def run_speed(self):
        # ... code to return run speed ...
        return (self.weight/self.age) * 10

    def fight(self, other_dog):
        # ... code to determine and return winner ...
        if (self.run_speed() * self.weight) > (other_dog.run_speed() * other_dog.weight):
            winner = self.name
        elif (self.run_speed() * self.weight) < (other_dog.run_speed() * other_dog.weight):
            winner = other_dog.name
        else:
            return 'no one won the fight'
        
        return f'{winner} won the fight'

# Step 2: Create dog instances
#... your code here

dog1 = Dog('Jack', 5, 25)
dog2 = Dog('Eva', 8, 23)
dog3 = Dog('Rio', 7, 22)
# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

print()


# Exercise 3: Dogs Domesticated
import random
class PetDog(Dog):
    def __init__(self, name, age, weight): 
        super().__init__(name, age, weight)
        self.trained = False

    def train(self): 
        print(self.bark())
        self.trained = True

    def play(self, *args):
        # ... code to print play message ...
        print(f"{args} all play together")

    def do_a_trick(self): 
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")

# Test PetDog methods
my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()

print()

# Exercise 4: Family and Person Classes
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    
    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []
    
    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)
    
    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
    
    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name} - {member.age} years old")


# Test the classes
family = Family("Smith")
family.born("Alice", 20)
family.born("Bob", 16)
family.born("Charlie", 25)

print("Family presentation:")
family.family_presentation()

print("\nChecking majority:")
family.check_majority("Alice")
family.check_majority("Bob")
family.check_majority("Charlie")