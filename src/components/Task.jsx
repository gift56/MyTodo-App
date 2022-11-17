import React from "react";
import Checkbox from "./Checkbox";

const Task = ({ name, done, onToggle }) => {
  return (
    <div className={`task ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
};

export default Task;
