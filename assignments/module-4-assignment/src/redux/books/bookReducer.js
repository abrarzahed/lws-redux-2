import {
  BOOK_ADDED,
  BOOK_DELETED,
  BOOK_LOADED,
  BOOK_UPDATED,
} from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_LOADED:
      return [...action.payload];

    case BOOK_ADDED:
      return [...state, action.payload];

    case BOOK_UPDATED:
      return state.map((book) => {
        if (book.id === action.payload.bookId) {
          return {
            ...book,
            ...action.payload.bookData,
          };
        } else {
          return book;
        }
      });

    case BOOK_DELETED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
