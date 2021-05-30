from bottle import response
from controller.base import Base
import json

class Eye(Base):
    def index(self):
        eyes = [
            {
                'order': 1,
                'line': '/storage/eye_line_1.png',
                'mask': '/storage/eye_mask_1.png',
            },
            {
                'order': 2,
                'line': '/storage/eye_line_2.png',
                'mask': '/storage/eye_mask_2.png',
            },
        ]
        response.headers['Content-Type'] = 'application/json'
        return json.dumps(eyes)
