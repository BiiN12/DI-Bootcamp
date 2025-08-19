import random

def number_guessing_game():
    random_number = random.randint(1, 100)
    max_attempts = 7
    for attempt in range(1, max_attempts + 1):
        user_number = int(input("Enter a number between 1-100: "))
        if user_number == random_number:
            print(f"Congratulation! You guessed the right number at attempt {attempt}.")
            break
        elif user_number < random_number:
            print("It\'s too low!")
            remaining = max_attempts - attempt
            if remaining > 0:
                print(f"You have {remaining} attempts left.")
        elif user_number > random_number:
            print("It\'s too high!")
            remaining = max_attempts - attempt
            if remaining > 0:
                print(f"You have {remaining} attempts left.")
        else:
            print("Please enter between 1-100")
            remaining = max_attempts - attempt
            if remaining > 0:
                print(f"You have {remaining} attempts left.")

    else:
        print(f"Game Over! The number was {random_number}")

number_guessing_game()