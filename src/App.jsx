import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    
  };

  return (
    <div className="main">
      <TaskForm onAdd={addTask} />
      <Task />
    </div>
  );
}

export default App;
