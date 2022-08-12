
import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-list">
      <div className="movie-poster">
        <img src={movie.poster} alt="" />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
      </div>
      <div className="rating">
        <p>
          rating: <span>{movie.rating}/10</span>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;