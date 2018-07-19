import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import todo from './reducers';
import { addTodo } from "./actions";
import registerServiceWorker from './registerServiceWorker';
import App from './App';

let store = createStore(todo);
store.dispatch(addTodo('Hello World!'));
console.log(store.getState());

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
