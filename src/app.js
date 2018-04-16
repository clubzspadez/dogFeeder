import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addEntry, editEntry, removeEntry } from './actions/entries';

const store = configureStore();


store.subscribe( ()=> {
  const state = store.getState();

});

store.dispatch(addEntry( { description :'Fed dogs oranges', note: 'Need to refill food', createdAt: 100} ));

const render = (
  <Provider store={store}> 
    <App />
  </Provider>
);


ReactDOM.render(render, document.getElementById('app'));