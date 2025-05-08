# exo1 : Convert list into dictionaries 
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)

# exo2 : Cinemax
family = {}
while True:
    name = input("Enter a family member's name (or type 'quit' to stop): ")
    if name.lower() == 'quit':
        break
    age = input(f"Enter the age of {name}: ")
    if age.isdigit():
        family[name] = int(age)
    else:
        print("Please enter a valid number for age.")

total_cost = 0

for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    
    print(f"{name.title()} has to pay ${cost}.")
    total_cost += cost

print(f"\nTotal cost for the family: ${total_cost}")

# exo3 ZARA
brand={
    "name":"zara",
    "creator_name" :"Amancio ortega gaona",
    "creation_date": 1975,
    "type_of_clothes":["men","women","children","home"],
    "international_competitors":["gap","benetton"],
    "number_stores":7000,
    "major_color":{
     "France":"blue",
     "spain":"red",
     "US" : ["pink","red"]
     }
    
}
brand ["number_stores"]=2
clients= brand["type_of_clothes"]
print(f"Zara's clients are: {', '.join(clients)}.") 
brand["country_creation"] = "Spain"
if "international_competitors"in brand:
  brand["international_competitors"].append("Desigual")
else:
  print(f"cela n existe pas")
del brand[ "creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print (brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand["number_stores"])

# exo4 : Some Geography
def describe_city(city, country="Morocco"):
    print(f"{city} is in {country}.")
describe_city("Mohammedia")


# exo5 : Random

import random 
def gimmeanumb():
    number= random.randint(1,100)
    guess = int(input("gimme your number :"))
    if guess == number :
        print("bravooo !")
    else: 
        print("try again")
    
    print(f"the secret numb was : {number}")
gimmeanumb()

# exo6 :

def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()
make_shirt("M")
make_shirt("S", "Keep calm and code on")
make_shirt(size="XL", text="Debugging is my cardio")

# exo 7 : 
import random

def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)  
    elif season == "spring":
        return random.uniform(10, 22)  
    elif season == "summer":
        return random.uniform(24, 40)  
    elif season == "autumn" or season == "fall":
        return random.uniform(5, 20)  
    else:
        return random.uniform(-10, 40)  

def main():

    season_input = input("Enter a season (winter, spring, summer, autumn): ").lower()
    
    temperature = get_random_temp(season_input)
    
   
    print(f"The temperature right now is {temperature:.1f} degrees Celsius.")
    
    if temperature < 0:
        print("Brrr,  freezing! Wear some extra layers today.")
    elif 0 <= temperature <= 16:
        print("Quite chilly! Do not forget your coat.")
    elif 17 <= temperature <= 23:
        print("Nice weather! A light jacket should be enough.")
    elif 24 <= temperature <= 32:
        print("Warm and sunny! Enjoy the day.")
    elif 33 <= temperature <= 40:
        print("Its really hot! Stay cool and drink water.")


main()

# exo8 :

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_questions():
    correct = 0
    wrong = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ").strip()
        if user_answer.lower() == item["answer"].lower():
            correct += 1
        else:
            wrong += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct, wrong, wrong_answers

def show_results(correct, wrong, wrong_answers):
    print(f"\nYou got {correct} correct and {wrong} incorrect.")

    if wrong_answers:
        print("\nHere are the questions you missed:")
        for item in wrong_answers:
            print(f"\nQ: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}")

    if wrong > 3:
        replay = input("\nYou had more than 3 wrong answers. Do you want to try again? (yes/no): ").lower()
        if replay == "yes":
            play_quiz()

def play_quiz():
    correct, wrong, wrong_answers = ask_questions()
    show_results(correct, wrong, wrong_answers)


play_quiz()
