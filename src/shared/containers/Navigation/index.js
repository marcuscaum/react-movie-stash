import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { compose, withState, withHandlers } from 'recompose';

import { NavigationBar } from '../../components';

injectTapEventPlugin();

export const Navigation = props => <NavigationBar {...props} />;

export default compose(
  withState('menuOpened', 'toggleMenuState', false),
  withHandlers({
    toggleMenu: ({ toggleMenuState, menuOpened }) => () => toggleMenuState(!menuOpened),
  }),
)(Navigation);
