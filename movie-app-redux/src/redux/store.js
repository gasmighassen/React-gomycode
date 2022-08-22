import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./slices/MovieSlice";

const store = configureStore({
  reducer: {
    movie: MovieSlice,
  },
});

export default store;
