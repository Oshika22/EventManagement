from flask import Blueprint, request, jsonify
import pandas as pd
from werkzeug.utils import secure_filename
import os
from app import mongo

# Uploading the file blueprint
upload_bp = Blueprint('upload', __name__)

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), '../../uploads')
ALLOWED_EXTENSIONS = {'xlsx', 'xls'}

# Function to check if the file is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Uploading the file
@upload_bp.route('/upload', methods=['POST'])
def upload_file():
# Checking if the required fields are present
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    table_name = request.form.get('tableName')
    table_type = request.form.get('tableType')

    if not table_name:
        return jsonify({"error": "No table name provided"}), 400
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)
        file.save(file_path)
# Reading the data and extracting the records
        try:
            data = pd.read_excel(file_path)
            records = data.to_dict(orient='records')
            mongo.db[table_name].insert_many(records)
            event_exists = mongo.db['EventDetails'].find_one({"event_name": table_name})
            if not event_exists:
                # Insert new event record
                Event_detail = {"event_name": table_name, "event_type": table_type}
                mongo.db['EventDetails'].insert_one(Event_detail)
            return jsonify({"message": "File uploaded and data saved successfully"}), 200
        except Exception as e:
            return jsonify({"error": f"Error processing file: {e}"}), 500

    return jsonify({"error": "Invalid file format"}), 400
