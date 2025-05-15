import psycopg2
import requests
import random

conn = psycopg2.connect(
    host="localhost",
    database="Countries",
    user="postgres",
    password="1948"
)
cur = conn.cursor()

response = requests.get("https://restcountries.com/v3.1/all")
all_countries = response.json()
sample = random.sample(all_countries, 10)

for country in sample:
    name= country.get("name", {}).get("common")
    capital = country.get("capital", [None])[0]
    flag = country.get("flags", {}).get("png")
    subregion = country.get("subregion")
    population = country.get("population")

    if name and flag:
        cur.execute("""
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s);
        """, (name, capital, flag, subregion, population))
        print(f"Inserted {name} into the database.")
conn.commit()
cur.close()     
conn.close()

print("10 pays insérés dans la base de données.")