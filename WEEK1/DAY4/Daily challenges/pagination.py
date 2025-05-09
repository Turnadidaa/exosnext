import math
class Pagination:
    def __init__(self, items=None, page_size=10):
        if items is None:
            items = []
        self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(items) / page_size)
    def get_visible_items(self):
        start= self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("imvalid num page")
        self.current_idx = page_num - 1
    
    def first_page(self) :
        self.current_idx = 0

    def last_page(self) :
        self.current_idx = self.total_pages - 1

    def next_page(self) :   
        if self.current_idx <self.total_pages - 1:
            self.current_idx += 1
        else:
            print("you are already on the last page")
    def previous_page(self) :
        if self.current_idx > 0:
            self.current_idx -= 1
        else:
            print("you are already on the first page")
    def __str__(self):
        visible_items = self.get_visible_items()
        return "\n".join(str(item) for item in visible_items)
       
alphabetList = list("abcdefghijklmnopqrstuvwxyz") 
p = Pagination(alphabetList, 4)
print(p.get_visible_items())
p.next_page()
print(p.get_visible_items())
p.last_page()
print(p.get_visible_items())
try:
    p.go_to_page(10)
except ValueError as e:
    print("Erreur attendue :", e)
                                    #p.go_to_page(7)
                                    #print(p.current_idx + 1)
p.go_to_page(0)
print(p.current_idx + 1)
