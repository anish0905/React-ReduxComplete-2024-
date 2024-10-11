import React from "react";
import styles from "./Welcome.module.css";

const WelocomeMessage = ({ todoTtems }) => {
  return (
    todoTtems.length === 0 && (
      <div className={styles.welcome}>Welocome Enjoy your days </div>
    )
  );
};

export default WelocomeMessage;
