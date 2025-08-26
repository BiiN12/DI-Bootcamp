# Challenge 1: Sorting
def sort_words():

    print("Enter words separated by commas (e.g., 'apple,banana,cherry')")
    user_input = input("Enter your words: ")
    
    word_list = user_input.split(',')
    
    sorted_words = sorted(word_list)
    
    # Join the Sorted List
    result = ','.join(sorted_words)
    
    # Print the Result
    print(f"Sorted words: {result}")
    
    return result

# Alternative compact version
# def sort_words_compact():

#     user_input = input("Enter comma-separated words: ")
#     result = ','.join(sorted(user_input.split(',')))
#     print(f"Sorted: {result}")
#     return result

sort_words()


# Challenge 2: Longest Word
def longest_word(sentence):
    
    words = sentence.split()
    
    longest = ""
    max_length = 0
    
    # Iterate Through the Words
    for word in words:
        
        # Compare Word Lengths
        if len(word) > max_length:
            longest = word
            max_length = len(word)

    print(longest)


longest_word("Margaret's toy is a pretty doll.")
longest_word("A thing of beauty is a joy forever.")
longest_word("Forgetfulness is by all means powerless!")