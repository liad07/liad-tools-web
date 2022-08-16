from markupsafe import escape
from flask import Flask, abort
from liadtools import series

app = Flask(__name__)


@app.route('/')
@app.route('/index/')
def hello():
    return '<h1>Liad Tools</h1>'


@app.route('/about/')
def about():
    return '<h3>This is a Flask web application.</h3>'

@app.route('/sdarot/<sidra>/')
def capitalize(sidra):
    d='<center><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">' \
      '<a href="{}">'.format(series(sidra))
    d+='<button type="button" class="btn btn-primary">{}</button> </center>'
    return d.format((sidra))

@app.route('/sraetim/<sratim>/')
def add(n1):
    return '' \
           '<button type="button" src="{}"></button>'.format(n1)

@app.route('/youtube/<link>/')
def youtube(link):
    return ""
app.run()