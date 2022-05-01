import React from 'react';
import ReactDOM from 'react-dom';
import App from 'layout/App';

import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import combineReducers from "reducers/_index";
import { ThemeProvider } from 'styled-components';
import APP_THEME from 'styles/theme';
import GlobalStyle from 'styles/globalStyles';
// import { logAction } from 'middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={APP_THEME} >
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
