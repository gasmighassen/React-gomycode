import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Movies } from "./ListMovie";
import ".//Home.css";
import AddMovie from "./AddMovie";

function Home({ text, rate }) {
  const [moviesToMap, setMoviesToMap] = useState(Movies);
  const addMovies = (newMovie) => {
    setMoviesToMap([...moviesToMap, newMovie]);
  };
  return (
    <div className="wrapper">
      <AddMovie addMovies={addMovies} />

      {moviesToMap
        .filter(
          (el) =>
            el.title.toLowerCase().includes(text.toLowerCase()) &&
            el.rating >= rate
        )
        .map((el) => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
}

export default Home;
