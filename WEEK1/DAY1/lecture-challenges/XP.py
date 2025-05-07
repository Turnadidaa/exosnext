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

names = ['Samus', 'Cortana', 'V', 'link', 'Mario', 'Cortana', 'Samus']