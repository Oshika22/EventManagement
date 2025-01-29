from flask import Blueprint, request, jsonify
from app import mongo

event_bp = Blueprint('events', __name__)
# To display events
@event_bp.route('/events', methods=['GET'])
def get_events():
    try:
        events = list(mongo.db['EventDetails'].find({}, {"_id": 0}))
        return jsonify(events), 200
    except Exception as e:
        return jsonify({"error": f"Error fetching events: {e}"}), 500

# To display a specific event and its details
@event_bp.route('/events/<event_name>', methods=['GET'])
def get_event(event_name):
    try:
        event = mongo.db['EventDetails'].find_one({"name": event_name}, {"_id": 0})
        if event:
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
        mongo.db['EventDetails'].insert_one(event_data)
        return jsonify({"message": "Event added successfully"}), 201
    except Exception as e:
        return jsonify({"error": f"Error adding event: {e}"}), 500

# To add participants to an event
@event_bp.route('/events/<event_name>', methods=['PUT'])
def update_event(event_name):
    try:
        updated_data = request.json
        result = mongo.db['EventDetails'].update_one(
            {"name": event_name},
            {"$set": updated_data}
        )
        if result.matched_count:
            return jsonify({"message": "Event updated successfully"}), 200
        else:
            return jsonify({"error": "Event not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Error updating event: {e}"}), 500


# To view participants an event
@event_bp.route('/participants/<event_name>', methods=['GET'])
def get_participants(event_name):
    try:
        collection = mongo.db[event_name]  # Access the collection with the event name
        participants = list(collection.find({}, {"_id": 0}))  # Exclude `_id` for cleaner response
        return jsonify(participants), 200
    except Exception as e:
        return jsonify({"error": f"Error fetching participants for {event_name}: {e}"}), 500
