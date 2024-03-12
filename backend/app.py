from flask import request, jsonify
from config import app, db
from models import User

@app.route("/")
def home():
    return "Hello, World!"


@app.route("/login")
def login():
    return "Login"


@app.route("/register", methods=["POST"])
def register():
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")
    team = request.json.get("team")
    
    if not username or not email or not password or not team:
        return (jsonify({"message": "Put the correct data"}),400,)

    new_user = User(username=username, email=email, password=password, team=team)
    try: 
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return (jsonify({"message": str(e)}), 400,)
    
    return jsonify({"message": "User created successfully"}), 201


@app.route("/profile", methods=["GET"])
def profile():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({"users":json_users})


@app.route("/delete_user/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return (jsonify({"message": "User not found"}), 404,)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully"})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)





