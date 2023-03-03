import { useDispatch, useSelector } from "react-redux";

import { filterChanged } from "../redux/filter/action";

export default function Filters() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.filter);

  // handle update filter
  const handleUpdateFilter = (filter) => {
    dispatch(filterChanged(filter));
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`filter-btn ${filter === "All" && "active-filter"}`}
        id="lws-filterAll"
        onClick={() => handleUpdateFilter("All")}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "Featured" && "active-filter"}`}
        id="lws-filterFeatured"
        onClick={() => handleUpdateFilter("Featured")}
      >
        Featured
      </button>
    </div>
  );
}
