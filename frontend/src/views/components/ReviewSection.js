import React, { useState } from "react";
import "../styles/ReviewSection.css";
import { storage } from "../../models/storage";
import DisplayComments from "../../utils/DisplayComments";

const ReviewSecton = () => {
  const reviewData = storage("sentimentMap");
  var haveReviews = true;
  if (reviewData === null) {
    haveReviews = false;
  }

  const [currentComments, setCurrentComments] = useState([]);
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
              id="sentiment-options"
              name="sentiment-options"
              onChange={changeComments}
            >
              <option value="" id="unselected" selected disabled hidden>
                --Select--
              </option>
              <option value="positive">Positive</option>
              <option value="neutral">Neutral</option>
              <option value="negative">Negative</option>
            </select>
          </div>
        </div>
        <ul className="review-section-div">
          {haveReviews ? <DisplayComments comments={currentComments} /> : ""}
        </ul>
      </div>
    </div>
  );
};

export default ReviewSecton;

// {haveReviews
//     ? reviews[0].map((comment, index) => (
//         <div key={index}>
//           <section>{comment.comment}</section>
//           <br />
//         </div>
//       ))
//     : ""}
