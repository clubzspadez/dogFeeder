import {createStore  } from 'redux';
import entriesReducer from '../reducers/entries';


export default () => {
  const store = createStore( entries: entriesReducer );
  return store;
}