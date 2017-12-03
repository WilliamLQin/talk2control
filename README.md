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
If you inspect element at the live website, you can still see the output on the console of what the voice recognition library is outputting. When it matches up with your keyword, it will cause a key press on the server. <br>
Currently, the key press is set to the space bar and only works with one key word. <br>
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

## Customization

Changing the key that is pressed when the keyword is identified is easy. <br>
Open the app.py file in the root directory of the project. <br>
Modify line 6 of the file:

```
  (key code 49)
```

Switch to a different keycode to press a different button. Go to this ![complete list of keycodes](http://eastmanreference.com/complete-list-of-applescript-key-codes/) to find out which keycodes refer to which keys. <br>
<br>
For example...

```
  (key code 124)
```

will press the right key whenever the keyword is heard.<br>
<br>
Currently, you can only map one word to one key.
