MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a!
#t%'''

# Step 1: Convert matrix_string to a 2D list (matrix)
matrix = []
for chr in MATRIX_STR.strip().split('\n'):
    matrix.append(list(chr))
# print(matrix)
# ... code to create matrix ...

# Step 2: Iterate through columns
# ... code to iterate through columns ...
raw_message = ""
for col in range(len(matrix[0])):        # loop over columns
    for row in range(len(matrix)):       # loop over rows
        raw_message += matrix[row][col]
# print(raw_message)

# print(matrix[0][0][0])
# Step 3: Filter alpha characters
# Step 4: Replace symbols with spaces
decoded_message = ""
i = 0
while i < len(raw_message):
    if raw_message[i].isalpha():
        decoded_message += raw_message[i]
    else:
        decoded_message += " "
    i += 1


# Step 5: Print the decoded message
print(decoded_message)