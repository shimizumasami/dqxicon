from bottle import run, get, post, route, response, request
from controller.color import ColorController
from controller.skin import SkinController
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
def color_edit(id):
    color = ColorController()
    return color.edit(request, id)

@get('/skin')
def skin_index():
    skin = SkinController()
    return skin.index()

@get('/eye')
def eye_index():
    eye = EyeController()
    return eye.index()

def main():
    jst = timezone(timedelta(hours=+9), 'JST')
    now = datetime.now(jst)
    log_folder = ('storage/log/')
    log_file = now.strftime('access_%Y%m%d.log')
    os.makedirs(log_folder, exist_ok=True)

    logger = logging.getLogger(__name__)
    logging.basicConfig(filename=log_folder + log_file, encoding='utf-8', level=logging.DEBUG)

    for name in ['boto3', 'botocore', 'urllib3']:
        logging.getLogger(name).setLevel(logging.WARNING)

    run(host='0.0.0.0', port=3001, debug=True, reloader=True)

if __name__ == '__main__':
    main()
