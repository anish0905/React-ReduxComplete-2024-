import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoTtems, handleDeleteItem }) => {
  console.log(todoTtems);

  return (
    <>
      <div className="items-container">
        {todoTtems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.date}
            todoName={item.name}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
