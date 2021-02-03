import itertools
from pprint import pprint
import pandas as pd
import requests
import bs4
from scripts import convert_json

def main_test():
    # tid_input = 20266
    tid_input = 1442291
    # tid_input = 2577045
    # tid_input = 13305
    # tid_input = 2612636
    tid_input = 2629157
    comments = []
    total_review_list = []

    res = requests.get("https://www.ratemyprofessors.com/ShowRatings.jsp?tid={}".format(tid_input))
    if res.status_code == 200:
        print("good website")
    else:
        print("not good website")
        comments.append("hello")
        comments.append("world")
        return comments

    soup = bs4.BeautifulSoup(res.text, 'lxml')

    prof_rating = soup.find(class_="RatingValue__AvgRatingWrapper-qw8sqy-3 bIUJtl")
    prof_name = soup.find(class_="NameTitle__Name-dowf0z-0 cfjPUG")
    prof_details = soup.find(class_="NameTitle__Title-dowf0z-1 iLYGwn")

    prof_feedback = soup.find_all(class_="FeedbackItem__FeedbackNumber-uof32n-1 kkESWs")
    if len(prof_feedback) > 1:
        prof_take_percentage = prof_feedback[0].text
        prof_difficulty = prof_feedback[1].text
    elif len(prof_feedback) == 1:
        last_char = prof_feedback[0].text[-1]
        if last_char == "%":
            prof_take_percentage = prof_feedback[0].text
            prof_difficulty = "N/A"
        else:
            prof_difficulty = prof_feedback[0].text
            prof_take_percentage = "N/A"
    else:
        prof_take_percentage = "N/A"
        prof_difficulty = "N/A"

    prof_tags = soup.find(class_="TeacherTags__TagsContainer-sc-16vmh1y-0 dbxJaW")
    if prof_tags:
        prof_tags_find = prof_tags.find_all("span", {"class": "Tag-bs9vf4-0 hHOVKF"})
        prof_tags_list = [tag.text for tag in prof_tags_find]
    else:
        prof_tags_list = []

    review_list_container = soup.find("ul", {"id": "ratingsList"})
    if review_list_container:
        review_list = review_list_container.find_all(class_="Rating__StyledRating-sc-1rhvpxz-1 jcIQzP")

        courses = [item.find(class_="RatingHeader__StyledClass-sc-1dlkqw1-2 gxDIt").get_text() for item in review_list]
        comments = [item.find(class_="Comments__StyledComments-dzzyvm-0 gRjWel").get_text() for item in review_list]
        time_stamps = [item.find(
            class_="TimeStamp__StyledTimeStamp-sc-9q2r30-0 bXQmMr RatingHeader__RatingTimeStamp-sc-1dlkqw1-3 BlaCV").get_text()
                       for item in review_list]
        qualities = [item.find(
            class_=["RatingValues__RatingValue-sc-6dc747-3 lbaFTo", "RatingValues__RatingValue-sc-6dc747-3 kLWEWI",
                    "RatingValues__RatingValue-sc-6dc747-3 gQotpy"]).get_text() for item in review_list]
        difficulties = [item.find(class_="RatingValues__RatingValue-sc-6dc747-3 jILzuI").get_text() for item in
                        review_list]

        for (course, time_stamp, quality, difficulty, comment) in itertools.zip_longest(courses, time_stamps, qualities,
                                                                                        difficulties, comments):
            total_review_list.append([course, time_stamp, quality, difficulty, comment])

    json_object = convert_json.convert_json(prof_name.text, prof_rating.text, prof_details.text, prof_take_percentage,
                                            prof_difficulty, prof_tags_list, total_review_list)

    print(json_object)
    return "hello"


if __name__ == "__main__":
    print(main_test())

