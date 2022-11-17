import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "./Checkbox";

const Task = ({ name, done, onToggle, onDelete }) => {
  return (
    <div className={`task ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <p className="taskName">
        <span>{name}</span>
      </p>
      <button className="trash" onClick={onDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
