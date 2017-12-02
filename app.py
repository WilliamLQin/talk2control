from flask import Flask, render_template
import time
import os
cmd = """
osascript -e 'tell application "System Events"
    (key code 49)
    end tell'
"""

active = True

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/simulateKeyPress', methods=['GET', 'POST'])
def signUp():
    #minimize active window
    global active
    if active:
        os.system(cmd)
        active = False
    else:
        active = True
    return "awesome"
