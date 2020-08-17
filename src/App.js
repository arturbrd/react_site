import React from 'react';
import './App.css';
import { Header } from "./components/header";
import { AddTaskButton } from "./components/addTaskButton";
import TaskList from "./components/taskList"

function App() {
  return (
    <div className="App">
      <Header />
      <AddTaskButton />
      <TaskList />
    </div>
  );
}

export default App;
