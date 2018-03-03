import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'recompose';
import { Switch, Route, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';

import { Movies } from '../../../movies/containers/';
import { DrawerStyled } from './index.styled';

injectTapEventPlugin();

export const App = ({ toggle, handleToggle }) => (
  <div>
    <DrawerStyled
      docked={false}
      open={toggle}
      onRequestChange={() => handleToggle(false)}
      overlayStyle={{
        backgroundColor: 'rgba(66, 28, 28, 0.5)',
      }}
    >
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </DrawerStyled>
    <Switch>
      <Route path="/movies" render={() => <Movies handleToggle={handleToggle} toggle={toggle} />} />
      <Redirect from="/" to="/movies" />
    </Switch>
  </div>
);

App.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default withState('toggle', 'handleToggle', false)(App);
