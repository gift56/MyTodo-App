import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="main">
      <TaskForm onAdd={taskName} />
      <Task />
    </div>
  );
}

export default App;
