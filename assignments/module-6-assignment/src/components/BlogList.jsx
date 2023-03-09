import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../features/posts/postsSlice";
import BlogCard from "./BlogCard";
import Error from "./utils/Error";
import Loader from "./utils/Loader";

export default function BlogList() {
  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.posts
  );
  const { sortedBy, filteredBy } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch, sortedBy, filteredBy]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isLoading && posts?.length === 0) {
    content = <div>No posts found</div>;
  }
  if (!isLoading && !isLoading && posts.length > 0) {
    content = posts
      .filter((post) => {
        if (filteredBy === "all") {
          return true;
        } else if (filteredBy === "saved") {
          return post.isSaved;
        } else {
          return false;
        }
      })
      .map((post) => <BlogCard key={post.id} post={post} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
