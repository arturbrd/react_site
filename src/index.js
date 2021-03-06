import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducer"

let tasksID = 0;

export const addTask = (title, description) => {
  tasksID++;
  return {
    type: "addTask",
    ID: tasksID,
    title,
    description,
    isDone: false
  }
}

export const changeToDone = (ID) => {
  console.log("funkcja ustwiania na done została zdispatchowana");
  return {
    type: "changeToDone",
    ID: ID
  }
}

export const deleteTask = (ID) => {
  console.log("funkcja usuwania została zdispatchowana");
  return {
    type: "deleteTask",
    ID: ID
  }
}

export let store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
