from anagram_checker import AnagramChecker
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

def main():
    # Initialize the anagram checker with the word list file
    checker = AnagramChecker(f'{dir_path}/sowpods.txt')
    
    while True:
        print("\n=== ANAGRAM CHECKER ===")
        print("1. Check a word for anagrams")
        print("2. Exit")
        
        choice = input("Choose an option (1-2): ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
        elif choice == "1":
            # Get user input
            user_input = input("Enter a word: ").strip()
            
            # Validate input
            if not user_input:
                print("Error: Please enter a word.")
                continue
            
            if len(user_input.split()) > 1:
                print("Error: Please enter only one word.")
                continue
            
            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue
            
            # Check if word is valid and find anagrams
            if checker.is_valid_word(user_input):
                anagrams = checker.get_anagrams(user_input)
                if anagrams:
                    print(f'\nYOUR WORD: "{user_input.upper()}" - This is a valid English word.')
                    print(f"Anagrams for your word: {', '.join(anagrams)}")
                else:
                    print(f'\nYOUR WORD: "{user_input.upper()}" - This is a valid English word.')
                    print("No anagrams found for your word.")
            else:
                print(f'\nYOUR WORD: "{user_input.upper()}" - This is not a valid English word.')
        else:
            print("Invalid choice. Please select 1 or 2.")


main()