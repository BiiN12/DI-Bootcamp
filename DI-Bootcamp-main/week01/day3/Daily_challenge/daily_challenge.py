# Challenge 1: Letter Index Dictionary
user_input = input("Enter a word: ")
dict_ = {}
value = 0

for chr in user_input:
    if chr in dict_:
        if type(dict_[chr]) == list:
            dict_[chr].append(value)
        else:
            dict_[chr] = [dict_[chr], value]
        value += 1
    else:
        dict_[chr] = value
        value += 1

print(dict_)

# Challenge 2: Affordable Items
def find_affordable_items(items_purchase, wallet):
    
    # Clean wallet data - remove $ and commas, convert to float
    wallet_amount = float(wallet.replace("$", "").replace(",", ""))
    
    affordable_items = []
    
    for item, price_str in items_purchase.items():
        item_price = float(price_str.replace("$", "").replace(",", ""))
        
        # Check if item is affordable
        if item_price <= wallet_amount:
            affordable_items.append(item)
    
    # Sort and return result
    if not affordable_items:
        return "Nothing"
    
    affordable_items.sort()  # Sort alphabetically
    return affordable_items



print(find_affordable_items(items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}, wallet = "$300"))
print(find_affordable_items(items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}, wallet = "$100"))
print(find_affordable_items(items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}, 
wallet = "$1"))