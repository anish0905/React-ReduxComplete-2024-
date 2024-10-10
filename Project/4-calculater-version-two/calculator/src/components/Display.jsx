import React from "react";

import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <div>
      <input type="text" className={styles.display} value={calVal} readOnly />
    </div>
  );
};

export default Display;
