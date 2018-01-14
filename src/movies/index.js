import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MoviesList } from '../movies/containers';

export default () => (
  <Switch>
    <Route path="/movies" component={MoviesList} />
  </Switch>
);
