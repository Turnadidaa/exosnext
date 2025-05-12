# exo1 What is the Season?
Month = int(input("Enter a month (1-12): "))
if Month in [12, 1, 2]:
    print("It's Winter!")
elif Month in [3, 4, 5]:
    print("It's Spring!")       
elif Month in [6, 7, 8]:
    print("It's Summer!")
elif Month in [9, 10, 11]:
    print("It's Autumn!")
else:
    print("Invalid month! Please enter a number between 1 and 12.")
    
    # exo2 : for loop 
#   1. Write a for loop that prints the numbers from 1 to 20.
    for i in range(1, 21):
        print(i)   
 # 2. Write a for loop that prints the even numbers from 1 to 20. 
    
    numbers = list(range(1, 21))
    for i in numbers:
        if i % 2 == 0:
            print(i)

# exo3 : while loop     
myname = "TURNA"
while True:
    name = input("Quel est ton nom ? ")
    if name.lower() == myname.lower():
        print("Wow, nous avons le même nom ! 😄")
        break
    else:
        print("Ce n'est pas mon nom. Essaie encore.")

# exo4 : check the index 

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    index = names.index(user_name)
    print(f"{user_name} found at index {index}.")
else:
    print(f"{user_name} not found in the list.")

# exo5 :
num1 = int(input("Input the 1st number: "))
num2 = int(input("Input the 2nd number: "))
num3 = int(input("Input the 3rd number: "))

# Find the maximum number
max_num = max(num1, num2, num3)
print(f"The maximum number is: {max_num}")

# exo 6 :

import random

wins = 0
losses = 0

while True:
    try:
        user_input = input("Guess a number between 1 and 9 (or type 'q' to quit): ")
        if user_input.lower() == 'q':
            break
        
        guess = int(user_input)
        if guess < 1 or guess > 9:
            print("Please enter a number between 1 and 9.")
            continue

        random_number = random.randint(1, 9)
        print(f"The random number was: {random_number}")

        if guess == random_number:
            print("Winner!")
            wins += 1
        else:
            print("Better luck next time.")
            losses += 1

    except ValueError:
        print("Invalid input. Please enter a number between 1 and 9 or 'q' to quit.")

print(f"\nGame Over. You won {wins} time(s) and lost {losses} time(s).")
