import { useEffect, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks((value) => {
      return [...value, { name: name, done: false }];
    });
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    setTasks(tasks);
  }, []);

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
