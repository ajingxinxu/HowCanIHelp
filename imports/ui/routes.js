
import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Org from './orgview.js';
import Search from './search.js';


export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route exact path="/organization" component={Org}/>
      <Route exact path="/search" component={Search}/>
    </Switch>
  </Router>
);