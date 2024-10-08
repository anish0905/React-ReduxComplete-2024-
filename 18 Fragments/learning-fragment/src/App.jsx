import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import react from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = [
    "daal",
    "Green Vegitables",
    "Milk",
    "Roti",
    "Saleds",
    "Ghee",
  ];
  // if (foodItems.length === 0) {
  //   return <h2>No food items found.</h2>;
  // }

  // let emptyMessage =
  //   foodItems.length === 0 ? <h2>No food items found.</h2> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {foodItems.length === 0 ? <h3>I am still hungary.</h3> : null} */}

      {/* {emptyMessage} */}
      <ErrorMessage items={foodItems}></ErrorMessage>

      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
