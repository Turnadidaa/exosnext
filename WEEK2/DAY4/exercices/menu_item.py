import psycopg2

class MenuItem:
    conn = None  # Connexion partagée

    def __init__(self, name, price=0, item_id=None):
        self.item_id = item_id
        self.name = name
        self.price = price

    def save(self):
        with self.conn.cursor() as cur:
            if self.item_id is None:
                cur.execute("""
                    INSERT INTO Menu_Items (item_name, item_price)
                    VALUES (%s, %s) RETURNING item_id;
                """, (self.name, self.price))
                self.item_id = cur.fetchone()[0]
            else:
                self.update()
        self.conn.commit()

    def delete(self):
        if self.item_id is None:
            print("Item non sauvegardé en base.")
            return
        with self.conn.cursor() as cur:
            cur.execute("DELETE FROM Menu_Items WHERE item_id=%s;", (self.item_id,))
        self.conn.commit()

    def update(self, new_name=None, new_price=None):
        if self.item_id is None:
            print("Item non sauvegardé en base.")
            return
        if new_name:
            self.name = new_name
        if new_price is not None:
            self.price = new_price
        with self.conn.cursor() as cur:
            cur.execute("""
                UPDATE Menu_Items SET item_name=%s, item_price=%s
                WHERE item_id=%s;
            """, (self.name, self.price, self.item_id))
        self.conn.commit()
