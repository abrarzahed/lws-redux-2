import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers,
});
