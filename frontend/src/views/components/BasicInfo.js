import React from "react";
import "../styles/BasicInfo.css";
import { storage } from "../../models/storage";

const BasicInfo = () => {
  var tid = storage("tid");
  var rmp_link = "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + tid;
  var myResponse = storage("responseData");

  return (
    <div className="basic-info-container">
      <img className="rmp-img" alt="rmp-logo" src="images/rmp-1.png" />
      <br />
      <a href={rmp_link} target="_blank" rel="noreferrer">
        {myResponse.name}
      </a>
      <h2>{myResponse.details}</h2>
      <h1>{myResponse.rating}</h1>
      <h1>{myResponse.overall_difficulty}</h1>
      <h1>{myResponse.take_percentage}</h1>
      <div>
        {myResponse.reviews.map((comment, index) => (
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
