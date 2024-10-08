import React from "react";

const ErrorMessage = ({ items }) => {
  return <div>{items.length === 0 && <h2>No food items found.</h2>}</div>;
};

export default ErrorMessage;
