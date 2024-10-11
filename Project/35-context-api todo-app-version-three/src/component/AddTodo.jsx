import { useRef, useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const noOfUpdates = useRef(0);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`no of updates are  : ${noOfUpdates.current}`);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // Prevent form submission reload
    if (todoName && dueDate) {
      handleNewItem(todoName, dueDate);
      setTodoName(""); // Clear the inputs after adding
      setDueDate("");
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName} // Bind input value to state
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate} // Bind input value to state
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit" // Changed to submit
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
