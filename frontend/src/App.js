import React from "react";
import axios from "axios";
import { HashRouter, Switch, Route } from "react-router-dom";
import Search from "./views/pages/Search";
import Professor from "./views/pages/Professor";
import Error from "./views/pages/Error";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/Professor" component={Professor} />
          <Route path="/Error" component={Error} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;

// var Sentiment = require("sentiment");

// var sentiment = new Sentiment();
//   const [commentsList, setCommentsList] = useState([]);
//   const [displayMessage, setDisplayMessage] = useState(null);

// const handleButtonclick = async () => {
//   var tidInput = document.getElementById("tid").value;
//   try {
//     const resp = await axios.post("/professor", {
//       tid: tidInput,
//     });
//     console.log(resp.data.reviews);
//     setDisplayMessage(resp.data.name);
//     setCommentsList(resp.data.reviews);
//   } catch (error) {
//     console.error("no professor found");
//   }
// };

//   return (
//     <div className="App">
//       <input id="tid" className="tid" placeholder="tid=1442290"></input>
//       <button onClick={handleButtonclick}>Get Response</button>
//       <div>{displayMessage}</div>
//       <div>
//         {commentsList.map((comment, index) => (
//           <div key={index}>
//             <section>{comment.comment}</section>
//             <br />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
