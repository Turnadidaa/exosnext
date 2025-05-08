# exo 1 Birthday look-up 
birthday = {
    "nada mouni": "3 juin",
    "John Doe": "25 décembre",
    "Jane Doe": "14 mars",
    "Alice": "5 août",
    "Bob": "20 janvier"
}
print("Welcome to the Birthday Dictionary!")
print("You can look up the birthdays of the people in the list!")

# exo 2 :
birthday = {
    "nada mouni": "3 juin",
    "John Doe": "25 décembre",
    "Jane Doe": "14 mars",
    "Alice": "5 août",
    "Bob": "20 janvier"
}
print("Welcome to the Birthday Dictionary!")
print("You can look up the birthdays of the people in the list!")
print("\nHere are the names in the birthday dictionary:")
for name in birthday:
    print(name)
    
name = input ("Enter the name of the person you want to look up")
if name in birthday :
    print(f"{name}'s birthday is on {birthday[name]}.")
else:
    print(f"Sorry, we don't have the birthday of {name}.")

# exo3 :sum
def sum(X) :

  X_str = str(X)
  result = int(X_str) + int(X_str * 2) + int(X_str * 3) + int(X_str * 4)
  return result
  
print(sum(3))

# exo4 :

import random 

def throw_dice() :
    return random.randint(1,6) , random.randint(1,6)
    
def throw_until_doubles():
    count = 0
    while True:
        count += 1
        dice1, dice2 = throw_dice()
        print(f"Throw {count}: {dice1}, {dice2}")
        if dice1 == dice2:  # Check if we got doubles
            break
    return count
throws = throw_until_doubles()
print(f"It took {throws} throws to get doubles.")