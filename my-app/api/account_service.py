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

    accountID = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False)
    name = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(64), nullable=False)
    role = db.Column(db.String(64), nullable=False)

    def init(self, accountID, username, name, password, email, role):
        self.accountID = accountID
        self.username = username
        self.name = name
        self.password = password
        self.email = email
        self.role = role

    def json(self):
        return {"accountID": self.accountID, "username": self.username, "name": self.name, "password": self.password, "email": self.email, "role":self.role}

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

@app.route("/login", methods=['POST'])
def login():
    info = request.get_json()
    username = info["username"]
    password = info["password"]
    if not (Account.query.filter_by(username=username,password=password).first()):
        return jsonify({"message": "Incorrect credentials"}), 400
        
    return jsonify({"message": "Login successful"})

@app.route("/account", methods=['POST'])
def create_account():
    info = request.get_json()
    username = info["username"]
    if (Account.query.filter_by(username=username).first()):
        return jsonify({"message": "An account with username '{}' already exists.".format(username)}), 400
 
    data = Account(username=info["username"],name=info["name"],password=info["password"], email=info["email"], role=info["role"])

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