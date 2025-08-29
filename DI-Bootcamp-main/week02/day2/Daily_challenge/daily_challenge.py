# Daily Challenge : Pagination

import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / page_size) if self.items else 0
    
    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range")
        self.current_idx = page_num - 1
    
    def first_page(self):
        self.current_idx = 0
        return self
    
    def last_page(self):
        self.current_idx = max(0, self.total_pages - 1)
        return self
    
    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self
    
    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self
    
    def __str__(self):
        visible_items = self.get_visible_items()
        return '\n'.join(str(item) for item in visible_items)


# Test the code
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

print()
p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

print()
p.last_page()
print(p.get_visible_items())
# ['y', 'z']

print()
# p.go_to_page(10)
print(f"Current page number: {p.current_idx + 1}")
# Output: 7

print("\nTest 5 - String representation:")
p.first_page()
print(str(p))

# p.go_to_page(0)
