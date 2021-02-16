import React from "react";
import ReviewCard from "../views/components/ReviewCard";
import "../views/styles/ReviewCard.css";

const DisplayComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <li className="list-item" key={index}>
          <ReviewCard comment={comment} />
          <br />
        </li>
      ))}
    </>
  );
};

export default DisplayComments;
