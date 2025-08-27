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