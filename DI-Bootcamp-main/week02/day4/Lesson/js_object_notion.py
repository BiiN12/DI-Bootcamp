import os,json

dir_path = os.path.dirname(os.path.realpath(__file__))

my_family = {
    'parents':['Beth', 'Jerry'],
    'children': ['Summer', 'Morty']
}

#convert to a json file
with open(f'{dir_path}/family.json','w', encoding = 'utf-8') as f:
    json.dump(my_family, f, indent=2)