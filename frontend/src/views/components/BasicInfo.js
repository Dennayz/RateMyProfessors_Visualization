import React from "react";
import "../styles/BasicInfo.css";

const BasicInfo = () => {
  var myData = sessionStorage.getItem("responseData");
  myData = JSON.parse(myData);
  return (
    <div className="basic-info-container">
      <h1>{myData.name}</h1>
      <p>{myData.details}</p>
      <h1>{myData.rating}</h1>
      <h1>{myData.overall_difficulty}</h1>
      <h1>{myData.take_percentage}</h1>
      <div>
        {myData.reviews.map((comment, index) => (
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
