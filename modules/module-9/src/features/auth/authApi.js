import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      // endpoints go here
      register: builder.mutation({
         query: (data) => ({
            url: `/register`,
            method: "POST",
            body: data,
         }),
         async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
               const result = await queryFulfilled;
               localStorage.setItem(
                  "lwsChatApp2Auth",
                  JSON.stringify({
                     accessToken: result.data.accessToken,
                     user: result.data.user,
                  })
               );
               dispatch(
                  userLoggedIn({
                     accessToken: result.data.accessToken,
                     user: result.data.user,
                  })
               );
            } catch (error) {
               console.log(error);
            }
         },
      }),
      login: builder.mutation({
         query: (data) => ({
            url: `/login`,
            method: "POST",
            body: data,
         }),
         async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
               const result = await queryFulfilled;
               localStorage.setItem(
                  "lwsChatApp2Auth",
                  JSON.stringify({
                     accessToken: result.data.accessToken,
                     user: result.data.user,
                  })
               );
               dispatch(
                  userLoggedIn({
                     accessToken: result.data.accessToken,
                     user: result.data.user,
                  })
               );
            } catch (error) {
               console.log(error);
            }
         },
      }),
   }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
