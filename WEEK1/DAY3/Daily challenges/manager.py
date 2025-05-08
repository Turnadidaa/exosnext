class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "soupe", "price": 10, "spice": "B", "indexglu": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "indexglu": True},
            {"name": "salad", "price": 18, "spice": "A", "indexglu": False},
            {"name": "French fries", "price": 5, "spice": "C", "indexglu": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "indexglu": True}
        ]

    def add_item(self, name, price, spice, indexglu):
        new_item = {"name": name, "price": price, "spice": spice, "indexglu": indexglu}
        self.menu.append(new_item)
        print(f"Item '{name}' added to the menu.")

    def update_item(self, name, price=None, spice=None, indexglu=None):
        for item in self.menu:
            if item["name"] == name:
                if price is not None:
                    item["price"] = price
                if spice is not None:
                    item["spice"] = spice
                if indexglu is not None:
                    item["indexglu"] = indexglu
                print(f"Item '{name}' updated.")
                return
        print(f"Item '{name}' not found in the menu.")

    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                print(f"Item '{name}' removed from the menu.")
                return
        print(f"Item '{name}' not found in the menu.")
        
if __name__ == "__main__":
    manager = MenuManager()
    manager.add_item("Pizza", 12, "B", True)
    manager.update_item("salad", 20, "C", False)
    manager.remove_item("soupe")
    manager.remove_item("Hamburger")