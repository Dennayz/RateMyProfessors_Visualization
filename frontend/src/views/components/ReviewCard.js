import React from "react";

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
