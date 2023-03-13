import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  salaryRangeChanged,
  searchTermChanged,
} from "../features/filters/filterSlice";

export default function FilterAndSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [salaryRange, setSalaryRange] = useState("Default");

  const dispatch = useDispatch();

  // handle search term change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchTermChanged(e.target.value));
  };
  // handle search term change
  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
    dispatch(salaryRangeChanged(e.target.value));
  };

  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <select
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1"
        value={salaryRange}
        onChange={handleSalaryRangeChange}
      >
        <option value="Default">Default</option>
        <option value="Low to High">Salary (Low to High)</option>
        <option value="High to Low">Salary (High to Low)</option>
      </select>
    </div>
  );
}
