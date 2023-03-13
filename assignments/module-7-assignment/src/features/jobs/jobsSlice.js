import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobsApi";

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

export const addJobAsync = createAsyncThunk("jobs/addJob", async (jobData) => {
  const job = addJob(jobData);
  return job;
});

export const editJobAsync = createAsyncThunk(
  "jobs/editJob",
  async (jobData) => {
    const job = editJob(jobData);
    return job;
  }
);

export const deleteJobAsync = createAsyncThunk("jobs/deleteJob", async (id) => {
  const jobId = deleteJob(id);
  return jobId;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    jobToEditSelected: (state, action) => {
      state.jobToEdit = action.payload;
    },
    jobToEditDeselected: (state, action) => {
      state.jobToEdit = {};
    },
  },
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
      })
      .addCase(addJobAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = "";
        state.jobs = [...state.jobs, action.payload];
      })
      .addCase(editJobAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = "";
        state.jobs = state.jobs.map((job) => {
          if (job.id === action.payload.id) {
            return action.payload;
          } else {
            return job;
          }
        });
      })
      .addCase(deleteJobAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = "";
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      });
  },
});

export default jobsSlice.reducer;
export const { jobToEditSelected, jobToEditDeselected } = jobsSlice.actions;
