import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-list">
      <div className="movie-img">
        <img src={movie.poster} alt="" />
      </div>
      <div className="movie-title">
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-description">
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;
