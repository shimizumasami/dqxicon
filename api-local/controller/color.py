from bottle import response
from controller.base import Controller
import json

class Color(Controller):
    def index(self):
        colors = [
            {
                'id': 1,
                'order': 1,
                'name': 'サンゴールド',
                'code': '#FFEA77',
            },
            {
                'id': 2,
                'order': 2,
                'name': 'レモン',
                'code': '#F5FF77',
            },
            {
                'id': 3,
                'order': 3,
                'name': 'カスタード',
                'code': '#FFF577',
            },
            {
                'id': 4,
                'order': 4,
                'name': 'イエロー',
                'code': '#F4EB1B',
            },
            {
                'id': 5,
                'order': 5,
                'name': 'ゴールド',
                'code': '#EDE2A4',
            },
        ]
        return self.response(colors)

    def create(self, request):
        return self.response({'msg': 'create color'})

    def edit(self, request, id):
        return self.response({'msg': 'edit color'})
