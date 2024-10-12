import React from "react";
import styles from "./Welcome.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const WelocomeMessage = () => {
  const todoTtems = React.useContext(TodoItemContext);
  return (
    todoTtems.length === 0 && (
      <div className={styles.welcome}>Welocome Enjoy your days </div>
    )
  );
};

export default WelocomeMessage;
