// import ================================================= //
import "./App.css";
import React from "react";
import TaskManager from './task_manager/task_manager';

// main =================================================== //
function App() {

  return (
    <div className="App">
      <div id='name_ToDoList'>ToDoList</div>
      <TaskManager/>
    </div>
  );

}

// export ================================================== //
export default App;