from bottle import HTTPResponse
from datetime import datetime, timedelta, timezone
import logging, inspect, json

class Controller:
    def __init__(self):
        self.called = inspect.stack()[1].function
        self.jst = timezone(timedelta(hours=+9), 'JST')

        logging.info('[%s START] %s', self.called, datetime.now(self.jst))

    def __del__(self):
        logging.info('[%s END] %s', self.called, datetime.now(self.jst))

    def response(self, data):
        res = HTTPResponse(status=200, body=json.dumps(data))
        res.set_header('Content-Type', 'application/json')
        res.set_header('Access-Control-Allow-Origin', '*')
        res.set_header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
        res.set_header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token, Authorization')
        res.set_header('Access-Control-Allow-Credentials', 'true')
        return res
