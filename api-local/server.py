from bottle import route, run, get, response
import json
from controller.color import Color
from controller.skin import Skin
from controller.eye import Eye

@route('/')
def hello():
    return "Hello World!"

@get('/color')
def color():
    color = Color()
    return color.index()

@get('/skin')
def skin():
    skin = Skin()
    return skin.index()

@get('/eye')
def eye():
    eye = Eye()
    return eye.index()

run(host='0.0.0.0', port=3001, debug=True, reloader=True)
