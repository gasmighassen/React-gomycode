import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      {props.movie.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
