import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import ".//App.css";
function App() {
  const [movie, setMovie] = useState([
    {
      title: "Nope",
      description:
        "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
      poster:
        "https://magarila.com/wp-content/uploads/2022/06/%E2%80%98NOPE-Poster-2.jpg",
      rating: "2",
    },
    {
      title: "Thor: Love and Thunder",
      description:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
      poster:
        "https://fr.web.img6.acsta.net/pictures/22/05/24/11/16/2411535.jpg",
      rating: "3",
    },
    {
      title: "Minions: The Rise of Gru",
      description:
        "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg",
      rating: "4",
    },
    {
      title: "Where the Crawdads Sing",
      description:
        "A woman who raised herself in the marshes of the deep South becomes a suspect in the murder of a man she was once involved with",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
      rating: "9",
    },
    {
      title: "Top Gun: Maverick",
      description:
        "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      rating: "1",
    },
    {
      title: "Elvis",
      description:
        "Elvis is Baz Luhrmann's biopic of Elvis Presley, from his childhood to becoming a rock and movie star in the 1950s while maintaining a complex relationship with his manager, Colonel Tom Parker.",
      poster:
        "https://leganerd.com/wp-content/uploads/2022/05/FS-KJTUUYAAIUvF.jpg",
      rating: "7",
    },
  ]);

  let addMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="list">
        <MovieList text={text} movie={movie} />
      </div>
      <div className="filter">
        <Filter setText={setText} movie={movie} />
      </div>
      <div className="add">
        {" "}
        <AddMovie movie={movie} setMovie={setMovie} />
        <MovieList text={text} movie={movie} />
      </div>
      <div className="filter-add">
        <div className="filter">
          <Filter setText={setText} movie={movie} />
        </div>
        <div className="add">
          {" "}
          <AddMovie addMovie={addMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
