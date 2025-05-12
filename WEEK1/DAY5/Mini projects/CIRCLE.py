import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    def area(self):
        return math.pi * (self.radius ** 2)

    def __repr__(self):
        return f"Circle(radius={self.radius})"

    def __str__(self):
        return f"Circle with radius {self.radius}"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def draw(self, x, y, color="blue"):
        screen = turtle.Screen()
        screen.setup(width=800, height=600)
        screen.bgcolor("lightgray")

        t = turtle.Turtle()
        t.speed(3)
        t.penup()
        t.goto(x, y - self.radius)
        t.pendown()
        t.pensize(2)
        t.color(color)
        t.begin_fill()
        t.circle(self.radius)
        t.end_fill()

        t.penup()
        t.goto(x, y - self.radius - 20)
        t.write(f"Radius: {self.radius}", align="center", font=("Arial", 12, "normal"))
        t.hideturtle()

circle1 = Circle(radius=50)
circle2 = Circle(diameter=100)
circle3 = Circle(radius=70)

circle_list = [circle1, circle2, circle3]
circle_list.sort()

x_offset = -250
colors = ["blue", "green", "red"]

for i, circle in enumerate(circle_list):
    circle.draw(x_offset, 0, color=colors[i % len(colors)])
    x_offset += 200

turtle.done()
