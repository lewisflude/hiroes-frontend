import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import hiroesAps './containers/App';

const store = createStore(hiroesApp);

console.log(store.getState());

store.dispatch({type: 'SET_DIRECTORY_FILTER', filter: 'MUSIC'});

console.log(store.getState());


render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)

