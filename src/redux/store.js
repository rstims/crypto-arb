import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

// Create store
export default createStore(
  combineReducers({...reducers}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
