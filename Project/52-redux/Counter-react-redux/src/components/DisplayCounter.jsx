import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <div className="lead mb-4">Counter current Value {counter}</div>;
};

export default DisplayCounter;
