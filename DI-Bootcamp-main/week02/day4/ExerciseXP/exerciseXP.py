# Exercise 1: Random Sentence Generator
import os, random, json
dir_path = os.path.dirname(os.path.realpath(__file__))

words = f"{dir_path}/words.txt"

def get_words_from_file(text_file):
    words_list = []
    with open(text_file, "r") as file:
        for line in file.readlines():
            words_list.append(line.strip())
    return words_list


def get_random_sentence(length):
    list_of_words = get_words_from_file(words)
    random_word = random.sample(list_of_words, length)
    sentence = " ".join(random_word)
    return sentence.lower()

# print(get_random_sentence(5))

def main():
    print("====This is a random sentence generator====")
    try:
        length = int(input("Enter a sentence length: "))
        if length < 2 or length > 20:
            raise ValueError("Sentence cannot be less than 2 or greater than 20!")
        
        sentence = get_random_sentence(length)
        print(f'Generated sentence: {sentence}')
    except ValueError as e:
        print(f'Error: {e}')


# main()


# Exercise 2: Working with JSON
sample_json = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

sample_obj = json.loads(sample_json)

salary = sample_obj["company"]["employee"]["payable"]["salary"]
print(salary)

sample_obj["company"]["employee"]["birth_date"] = "1997-09-14"

with open(f"{dir_path}/working_with_json.json", "w") as file:
    json.dump(sample_obj, file, indent=2)