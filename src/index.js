import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let storeWithMiddleware = applyMiddleware(thunk)(createStore);
let store = storeWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
