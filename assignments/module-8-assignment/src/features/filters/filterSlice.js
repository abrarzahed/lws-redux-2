import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchTermChanged: (state, action) => {
      state.searchTerm = action.payload;
    },
    categoryChanged: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searchTermChanged, categoryChanged } = filterSlice.actions;
