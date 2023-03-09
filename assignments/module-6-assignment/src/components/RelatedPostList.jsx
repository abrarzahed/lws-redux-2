import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPostsAsync } from "../features/relatedPosts/relatedPostssSlice";
import RelatedPostCard from "./RelatedPostCard";
import Error from "./utils/Error";
import Loader from "./utils/Loader";

export default function RelatedPostList({ post = {} }) {
  const { tags, id } = post;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedPostsAsync({ tags, id }));
  }, [dispatch, tags, id]);

  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.relatedPosts
  );

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isLoading && posts?.length === 0) {
    content = <div>No posts found</div>;
  }
  if (!isLoading && !isLoading && posts.length > 0) {
    content = posts.map((post) => (
      <RelatedPostCard key={post.id} post={post} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
