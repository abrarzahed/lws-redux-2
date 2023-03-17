import Search from "./Search";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} width="150px" alt="logo" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link className="cursor-pointer" to="/addBook" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <Search />
      </div>
    </nav>
  );
}
