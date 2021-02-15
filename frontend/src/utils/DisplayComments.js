import React from "react";

const DisplayComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <li key={index}>
          <section>{comment.comment}</section>
          <br />
        </li>
      ))}
    </>
  );
};

export default DisplayComments;
