export default function FilterAndSearch() {
  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
        />
      </div>
      <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1">
        <option>Default</option>
        <option>Salary (Low to High)</option>
        <option>Salary (High to Low)</option>
      </select>
    </div>
  );
}
