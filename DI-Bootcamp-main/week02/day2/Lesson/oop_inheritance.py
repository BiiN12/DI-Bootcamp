# Exercise 1:
# Analyse the code below before executing it. What will be the outputs ?

class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color)
# >> What will be the output ?


class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)
# >> What will be the output


# Lesson Example:
class Animal: #the parent class

    def __init__(self, name, family, legs):
        self.name = name
        self.family = family
        self.legs = legs

    def sleep(self):
        print(f'{self.name} is sleeping (parent class)')

    
class Dog(Animal): #the child class
    
    def sleep(self):
        print(f'{self.name} is sleeping (child class)')

dog1 = Dog('Rex', 'Canine', 4)
print(dog1.legs)
dog1.sleep()