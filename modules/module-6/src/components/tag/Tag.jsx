import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ tag = {} }) {
  const { tags, searchTerm } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { title } = tag;

  // handle select tag
  const handleSelectTag = (tag) => {
    if (tags.includes(tag)) {
      dispatch(tagRemoved(tag));
    } else {
      dispatch(tagSelected(tag));
    }
  };
  return (
    <div
      className={`${
        tags?.includes(title)
          ? "bg-blue-600 text-white"
          : "bg-blue-100 text-blue-600"
      }  px-4 py-1 rounded-full cursor-pointer`}
      onClick={() => handleSelectTag(title)}
    >
      {title}
    </div>
  );
}
