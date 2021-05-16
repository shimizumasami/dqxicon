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


run(host='0.0.0.0', port=3001, debug=True, reloader=True)
