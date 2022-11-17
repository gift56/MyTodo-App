import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    setTasks((value) => {
      return [...value, { name: name, done: false }]
    });
  };

  return (
    <div className="main">
      <TaskForm onAdd={addTask} />
      <Task />
    </div>
  );
}

export default App;
