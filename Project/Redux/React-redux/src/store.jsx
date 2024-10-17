const Add_Task = "task/add";
const Delete_Task = "task/delete";

const initialState = {
  task: [],
};
const taskReducer = (state, action) => {
  switch (action.type) {
    case Add_Task:
      return {
        ...state,

        task: [...state.task, action.payload],
      };

    case Delete_Task:
      const updatedTask = state.task.filter((currTask, index) => {
        return index !== action.payload;
      });

      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};
