from game import Game

def get_user_menu_choice():
    # Display menu and get user choice
    print("\nMenu:")
    print("1. Play a new game 🎮")
    print("2. Show scores 📊")
    print("3. Quit ❌")
    
    while True:
        choice = input("Enter your choice (1/2/3): ")
        if choice in ["1", "2", "3"]:
            return choice
        else:
            print("❌ Invalid choice. Please enter 1, 2, or 3.")

def print_results(results):
    # Print the results of the games played
    print("\nGame Summary:")
    print(f"🏆 Wins: {results['win']}")
    print(f"💔 Losses: {results['loss']}")
    print(f"🤝 Draws: {results['draw']}")
    print("Thank you for playing! ✌️")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == "1":
            # Play a new game
            game = Game()
            result = game.play()
            
            # Update the results based on the game outcome
            if result == "win":
                results["win"] += 1
            elif result == "loss":
                results["loss"] += 1
            else:
                results["draw"] += 1
        
        elif choice == "2":
            # Show the scores
            print_results(results)
        
        elif choice == "3":
            # Quit the program
            print_results(results)
            print("Goodbye! 👋")
            break

if __name__ == "__main__":
    main()
