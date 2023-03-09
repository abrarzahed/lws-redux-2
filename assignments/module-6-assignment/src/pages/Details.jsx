import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import RelatedPostList from "../components/RelatedPostList";
import SinglePostDetail from "../components/SinglePostDetail";
import Error from "../components/utils/Error";
import Loader from "../components/utils/Loader";
import { fetchPostAsync } from "../features/post/postSlice";

export default function Details() {
  const { blogId } = useParams();
  const dispatch = useDispatch();

  const { isLoading, isError, error, post } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(fetchPostAsync(blogId));
  }, [dispatch, blogId]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isLoading && !post?.id) {
    content = <div>No post found</div>;
  }
  if (!isLoading && !isLoading && post?.id) {
    content = (
      <section className="post-page-container">
        <SinglePostDetail post={post} />
        <RelatedPostList post={post} />
      </section>
    );
  }

  return (
    <>
      <GoBack />
      {content}
    </>
  );
}
