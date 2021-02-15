import React from "react";
import "../styles/ReviewCard.css";

const ReviewCard = ({ comment }) => {
  return (
    <>
      <section>{comment.comment}</section>
      <section>{comment.difficulty}</section>
      <section>{comment.course}</section>
      <section>{comment.time_stamp}</section>
      <section>{comment.quality}</section>
    </>
  );
};

export default ReviewCard;
