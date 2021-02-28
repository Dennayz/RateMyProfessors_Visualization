import React, { useState, useRef, useEffect } from "react";
import "../styles/SearchBar.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import lottie from "lottie-web";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const animate_loading = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (!loading) {
      return;
    }
    lottie.loadAnimation({
      container: animate_loading.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animate_loading.json"),
    });
  }, [loading]);

  const fetchData = async () => {
    setLoading(true);
    var tidInput = document.getElementById("tid").value;
    sessionStorage.clear();
    try {
      const resp = await axios.get("/professor", { params: { tid: tidInput } });
      sessionStorage.setItem("responseData", JSON.stringify(resp.data));
      sessionStorage.setItem("tid", tidInput);
      routeChange(resp.data, tidInput);
    } catch (error) {
      console.error(error);
    }
  };

  const routeChange = (data, tid) => {
    let pathname = null;
    if (Object.keys(data).length) {
      pathname = "/Professor";
    } else {
      pathname = `/Error`;
    }
    history.push({
      pathname,
      search: "?" + new URLSearchParams({ tid: tid }).toString(),
    });
  };

  return (
    <div className="search-bar-container">
      <img alt="rate my professor logo" src="images/rmp-1.png" />
      <br />
      <label htmlFor="tid" className="search-bar-label">
        Find Your Professor
      </label>
      <p>(Insert professor's tid)</p>
      <input
        name="tid"
        id="tid"
        className="search-bar"
        placeholder="ex: 1442290"
        type="text"
      ></input>
      <br />
      <button className="search-button" onClick={fetchData}>
        Search
      </button>
      <div className="animate-loading" ref={animate_loading}></div>
    </div>
  );
};

export default SearchBar;
