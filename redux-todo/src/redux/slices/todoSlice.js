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
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.description = action.payload.description;
      todo.isDone = action.payload.isDone;
    },
  },
});

export const { addTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
