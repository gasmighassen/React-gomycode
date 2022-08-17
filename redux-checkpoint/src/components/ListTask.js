import React, { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const todo = useSelector((state) => state.todo);
  const [filter, setFilter] = useState("all");

  return (
    <div className="list-tasks">
      <button className="filter-btn" onClick={() => setFilter("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button className="filter-btn" onClick={() => setFilter("uncompleted")}>
        Uncompleted
      </button>
      {todo.map((todo) => {
        if (filter === "all") {
          return <Task todo={todo} />;
        } else if (filter === "completed" && todo.isDone) {
          return <Task todo={todo} />;
        } else if (filter === "uncompleted" && !todo.isDone) {
          return <Task todo={todo} />;
        }
      })}
    </div>
  );
};
export default ListTask;
