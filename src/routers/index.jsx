import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';

const Routers = () => (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
);

export { Routers };
