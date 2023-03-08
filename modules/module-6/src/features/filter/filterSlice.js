import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searchTermUpdated } =
  filterSlice.actions;
