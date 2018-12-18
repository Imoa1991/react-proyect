import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { HashRouter } from 'react-router-dom'; 

render(
  <HashRouter>
    <App />
  </HashRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();
