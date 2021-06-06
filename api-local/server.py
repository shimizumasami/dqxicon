from bottle import run, get, post, route, response, request
import json
from controller.color import ColorController
from controller.skin import SkinController
from controller.eye import EyeController

@get('/')
def hello():
    return "Hello World!"

@get('/color')
def color_index():
    color = ColorController()
    return color.index()

@route('/color', method=['POST', 'OPTIONS'])
def color_create():
    color = ColorController()
    return color.create(request)

@route('/color/<id:int>', method=['PUT', 'OPTIONS'])
def color_edit(id):
    color = ColorController()
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
