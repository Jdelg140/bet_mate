import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
db = SQLAlchemy(app)


@app.route("/")
def home():
    return "Hello, World!"


@app.route("/login")
def login():
    return "Login"


@app.route("/register")
def register():
    return "Register"


@app.route("/profile")
def profile():
    return "Profile"


if __name__ == '__main__':
    app.run(debug=True)