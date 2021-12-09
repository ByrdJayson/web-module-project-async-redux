import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './index.css';
import { reducer } from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
