import React, { useState } from "react";
import { BsFillSquareFill, BsFillCheckSquareFill } from "react-icons/bs";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  
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
