from flask import Blueprint, request, jsonify
from app import mongo
from collections import Counter
participant_bp = Blueprint('participants', __name__)
# To display participants with a specific event name
@participant_bp.route('/participants/frequent', methods=['GET'])
def get_participants():
    try:
        participant_count = Counter()

        # Iterate through all collections in MongoDB
        for collection_name in mongo.db.list_collection_names():
            collection = mongo.db[collection_name]
            
            # Extract all participant names
            participants = collection.find({}, {"_id": 0, "team name": 0})
            
            for participant in participants:
                name = participant.get("team name")
                if name:
                    participant_count[name] += 1  # Count occurrences
        
        # Find participants who participated more than once
        repeated_participants = {name: count for name, count in participant_count.items() if count > 1}

        return jsonify(repeated_participants), 200  # ✅ Return JSON response

    except Exception as e:
        return jsonify({"error": f"Error fetching participants: {str(e)}"}), 500  # ❌ Return error response
    
    
    #The environment variable 'Path' seems to have some paths containing the '"' character. The existence of such a character is known to have caused the Python extension to not load. If the extension fails to load please modify your paths to remove this '"' character.