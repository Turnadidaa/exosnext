from flask import Flask, jsonify
import psycopg2
import requests
import random

app = Flask(__name__)

def get_db_connection():
    """Create a new database connection."""
    return psycopg2.connect(
        host="localhost",
        database="Countries",
        user="postgres",
        password="1948"
    )
    return conn
@app.route('/populate_countries')
def populate_countries():
    response = requests.get("https://restcountries.com/v3.1/all")
    all_countries = response.json()
    sample = random.sample(all_countries, 10)

    conn = get_db_connection()
    cur = conn.cursor()

    for country in sample:
        name = country.get("name", {}).get("common")
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
    return jsonify({"message": "10 countries inserted into the database."})
@app.route('/countries')
def get_countries():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM countries;")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    countries = []
    for row in rows:
        countries.append({
            "id": row[0],
            "name": row[1], 
            "capital": row[2],
            "flag": row[3],
            "subregion": row[4],
            "population": row[5]
        })

    return jsonify(countries)

if __name__ == '__main__':
    app.run(debug=True)