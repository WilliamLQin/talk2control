from flask import Flask, render_template
import time
import os
cmd = """
osascript -e 'tell application "System Events"
    (key code 49)
    end tell'
"""

active = 0

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/simulateKeyPress', methods=['GET', 'POST'])
def signUp():
    #minimize active window
    global active
    if active == 0:
        os.system(cmd)
        active = 2
    else:
        active -= 1
        if active < 0:
            active = 0
    return ""
