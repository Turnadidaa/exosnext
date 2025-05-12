import tkinter as tk
from game import Game

class GameApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Rock, Paper, Scissors Game 🎮")
        self.game = Game()

        # Interface components
        self.result_label = tk.Label(root, text="Choose Rock ✊, Paper 🧻 or Scissors ✂️", font=("Helvetica", 16))
        self.result_label.pack()

        # Create buttons for user choices
        self.rock_button = tk.Button(root, text="Rock ✊", width=20, command=lambda: self.play_game("rock"))
        self.rock_button.pack(pady=10)

        self.paper_button = tk.Button(root, text="Paper 🧻", width=20, command=lambda: self.play_game("paper"))
        self.paper_button.pack(pady=10)

        self.scissors_button = tk.Button(root, text="Scissors ✂️", width=20, command=lambda: self.play_game("scissors"))
        self.scissors_button.pack(pady=10)

        # Result display
        self.game_result_label = tk.Label(root, text="", font=("Helvetica", 14))
        self.game_result_label.pack(pady=10)

        # Score display
        self.score_label = tk.Label(root, text="Wins: 0 | Losses: 0 | Draws: 0", font=("Helvetica", 14))
        self.score_label.pack()

        self.score = {"win": 0, "loss": 0, "draw": 0}

    def play_game(self, user_choice):
        user_item, computer_item, result = self.game.play(user_choice)

        if result == "Invalid choice":
            self.game_result_label.config(text="❌ Invalid choice. Please try again.")
        else:
            self.game_result_label.config(
                text=f"You chose {user_item}. The computer chose {computer_item}.\n"
                     f"Result: {result.capitalize()}!"
            )

            # Update scores
            if result == "win":
                self.score["win"] += 1
            elif result == "loss":
                self.score["loss"] += 1
            else:
                self.score["draw"] += 1

            # Update score label
            self.score_label.config(
                text=f"Wins: {self.score['win']} | Losses: {self.score['loss']} | Draws: {self.score['draw']}"
            )


if __name__ == "__main__":
    root = tk.Tk()
    app = GameApp(root)
    root.mainloop()
