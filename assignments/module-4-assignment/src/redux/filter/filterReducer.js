import { FILTER_CHANGED } from "./actionTypes";

const initialState = {
  filter: "All",
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED:
      return {
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
