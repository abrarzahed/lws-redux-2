import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtered, sorted } from "../features/filter/filterSlice";

export default function SideBar() {
  const filters = useSelector((state) => state.filters);
  const [formData, setFormData] = useState(filters);
  const dispatch = useDispatch();

  // handle input change
  const handleInputChange = (e) => {
    const { value, type, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (type !== "radio") {
      dispatch(sorted(value));
    }
    if (type === "radio") {
      dispatch(filtered(value));
    }
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sortedBy"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            value={formData?.sortedBy}
            onChange={handleInputChange}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filteredBy"
                id="lws-all"
                className="radio"
                checked={formData.filteredBy === "all"}
                onChange={handleInputChange}
                value="all"
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filteredBy"
                id="lws-saved"
                className="radio"
                checked={formData.filteredBy === "saved"}
                onChange={handleInputChange}
                value="saved"
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
