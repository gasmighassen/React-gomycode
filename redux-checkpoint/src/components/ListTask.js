import React from "react";
import { useSelector } from "react-redux";
import "./ListTask.css";
import Task from "./Task";

function ListTask() {
  return (
    <div>
      {useSelector((state) => state.todos).map((todo) => (
        <Task todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default ListTask;
