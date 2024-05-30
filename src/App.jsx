import React from "react";
import Decrement from "./components/decrement/Decrement";
import Result from "./components/result/Result";
import Increment from "./components/increment/Increment";
import Reset from "./components/reset/Reset";
import "./app.scss";

const App = () => {
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counter__card container">
        <Decrement />
        <Result />
        <Increment />
        <Reset />
      </div>
    </div>
  );
};

export default App;
