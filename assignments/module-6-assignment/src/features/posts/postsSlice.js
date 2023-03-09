import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts, updatePostSaved } from "./postsApi";

const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: "",
};

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const posts = await getPosts();
    return posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.posts = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postsSlice.reducer;
