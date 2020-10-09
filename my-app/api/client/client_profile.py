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

    def init(self, clientID, customerID, name, contact_number, client_email):
        self.clientID = clientID
        self.customerID = customerID
        self.name = name
        self.contact_number = contact_number
        self.client_email = client_email

    def json(self):
        return {"clientID": self.clientID, "customerID" : self.customerID, "name": self.name, "contact_number": self.contact_number, "client_email": self.client_email}

@app.route("/get_all")
def get_all():
  return jsonify({"Clients": [client.json() for client in Client.query.all()]})

@app.route("/get_assigned_client/<int:customerID>")
def get_assigned_account(customerID):
       
    # clients = Client.query.filter_by(customerID = customerID)
    # print (clients)

    return jsonify({"clients": [client.json() for client in Client.query.filter_by(customerID = customerID)]})


if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=4000, debug=True)