import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "./Checkbox";

const Task = ({ name, done, onToggle, onDelete, onRename }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={`task ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <p className="taskName" onClick={() => setEditMode((prev) => !prev)}>
          <span>{name}</span>
        </p>
      )}
      {editMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditMode(false);
          }}
          className="editForm"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => onRename(e.target.value)}
          />
        </form>
      )}
      <button className="trash" onClick={onDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
