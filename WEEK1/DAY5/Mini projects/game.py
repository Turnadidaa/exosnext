import random

class Game:
    def __init__(self):
        self.items = ["rock", "paper", "scissors"]

    def get_user_item(self, choice):
        if choice in self.items:
            return choice
        else:
            return None

    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self, user_choice):
        user_item = self.get_user_item(user_choice)
        computer_item = self.get_computer_item()

        if user_item is None:
            return "Invalid choice"

        result = self.get_game_result(user_item, computer_item)

        return user_item, computer_item, result
