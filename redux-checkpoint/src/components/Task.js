import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";


function Task({ todo }) {
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

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]:
        [e.target.type] === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_TODO",
      payload: newTask,
    });

    setNewTask({
      id: todo.id,
      description: todo.description,
      isDone: todo.isDone,
    });
    setShow(false);
  };

  return (
    <div className="task-container">
      <div key={todo.id} className="items">
        {todo.isDone ? <s>{todo.description}</s> : todo.description}
        <button onClick={handleShow}></button>
      </div>
      {show && (
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            <input
              name="description"
              type="text"
              Value={todo.description}
              onChange={handleChange}
            />
            <input
              name="isDone"
              type="checkbox"
              Checked={todo.isDone}
              onChange={handleChange}
            />
           
            <button type="submit">Edit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Task;
