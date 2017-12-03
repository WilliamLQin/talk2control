# Talk2Control.tech

![alt icon](https://raw.githubusercontent.com/WilliamLQin/talk2control/master/static/t2c.png)

Talk to control tech!
<br>
<br>
Talk2Control.tech is a voice activated keyboard input web application. <br>
It aims to allow you to navigate a slideshow or animation with just your voice, allowing for slides to sync perfectly with you as you speak. <br>

## Current State of Project

Talk2Control.tech is currently requires specific conditions to function properly. <br>
You can see the working project at ![here](https://talk2control.tech), but the way the code works causes you to cause key presses on the <strong>server</strong> rather than your computer. <br>
As such, it is recommended to create clone of this project and run it on localhost to get it to work. <br>
<br>
Please note, Talk2Control.tech currently only works on Mac OS X. <br>

## Getting Started

This project uses Flask to run the Python backend code. <br>
You'll need Python installed on your computer. Head to ![Python](https://www.python.org/downloads/) to download it if you don't have it. <br>
<br>
Clone the project and navigate to the directory in terminal. <br>
<br>
Install Flask:

```
pip install Flask
```

<br>
Set the PATH to the app.py:

```
export FLASK_APP=app.py
```

<br>
Now, whenever you want to run the server on localhost, simply enter:

```
flask run
```

<br>

If you encounter any issues, please consult the Flask documentation to get it set up. <br>
