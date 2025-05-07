# exo1 : Convert list into dictionaries 
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)

# exo2 : Cinemax
family = {}
while True:
    name = input("Enter a family member's name (or type 'quit' to stop): ")
    if name.lower() == 'quit':
        break
    age = input(f"Enter the age of {name}: ")
    if age.isdigit():
        family[name] = int(age)
    else:
        print("Please enter a valid number for age.")

total_cost = 0

for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    
    print(f"{name.title()} has to pay ${cost}.")
    total_cost += cost

print(f"\nTotal cost for the family: ${total_cost}")

# exo3 ZARA
brand={
    "name":"zara",
    "creator_name" :"Amancio ortega gaona",
    "creation_date": 1975,
    "type_of_clothes":["men","women","children","home"],
    "international_competitors":["gap","benetton"],
    "number_stores":7000,
    "major_color":{
     "France":"blue",
     "spain":"red",
     "US" : ["pink","red"]
     }
    
}
brand ["number_stores"]=2
clients= brand["type_of_clothes"]
print(f"Zara's clients are: {', '.join(clients)}.") 
brand["country_creation"] = "Spain"
if "international_competitors"in brand:
  brand["international_competitors"].append("Desigual")
else:
  print(f"cela n existe pas")
del brand[ "creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print (brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand["number_stores"])

# exo4 :