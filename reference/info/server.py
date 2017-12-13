#coding=utf-8
import os
import sys
from flask import Flask, request, jsonify 
from flask_cors import CORS
import json
import datetime

# import user as DB
app = Flask(__name__)
CORS(app)

def file_name():
    now = datetime.datetime.now()
    return now.strftime('%Y%m%d%H%M%S')  

user_set = set()
info_list = []
max_info_len = 1000 
fp = open(file_name()+'.txt', 'a')

@app.route('/upload', methods=['POST'])
def upload():
    global info_list
    global fp
    # print(request.get_data())
    # print(json.loads(request.form['data']))
    # print(request.form['data'].encode('utf-8'))
    user_list = json.loads(request.form['data'])
    for user in user_list:
        user = user.encode('utf-8')
        print(user)
        if user not in user_set:
            user_set.add(user)
            info_list.append(user)
            fp.write(user+'\n')
    fp.flush()
    
    if len(info_list) >= max_info_len:
        fp.close()
        fp = open(file_name()+'.txt', 'a')
        info_list = []
    if len(user_set) >= 10000:
        user_set.clear()
    return jsonify({'code': 20000, 'data': 'hello'})

@app.route('/info', methods=['GET'])
def info():
    global info_list
    list_len = len(info_list)
    # print(request.get_data().decode('utf-8'))
    # return json.dumps(info_list, ensure_ascii=False)
    return jsonify(info_list[max(list_len-100, 0):list_len])

if __name__ == '__main__':
    # DB.db.create_tables([DB.User], safe=True)
    # app.run(debug=True, host="0.0.0.0", port=3333)
    app.run(host="0.0.0.0", port=3333)
