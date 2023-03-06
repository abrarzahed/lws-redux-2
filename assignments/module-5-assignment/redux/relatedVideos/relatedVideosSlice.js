const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchVideo } = require("../video/videoSlice");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  videos: [],
  error: "",
};

// create async thunk
const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async (tags) => {
    const queryString = tags.map((tag) => `tags_like=${tag}`).join("&");

    const res = await fetch(
      `http://localhost:9000/videos?tags_like=${queryString}`
    );
    const videos = await res.json();
    return videos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state, action) => {
        state.loading = true;
        state.videos = [];
        state.error = "";
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
        state.error = "";
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.videos = [];
        state.error = action.error.message;
      });
  },
});

module.exports = relatedVideosSlice.reducer;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
