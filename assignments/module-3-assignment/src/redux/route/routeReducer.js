import { CHANGE_ROUTE } from "./actionTypes";

const initialState = {
  path: "home",
};

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        ...state,
        path: action.payload,
      };

    default:
      return state;
  }
};

export default routeReducer;
