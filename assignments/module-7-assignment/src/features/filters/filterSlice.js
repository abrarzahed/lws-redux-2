import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "All",
  salaryRange: "Default",
  searchTerm: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    typeChanged: (state, action) => {
      state.type = action.payload;
    },
    salaryRangeChanged: (state, action) => {
      state.salaryRange = action.payload;
    },
    searchTermChanged: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { typeChanged, salaryRangeChanged, searchTermChanged } =
  filterSlice.actions;
