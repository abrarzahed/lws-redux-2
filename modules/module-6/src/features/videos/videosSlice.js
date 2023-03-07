import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getVideos();
    return videos;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state, action) => {
        state.isLoading = true;
        state.videos = [];
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
