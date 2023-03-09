import axiosInstance from "../../axios/axios";
export const getRelatedPosts = async ({ tags, id }) => {
  const limit = 3;
  let queryString =
    tags.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join("&") : "";

  const response = await axiosInstance.get(
    `/blogs?${queryString}&id_ne=${id}&limit_${limit}`
  );
  return response.data;
};
