import React from "react";
import "./MovieCard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

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
          rating:
          <ReactStars
            count={10}
            value={movie.rating}
            edit={false}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </p>
      </div>
      <Link to={`/desc/${movie.title}`} state={{ movie }}>
        See more...
      </Link>
    </div>
  );
}

export default MovieCard;
