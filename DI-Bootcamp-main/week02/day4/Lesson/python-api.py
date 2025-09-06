import requests
import json
import os

response = requests.get('https://api.chucknorris.io/jokes/random')

data = response.json()

print(data['value'])