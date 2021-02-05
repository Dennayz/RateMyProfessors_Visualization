import React, { useState, useEffect } from "react";
import "../styles/SearchBar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Professor from "../pages/Professor";

const SearchBar = () => {
  const history = useHistory();

  const fetchData = async () => {
    var tidInput = document.getElementById("tid").value;
    try {
      const resp = await axios.post("/professor", {
        tid: tidInput,
      });
      if (Object.keys(resp.data).length) {
        console.log(resp.data);
        routeToProfessor(resp.data);
      } else {
        routeToError();
      }
    } catch (error) {
      routeToError();
      console.error("no professor found");
    }
  };

  const routeToProfessor = (data) => {
    let path = `/Professor`;
    history.push({
      pathname: path,
      state: { detail: data },
    });
  };

  const routeToError = () => {
    let path = `/Error`;
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
