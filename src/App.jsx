import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="main">
      <TaskForm />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default App;
