from app import mongo

# Event class
class Event:
# Constructor
    def __init__(self, event_name, date, location, description):
        self.event_name = event_name
        self.date = date
        self.location = location
        self.description = description
# Method to convert the object to a dictionary
    def to_dict(self):
        return {
            "event_name": self.event_name,
            "date": self.date,
            "location": self.location,
            "description": self.description
        }

    @staticmethod
    def get_all_events():
        return list(mongo.db['EventDetails'].find({}, {"_id": 0}))

    @staticmethod
    def get_event_by_name(event_name):
        return mongo.db['EventDetails'].find_one({"event_name": event_name}, {"_id": 0})

    def save_to_db(self):
        mongo.db['EventDetails'].insert_one(self.to_dict())

    @staticmethod
    def update_event(event_name, updated_data):
        return mongo.db['EventDetails'].update_one(
            {"event_name": event_name},
            {"$set": updated_data}
        )

    @staticmethod
    def delete_event(event_name):
        return mongo.db['EventDetails'].delete_one({"event_name": event_name})
