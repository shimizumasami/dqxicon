from bottle import response
from controller.base import Controller
import json

class FaceController(Controller):
    def index(self):
        face = {
            'id': 'id',
            'line': '/storage/face_line.png',
            'mask': '/storage/face_mask.png',
        }
        response.headers['Content-Type'] = 'application/json'
        return json.dumps(face)
