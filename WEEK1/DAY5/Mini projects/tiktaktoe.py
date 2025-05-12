import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic Tac Toe")

        self.board = [[' ' for _ in range(3)] for _ in range(3)]  # Grille vide
        self.current_player = 'X'  # Le joueur commence avec 'X'
        self.buttons = [[None for _ in range(3)] for _ in range(3)]
        self.create_widgets()

    def create_widgets(self):
        # Création des boutons pour la grille
        for i in range(3):
            for j in range(3):
                self.buttons[i][j] = tk.Button(self.root, text=" ", width=10, height=3,
                                               command=lambda row=i, col=j: self.make_move(row, col))
                self.buttons[i][j].grid(row=i, column=j)

    def display_board(self):
        # Affiche l'état actuel du tableau dans la console pour référence (optionnel)
        print("\n")
        for row in self.board:
            print(row)
        print("\n")

    def player_input(self, row, col):
        """Demande au joueur de faire un coup et met à jour le tableau."""
        if self.board[row][col] == ' ':
            self.board[row][col] = self.current_player
            self.buttons[row][col].config(text=self.current_player)

    def check_win(self):
        """Vérifie si un joueur a gagné."""
        # Vérification des lignes
        for row in range(3):
            if self.board[row][0] == self.board[row][1] == self.board[row][2] != ' ':
                return True
        
        # Vérification des colonnes
        for col in range(3):
            if self.board[0][col] == self.board[1][col] == self.board[2][col] != ' ':
                return True
        
        # Vérification des diagonales
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != ' ':
            return True
        
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != ' ':
            return True
        
        return False

    def is_full(self):
        """Vérifie si la grille est pleine."""
        for row in range(3):
            for col in range(3):
                if self.board[row][col] == ' ':
                    return False
        return True

    def make_move(self, row, col):
        """Effectue un coup et vérifie l'état du jeu."""
        if self.board[row][col] == ' ':
            self.player_input(row, col)
            self.display_board()
            
            if self.check_win():
                messagebox.showinfo("Game Over", f"Player {self.current_player} wins!")
                self.reset_board()
            elif self.is_full():
                messagebox.showinfo("Game Over", "It's a tie!")
                self.reset_board()
            else:
                self.switch_player()

    def switch_player(self):
        """Change de joueur après chaque coup."""
        self.current_player = 'O' if self.current_player == 'X' else 'X'

    def reset_board(self):
        """Réinitialise le tableau pour une nouvelle partie."""
        self.board = [[' ' for _ in range(3)] for _ in range(3)]
        for i in range(3):
            for j in range(3):
                self.buttons[i][j].config(text=" ")

def main():
    root = tk.Tk()
    game = TicTacToe(root)
    root.mainloop()

if __name__ == "__main__":
    main()
