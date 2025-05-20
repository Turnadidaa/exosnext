# 🍃 HealthyBar Menu Manager

## 🥗 What is this project?

**HealthyBar Menu Manager** is a web application built with Flask (Python) and PostgreSQL, designed to simplify the management of menu items for a healthy food bar or salad restaurant.

### 🎯 Problem it solves

Manually managing menus (dishes, prices, descriptions, images) is time-consuming and error-prone. This project offers a centralized and secure solution to manage the menu, with a backend API ready for frontend integration.

### ✨ Features

- 🔐 User authentication with registration requests and admin approval
- 📋 Add, update, and delete dishes with image, category, and description
- 🗃️ PostgreSQL database for reliable storage
- 🖼️ Secure photo upload for menu items
- 🧑‍💼 Admin dashboard to manage users and requests

---

## 🚀 How to run this project on another computer

### ✅ Requirements

- Python 3.10+
- PostgreSQL installed locally
- `pip` for installing Python packages

### 🛠️ Setup steps

1. **Clone the repository**

```bash
git clone <REPO_URL>
cd healthybar-hackathon
Create the PostgreSQL database

Launch PostgreSQL and run:

sql
Copier
Modifier
CREATE DATABASE "Restaurant";

CREATE TABLE "Menu_Items" (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    item_price NUMERIC,
    photo_url TEXT,
    category VARCHAR(50),
    description TEXT
);

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    must_change_password BOOLEAN DEFAULT FALSE
);

CREATE TABLE "account_requests" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending',
    decision_at TIMESTAMP
);
Install dependencies

Create a virtual environment and install Flask and psycopg2:

bash
Copier
Modifier
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install flask psycopg2
Run the application

bash
Copier
Modifier
python app.py
Visit http://localhost:5000 to use the app.

📁 Project Structure
bash
Copier
Modifier
healthybar-hackathon/
├── app.py               # Main Flask application
├── menu_item.py         # MenuItem class for single dishes
├── menu_manager.py      # MenuManager class for listing/querying items
├── static/uploads/      # Folder for uploaded images
└── README.md            # Project documentation
💡 Coming Soon
React frontend integration

Nutritional filters and search system

Loyalty and points system for customers