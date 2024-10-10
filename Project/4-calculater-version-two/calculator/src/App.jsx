import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(String(result));
    } else {
      const updatedCalVal = calVal + buttonText;
      setCalVal(updatedCalVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClicked} />
    </div>
  );
}

export default App;
