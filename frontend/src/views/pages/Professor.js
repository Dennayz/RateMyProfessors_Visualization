import React from "react";
import { useLocation } from "react-router-dom";
import BasicInfo from "../components/BasicInfo";

const Professor = () => {
  const location = useLocation();
  return (
    <>
      <BasicInfo basic={location.state.detail} />
    </>
  );
};

export default Professor;
