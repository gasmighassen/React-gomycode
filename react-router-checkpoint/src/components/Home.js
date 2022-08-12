import React from "react";
import MovieCard from "./MovieCard";
import {Movies} from "./ListMovie";
import ".//Home.css";


function Home({search}) {
    return (
       
        <div className="wrapper">
            <h1>Home</h1>
            {search ? Movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())).map(movie => <MovieCard movie={movie} key={movie.id}/>) : Movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
  }

export default Home