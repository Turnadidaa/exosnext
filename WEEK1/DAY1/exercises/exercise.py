# exercise 1
print("Hello world\n" * 4)

# exercices 2 🌟 Exercise 2 : Some Math

print((99 ** 3) * 8)

# exercise 3 What’s your name ?

my_name = "TURNA"  

user_name = input("Hey there! What's your name? ")

if user_name.strip().lower() == my_name.lower():
    print(f"No way! We have the same name — {my_name}! Are we name buddies?")
else:
    print(f"Oh, your name is {user_name}? That's cool... but mine is {my_name}, WAY BETTER. 😉")

# exercise 4 : : Tall enough to ride a roller coaster

height = int(input("Please enter your height in centimeters: "))
if height > 145:
    print("You're tall enough to ride! Enjoy the adventure!")
else:
    print("You need to grow some more to ride. Keep at it!")

    # exercise 5 : Favorite Numbers

    my_fav_numbers = {5, 28, 12, 3}
    my_fav_numbers.add(7)
    my_fav_numbers.add(6)
    my_fav_numbers.remove(28)
    friend_fav_numbers = {3, 19, 25, 8}
    our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
    print("My favorite numbers:", my_fav_numbers)
    print("My friend's favorite numbers:", friend_fav_numbers)
    print("Our favorite numbers:", our_fav_numbers)

    # exercice 6 : tuple
    my_tuple = (1, 2, 3)
    new_tuple = my_tuple + (4, 5)
    print(new_tuple)

    # exercise 7 : List 
    basket = ["Banana", "Apples", "Oranges", "Blueberries"]
    basket.remove("Banana")
    basket.remove("Blueberries")
    basket.append("Kiwi")
    basket.insert(0, "Apples")
    apple_count = basket.count("Apples")  
    print("Number of Apples in the basket:", apple_count)
    basket.clear()
    print(basket)

    # exercise 8 : Sandwich Orders

    sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
    print("Sorry, the deli has run out of pastrami!\n")
    while "Pastrami sandwich" in sandwich_orders:
        sandwich_orders.remove("Pastrami sandwich")
    finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  
    print(f"I made your {current_sandwich.lower()}.")
    finished_sandwiches.append(current_sandwich)

print("\nAll sandwiches made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")
