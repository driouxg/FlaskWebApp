from flask import Flask
from flask import send_file
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return json.dumps({'4': 5, '6': 7}, sort_keys=True, indent=4)


@app.route("/get_sample_image")
def sample_image():
    return send_file('sample_image.jpg', mimetype='image/jpg')
