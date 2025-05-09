import random
from exo4 import Dog 
class PetDog(Dog):
    def __init__(self, name, age, weight, trained):
        super().__init__(name, age, weight)
        self.trained = trained
        trained = False
    def train(self):
        print(f"{self.bark()}")  
        self.trained = True
    def play(self,*args):
        dogsplay = [dog for dog in args if isinstance(dog, PetDog)]
        if dogsplay:
            print(f"{self.name} is playing with {', '.join(dog.name for dog in dogsplay)}")
        else:
            print(f"{self.name} is playing alone.")
    def do_tricks(self):
        if self.trained is True :
            list = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} can do {random.choice(list)}")
        else:
            print(f"{self.name} is not trained to do tricks.")


dog1 = PetDog("Rex", 5, 20, True)
dog2 = PetDog("Buddy", 3, 15, False)
dog3 = PetDog("Max", 4, 25, True)
dog1.do_tricks()

        
        
        