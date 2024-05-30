import React, { useEffect, useState } from "react";
import "./decrement.scss";
import { TiMinus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../context/slice/counterSlice";

function Decrement() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [decValue, setDecValue] = useState("");
  console.log(decValue);

  const decrementValue = decValue === "" ? 1 : +decValue;

  useEffect(() => {
    localStorage.setItem("localStorg", count);
  }, [count]);

  return (
    <div className="decrement">
      <input
        value={decValue}
        onChange={(e) => setDecValue(e.target.value)}
        placeholder="decrement"
        type="number"
      />
      <button
        disabled={count < decValue || count <= 0}
        onClick={() => dispatch(decrement(decrementValue))}
      >
        <TiMinus />
      </button>
    </div>
  );
}

export default Decrement;
