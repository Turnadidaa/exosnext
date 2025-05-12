companies_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
companies = companies_str.split(", ")

print(f"Number of manufacturers: {len(companies)}")
print(f"Manufacturers in reverse order: {sorted(companies, reverse=True)}")

o_count = sum(1 for company in companies if 'o' in company.lower())
print(f"Number of manufacturers with the letter 'o': {o_count}")

no_i_count = sum(1 for company in companies if 'i' not in company.lower())
print(f"Number of manufacturers without the letter 'i': {no_i_count}")

unique_companies = list(set(companies))
print(f"Companies without duplicates: {', '.join(unique_companies)}")
print(f"Number of companies after removing duplicates: {len(unique_companies)}")

reversed_names = [company[::-1] for company in sorted(companies)]
print(f"Manufacturers in ascending order with reversed names: {', '.join(reversed_names)}")




# exo2 :

def get_full_name(first_name, middle_name=None, last_name=""):
    if middle_name:
        return f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        return f"{first_name.capitalize()} {last_name.capitalize()}"

# Exemple d'utilisation
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))


# exo3 :

# Dictionnaire de traduction du texte anglais au code morse
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', 
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ', ': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-', ' ': '/'
}

# Fonction pour convertir le texte en morse
def text_to_morse(text):
    text = text.upper()
    morse_code = []
    for char in text:
        if char in MORSE_CODE_DICT:
            morse_code.append(MORSE_CODE_DICT[char])
    return ' '.join(morse_code)

# Fonction pour convertir le morse en texte
def morse_to_text(morse):
    morse_dict_reversed = {v: k for k, v in MORSE_CODE_DICT.items()}
    text = ''
    for code in morse.split(' '):
        if code == '/':
            text += ' '
        elif code in morse_dict_reversed:
            text += morse_dict_reversed[code]
    return text

# Exemple d'utilisation
english_text = "Hello World"
morse_code = text_to_morse(english_text)
print(f"English to Morse: {morse_code}")

morse_text = "-- .... . .-.. .-.. --- / .-- --- .-. .-.. -.."
english_text_from_morse = morse_to_text(morse_text)
print(f"Morse to English: {english_text_from_morse}")
