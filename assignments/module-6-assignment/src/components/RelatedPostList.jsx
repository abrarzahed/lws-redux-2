import RelatedPostCard from "./RelatedPostCard";

export default function RelatedPostList() {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        <RelatedPostCard />
      </div>
    </aside>
  );
}
