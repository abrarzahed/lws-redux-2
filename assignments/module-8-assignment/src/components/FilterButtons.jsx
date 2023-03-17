import { useDispatch, useSelector } from "react-redux";
import { categoryChanged } from "../features/filters/filterSlice";

export default function FilterButtons() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.filters);

  // handle filter change
  const handleFilterChange = (category) => {
    dispatch(categoryChanged(category));
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`lws-filter-btn ${category === "All" && "active-filter"}`}
        onClick={() => handleFilterChange("All")}
      >
        All
      </button>
      <button
        className={`lws-filter-btn ${
          category === "Featured" && "active-filter"
        }`}
        onClick={() => handleFilterChange("Featured")}
      >
        Featured
      </button>
    </div>
  );
}
