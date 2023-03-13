import axiosInstance from "../../utils/axios";

export const getJobs = async () => {
  const response = await axiosInstance.get("/jobs");
  return response.data;
};

export const addJob = async (jobData) => {
  console.log("add");
  const response = await axiosInstance.post("/jobs", jobData);
  return response.data;
};

export const editJob = async (job) => {
  const response = await axiosInstance.patch(`/jobs/${job.id}`, job);
  return response.data;
};

export const deleteJob = async (id) => {
  await axiosInstance.delete(`/jobs/${id}`);
  return id;
};
