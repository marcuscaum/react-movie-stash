import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App } from './shared/containers';


export const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
)

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
