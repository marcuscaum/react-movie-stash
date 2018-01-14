import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose } from 'recompose';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App } from './shared/containers';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

const darkTheme = getMuiTheme(darkBaseTheme);
const muiTheme = getMuiTheme({
  palette: {
    ...darkTheme.palette,
    primary1Color: '#00bcd4',
  },
});

export const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Route path="/" component={App} />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
