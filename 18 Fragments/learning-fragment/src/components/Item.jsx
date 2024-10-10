import style from "./Item.module.css";
const Item = ({ foodItems, handleBuyButtonClicked, bought }) => {
  // const { foodItems } = props;

  return (
    <li className={`list-group-item  kg-item ${bought && "active"}`}>
      <span className="kg-span ">{foodItems}</span>
      <button
        className={`${style.button} btn btn-info`}
        onClick={() => handleBuyButtonClicked(foodItems)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
