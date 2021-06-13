from bottle import response
from controller.base import Controller
from model.skin import SkinModel
import json

class SkinController(Controller):
    def index(self):
        skin = SkinModel()
        skins = skin.all()
        return self.response(skins)

    def create(self, request):
        if request.method != 'POST':
            return self.response({
                'msg': 'create skin called from other than POST'
            })

        if not request.json or not 'order' in request.json or not 'code' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({
                'msg': 'create skin received unexpected params'
            })
        
        skin = SkinModel(
            id=None,
            order=request.json['order'],
            code=request.json['code']
        )
        skin.save()

        return self.response({
            'data': {
                'id'   : skin.id,
                'order': skin.order,
                'code' : skin.code,
            }
        })

    def edit(self, request, id: str):
        if request.method != 'PUT':
            return self.response({
                'msg': 'edit skin called from other than PUT'
            })

        if not request.json or not 'order' in request.json or not 'code' in request.json:
            logging.error('[%s] request json: %s', __name__, request.json)
            return self.response({
                'msg': 'edit skin received unexpected params'
            })

        skin = SkinModel(
            id=id,
            order=request.json['order'],
            code=request.json['code'],
        )
        skin.save()

        return self.response({
            'data': {
                'id'   : skin.id,
                'order': skin.order,
                'code' : skin.code,
            }
        })

    def delete(self, id: str):
        skin = SkinModel(id=id)
        skin.delete()

        return self.response({
            'msg': 'delete skin called',
            'id' : id,
        })
