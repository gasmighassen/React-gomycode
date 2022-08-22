import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.random(),
        description,
        isDone: false,
      },
    });
    setDescription("");
  };
  return (
    <div className="add-form">
      <input type="text" value={description} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
export default AddTask;
