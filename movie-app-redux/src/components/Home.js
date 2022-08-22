import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import "./style/Home.css";

function Home() {
  const movie = useSelector((state) => state.movie);
  const movieList = movie.movies;
  const [Filter, setFilter] = useState("");
  const [Rate, setRate] = useState("");
  return (
    <>
      <div className="search">
        <ul>
          <li>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
            <button>Search</button>
          </li>
          <li>
            <ReactStars
              count={5}
              onChange={(Rate) => setRate(setRate)}
              size={24}
              activeColor="#ffd700"
            />
          </li>
        </ul>
      </div>
      <div className="home">
        {movieList
          .filter(
            (el) =>
              el.title.toLowerCase().includes(Filter.toLowerCase()) &&
              el.rating >= Rate
          )
          .map((el) => (
            <MovieCard movie={el} />
          ))}
        <AddMovie />
      </div>
    </>
  );
}

export default Home;
