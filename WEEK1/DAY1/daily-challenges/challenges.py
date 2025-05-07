# challenge1
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))
multiples = [number * i for i in range(1, length + 1)]
print(f"The first {length} multiples of {number} are: {multiples}")

# challenge2

def has_double_letters(word):
    for i in range(len(word) - 1):
        if word[i] == word[i + 1]:
            return True
    return False


sentence = input("Entrez une phrase : ")


words = sentence.split()


filtered_words = [word for word in words if not has_double_letters(word)]

print("Mots sans lettres doublées :", " ".join(filtered_words))

# challenge gold

def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def print_cake(candle_count):
    # Ligne de bougies (i)
    candles = "i" * candle_count
    candle_line = f"    {candles}    "

    # Le gâteau en ASCII
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
    print(cake)

# Demander l’âge et l’année de naissance
age = int(input("Quel est ton âge ? "))
birth_year = int(input("Quelle est ton année de naissance ? "))

# Dernier chiffre de l’âge
last_digit = age % 10

# Affichage du gâteau
print_cake(last_digit)

# Bonus : deux gâteaux si année bissextile
if is_leap_year(birth_year):
    print("🎉 Année bissextile ! Encore un gâteau pour toi :")
    print_cake(last_digit)
