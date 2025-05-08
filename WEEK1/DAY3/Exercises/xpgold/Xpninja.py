class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history=[]
        self.messages=[]

    def call(self, other_phone):
        message = f"{self.phone_number} called {other_phone.phone_number}"
        print(message)
        self.call_history.append(message)

    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone,content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        print(f"Message sent to {other_phone.phone_number}: {content}")
        self.messages.append(message)
    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(f"To: {message['to']}, Content: {message['content']}")
    def show_incoming_messages(self):
        print("Incoming Messages:")
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(f"From: {message['from']}, Content: {message['content']}")
    def show_messages_from(self, number):
        print(f"Messages from {number}:")
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.phone_number:
                print(f"Content: {msg['content']}")
    
    

phone1 = Phone("0630012345")
phone2 = Phone("0522567534")

phone1.call(phone2)
phone2.call(phone1)

phone1.show_call_history()
phone2.show_call_history()


phone1.send_message(phone2, "Salut, comment ça va ?")
phone2.send_message(phone1, "Très bien, merci et toi ?")
phone2.send_message(phone1, "Tu es libre ce soir ?")


phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("0522567534")

