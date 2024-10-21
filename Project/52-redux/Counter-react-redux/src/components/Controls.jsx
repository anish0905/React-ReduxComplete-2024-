import React from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: "INCREMENT" });
  const handleDecrement = () => dispatch({ type: "DECREMENT" });
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 me-sm-3"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-lg px-4"
        onClick={handleDecrement}
      >
        -1
      </button>
    </>
  );
};

export default Controls;
