import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editTodo } from "../redux/slices/todoSlice";
import React from "react";

function Task({ todo }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    id: todos.id,
    description: "",
    isDone: todos.isDone,
  });
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
  };
  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]:
        [e.target.type] === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="task">
      <div className="task-description">
        <p>
          {todo.id}. {todo.description}
        </p>
      </div>
      <button onClick={handleShow}>Edit</button>
      {show && (
        <div>
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="isDone"
            checked={newTask.isDone}
            onChange={handleChange}
          />
          <button onClick={() => dispatch(editTodo(newTask))}>save</button>
        </div>
      )}
    </div>
  );
}

export default Task;
