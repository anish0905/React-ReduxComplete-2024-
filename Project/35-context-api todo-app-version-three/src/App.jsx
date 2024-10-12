import "./App.css";
import AppName from "../src/component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./component/WelocomeMessage";
import { TodoItemContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { id: todoItems.length + 1, name: itemName, date: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
