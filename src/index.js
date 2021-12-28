import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.jsx';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  // <Provider store={store}>
  <Router />
  , document.getElementById('root'),
);