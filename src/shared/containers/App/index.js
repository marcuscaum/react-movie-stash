import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from '../../../movies';

export default () => (
  <Switch>
    <Route path="/movies" component={Movies} />
    <Redirect from="/" to="/movies" />
  </Switch>
);
