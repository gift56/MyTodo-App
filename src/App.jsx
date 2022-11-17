import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", tasks);
  }, [tasks]);

  const addTask = (name) => {
    setTasks((value) => {
      return [...value, { name: name, done: false }];
    });
  };

  return (
    <div className="main">
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task key={i} {...task} />
      ))}
    </div>
  );
}

export default App;
