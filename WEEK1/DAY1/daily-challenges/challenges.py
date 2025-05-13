import tkinter as tk
from tkinter import messagebox

def challenge1():
    try:
        number = int(entry_number.get())
        length = int(entry_length.get())
        multiples = [number * i for i in range(1, length + 1)]
        result1.set(f"Les {length} premiers multiples de {number} sont : {multiples}")
    except ValueError:
        messagebox.showerror("Erreur", "Entrez des nombres valides.")

def has_double_letters(word):
    for i in range(len(word) - 1):
        if word[i] == word[i + 1]:
            return True
    return False

def challenge2():
    sentence = entry_sentence.get()
    words = sentence.split()
    filtered = [word for word in words if not has_double_letters(word)]
    result2.set("Mots sans lettres doublées : " + " ".join(filtered))

def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def print_cake(candle_count):
    candles = "i" * candle_count
    candle_line = f"    {candles}    "
    cake = f"""
{candle_line}
   _________
  |:H:a:p:p:y:|
__|___________|__
|^^^^^^^^^^^^^^^^^|
|:B:i:r:t:h:d:a:y:|
|                 |
~~~~~~~~~~~~~~~~~~~
"""
    return cake

def challenge3():
    try:
        age = int(entry_age.get())
        birth_year = int(entry_birth_year.get())
        last_digit = age % 10
        cake_text = print_cake(last_digit)

        result3.set("Voici ton gâteau 🎂:\n" + cake_text)
        if is_leap_year(birth_year):
            result3.set(result3.get() + "\n🎉 Année bissextile ! Encore un gâteau :\n" + print_cake(last_digit))
    except ValueError:
        messagebox.showerror("Erreur", "Entrez un âge et une année valides.")

# --- Interface Graphique ---
root = tk.Tk()
root.title("Python Challenges avec Tkinter")
root.geometry("700x800")

# Challenge 1
tk.Label(root, text="Challenge 1: Multiples").pack()
tk.Label(root, text="Nombre:").pack()
entry_number = tk.Entry(root)
entry_number.pack()

tk.Label(root, text="Longueur:").pack()
entry_length = tk.Entry(root)
entry_length.pack()

result1 = tk.StringVar()
tk.Button(root, text="Afficher les multiples", command=challenge1).pack()
tk.Label(root, textvariable=result1, wraplength=600, justify="left").pack(pady=10)

# Challenge 2
tk.Label(root, text="Challenge 2: Mots sans lettres doublées").pack()
entry_sentence = tk.Entry(root, width=80)
entry_sentence.pack()

result2 = tk.StringVar()
tk.Button(root, text="Filtrer les mots", command=challenge2).pack()
tk.Label(root, textvariable=result2, wraplength=600, justify="left").pack(pady=10)

# Challenge Gold
tk.Label(root, text="Challenge Gold: Gâteau d'anniversaire 🎂").pack()
tk.Label(root, text="Ton âge:").pack()
entry_age = tk.Entry(root)
entry_age.pack()

tk.Label(root, text="Ton année de naissance:").pack()
entry_birth_year = tk.Entry(root)
entry_birth_year.pack()

result3 = tk.StringVar()
tk.Button(root, text="Afficher le gâteau", command=challenge3).pack()
tk.Label(root, textvariable=result3, font=("Courier", 10), justify="left").pack(pady=10)

root.mainloop()
