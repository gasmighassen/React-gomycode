import React from "react";
import MovieCard from "./MovieCard";
import {Movies} from "./ListMovie";
import ".//Home.css";


function Home({search}) {
    return (
        <div>
            {search === "" ? (<h1>No movies found</h1>) : 
            (<div className="wrapper">
                {Movies.filter(movie =>
                movie.title.toLowerCase().includes(search.toLowerCase())
                ).map(movie => (
                <MovieCard key={movie.id} movie={movie} />))}
                </div>
            )}
        </div>
      
    );
  }

export default Home