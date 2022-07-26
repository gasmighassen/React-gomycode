import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/slices/todoSlice";
import "./AddTask.css";

function AddTask() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="add-todo">
      <input type="text" onChange={(e) => handleChange(e)} placeholder="..." />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
