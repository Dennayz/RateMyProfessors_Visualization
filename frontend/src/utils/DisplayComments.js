import React from "react";
import ReviewCard from "../views/components/ReviewCard";

const DisplayComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <li key={index}>
          <ReviewCard comment={comment} />
          <br />
        </li>
      ))}
    </>
  );
};

export default DisplayComments;
