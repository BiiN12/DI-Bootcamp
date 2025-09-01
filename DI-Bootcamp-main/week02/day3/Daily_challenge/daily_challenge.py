# Daily Challenge - Circle
import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
     
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Must provide either radius or diameter")
    
    @property
    def diameter(self):
        # Get the diameter of the circle
        return self.radius * 2
    
    def area(self):
        # Calculate the area of the circle
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area():.2f})"
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self, other):
        # Add two circles together, return new circle with combined radius
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
            return Circle(radius=new_radius)
        return NotImplemented
    
    def __gt__(self, other):
        # Check if this circle is bigger than another
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented
    
    def __lt__(self, other):
        # Check if this circle is smaller than another
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
    def __ge__(self, other):
        # Check if this circle is bigger than or equal to another
        if isinstance(other, Circle):
            return self.radius >= other.radius
        return NotImplemented
    
    def __le__(self, other):
        # Check if this circle is smaller than or equal to another
        if isinstance(other, Circle):
            return self.radius <= other.radius
        return NotImplemented
    
    def __eq__(self, other):
        # Check if two circles are equal
        if isinstance(other, Circle):
            return abs(self.radius - other.radius) < 1e-9  # Handle floating point precision
        return False
    
    def __ne__(self, other):
        # Check if two circles are not equal
        return not self.__eq__(other)


def draw_sorted_circles(circles):
    # Draw sorted circles using turtle graphics
    
    # Set up the turtle screen
    screen = turtle.Screen()
    screen.bgcolor("white")
    screen.title("Sorted Circles")
    screen.setup(800, 600)
    
    # Create a turtle
    drawer = turtle.Turtle()
    drawer.speed(5)
    drawer.color("blue")
    
    # Sort circles by radius
    sorted_circles = sorted(circles)
    
    # Calculate starting position
    start_x = -300
    spacing = 150
    
    # Draw each circle
    for i, circle in enumerate(sorted_circles):
        # Move to starting position for this circle
        x_pos = start_x + (i * spacing)
        y_pos = -circle.radius  # Start from bottom of circle
        
        drawer.penup()
        drawer.goto(x_pos, y_pos)
        drawer.pendown()
        
        # Draw the circle
        drawer.circle(circle.radius)
        
        # Add label
        drawer.penup()
        drawer.goto(x_pos, y_pos - circle.radius - 30)
        drawer.write(f"r={circle.radius}", align="center", font=("Arial", 12, "normal"))
    
    # Keep the window open
    screen.exitonclick()
    print("Click on the turtle graphics window to close it.")


print()

# Creating circles with radius and diameter
print("Creating circles")
c1 = Circle(radius=5)
c2 = Circle(diameter=10)
c3 = Circle(radius=3)
print(f"Circle 1: {c1}")
print(f"Circle 2: {c2}")
print(f"Circle 3: {c3}")

print(f"\nArea calculations")
print(f"Circle 1 area: {c1.area():.2f}")
print(f"Circle 2 area: {c2.area():.2f}")

print(f"\nAdding circles")
c4 = c1 + c3
print(f"Circle 1 + Circle 3 = {c4}")

print(f"\nComparing circles")
print(f"Circle 1 > Circle 3: {c1 > c3}")
print(f"Circle 1 == Circle 2: {c1 == c2}")
print(f"Circle 1 < Circle 3: {c1 < c3}")

print(f"\nSorting circles")
circles = [c1, c2, c3, c4]
print("Original order:")
for circle in circles:
    print(f"  {circle}")

sorted_circles = sorted(circles)
print("\nSorted order (smallest to largest):")
for circle in sorted_circles:
    print(f"  {circle}")

print(f"\nProperties")
print(f"Circle 1 radius: {c1.radius}")
print(f"Circle 1 diameter: {c1.diameter}")

# Uncomment the line below to see the turtle graphics
# draw_sorted_circles(circles)