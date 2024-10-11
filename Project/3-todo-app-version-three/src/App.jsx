import "./App.css";
import AppName from "../src/component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";
import { useState } from "react";
import WelocomeMessage from "./component/WelocomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueData) => {
    // console.log("new item added" + " " + itemName + " " + itemDueData);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueData }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoName) => {
    // console.log("delete the item " + "" + todoName);

    const newTodoItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo handleNewItem={handleNewItem} />
      {todoItems.length === 0 ? (
        <WelocomeMessage todoTtems={todoItems} />
      ) : null}

      <TodoItems todoTtems={todoItems} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
