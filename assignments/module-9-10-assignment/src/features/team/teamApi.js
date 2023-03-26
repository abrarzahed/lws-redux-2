import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints
    getTeam: builder.query({
      query: () => ({
        url: `/team`,
      }),
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
