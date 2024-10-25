import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header></Header>
      <TaskListNumber></TaskListNumber>
      <TaskList></TaskList>
    </div>
  );
};

export default EmployeeDashboard;
