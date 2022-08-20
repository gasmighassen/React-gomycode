import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editTodo } from "../redux/slices/todoSlice";
import React from "react";

function Task({ todo }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    id: todo.id,
    description: todo.description,
    isDone: todo.isDone,
  });
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
  };

  return (
    <div className="task">
      <div className="task-description">
        <p>
          {todo.id}.{todo.isDone ? <s>{todo.description}</s> : todo.description}
        </p>
      </div>
      <button onClick={handleShow}>Edit</button>
      {show && (
        <div>
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <span>Check if done</span>
          <input
            type="checkbox"
            name="isDone"
            checked={newTask.isDone}
            onChange={(e) =>
              setNewTask({ ...newTask, isDone: !newTask.isDone })
            }
          />
          <button onClick={() => dispatch(editTodo(newTask))}>save</button>
        </div>
      )}
    </div>
  );
}

export default Task;
