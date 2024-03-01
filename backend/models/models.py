import os
from flask import Flask
from sqlalchemy import create_engine, ForeignKey, Column, Integer, String, CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# app = Flask(__name__)
# basedir = os.path.abspath(os.path.dirname(__file__))

Base = declarative_base()

class User(Base):
    __tablename__ = 'user'
    id = Column('id', Integer, primary_key=True)
    username = Column('username', String, nullable=False)
    email = Column('email', String, nullable=False)
    password = Column('password', String, nullable=False)
    team = Column('team', String, nullable=False)

    def __init__(self, username, email, password, team):
        self.username = username
        self.email = email
        self.password = password
        self.team = team

    def __repr__(self):
        return f"({self.id}, {self.username}, {self.email}, {self.password}, {self.team})"


engine = create_engine('sqlite:///betMate.db', echo=True)
Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)
session = Session()

user1 = User(username="brandon", email="bran@mail.com", password="123", team="team1")
user2 = User(username="Jacob", email="jake@mail.com", password="456", team="team2")
user3 = User(username="Kenny", email="ken@mail.com", password="789", team="team3")
session.add(user1)
session.add(user2)
session.add(user3)
session.commit()

results = session.query(User).all()
print(results)
