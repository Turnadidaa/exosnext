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

name = input ("Enter the name of the person you want to look up")
if name in birthday :
    print(f"{name}'s birthday is on {birthday[name]}.")
else:
    print(f"Sorry, we don't have the birthday of {name}.")