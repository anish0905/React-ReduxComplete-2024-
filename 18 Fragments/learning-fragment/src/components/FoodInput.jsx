import styles from "./FoodInput.module.css";
function FoodInput({ handleOnChangeEvent }) {
  return (
    <input
      type="text"
      className={styles.foodItem}
      placeholder="Enter Food Item here "
      onKeyDown={handleOnChangeEvent}
    />
  );
}
export default FoodInput;
