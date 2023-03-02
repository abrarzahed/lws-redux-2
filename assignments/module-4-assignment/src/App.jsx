import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList />
          <AddBook />
        </div>
      </main>
    </>
  );
}

export default App;
