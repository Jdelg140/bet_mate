from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000", methods=["GET", "POST"], allow_headers=["Content-Type"])

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///betmate.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


