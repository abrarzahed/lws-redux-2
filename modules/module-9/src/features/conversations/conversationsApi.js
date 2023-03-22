import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      // endpoints go here
      getConversations: builder.query({
         query: (email) => ({
            url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
         }),
      }),
   }),
});

export const { useGetConversationsQuery } = conversationsApi;
