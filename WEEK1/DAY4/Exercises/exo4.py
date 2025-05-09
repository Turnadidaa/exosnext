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

