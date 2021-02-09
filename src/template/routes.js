import { Route, Switch } from "react-router-dom";
import React from "react";
import { Detail } from "./detail";
import { Category, AllProducts } from "./list/Derive";
import { Home } from "./home";
import { ContactUs } from "./extra/ContactUs";
import { Faq } from "./extra/Faq";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/detail"}>
        <Detail />
      </Route>
      <Route path={"/category"}>
        <Category />
      </Route>
      <Route path={"/collections"}>
        <AllProducts />
      </Route>
      <Route path={"/contact-us"}>
        <ContactUs />
      </Route>
      <Route path={"/faq"}>
        <Faq />
      </Route>
    </Switch>
  );
};
