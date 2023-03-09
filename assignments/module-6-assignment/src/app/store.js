import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/post/postSlice";
import relatedPostsReducer from "../features/relatedPosts/relatedPostssSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    relatedPosts: relatedPostsReducer,
    filters: filterReducer,
  },
});
