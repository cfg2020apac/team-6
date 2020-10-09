from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/codeforgood'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Client(db.Model):
    tablename = 'client'

    clientID = db.Column(db.Integer, primary_key=True)
    customerID = db.Column(db.Integer, nullable = False)
    name = db.Column(db.String(64), nullable=False)
    contact_number = db.Column(db.String(64), nullable=False)
    client_email = db.Column(db.String(64), nullable=False)
    marital_status = db.Column(db.String(64), nullable=False)
    employment_status = db.Column(db.String(64), nullable=False)
    income = db.Column(db.Integer, nullable=False)
    disability = db.Column(db.String(64), nullable=False)
    race = db.Column(db.String(64), nullable=False)
    religion = db.Column(db.String(64), nullable=False)

    def init(self, clientID, customerID, name, contact_number, client_email, marital_status, employment_status, income, disability, race, religion):
        self.clientID = clientID
        self.customerID = customerID
        self.name = name
        self.contact_number = contact_number
        self.client_email = client_email
        self.marital_status = marital_status
        self.employment_status = employment_status
        self.income = income
        self.disability = disability
        self.race = race
        self.religion = religion

    def json(self):
        return {"clientID": self.clientID, "customerID" : self.customerID, "name": self.name, "contact_number": self.contact_number, "client_email": self.client_email, "marital_status" : self.marital_status,"employment_status" : self.employment_status,"income" : self.income,"disability" : self.disability,"race" : self.race,"religion" : self.religion}

@app.route("/get_all")
def get_all():
  return jsonify({"Clients": [client.json() for client in Client.query.all()]})

@app.route("/get_assigned_client/<int:customerID>")
def get_assigned_account(customerID):

    return jsonify({"clients": [client.json() for client in Client.query.filter_by(customerID = customerID)]})

@app.route("/add_client", methods=["POST"])
def add_client():
    
    data = request.get_json()
    
    client = Client(customerID = data["customerID"], name = data["name"], contact_number= data["contact_number"], client_email= data["client_email"], marital_status = data["marital_status"],employment_status = data["employment_status"],income = data["income"],disability = data["disability"],race = data["race"],religion = data["religion"])

    try:
        db.session.add(client)
        db.session.commit()
    except:
        return jsonify({"message": "An error occurred creating client."}), 500

    return jsonify(client.json()), 201


if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=4000, debug=True)