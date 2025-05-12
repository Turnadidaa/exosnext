import tkinter as tk
import random
import time

# Cell class to represent each cell's state (alive or dead)
class Cell:
    def __init__(self, is_alive=False):
        self.is_alive = is_alive

    def set_alive(self):
        self.is_alive = True

    def set_dead(self):
        self.is_alive = False

# Grid class to manage the grid and cell states
class Grid:
    def __init__(self, width, height, initial_state=None):
        self.width = width
        self.height = height
        self.grid = [[Cell() for _ in range(width)] for _ in range(height)]
        
        if initial_state:
            self.set_initial_state(initial_state)

    def set_initial_state(self, initial_state):
        for row, col in initial_state:
            self.grid[row][col].set_alive()

    def get_neighbors(self, x, y):
        neighbors = []
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue
                nx, ny = x + i, y + j
                if 0 <= nx < self.height and 0 <= ny < self.width:
                    neighbors.append(self.grid[nx][ny])
        return neighbors

    def update(self):
        new_state = [[Cell() for _ in range(self.width)] for _ in range(self.height)]
        for y in range(self.height):
            for x in range(self.width):
                live_neighbors = sum(1 for neighbor in self.get_neighbors(x, y) if neighbor.is_alive)

                if self.grid[y][x].is_alive:
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_state[y][x].set_dead()
                    else:
                        new_state[y][x].set_alive()
                else:
                    if live_neighbors == 3:
                        new_state[y][x].set_alive()
        self.grid = new_state

    def display(self):
        return [[cell.is_alive for cell in row] for row in self.grid]

# Tkinter class to visualize the grid
class GameOfLifeApp:
    def __init__(self, root, width, height):
        self.root = root
        self.width = width
        self.height = height
        self.cell_size = 10
        self.canvas = tk.Canvas(root, width=width * self.cell_size, height=height * self.cell_size)
        self.canvas.pack()

        self.grid = Grid(width, height)
        self.is_running = False

        self.setup_buttons()
        self.update_grid()

    def setup_buttons(self):
        self.start_button = tk.Button(self.root, text="Start", command=self.start_game)
        self.start_button.pack(side=tk.LEFT)
        self.stop_button = tk.Button(self.root, text="Stop", command=self.stop_game)
        self.stop_button.pack(side=tk.LEFT)
        self.clear_button = tk.Button(self.root, text="Clear", command=self.clear_grid)
        self.clear_button.pack(side=tk.LEFT)
        self.step_button = tk.Button(self.root, text="Step", command=self.step_game)
        self.step_button.pack(side=tk.LEFT)

    def start_game(self):
        self.is_running = True
        self.run_game()

    def stop_game(self):
        self.is_running = False

    def clear_grid(self):
        self.grid = Grid(self.width, self.height)
        self.update_grid()

    def step_game(self):
        self.grid.update()
        self.update_grid()

    def run_game(self):
        if self.is_running:
            self.grid.update()
            self.update_grid()
            self.root.after(100, self.run_game)

    def update_grid(self):
        self.canvas.delete("all")
        grid_state = self.grid.display()
        for y in range(self.height):
            for x in range(self.width):
                color = "black" if grid_state[y][x] else "white"
                self.canvas.create_rectangle(x * self.cell_size, y * self.cell_size,
                                             (x + 1) * self.cell_size, (y + 1) * self.cell_size,
                                             fill=color, outline="gray")
                
# Example: Run the Game of Life with a simple pattern (like a "glider")
def random_initial_state(width, height, density=0.2):
    return [(random.randint(0, height - 1), random.randint(0, width - 1)) for _ in range(int(width * height * density))]

def main():
    root = tk.Tk()
    root.title("Game of Life")

    width = 50
    height = 50
    initial_state = random_initial_state(width, height)

    app = GameOfLifeApp(root, width, height)
    app.grid.set_initial_state(initial_state)

    root.mainloop()

if __name__ == "__main__":
    main()
