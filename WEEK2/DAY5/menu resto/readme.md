# 🍃 HealthyBar Menu Manager

## 🥗 Qu'est-ce que ce projet ?

**HealthyBar Menu Manager** est une application web basée sur Flask (Python) et PostgreSQL, conçue pour gérer facilement le menu d’un bar à salades ou restaurant healthy.

### 🎯 Problème résolu

La gestion manuelle des menus (plats, prix, descriptions, images) est chronophage et sujette à erreurs. Ce projet propose une solution centralisée pour administrer les items du menu, avec une API prête à être utilisée côté frontend.

### ✨ Fonctionnalités

- 🔐 Système de connexion avec gestion des utilisateurs et demandes d’inscription
- 📋 Ajout, modification et suppression de plats avec image, description et catégorie
- 📦 Base de données PostgreSQL pour stocker les menus
- 🖼️ Upload sécurisé d’images de plats
- 🧑‍💼 Interface d’administration pour gérer les comptes utilisateurs

---

## 🚀 Comment exécuter ce projet sur un autre ordinateur

### ✅ Prérequis

- Python 3.10+
- PostgreSQL installé localement
- `pip` pour installer les dépendances Python

### 🛠️ Étapes d'installation

1. **Cloner le projet**

```bash
git clone <URL_DU_REPO>
cd healthybar-hackathon
Créer la base de données PostgreSQL

Lance PostgreSQL et exécute :

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
Installer les dépendances

Crée un environnement virtuel et installe Flask et psycopg2 :

bash
Copier
Modifier
python -m venv venv
source venv/bin/activate  # Windows : venv\Scripts\activate
pip install flask psycopg2
Lancer l'application

bash
Copier
Modifier
python app.py
L'application est disponible sur http://localhost:5000

📁 Structure du projet
graphql
Copier
Modifier
healthybar-hackathon/
├── app.py               # Application Flask
├── menu_item.py         # Classe MenuItem pour chaque plat
├── menu_manager.py      # Classe MenuManager pour gérer les plats
├── static/uploads/      # Dossier d’upload des images
└── README.md            # Documentation du projet
💡 À venir
Intégration React pour une interface moderne

Filtres nutritionnels et moteur de recherche

Système de points et fidélité client