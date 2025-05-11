import random

class Game:
    def __init__(self):
        self.items = ["rock", "paper", "scissors"]

    def get_user_item(self):
        # Ask user to choose one item (rock, paper, or scissors)
        while True:
            user_choice = input("Choose Rock ✊, Paper 🧻, or Scissors ✂️: ").lower()
            if user_choice in self.items:
                return user_choice
            else:
                print("❌ Invalid choice. Please choose Rock ✊, Paper 🧻, or Scissors ✂️.")

    def get_computer_item(self):
        # Randomly choose for the computer
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        # Determine the game result
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "scissors" and computer_item == "paper") or \
             (user_item == "paper" and computer_item == "rock"):
            return "win"
        else:
            return "loss"

    def play(self):
        # Play a single game
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()

        print(f"\nYou chose {user_item}. The computer chose {computer_item}.")

        result = self.get_game_result(user_item, computer_item)

        if result == "win":
            print("🎉 You win! 🎉")
        elif result == "loss":
            print("💔 You lose! 💔")
        else:
            print("🤝 It's a draw! 🤝")

        return result
