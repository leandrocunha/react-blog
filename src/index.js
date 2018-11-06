import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import notifier from './reducers/notifier';
import posts from './reducers/posts';

/** Build store to feed Provider. */
const store = createStore(
  combineReducers({
    notifier,
    posts
  }),
  window.devToolsExtension && window.devToolsExtension()
);

/** Render application. */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
