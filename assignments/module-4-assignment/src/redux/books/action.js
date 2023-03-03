import {
  BOOK_ADDED,
  BOOK_DELETED,
  BOOK_LOADED,
  BOOK_UPDATED,
} from "./actionTypes";

export const bookLoaded = (books) => {
  return {
    type: BOOK_LOADED,
    payload: books,
  };
};

export const bookAdded = (book) => {
  return {
    type: BOOK_ADDED,
    payload: book,
  };
};

export const bookUpdated = (bookId, bookData) => {
  return {
    type: BOOK_UPDATED,
    payload: {
      bookId,
      bookData,
    },
  };
};

export const bookDeleted = (bookId) => {
  return {
    type: BOOK_DELETED,
    payload: bookId,
  };
};
