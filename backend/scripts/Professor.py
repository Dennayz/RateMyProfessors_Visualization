class Professor:
    def __init__(self, name, rating, details, take_percentage, overall_difficulty, feedback, reviews):
        self._name = name
        self._rating = rating
        self._details = details
        self._take_percentage = take_percentage
        self._overall_difficulty = overall_difficulty
        self._feedback = feedback
        self._reviews = reviews

    def transform_reviews(self):
        review_lst = []
        for item in self._reviews:
            data = {}
            data.update([('course', item[0]),
                         ('time_stamp', item[1]),
                         ('quality', item[2]),
                         ('difficulty', item[3]),
                         ('comment', item[4])])
            review_lst.append(data)
        return review_lst

    def convert_to_json(self):
        data_set = {
            "name": self._name,
            "rating": self._rating,
            "details": self._details,
            "take_percentage": self._take_percentage,
            "overall_difficulty": self._overall_difficulty,
            "feedback": self._feedback,
            "reviews": self.transform_reviews()
        }
        return data_set
