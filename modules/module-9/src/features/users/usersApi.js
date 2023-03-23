import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      // endpoints go here
      getUser: builder.query({
         query: (email) => ({
            url: `/users?email=${email}`,
         }),
      }),
   }),
});

export const { useGetUserQuery } = usersApi;
