import React from "react";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const { movie } = location.state;
  return <div>{movie.title}</div>;
};

export default Description;
