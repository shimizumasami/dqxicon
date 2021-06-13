from bottle import response
from controller.base import Controller
from model.color import ColorModel
import json, logging

class ColorController(Controller):
    def index(self):
        color = ColorModel()
        colors = color.all()
        return self.response(colors)

    def create(self, request):
        if request.method != 'POST':
            return self.response({
                'msg': 'create color called from other than POST'
            })

        if not request.json or not 'order' in request.json or not 'code' in request.json or not 'name' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({
                'msg': 'create color received unexpected params'
            })

        color = ColorModel(
            id=None,
            order=request.json['order'],
            code=request.json['code'],
            name=request.json['name']
        )
        color.save()

        return self.response({
            'data': {
                'id'   : color.id,
                'order': color.order,
                'code' : color.code,
                'name' : color.name,
            }
        })

    def edit(self, request, id: str):
        if request.method != 'PUT':
            return self.response({
                'msg': 'edit color called from other than PUT'
            })

        if not request.json or not 'order' in request.json or not 'code' in request.json or not 'name' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({
                'msg': 'edit color received unexpected params'
            })

        color = ColorModel(
            id=id,
            order=request.json['order'],
            code=request.json['code'],
            name=request.json['name']
        )
        color.save()

        return self.response({
            'data': {
                'id'   : color.id,
                'order': color.order,
                'code' : color.code,
                'name' : color.name,
            }
        })

    def delete(self, id: str):
        color = ColorModel(id=id)
        color.delete()

        return self.response({
            'msg': 'delete color called',
            'id' : id,
        })
