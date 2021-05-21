from bottle import response
import json

class Color:
    def index(self):
        colors = [
            {
                'order': 1,
                'name': 'サンゴールド',
                'code': '#FFEA77',
            },
            {
                'order': 2,
                'name': 'レモン',
                'code': '#F5FF77',
            },
            {
                'order': 3,
                'name': 'カスタード',
                'code': '#FFF577',
            },
            {
                'order': 4,
                'name': 'イエロー',
                'code': '#F4EB1B',
            },
            {
                'order': 5,
                'name': 'ゴールド',
                'code': '#EDE2A4',
            },
        ]
        response.headers['Content-Type'] = 'application/json'
        return json.dumps(colors)
