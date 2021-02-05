import React from "react";
import "../styles/BasicInfo.css";

const BasicInfo = (props) => {
  return (
    <div className="basic-info-container">
      <h1>{props.basic.name}</h1>
      <p>{props.basic.details}</p>
      <h1>{props.basic.rating}</h1>
      <h1>{props.basic.overall_difficulty}</h1>
      <h1>{props.basic.take_percentage}</h1>
      <div>
        {props.basic.reviews.map((comment, index) => (
          <div key={index}>
            <section>{comment.comment}</section>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicInfo;
