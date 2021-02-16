import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ comment }) => {
  return (
    <div className="comment-container">
      <div className="heading-wrapper">
        <span className="heading-div">{comment.course}</span>
        <span className="heading-div-second">{comment.quality}</span>
        <span className="heading-div-third">{comment.difficulty}</span>
        <span className="heading-div-fourth">{comment.time_stamp}</span>
      </div>
      <section className="comment-section">{comment.comment}</section>
    </div>
  );
};

export default ReviewCard;
