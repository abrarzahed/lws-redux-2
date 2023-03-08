import axiosInstance from "../../axios/axios";
export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 4;
  let queryString =
    tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join("&") : "";

  const response = await axiosInstance.get(
    `/videos?${queryString}&id_ne=${id}&_limit=${limit}`
  );
  return response.data;
};
