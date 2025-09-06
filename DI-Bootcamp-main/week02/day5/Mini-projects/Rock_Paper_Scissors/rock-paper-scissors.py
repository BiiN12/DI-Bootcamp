from game import Game

def get_user_menu_choice():

    while True:
        print("\n=== ROCK PAPER SCISSORS ===")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        
        choice = input("Choose an option (1-3): ").strip()
        
        if choice in ['1', '2', '3']:
            return choice
        else:
            print("Invalid choice. Please enter 1, 2, or 3.")

def print_results(results):
    
    print("\n=== GAME SUMMARY ===")
    for key, value in results.items():
        print(f"{key}: {value}")
    
    
    print("\nThank you for playing! 🎮")

def main():
    # Initialize results dictionary
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == "1":
            # Play a new game
            game = Game()
            result = game.play()
            results[result] += 1
            
        elif choice == "2":
            # Show current scores
            if sum(results.values()) == 0:
                print("\nNo games played yet!")
            else:
                print(f"\nCurrent Scores:")
                print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
                
        elif choice == "3":
            # Quit and show final results
            print_results(results)
            break

if __name__ == "__main__":
    main()