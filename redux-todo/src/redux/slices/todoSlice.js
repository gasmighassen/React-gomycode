import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        description: action.payload,
        isDone: false,
      });
    },
    editTodo: (state, action) => {
      let i = state.findIndex((el) => el.id === action.payload.id);
      state[i] = {
        ...state[i],
        description: action.payload.description,
        isDone: action.payload.isDone,
      };
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
