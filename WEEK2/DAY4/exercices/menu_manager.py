from menu_item import MenuItem

class MenuManager:
    conn = None  # Connexion partagée

    @classmethod
    def get_by_name(cls, name):
        with cls.conn.cursor() as cur:
            cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_name=%s;", (name,))
            row = cur.fetchone()
            if row:
                item_id, item_name, item_price = row
                return MenuItem(item_name, item_price, item_id)
            return None

    @classmethod
    def all(cls):
        with cls.conn.cursor() as cur:
            cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items;")
            rows = cur.fetchall()
            return [MenuItem(name, price, item_id) for item_id, name, price in rows]
