import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost, updatePostSaved } from "./postApi";

const initialState = {
  isLoading: false,
  post: {},
  isError: false,
  error: "",
};

export const fetchPostAsync = createAsyncThunk(
  "posts/fetchPost",
  async (blogId) => {
    const post = await getPost(blogId);
    return post;
  }
);

export const updateSaveAsync = createAsyncThunk(
  "post/updateSave",
  async (postToUpdate) => {
    const post = await updatePostSaved(postToUpdate);
    return post;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostAsync.pending, (state, action) => {
        state.isLoading = true;
        state.post = {};
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPostAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchPostAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.post = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateSaveAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
        state.isError = false;
        state.error = "";
      });
  },
});

export default postSlice.reducer;
