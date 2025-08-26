
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