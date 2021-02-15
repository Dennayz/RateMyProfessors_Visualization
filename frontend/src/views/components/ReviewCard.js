import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ comment }) => {
  return (
    <div className="comment-container">
      <section>{comment.comment}</section>
      <section>{comment.difficulty}</section>
      <section>{comment.course}</section>
      <section>{comment.time_stamp}</section>
      <section>{comment.quality}</section>
    </div>
  );
};

export default ReviewCard;
