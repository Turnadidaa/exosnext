# exo1 

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
    
       return f'{self.name}, {self.age} ans'

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese (Cat):
   pass
 

bengal = Bengal("curie", 3)
chartreux = Chartreux("Luna", 5)
siamese = Siamese("xena", 4)

all_cats = [bengal, chartreux, siamese]

sara_pets=Pets(all_cats)
sara_pets.walk()

# exo2 : dogs 

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        

    def bark(self):
        return f"{self.name} say hawhaw"

    def run_speed(self):
        return f"{self.name} runs at {self.weight * 2} km/h"

    def fight(self, other_dog):
        dogspower = self.run_speed() * self.weight
        otherpower = other_dog.run_speed() * other_dog.weight

        if dogspower > otherpower:
            return f"{self.name} WINS THE FIGHT"
        elif otherpower > dogspower:
            return f"{other_dog.name} WINS THE FIGHT"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}"
rex = Dog("rex", 5, 20)
teacup = Dog("teacup", 2, 10)
nounous= Dog("nounous", 3, 15)
print(rex.bark())       
print(rex.fight(teacup))

# exo 4 : family 

class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members is not None else []

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs.get('name')}!")

    def is_18(self, name):
        for member in self.members:
            if member.get("name") == name:
                return member.get("age", 0) >= 18
        return False

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(member)

family = Family("Johnson", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

family.family_presentation()
print(family.is_18("Michael"))
print(family.is_18("Sarah"))
family.born(name="Emma", age=0, gender="Female", is_child=True)
family.family_presentation()

# exo5 TheIncredibles Family


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member.get("name") == name:
                if member.get("age", 0) >= 18:
                    print(f"{member['incredible_name']} uses their power: {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power.")
                return
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("\n Here is our powerful family ")
        super().family_presentation()
        
incredible_family = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])
incredible_family.incredible_presentation()
incredible_family.born(name="Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")
incredible_family.incredible_presentation()