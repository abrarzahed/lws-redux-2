import GoBack from "../components/GoBack";
import RelatedPostList from "../components/RelatedPostList";
import SinglePostDetail from "../components/SinglePostDetail";

export default function Details() {
  return (
    <>
      <GoBack />
      <section className="post-page-container">
        <SinglePostDetail />
        <RelatedPostList />
      </section>
    </>
  );
}
