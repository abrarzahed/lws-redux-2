import {
  ADDED_TO_CART,
  DECREMENT_CART,
  NEW_PRODUCT_ADDED,
  REMOVE_ITEM,
} from "./actionTypes";

export const addNewProduct = (product) => {
  return {
    type: NEW_PRODUCT_ADDED,
    payload: product,
  };
};

export const addToCart = (id) => {
  return {
    type: ADDED_TO_CART,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: DECREMENT_CART,
    payload: id,
  };
};
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
