import {
  FILTER_CHANGED,
  ITEM_TO_UPDATE_SELECTED,
  SEARCH_TERM_CHANGED,
} from "./actionTypes";

export const filterChanged = (filter) => {
  return {
    type: FILTER_CHANGED,
    payload: filter,
  };
};

export const searchTermChanged = (searchTerm) => {
  return {
    type: SEARCH_TERM_CHANGED,
    payload: searchTerm,
  };
};

export const itemToUpdateSelected = (item) => {
  return {
    type: ITEM_TO_UPDATE_SELECTED,
    payload: item,
  };
};
