from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
from datetime import datetime
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/codeforgood'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Client(db.Model):
    tablename = 'client'

    clientID = db.Column(db.Integer, primary_key=True)
    caseManagerID = db.Column(db.Integer, nullable = False)
    name = db.Column(db.String(64), nullable=False)
    contact_number = db.Column(db.String(64), nullable=False)
    client_email = db.Column(db.String(64), nullable=False)
    marital_status = db.Column(db.String(64), nullable=False)
    employment_status = db.Column(db.String(64), nullable=False)
    income = db.Column(db.Integer, nullable=False)
    disability = db.Column(db.String(64), nullable=False)
    race = db.Column(db.String(64), nullable=False)
    religion = db.Column(db.String(64), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    nationality = db.Column(db.String(64), nullable=False)
    allergies = db.Column(db.String(500), nullable=False)
    blood_type = db.Column(db.String(64), nullable=False)
    birth_date = db.Column(db.Date(), nullable=False)
    previous_conviction = db.Column(db.String(500), nullable=False)
    emergency_contact_name = db.Column(db.String(64), nullable=False)
    emergency_contact_number = db.Column(db.String(64), nullable=False)
    emergency_relation = db.Column(db.String(64), nullable=False)
    gender = db.Column(db.String(64), nullable=False)
    

    def init(self, clientID, caseManagerID, name, contact_number, client_email, marital_status, employment_status, income, disability, race, religion, age, nationality, allergies, blood_type, birth_date, previous_conviction, emergency_contact_name, emergency_contact_number, emergency_relation, gender):
        self.clientID = clientID
        self.caseManagerID = caseManagerID
        self.name = name
        self.contact_number = contact_number
        self.client_email = client_email
        self.marital_status = marital_status
        self.employment_status = employment_status
        self.income = income
        self.disability = disability
        self.race = race
        self.religion = religion
        self.age = age
        self.nationality = nationality
        self.allergies = allergies
        self.blood_type = blood_type
        self.birth_date = birth_date
        self.previous_conviction = previous_conviction
        self.emergency_contact_name = emergency_contact_name
        self.emergency_contact_number = emergency_contact_number
        self.emergency_relation = emergency_relation
        self.gender = gender

    def json(self):
        return {"clientID": self.clientID, "caseManagerID" : self.caseManagerID, "name": self.name, "contact_number": self.contact_number, "client_email": self.client_email, "marital_status" : self.marital_status,"employment_status" : self.employment_status,"income" : self.income,"disability" : self.disability,"race" : self.race,"religion" : self.religion, "age" : self.age, "nationality" : self.nationality, "allergies" : self.allergies, "blood_type" : self.blood_type, "birth_date" : self.birth_date.strftime("%Y-%m-%d"), "previous_conviction" : self.previous_conviction, "emergency_contact_name" : self.emergency_contact_name, "emergency_contact_number" : self.emergency_contact_number, "emergency_relation" : self.emergency_relation, "gender": self.gender}

@app.route("/get_all")
def get_all():
  return jsonify({"Clients": [client.json() for client in Client.query.all()]})

@app.route("/get_client_name/<string:clientID>")
def get_client_name(clientID):
    clientID = int(clientID)
    client_row = Client.query.filter_by(clientID = clientID).first().json()
    return jsonify({"name" : client_row["name"]})

@app.route("/get_client_details/<string:clientID>")
def get_client_details(clientID):
    clientID = int(clientID)
    client_row = Client.query.filter_by(clientID = clientID).first().json()
    return jsonify({"client_details" : client_row})

@app.route("/get_assigned_client/<int:caseManagerID>")
def get_assigned_account(caseManagerID):

    return jsonify({"clients": [client.json() for client in Client.query.filter_by(caseManagerID = caseManagerID)]})

@app.route("/add_client", methods=["POST"])
def add_client():
    
    data = request.get_json()
    
    client = Client(caseManagerID = data["caseManagerID"], name = data["name"], contact_number= data["contact_number"], client_email= data["client_email"], marital_status = data["marital_status"],employment_status = data["employment_status"],income = data["income"],disability = data["disability"],race = data["race"],religion = data["religion"], age = data["age"], nationality = data["nationality"], allergies = data["allergies"], blood_type = data["blood_type"], birth_date = data["birth_date"], previous_conviction = data["previous_conviction"], emergency_contact_name = data["emergency_contact_name"], emergency_contact_number = data["emergency_contact_number"], emergency_relation = data["emergency_relation"], gender=data["gender"])
    try:
        db.session.add(client)
        db.session.commit()
    except:
        return jsonify({"message": "An error occurred creating client."}), 500

    return jsonify(client.json()), 201


if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=5002, debug=True)