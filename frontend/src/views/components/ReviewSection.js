import React, { useState } from "react";
import "../styles/ReviewSection.css";
import { storage } from "../../models/storage";
import DisplayComments from "../../utils/DisplayComments";

const ReviewSecton = () => {
  const [currentComments, setCurrentComments] = useState([]);
  const reviewData = storage("sentimentMap");
  var haveReviews = true;
  var availableSentiment = [];

  if (reviewData === null) {
    haveReviews = false;
  } else {
    availableSentiment = Object.keys(reviewData);
  }

  const changeComments = () => {
    var selectedValue = document.getElementById("sentiment-options");
    if (selectedValue.value === "positive") {
      setCurrentComments(reviewData.positive);
    } else if (selectedValue.value === "neutral") {
      setCurrentComments(reviewData.neutral);
    } else {
      setCurrentComments(reviewData.negative);
    }
  };

  return (
    <div className="review-section-container">
      <div className="review-wrapper">
        <div className="review-header-wrapper">
          <h2 className="review-header">Top Reviews</h2>
          <div className="sentiment-options-container" id="options-container">
            <label htmlFor="sentiment-options">By: </label>
            <select
              defaultValue={"--Select--"}
              id="sentiment-options"
              name="sentiment-options"
              onChange={changeComments}
            >
              <option value="--Select--" id="unselected" disabled>
                --Select--
              </option>
              {availableSentiment.map((dropdown, index) => (
                <option value={dropdown} key={index}>
                  {dropdown}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="review-section-wrapper">
          <ul className="review-section-list">
            {haveReviews ? <DisplayComments comments={currentComments} /> : ""}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewSecton;
