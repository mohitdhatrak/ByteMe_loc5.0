from flask import Flask, request, jsonify
from flask_cors import CORS
from surprise import accuracy, Dataset, SVD
from surprise.model_selection import KFold
from inference import prediction

app = Flask(__name__)

CORS(app)

@app.post('/predict')
def predict():
    text = request.get_json().get('message')
    # check for valid text
    response = get_response(text)
    message = {"recommendation":response}

    return jsonify(message)

if __name__ == '__main__':
    app.run(debug=True) 