import React from "react";
import "./reset.scss";
import { useDispatch } from "react-redux";
import { reset } from "../../context/slice/counterSlice";

function Reset() {
  const dispatch = useDispatch();
  return (
    <div className="reset">
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Reset;
