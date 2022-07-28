import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
function MovieList({ movie, text }) {
  return (
    <div className="container">
      {movie
        .filter(
          (el) =>
            el.title.toLowerCase().includes(text.toLowerCase()) ||
            el.rating.toLowerCase().includes(text.toLowerCase())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
