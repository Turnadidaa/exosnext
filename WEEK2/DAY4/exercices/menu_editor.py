import psycopg2
from menu_item import MenuItem
from menu_manager import MenuManager

def afficher_menu():
    print("""
D - Supprimer un item
U - Mettre à jour un item
S - Afficher le menu complet
Q - Quitter
""")

def boucle_menu():
    while True:
        afficher_menu()
        choix = input("Votre choix : ").upper()

        if choix == 'D':
            nom = input("Nom de l'item à supprimer : ")
            item = MenuManager.get_by_name(nom)
            if item:
                item.delete()
                print(f"{nom} supprimé.")
            else:
                print("Item non trouvé.")
        elif choix == 'U':
            nom = input("Nom de l'item à mettre à jour : ")
            item = MenuManager.get_by_name(nom)
            if item:
                nouveau_nom = input("Nouveau nom (laisser vide pour garder) : ")
                nouveau_prix = input("Nouveau prix (laisser vide pour garder) : ")
                if nouveau_prix:
                    try:
                        nouveau_prix = int(nouveau_prix)
                    except ValueError:
                        print("Prix invalide, mise à jour annulée.")
                        continue
                else:
                    nouveau_prix = None
                item.update(nouveau_nom or None, nouveau_prix)
                print("Item mis à jour.")
            else:
                print("Item non trouvé.")
        elif choix == 'S':
            items = MenuManager.all()
            if not items:
                print("Le menu est vide.")
            else:
                for i in items:
                    print(f"{i.name} : {i.price} €")
        elif choix == 'Q':
            print("Au revoir !")
            break
        else:
            print("Choix invalide, réessayez.")

if __name__ == "__main__":
    conn = psycopg2.connect("dbname=Restaurant user=postgres password=1948 options='-c client_encoding=utf8'")
    
    # On passe la connexion aux classes
    MenuItem.conn = conn
    MenuManager.conn = conn

    boucle_menu()

    conn.close()
