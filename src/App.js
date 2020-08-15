import React from 'react';
import './App.css';
import { Header } from "./containers/header";
import { AddTaskButton } from "./containers/addTaskButton";




function App() {
  return (
    <div className="App">
      <Header />
      <AddTaskButton />
    </div>
  );
}

export default App;
