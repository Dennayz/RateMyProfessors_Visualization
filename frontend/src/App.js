import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Search from "./views/pages/Search";
import Professor from "./views/pages/Professor";
import Error from "./views/pages/Error";
import History from "./views/pages/History";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/professor" component={Professor} />
          <Route path="/error" component={Error} />
          <Route path="/history" component={History} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
