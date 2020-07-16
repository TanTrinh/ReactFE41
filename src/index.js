import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Thư viện khởi tạo store
import {createStore, applyMiddleware, compose} from 'redux';
// Provider là 1 component kết nối react với redux
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer'
// redux-thunk or we can install redux-saga, redux-observable
import thunk from "redux-thunk";


const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// createStore chỉ nhận 2 tham số
const store = createStore(
  rootReducer,
  enhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
