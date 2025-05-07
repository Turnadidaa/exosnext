my_dict = {}

while True:
    key = input("Entrer le produit (or type 'quit' to stop): ")
    if key.lower() == 'quit':
        break
    value = input(f"Entrer la taille  '{key}': ")
    my_dict[key] = value  
    print(my_dict)