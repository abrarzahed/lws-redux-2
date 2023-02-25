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
      if (changeType === "add") {
        return {
          ...state,
          color: [...state.colors, color],
        };
      } else {
        return {
          ...state,
          colors: state.colors.filter((c) => c !== color),
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
