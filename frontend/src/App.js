import React, { useState } from "react";
import axios from "axios";

var Sentiment = require("sentiment");

function App() {
  var sentiment = new Sentiment();
  const [commentsList, setCommentsList] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(null);

  const handleButtonclick = async () => {
    var tidInput = document.getElementById("tid").value;
    try {
      const resp = await axios.post("http://127.0.0.1:5000/professor", {
        tid: tidInput,
      });
      console.log(resp.data.reviews);
      setDisplayMessage(resp.data.name);
      setCommentsList(resp.data.reviews);
    } catch (error) {
      console.error("no professor found");
    }
  };

  return (
    <div className="App">
      <input id="tid" className="tid" placeholder="tid=1442290"></input>
      <button onClick={handleButtonclick}>Get Response</button>
      <div>{displayMessage}</div>
      <div>
        {commentsList.map((comment, index) => (
          <div key={index}>
            <section>{comment.comment}</section>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
