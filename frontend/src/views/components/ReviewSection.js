import React from "react";
import "../styles/ReviewSection.css";
import { storage } from "../../models/storage";

const ReviewSecton = () => {
  const reviewData = storage("sentimentMap");
  var haveReviews = true;
  var reviews;
  if (reviewData === null) {
    haveReviews = false;
  } else if (reviewData) {
    reviews = Object.values(reviewData);
    console.log(Object.keys(reviewData));
    console.log(reviews);
  }
  return (
    <div className="review-section-container">
      <div className="review-wrapper">
        <div className="review-header-wrapper">
          <h2 className="review-header">Top Reviews</h2>
        </div>
        <div className="review-section-div">
          {haveReviews
            ? reviews[0].map((comment, index) => (
                <div key={index}>
                  <section>{comment.comment}</section>
                  <br />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ReviewSecton;
