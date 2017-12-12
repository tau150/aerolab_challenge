import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);


const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;
const enhancer = composeEnhancers(
applyMiddleware(ReduxPromise, thunk),
);


ReactDOM.render(
  <Provider store={createStore(reducers, enhancer)}>

    <App />

  </Provider>
  , document.querySelector('#root'));


