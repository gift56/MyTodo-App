import React from "react";
import { BsFillSquareFill, BsFillCheckSquareFill } from "react-icons/bs";

const Checkbox = ({ checked = false, onClick }) => {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className="checkbox unchecked">
          <BsFillSquareFill />
        </div>
      )}
      {checked && (
        <div className="checkbox checked">
          <BsFillCheckSquareFill />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
