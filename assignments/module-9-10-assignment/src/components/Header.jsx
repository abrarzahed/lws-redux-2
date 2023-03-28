import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo.svg";
import { searchTermUpdated } from "../features/projects/projectsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.projects);
  const [input, setInput] = useState(searchTerm);

  // handle input change
  const handleInputChange = (e) => {
    dispatch(searchTermUpdated(e.target.value));
    setInput(e.target.value);
  };

  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={LogoImage} alt="logo" />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
            value={input}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </nav>
  );
}
