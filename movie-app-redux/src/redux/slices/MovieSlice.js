import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptatum!",
      image: "",
      rating: "5",
    },
    {
      id: 2,
      title: "The Godfather",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptatum!",
      image: "",
      rating: "5",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptatum!",
      image: "",
      rating: "5",
    },
    {
      id: 4,
      title: "The Dark Knight",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptatum!",
      image: "",
      rating: "5",
    },
    {
      id: 5,
      title: "12 Angry",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, voluptatum!",
      image: "",
      rating: "5",
    },
  ],
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
  },
});

export const { addMovie, filterMovie, reset } = MovieSlice.actions;
export default MovieSlice.reducer;
