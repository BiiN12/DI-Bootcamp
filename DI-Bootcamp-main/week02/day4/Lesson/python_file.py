import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(f'{dir_path}/star_wars.txt', "r") as file:
    for line in file.readlines():
        print(line)


print("\n----The 5th lines----")
with open(f'{dir_path}/star_wars.txt', "r") as file:
    list_file = file.readlines()
    print(list_file[5-1])

print("\n----The 5 first characters----")
with open(f'{dir_path}/star_wars.txt', "r") as file:
    for line in range(5):
        print(file.readline()[0])


print("\n----list of strings & split each word into letters----")
with open(f'{dir_path}/star_wars.txt', "r") as file:
    list_str = []
    for line in file.readlines():
        list_str.append(list(line.strip()))
    print(list_str)


print("\n----names counts----")
with open(f'{dir_path}/star_wars.txt', "r") as file:
    darth = 0
    luke = 0
    lea = 0
    for line in file.readlines():
        if line.strip() == 'Darth':
            darth += 1
        elif line.strip() == 'Luke':
            luke += 1
        elif line.strip() == 'Lea':
            lea += 1
    
    print(f'Darth: {darth} \nLuke: {luke} \nLea: {lea}')

with open(f'{dir_path}/star_wars.txt', "a") as file:
    file.write("\nBiiN")


with open(f'{dir_path}/star_wars.txt', "r") as file:
    lines = file.readlines()

    count = 0
    for i, line in enumerate(lines):
        if line.strip() == 'Luke':
            lines[i] = 'Luke SkyWalker\n'
            count += 1

    if count > 0:
        with open(f'{dir_path}/star_wars.txt', "w") as f:
            f.writelines(lines)
        print("The file is updated!")
    else:
        print("Their no Luke in this file")