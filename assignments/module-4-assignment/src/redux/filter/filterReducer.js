import { FILTER_CHANGED, ITEM_TO_UPDATE_SELECTED } from "./actionTypes";

const initialState = {
  filter: "All",
  itemToUpdate: null,
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED:
      return {
        ...state,
        filter: action.payload,
      };

    case ITEM_TO_UPDATE_SELECTED:
      return {
        ...state,
        itemToUpdate: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
