import { createStore } from 'redux'
import hiroesApp from '../reducers'

export default function configureStore() {
  const store = createStore(hiroesApp,
  window.devToolsExtension && window.devToolsExtension()
  );
  return store
}
