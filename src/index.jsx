import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import combineReducers from "reducers/index";
import { logAction } from 'middlewares';

const store = createStore(
  combineReducers,
  applyMiddleware(reduxThunk, logAction)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
