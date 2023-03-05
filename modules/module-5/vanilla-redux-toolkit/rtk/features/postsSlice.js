const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// create async thunk
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
        state.posts = [];
        state.error = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
