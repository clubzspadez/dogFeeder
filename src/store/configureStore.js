import {createStore  } from 'redux';
import entriesReducer from '../reducers/entries';


export default () => {
  const store = createStore(entriesReducer);
  return store;
}