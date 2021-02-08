import { Route, Switch } from "react-router-dom";
import React from "react";
import { Detail } from "./detail";
import { List } from "./list/List";
import { Home } from "./home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/detail"}>
        <Detail />
      </Route>
      <Route path={"/list"}>
        <List />
      </Route>
    </Switch>
  );
};
