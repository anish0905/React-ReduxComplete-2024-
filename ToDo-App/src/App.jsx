import "./App.css";
import { useRef, useState } from "react";
import GetTodoItems from "./GetTodoItems";

function App() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    const newInputItems = inputRef.current.value.trim();

    if (!data.includes(newInputItems) && newInputItems.length > 0) {
      setData([...data, newInputItems]);
    } else {
      alert("already exist");
    }
    console.log(data);

    inputRef.current.value = "";
  };

  return (
    <>
      <div className="bodyl ">
        <h1>ToDoList</h1>

        <form action="" onSubmit={handleInput}>
          <input
            type="text"
            placeholder=" Add List"
            name="todo"
            ref={inputRef}
          />
          <button>Add </button>
        </form>
      </div>

      <div>
        <GetTodoItems data={data} setData={setData} />
      </div>
    </>
  );
}

export default App;
