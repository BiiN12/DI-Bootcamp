# Daily challenge: Old MacDonald’s Farm
class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] = self.animals[animal_type] + 1
        else:
            self.animals[animal_type] = count

    def get_info(self):
        print(f"{self.name}'s farm")
        print()
        for animal, count in self.animals.items():
            print(f"{animal} : {count}")
        print()
        return "    E-I-E-I-0!"
    def get_animal_types(self):
        self.sorted_animals_type = []
        for animal in self.animals.keys():
            self.sorted_animals_type.append(animal)
        
        return sorted(self.sorted_animals_type)


# Test the code 
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print(macdonald.get_animal_types())