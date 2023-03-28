import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  searchTerm: "",
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded: (state, action) => {
      state.projects.push(action.payload);
    },
    projectRemoved: (state, action) => {
      state.projects = state.projects.filter((p) => p !== action.payload);
    },
    searchTermUpdated: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { projectAdded, projectRemoved, searchTermUpdated } =
  projectsSlice.actions;
export default projectsSlice.reducer;
