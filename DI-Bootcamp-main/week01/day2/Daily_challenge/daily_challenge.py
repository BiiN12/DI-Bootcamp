# Challenge 1: Multiples of a Number
number =  int(input("Enter a number: "))
length = int(input("Enter a length: "))

total = []
for i in range(1, length + 1):
    total.append(number * i)

print(total)

# Challenge 2: Remove Consecutive Duplicate Letters
text = input("Enter a string: ")
seen = set()
result = ""

for ch in text:
    if ch not in seen:
        result += ch
        seen.add(ch)

print(result) 
