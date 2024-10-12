import { useContext, useRef, useState } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext); // Correctly access context

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
    console.log(`Number of updates: ${noOfUpdates.current}`);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    noOfUpdates.current += 1;
    console.log(`Number of updates: ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // Prevent form submission reload
    if (todoName && dueDate) {
      addNewItem(todoName, dueDate);
      setTodoName(""); // Clear inputs after adding
      setDueDate("");
    } else {
      alert("Please enter both a todo name and a due date.");
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            aria-label="Todo Name"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            aria-label="Due Date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
