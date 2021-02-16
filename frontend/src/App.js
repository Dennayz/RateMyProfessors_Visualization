import React from "react";
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
