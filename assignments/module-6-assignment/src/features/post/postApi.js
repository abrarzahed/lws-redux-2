import axiosInstance from "../../axios/axios";

export const getPost = async (postId) => {
  const response = await axiosInstance.get(`/blogs/${postId}`);
  return response.data;
};

export const updatePostSaved = async (post) => {
  const response = await axiosInstance.patch(`/blogs/${post?.id}`, {
    ...post,
    isSaved: !post.isSaved,
  });
  return response.data;
};
