# Mini-project - Tic-Tac-Toe
    
# Step 1: Representing the Game Board
def create_board():
    # Create and return a 3x3 empty game board
    return [[' ' for _ in range(3)] for _ in range(3)]

# def create_board():
#     board = []
#     for row in range(3):
#         new_row = []
#         for col in range(3):
#             new_row.append(' ')
#         board.append(new_row)
#     return board


# Step 2: Displaying the Game Board
def display_board(board):
    """Display the current state of the game board"""
    print("\n" + "*"*16)  # Column numbers
    for i in range(3):
        print(f"*  {board[i][0]} | {board[i][1]} | {board[i][2]}   *")
        if i < 2:
            print("*  ----------- *")
    print("*"*16)
    print()


# Step 3: Getting Player Input
def player_input(board, player):
    # Get and validate player's move
    while True:
        print(f"Player {player}'s turn")
        row = int(input("Enter row (0-2): "))
        col = int(input("Enter column (0-2): "))
        
        # Validate input range
        if row < 0 or row > 2 or col < 0 or col > 2:
            print("Invalid input! Please enter numbers between 0 and 2.")
            continue
        
        # Check if cell is empty
        if board[row][col] != ' ':
            print("That position is already taken! Choose another.")
            continue
        
        return row, col


# Step 4: Checking for a Winner
def check_win(board, player):
    # Check rows
    if board[0][0] == player and board[0][1] == player and board[0][2] == player:
        return True  # Row 0
    if board[1][0] == player and board[1][1] == player and board[1][2] == player:
        return True  # Row 1
    if board[2][0] == player and board[2][1] == player and board[2][2] == player:
        return True  # Row 2
    
    # Check columns
    if board[0][0] == player and board[1][0] == player and board[2][0] == player:
        return True  # Column 0
    if board[0][1] == player and board[1][1] == player and board[2][1] == player:
        return True  # Column 1
    if board[0][2] == player and board[1][2] == player and board[2][2] == player:
        return True  # Column 2
    
    # Check diagonals
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True  # Main diagonal
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True  # Anti-diagonal
    
    return False


# Step 5: Checking for a Tie
def check_tie(board):
    for row in board:
        if ' ' in row:
            return False  # Still empty spaces
    return True  # Board is full


# Helper function to switch players
def switch_player(current_player):
    return 'O' if current_player == 'X' else 'X'


# Step 6: The Main Game Loop
def play():
    # Main function to manage the game flow
    print("Welcome to Tic Tac Toe!")
    print("Players will take turns. Player X goes first.")
    print("Enter row and column numbers (0-2) to make your move.")
    
    # Initialize the game
    board = create_board()
    current_player = 'X'
    game_over = False
    
    # Main game loop
    while not game_over:
        # Display current board
        display_board(board)
        
        # Get player input
        row, col = player_input(board, current_player)
        
        # Update board with player's move
        board[row][col] = current_player
        
        # Check for winner
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins! 🎉")
            game_over = True
        
        # Check for tie
        elif check_tie(board):
            display_board(board)
            print("🤝 It's a tie! Good game! 🤝")
            game_over = True
        
        # Switch to next player
        else:
            current_player = switch_player(current_player)
    
    # Ask if players want to play again
    play_again = input("\nWould you like to play again? (y/n): ").lower()
    if play_again == 'y' or play_again == 'yes':
        play()
    else:
        print("Thanks for playing!")



# Start the game
play()
