# -*- coding: utf-8 -*-

from flask.ext.mongoengine import MongoEngine

db = MongoEngine()

# class Group(db.Document):

# class User(db.Document):

class Goal(db.Document):
    username = db.StringField()
    content = db.StringField()
    meta = {'collection': 'goals'}

class PersonalLog(db.Document):
    username = db.StringField()
    content = db.StringField()
    meta = {'collection': 'personal_logs'}
