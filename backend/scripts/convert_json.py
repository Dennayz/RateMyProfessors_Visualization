import json

def convert_json(name, rating, details, take_percentage, overall_difficulty, feedback, reviews):

    review_lst = []
    for item in reviews:
        data = {}
        data.update([('course', item[0]),
                     ('time_stamp', item[1]),
                     ('quality', item[2]),
                     ('difficulty', item[3]),
                     ('comment', item[4])])
        review_lst.append(data)

    data_set = {
        "name": name,
        "rating": rating,
        "details": details,
        "take_percentage": take_percentage,
        "overall_difficulty": overall_difficulty,
        "feedback": feedback,
        "reviews": review_lst
    }

    json_converted = json.dumps(data_set, indent=3)

    return json_converted
