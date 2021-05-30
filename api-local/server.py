from bottle import run, get, post, route, response, request
import json
from controller.color import Color
from controller.skin import Skin
from controller.eye import Eye

@get('/')
def hello():
    return "Hello World!"

@get('/color')
def color_index():
    color = Color()
    return color.index()

@route('/color', method=['POST', 'OPTIONS'])
def color_create():
    color = Color()
    return color.create(request)

@route('/color/<id:int>', method=['PUT', 'OPTIONS'])
def color_edit(id):
    color = Color()
    return color.edit(request, id)

@get('/skin')
def skin_index():
    skin = Skin()
    return skin.index()

@get('/eye')
def eye_index():
    eye = Eye()
    return eye.index()

run(host='0.0.0.0', port=3001, debug=True, reloader=True)
