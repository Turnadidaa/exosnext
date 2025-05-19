from flask import Flask, request, jsonify
from menu_item import MenuItem
from menu_manager import MenuManager

app = Flask(__name__)

@app.route("/")
def home():
    return "Bienvenue dans l'API du menu !"

@app.route("/menu", methods=["GET"])
def get_menu():
    items = MenuManager.all_items()
    return jsonify([{"name": item.item_name, "price": item.item_price} for item in items])

@app.route("/menu/<string:name>", methods=["GET"])
def get_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({"name": item.item_name, "price": item.item_price})
    return jsonify({"error": "Item non trouvé"}), 404

@app.route("/menu", methods=["POST"])
def add_item():
    data = request.get_json()
    if "name" not in data or "price" not in data:
        return jsonify({"error": "Données manquantes"}), 400
    item = MenuItem(data["name"], data["price"])
    if item.save():
        return jsonify({"message": "Item ajouté"}), 201
    return jsonify({"error": "Erreur ajout"}), 500

@app.route("/menu/<string:name>", methods=["PUT"])
def update_item(name):
    data = request.get_json()
    if "new_name" not in data or "new_price" not in data:
        return jsonify({"error": "Données manquantes"}), 400
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({"error": "Item non trouvé"}), 404
    if item.update(data["new_name"], data["new_price"]):
        return jsonify({"message": "Item mis à jour"})
    return jsonify({"error": "Erreur update"}), 500

@app.route("/menu/<string:name>", methods=["DELETE"])
def delete_item(name):
    item = MenuManager.get_by_name(name)
    if not item:
        return jsonify({"error": "Item non trouvé"}), 404
    if item.delete():
        return jsonify({"message": "Item supprimé"})
    return jsonify({"error": "Erreur suppression"}), 500

if __name__ == "__main__":
    app.run(debug=True)
