import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Home } from "./home";
import { Detail } from "./detail";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/detail"}>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};
