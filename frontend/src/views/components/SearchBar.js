import React from "react";
import "../styles/SearchBar.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();

  const fetchData = async () => {
    var tidInput = document.getElementById("tid").value;
    try {
      const resp = await axios.post("/professor", {
        tid: tidInput,
      });
      console.log(resp.data);
      sessionStorage.setItem("responseData", JSON.stringify(resp.data));
      routeChange(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  const routeChange = (data) => {
    let path = null;
    if (Object.keys(data).length) {
      path = `/Professor`;
    } else {
      path = `/Error`;
    }
    history.push(path);
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
    </div>
  );
};

export default SearchBar;
