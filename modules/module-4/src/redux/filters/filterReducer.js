import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

const initialState = {
  status: "All",
  colors: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLOR_CHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
