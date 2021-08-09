from bottle import run, get, post, route, response, request
from controller.color import ColorController
from controller.skin import SkinController
from controller.face import FaceController
from controller.eye import EyeController
from datetime import datetime, timedelta, timezone
import logging, os, json

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

@route('/color/<id>', method=['PUT', 'OPTIONS'])
def color_edit(id: str):
    color = ColorController()
    return color.edit(request, id)

@route('/color/<id>', method=['DELETE'])
def color_delete(id: str):
    color = ColorController()
    return color.delete(id)

@get('/skin')
def skin_index():
    skin = SkinController()
    return skin.index()

@route('/skin', method=['POST', 'OPTIONS'])
def skin_create():
    skin = SkinController()
    return skin.create(request)

@route('/skin/<id>', method=['PUT', 'OPTIONS'])
def skin_edit(id: str):
    skin = SkinController()
    return skin.edit(request, id)

@route('/skin/<id>', method=['DELETE'])
def skin_delete(id: str):
    skin = SkinController()
    return skin.delete(id)

@get('/face')
def face_index():
    face = FaceController()
    return face.index()

@get('/eye')
def eye_index():
    eye = EyeController()
    return eye.index()

def main():
    jst = timezone(timedelta(hours=+9), 'JST')
    now = datetime.now(jst)
    log_folder = ('storage/log/')
    os.makedirs(log_folder, exist_ok=True)

    # アプリケーションログ設定
    app_logger = logging.getLogger('app')
    app_log_file = now.strftime('app_%Y%m%d.log')
    logging.basicConfig(filename=log_folder + app_log_file, encoding='utf-8', level=logging.DEBUG)

    # アクセスログ設定
    access_logger = logging.getLogger('access')
    access_log_file = now.strftime('access_%Y%m%d.log')
    access_file_handler = logging.FileHandler(log_folder + access_log_file)
    access_logger.addHandler(access_file_handler)

    # データベースログ設定
    db_logger = logging.getLogger('db')
    db_log_file = now.strftime('db_%Y%m%d.log')
    db_file_handler = logging.FileHandler(log_folder + db_log_file)
    db_logger.addHandler(db_file_handler)

    for name in ['boto3', 'botocore', 'urllib3']:
        logging.getLogger(name).setLevel(logging.WARNING)

    run(host='0.0.0.0', port=3001, debug=True, reloader=True)

if __name__ == '__main__':
    main()
