import React from "react";
import "./result.scss";
import { useSelector } from "react-redux";

function Result() {
  let count = useSelector((store) => store.counter.value);
  return (
    <div className="result">
      <button>{count}</button>
    </div>
  );
}

export default Result;
