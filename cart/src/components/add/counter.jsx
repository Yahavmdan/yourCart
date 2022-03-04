import React from "react";

const Counter = ({
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  addParent,
  counter,
  minParent,
}) => {
  return (
    <div>
      <button
        style={{ width: 10, height: 30 }}
        className="btn btn-primary"
        onClick={minParent}
        disabled={counter <= min}
      >
        -
      </button>
      <span style={{ padding: 10 }}>{counter}</span>
      <button
        style={{ width: 10, height: 30 }}
        className="btn btn-primary"
        onClick={addParent}
        disabled={counter >= max}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
