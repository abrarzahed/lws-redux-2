import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTermUpdated } from "../../features/filter/filterSlice";

export default function SearchBox() {
  const { searchTerm } = useSelector((state) => state.filters);
  const [input, setInput] = useState(searchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTermUpdated(input));
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={handleInputChange}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src="./assets/search.svg"
        alt="Search"
      />
    </div>
  );
}
