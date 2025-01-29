from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    
    # Configuration
    app.config["MONGO_URI"] = "mongodb+srv://oshika1:learned@cluster0.ukh05.mongodb.net/EventManagement"
    CORS(app)
    mongo.init_app(app)

    # Register blueprints
    from app.routes.upload import upload_bp
    from app.routes.eventRoute import event_bp
    app.register_blueprint(upload_bp, url_prefix='/api')
    app.register_blueprint(event_bp, url_prefix='/api')
    return app
