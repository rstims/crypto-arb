import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage'
import reducers from './reducers';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(/*paths, config*/),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
// Create store
export default createStore(
  combineReducers({...reducers}),
  enhancer
);
