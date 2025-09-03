import string, os

dir_path = os.path.dirname(os.path.realpath(__file__))
class Text:
    def __init__(self, text):
        self.text = text
    
    def word_frequency(self, word):
        words = self.text.lower().split()
        count = words.count(word.lower())
        return count if count > 0 else None
    
    def most_common_word(self):
        words = self.text.lower().split()
        if not words:
            return None
        
        word_counts = {}
        for word in words:
            word_counts[word] = word_counts.get(word, 0) + 1
        
        max_count = 0
        most_common = None
        for word, count in word_counts.items():
            if count > max_count:
                max_count = count
                most_common = word
        
        return most_common
    
    def unique_words(self):
        words = self.text.lower().split()
        return list(set(words))
    
    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            content = file.read()
        return cls(content)

class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)
    
    def remove_stop_words(self):
        stop_words = {"a", "an", "and", "are", "as", "at", "be", "by", "for", 
                     "from", "has", "he", "in", "is", "it", "its", "of", "on", 
                     "that", "the", "to", "was", "will", "with"}
        words = self.text.lower().split()
        filtered_words = [word for word in words if word not in stop_words]
        return ' '.join(filtered_words)
    
    def remove_special_characters(self):
        result = ""
        for char in self.text:
            if char.isalnum() or char.isspace():
                result += char
        return result

# Testing
print("=== Text Analysis Testing ===")

# Test with string
text1 = Text("Python is great. Python is powerful. Python is easy to learn.")
print(f"Frequency of 'Python': {text1.word_frequency('Python')}")
print(f"Most common word: {text1.most_common_word()}")
print(f"Unique words: {text1.unique_words()[:5]}")  # Show first 5

# Test TextModification
mod_text = TextModification("Hello! This is a great day. Python & coding are fun!!!")
print(f"\nOriginal: {mod_text.text}")
print(f"No punctuation: {mod_text.remove_punctuation()}")
print(f"No stop words: {mod_text.remove_stop_words()}")
print(f"No special chars: {mod_text.remove_special_characters()}")

# Create test file for from_file method
with open(f'{dir_path}/test_text.txt', 'w') as f:
    f.write("This is a test file. It contains some text for analysis.")

text2 = Text.from_file('test_text.txt')
print(f"\nFrom file - Most common: {text2.most_common_word()}")
print(f"From file - Word count: {len(text2.text.split())} words")