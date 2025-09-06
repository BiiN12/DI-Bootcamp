# Exercise 1: Quizz

# What is a class?
print("""-> A Class is a blueprint for creating an object. 
      It defines the data and methods that objects of that type will have""")
# What is an instance?
print("""-> An instance is a specific object created from a class.
      If a class is the blueprint for a house, an instance is an actual house built from that blueprint.""")
# What is encapsulation?
print("""-> Encapsulation is a practice of controlling access to the internal details. 
      It's like having private and public parts of an object""")
# What is abstraction?
print("""-> Abstract is like using a TV remote - 
      you don't need to know how the electronics work inside, just which buttons to press.""")
# What is inheritance?
print("""-> Inheritance allows a class to inherit attributes and methods from another class.""")
# What is multiple inheritance?
print("""-> Multiple inheritance is when a class inherits from more than one parent class simultaneously. 
      The child class gets features from all parent classes.""")
# What is polymorphism?
print("""-> Polymorphism means "many forms" - 
      it allows objects of different classes to be treated as objects of a common base class""")
# What is method resolution order or MRO?
print("""-> MRO is the order in which Python looks for methods in a class hierarchy, especially important with multiple inheritance. 
      Python uses the C3 linearization algorithm to determine which method to call when there are multiple possibilities.""")


import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
    
    def __str__(self):
        # String representation of the card
        return f"{self.value} of {self.suit}"
    
    def __repr__(self):
        # Representation for debugging
        return f"Card('{self.suit}', '{self.value}')"


class Deck:
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = []
        self._create_deck()
    
    def _create_deck(self):
        # Create a full deck of 52 cards
        self.cards = []
        for suit in self.suits:
            for value in self.values:
                self.cards.append(Card(suit, value))
    
    def shuffle(self):
        # Reset to full deck if cards are missing
        if len(self.cards) != 52:
            self._create_deck()
        
        # Shuffle the deck
        random.shuffle(self.cards)
    
    def deal(self):
        # Deal a single card from the deck and remove it
        if len(self.cards) == 0:
            return None  # No more cards to deal
        
        return self.cards.pop()  # Remove and return the last card
    
    def cards_remaining(self):
        # Return the number of cards left in the deck
        return len(self.cards)
    
    def __str__(self):
        # String representation showing remaining cards
        return f"Deck with {len(self.cards)} cards remaining"


# Example usage and testing
if __name__ == "__main__":
    # Create a new deck
    deck = Deck()
    print(f"New deck created: {deck}")
    
    # Shuffle the deck
    deck.shuffle()
    print("Deck shuffled!")
    
    # Deal some cards
    print("\nDealing 5 cards:")
    for i in range(5):
        card = deck.deal()
        if card:
            print(f"Card {i+1}: {card}")
        else:
            print("No more cards!")
    
    print(f"\nCards remaining: {deck.cards_remaining()}")
    
    # Deal all remaining cards
    print("\nDealing all remaining cards:")
    cards_dealt = 0
    while deck.cards_remaining() > 0:
        card = deck.deal()
        cards_dealt += 1
    
    print(f"Dealt {cards_dealt} more cards")
    print(f"Cards remaining: {deck.cards_remaining()}")
    
    # Try to deal when deck is empty
    empty_card = deck.deal()
    print(f"Dealing from empty deck: {empty_card}")
    
    # Shuffle to reset deck
    print("\nShuffling to reset deck...")
    deck.shuffle()
    print(f"After shuffle: {deck}")