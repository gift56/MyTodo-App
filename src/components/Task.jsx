import React from "react";
import Checkbox from "./Checkbox";

const Task = ({ name, done }) => {
  return (
    <div className="task">
      <Checkbox checked={done} onClick={() => alert("Fucked Up")} />
      {name}
    </div>
  );
};

export default Task;
