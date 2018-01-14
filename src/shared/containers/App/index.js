import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Movies from '../../../movies';

injectTapEventPlugin();

export default () => (
  <div>
    <Drawer open>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Switch>
      <Route path="/movies" component={Movies} />
      <Redirect from="/" to="/movies" />
    </Switch>
  </div>
);
