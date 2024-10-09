import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoTtems }) => {
  console.log(todoTtems);

  return (
    <>
      <div className="items-container">
        {todoTtems.map((item) => (
          <TodoItem todoDate={item.date} todoName={item.name} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
