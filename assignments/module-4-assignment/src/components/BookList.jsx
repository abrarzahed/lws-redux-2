import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunks/fetchBooks";
import BookCard from "./BookCard";
import Filters from "./Filters";

export default function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <Filters />
      </div>
      <div className="lws-bookContainer">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
