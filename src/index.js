import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from './components/taskList';



export const addTask = (title, description) => {
  return {
    type: "addTask",
    title,
    description
  }
}

const reducer = (state = [], action) => {
  switch(action.type) {
    case "addTask":
      const newState = state;
      newState.push({
        title: action.title,
        description: action.description
      });
      return newState;
  }
}

export let store = createStore(reducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

setTimeout(() => {
  console.log("The time has came")
  ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);}, 10000 )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
