const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sortedBy: "default",
  filteredBy: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sorted: (state, action) => {
      state.sortedBy = action.payload;
    },
    filtered: (state, action) => {
      state.filteredBy = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sorted, filtered } = filterSlice.actions;
