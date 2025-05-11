class BankAccount:
    def __init__(self, initial_balance=0, username="", password=""):
        self.balance = initial_balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("Authentication successful.")
        else:
            raise Exception("Authentication failed.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Deposit must be positive.")
        self.balance += amount
        print(f"Deposited: {amount}")

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdraw must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient balance.")
        self.balance -= amount
        print(f"Withdrew: {amount}")

class MinimumBalanceAccount(BankAccount):
    def __init__(self, initial_balance=0, username="", password="", minimum_balance=0):
        super().__init__(initial_balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdraw must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot go below minimum balance.")
        self.balance -= amount
        print(f"Withdrew: {amount}")