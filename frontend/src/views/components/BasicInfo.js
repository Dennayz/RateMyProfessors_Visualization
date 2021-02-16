import React, { useRef, useEffect } from "react";
import "../styles/BasicInfo.css";
import { storage } from "../../models/storage";
import lottie from "lottie-web";

const BasicInfo = () => {
  var tid = storage("tid");
  var rmp_link = "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + tid;
  var myResponse = storage("responseData");
  const animate_profile = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animate_profile.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./animate_profile.json"),
    });
  }, []);

  return (
    <div className="basic-info-container">
      <div className="animate-profile" ref={animate_profile}></div>
      <h1>{myResponse.name}</h1>
      <div className="prof-link-container">
        <a
          href={rmp_link}
          target="_blank"
          rel="noreferrer"
          className="prof-link"
        >
          Link
          <span className="external">
            <i className="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>
      <h2>{myResponse.details}</h2>
      <div className="stat-wrapper">
        <div className="stat-item">
          <span className="resp-status">{myResponse.rating}</span>
          <span className="status-label">Rating</span>
        </div>
        <div className="stat-item">
          <span className="resp-status">{myResponse.overall_difficulty}</span>
          <span className="status-label">Difficulty</span>
        </div>
        <div className="stat-item">
          <span className="resp-status">{myResponse.take_percentage}</span>
          <span className="status-label">Take Percentage</span>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
