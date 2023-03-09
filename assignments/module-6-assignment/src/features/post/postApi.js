import axiosInstance from "../../axios/axios";

export const getPost = async (postId) => {
  const response = await axiosInstance.get(`/blogs/${postId}`);
  return response.data;
};
