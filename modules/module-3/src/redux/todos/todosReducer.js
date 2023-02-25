import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
} from "./actionsTypes";
const initialState = [
  {
    id: 0,
    text: "learn react",
    completed: true,
  },
  {
    id: 1,
    text: "learn redux",
    completed: false,
    color: "red",
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, { id: state.length + 1, text: action.payload }];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALL_COMPLETED:
      return state.map((todo) => ({ ...todo, completed: true }));

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
