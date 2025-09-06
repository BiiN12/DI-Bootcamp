import random

class Game:
    def get_user_item(self):
        
        while True:
            user_choice = input("Select (r)ock ✊ (p)aper 🖐️  or (s)cissors ✌️  ").lower().strip()
            
            if user_choice in ['r', 'rock']:
                return 'rock'
            elif user_choice in ['p', 'paper']:
                return 'paper'
            elif user_choice in ['s', 'scissors']:
                return 'scissors'
            else:
                print("Invalid choice. Please enter 'r', 'p', 's' or the full word.")
    
    def get_computer_item(self):
        choices = ['rock', 'paper', 'scissors']
        return random.choice(choices)
    
    def get_game_result(self, user_item, computer_item):
        # Determine the result of the game
        if user_item == computer_item:
            return "draw"
        
        # User wins scenarios
        winning_combinations = {
            ('rock', 'scissors'),
            ('paper', 'rock'),
            ('scissors', 'paper')
        }
        
        if (user_item, computer_item) in winning_combinations:
            return "win"
        else:
            return "loss"
    
    def play(self):
        
        print("\n--- New Game ---")
        
        # Get choices
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        
        # Determine result
        result = self.get_game_result(user_choice, computer_choice)
        
        # Print outcome
        print(f"\nYou chose: {user_choice}")
        print(f"Computer chose: {computer_choice}")
        
        if result == "win":
            print("You win! 🎉")
        elif result == "loss":
            print("You lose! 😔")
        else:
            print("It's a draw! 🤝")
        
        return result