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

  const updateTaksDone = (taskIndex, newDone) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };

  const deleteTasks = (id) => {
    setTasks((prev) => {
      return prev.filter((task, i) => i !== id);
    });
  };

  const numberComplete = tasks.filter((task) => task.done).length;

  const getMessage = () => {
    const percentage = (numberComplete / tasks.length) * 100;

    if (percentage === 0) {
      return "Try to make at least one! 😢";
    }
    if (percentage === 100) {
      return "Nice job for today! 👍";
    }
    return "Keep it going 💪";
  };

  return (
    <div className="main">
      <h1>
        {numberComplete}/{tasks.length}
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task
          {...task}
          onToggle={(done) => updateTaksDone(i, done)}
          onDelete={() => deleteTasks(i)}
        />
      ))}
    </div>
  );
}

export default App;
