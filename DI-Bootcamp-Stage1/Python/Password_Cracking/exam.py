from utils import unzip_with_7z
import string

zip_file_path = 'congrats.7z' # keep as is
dest_path = '.' # keep as is

find_me = '' # 2 letters are missing!
secret_password = find_me + 'bcmpda' 

# WRITE YOUR CODE BELOW
# ----------------------------------------

combinations = []
for first in string.ascii_lowercase:
    for second in string.ascii_lowercase:
        find_me = first + second
        combinations.append(first + second)

for attempt in combinations:
    secret_password = attempt + 'bcmpda' 
    if unzip_with_7z(zip_file_path, dest_path, secret_password):
        print(f"You cracked it! The password is {secret_password}, DON\'T LOSS IT :)")
        break