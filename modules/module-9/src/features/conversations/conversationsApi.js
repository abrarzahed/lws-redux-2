import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      // endpoints go here
      getConversations: builder.query({
         query: (email) => ({
            url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
         }),
      }),
      getConversation: builder.query({
         query: ({ userEmail, participantEmail }) => ({
            url: `/conversations?participants_like=${userEmail}-${participantEmail}&participants_like=${participantEmail}-${userEmail}`,
         }),
      }),
      addConversation: builder.mutation({
         query: (data) => ({
            url: `/conversations`,
            method: "POST",
            body: data,
         }),
      }),
      editConversation: builder.mutation({
         query: ({ id, data }) => ({
            url: `/conversations/${id}`,
            method: "PATCH",
            body: data,
         }),
      }),
   }),
});

export const {
   useGetConversationsQuery,
   useGetConversationQuery,
   useAddConversationMutation,
   useEditConversationMutation,
} = conversationsApi;
