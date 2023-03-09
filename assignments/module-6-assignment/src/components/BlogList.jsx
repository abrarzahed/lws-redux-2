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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isLoading && posts?.length === 0) {
    content = <div>No posts found</div>;
  }
  if (!isLoading && !isLoading && posts.length > 0) {
    content = posts.map((post) => <BlogCard key={post.id} post={post} />);
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
