import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hiroesApp from './reducers'
import App from './containers/App';

let store = createStore(hiroesApp)

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)
