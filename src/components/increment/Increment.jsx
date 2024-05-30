import React, { useState } from "react";
import "./increment.scss";

import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { increment } from "../../context/slice/counterSlice";

function Increment() {
  const dispatch = useDispatch();
  const [incValue, setIncValue] = useState("");

  const incrementValue = incValue === "" ? 1 : +incValue;

  return (
    <div className="increment">
      <input
        value={incValue}
        onChange={(e) => setIncValue(e.target.value)}
        placeholder="increment"
        type="number"
      />
      <button onClick={() => dispatch(increment(incrementValue))}>
        <FaPlus />
      </button>
    </div>
  );
}

export default Increment;
