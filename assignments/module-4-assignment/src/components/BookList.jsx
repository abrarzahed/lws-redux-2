import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunks/fetchBooks";
import BookCard from "./BookCard";
import Filters from "./Filters";

export default function BookList() {
  const { books, filters } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  // filter by filter
  const filterByStatus = (book) => {
    if (filters?.filter === "Featured") {
      return book.featured;
    } else if (filters?.filter === "All") {
      return true;
    } else {
      return true;
    }
  };

  // filter by search term
  const filterBySearchTerm = (book) => {
    if (filters.searchTerm === "") {
      return true;
    } else if (
      book.name.includes(filters.searchTerm) ||
      book.name.toUpperCase().includes(filters.searchTerm) ||
      book.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>
        <Filters />
      </div>
      <div className="lws-bookContainer">
        {books
          .filter(filterByStatus)
          .filter(filterBySearchTerm)
          .map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
}
