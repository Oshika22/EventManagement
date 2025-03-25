from flask import Blueprint, request, jsonify
from app import mongo

event_bp = Blueprint('events', __name__)
# To display events
@event_bp.route('/eventList/<event_type>', methods=['GET'])
def get_events(event_type):
    try:
        query = {} if not event_type else {"event_type": event_type}
        
        events = list(mongo.db['EventDetails'].find(query, {"_id": 0}))
        print(f"Received request for events: {event_type}")
        return jsonify(events), 200
    except Exception as e:
        return jsonify({"error": f"Error fetching events: {e}"}), 500
    
# To display a specific event and its details
@event_bp.route('/events/<event_name>', methods=['GET'])
def get_event(event_name):
    try:
        print(f"Received request for event_name: {event_name}")
        event = mongo.db.EventDetails.find_one({"event_name": event_name}, {"_id": 0})
        if event:
#            print(event)
            return jsonify(event), 200
        else:
            return jsonify({"error": "Event not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Error fetching event {event_name}: {e}"}), 500

# To add an event
@event_bp.route('/events', methods=['POST'])
def add_event():
    try:
        
        event_data = request.json
        event_name = event_data.get('event_name')
        if not event_name:
            return jsonify({"error": "Event name is required"}), 400
        event_exists = mongo.db['EventDetails'].find_one({"event_name": event_name})
        if event_exists:
             # Update the existing event
             mongo.db['EventDetails'].update_one(
                {"event_name": event_name},
                {"$set": event_data}  # This updates the entire document
            )
        else:
            # Insert new event record
            mongo.db['EventDetails'].insert_one(event_data)
        return jsonify({"message": "Event added successfully"}), 201
    except Exception as e:
        return jsonify({"error": f"Error adding event: {e}"}), 500

# To add participants to an event
# @event_bp.route('/events/<event_name>', methods=['PUT'])
# def update_event(event_name):
#     try:
#         updated_data = request.json
#         result = mongo.db['EventDetails'].update_one(
#             {"name": event_name},
#             {"$set": updated_data}
#         )
#         if result.matched_count:
#             return jsonify({"message": "Event updated successfully"}), 200
#         else:
#             return jsonify({"error": "Event not found"}), 404
#     except Exception as e:
#         return jsonify({"error": f"Error updating event: {e}"}), 500


# To view participants an event
@event_bp.route('/participants/<eventName>', methods=['GET'])
def get_participants(eventName):
    try:
        collection = mongo.db[eventName]  # Access the collection with the event name
        participants = list(collection.find({}, {"_id": 0}))  # Exclude `_id` for cleaner response
        return jsonify(participants), 200
    except Exception as e:
        return jsonify({"error": f"Error fetching participants for {eventName}: {e}"}), 500
