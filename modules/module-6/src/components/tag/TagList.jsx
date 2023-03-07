import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import Tag from "./Tag";

export default function TagList() {
  const dispatch = useDispatch();

  const { isLoading, isError, tags, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isLoading && tags?.length === 0) {
    content = <div className="col-span-12">No tags found</div>;
  }
  if (!isLoading && !isLoading && tags.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} tag={tag} />);
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}
