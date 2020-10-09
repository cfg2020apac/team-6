from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
from datetime import datetime
import sys
import requests
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/codeforgood'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Entry(db.Model):
    tablename = 'entry'

    entryID = db.Column(db.Integer, primary_key=True)
    clientID = db.Column(db.Integer, nullable = False)
    stakeholderID = db.Column(db.Integer, nullable = False)
    category = db.Column(db.String(), nullable=False)
    status = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)
    case_note = db.Column(db.String(), nullable=True)
    date = db.Column(db.DateTime(), nullable=True)
    

    def init(self, entryID, clientID, stakeholderID, category, status, description, case_note, date):
        self.entryID = entryID
        self.clientID = clientID
        self.stakeholderID = stakeholderID
        self.category = category
        self.status = status
        self.description = description
        self.case_note = case_note
        self.date = date
        
    def json(self):
        return {"entryID": self.entryID, "clientID": self.clientID, "stakeholderID" : self.stakeholderID, "category": self.category, "status": self.status, "description" : self.description, "case_note" : self.case_note, "date":self.date.strftime("%Y-%m-%d %H:%M:%S")} 
    
@app.route("/get_client_entries/<int:clientID>")
def get_client_entries(clientID):
    # return jsonify({"Entries": [entry.json() for entry in Entry.query.filter_by(clientID = clientID)]})
    entries =  Entry.query.filter_by(clientID = clientID)

    category_dict = {}

    nameURL = "http://localhost:4000/get_client_name/" + str(clientID)
    clientName = requests.get(nameURL, timeout=1).json()

    for entry in entries:
        category = entry.category
        stakeholderID = entry.stakeholderID
        
        stakeholderURL = "http://localhost:5000/get_account_name/" + str(stakeholderID)
        stakeholderName = requests.get(stakeholderURL).json()

        entry_json = entry.json()
        entry_json["client_name"] = clientName["name"]
        entry_json["stakeholderName"] = stakeholderName["name"]

        if category not in category_dict:
            category_dict[category] = [entry_json]

        else:
            category_dict[category].append(entry_json)

    return jsonify({"entries": category_dict})


@app.route("/add_entry", methods=["POST"])
def add_entry():
    data = request.get_json()

    if data["case_note"]:
        entry = Entry(clientID = data["clientID"], stakeholderID = data["stakeholderID"], category= data["category"], status= data["status"], description = data["description"], case_note = data["case_note"], date=data["date"])
        
    else:
        case_note_data = None
        entry = Entry(clientID = data["clientID"], stakeholderID = data["stakeholderID"], category= data["category"], status= data["status"], description = data["description"], date=data["date"])
    
    try:
        db.session.add(entry)
        db.session.commit()
    except:
        return jsonify({"message": "An error occurred creating entry."}), 500

    return jsonify(entry.json()), 201

@app.route("/get_status/<int:clientID>")
def get_status(clientID):
    entries =  Entry.query.filter_by(clientID = clientID)

    status_dict = {}

    for entry in entries:
        category = entry.category
        entry_date = entry.date
        if category not in status_dict:
            status_dict[category] = [entry.date, entry.status]

        else:
            stored_date = status_dict[category][0]
            if entry_date > stored_date:
                status_dict[category] = [entry_date, entry.status]

    return jsonify({"entries": status_dict})


if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=5003, debug=True)