import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

export const fetchRelatedVideosAsync = createAsyncThunk(
  "RelatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const videos = await getRelatedVideos({ tags, id });
    return videos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state, action) => {
        state.isLoading = true;
        state.videos = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
