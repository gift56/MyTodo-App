import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskValue, setTaskValue] = useState("");

  return (
    <form>
      <button>+</button>
      <input
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
};

export default TaskForm;
