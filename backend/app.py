from flask import Flask, request, jsonify, make_response, abort
from flask_cors import CORS
from models.database import Database
from scripts import scraper

app = Flask(__name__)
CORS(app)

@app.route('/professor', methods=['GET', 'POST'])
def process_professor():
    """
    handles user search for professors and professors obtained from the history table
    :return: the response object containing all info scraped from Rate My Professors
    """
    if request.method == "POST":
        req = request.get_json()
        tid = req.get('tid')
        response_object = scraper.scrape_url(tid)
        if response_object:
            db = Database()
            db.insert_professor(tid, response_object.get("name"), response_object.get("details"))
        return response_object
    else:
        tid = request.args.get('tid')
        response_object = scraper.scrape_url(tid)
        return response_object


@app.route('/api/history', methods=['GET'])
def fetch_all_professors():
    """
    get all the professors from the database
    :return: list of professors
    """
    db = Database()
    result = db.get_all_professors()
    return result


@app.route('/api/delete/<string:tid>', methods=['DELETE'])
def remove_professor(tid):
    """
    remove the specified professor from history table
    :param tid: specified professor tid to delete
    :return: success message
    """
    db = Database()
    db.delete_professor_by_tid(tid)
    return "deleted successfully!"


if __name__ == '__main__':
    app.run()
