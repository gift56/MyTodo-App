import React, { useState } from "react";
import { BsFillSquareFill, BsFillCheckSquareFill } from "react-icons/bs";

const Checkbox = ({ defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div>
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
