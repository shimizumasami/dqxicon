from bottle import response
import json

class Skin:
    def index(self):
        skins = [
            {
                'order': 1,
                'code': '#FFFAFC',
            },
            {
                'order': 2,
                'code': '#FFEDF5',
            },
            {
                'order': 3,
                'code': '#FADFEA',
            },
            {
                'order': 4,
                'code': '#F4E4F4',
            },
            {
                'order': 5,
                'code': '#DBBCDB',
            }
        ]
        response.headers['Content-Type'] = 'application/json'
        return json.dumps(skins)
