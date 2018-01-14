import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Movies } from '../movies/containers';

export default () => (
  <Switch>
    <Route path="/movies" component={Movies} />
  </Switch>
);
