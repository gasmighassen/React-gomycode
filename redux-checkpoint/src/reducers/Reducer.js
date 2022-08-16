const intialState = {
  todo: [
    {
      id: 1,
      description: "Learn React",
      isDone: false,
    },
    {
      id: 2,
      description: "Learn vue",
      isDone: false,
    },
    {
      id: 3,
      description: "Learn angular",
      isDone: false,
    },
    {
      id: 4,
      description: "Learn react native",
      isDone: false,
    },
  ],
};
const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              description: action.payload.description,
              isDone: action.payload.isDone,
            };
          }
          return todo;
        }),
      };
    case "COMPLETED_TODO":
      return {
        ...state,
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: action.payload.isDone,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
export default Reducer;
