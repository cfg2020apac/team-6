from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ
 
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/codeforgood'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
 
db = SQLAlchemy(app)
CORS(app)

class Account(db.Model):
    tablename = 'account'

    customerID = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False)
    name = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    customer_email = db.Column(db.String(64), nullable=False)

    def init(self, customerID, username, name, password, customer_email):
        self.customerID = customerID
        self.username = username
        self.name = name
        self.password = password
        self.customer_email = customer_email

    def json(self):
        return {"customerID": self.customerID, "username": self.username, "name": self.name, "password": self.password, "customer_email": self.customer_email}

@app.route("/account")
def get_all():
  return jsonify({"Accounts": [account.json() for account in Account.query.all()]})

@app.route("/get_account_name/<string:customerID>")
def get_client_name(customerID):
    customerID = int(customerID)
    name = "NIL"
    account_row = Account.query.filter_by(customerID = customerID).first().json()
    if account_row:
        name = account_row["name"]

    return jsonify({"name" : name})

@app.route("/account", methods=['POST'])
def create_account():
    info = request.get_json()
    username = info["username"]
    if (Account.query.filter_by(username=username).first()):
        return jsonify({"message": "An account with username '{}' already exists.".format(username)}), 400
 
    data = Account(username=info["username"],name=info["name"],password=info["password"],customer_email=info["customer_email"])

    try:
        db.session.add(data)
        db.session.commit()
    except Exception as e:
        print(e)
        print(info)
        return jsonify({"message": "An error occurred creating the account."}), 500

    return jsonify(data.json()), 201


if __name__ == '__main__':
    app.run(host='0.0.0.0' , port=5001, debug=True)