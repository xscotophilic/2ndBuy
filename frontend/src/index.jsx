import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App.jsx';
import reducers from './reducers';
import { thunk } from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
