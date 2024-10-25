import React from "react";

const GetTodoItems = ({ data, setData }) => {
  console.log("GetTodoItems", data);

  const handleDelete = (index) => {
    console.log("handleDelete", index);
    let finalResult = data.filter((val, i) => i !== index);
    setData(finalResult);
  };

  return (
    <div>
      <ul className="listDeg">
        {data.map((val, index) => {
          return (
            <li key={index}>
              {val} <span onClick={() => handleDelete(index)}>x</span>
              <button onClick={() => handleEdit(index, val)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetTodoItems;
