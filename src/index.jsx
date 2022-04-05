import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';

import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import combineReducers from "reducers/_index";
import { ThemeProvider } from 'styled-components';
import APP_THEME from 'theme';
// import { logAction } from 'middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={APP_THEME} >
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
