import flask
from flask import Flask, request, jsonify, make_response, abort
from flask_cors import CORS
import requests
import bs4
import lxml
import json
from scripts import scraper
from models.database import Database

app = Flask(__name__)
CORS(app)

@app.route('/professor', methods=['GET', 'POST'])
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
    if response_object:
        db = Database()
        db.insert_professor(tid, response_object.get("name"), response_object.get("details"))
    return response_object


@app.route('/api/history', methods=['GET'])
def fetch_all_professors():
    db = Database()
    result = db.get_all_professors()
    return result


@app.route('/api/delete/<string:tid>', methods=['DELETE'])
def remove_professor(tid):
    db = Database()
    db.delete_professor_by_tid(tid)
    return "deleted successfully!"


if __name__ == '__main__':
    app.run()




# POST
# if tid already exists, call database to patch the datetime
# else insert into database
# GET
# just fetch the tid and scrape the web