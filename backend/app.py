import flask
from flask import Flask, request, jsonify, make_response, abort
from flask_cors import CORS
import requests
import bs4
import lxml
import json
from scripts import scraper

app = Flask(__name__)
CORS(app)

@app.route('/professor', methods=['GET'])
def process_professor():
    # # See if request is in fact json
    # if request.is_json:
    #     data = request.get_json()
    #     try:
    #         # Check if it is valid by loading it into json module
    #         json_data = request.get_json(data)
    #     except ValueError as e:
    #         # Return invalid json
    #         return make_response('response is invalid json', status='400')
    # else:
    #     # only accepts json data
    #     return make_response('response data is not json', status='400')
    #
    # # tid = json_data.get('tid')
    tid = request.args.get('tid')
    response_object = scraper.scrape_url(tid)
    return response_object


if __name__ == '__main__':
    app.run()




