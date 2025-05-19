import psycopg2
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            conn = psycopg2.connect("dbname=restaurant_db user=postgres password=your_password")
            cur = conn.cursor()
            cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
            row = cur.fetchone()
            cur.close()
            conn.close()
            if row:
                return MenuItem(row[0], row[1])
            return None
        except Exception as e:
            print("Erreur get_by_name:", e)
            return None

    @classmethod
    def all_items(cls):
        try:
            conn = psycopg2.connect("dbname=restaurant_db user=postgres password=1948")
            cur = conn.cursor()
            cur.execute("SELECT item_name, item_price FROM Menu_Items")
            rows = cur.fetchall()
            cur.close()
            conn.close()
            return [MenuItem(name, price) for name, price in rows]
        except Exception as e:
            print("Erreur all_items:", e)
            return []
