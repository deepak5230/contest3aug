import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'; // Use this if default import works
// import { thunk } from 'redux-thunk'; // Use this if named import is needed
import { thunk } from 'redux-thunk'; // Use named import if your version requires it

import rootReducer from './reducers'; // Your root reducer

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware
);

export default store
