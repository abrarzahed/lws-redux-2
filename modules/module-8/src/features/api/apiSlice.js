import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const queryString = title
          .split(" ")
          .map((tag) => `title_like=${tag}`)
          .join("&");
        return `/videos?${queryString}&_limit=4`;
      },
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery } =
  apiSlice;
