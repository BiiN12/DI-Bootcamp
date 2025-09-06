class AnagramChecker:
    
    
    def __init__(self, word_list_file):
        with open(word_list_file, "r") as f:
            self.text_file = [word.strip().lower() for word in f.readlines()]  
    
    def is_valid_word(self, word):
        if word in self.text_file:
            return word

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()
    
    def get_anagrams(self, word):
        anagram_words = []
        for w in self.text_file:
            if self.is_anagram(word, w):
                anagram_words.append(w)

        return anagram_words
    

