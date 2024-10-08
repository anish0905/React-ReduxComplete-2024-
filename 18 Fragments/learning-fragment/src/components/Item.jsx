const Item = ({ foodItems }) => {
  // const { foodItems } = props;
  return (
    <li className="list-group-item  kg-item">
      <span className="kg-span ">{foodItems}</span>
    </li>
  );
};
export default Item;
