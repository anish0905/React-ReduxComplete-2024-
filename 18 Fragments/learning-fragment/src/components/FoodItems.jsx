import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          foodItems={item}
          key={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={() => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
