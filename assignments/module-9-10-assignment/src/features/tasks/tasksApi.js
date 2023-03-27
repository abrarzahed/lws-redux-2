import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints
    getTasks: builder.query({
      query: () => ({
        url: `/tasks`,
      }),
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks/`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const task = await queryFulfilled;
        console.log(task?.data);
        if (task?.data?.id) {
          // Pessimistic  cache update start
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              draft.push(arg);
            })
          );
          // Pessimistic  cache update end
        }
      },
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `/tasks/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            let indexOfTaskToUpdate = draft.indexOf(
              draft.find((t) => t.id == arg.id)
            );
            draft[indexOfTaskToUpdate] = arg;
          })
        );
        // optimistic cache update end
        try {
          const task = await queryFulfilled;
        } catch (error) {
          patchResult1.undo();
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult2 = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            draft = draft.filter((task) => task.id != arg);
            return draft;
          })
        );
        // optimistic cache update end
        try {
          const task = await queryFulfilled;
        } catch (error) {
          patchResult2.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useAddTaskMutation,
} = tasksApi;
