import { FILTER_CHANGED, ITEM_TO_UPDATE_SELECTED } from "./actionTypes";

export const filterChanged = (filter) => {
  return {
    type: FILTER_CHANGED,
    payload: filter,
  };
};
export const itemToUpdateSelected = (item) => {
  return {
    type: ITEM_TO_UPDATE_SELECTED,
    payload: item,
  };
};
