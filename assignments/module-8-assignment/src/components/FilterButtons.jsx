export default function FilterButtons() {
  return (
    <div className="flex items-center space-x-4">
      <button className="lws-filter-btn active-filter">All</button>
      <button className="lws-filter-btn">Featured</button>
    </div>
  );
}
