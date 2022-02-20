import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import combineReducers from "reducers/index";

const store = createStore(
  combineReducers, // All the reducers
  {}, // Initial State
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
