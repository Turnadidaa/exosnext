# exo 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("xena", 4)
cat2 = Cat("curie", 2)
cat3 = Cat("sancho", 1)

def oldest(cats):
    oldestcat = cats[0]
    for cat in cats:
        if cat.age > oldestcat.age:
            oldestcat = cat
    return oldestcat

cats = [cat1, cat2, cat3]

oldest_cat = oldest(cats)
print(f"The oldest cat is {oldest_cat.name}, aged {oldest_cat.age}.")

# exo2 : Dogs 
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} says Woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")
davids_dog = Dog("Rex", 50)
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()
sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
else:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")

# exo 3 :whos the song producer

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics 

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# exo 4 : afternoun at the zoo

class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")
    
    def get_animals(self):
        if self.animals:
            print("Animals in the zoo:")
            for animal in self.animals:
                print(animal)
        else:
            print("No animals in the zoo.")

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} is not in the zoo.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        self.groups = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in self.groups:
                self.groups[first_letter] = []
            self.groups[first_letter].append(animal)

    def get_groups(self):
        if self.groups:
            for letter, animals in self.groups.items():
                print(f"{letter}: {', '.join(animals)}")
        else:
            print("No groups yet.")

new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Zebra")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Tiger")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")

new_york_zoo.get_animals()
new_york_zoo.sort_animals()
new_york_zoo.get_groups()

new_york_zoo.sell_animal("Lion")
new_york_zoo.get_animals()
new_york_zoo.get_groups()
