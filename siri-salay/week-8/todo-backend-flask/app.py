import os

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.todos')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

marshmallow = Marshmallow(app)

DEBUG = True
PORT = 8000

@app.route('/')
def todosHome():
    return 'Here lie the todos.'

@app.route('/todo', methods=['POST', 'GET'])
@app.route('/todo/<todoid>', methods=['GET', 'PUT', 'DELETE'])
def get_create_todo(todoid=None):
    #print(request.json['completed'])

    #print('is this is the terminal?')
    from models import Todo
    if todoid == None and request.method == 'GET': 
        return Todo.get_todos()
    elif todoid == None:
        #print('is this is the terminal?')
        body = request.json['body']
        #priority = request.json['priority']
        completed = request.json['completed']
        return Todo.create_todo(body, completed)
    elif todoid and request.method == 'DELETE':
        return Todo.delete_todo(todoid)

    elif todoid and request.method == 'PUT' and request.json['completed'] != Todo.query.get(todoid).completed:
         
        completed = request.json['completed']
        body = Todo.query.get(todoid).body
        return Todo.edit_todo(todoid, body, completed)
    elif todoid and request.method == 'PUT' and request.json['body'] != Todo.query.get(todoid).body:
        # print(Todo.query.get(todoid).body) 
        # print(request.json['completed'])
        
        # print(Todo.query.get(todoid).completed)
        # print(Todo.query.get(todoid).body)
        body = request.json['body']
        completed = Todo.query.get(todoid).completed
        return Todo.edit_todo(todoid, body, completed)

       

    
        # THIS IS INCORRECT BECAUSE ORDER MATTERS: return Todo.edit_todo(todoid, completed, body)
    # let new-body be the body value in json[] the parameter/property/key that you set in the schema
        
        #newPriority = request.json['priority']
        
    else:
        return Todo.get_todo(todoid)

if __name__ == '__main__':
    app.run(debug=DEBUG, port=PORT)