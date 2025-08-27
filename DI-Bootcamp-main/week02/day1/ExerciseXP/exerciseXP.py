# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
# cat1 = create the object
cat1 = Cat('Lucy', 5)
cat2 = Cat('Tom', 7)
cat3 = Cat('Jack', 3)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    # ... code to find and return the oldest cat ...
    
    # Start by assuming the first cat is the oldest
    oldest_cat = cat1
    
    if cat2.age > oldest_cat.age:
        oldest_cat = cat2
    
    if cat3.age > oldest_cat.age:
        oldest_cat = cat3
    
    return oldest_cat


# Step 3: Print the oldest cat's details

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"{oldest_cat.name} is the oldest cat, {oldest_cat.age} years old.")
print()

# Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height):
        """
        Initialize a Dog object with name and height.
        
        Args:
            name (str): The name of the dog
            height (int/float): The height of the dog in cm
        """
        self.name = name
        self.height = height
    
    def bark(self):
        """Make the dog bark"""
        print(f"{self.name} goes woof!")
    
    def jump(self):
        """Make the dog jump (height * 2)"""
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")
    
    def __str__(self):
        """String representation of the dog"""
        return f"{self.name} (Height: {self.height} cm)"


# Step 2: Create Dog Objects
print("Creating dog objects...")
davids_dog = Dog("Buddy", 30)    # David's dog: Buddy, 30cm tall
sarahs_dog = Dog("Bella", 25) 

print(f"Name: {davids_dog.name}, Height: {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()
print()

# Sarah's dog details and methods  
print(f"Name: {sarahs_dog.name}, Height: {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()
print()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}")
    print(f"({davids_dog.height} cm > {sarahs_dog.height} cm)")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}")
    print(f"({sarahs_dog.height} cm > {davids_dog.height} cm)")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height!")
    print(f"(Both are {davids_dog.height} cm tall)")

# Calculate height difference
height_difference = abs(davids_dog.height - sarahs_dog.height)
print(f"Height difference: {height_difference} cm")
print()

# Exercise 3 : Who’s the song producer?
class Song:
    def __init__(self, lyrics):
        """
        Initialize a Song object with lyrics.
        
        Args:
            lyrics (list): A list of strings, each representing a line of the song
        """
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        """Print each line of the song lyrics"""
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if not new_animal in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.sorted_animals = {}
        self.animals = sorted(self.animals)
        for animal in self.animals:
            if animal[0] in self.sorted_animals.keys():
                self.sorted_animals[animal[0]] = [self.sorted_animals[animal[0]], animal]
            else:
                self.sorted_animals[animal[0]] = animal
        return self.sorted_animals

    def get_groups(self):
        sorted_animals = self.sort_animals()
        for key, value in sorted_animals.items():
            print(f"{key}: {value}")

# Step 2: Create a Zoo instance
brooklyn_safari = Zoo("Brooklyn Safari")

# Step 3: Use the Zoo methods
brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.add_animal("Cat")
brooklyn_safari.add_animal("Cougar")
brooklyn_safari.get_animals()
brooklyn_safari.sell_animal("Bear")
brooklyn_safari.get_animals()
brooklyn_safari.sort_animals()
brooklyn_safari.get_groups()
