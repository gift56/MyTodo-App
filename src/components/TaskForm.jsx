import React, { useState } from "react";

const TaskForm = () => {
  const [value, setValue] = useState("");
  
  return (
    <form>
      <button>+</button>
      <input type="text" placeholder="Your next task..." />
    </form>
  );
};

export default TaskForm;
