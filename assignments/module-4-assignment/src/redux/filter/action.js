import { FILTER_CHANGED } from "./actionTypes";

export const filterChanged = (filter) => {
  return {
    type: FILTER_CHANGED,
    payload: filter,
  };
};
