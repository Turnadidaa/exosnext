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
