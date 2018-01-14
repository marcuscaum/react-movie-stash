import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationBar = ({ toggleMenu, menuOpened }) => (
  <div>
    <AppBar
      title="Title"
      onLeftIconButtonClick={toggleMenu}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Drawer
      open={menuOpened}
      docked={false}
      onRequestChange={toggleMenu}
    >
      <Link to="/movies">
        <MenuItem> Movies </MenuItem>
      </Link>
    </Drawer>
  </div>
);

NavigationBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuOpened: PropTypes.bool.isRequired,
};
