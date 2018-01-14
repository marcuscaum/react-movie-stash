import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Movies from '../../../movies';
import { Navigation } from '../';

export const App = props => (
  <div>
    <Navigation {...props} />
    <Switch>
      <Route path="/movies" component={Movies} />
      <Redirect from="/" to="/movies" />
    </Switch>
  </div>
);

