import React from "react";
import { BsFillSquareFill, BsFillCheckSquareFill } from "react-icons/bs";

const Task = () => {
  return (
    <div className="task">
      <div className="checkbox unchecked">
        <BsFillSquareFill />
      </div>
      <div className="checkbox checked">
        <BsFillCheckSquareFill />
      </div>
      task task
    </div>
  );
};

export default Task;
