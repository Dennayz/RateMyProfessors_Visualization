import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ comment }) => {
  var qualityColor,
    difficultyColor = null;

  if (comment.quality >= 0 && comment.quality < 3) {
    qualityColor = "red";
  } else if (comment.quality > 3) {
    qualityColor = "green";
  } else {
    qualityColor = "rgb(255,183,0)";
  }

  if (comment.difficulty >= 0 && comment.difficulty < 3) {
    difficultyColor = "green";
  } else if (comment.difficulty > 3) {
    difficultyColor = "red";
  } else {
    difficultyColor = "rgb(255,183,0)";
  }
  return (
    <div className="comment-container">
      <div className="heading-wrapper">
        <span className="heading-div">{comment.course}</span>
        <div className="quality-div">
          <span className="subheader">Quality: </span>
          <span className="heading-div-second" style={{ color: qualityColor }}>
            {comment.quality}
          </span>
        </div>
        <div className="difficulty-div">
          <span className="subheader">Difficulty: </span>
          <span
            className="heading-div-third"
            style={{ color: difficultyColor }}
          >
            {comment.difficulty}
          </span>
        </div>
        <span className="heading-div-fourth">{comment.time_stamp}</span>
      </div>
      <section className="comment-section">{comment.comment}</section>
    </div>
  );
};

export default ReviewCard;
