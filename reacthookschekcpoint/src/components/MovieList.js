import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
function MovieList(props) {
  return (
    <div className="container">
      {props.movie
        .filter((el) =>
          el.title.toLowerCase().includes(props.text.toLowerCase())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
