import { useDispatch } from "react-redux";
import { searchTermChanged } from "../redux/filter/action";

export default function SearchBook() {
  const dispatch = useDispatch();

  // handle input change
  const handleInputChange = (e) => {
    dispatch(searchTermChanged(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Filter books..."
      className="search"
      id="lws-searchBook"
      onChange={handleInputChange}
    />
  );
}
