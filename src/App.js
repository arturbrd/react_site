import React from 'react';
import './App.css';
import { Header } from "./components/header";
import { AddTaskButton } from "./components/addTaskButton";




function App() {
  return (
    <div className="App">
      <Header />
      <AddTaskButton />
    </div>
  );
}

export default App;
