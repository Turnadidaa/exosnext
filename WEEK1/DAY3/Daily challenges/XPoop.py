# exo1 :
class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius ** 2
    def perimeter(self):
        return 2 * 3.14 * self.radius
    def geodefine(self):
        print("A circle is a set of all points in a plane that are at a fixed distance (called the radius) from a fixed point (called the center).") 
my_circle = Circle(5)
    
print("Area:", my_circle.area())
print("Perimeter:", my_circle.perimeter())
my_circle.geodefine()

# exo2 :

import random
class Mylist:
    def __init__(self, letters):
        self.letters = letters
    def reverse (self):
        return self.letters[::-1]
    def sort (self):
        return sorted(self.letters)
    def randomlist (self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]
Mylist = Mylist([1, 2, 3, 4, 5])
print(Mylist.reverse())
print(Mylist.sort())
print(Mylist.randomlist())

    



