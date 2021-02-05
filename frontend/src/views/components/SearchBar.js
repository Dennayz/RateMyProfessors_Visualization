import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const displayInput = () => {
    var tidInput = document.getElementById("tid").value;
    alert(tidInput);
  };

  return (
    <div className="search-bar-container">
      <img alt="rate my professor logo" src="images/rmp-1.png" />
      <br />
      <label for="tid" className="search-bar-label">
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
      <button className="search-button" onClick={displayInput}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
