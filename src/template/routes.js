import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { Detail } from './detail';
import { Category } from './list/Derive';
import { Home } from './home';
import { Faq } from './extra/Faq';
import { List } from './list/List';
import { Service } from './extra/Service';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <Home />
      </Route>
      <Route path={'/category'}>
        <Category />
      </Route>
      <Route path={'/collections/:id'}>
        <List />
      </Route>
      <Route path={'/faq'}>
        <Faq />
      </Route>
      <Route path={'/service/:id'}>
        <Service />
      </Route>
      <Route path={'/:id'}>
        <Detail />
      </Route>
    </Switch>
  );
};
