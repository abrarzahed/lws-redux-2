import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  jobs: [],
  jobToEdit: {},
};

// asynchronous thunks
export const getJobsAsync = createAsyncThunk("jobs/getJobs", async () => {
  const jobs = getJobs();
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getJobsAsync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.jobs = [];
      })
      .addCase(getJobsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(getJobsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = action.payload;
      });
  },
});

export default jobsSlice.reducer;
