import "./App.css";
import AppName from "../src/component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";

function App() {
  const todoTtems = [
    {
      name: "Buy Milk",
      date: "04/05/2025",
    },
    {
      name: "Go to College",
      date: "04/05/2025",
    },
    {
      name: "Like this video on",
      date: "04/05/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />
      <TodoItems todoTtems={todoTtems} />
    </center>
  );
}

export default App;
