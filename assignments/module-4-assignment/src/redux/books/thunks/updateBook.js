import { bookUpdated } from "../action";

const updateBook = (bookId, bookData) => {
  const bookDataCopy = { ...bookData };
  // console.log("bookDataCopy", bookDataCopy);
  delete bookDataCopy.id;

  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify(bookDataCopy),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();
    const copiedBook = { ...book };
    delete copiedBook.id;
    dispatch(bookUpdated(book.id, copiedBook));
  };
};

export default updateBook;
