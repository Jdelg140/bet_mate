import os
from flask import Flask

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

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