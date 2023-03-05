const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  video: null,
  error: "",
};

// create async thunk
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const res = await fetch("http://localhost:9000/videos");
  const video = await res.json();
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state, action) => {
        state.loading = true;
        state.video = null;
        state.error = "";
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.video = action.payload;
        state.error = "";
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.video = null;
        state.error = action.error.message;
      });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideo = fetchVideo;
