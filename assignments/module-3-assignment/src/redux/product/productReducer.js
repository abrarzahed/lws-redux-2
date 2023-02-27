import { nanoid } from "nanoid";
import {
  ADDED_TO_CART,
  NEW_PRODUCT_ADDED,
  DECREMENT_CART,
  REMOVE_ITEM,
} from "./actionTypes";

const initialState = {
  products: [],
  cart: [],
};

const addToCart = (cart, itemToAdd) => {
  let itemAlreadyInCart = false;

  const temp = cart.map((item) => {
    if (item.id === itemToAdd.id) {
      itemAlreadyInCart = true;
      return {
        ...item,
        slice: item.slice + 1,
      };
    } else {
      return { ...item };
    }
  });

  if (!itemAlreadyInCart) {
    return [...cart, itemToAdd];
  } else {
    return temp;
  }
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PRODUCT_ADDED:
      return {
        ...state,
        products: [...state.products, { id: nanoid(), ...action.payload }],
      };

    case ADDED_TO_CART:
      const itemToAdd = state.products.find(
        (item) => item.id === action.payload
      );
      if (itemToAdd?.quantity > 0) {
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
          cart: addToCart(state.cart, itemToAdd),
        };
      } else {
        return state;
      }

    case DECREMENT_CART:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              slice: item.slice > 0 ? item.slice - 1 : 0,
            };
          } else {
            return { ...item };
          }
        }),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.iniTialQuantity,
            };
          } else {
            return { ...item };
          }
        }),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;
