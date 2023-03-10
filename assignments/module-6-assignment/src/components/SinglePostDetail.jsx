import { useDispatch } from "react-redux";
import {
  updatePostLikesAsync,
  updateSaveAsync,
} from "../features/post/postSlice";

export default function SinglePostDetail({ post = {} }) {
  const { id, title, image, tags, likes, description, isSaved, createdAt } =
    post;
  const dispatch = useDispatch();

  // handleUpdateSave
  const handleUpdateSave = () => {
    dispatch(updateSaveAsync(post));
  };

  // handle update likes
  const handleUpdateLikes = () => {
    dispatch(updatePostLikesAsync(post));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={handleUpdateLikes}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>

          <button
            className={`${isSaved && "active"} save-btn`}
            id="lws-singleSavedBtn"
            onClick={handleUpdateSave}
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
