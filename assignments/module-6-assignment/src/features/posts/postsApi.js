import axiosInstance from "../../axios/axios";

export const getPosts = async () => {
  const response = await axiosInstance.get(`/blogs`);
  return response.data;
};
