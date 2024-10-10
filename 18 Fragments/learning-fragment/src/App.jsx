import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import react, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // if (foodItems.length === 0) {
  //   return <h2>No food items found.</h2>;
  // }

  // let emptyMessage =
  //   foodItems.length === 0 ? <h2>No food items found.</h2> : null;

  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        {/* {foodItems.length === 0 ? <h3>I am still hungary.</h3> : null} */}

        {/* {emptyMessage} */}
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodInput handleOnChangeEvent={onKeyDown} />

        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <h2>Nutritional Facts</h2>
        <ul>
          <li>Calories: 2000</li>
          <li>Carbohydrates: 100g</li>
          <li>Protein: 50g</li>
          <li>Fat: 30g</li>
        </ul>
      </Container> */}
    </>
  );
}

export default App;
