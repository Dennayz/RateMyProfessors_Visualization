import React, { useRef, useEffect } from "react";
import "../styles/ErrorMessage.css";
import lottie from "lottie-web";

const ErrorMessage = () => {
  const animate_error = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animate_error.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animate_error.json"),
    });
  }, []);

  return (
    <div className="error-message-container">
      <div className="animate-container" ref={animate_error}></div>
      <h1>Professor Not Found</h1>
    </div>
  );
};

export default ErrorMessage;
