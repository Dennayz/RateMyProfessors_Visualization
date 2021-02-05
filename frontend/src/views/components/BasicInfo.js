import React from "react";
import "../styles/BasicInfo.css";

const BasicInfo = (props) => {
  return <div className="basic-info-container">{props.name}</div>;
};

export default BasicInfo;
