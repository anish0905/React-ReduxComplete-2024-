import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemContext);

  if (!Array.isArray(todoItems)) {
    console.error("Expected an array but got:", todoItems);
    return <p>No items to display.</p>;
  }

  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index} // Use index as fallback for key
          todoDate={item.date}
          todoName={item.name}
          handleDeleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
