const Add_Task = "task/add";
const Delete_Task = "task/delete";

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case Add_Task:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case Delete_Task:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
  }
};
