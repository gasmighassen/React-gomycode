import React, { useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import "./TaskList.css";

function TaskList() {
  const todos = useSelector((state) => state.todos);

  const [filter, setFilter] = useState("all");

  return (
    <div className="list-tasks">
      <h1>Task List</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      {todos.map((todo) => {
        if (filter === "all" || (filter === "active" && !todo.isDone)) {
          return <Task key={todo.id} todo={todo} />;
        } else if (filter === "completed" && todo.isDone) {
          return <Task key={todo.id} todo={todo} />;
        }
      })}
    </div>
  );
}

export default TaskList;
