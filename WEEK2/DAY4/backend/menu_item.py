import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.item_name = name
        self.item_price = price

    def save(self):
        try:
            conn = psycopg2.connect("dbname=restaurant_db user=postgres password=1948")
            cur = conn.cursor()
            cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
                        (self.item_name, self.item_price))
            conn.commit()
            cur.close()
            conn.close()
            return True
        except Exception as e:
            print("Erreur ajout:", e)
            return False

    def delete(self):
        try:
            conn = psycopg2.connect("dbname=restaurant_db user=postgres password=1948")
            cur = conn.cursor()
            cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.item_name,))
            conn.commit()
            success = cur.rowcount > 0
            cur.close()
            conn.close()
            return success
        except Exception as e:
            print("Erreur suppression:", e)
            return False

    def update(self, new_name, new_price):
        try:
            conn = psycopg2.connect("dbname=restaurant_db user=postgres password=1948")
            cur = conn.cursor()
            cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                        (new_name, new_price, self.item_name))
            conn.commit()
            success = cur.rowcount > 0
            cur.close()
            conn.close()
            return success
        except Exception as e:
            print("Erreur update:", e)
            return False
