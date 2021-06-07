from bottle import response
from controller.base import Controller
from model.color import ColorModel
import json, logging

class ColorController(Controller):
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
        if request.method != 'POST':
            return self.response({'msg': 'create color called from other than POST'})

        if not request.json or not 'order' in request.json or not 'code' in request.json or not 'code' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({'msg': 'create color received unexpected params'})

        color = ColorModel(None, request.json['order'], request.json['code'], request.json['name'])
        color.save()

        return self.response({
            'data': {
                'id'   : color.id,
                'order': color.order,
                'code' : color.code,
                'name' : color.name,
            }
        })

    def edit(self, request, id):
        if request.method != 'PUT':
            return self.response({'msg': 'edit color called from other than PUT'})

        if not request.json or not 'order' in request.json or not 'code' in request.json or not 'code' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({'msg': 'edit color received unexpected params'})

        color = ColorModel(id, request.json['order'], request.json['code'], request.json['name'])
        color.save()

        return self.response({
            'data': {
                'id'   : color.id,
                'order': color.order,
                'code' : color.code,
                'name' : color.name,
            }
        })
