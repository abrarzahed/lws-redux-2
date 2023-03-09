import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedPosts } from "./relatedPostsApi";

const initialState = {
  isLoading: false,
  posts: [],
  isError: false,
  error: "",
};

export const fetchRelatedPostsAsync = createAsyncThunk(
  "relatedPosts/fetchRelatedPosts",
  async ({ tags, id }) => {
    const posts = await getRelatedPosts({ tags, id });
    return posts;
  }
);

const relatedPostsSlice = createSlice({
  name: "relatedPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPostsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.posts = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedPostsSlice.reducer;
