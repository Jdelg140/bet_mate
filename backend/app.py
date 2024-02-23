import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'betMate.db')
db = SQLAlchemy(app)

@app.cli.command("create_db")
def create_db():
    db.create_all()
    print("Database created!")

@app.cli.command("drop_db")
def drop_db():
    db.drop_all()
    print("Database dropped!")

@app.cli.command("seed_db")
def seed_db():
    from models import User
    user1 = User(username="user1", email="b@mail.com", password="123", team="team1")
    db.session.add(user1)
    db.session.commit()
    print("Database seeded!")

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

