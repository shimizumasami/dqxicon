from bottle import route, run, get, response
import json

@route('/')
def hello():
    return "Hello World!"

@get('/color')
def color():
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
        }
    ]
    response.headers['Content-Type'] = 'application/json'
    return json.dumps(colors)

@get('/skin')
def skin():
    colors = [
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
    return json.dumps(colors)

@get('/eye')
def eye():
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

run(host='0.0.0.0', port=3001, debug=True, reloader=True)
