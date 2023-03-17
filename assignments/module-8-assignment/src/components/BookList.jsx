import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../features/api/apiSlice";
import SingleBook from "./SingleBook";

export default function BookList() {
  const { data: books, isLoading, isError, error } = useGetBooksQuery();

  const { searchTerm, category } = useSelector((state) => state.filters);

  // filter by category
  const filterByCategory = (book) => {
    if (category === "All") {
      return true;
    } else {
      return book.featured;
    }
  };

  // filter by search term
  const filterBySearchTerm = (book) => {
    if (searchTerm === "") {
      return true;
    } else if (
      book.name.includes(searchTerm) ||
      book.name.toUpperCase().includes(searchTerm) ||
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  };

  // decide what to render
  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) {
    content = <div className="text-red-500">{error}</div>;
  }
  if (!isLoading && !isError && books?.length === 0) {
    content = <div className="text-red-500">No books found</div>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(filterByCategory)
      .filter(filterBySearchTerm)
      .map((book) => <SingleBook key={book.id} book={book} />);
  }
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
}
