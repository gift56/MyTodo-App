import React from "react";
import { BsFillSquareFill, BsFillCheckSquareFill } from "react-icons/bs";

const Checkbox = () => {
  return (
    <div>
      <div className="checkbox unchecked">
        <BsFillSquareFill />
      </div>
      <div className="checkbox checked">
        <BsFillCheckSquareFill />
      </div>
    </div>
  );
};

export default Checkbox;
