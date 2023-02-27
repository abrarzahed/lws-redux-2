import { CHANGE_ROUTE } from "./actionTypes";

export const changeRoute = (route) => {
  return {
    type: CHANGE_ROUTE,
    payload: route,
  };
};
