import React from "react";
import { useLocation } from "react-router-dom";
import "./style/Description.css";

const Description = () => {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="description">
      <h1>Title</h1>
      <p>{movie.title}</p>
      <h1>Details</h1>
      <p>{movie.details}</p>
      <h1>Rating</h1>
      <p>{movie.rating}</p>
    </div>
  );
};

export default Description;
