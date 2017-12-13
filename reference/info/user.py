
import json
from datetime import datetime
from playhouse.sqlite_ext import SqliteExtDatabase
from peewee import *
import sys

db = SqliteExtDatabase(sys.path[0] + '/test.db')
# db = SqliteExtDatabase(sys.path[0] + '/test.db')

class User(Model):
    username = CharField()
    created_time = DateTimeField(default=datetime.now)
    info = CharField(default='null')

    class Meta:
        database = db  # 这个模型使用了“people.db”数据库

if __name__ == '__main__':
    db.connect()
    db.create_tables([User], safe=True)
    for i in range(100):
        User.create(username=str(i), info='None')
    db.close()