import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { Switch, Route, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Movies from '../../../movies';

injectTapEventPlugin();

export const App = ({ toggle, handleToggle }) => (
  <div>
    <Drawer
      docked={false}
      open={toggle}
      onRequestChange={() => handleToggle(false)}
    >
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={() => handleToggle(!toggle)}
    />
    <Switch>
      <Route path="/movies" component={Movies} />
      <Redirect from="/" to="/movies" />
    </Switch>
  </div>
);

App.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default withState('toggle', 'handleToggle', false)(App);
