import React,{useState} from "react";

const AddMovie = ({addMovie}) => {
  const [newmovie, setNewmovie] = useState({
    title: "",
    description: "",
    poster: "",
    rating: "0",
  });
  const handleChange = (e) => {
    setNewmovie({
      ...newmovie,
      [e.target.name]: e.target.value,
    });
  }
  
  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <input  name ="title" typeof="text" placeholder="Type movie title here ..." onChange={handleChange}></input>
        <input  name ="description" typeof="text" placeholder="Type movie description here ..." onChange={handleChange}></input>
        <input  name ="rating" typeof="text" placeholder="Type movie rating here ..." onChange={handleChange}></input>
        <input  name ="poster" typeof="text" placeholder="Type movie poster here ..." onChange={handleChange}></input>
        <button onClick={() => AddMovie(newmovie)}>Add Movie</button>
      </form>

    </div>
  );
};

export default AddMovie;
